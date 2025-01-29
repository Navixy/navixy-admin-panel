/**
 * @class NavixyPanel.view.settings.bill.Bill
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.settings.bill.Bill', {
    extend: 'Ext.Container',
    alias: 'widget.bill-panel',
    padding: '30 600 30 40',
    cls: 'bill-subscription-panel',
    minPaymentSum: 10,

    initComponent: function () {
        this.localePart = _l.get('settings.subscription')

        this.layout = {
            type: 'auto'
        }
        this.items = this.resolveItems();
        this.callParent(arguments);
    },


    resolveItems: function () {
        var dealerData = Ext.getStore('Dealer').getAt(0).getData()
        var localePart = this.localePart
        var currencyTpl = _l.get('currencies_tpls')[dealerData.seller_currency]


        var balance = dealerData.license_balance
        var balanceText = Ext.String.format(localePart.get('current_balance'), Ext.String.format(currencyTpl, balance.toFixed(2)));

        return [{
            xtype: 'component',
            padding: '0',
            html: '<h2>' + localePart.get('pay_with_bill') + '</h2>'
        }, {
            xtype: 'component',
            padding: '10 0',
            html: balanceText
        }, {
            xtype: 'component',
            padding: '10 0',
            html: 'You can make a bank transfer to cover your monthly payment.'
        }]
    }
});
