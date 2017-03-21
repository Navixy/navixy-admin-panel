/**
 * @class NavixyPanel.view.user.TransactionsList
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.users.TransactionsList', {
    extend: 'NavixyPanel.view.components.AbstractList',
    dependencies: ['Lib.momentjs.Moment'],
    alias: 'widget.usertransactions',
    features: [{
        ftype: 'summary'
    }],
    singleCmp: true,

    afterRender: function () {
        this.callParent(arguments);

        this.mon(this.store, 'datachanged', function (store) {
            var summary = this.getFeatureByName('summary');
            if (summary) {
                summary.toggleSummaryRow(store.getCount());
            }
        }, this);
    },

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
                minWidth: 160,
                flex: 1
            },
            {
                text: _l.get('users.transactions.fields.type'),
                dataIndex: 'type',
                renderer: function (value) {
                    return '<div style="white-space:normal !important;">' + _l.get("users.transactions.fields.type_set").get(value) + '</div>';
                },
                sortable: true,
                width: 120
            },
            {
                text: _l.get('users.transactions.fields.subtype'),
                dataIndex: 'subtype',
                renderer: function (value) {
                    return '<div style="white-space:normal !important;">' + _l.get("users.transactions.fields.subtype_set").get(value) + '</div>';
                },
                sortable: true,
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
                width: 60
            },
            {
                text: _l.get('users.transactions.fields.old_bonus'),
                dataIndex: 'old_bonus',
                renderer: function (value) {
                    return Ext.Number.toFixed(value, 2);
                },
                width: 60
            },
            {
                text: _l.get('users.transactions.fields.new_bonus'),
                dataIndex: 'new_bonus',
                renderer: function (value) {
                    return Ext.Number.toFixed(value, 2);
                },
                width: 90
            },
            {
                text: _l.get('users.transactions.fields.amount'),
                dataIndex: 'amount',
                hideable: false,
                renderer: function (value) {
                    return Ext.Number.toFixed(value, 2);
                },
                summaryRenderer: function (value, cell) {
                    var locale = _l.get('users.transactions.fields'),
                        total = {
                            refills: 0,
                            charges: 0
                        };

                    cell.tdCls += 'total-cell';
                    this.store.each(function (record) {
                        var amount = record.get('amount');
                        total[amount < 0 ? 'charges' : 'refills'] += amount;
                    });

                    return [
                        '<div class="total-description">',
                        '<div class="total">' + locale.get('total_refills') + ':</div>',
                        '<div class="total">' + locale.get('total_charges') + ':</div>',
                        '</div>',
                        '<div class="total">' + Ext.Number.toFixed(total.refills, 2) + '</div>',
                        '<div class="total">' + Ext.Number.toFixed(total.charges, 2) + '</div>'
                    ].join('');
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
            to: moment(endCmp.getValue()).endOf('day').format('YYYY-MM-DD HH:mm:ss')
        };
    },

    loadTransactions: function () {
        var form = this.down('form[role=datepicker]');

        if (form && form.isValid()) {
            var me = this,
                store = this.store,
                options = Ext.apply({
                    limit: 1000,
                    user_id: this.getUserId()
                }, this.getPeriod());

            this.mask();

            Ext.API.getUserTransactions({
                params: options,
                callback: function (transactions, limitExceeded) {
                    me.unmask();
                    me.getView().emptyText = '<div class="x-grid-empty">' + me.texts.emptyData + '</div>';
                    transactions.reverse();
                    store.loadData(transactions);
                },
                failure: function () {
                    me.getView().emptyText = '<div class="x-grid-empty">' + me.texts.badRequest + '</div>';
                    me.getView().refresh();
                    me.unmask();
                }
            });
        }
    }

});
