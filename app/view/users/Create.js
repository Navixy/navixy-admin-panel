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

        return items.concat([{
            xtype: 'numberfield',
            allowBlank: true,
            fieldLabel: _l.get('users.fields.discount.value'),
            decimalPrecision: 1,
            name: 'discount'
        }, {
            xtype: 'datefield',
            fieldLabel: _l.get('users.fields.discount.end_date'),
            emptyText: _l.get('users.fields.discount.endless'),
            allowBlank: true,
            submitFormat: 'Y-m-d',
            name: 'discount_end_date'
        }, {
            xtype: 'numberfield',
            fieldLabel: _l.get('users.fields.discount.min_trackers'),
            allowBlank: true,
            allowDecimals: false,
            name: 'discount_min_trackers'
        }])
    }
});