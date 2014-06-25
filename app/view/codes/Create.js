/**
 * @class NavixyPanel.view.codes.Create
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.codes.Create', {
    extend: 'NavixyPanel.view.codes.AbstractForm',
    alias: 'widget.codescreate',


    getTitle: function () {
        return _l.codes.create_form.title;
    },

    getSaveBtnTitle: function () {
        return _l.codes.create_form.save_btn;
    },

    getNWItems: function () {
        var me = this;

        return [
            {
                xtype: 'container',
                height: 20
            },
            {
                fieldLabel: _l.codes.create_form.new_codes_count,
                name: 'count',

                minLength: 1,
                maxLength: 60,
                vtype: 'numeric',
                value: 0
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

});