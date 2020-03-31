/**
 * @class NavixyPanel.view.settings.stripe.Stripe
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.settings.stripe.Stripe', {
    extend: 'Ext.Container',
    alias: 'widget.stripe-panel',
    padding: '30 600 30 40',
    requires: ['NavixyPanel.plugins.FieldPostfix', 'NavixyPanel.plugins.FieldPrefix', 'NavixyPanel.view.settings.stripe.StripePaymentWindow'],
    cls: 'stripe-subscription-panel',
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
        var dealerData = Ext.getStore('Dealer').getAt(0).getData(),
            localePart = this.localePart,
            currencyTpl = _l.get('currencies_tpls')[dealerData.seller_currency],
            items = [],
            hintCmp = {
                xtype: 'component',
                cls: 'subscription_hint',
                margin: '20 0 0 0',
                padding: 0,
                html: localePart.get(Ext.isNavixy() ? 'subscription_hint' : 'paas_subscription_hint')
            };


        var balance = dealerData.license_balance
        var pendingAmount;

        if (balance < 0) {
            pendingAmount = Math.ceil(-1 * balance)
        } else {
            pendingAmount = dealerData.tariff.min_license_pay ? dealerData.tariff.min_license_pay : 100
        }

        var balanceText = Ext.String.format(localePart.get('current_balance'), Ext.String.format(currencyTpl, dealerData.license_balance.toFixed(2)));

        items = [{
            xtype: 'component',
            padding: '0',
            html: '<h2>' + localePart.get('pay_with_stripe') + '</h2>'
        }, {
            xtype: 'component',
            padding: '10 0',
            html: localePart.get('monthly_fee_hint')
        }, {
            xtype: 'component',
            padding: '10 0',
            html: balanceText
        },
            {
                xtype: 'container',
                padding: 0,
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'numberfield',
                        name: 'qty',
                        minValue: this.minPaymentSum,
                        step: 100,
                        decimalPrecision: 0,
                        value: pendingAmount,
                        cls: 'x-field-light',
                        allowDecimals: false,
                        maxWidth: 150,
                        fixPrecision: function (value) {
                            return Math.ceil(value);
                        },
                        skipFormValidation: true,
                        margin: '0 5 0 0',
                        plugins: this.resolveFieldPlugin(currencyTpl)
                    },
                    {
                        xtype: 'button',
                        maxWidth: 120,
                        height: 29,
                        margin: '-1 0 0 0',
                        scale: 'small',
                        cls: 'x-btn-default-small',
                        text: localePart.get('monthly_fee_btn_text'),
                        handler: this.showStripeWindow,
                        scope: this
                    }
                ]

            }, hintCmp];

        return items;
    },

    resolveFieldPlugin: function (currencyTpl) {
        var currencySign = Ext.String.trim(currencyTpl.replace('{0}', ''));
        return Ext.String.startsWith(currencyTpl, '{0}') ? {
            ptype: 'fieldpostfix',
            postfix: currencySign
        } : {
            ptype: 'fieldprefix',
            prefix: currencySign
        }
    },

    showStripeWindow: function () {
        var qtyField = this.down('numberfield[name=qty]');

        if (qtyField.isValid()) {
            Ext.widget('stripe-payment-window', {
                sum: this.down('numberfield[name=qty]').getValue(),
                payment_type: 'monthly_fee',
                submit_btn_text: this.localePart.get('monthly_fee_btn_text'),
                successFn: function () {
                    let balance = Ext.getStore('Dealer').getAt(0).getData().license_balance

                    if (balance < 0) {
                        window.location.reload()
                    }
                }
            })
        }
    }

});
