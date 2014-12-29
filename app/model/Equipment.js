/**
 * @class NavixyPanel.Equipment
 * @extends Ext.data.Model
 * Description
 */

Ext.define('NavixyPanel.model.Equipment', {
    extend: 'Ext.data.Model',
    idProperty: 'equip_id',
    apiCall: 'getEquipmentList',
    fields: [
        {
            name: 'equip_id'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'model_name',
            type: 'string'
        },
        {
            name: 'model_code',
            type: 'string'
        },
        {
            name: 'vendor',
            type: 'string'
        }
    ]
});