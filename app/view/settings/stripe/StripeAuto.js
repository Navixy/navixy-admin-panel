Ext.define('Cabinet.view.payment.forms.stripe.StripeAuto', {
    extend: 'Cabinet.view.payment.forms.auto.AbstractAuto',
    alias: 'widget.stripe-auto',
    cookiePrefix: 'stripe-',
    autoPaymentMethod: 'stripe',

    initComponent: function () {
        this.optionsRecord = Ext.getStore('PaymentTypes').getById('stripe')

        this.callParent(arguments)
    },

    getAutoPaymentData: function () {
        var paymentData = {
            'type': 'stripe',
            sum: 25,
            month_limit: 50,
            min_balance: 10
        }

        Ext.iterate(paymentData, function (property) {
            var field = this.down('field[name=' + property + ']')
            if (field) {
                paymentData[property] = field.getValue()
            }
        }, this)

        return paymentData
    },

    initAutoPayment: function () {
        this.showActivationPaymentWindow()
        this.callParent(arguments)
    },

    showActivationPaymentWindow: function () {
        Ext.widget('stripe-payment-window', {
            sum: this.optionsRecord.get('auto_payment_init_amount'),
            auto_payment_init_mode: true,
            submit_btn_text: _l.get('cabinet.sections.payment.types.stripe.auto_payment_submit'),
            listeners: {
                close: function () {
                    this.stopWaiting()
                    this.checkAutoPaymentStatus()
                },
                scope: this
            }
        })
    }


})
