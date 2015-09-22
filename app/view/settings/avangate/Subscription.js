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
            localePart = _l.get('settings.subscription'),
            currencyTpl = _l.get('currencies_tpls')[dealerData.seller_currency],
            hintCmp = {
                xtype: 'component',
                cls: 'subscription_hint',
                margin: '20 0 0 0',
                html: localePart.get('subscription_hint')
            };

        if (dealerData.demo_tariff && !dealerData.paas_activation_date) {
            var tracker_tariff_end_date = Ext.Date.formatISO(dealerData.tracker_tariff_end_date, Ext.util.Format.dateFormat);
            this.items = [{
                xtype: 'component',
                padding: '10 0',
                html: Ext.String.format(localePart.get('activation_hint'), tracker_tariff_end_date)
            }, {
                xtype: 'button',
                height: 30,
                scale: 'small',
                padding: 5,
                text: localePart.get('activation_btn_text'),
                href: this.constructAvangateLink('activation')
            }, hintCmp];
        } else {
            var pendingAmount = dealerData.license_balance < 0 ? -dealerData.license_balance : 0;

            this.items = [{
                xtype: 'component',
                padding: '10 0',
                html: localePart.get('monthly_fee_hint')
            }, {
                xtype: 'component',
                padding: '10 0',
                hidden: !pendingAmount,
                html: Ext.String.format(localePart.get('pending_amount'), Ext.String.format(currencyTpl, pendingAmount))
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
                            minValue: 100,
                            step: 100,
                            value: pendingAmount ? pendingAmount : 100,
                            cls: 'x-field-light',
                            maxWidth: 150,
                            margin: '0 5 0 0'
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