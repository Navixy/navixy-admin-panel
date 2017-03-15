/**
 * @class NavixyPanel.view.bundles.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.reports.active_trackers.List', {
    extend: 'Ext.grid.Panel',
    ui: 'light',
    alias: 'widget.active-trackers-grid',
    store: 'ActiveTrackersStat',
    requires: [
        'NavixyPanel.plugins.grid.ColumnAutoResizer',
        'NavixyPanel.plugins.grid.filter.GridFilterBar',
        'NavixyPanel.view.widgets.DivActionColumn',
        'NavixyPanel.plugins.grid.feature.MultiGroupingSummary'
    ],

    plugins: [
        {
            ptype: 'filterbar',
            updateBuffer: 300,
            showShowHideButton: true,
            renderHidden: false,
            showHideButtonIconCls: 'icon-filter filter-visibility'
        }
    ],

    features: [Ext.create('NavixyPanel.plugins.grid.feature.MultiGrouping', {
        id: 'multi-group',
        groupHeaderTpl: '{name}',
        enableGroupingMenu: false,
        startCollapsed: true
    })],

    viewConfig: {
        autoScroll: false,
        stripeRows: false,
        deferEmptyText: false,
        enableTextSelection: true
    },

    columnLines: true,

    getTopBar: function () {
        return {
            xtype: 'form',
            bodyStyle: 'background-color: transparent',
            layout: {
                type: 'hbox'
            },
            border: 0,
            height: 40,
            ui: 'light',
            padding: '5 0',
            defaults: {
                xtype: 'monthfield',
                submitFormat: 'Y-m',
                editable: false,
                format: 'F Y',
                margin: '0 5 0 0',
                allowBlank: false
            },
            items: [{
                name: 'from',
                listeners: {
                    'change': function (field, value) {
                        var toField = this.up().down('monthfield[name=to]');
                        toField.setMinValue(value);
                        toField.isValid();
                        this.isValid();
                        this.up().getForm().checkValidity();
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
                        var fromField = this.up().down('monthfield[name=from]');
                        fromField.setMaxValue(value);
                        fromField.isValid();
                        this.isValid();
                        this.up().getForm().checkValidity();

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
        };
    },

    applyFilterAndLoad: function (btn) {
        var from = this.down('monthfield[name=from]'),
            to = this.down('monthfield[name=to]');

        this.getStore().loadStat({
            from: from.getSubmitValue(),
            to: to.getSubmitValue()
        });

        btn.disable();
        Ext.defer(function () {
            btn.enable();
        }, 1000);
    },

    addColumnsMenuButton: Ext.emptyFn,

    getColumnsConfig: function () {
        return {
            plugins: [{
                ptype: 'gridautoresizer'
            }],
            defaults: {
                filter: 'disabled'
            },

            items: [{
                xtype: 'divactioncolumn',
                width: 70,
                hideable: false,
                draggable: false,
                groupable: false,
                menuDisabled: true,
                items: [{
                    iconCls: 'open_tracker_tool icon-location',
                    glyph: 1,
                    tooltip: _l.get('reports.active_trackers.open_tracker'),
                    handler: function (grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        Ext.Nav.shift('tracker/' + rec.get('tracker_id'));
                    }
                }]
            }, {
                header: _l.get('reports.active_trackers.month'),
                width: 143,
                groupHeaderTpl: new Ext.XTemplate('{name} (',
                    _l.get('reports.active_trackers.count_label'),
                    ' {[this.getRealActiveCount(values)]})', {
                        getRealActiveCount: function (values) {
                            return values.children.length ? values.children[0].get('amount') : 0;
                        }
                    }
                ),
                renderer: function (yearMonth) {
                    return Ext.Date.format(moment(yearMonth + '-01').toDate(), 'F Y')
                },
                dataIndex: 'month',
                filter: {
                    type: 'disabled',
                    value: _l.get('list.search_title') + ':'
                }

            }, {
                header: _l.get('trackers.fields.user_id'),
                width: 150,
                groupHeaderTpl: ['{columnName}: {name} (',
                                 _l.get('reports.active_trackers.count_label'),
                                 ' {[values.children.length]})'],

                dataIndex: 'user_id',
                filter: {
                    type: 'string',
                    emptyText: _l.get('trackers.fields.user_id'),
                    maskRe: /[0-9]/
                }

            },
                {
                    header: _l.get('trackers.fields.tracker_id'),
                    width: 150,
                    dataIndex: 'tracker_id',
                    filter: {
                        type: 'string',
                        emptyText: _l.get('trackers.fields.tracker_id'),
                        maskRe: /[0-9]/
                    }

                },
                {
                    header: _l.get('trackers.fields.label'),
                    flex: 1,
                    dataIndex: 'label',
                    filter: {
                        type: 'string',
                        emptyText: _l.get('trackers.fields.label')
                    }

                },
                {
                    header: _l.get('trackers.fields.device_id'),
                    flex: 1,
                    dataIndex: 'device_id',
                    filter: {
                        type: 'string',
                        emptyText: _l.get('trackers.fields.device_id')
                    }
                }
            ]
        };
    },

    initComponent: function () {
        this.emptyText = _l.get('reports.active_trackers.empty');

        this.title = _l.get('reports.active_trackers.title');
        this.tbar = this.getTopBar();
        this.height = Ext.getBody().getHeight() - 100;

        this.columns = this.getColumnsConfig();

        this.callParent(arguments);
    },

    afterRender: function () {
        this.getStore().loadStat({
            from: moment().format('YYYY-MM'),
            to: moment().format('YYYY-MM')
        });
        this.callParent(arguments);
    }
});
