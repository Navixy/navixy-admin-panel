/**
 * @class NavixyPanel.view.settings.components.MobileThemeField
 * @extends Ext.Container
 * Description
 */
Ext.define('NavixyPanel.view.settings.components.MobileThemeField', {
    extend: 'Ext.Container',
    requires: 'NavixyPanel.view.settings.components.MobileThemePicker',
    xtype: 'settings-mobile-theme-field',

    store: null,

    name: null,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent : function(){
        this.items = this.getItems();

        this.callParent(arguments);
    },

    getItems: function () {
        return [
            {
                xtype: 'settings-mobile-theme-picker',
                store: this.store,
                listeners: {
                    select: this.onSelect,
                    scope: this
                }
            },
            {
                xtype: 'hidden',
                name: this.name,
                listeners: {
                    change: this.setDefault,
                    single: true,
                    scope: this
                }
            }
        ]
    },

    onSelect: function (cmd, theme) {
        this.getField().setValue(theme);
        this.fireEvent('select', this, theme);
    },

    setDefault: function (cmd, value) {
        this.getPicker().select(value, false);
    },

    getPicker: function () {
        return this.down('settings-mobile-theme-picker');
    },

    getField: function () {
        return this.down('[name=' + this.name + ']');
    }
});
