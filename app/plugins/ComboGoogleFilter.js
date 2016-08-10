/**
 * @class NavixyPanel.plugins.FieldPrefix
 * @extends Ext.Base
 */

Ext.define('NavixyPanel.plugins.ComboGoogleFilter', {
    alias: 'plugin.googlefilter',
    keys: ['google', 'roadmap', 'satellite', 'hybrid'],
    tpl: null,

    constructor: function (config) {
        Ext.apply(this, config);
    },

    init: function (field) {
        this.field = field;
        this.applyTpl();
    },

    applyTpl: function () {
        var me = this,
            enabled = Ext.getStore('Dealer').isPremiumGis(),
            optionName = me.field.valueField,
            displayName = me.field.displayField;

        me.field.tpl = this.tpl || Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<tpl if="this.isEnabled(values)">',
                    '<div class="x-boundlist-item disabled">{', displayName ,'}</div>',
                '<tpl else>',
                    '<div class="x-boundlist-item hidden"></div>',
                    '<div class="x-boundlist-item-disabled">{', displayName ,'}',
                        '<span class="warning">',
                            _l.get('premium_gps_warning_tip'),
                        '</span>',
                    '</div>',
                '</tpl>',
            '</tpl>',
            {
                isEnabled: function (data) {
                    return data[optionName] && !(Ext.Array.indexOf(me.keys, data[optionName]) > -1 && !enabled)
                }
            }
        );
    }
});