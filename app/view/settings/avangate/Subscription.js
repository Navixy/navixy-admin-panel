/**
 * @class NavixyPanel.view.settings.avangate.Subscription
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.settings.avangate.Subscription', {
    extend: 'Ext.Container',
    alias: 'widget.avangate-panel',
    padding: 20,
    requires: ['NavixyPanel.plugins.FieldPostfix'],
    initComponent: function () {
        this.title = 'Subscription';

        this.resolveItems();
        this.callParent(arguments);
    },

    constructAvangateLink: function (type, data) {
        var avangateConfig = Config.avangateLinks;

        try {
            return new Ext.Template(avangateConfig.linkTpls[type]).apply(Ext.apply(avangateConfig, data || {}));
        } catch (e) {
            console.log('Link construction fail', e);
            return null;
        }
    },

    resolveItems: function () {
        var dealerData = Ext.getStore('Dealer').getAt(0).getData(),
            demo_ends = Ext.Date.formatISO(dealerData.demo_ends, Ext.util.Format.dateFormat),
            localePart = _l.get('settings.subscription'),
            currency = '$',
            hintCmp = {
                xtype: 'component',
                cls: 'subscription_hint',
                margin: '20 0 0 0',
                html: localePart.get('subscription_hint')
            };
        console.log('TODO: add here a dealer seller currency');
        console.log('TODO: add here a dealer licence_balance');

        if (dealerData.demo_ends) {
            this.items = [{
                xtype: 'component',
                padding: '10 0',
                html: Ext.String.format(localePart.get('activation_hint'), demo_ends)
            }, {
                xtype: 'button',
                height: 30,
                scale: 'small',
                padding: 5,
                text: localePart.get('activation_btn_text'),
                href: this.constructAvangateLink('activation')
            }, hintCmp];
        } else {
            console.log(dealerData.licence_balance);
            this.items = [{
                xtype: 'component',
                padding: '10 0',
                html: Ext.String.format(localePart.get('monthly_fee_hint'), demo_ends)
            }, {
                xtype: 'component',
                padding: '10 0',
                html: Ext.String.format(localePart.get('licence_balance'), dealerData.licence_balance, currency)
            },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'numberfield',
                            name: 'qty',
                            minValue: 0,
                            value: dealerData.licence_balance,
                            cls: 'x-field-light',
                            maxWidth: 150,
                            margin: '0 5 0 0',
                            plugins: [{
                                ptype: 'fieldpostfix',
                                postfix: currency
                            }]
                        },
                        {
                            xtype: 'button',
                            maxWidth: 120,
                            padding: 3,
                            text: localePart.get('monthly_fee_btn_text'),
                            handler: this.redirectToPayForm,
                            scope: this
                        }
                    ]

                }, hintCmp];
        }
    },

    redirectToPayForm: function () {
        window.open(this.constructAvangateLink('monthlyFee', {
                    qty: this.down('numberfield[name=qty]').getValue(),
                    dealer_id: Ext.getStore('Dealer').getAt(0).getId()
                }
            ),
            '_blank')
    }

});