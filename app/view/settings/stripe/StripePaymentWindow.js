Ext.define('NavixyPanel.view.settings.stripe.StripePaymentWindow', {
    extend: 'Ext.Window',
    alias: 'widget.stripe-payment-window',
    autoShow: true,
    resizable: false,
    closeAction: 'destroy',
    modal: true,
    config: {
        sum: 0,
        submit_btn_text: ''
    },
    width: 600,
    height: 482,
    auto_payment_init_mode: false,
    payment_type: null,
    successFn: Ext.emptyFn,
    initComponent: function () {
        this.optionsRecord = Ext.getStore('PaymentSystems').findRecord('type', 'stripe')
        this.localePart = _l.get('settings.payments')
        this.title = this.localePart.get('stripe.payment_window_title')

        this.loader = {
            url: Ext.Loader.getPath('NavixyPanel.view.settings.stripe').slice(0, -3) + '/form.html',
            renderer: Util.getRemoteTplRenderer(Ext.apply({
                currency: this.optionsRecord.get('currency'),
                sum: this.sum,
                submit_payment: this.submit_btn_text,
                auto_payment_init_mode: this.auto_payment_init_mode
            }, this.localePart.stripe || {})),
            autoLoad: true,
            callback: this.injectStripeJs,
            scope: this,
            ajaxOptions: {
                disableCaching: false
            }
        }
        this.callParent(arguments)
    },

    injectStripeJs: function () {
        Ext.get('stripe-load-mask').addCls('pending')
        if (typeof Stripe == 'undefined') {
            Ext.Loader.loadScriptFile('https://js.stripe.com/v3/', this.makeForm, this.showError, this)
        } else {
            this.makeForm()
        }
    },

    makeForm: function () {
        Ext.get('stripe-load-mask').removeCls('pending')

        var KEY = this.optionsRecord.get('publishable_key')
        this.stripe = Stripe(KEY, {
            betas: ['payment_intent_beta_3']
        })
        this.elements = this.stripe.elements()

        this.registerElements()
        this.addStripeValidation()
        this.addCustomFieldsValidation()
        this.addPayBtnHandler()
        this.addResetAndSuccessBtnHandler()
    },

    registerElements: function () {
        var style = {
            base: {
                backgroundColor: '#eceff1',
                lineHeight: '30px',
                color: '#555',
                fontSize: '13px',
                borderRadius: '4px',
                letterSpacing: '.7px',
                textTransform: 'uppercase',
                '::placeholder': {
                    color: 'rgba(0, 0, 0, 0.4)'
                }
            }
        }
        var cardNumber = this.elements.create('cardNumber', { style: style })
        cardNumber.mount('#stripe-card-number')

        var cardExpiry = this.elements.create('cardExpiry', { style: style })
        cardExpiry.mount('#stripe-card-exp')

        var cardCvc = this.elements.create('cardCvc', { style: style })
        cardCvc.mount('#stripe-card-cvc')

        this.cardElements = [cardNumber, cardExpiry, cardCvc]
    },


    addPayBtnHandler: function () {
        Ext.get('stripe-card-button').on('click', function () {
            this.handlePayment(this.sum)
        }, this)
    },

    addResetAndSuccessBtnHandler: function () {
        Ext.get('stripe-reset-btn').on('click', this.resetForm, this)
        Ext.get('stripe-success-btn').on('click', function () {
            this.successFn()
            this.close()
        }, this)
    },

    resetForm: function () {
        this.cardElements.forEach(function (element) {
            element.clear()
        })

        Ext.get('card-holder').el.dom.value = ''
        this.savedErrors = {}
        Ext.get('stripe-load-mask').removeCls('success')
        Ext.get('stripe-load-mask').removeCls('error')
    },

    isCustomFieldsValid: function () {
        var valid = true
        this.customFieldValidators.forEach(function (item) {
            var errorMessage = item.validator(item.el)

            if (errorMessage) {
                item.el.fireEvent('change')
                valid = false
            }
        })

        return valid
    },


    addCustomFieldsValidation: function () {
        var localePart = this.localePart

        this.customFieldValidators = [
            {
                el: Ext.get('card-holder'),
                validator: function (el) {
                    var value = el.getValue()

                    if (!value) {
                        return localePart.get('stripe.errors.card_holder_required')
                    }

                    return false
                }
            }
        ]

        var me = this
        var customFieldsIndexOffset = this.cardElements.length
        this.customFieldValidators.forEach(function (item, index) {
            item.el.on('change', function () {
                var errorMessage = item.validator(item.el)
                var error = null
                if (errorMessage) {
                    error = { message: errorMessage }
                    item.el.addCls('StripeElement--invalid')
                } else {
                    item.el.removeCls('StripeElement--invalid')
                }
                me.handlerElementsErrors(error, customFieldsIndexOffset + index)
            })
        })
    },

    handlerElementsErrors: function (error, index) {
        if (!this.savedErrors) {
            this.savedErrors = {}
        }

        var savedErrors = this.savedErrors
        var errorBlock = Ext.get('stripe-errors')
        var errorMessage = errorBlock.down('.message')

        if (error) {
            errorBlock.addCls('stripe-visible-error')
            savedErrors[index] = error.message
            errorMessage.setHTML(error.message)
        } else {
            savedErrors[index] = null
            var nextError = Object.keys(savedErrors)
                .sort()
                .reduce(function (maybeFoundError, key) {
                    return maybeFoundError || savedErrors[key]
                }, null)

            if (nextError) {
                errorMessage.setHTML(nextError)
            } else {
                errorBlock.removeCls('stripe-visible-error')
            }
        }
    },

    addStripeValidation: function () {
        var me = this
        this.cardElements.forEach(function (element, idx) {
            element.on('change', function (event) {
                me.handlerElementsErrors(event.error, idx)
            })
        })
    },

    handlePayment: function () {
        if (this.isCustomFieldsValid()) {
            var intentRequired = this.optionsRecord.get('intent_required')
            var me = this
            Ext.get('stripe-load-mask').addCls('pending')
            this.stripe.createToken(this.cardElements[0], {
                name: Ext.get('card-holder').getValue(),
                currency: this.optionsRecord.get('currency')
            }).then(function (result) {
                if (!result.error) {
                    if (me.auto_payment_init_mode) {
                        return me.bindCard(result)
                    }

                    if (intentRequired) {
                        return me.handlePaymentIntent(result)
                    }
                    return me.handlePaymentDirect(result)
                } else {
                    Ext.get('stripe-load-mask').removeCls('pending')
                }
            })
        }
    },

    handleServerErrors: function (error) {
        try {
            var errorObj = JSON.parse(error.responseText)
            var errorCode = errorObj.status.code

            if (this.localePart.stripe.errors_descriptions[errorCode]) {
                Ext.get('stripe-error-message').setHTML(this.localePart.stripe.errors_descriptions[errorCode])
            }
        } catch (e) {
            console.log(error)
        }
        Ext.get('stripe-load-mask').replaceCls('pending', 'error')
    },

    handlePaymentDirect: function (tokenObject) {
        Ext.API.stripeDirectPayment({
            params: {
                amount: this.sum,
                token: tokenObject.token.id
            }
        }).then(function () {
            Ext.get('stripe-load-mask').replaceCls('pending', 'success')
        }).catch(this.handleServerErrors.bind(this))

    },

    bindCard: function (tokenObject) {
        return Ext.API.stripeBindCard({
            params: {
                token: tokenObject.token.id
            }
        }).then(function () {
            Ext.get('stripe-load-mask').replaceCls('pending', 'success')
        }).catch(this.handleServerErrors.bind(this))

    },


    handlePaymentIntent: function (amount, stripe, elements) {
        var me = this

        Ext.API.stripeCreateIntent({
            params: {
                amount: this.sum,
                payment_type: this.payment_type
            },
            callback: function (client_secret) {
                me.stripe.handleCardPayment(
                    client_secret,
                    me.cardElements[0], {
                        source_data: {
                            owner: {
                                name: Ext.get('card-holder').getValue()
                            }
                        }
                    })
                    .then(function (result) {
                        if (result.error) {
                            Ext.get('stripe-error-message').setHTML(result.error.message)
                            Ext.get('stripe-load-mask').replaceCls('pending', 'error')
                        } else {
                            Ext.get('stripe-load-mask').replaceCls('pending', 'success')

                        }
                        console.log(result)
                    })
                    .catch(function (error) {
                        Ext.get('stripe-error-message').setHTML(error)
                        Ext.get('stripe-load-mask').replaceCls('pending', 'error')
                    })
            },
            failure: function () {
                this.handleServerErrors.bind(this)
            }
        })


        try {

        } catch (error) {
            Ext.get('payment-result').setHTML(error)
        }
    }
})
