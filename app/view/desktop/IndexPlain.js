/**
 * @class NavixyPanel.view.desktop.IndexPlain
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.desktop.IndexPlain', {
    extend: 'Ext.Container',
    alias: 'widget.indexplain',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function () {
        var prices = Ext.getStore('Dealer').getPlainPrices()
        if (prices.min_license_pay || prices.license_price) {
            this.items = [
                {
                    xtype: 'searchform'
                },
                {
                    margin: '20 0 0 0',
                    xtype: 'plain_prices'
                }
            ];
        } else {
            this.items = [
                {
                    xtype: 'searchform'
                },
            ]
        }

        this.callParent(arguments);
    }

});
