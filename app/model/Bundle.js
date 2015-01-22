/**
 * @class NavixyPanel.model.Bundle
 * @extends NavixyPanel.model.Abstract
 * Description
 */

Ext.define('NavixyPanel.model.Bundle', {
    extend: 'NavixyPanel.model.Abstract',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'model_code', type: 'string'},
        {name: 'imei', type: 'float'},
        {name: 'iccid', type: 'string'},

        {name: 'equip_id', type: 'int'},
        {name: 'order_id', type: 'int'},

        {name: 'sim_card', type: 'auto'},

        {name: 'phone', type: 'string', convert: function (value, record) {return record.simConverter(this, value);}},
        {name: 'apn', type: 'string', convert: function (value, record) {return record.simConverter(this, value);}},
        {name: 'phone_iccid', type: 'int', convert: function (value, record) {return record.simConverter(this, value);}},
        {name: 'deleted', type: 'boolean', convert: function (value, record) {return record.simConverter(this, value);}},
        {name: 'blocked', type: 'boolean', convert: function (value, record) {return record.simConverter(this, value);}},
        {name: 'registered', type: 'boolean', convert: function (value, record) {return record.simConverter(this, value);}},

        {name: 'assign_time', type: 'date'}
    ],

    simMap: {
        phone: 'phone',
        apn: 'apn',
        iccid: 'phone_iccid',
        deleted: 'deleted',
        blocked: 'blocked',
        registered: 'registered'
    },

    simConverter: function (field, value) {
        return value !== '' ? value : this.get('sim_card')[this.simMap[field.name]];
    },

    set: function () {
        var fields = this.setSim(arguments);
        this.callParent([fields]);
    },

    setSim: function (fields) {
        var fieldsObj = {};

        if (typeof fields[0] === 'string') {
            fieldsObj[fields[0]] = fields[1];
        } else {
            fieldsObj = Ext.apply({}, fields[0]);
        }

        var sim = Ext.apply({}, this.get('sim_card')),
            modified = false;

        Ext.iterate(fieldsObj, function (fieldName, fieldValue) {
            if (this.simMap[fieldName]) {
                sim[this.simMap[fieldName]] = fieldValue;
                modified = true;
            }
        }, this);

        fieldsObj.sim_card = sim;

        return fieldsObj;
    },

    getSim: function () {
        var result = {},
            data = this.getData();

        Ext.iterate(data, function(fieldName, fieldValue) {
            if (this.simMap[fieldName]) {
                result[this.simMap[fieldName]] = fieldValue;
            }
        }, this);

        return result;
    },

    getSimChanges: function () {
        var changes = this.getChanges(),
            result = {};

        Ext.iterate(changes, function(fieldName, fieldValue) {
            if (this.simMap[fieldName]) {
                result[this.simMap[fieldName]] = fieldValue;
            }
        }, this);

        return Ext.Object.getSize(result) ? result: null;
    }
});