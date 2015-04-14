/**
 * @class NavixyPanel.Permissions
 * @extends Ext.data.Model
 * Description
 */

Ext.define('NavixyPanel.model.Permissions', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'get_dealer_info',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'create',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'read',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'update',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'delete',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'generate',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'import_payments',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'corrupt',
            type: 'boolean',
            defaultValue: false
        }
    ]
});