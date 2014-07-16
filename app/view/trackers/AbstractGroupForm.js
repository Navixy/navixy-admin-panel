/**
 * @class NavixyPanel.view.trackers.AbstractGroupForm
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.trackers.AbstractGroupForm', {
    extend: 'NavixyPanel.view.trackers.AbstractForm',
    record: null,

    hasGridEdit: false,

    getRecordData: function () {
        var result = [];

        Ext.iterate(this.record, function (record) {
            result.push(record.getData());
        }, this);

        return result.length
            ? result
            : false;
    },

    getTrackers: function () {
        var result = [],
            data = this.getRecordData();

        Ext.iterate(data, function (record) {
            result.push(record.id);
        }, this);

        return result;
    },

    createStore: function () {

        var data = [];

        Ext.iterate(this.record, function (record) {
            data.push(record.copy());
        });

        this.store = Ext.create('Ext.data.Store', {
            proxy: 'memory',
            model: 'Tracker',
            autoDestroy: true
        });

        this.store.loadRecords(data);

        return this.store;
    },

    getGridConfig: function () {

        var store = this.createStore(),
            plugins = this.hasGridEdit
                ?
                    [
                        Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 1
                })
                    ]
                : null;

        return {
            xtype: 'grid',
            flex: 1,
            store: store,

            viewConfig: {
                autoScroll: false,
                stripeRows: false,
                deferEmptyText: false,
                enableTextSelection: false
            },

            enableColumnHide: false,
            enableColumnMove: false,
            enableColumnResize: false,

            disableSelection: true,

            columns: [
                {
                    text: _l.trackers.fields.tracker_id,
                    dataIndex: 'id',
                    width: 60
                },
                {
                    header: _l.trackers.fields.label,
                    dataIndex: 'label',
                    flex: 1,
                    field: {
                        allowBlank: false
                    }
                },
                {
                    text: _l.trackers.fields.user_id,
                    dataIndex: 'user_id',
                    width: 120
                },
                {
                    text: _l.trackers.fields.model,
                    dataIndex: 'model',
                    width: 120
                }
            ],
            plugins: plugins
        };
    },


    getTitle: function () {
        return '';
    },

    getSaveBtnTitle: function () {
        return '';
    },

    getGridLabelTip: function () {
        return '';
    },

    getGridLabel: function () {
        return '';
    },

    getNWItems: function () {

        var me = this;

        return [
            {
                xtype: 'container',
                height: 20
            },
            {
                fieldLabel: _l.trackers.fields.owner,
                name: 'user_id',
                xtype: 'userselect',
                hasDefaultValue: false
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                xtype: 'container',
                width: 800,
                cls: 'grid-field',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    {
                        xtype: 'container',
                        width: 210,
                        padding: '3 10 0 0',
                        layout: {
                            type: 'vbox',
                            align: 'right'
                        },
                        items: [
                            {
                                xtype: 'label',
                                text: this.getGridLabel() + ':'
                            },
                            {
                                xtype: 'container',
                                width: 200,
                                cls: 'label-tip',
                                padding: '10 0 0 0',
                                html: this.getGridLabelTip()
                            }
                        ]
                    },
                    this.getGridConfig()
                ]
            }
        ];
    },

    backFromForm: function () {
        this.backAfterSave();
    },

    backAfterSave: function () {
        this.fireEvent('back');
        this.destroy();
    },

    sendForm: function () {
        var form = this.getForm(),
            labels = [];

        if (form.isValid()) {
            this.fireEvent('formsubmit', this, this.getProcessedValues(), this.store.getData());
        }
    }
});