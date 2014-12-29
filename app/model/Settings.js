/**
 * @class NavixyPanel.Settings
 * @extends Ext.data.Model
 * Description
 */

Ext.define('NavixyPanel.model.Settings', {
    extend: 'NavixyPanel.model.Abstract',
    idProperty: 'id',
    fields: [
        {name: 'service_title', type: 'string'},
        {name: 'domain', type: 'string'},
        {name: 'locale', type: 'string'},
        {name: 'demo_login', type: 'string'},
        {name: 'demo_password', type: 'string'},

        {name: 'maps', type: 'auto'},
        {name: 'default_map', type: 'auto'},
        {name: 'google_client_id', type: 'string'},

        {name: 'allowed_maps', type: 'auto'},
        {name: 'limited_domain', type: 'boolean', default: true},

        {name: 'currency', type: 'string'},
        {name: 'payment_link', type: 'string'},
        {name: 'promo_url', type: 'string'},

        {name: 'email_from', type: 'string'},
        {name: 'email_footer', type: 'string'},
        {name: 'email_special', type: 'string'},
        {name: 'sms_originator', type: 'string'},
        {name: 'caller_id', type: 'string'},

        {name: 'favicon', type: 'string'},
        {name: 'logo', type: 'string'},
        {name: 'login_wallpaper', type: 'string'},

        {name: 'login_footer', type: 'string'},

        {name: 'map_type', type: 'string', convert: function (value, record) {return record.defaultMapConverter(this, value);}},
        {name: 'map_zoom', type: 'string', convert: function (value, record) {return record.defaultMapConverter(this, value);}},
        {name: 'map_location_lat', type: 'string', convert: function (value, record) {return record.defaultMapLocationConverter(this, value);}},
        {name: 'map_location_lng', type: 'string', convert: function (value, record) {return record.defaultMapLocationConverter(this, value);}}
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
        email_from : 'email_from',
        email_footer : 'email_footer',
        email_special : 'email_special',
        sms_originator : 'sms_originator',
        caller_id : 'caller_id'
    },

    defaultMapConverter: function (field, value) {
        return value !== '' ? value : this.get('default_map')[this.defaultMapMap[field.name]] || 0;
    },

    defaultMapLocationConverter: function (field, value) {
        return value !== '' ? value : this.get('default_map').location && this.get('default_map').location[this.defaultMapLocationMap[field.name]] || 0;
    },

    set: function () {
        this.callParent([this.setMapDefaults(arguments)]);
    },

    setMapDefaults: function (fields) {
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

        return fieldsObj;
    },

    getClearMapDefaults: function () {
        var result = {};
        Ext.iterate(this.defaultMapMap, function(fieldName, mapName) {
            result[fieldName] = '';
        }, this);
        Ext.iterate(this.defaultMapLocationMap, function(fieldName, mapName) {
            result[fieldName] = '';
        }, this);
        return result;
    },

    getServiceChanges: function () {
        var changes = this.getChanges(),
            result = {};

        Ext.iterate(changes, function(fieldName, fieldValue) {
            if (!this.notificationMap[fieldName]
                && !this.defaultMapMap[fieldName]
                && !this.defaultMapLocationMap[fieldName] ) {
                result[fieldName] = fieldValue;
            }
        }, this);

        return Ext.Object.getSize(result) ? result: null;
    },

    getNotificationChanges: function () {
        var changes = this.getChanges(),
            result = {};

        Ext.iterate(changes, function(fieldName, fieldValue) {
            if (this.notificationMap[fieldName]) {
                result[fieldName] = fieldValue;
            }
        }, this);

        return Ext.Object.getSize(result) ? result: null;
    },

    getServiceFormatted: function () {
        var data = Ext.apply({}, this.getData()),
            dealer = Ext.getStore('Dealer') && Ext.getStore('Dealer').first();


        Ext.iterate(data, function (field, value) {
            if (
                this.defaultMapMap[field]
                || this.defaultMapLocationMap[field]
                || this.notificationMap[field]
                ) {

                delete data[field];
            }

            if (this.imagesMap[field]) {
                data[field] = dealer.get(field);
            }
        }, this);

        data.maps = Ext.encode(data.maps);
        data.default_map = Ext.encode(data.default_map);

        return data;
    },

    getNotificationFormatted: function () {
        var data = Ext.apply({}, this.getData());

        Ext.iterate(data, function (field, value) {
            if (!this.notificationMap[field]) {
                delete data[field];
            }
        }, this);

        return data;
    }
});