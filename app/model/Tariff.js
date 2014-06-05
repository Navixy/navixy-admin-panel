/**
 * @class NavixyPanel.model.Tariff
 * @extends Ext.data.Model
 * Description
 */

Ext.define('NavixyPanel.model.Tariff', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'group_id', type: 'int'},

        {name: 'price', type: 'int'},
        {name: 'device_limit', type: 'int'},

        {name: 'name', type: 'string'},
        {name: 'device_type', type: 'string'},
        {name: 'store_period', type: 'string'},

        {name: 'active', type: 'boolean'},
        {name: 'has_reports', type: 'boolean'},
        {name: 'proportional_charge', type: 'boolean'},

        {name: 'service_prices', type: 'auto'},

        {name: 'incoming_sms', type: 'int', convert: function (value, record) {return record.pricesConverter(this, value);}},
        {name: 'outgoing_sms', type: 'int', convert: function (value, record) {return record.pricesConverter(this, value);}},
        {name: 'phone_call', type: 'int', convert: function (value, record) {return record.pricesConverter(this, value);}},
        {name: 'service_sms', type: 'int', convert: function (value, record) {return record.pricesConverter(this, value);}},
        {name: 'traffic', type: 'int', convert: function (value, record) {return record.pricesConverter(this, value);}},

        {name: 'searchIndex', convert: function (value, record) {return record.buildSearchIndex();}}
    ],

    fieldForSearch: ['id', 'name'],

    pricesMap: {
        incoming_sms: 'incoming_sms',
        outgoing_sms: 'outgoing_sms',
        phone_call: 'phone_call',
        service_sms: 'service_sms',
        traffic: 'traffic'
    },

    typesMap : {
        'tracker' : [
            'id',
            'group_id',
            'price',
            'device_limit',
            'name',
            'device_type',
            'store_period',
            'active',
            'has_reports',
            'proportional_charge',
            'incoming_sms',
            'outgoing_sms',
            'phone_call',
            'service_sms',
            'traffic'
        ],
        'camera' : [
            'id',
            'group_id',
            'price',
            'name',
            'device_type',
            'active',
            'proportional_charge',
            'incoming_sms',
            'outgoing_sms',
            'phone_call',
            'service_sms',
            'traffic'
        ],
        'socket' : [
            'id',
            'group_id',
            'price',
            'device_limit',
            'name',
            'device_type',
            'store_period',
            'active',
            'has_reports',
            'proportional_charge',
            'incoming_sms',
            'outgoing_sms',
            'phone_call',
            'service_sms',
            'traffic'
        ]
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
            modified = false;

        Ext.iterate(fieldsObj, function (fieldName, fieldValue) {
            if (this.pricesMap[fieldName]) {
                service_prices[this.pricesMap[fieldName]] = fieldValue;
                modified = true;
            }
        }, this);

        fieldsObj.service_prices = service_prices;

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