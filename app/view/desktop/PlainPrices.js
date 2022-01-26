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
        var prices = Ext.getStore('Dealer').getPlainPrices(),
            localePart = _l.get('plain_price'),
            currencyTpl = _l.get('currencies_tpls')[prices.currency];
        debugger
        var minLicencePayText = prices.min_license_pay ? '<div>' +
            localePart.get('license_pay') + ': ' +
            '<b>' +Ext.String.format(currencyTpl, prices.min_license_pay) + '</b>' +
            '</div><br/>' : '';
        var pricePerTrackerText = prices.license_price ? '<div>' +
            localePart.get('license_price_per_tracker') + ': ' +
        '<b>' + Ext.String.format(currencyTpl, prices.license_price.toFixed(2)) + '</b>' +
        '</div>' : '';
        this.items = [
            {
                xtype: 'container',
                ui: 'light',
                html: minLicencePayText + pricePerTrackerText
            }
        ];
        this.title = _l.get('exponential.title');
        this.callParent(arguments);
    }
});
