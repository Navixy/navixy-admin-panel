/**
 * @class NavixyPanel.view.settings.components.ThemeField
 * @extends Ext.Container
 * Description
 */
Ext.define('NavixyPanel.view.settings.components.ThemeField', {
    extend: 'Ext.Container',
    requires: 'NavixyPanel.view.settings.components.ThemePicker',
    xtype: 'settings-theme-field',

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
                xtype: 'settings-theme-picker',
                themes: this.getColorSet(),
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

    getColorSet: function () {
        var result = [],
            defaultTheme = this.store.findRecord('name', 'metromorph'),
            defaultColors = defaultTheme && defaultTheme.get('colors');

        this.store.each(function(record) {
            var colors = record.get('colors');
            if (Ext.isEmpty(colors) && colors.length != 2) {
                colors = defaultColors
            }
            result.push({
                name    : record.get('name'),
                title   : record.get('title'),
                left    : colors[0],
                right   : colors[1]
            })
        });

        return result;
    },

    onSelect: function (cmd, theme) {
        this.getField().setValue(theme);
        this.fireEvent('select', this, theme);
    },

    setDefault: function (cmd, value) {
        this.getPicker().select(value, false);
    },

    getPicker: function () {
        return this.down('settings-theme-picker');
    },

    getField: function () {
        return this.down('[name=color_theme]');
    }
});
