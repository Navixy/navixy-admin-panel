/**
 * @class NavixyPanel.plugins.FieldPrefix
 * @extends Ext.Base
 */

Ext.define('NavixyPanel.plugins.ComboGoogleFilter', {
    alias: 'plugin.googlefilter',
    keys: ['google', 'roadmap', 'satellite', 'hybrid'],
    tpl: null,
    showErrors: true,

    constructor: function (config) {
        Ext.apply(this, config);
    },

    init: function (field) {
        this.field = field;
        this.isPremium = Ext.getStore('Dealer').isPremiumGis();
        this.applyOverrides(field);
        this.applyTpl();
    },

    applyOverrides: function (field) {
        if (field) {
            var me = this,
                enabled = Ext.getStore('Dealer').isPremiumGis(),
                fieldPrototype = Object.getPrototypeOf(field);

            field.getErrors = function (value) {
                var errors = fieldPrototype.getErrors.apply(field, arguments) || [],
                    rawValue = fieldPrototype.getValue.apply(field);

                if (!Ext.isEmpty(rawValue) && !me.checkPremium(rawValue)) {
                    errors.push(_l.get('premium_gps_warning_error'));
                }

                return me.showErrors ? errors : [];
            };
        }
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
                    return me.checkPremium(data[optionName]);
                }
            }
        );
    },

    checkPremium: function (value) {
        return value && !(Ext.Array.indexOf(this.keys, Ext.isString(value) && value.toLowerCase()) > -1 && !this.isPremium)
    }
});