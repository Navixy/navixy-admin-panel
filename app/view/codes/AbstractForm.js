/**
 * @class NavixyPanel.view.codes.AbstractForm
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.codes.AbstractForm', {
    extend: 'NavixyPanel.view.components.AbstractForm',

    requires: ['NavixyPanel.view.widgets.fields.TariffSelect'],

    getTitle: function () {
        return _l.codes.edit_form.title;
    },

    getSaveBtnTitle: function () {
        return _l.codes.edit_form.save_btn;
    },

    getClearBtnTitle: function () {
        return false;
    },

    backFromForm: function () {
        this.backAfterSave();
    },

    backAfterSave: function () {
        this.fireEvent('back');
        this.destroy();
    },

    getNWItems: function () {
        var me = this;

        return [
            {
                xtype: 'container',
                height: 20
            },
            {
                fieldLabel: _l.codes.edit_form.selected_count,
                name: 'count',
                disabled: true
            },
            {
                fieldLabel: _l.codes.edit_form.device_type,
                name: 'device_type',
                disabled: true
            },
            {
                fieldLabel: _l.codes.fields.bonus_amount,
                name: 'bonus_amount',

                minLength: 1,
                maxLength: 60,
                vtype: 'numeric',
                value: 0
            },
            {
                xtype: 'hiddenfield',
                name: 'codes'
            },
            {
                fieldLabel: _l.codes.fields.free_days,
                name: 'free_days',

                maxLength: 6,
                vtype: 'numeric',
                value: 0
            },
            {
                fieldLabel: _l.codes.fields.tariff_name,
                name: 'tariff_id',
                xtype: 'tariffselect',
                deviceType: this.getDevice()
            }
        ];
    },

    getNEItems: function () {
        return [];
    },

    getRecordData: function () {
        var result = [];

        Ext.iterate(this.record, function (record) {
            result.push(record.getData());
        }, this);

        return result.length
            ? result
            : false;
    },

    getCodes: function () {
        var result = [],
            data = this.getRecordData();

        Ext.iterate(data, function (record) {
            result.push(record.code);
        }, this);

        return result;
    },

    getDevice: function () {
        var data = this.getRecordData();

        return data[0]
            ? data[0].device_type
            : false;
    },

    applyRecordData: function () {
        var codesData = this.getCodes(),
            codesType = this.getDevice(),
            codesField = this.down('[name="codes"]'),
            deviceField = this.down('[name="device_type"]'),
            countField = this.down('[name="count"]');


        if (codesData) {
            codesField.setValue(codesData.join(","));
            countField.setValue(codesData.length);
            deviceField.setValue(_l.devices[codesType]);
        }

        this.getForm().isValid();
    }
});