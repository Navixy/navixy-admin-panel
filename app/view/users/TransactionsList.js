/**
 * @class NavixyPanel.view.user.TransactionsList
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.users.TransactionsList', {
    extend: 'NavixyPanel.view.components.AbstractList',
    requires: ['NavixyPanel.plugins.pagination.Store'],
    dependencies: ['Lib.momentjs.Moment'],
    alias: 'widget.usertransactions',
    singleCmp: true,
    sortableColumns: false,
    enableColumnHide: false,
    enableColumnResize: false,

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
        this.store = Ext.create('NavixyPanel.plugins.pagination.Store', {
            model: 'NavixyPanel.model.Transaction'
        });
    },

    getColumnsConfig: function () {
        var typeTpl = '{[_l.get("users.transactions.fields.type_set")[values.type] || values.type]}',
            subtypeTpl = '{[_l.get("users.transactions.fields.subtype_set")[values.subtype] || values.subtype]}';

        return [
            {
                text: _l.get('users.transactions.fields.description'),
                dataIndex: 'description',
                hideable: false,
                flex: 1
            },
            {
                text: _l.get('users.transactions.fields.type'),
                dataIndex: 'type',
                renderer: function (value) {
                    return '<div style="white-space:normal !important;">' + _l.get("users.transactions.fields.type_set").get(value) + '</div>';
                },
                width: 120
            },
            {
                text: _l.get('users.transactions.fields.subtype'),
                dataIndex: 'subtype',
                renderer: function (value) {
                    return '<div style="white-space:normal !important;">' + _l.get("users.transactions.fields.subtype_set").get(value) + '</div>';
                },
                width: 120
            },
            {
                text: _l.get('users.transactions.fields.date'),
                dataIndex: 'date',
                width: 90
            },
            {
                text: _l.get('users.transactions.fields.bonus_amount'),
                dataIndex: 'bonus_amount',
                renderer: function (value) {
                    return Ext.Number.toFixed(value, 2);
                },
                width: 80
            },
            {
                text: _l.get('users.transactions.fields.old_bonus'),
                dataIndex: 'old_bonus',
                renderer: function (value) {
                    return Ext.Number.toFixed(value, 2);
                },
                width: 90
            },
            {
                text: _l.get('users.transactions.fields.new_bonus'),
                dataIndex: 'new_bonus',
                renderer: function (value) {
                    return Ext.Number.toFixed(value, 2);
                },
                width: 80
            },
            {
                text: _l.get('users.transactions.fields.amount'),
                dataIndex: 'amount',
                hideable: false,
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
                minWidth: 90
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
                    xtype: 'form',
                    role: 'datepicker',
                    layout: 'hbox',
                    ui: 'light',
                    items: [
                        {
                            xtype: 'datefield',
                            allowBlank: false,
                            width: 100,
                            role: 'period-start',
                            value: moment().subtract('days', 6).toDate(),
                            listeners: {
                                focus: function () {
                                    this.expand();
                                }
                            }
                        },
                        {
                            xtype: 'component',
                            html: '—',
                            padding: '3 7'
                        },
                        {
                            xtype: 'datefield',
                            allowBlank: false,
                            width: 100,
                            role: 'period-end',
                            value: moment().toDate(),
                            validator: function () {
                                var value = this.getValue(),
                                    start = this.previousSibling('datefield[role=period-start]'),
                                    isValid = value && start && value >= start.getValue();

                                return isValid || _l.get('users.transactions.fields.invalid_date');
                            },
                            listeners: {
                                focus: function () {
                                    this.expand();
                                }
                            }
                        }
                    ]
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
                    xtype: 'component',
                    role: 'transactions_summary',
                    tpl: [
                        '<tpl if="hasRecords">',
                        '<div class="transactions-total">',
                        '<p>{[_l.get("users.transactions.fields.total_refills")]}: {[Ext.Number.toFixed(values.refills, 2)]}</p>',
                        '<p>{[_l.get("users.transactions.fields.total_charges")]}: {[Ext.Number.toFixed(values.charges, 2)]}</p>',
                        '</div>',
                        '</tpl>'
                    ],
                    flex: 1
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
            to: moment(endCmp.getValue()).endOf('day').format('YYYY-MM-DD HH:mm:ss')
        };
    },

    loadTransactions: function () {
        var form = this.down('form[role=datepicker]');

        if (form && form.isValid()) {
            var me = this,
                options = Ext.apply({
                    user_id: this.getUserId()
                }, this.getPeriod());

            this.mask();

            Ext.API.getUserTransactions({
                params: options,
                callback: function (transactions, limitExceeded) {
                    me.unmask();
                    me.getView().emptyText = '<div class="x-grid-empty">' + me.texts.emptyData + '</div>';
                    transactions.reverse();
                    me.store.loadData(transactions);
                    me.updateSummary();
                },
                failure: function () {
                    me.getView().emptyText = '<div class="x-grid-empty">' + me.texts.badRequest + '</div>';
                    me.getView().refresh();
                    me.updateSummary();
                    me.unmask();
                }
            });
        }
    },

    updateSummary: function () {
        var summaryCmp = this.down('[role=transactions_summary]'),
            rawStoreData = this.store.getProxy().data,
            data = {
                hasRecords: rawStoreData && rawStoreData.length,
                refills: 0,
                charges: 0
            };

        Ext.each(rawStoreData, function (record) {
            if (Ext.isNumber(record.amount)) {
                data[record.amount < 0 ? 'charges' : 'refills'] += record.amount;
            }
        });

        if (summaryCmp) {
            summaryCmp.update(data);
        }
    }

});
