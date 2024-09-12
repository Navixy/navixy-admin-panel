/**
 * @class NavixyPanel.view.user.Edit
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.users.Edit', {
    extend: 'NavixyPanel.view.users.AbstractForm',
    alias: 'widget.useredit',

    getTitle: function () {

        var titleTpl = new Ext.XTemplate(
            _l.get('users.edit_form.title'),
            ' #{id}: {last_name} {first_name} {middle_name}'
        );
        return titleTpl.apply(this.getRecordData());
    },

    getSaveBtnTitle: function () {
        return _l.get('users.edit_form.save_btn');
    },

    getClearBtnTitle: function () {
        return false;
    },

    getNEItems: function () {
        var me = this,
            items = this.callParent(arguments);

        return items.concat([
            {
                fieldLabel: _l.get('users.fields.default_tariff') + this.getHintSymbol(_l.get('users.fields.default_tariff_hint')),
                allowBlank: true,
                name: 'default_tariff_id',
                xtype: 'tariffselect',
                emptyText: _l.get('users.fields.default_tariff_empty'),
                emptyValue: {
                    id: null,
                    group_id: 0,
                    name: _l.get('users.fields.default_tariff_empty'),
                    device_type: 'tracker',
                    type: 'monthly',
                    price: 0
                },
                deviceType: 'tracker',
                trackerRecord: this.record
            },
            {
                xtype: 'numberfield',
                fieldLabel: _l.get('users.fields.discount.value'),
                minValue: 0,
                maxValue: 100,
                plugins: {
                    ptype: 'fieldpostfix',
                    postfix: '%'
                },
                allowBlank: true,
                decimalPrecision: 2,
                name: 'discount'
            }, {
                xtype: 'numberfield',
                fieldLabel: _l.get('users.fields.discount.min_trackers'),
                allowBlank: true,
                minValue: 0,
                maxValue: 2147483647,
                allowDecimals: false,
                name: 'discount_min_trackers'
            }, {
                xtype: 'datefield',
                fieldLabel: _l.get('users.fields.discount.end_date'),
                emptyText: _l.get('users.fields.discount.permanent'),
                allowBlank: true,
                submitFormat: 'Y-m-d',
                name: 'discount_end_date'
            }, {
                xtype: 'button',
                baseCls: 'href-btn',
                text: _l.get('users.fields.discount.set_permanent'),
                maxWidth: 200,
                margin: '0 0 0 205',
                handler: function (btn) {
                    btn.up().down('datefield[name=discount_end_date]').setValue('');
                }
            }
        ],
            this.getUISettingsItems(),
            [
                {
                    xtype: 'container',
                    cls: 'block_header',
                    margin: '20 0 10 0',
                    html: _l.get('settings.security.title'),
                },
                {
                    xtype: 'checkbox',
                    name: 'mfa_allowed',
                    boxLabel: _l.get('settings.security.2fa.title'),
                    checked: this.record.get('mfa_allowed'),
                    scope: this,
                    handler: function (_, value) {
                        this.record.set('mfa_allowed', value);
                    },
                },
            ]
        )
    },

    getNWItems: function () {
        var config = this.callParent(arguments);

        return [
            config[0],
            config[1],
            config[4],
            config[config.length - 2],
            config[config.length - 1]
        ];
    },

    afterSave: function (value) {
        this.on('hide', function () {
            this.getForm().reset();
        }, this);

        this.backAfterSave(value);
    },
});
