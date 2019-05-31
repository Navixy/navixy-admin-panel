/**
 * @class NavixyPanel.view.bundles.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.reports.Panel', {
    extend: 'Ext.Panel',
    alias: 'widget.reports-panel',
    ui: 'light',
    required: ['NavixyPanel.view.reports.active_trackers.SubpaasActiveList'],
    initComponent: function () {
        var newReports = Ext.getStore('Dealer').subpaasReporsAvailable
        if (newReports) {
            this.layout = 'accordion'
        } else {
            this.layout = 'fit'
        }
        this.title = _l.get('reports.active_trackers.title')
        this.height = Ext.getBody().getHeight() - 200
        this.tbar = this.getTopBar()
        this.items = [{
            xtype: 'active-trackers-grid',
            title: newReports ? _l.get('reports.active_trackers.own_devices') : undefined
        }]


        if (newReports) {
            this.items.push({
                xtype: 'active-trackers-grid',
                store: 'SubpaasActiveTrackersStat',
                showTrackerLink: false,
                title: _l.get('reports.active_trackers.subpaas_devices')
            })
        }

        this.callParent(arguments)
    },

    afterRender: function () {
        this.loadStat({
            from: moment().format('YYYY-MM'),
            to: moment().format('YYYY-MM')
        })
        this.callParent(arguments)
    },

    applyFilterAndLoad: function (btn) {
        var from = this.down('monthfield[name=from]'),
            to = this.down('monthfield[name=to]')

        this.loadStat({
            from: from.getSubmitValue(),
            to: to.getSubmitValue()
        })

        btn.disable()
        Ext.defer(function () {
            btn.enable()
        }, 1000)
    },

    loadStat: function (period) {
        Ext.API.getActiveTrackersStat({
            params: period,
            callback: function (response) {
                Ext.getStore('ActiveTrackersStat').loadStatData(response)
                if (Ext.getStore('Dealer').isSubPaasAvailable()) {
                    Ext.getStore('SubpaasActiveTrackersStat').loadStatData(response)
                }
            },
            scope: this
        })
    },

    getTopBar: function () {
        return {
            xtype: 'form',
            bodyStyle: 'background-color: rgba(0,0,10,0.08)',
            layout: {
                type: 'hbox'
            },
            border: 0,
            ui: 'light',
            padding: 5,
            height: 50,
            defaults: {
                xtype: 'monthfield',
                submitFormat: 'Y-m',
                editable: false,
                format: 'F Y',
                margin: '5',
                allowBlank: false
            },
            items: [{
                name: 'from',
                listeners: {
                    'change': function (field, value) {
                        var toField = this.up().down('monthfield[name=to]')
                        toField.setMinValue(value)
                        toField.isValid()
                        this.isValid()
                        this.up().getForm().checkValidity()
                    }
                },
                value: moment().toDate()
            }, {
                xtype: 'component',
                html: '—',
                padding: '3 7'
            }, {
                name: 'to',
                listeners: {
                    'change': function (field, value) {
                        var fromField = this.up().down('monthfield[name=from]')
                        fromField.setMaxValue(value)
                        fromField.isValid()
                        this.isValid()
                        this.up().getForm().checkValidity()

                    }
                },
                value: moment().toDate()
            }, {
                xtype: 'button',
                height: 28,
                text: _l.get('show_btn'),
                margins: '0 0 0 10',
                role: 'period-show',
                formBind: true,
                handler: this.applyFilterAndLoad,
                scope: this
            }]
        }
    }

})
