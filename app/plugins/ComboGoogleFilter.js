/**
 * @class NavixyPanel.plugins.FieldPrefix
 * @extends Ext.Base
 */

Ext.define('NavixyPanel.plugins.ComboGoogleFilter', {
    alias: 'plugin.googlefilter',
    keys: ['google', 'roadmap', 'satellite', 'hybrid'],
    tpl: null,
    showErrors: true,
    disabled: false,
    hasOnlyOwnKey: false,

    constructor: function (config) {
        Ext.apply(this, config);
    },

    init: function (field) {
        var store = field && field.store;
        this.field = field;
        this.hasPremium = Ext.getStore('Dealer').hasPremiumGis();

        if (this.hasOnlyOwnKey && store) {
            try {
                this.keys.splice(0, 1, 'fake_google');
                store.findRecord('type', 'google').set('type', 'fake_google');
                store.add({
                    type: 'google',
                    name: _l.get('premium_gps_has_own_key')
                });
            } catch (e) {
                console.log(e.stack);
            }
        }

        if (!this.disabled) {
            this.applyOverrides(field);
            this.applyTpl();
        }
    },

    applyOverrides: function (field) {
        if (field) {
            var me = this,
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
        return value && !(Ext.Array.indexOf(this.keys, Ext.isString(value) && value.toLowerCase()) > -1 && !this.hasPremium);
    }
});