/**
 * @class NavixyPanel.view.desktop.PlainPrices
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.desktop.PlainPrices', {
    extend: 'Ext.form.Panel',
    alias: 'widget.plain_prices',
    layout: {
        type: 'vbox',
        align: 'stretch',
    },

    ui: 'light',

    bodyPadding: 20,

    initComponent: function () {
        var prices = Ext.getStore('Dealer').getPlainPrices();
        var localePart = _l.get('plain_price');
        var currencyTpl = _l.get('currencies_tpls')[prices.currency];
        this.items = [
            {
                xtype: 'container',
                ui: 'light',
                html: '<div>' +
                    localePart.get('license_pay') + ': ' +
                    '<b>' +Ext.String.format(currencyTpl, prices.min_license_pay) + '</b>' +
                    '</div><br/><div>' +
                    localePart.get('license_price_per_tracker') + ': ' +
                    '<b>' + Ext.String.format(currencyTpl, prices.license_price) + '</b>' +
                    '</div>'
            }
        ];

        this.callParent(arguments);
    }
});
