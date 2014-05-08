/**
 * @class NavixyPanel.view.tariffs.SetDefault
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.tariffs.SetDefault', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    alias: 'widget.defaulttariff',

    getTitle: function () {
        return _l.tariffs.default_form.title;
    },

    getSaveBtnTitle: function () {
        return _l.tariffs.edit_form.save_btn;
    },

    getClearBtnTitle: function () {
        return null;
    },

    getNWItems: function () {
        var me = this,
            recordData = this.getRecordData(),
            defaultTariff = Ext.getStore('TariffDefaults').findRecord('id', recordData.device_type),
            defaultData = defaultTariff && defaultTariff.getData();

        return [
            {
                xtype: 'container',
                height: 20
            },
            {
                fieldLabel: _l.tariffs.fields.tariff_id,
                name: 'id',
                disabled: true
            },
            {
                fieldLabel: _l.tariffs.fields.name,
                name: 'name',
                disabled: true
            },
            {
                fieldLabel: _l.tariffs.fields.device_type,
                name: 'device_type',
                disabled: true
            },
            {
                fieldLabel: _l.tariffs.fields.activation_bonus,
                name: 'activation_bonus',

                minLength: 1,
                maxLength: 6,
                vtype: 'numeric',

                value: defaultData.activation_bonus || 0
            },
            {
                fieldLabel: _l.tariffs.fields.free_days,
                name: 'free_days',

                minLength: 1,
                maxLength: 6,
                vtype: 'numeric',

                value: defaultData.free_days || 0
            },
            {
                xtype: 'hidden',
                name: 'tariff_id',
                value: recordData.id
            }
        ];
    },

    applyRecordData: function () {
        var recordData = this.getRecordData(),
            fieldName, fieldValue, fieldType;

        if (recordData) {
            this.iterateFields(function(field) {
                fieldName = field.name;
                fieldType = field.getXType();
                fieldValue = recordData[fieldName];

                if (fieldValue !== undefined) {
                    field.setValue(fieldValue);
                }

                if (fieldName === 'device_type') {
                    field.setValue(_l.tariffs.fields.devices[fieldValue]);
                }
            });
        }

        this.getForm().isValid();
    },

    gatSaveTarget: function (value) {
        return 'tariff/' + (value || this.record.getId());
    }
});