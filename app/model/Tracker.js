/**
 * @class NavixyPanel.model.Tracker
 * @extends NavixyPanel.model.Abstract
 * Description
 */

Ext.define('NavixyPanel.model.Tracker', {
    extend: 'NavixyPanel.model.Abstract',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'group_id', type: 'int'},
        {name: 'user_id', type: 'int'},
        {name: 'dealer_id', type: 'int'},

        {name: 'label', type: 'string'},
        {name: 'model_name', type: 'string'},
        {name: 'comment', type: 'string'},

        {name: 'clone', type: 'boolean'},
        {name: 'deleted', type: 'boolean'},
        {name: 'source', type: 'auto'},
        {name: 'creation_date', type: 'string'},
        {name: 'last_connection_date', type: 'string'},

        {name: 'source_id', type: 'int', convert: function (value, record) {return record.sourceConverter(this, value);}},
        {name: 'device_id', type: 'int', convert: function (value, record) {return record.sourceConverter(this, value);}},
        {name: 'tariff_id', type: 'int', convert: function (value, record) {return record.sourceConverter(this, value);}},
        {name: 'model', type: 'string', convert: function (value, record) {return record.sourceConverter(this, value);}},
        {name: 'phone', type: 'string', convert: function (value, record) {return record.sourceConverter(this, value);}},
        {name: 'blocked', type: 'boolean', convert: function (value, record) {return record.sourceConverter(this, value);}},
        {name: 'connection_status', type: 'boolean', convert: function (value, record) {return record.sourceConverter(this, value);}},
        {name: 'source_creation_date', type: 'date', dateReadFormat: Ext.util.Format.dateFormatFull, convert: function (value, record) {return record.sourceConverter(this, value);}}
    ],

    sourceMap: {
        source_id: 'id',
        device_id: 'device_id',
        tariff_id: 'tariff_id',
        model: 'model',
        phone: 'phone',
        blocked: 'blocked',
        connection_status: 'connection_status',
        source_creation_date: 'creation_date'
    },

    associationsMap: {
        'user_id': 'Users',
        'tariff_id': 'Tariffs'
    },

    sourceConverter: function (field, value) {
        return value !== '' ? value : this.get('source')[this.sourceMap[field.name]];
    },

    getParentUserData: function () {
        var userId = this.get('user_id'),
            users = Ext.getStore('Users'),
            userRecord = users && users.getById(userId);

        return userRecord && userRecord.getData();
    },

    getParentTariffData: function () {
        var tariffId = this.get('tariff_id'),
            tariffs = Ext.getStore('Tariffs'),
            tariffRecord = tariffs && tariffs.getById(tariffId);

        return tariffRecord && tariffRecord.getData();
    },

    set: function () {
        var fields = this.setSource(arguments);
        this.callParent([fields]);
    },

    setSource: function (fields) {
        var fieldsObj = {};

        if (typeof fields[0] === 'string') {
            fieldsObj[fields[0]] = fields[1];
        } else {
            fieldsObj = Ext.apply({}, fields[0]);
        }

        var source = Ext.apply({}, this.get('source')),
            modified = false;

        Ext.iterate(fieldsObj, function (fieldName, fieldValue) {
            if (this.sourceMap[fieldName]) {
                source[this.sourceMap[fieldName]] = fieldValue;
                modified = true;
            }
        }, this);

        fieldsObj.source = source;

        return fieldsObj;
    },

    getSource: function () {
        var result = {},
            data = this.getData();

        Ext.iterate(data, function(fieldName, fieldValue) {
            if (this.sourceMap[fieldName]) {
                result[this.sourceMap[fieldName]] = fieldValue;
            }
        }, this);

        return result;
    },

    getTrackerChanges: function () {
        var changes = this.getChanges(),
            result = {};

        Ext.iterate(changes, function(fieldName, fieldValue) {
            if (!this.sourceMap[fieldName] && fieldName !== 'source') {
                result[fieldName] = fieldValue;
            }
        }, this);

        return Ext.Object.getSize(result) ? result: null;
    },

    getSourceChanges: function () {
        var changes = this.getChanges(),
            result = {};

        Ext.iterate(changes, function(fieldName, fieldValue) {
            if (this.sourceMap[fieldName]) {
                result[this.sourceMap[fieldName]] = fieldValue;
            }
        }, this);

        return Ext.Object.getSize(result) ? result: null;
    },

    isUserChanged: function () {
        var changes = this.getChanges(),
            result = {};

        Ext.iterate(changes, function(fieldName, fieldValue) {
            if (this.sourceMap[fieldName]) {
                result[this.sourceMap[fieldName]] = fieldValue;
            }
        }, this);

        return Ext.Object.getSize(result) ? result: null;
    }
});