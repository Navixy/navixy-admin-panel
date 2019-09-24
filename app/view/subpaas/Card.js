Ext.define('NavixyPanel.view.subpaas.Card', {
    extend: 'NavixyPanel.view.components.AbstractCard',
    alias: 'widget.subpaascard',
    stateful: true,
    stateId: 'subpaasCard',
    getItemsConfig: function () {
        if (this.getRecordData() === false) {
            return [{
                xtype: 'panel',
                ui: 'light',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                flex: 1,
                bodyPadding: '10 20',
                title: this.getPanelTitle(),
                items: [{
                    xtype: 'component',
                    html: _l.get('errors.subpaas.252'),
                    style: 'font-size:15px;color: #f44336 !important;',
                    margin: '0 0 10 0'
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'button',
                        text: _l.get('back_form_btn'),
                        ui: 'gray-small',
                        handler: Ext.Nav.back
                    }, {
                        xtype: 'component',
                        flex: 1
                    }]
                }]
            }]
        }

        return this.callParent(arguments)
    },

    getLinks: function () {
        var me = this,
            result = [],
            recordData = this.getRecordData();

        var initialBlock = this.record.isInitialBlock(),
            active = this.record.isActive(),
            canPay = Config.subpaasPay || false;

        if (Ext.checkPermission('subpaas', 'read')) {
            if (active) {
                result.push({
                    html: '<a>' + _l.get('subpaas.card.links.session_text') + '</a>',
                    listeners: {
                        click: {
                            fn: me.fireSubpaasSessionCreate,
                            scope: me
                        }
                    }
                })
            } else {
                result.push({
                    html: ['<a class="x-item-disabled" data-qtip="',
                        _l.get('subpaas.block_status')[recordData.block_type],
                        '">', _l.get('subpaas.card.links.session_text'), '</a>'].join('')
                })
            }
        }


        var paymentStore = Ext.getStore('PaymentSystems')

        if (paymentStore.findExact('type', 'bill') >= 0 && canPay) {
            result.push({
                html: '<a>' + _l.get('subpaas.card.links.invoice_view') + '</a>',
                cls: ['subpaas-pay-action subpaas-pay-action--invoice',
                    !initialBlock ? 'subpaas-pay-action--normal' : ''],
                listeners: {
                    click: {
                        fn: me.fireInvoiceView,
                        scope: me
                    }
                }
            })
        }

        if (initialBlock  && canPay) {
            if (paymentStore.findExact('type', 'bill') >= 0) {
                result.push({
                    html: '<a>' + _l.get('subpaas.card.links.invoice_request') + '</a>',
                    cls: 'subpaas-pay-action subpaas-pay-action--invoice',
                    listeners: {
                        click: {
                            fn: me.fireInvoiceRequest,
                            scope: me
                        }
                    }
                })
            }

            if (paymentStore.findExact('type', 'avangate') >= 0) {
                result.push({
                    html: '<a>' + _l.get('subpaas.card.links.avangate_pay') + '</a>',
                    cls: 'subpaas-pay-action subpaas-pay-action--avanage',
                    listeners: {
                        click: {
                            fn: me.fireSubpaasPay,
                            scope: me
                        }
                    }
                })
            }
        }


        if (Ext.checkPermission('subpaas', 'update')) {
            result.unshift({
                html: ['<a',
                    ' data-qtip="', initialBlock ? _l.get('subpaas.block_status')[recordData.block_type] : '',
                    '">', _l.get('subpaas.card.links.subpaas_change_password'), '</a>',
                    Ext.getHintSymbol(_l.get('subpaas.fields.password_change_tip'))].join(''),
                listeners: {
                    click: {
                        fn: me.fireSubPaasChangePassword,
                        scope: me
                    }
                }
            })


            result.unshift({
                html: ['<a',
                    ' data-qtip="', initialBlock ? _l.get('subpaas.block_status')[recordData.block_type] : '',
                    '">', _l.get('subpaas.card.links.subpaas_edit'), '</a>'],
                listeners: {
                    click: {
                        fn: me.fireSubPaasEdit,
                        scope: me
                    }
                }
            })
        }

        return result
    },

    fireSubpaasSessionCreate: function () {
        this.fireEvent('subpaaspanellogin', this.getSubPaasId())
    },


    getPanelTitle: function () {
        return false
    },

    prepareHeaderData: function () {
        var recordData = this.getRecordData(),
            initialBlock = this.record.isInitialBlock();

        return {
            title: initialBlock ? _l.get('subpaas.payment_wait_text') : recordData.name,
            title_add: initialBlock ? '' : recordData.login,
            main_cls: 'card-header-inner',
            table_cls: 'header-table',
            fields: [
                {
                    title: _l.get('subpaas.fields.subpaas_id'),
                    value: this.getRecordId()
                },
                {
                    title: _l.get('subpaas.fields.title'),
                    value: recordData.title || '—'
                }, {
                    title: _l.get('subpaas.fields.email'),
                    value: recordData.email || '—'
                }, {
                    title: _l.get('subpaas.fields.login'),
                    value: recordData.login || '—'
                }, {
                    title: _l.get('subpaas.fields.link_monitoring'),
                    value: recordData.link_monitoring || '—'
                },
                {
                    title: _l.get('subpaas.fields.block_type'),
                    no_encode: true,
                    value: [
                        '<span class="subpaas-status--' + recordData.block_type + '">',
                        _l.get('subpaas.block_status')[recordData.block_type],
                        '</span>'
                    ].join('')
                },

                {
                    title: _l.get('subpaas.fields.users_count'),
                    value: recordData.users_count
                },
                {
                    title: _l.get('subpaas.fields.active_users_count'),
                    value: recordData.active_users_count
                },
                {
                    title: _l.get('subpaas.fields.trackers_count'),
                    value: recordData.trackers_count
                },
                {
                    title: _l.get('subpaas.fields.active_trackers_count'),
                    value: recordData.active_trackers_count
                }
            ]
        }
    },


    prepareBodyLeftData: function () {
        var recordData = this.getRecordData()

        return {
            main_cls: 'card-body-inner',
            table_cls: 'body-table',
            fields: [
                {
                    title: _l.get('subpaas.fields.creation_date'),
                    value: recordData.creation_date ? Ext.Date.formatISO(recordData.creation_date, Ext.util.Format.dateFormat) : '—'
                }, {
                    title: _l.get('subpaas.fields.jur_name'),
                    value: recordData.jur_name || '—'
                },
                {
                    title: _l.get('subpaas.fields.jur_country'),
                    value: recordData.jur_country || '—'
                },
                {
                    title: _l.get('subpaas.fields.contact_fio'),
                    value: recordData.contact_fio || '—'
                },
                {
                    title: _l.get('subpaas.fields.contact_post'),
                    value: recordData.contact_post || '—'
                },
                {
                    title: _l.get('subpaas.fields.contact_phone'),
                    value: recordData.contact_phone || '—'
                }
            ]
        }
    },

    getSubPaasId: function () {
        return this.record.getId()
    },

    fireSubPaasEdit: function () {
        this.fireEvent('subpaasedit', this.record)
    },

    fireSubPaasChangePassword: function () {
        Ext.Nav.shift('subpaas/' + this.record.getId() + '/change_password')
    },

    toggleActivationPanel: function () {
        this.fireEvent('toggleactivationpanel')
    },

    fireSubpaasPay: function () {
        this.fireEvent('avangate_pay', this.getSubPaasId())
    },

    fireInvoiceView: function () {
        this.fireEvent('invoice_view', this.getSubPaasId())
    },

    fireInvoiceRequest: function () {
        this.fireEvent('invoice_request', this.getSubPaasId())
    }
})












