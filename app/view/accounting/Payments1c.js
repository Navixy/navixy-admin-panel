/**
 * @class NavixyPanel.view.accounting.Export1c
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.accounting.Payments1c', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    requires: [
        'NavixyPanel.view.widgets.fields.MonthField'
    ],
    alias: 'widget.paymentst1c',

    typesStore: null,

    initComponent: function () {

        this.typesStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name', 'free'],
            data: [
                {type: "", "name": _l.get('accounting.form.payments.ps.default')},
                {type: "cyberplat", "name": _l.get('accounting.form.payments.ps.cyberplat')},
                {type: "deltapay", "name": _l.get('accounting.form.payments.ps.deltapay')},
                {type: "mobile", "name": _l.get('accounting.form.payments.ps.mobile')},
                {type: "mobimoney", "name": _l.get('accounting.form.payments.ps.mobimoney')},
                {type: "rbkmoney", "name": _l.get('accounting.form.payments.ps.rbkmoney')},
                {type: "webmoney", "name": _l.get('accounting.form.payments.ps.webmoney')},
            ]
        });

        this.callParent(arguments);
    },

    getProcessedValues: function () {
        return this.getValues();
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

    isValid: function() {
        var me = this,
            invalid;

        Ext.suspendLayouts();
        invalid = me.getForm().getFields().filterBy(function(field) {
            console.log(field);
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
            afterLabelTextTpl: this.fieldRequiredMark ? new Ext.XTemplate('<tpl if="allowBlank === false"><sup>*</sup>:<tpl else>:</tpl>', { disableFormats: true }) : null,

            ui: 'light'
        };
    },

    getNWItems: function () {
        var me = this;

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
            },
            {
                xtype: 'radiogroup',
                fieldLabel: _l.get('accounting.form.payments.fields.type'),
                columns: 1,
                vertical: true,
                margin: '0 0 10 0',
                ui: 'light',
                items: this.getTypesList()
            }
        ];
    },


    getTypesList: function () {

        var result = [];

        this.typesStore.each(function (typeRecord, index) {
            result.push({
                checked: index === 0,
                boxLabel: typeRecord.get('name'),
                name: 'type',
                inputValue: typeRecord.get('type')
            });
        }, this);

        return result;
    }
});