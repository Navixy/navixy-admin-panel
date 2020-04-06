/**
 * @class NavixyPanel.view.settings.avangate.Subscription
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.settings.avangate.Subscription', {
    extend: 'Ext.Container',
    alias: 'widget.avangate-panel',
    padding: '30 600 30 40',
    requires: ['NavixyPanel.plugins.FieldPostfix', 'NavixyPanel.plugins.FieldPrefix'],
    cls: 'avangate-subscription-panel',
    minPaymentSum: 10,

    initComponent: function () {
        this.title = 'Subscription';
        this.layout = {
            type: 'auto'
        }
        if (!localStorage.getItem('activation_payment_check_needed')) {
            this.items = this.resolveItems();
        } else {
            this.html = this.getAvaitMsg();

        }
        this.callParent(arguments);
    },

    getAvaitMsg: function () {
        return '<div class="loader"></div>' + _l.get('settings.subscription.waiting_activation_fee');
    },

    afterRender: function () {
        this.callParent(arguments);
        if (localStorage.getItem('activation_payment_check_needed')) {
            this.initActivationPaymentCheck();
        }
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

    maybeInitActivationPaymentCheck: function () {
        var dealerData = Ext.getStore('Dealer').getAt(0).getData();

        if (dealerData.demo_tariff && !dealerData.paas_activation_date) {
            localStorage.setItem('activation_payment_check_needed', 1);
            this.initActivationPaymentCheck();
        }
    },

    initActivationPaymentCheck: function () {
        this.removeAll();
        this.update(this.getAvaitMsg());
        var me = this,
            checkInterval = setInterval(Ext.bind(function () {
                Ext.API.getDealerInfo(function (dealerData) {
                    if (dealerData.paas_activation_date) {
                        try {
                            clearInterval(checkInterval);
                            me.update('');
                            Ext.getStore('Dealer').loadData([dealerData]);
                            me.removeAll();
                            me.add(me.resolveItems());
                            localStorage.removeItem('activation_payment_check_needed');
                        } catch (e) {
                            console.log(e.stack);
                        }

                    }
                });
            }, this), 30000);
    },

    resolveItems: function () {
        var dealerData = Ext.getStore('Dealer').getAt(0).getData(),
            localePart = _l.get('settings.subscription'),
            currencyTpl = _l.get('currencies_tpls')[dealerData.seller_currency],
            items = [],
            hintCmp = {
                xtype: 'component',
                cls: 'subscription_hint',
                margin: '20 0 0 0',
                padding: 0,
                html: localePart.get(Ext.isNavixy() ? 'subscription_hint' : 'paas_subscription_hint')
            };

        if (dealerData.demo_tariff && !dealerData.paas_activation_date) {
            var tracker_tariff_end_date = Ext.Date.formatISO(dealerData.tracker_tariff_end_date, Ext.util.Format.dateFormat);
            items = [{
                xtype: 'component',
                padding: '10 0',
                html: Ext.String.format(localePart.get('activation_hint'), tracker_tariff_end_date)
            }, {
                xtype: 'button',
                height: 30,
                scale: 'small',
                padding: 5,
                text: localePart.get('activation_btn_text'),
                handler: this.redirectToPayActivationForm,
                hrefTarget: '_self',
                href: this.constructAvangateLink('activation', {
                    dealer_id: dealerData.id
                })
            }, hintCmp];
        } else {
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
                html: '<h2>' + localePart.get('pay_with_avangate') + '</h2>'
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
                            handler: this.redirectToPayForm,
                            scope: this
                        }
                    ]

                }, hintCmp];
        }

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

    redirectToPayForm: function () {
        var qtyField = this.down('numberfield[name=qty]');

        if (qtyField.isValid()) {
            window.open(this.constructAvangateLink('monthlyFee', {
                    qty: qtyField.getValue(),
                    dealer_id: Ext.getStore('Dealer').getAt(0).getId()
                }
                ),
                '_blank')
        }
    }

});
