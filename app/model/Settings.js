/**
 * @class NavixyPanel.Settings
 * @extends Ext.data.Model
 * Description
 */

Ext.define('NavixyPanel.model.Settings', {
    extend: 'NavixyPanel.model.Abstract',
    idProperty: 'id',
    fields: [
        {
            name: 'service_title',
            type: 'string'
        },
        {
            name: 'domain',
            type: 'string'
        },
        {
            name: 'locale',
            type: 'string'
        },
        {
            name: 'demo_login',
            type: 'string'
        },
        {
            name: 'demo_password',
            type: 'string'
        },

        {
            name: 'maps',
            type: 'auto'
        },
        {
            name: 'default_map',
            type: 'auto'
        },
        {
            name: 'google_client_id',
            type: 'auto'
        },

        {
            name: 'allowed_maps',
            type: 'auto'
        },
        {
            name: 'limited_domain',
            type: 'boolean',
            default: true
        },

        {
            name: 'show_mobile_apps',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'allow_registration',
            type: 'boolean',
            defaultValue: true
        },

        {
            name: 'currency',
            type: 'string'
        },
        {
            name: 'payment_link',
            type: 'string'
        },
        {
            name: 'promo_url',
            type: 'string'
        },

        {
            name: 'email_from',
            type: 'string'
        },
        {
            name: 'email_footer',
            type: 'string'
        },
        {
            name: 'email_special',
            type: 'string'
        },
        {
            name: 'email_special',
            type: 'string'
        },
        {
            name: 'sms_originator',
            type: 'string'
        },
        {
            name: 'caller_id',
            type: 'string'
        },

        {
            name: 'favicon',
            type: 'string'
        },
        {
            name: 'logo',
            type: 'string'
        },
        {
            name: 'login_wallpaper',
            type: 'string'
        },
        {
            name: 'app_logo',
            type: 'string'
        },
        {
            name: 'monitoring_logo',
            type: 'string'
        }, {
            name: 'document_logo',
            type: 'string'
        },

        {
            name: 'login_footer',
            type: 'string'
        },
        {
            name: 'display_release_notes',
            type: 'boolean'
        },
        {
            name: 'no_register_commands',
            type: 'boolean'
        },
        {
            name: 'no_auto_create_rules',
            type: 'boolean'
        },
        {
            name: 'no_auto_create_sensors',
            type: 'boolean'
        },
        {
            name: 'monitoring_logo_clickable',
            type: 'boolean'
        },
        {
            name: 'privacy_policy_link',
            type: 'string'
        }, {
            name: 'tos',
            type: 'string'
        },

        {
            name: 'map_type',
            type: 'string',
            convert: function (value, record) {
                return record.defaultMapConverter(this, value);
            }
        },
        {
            name: 'map_zoom',
            type: 'string',
            convert: function (value, record) {
                return record.defaultMapConverter(this, value);
            }
        },
        {
            name: 'map_location_lat',
            type: 'string',
            convert: function (value, record) {
                return record.defaultMapLocationConverter(this, value);
            }
        },
        {
            name: 'map_location_lng',
            type: 'string',
            convert: function (value, record) {
                return record.defaultMapLocationConverter(this, value);
            }
        },

        {
            name: 'default_user_settings',
            type: 'auto'
        },
        {
            name: 'geocoder',
            type: 'string',
            convert: function (value, record) {
                return record.defaultUserConverter(this, value, 0);
            }
        },
        {
            name: 'route_provider',
            type: 'string',
            convert: function (value, record) {
                return record.defaultUserConverter(this, value, 0);
            }
        },
        {
            name: 'default_user_time_zone',
            type: 'string',
            convert: function (value, record) {
                return record.defaultUserConverter(this, value, 0);
            }
        },
        {
            name: 'date_format',
            type: 'string',
            convert: function (value, record) {
                return record.defaultUserConverter(this, value, 'default');
            }
        },
        {
            name: 'hour_mode',
            type: 'string',
            convert: function (value, record) {
                return record.defaultUserConverter(this, value, 'default');
            }
        },
        {
            name: 'measurement_system',
            type: 'string',
            convert: function (value, record) {
                return record.defaultUserConverter(this, value, 0);
            }
        },
        {
            name: 'translit',
            type: 'string',
            convert: function (value, record) {
                return record.defaultUserConverter(this, value, 0);
            }
        },
        {
            name: 'color_theme',
            type: 'string',
            convert: function (value, record) {
                return Ext.isEmpty(value) ? 'metromorph' : value;
            }
        },
        {
            name: 'app_color_theme',
            type: 'string',
            convert: function (value, record) {
                return Ext.isEmpty(value) ? 'blue_2' : value;
            }
        },
        {
            name: 'geocoders',
            type: 'auto'
        },
        {
            name: 'route_providers',
            type: 'auto'
        },
        {
            name: 'lbs_providers',
            type: 'auto'
        },
        {
            name: 'captcha_provider',
            type: 'string'
        },
        {
            name: 'menu',
            type: 'auto'
        },
        {
            name: 'device_settings_visible',
            type: 'auto',
            convert: function (value, record) {
                if (!Ext.isEmpty(value)) {
                    return value
                }

                return record.get('menu') ? !!record.get('menu').footer_menu.find(function (item) {
                    return item.name === 'configuration'
                }) : false
            }
        },
        {
            name: 'menu_preset_id',
            type: 'auto',
        },
        {
            name: 'mfa_type',
            type: 'string',
            defaultValue: 'disallowed',
        },
        {
            name: 'mfa_factor_types',
            type: 'auto',
            defaultValue: [],
        }
    ],

    imagesMap: {
        favicon: 'favicon',
        logo: 'logo'
    },

    defaultMapMap: {
        map_type: 'type',
        map_zoom: 'zoom'
    },

    defaultMapLocationMap: {
        map_location_lat: 'lat',
        map_location_lng: 'lng'
    },

    notificationMap: {
        email_from: 'email_from',
        email_footer: 'email_footer',
        sms_originator: 'sms_originator',
        caller_id: 'caller_id'
    },

    defaultUserSettingsMap: {
        geocoder: 'geocoder',
        measurement_system: 'measurement_system',
        route_provider: 'route_provider',
        translit: 'translit',
        hour_mode: 'hour_mode',
        date_format: 'date_format'
    },

    constructor: function (data) {
        Ext.getStore('Dealer').setGoogleClientId(data.google_client_id);
        this.callParent(arguments);
    },

    defaultUserConverter: function (field, value, emptyValue) {
        return value !== '' ? value : this.get('default_user_settings')[this.defaultUserSettingsMap[field.name]] || emptyValue;
    },

    defaultMapConverter: function (field, value) {
        return value !== '' ? value : this.get('default_map')[this.defaultMapMap[field.name]] || 0;
    },

    defaultMapLocationConverter: function (field, value) {
        return value !== '' ? value : this.get('default_map').location && this.get('default_map').location[this.defaultMapLocationMap[field.name]] || 0;
    },

    set: function () {
        this.callParent([this.setDefaults(arguments)]);
    },

    setDefaults: function (fields) {
        var fieldsObj = {};

        if (typeof fields[0] === 'string') {
            fieldsObj[fields[0]] = fields[1];
        } else {
            fieldsObj = Ext.apply({}, fields[0]);
        }

        var default_map = Ext.apply({}, this.get('default_map')),
            modified = false;

        if (fieldsObj.default_map) {
            fieldsObj = Ext.apply(fieldsObj, {
                map_type: '',
                map_zoom: '',
                map_location_lat: '',
                map_location_lng: ''
            });
        } else {
            Ext.iterate(fieldsObj, function (fieldName, fieldValue) {
                if (this.defaultMapMap[fieldName]) {
                    default_map[this.defaultMapMap[fieldName]] = fieldValue;
                    modified = true;
                }
                if (this.defaultMapLocationMap[fieldName]) {
                    default_map.location[this.defaultMapLocationMap[fieldName]] = fieldValue;
                    modified = true;
                }
            }, this);

            fieldsObj.default_map = default_map;
        }

        var default_user_settings_map = Ext.apply({}, this.get('default_user_settings'));

        if (fieldsObj.default_user_settings) {
            fieldsObj = Ext.apply(fieldsObj, {
                geocoder: '',
                measurement_system: '',
                translit: ''
            });
        } else {
            Ext.iterate(fieldsObj, function (fieldName, fieldValue) {
                if (this.defaultUserSettingsMap[fieldName]) {
                    default_user_settings_map[this.defaultUserSettingsMap[fieldName]] = fieldValue;
                    modified = true;
                }
            }, this);

            fieldsObj.default_user_settings = default_user_settings_map;
        }

        return fieldsObj;
    },

    getClearMapDefaults: function () {
        var result = {};
        Ext.iterate(this.defaultMapMap, function (fieldName, mapName) {
            result[fieldName] = '';
        }, this);
        Ext.iterate(this.defaultMapLocationMap, function (fieldName, mapName) {
            result[fieldName] = '';
        }, this);
        return result;
    },

    getServiceChanges: function () {
        var changes = this.getChanges(),
            result = {};

        Ext.iterate(changes, function (fieldName, fieldValue) {
            if (!this.notificationMap[fieldName]
                && !this.defaultUserSettingsMap[fieldName]
                && !this.defaultMapMap[fieldName]
                && !this.defaultMapLocationMap[fieldName]) {
                result[fieldName] = fieldValue;
            }
        }, this);

        // Remove empty date and time formats.
        if (result['default_user_settings']) {
            Ext.iterate(result['default_user_settings'], function (fieldName, fieldValue) {
                if (fieldValue === 'default') {
                    delete result['default_user_settings'][fieldName];
                }
            })
        }
        return Ext.Object.getSize(result) ? result : null;
    },

    getNotificationChanges: function () {
        var changes = this.getChanges(),
            result = {};

        Ext.iterate(changes, function (fieldName, fieldValue) {
            if (this.notificationMap[fieldName]) {
                result[fieldName] = fieldValue;
            }
        }, this);

        return Ext.Object.getSize(result) ? result : null;
    },

    getServiceFormatted: function () {
        var data = Ext.apply({}, this.getData()),
            dealer = Ext.getStore('Dealer') && Ext.getStore('Dealer').first();

        Ext.iterate(data, function (field, value) {
            if (
                this.defaultMapMap[field]
                || this.defaultMapLocationMap[field]
                || this.notificationMap[field]
                || this.defaultUserSettingsMap[field]
            ) {

                delete data[field];
            }

            if (this.imagesMap[field]) {
                data[field] = dealer.get(field);
            }
        }, this);

        if (data['allowed_maps']) {
            delete data['allowed_maps'];
        }

        data.maps = Ext.encode(data.maps);
        data.default_map = Ext.encode(data.default_map);

        if (data.google_client_id === null) {
            delete data['google_client_id'];
        }

        if (this.isDomainChanged() && data.google_client_id === '') {
            delete data['google_client_id'];
            this.set('google_client_id', null);
        }
        var geocoderSelect = Ext.getFirst('[role=geocoder_select]');
        var hasGeocoders = geocoderSelect && data.geocoders.filter(function (item) {
            return !!item
        }).length > 0
        data.geocoders = Ext.encode(hasGeocoders ? data.geocoders : []);


        var routeProviderSelect = Ext.getFirst('[role=route_provider_select]');
        var hasRouteProviders = routeProviderSelect && data.route_providers.filter(function (item) {
            return !!item
        }).length > 0
        data.route_providers = Ext.encode(hasRouteProviders ? data.route_providers : []);

        var lbsProviders = Ext.getFirst('[role=lbs_select]');
        var hasLbsProviders = lbsProviders && (lbsProviders.getValue() !== 'disabled')
        data.lbs_providers = Ext.encode(hasLbsProviders ? [lbsProviders.getValue()] : []);
        data.default_user_settings = Ext.encode(data.default_user_settings);

        if (!Ext.getStore('Dealer').getFeature('branding_web')) {
            delete data['color_theme'];
        }

        if (!Ext.getStore('Dealer').getFeature('branding_mobile')) {
            delete data['app_color_theme'];
        }
        return data;
    },

    isEmptyGoogleClientId: function () {
        return !this.get('google_client_id');
    },

    isDomainChanged: function () {
        var changes = this.getServiceChanges();
        return !!(changes && changes.domain);
    },

    getNotificationFormatted: function () {
        var data = Ext.apply({}, this.getData());

        Ext.iterate(data, function (field, value) {
            if (!this.notificationMap[field]) {
                delete data[field];
            }
        }, this);

        return data;
    },

    getDefaultMenu: function () {
        var menu = this.get('menu')

        var deviceSettingsIndex = menu.footer_menu.findIndex(function (item) {
            return item.name === 'configuration'
        })

        if (this.get('device_settings_visible')) {
            if (deviceSettingsIndex < 0) {
                var notificationsIndex = menu.footer_menu.findIndex(function (item) {
                    return item.name === 'notifications'
                })
                menu.footer_menu.splice(notificationsIndex, 1, {
                    name: 'notifications'
                }, {
                    name: 'configuration'
                })
            }
        } else {
            if (deviceSettingsIndex >= 0) {
                menu.footer_menu.splice(deviceSettingsIndex, 1)
            }
        }
        return menu
    },

    getMfaChanges: function () {
        var changes = this.getChanges();

        return {
            type: changes.mfa_type,
            factor_types: changes.mfa_factor_types || [],
        };
    },
});
