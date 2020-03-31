Ext.define('NavixyPanel.view.settings.payments.PaymentsPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.payments-panel',
    cls: 'payments-panel',
    requires: ['NavixyPanel.view.components.AbstractMenu', 'NavixyPanel.view.settings.stripe.Stripe'],
    height: 500,
    initComponent: function () {
        this.title = 'Subscription';

        var dealerData = Ext.getStore('Dealer').getAt(0).getData()

        if (dealerData.demo_tariff && !dealerData.paas_activation_date) {
            this.items = [{
                xtype: 'avangate-panel',
                itemId: 'avangate-part'
            }]
        } else {
            var data = this.getMenuItems()
            this.store = Ext.create('Ext.data.Store', {
                fields: ['text', 'id', 'part'],
                data: data
            })

            this.layout = {
                type: 'card'
            }

            this.dockedItems = {
                dock: 'left',
                width: 200,
                items: [{
                    xtype: 'abstract-menu',
                    defaultPart: data[0].id,
                    cls: 'payments-menu',
                    listeners: {
                        select: function (grid, item) {
                            this.getLayout().setActiveItem(item.getId() + '-part')
                        },
                        scope: this
                    },
                    store: this.store
                }]
            }

            this.items = [{
                xtype: 'avangate-panel',
                itemId: 'avangate-part'
            }, {
                xtype: 'stripe-panel',
                itemId: 'stripe-part'
            }]
        }
        this.callParent(arguments)
    },

    getMenuItems: function () {
        return Ext.getStore('PaymentSystems').getData().reduce(function (items, record) {
            if (record.type !== 'bill') {
                items.push({
                    text: _l.get('settings.payments.type.' + record.type),
                    id: record.type,
                    part: record.type
                })
            }
            return items
        }, [])
    }
})
