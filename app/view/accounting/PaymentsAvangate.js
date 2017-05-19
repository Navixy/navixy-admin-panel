/**
 * @class NavixyPanel.view.accounting.PaymentsAvangate
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.accounting.PaymentsAvangate', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    requires: [
        'NavixyPanel.view.widgets.fields.MonthField',
        'NavixyPanel.view.accounting.AvangateinvalidPayments'
    ],
    alias: 'widget.paymentst_avangate',
    getProcessedValues: function () {
        var result = this.getValues();
        if (result.type === "") {
            delete result.type;
        }
        return result;
    },

    getTitle: function () {
        return false;
    },

    getSaveBtnTitle: function () {
        return _l.get('accounting.form.payments.save_btn');
    },

    getButtons: function () {

        var saveBtn = this.getSaveBtnTitle(),
            result = [];

        if (saveBtn) {
            result.push(
                {
                    text: saveBtn,
                    scale: 'medium',
                    margin: '10 5',
                    handler: Ext.bind(this.sendForm, this)
                }
            );
        }

        return result;
    },

    isValid: function () {
        var me = this,
            invalid;

        Ext.suspendLayouts();
        invalid = me.getForm().getFields().filterBy(function (field) {
            return !field.validate();
        });

        Ext.resumeLayouts(true);
        return invalid.length < 1;
    },

    getFieldDefaults: function () {
        return {
            xtype: 'textfield',
            labelWidth: 200,
            width: 500,

            allowBlank: false,
            msgTarget: 'under',

            labelPad: 10,
            labelAlign: 'right',
            labelSeparator: this.fieldRequiredMark ? '' : ':',
            afterLabelTextTpl: this.fieldRequiredMark ? new Ext.XTemplate('<tpl if="allowBlank === false"><sup>*</sup>:<tpl else>:</tpl>', {disableFormats: true}) : null,

            ui: 'light'
        };
    },

    getNWItems: function () {
        return [
            {
                xtype: 'container',
                layout: 'hbox',
                margin: '30 0 10 0',
                items: [
                    {
                        html: _l.get('accounting.form.payments.fields.date') + ':',
                        xtype: 'container',
                        width: 200,
                        margin: '0 10 0 0',
                        padding: '5 0 0 0',
                        style: {
                            'text-align': 'right'
                        }
                    },
                    {
                        xtype: 'datefield',
                        width: 120,
                        name: 'from',
                        value: Ext.Date.formatISO(moment().subtract('days', 7), "Y-m-d"),
                        format: 'Y-m-d'
                    },
                    {
                        html: '—',
                        xtype: 'container',
                        padding: '3 7'
                    },
                    {
                        xtype: 'datefield',
                        width: 120,
                        name: 'to',
                        value: Ext.Date.formatISO(moment().subtract('days', 1), "Y-m-d"),
                        format: 'Y-m-d'
                    }
                ]
            }, {
                xtype: 'avangate_invalid_payments_grid',
                width: 1200,
                hidden: true
            }

        ];
    }
});