/**
 * @class NavixyPanel.view.users.UserCreate
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.users.Create', {
    extend: 'NavixyPanel.view.users.AbstractForm',
    alias: 'widget.usercreate',
    getNEItems: function () {
        var items = this.callParent(arguments);

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
                allowBlank: true,
                fieldLabel: _l.get('users.fields.discount.value'),
                maxValue: 100,
                minValue: 0,
                decimalPrecision: 1,
                name: 'discount'
            }, {
                xtype: 'datefield',
                fieldLabel: _l.get('users.fields.discount.end_date'),
                emptyText: _l.get('users.fields.discount.permanent'),
                allowBlank: true,
                submitFormat: 'Y-m-d',
                name: 'discount_end_date'
            }, {
                xtype: 'numberfield',
                fieldLabel: _l.get('users.fields.discount.min_trackers'),
                allowBlank: true,
                minValue: 0,
                allowDecimals: false,
                name: 'discount_min_trackers'
            },
        ], this.getUISettingsItems())
    }
});
