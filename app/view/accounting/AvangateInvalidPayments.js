/**
 * @class Configuration.view.portlets.retranslator.RetranslatorGrid
 * @extends Ext.grid.Panel
 * Description
 */

Ext.define('NavixyPanel.view.accounting.AvangateInvalidPayments', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.avangate_invalid_payments_grid',
    disableSelection: true,
    viewConfig: {
        enableTextSelection: true
    },
    initComponent: function () {
        this.emptyText = 'Все платежи обработаны успешо'
        this.title = "Необработанные платежи"
        this.store = Ext.create('Ext.data.Store', {
            fields: [
                {
                    name: "sale_date",
                    type: 'date',
                    dateReadFormat: 'Y-m-d H:i:s',
                    dateFormat: 'd.m.Y H:i'
                },
                {
                    name: "total"
                }, {
                    name: "commission"
                },

                "order_no",
                "ref_no",
                "first_name",
                "last_name",
                "company", "country",
                "customer_email", "currency", "product_name"],
            data: [{
                "sale_date": "2017-02-03 12:24:48",
                "order_no": "943",
                "first_name": "Antonio",
                "last_name": "Martorell",
                "company": "Kuk Track SA de CV",    //nullable
                "country": "Mexico",
                "customer_email": "antonio@kuktrack.net",
                "currency": "MXN",
                "product_name": "Software Development",
                "total": "2059.80",
                "commission": "150.3654"
            }]
        })

        this.columns = [
            {
                header: 'Номер платежа',
                menuDisabled: true,
                dataIndex: 'ref_no',
                width: 100
            }, {
                header: 'Номер заказа',
                menuDisabled: true,
                dataIndex: 'order_no',
                width: 90
            }, {
                header: 'Дата платежа',
                menuDisabled: true,
                dataIndex: 'sale_date',
                renderer: function (date) {
                    return moment(date).format('DD.MM.YYYY hh:mm')
                },
                width: 120
            }, {
                header: 'Клиент',
                menuDisabled: true,
                dataIndex: 'first_name',
                flex: 1,
                renderer: function (value, meta, record) {
                    var data = record.getData();
                    return [
                        '<div><b>', data.first_name, ' ', data.last_name, '</b></div>',
                        '<div>', data.customer_email, '</div>',
                        data.company ? ('<div>' + data.company + '</div>') : ''
                    ].join('')
                }
            }, {
                header: 'Продукт',
                menuDisabled: true,
                dataIndex: 'product_name',
                flex: 2
            }, {
                header: 'Суммма',
                menuDisabled: true,
                dataIndex: 'total',
                width: 100
            }, {
                header: 'Коммиссия',
                menuDisabled: true,
                dataIndex: 'commission',
                width: 100
            }, {
                header: 'Валюта',
                menuDisabled: true,
                dataIndex: 'currency',
                width: 70
            }, {
                header: 'Страна',
                menuDisabled: true,
                dataIndex: 'country',
                width: 100
            }
        ];
        this.callParent(arguments);
    }

});