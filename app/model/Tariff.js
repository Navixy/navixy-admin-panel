/**
 * @class NavixyPanel.model.Tariff
 * @extends Ext.data.Model
 * Description
 */

Ext.define('NavixyPanel.model.Tariff', {
    extend: 'NavixyPanel.model.Abstract',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'group_id', type: 'int'},

        {name: 'price', type: 'float'},
        {name: 'device_limit', type: 'int'},

        {name: 'name', type: 'string'},
        {name: 'device_type', type: 'string'},
        {name: 'store_period', type: 'string'},
        {name: 'type', type: 'string', defaultValue: 'monthly'},

        {name: 'features', type: 'auto'},
        {name: 'map_filter', type: 'auto'},
        {name: 'maps', type: 'auto', convert: function (value, record) {return record.mapConverter(this, value);}},
        {name: 'maps_exclusion', type: 'boolean', convert: function (value, record) {return record.mapConverter(this, value);}},

        {name: 'active', type: 'boolean'},
        {name: 'has_reports', type: 'boolean'},
        {name: 'proportional_charge', type: 'boolean'},

        {name: 'service_prices', type: 'auto'},

        {name: 'incoming_sms', type: 'float', convert: function (value, record) {return record.pricesConverter(this, value);}},
        {name: 'outgoing_sms', type: 'float', convert: function (value, record) {return record.pricesConverter(this, value);}},
        {name: 'phone_call', type: 'float', convert: function (value, record) {return record.pricesConverter(this, value);}},
        {name: 'service_sms', type: 'float', convert: function (value, record) {return record.pricesConverter(this, value);}},
        {name: 'traffic', type: 'float', convert: function (value, record) {return record.pricesConverter(this, value);}},

        {name: 'currency'}
    ],

    associationsMap: {
        'currency': 'Settings'
    },

    pricesMap: {
        incoming_sms: 'incoming_sms',
        outgoing_sms: 'outgoing_sms',
        phone_call: 'phone_call',
        service_sms: 'service_sms',
        traffic: 'traffic'
    },

    mapsMap: {
        maps: 'values',
        maps_exclusion: 'exclusion'
    },

    typesMap : {
        'tracker' : [
            'id',
            'group_id',
            'price',
            'device_limit',
            'name',
            'device_type',
            'type',
            'store_period',
            'active',
            'has_reports',
            'proportional_charge',
            'incoming_sms',
            'outgoing_sms',
            'phone_call',
            'service_sms',
            'traffic',
            'features',
            'maps',
            'maps_exclusion',
            'currency'
        ],
        'camera' : [
            'id',
            'group_id',
            'price',
            'name',
            'device_type',
            'type',
            'active',
            'proportional_charge',
            'incoming_sms',
            'outgoing_sms',
            'phone_call',
            'service_sms',
            'traffic',
            'features',
            'maps',
            'maps_exclusion',
            'currency'
        ],
        'socket' : [
            'id',
            'group_id',
            'price',
            'device_limit',
            'name',
            'device_type',
            'type',
            'store_period',
            'active',
            'has_reports',
            'proportional_charge',
            'incoming_sms',
            'outgoing_sms',
            'phone_call',
            'service_sms',
            'traffic',
            'features',
            'maps',
            'maps_exclusion',
            'currency'
        ]
    },


    mapConverter: function (field, value) {
        return value !== '' ? value : this.get('map_filter')[this.mapsMap[field.name]] || 0;
    },

    getViewData: function () {
        var data = this.getData(),
            deviceType = data.device_type,
            result = {};

        Ext.iterate(data, function (name, value) {
            if (this.typesMap[deviceType].indexOf(name) > -1) {
                result[name] = value;
            }
        }, this);

        result.isDefault = Ext.getStore('TariffDefaults').isDefaultTariff(this);

        return result;
    },

    pricesConverter: function (field, value) {
        return value !== '' ? value : this.get('service_prices')[this.pricesMap[field.name]] || 0;
    },

    set: function () {
        var fields = this.setPrices(arguments);
        this.callParent([fields]);
    },

    setPrices: function (fields) {
        var fieldsObj = {};

        if (typeof fields[0] === 'string') {
            fieldsObj[fields[0]] = fields[1];
        } else {
            fieldsObj = Ext.apply({}, fields[0]);
        }

        var service_prices = Ext.apply({}, this.get('service_prices')),
            maps = Ext.apply({}, this.get('map_filter')),
            modified = false;

        Ext.iterate(fieldsObj, function (fieldName, fieldValue) {
            if (this.pricesMap[fieldName]) {
                service_prices[this.pricesMap[fieldName]] = fieldValue;
                modified = true;
            }
            if (this.mapsMap[fieldName]) {
                maps[this.mapsMap[fieldName]] = fieldValue;
                modified = true;
            }
        }, this);

        fieldsObj.service_prices = service_prices;

        if (maps.values.join("") === "") {
            maps.values = []
        }

        if (this.get("maps_exclusion") && this.get("maps").length) {
            delete fieldsObj.map_filter;
            delete fieldsObj.maps;
            delete fieldsObj.maps_exclusion;
        } else {
            fieldsObj.map_filter = {
                maps_exclusion: false,
                values : maps.values
            };
            fieldsObj.maps = maps.values;
            fieldsObj.maps_exclusion = false;
        }

        return fieldsObj;
    },

    hasDevices: function () {
        var storeMap = {
                tracker: 'Trackers',
                camera: 'Cameras'
            },
            type = this.get('device_type'),
            store = Ext.getStore(storeMap[type]);

        return store && !!store.findRecord('tariff_id', this.get('id'));
    }
});