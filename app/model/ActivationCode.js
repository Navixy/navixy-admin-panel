/**
 * @class NavixyPanel.model.ActivationCode
 * @extends Ext.data.Model
 * Description
 */

Ext.define('NavixyPanel.model.ActivationCode', {
    extend: 'Ext.data.Model',
    idProperty: 'code',
    apiCall: 'getCodesList',
    fields: [
        {
            name: 'code',
            type: 'string'
        },
        {
            name: 'tariff_id',
            type: 'int'
        },
        {
            name: 'bonus_amount',
            type: 'float'
        },
        {
            name: 'money_amount',
            type: 'float'
        },
        {
            name: 'free_days',
            type: 'int'
        },
        {
            name: 'device_type',
            type: 'string'
        },
        {
            name: 'activated',
            type: 'boolean'
        },
        {
            name: 'activation_date',
            type: 'string'
        },
        {
            name: 'device_id',
            type: 'int'
        },
        {
            name: 'edited',
            type: 'boolean',
            defaultValue: false
        },

        {name: 'searchIndex', convert: function (value, record) {return record.buildSearchIndex();}}
    ],

    fieldForSearch: ['code', 'tariff_id', 'activation_date', 'device_id']
});