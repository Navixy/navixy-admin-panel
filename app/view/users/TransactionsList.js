/**
 * @class NavixyPanel.view.user.TransactionsList
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.users.TransactionsList', {
    extend: 'NavixyPanel.view.components.AbstractList',
    dependencies: ['Lib.momentjs.Moment'],
    alias: 'widget.usertransactions',
    singleCmp: true,

    afterFirstLayout: function () {
        this.loadTransactions();
    },

    getTexts: function () {
        var userData = this.record.getData(),
            title = userData
                ? _l.get('users.transactions.list.title') + ' &nbsp; #' + userData.id + ' ' + userData.first_name + ' ' + userData.middle_name + ' ' + userData.last_name
                : null;

        return {
            emptyData: _l.get('users.transactions.list.empty_text'),
            badRequest: _l.get('wrong_period'),
            panelTitle: title
        };
    },

    initStore: function () {

        this.store = Ext.create('Ext.data.Store', {
            model: 'NavixyPanel.model.Transaction',
            sorters: [
                {
                    property: 'timestamp',
                    direction: 'DESC'
                }
            ],
            pageSize: 100
        });
    },

    getColumnsConfig: function () {
        var typeTpl = '{[_l.get("users.transactions.fields.type_set")[values.type] || values.type]}',
            subtypeTpl = '{[_l.get("users.transactions.fields.subtype_set")[values.subtype] || values.subtype]}';

        return [
            {
                text: _l.get('users.transactions.fields.description'),
                dataIndex: 'description',
                flex: 1
            },
            {
                text: _l.get('users.transactions.fields.type'),
                dataIndex: 'type',
                xtype: 'templatecolumn',
                tpl: typeTpl,
                sortable: true,
                width: 120
            },
            {
                text: _l.get('users.transactions.fields.subtype'),
                dataIndex: 'subtype',
                xtype: 'templatecolumn',
                tpl: subtypeTpl,
                sortable: true,
                width: 120
            },
            {
                text: _l.get('users.transactions.fields.date'),
                dataIndex: 'date',
                width: 90
            },
            {
                text: _l.get('users.transactions.fields.amount'),
                dataIndex: 'amount',
                renderer: function (value) {
                    return Ext.Number.toFixed(value, 2);
                },
                width: 90
            },
            {
                text: _l.get('users.transactions.fields.old_balance'),
                dataIndex: 'old_balance',
                renderer: function (value) {
                    return Ext.Number.toFixed(value, 2);
                },
                width: 90
            },
            {
                text: _l.get('users.transactions.fields.new_balance'),
                dataIndex: 'new_balance',
                renderer: function (value) {
                    return Ext.Number.toFixed(value, 2);
                },
                width: 90
            }
        ];
    },

    getTopBar: function () {

        var barConfig = {
            padding: '3',
            border: 0,
            ui: 'light',
            items: [
                {
                    xtype: 'datefield',
                    width: 100,
                    ui: 'trigger-blue',
                    role: 'period-start',
                    value: Ext.Date.formatISO(moment().subtract('days', 6), "Y-m-d"),
                    listeners: {
                        focus: function () {
                            this.expand();
                        }
                    }
                },
                {
                    html: '—',
                    xtype: 'container',
                    padding: '3 7'
                },
                {
                    xtype: 'datefield',
                    width: 100,
                    ui: 'trigger-blue',
                    role: 'period-end',
                    value: Ext.Date.formatISO(moment().subtract('days', -1), "Y-m-d"),
                    listeners: {
                        focus: function () {
                            this.expand();
                        }
                    }
                },
                {
                    xtype: 'button',
                    height: 28,
                    text: _l.get('show_btn'),
                    margins: '0 0 0 10',
                    role: 'period-show',
                    listeners: {
                        click: {
                            fn: this.loadTransactions,
                            scope: this
                        }
                    }
                },
                {
                    xtype: 'tbfill'
                }
            ]
        };

        return barConfig.items.length ? barConfig : false;
    },

    getUserId: function () {

        return this.record && this.record.getId();
    },

    getPeriod: function () {
        var startCmp = this.down('datefield[role=period-start]'),
            endCmp = this.down('datefield[role=period-end]');

        return {
            from: Ext.Date.formatISO(startCmp.getValue(), "Y-m-d H:i:s"),
            to: Ext.Date.formatISO(endCmp.getValue(), "Y-m-d H:i:s")
        };
    },

    loadTransactions: function () {

        var me = this,
            store = this.store,
            options = Ext.apply({limit: 1000, user_id: this.getUserId()}, this.getPeriod());

        this.mask();

        Ext.API.getUserTransactions({
            params: options,
            callback: function (transactions, limitExceeded) {
                me.unmask();
                me.getView().emptyText = '<div class="x-grid-empty">' + me.texts.emptyData + '</div>';
                store.loadData(transactions);
            },
            failure: function() {
                me.getView().emptyText = '<div class="x-grid-empty">' + me.texts.badRequest + '</div>';
                me.getView().refresh();
                me.unmask();
            }
        });
    }

});
