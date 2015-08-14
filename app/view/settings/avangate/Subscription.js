/**
 * @class NavixyPanel.view.settings.avangate.Subscription
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.settings.avangate.Subscription', {
    extend: 'Ext.Container',
    alias: 'widget.avangate-panel',
    padding: 20,
    initComponent: function () {
        this.title = 'Subscription';

        this.items = [{
            xtype: 'component',
            padding: '10 0',
            html: 'You are evaluating Navixy ServerMate trial version (valid till <tracker_end_date>). To continue with the commercial version please choose your subscription options and proceed with the activation payment:'
        }, {
            xtype: 'button',
            height: 30,
            scale: 'small',
            padding: 5,
            text: 'Pay activation fee now (500 USD) online',
            href: 'https://secure.avangate.com/order/checkout.php?PRODS=4656455&QTY=1&CART=1&CARD=2&DESIGN_TYPE=1&CURRENCY=USD&SHORT_FORM=1&ORDERSTYLE=nLWo5ZTPiLk='
        }];

        this.callParent(arguments);
    },

    constructAvangateLink: function (type) {
        var avangateConfig = Config.avangateLinks;

        try {
            return Ext.Template(avangateConfig.linkTpls[type], avangateConfig);
        } catch (e) {
            console.log('Link construction fail', e);
            return null;
        }
    },

    resolveItems: function () {
        var dealerData = Ext.getStore('Dealer').getAt(0).getData(),
            demo_ends = Ext.Date.formatISO(dealerData.demo_ends, Ext.util.Format.dateFormat),
            localePart = _l.get('settings.subscription'),
            hintCmp = {
                xtype: 'component',
                cls: 'hint',
                html: localePart.get('subscription_hint')
            };

        if (demo_ends) {
            this.items = [{
                xtype: 'component',
                padding: '10 0',
                html: Ext.String.format(localePart.get('activation_hint'), demo_ends)
            }, {
                xtype: 'button',
                height: 30,
                scale: 'small',
                padding: 5,
                text: 'Pay activation fee now (500 USD) online',
                href: this.constructAvangateLink('activation')
            }, hintCmp];
        } else {

        }
    }

});