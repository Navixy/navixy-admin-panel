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
            type: 'date',
            convert: function (value, record) {
                return Ext.Date.formatISO(record.get('timestamp'), "Y-m-d H:i:s");
            }
        },
        {
            name: 'device_id',
            type: 'int'
        },
        {
            name: 'edited',
            type: 'boolean',
            defaultValue: false
        }
    ],

    fieldForSearch: ['code', 'tariff_id', 'activation_date', 'device_id']
});