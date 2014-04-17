/**
 * @class NavixyPanel.User
 * @extends Ext.data.Model
 * Description
 */

Ext.define('NavixyPanel.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'dealer_id', type: 'int'},

        {name: 'login', type: 'string'},
        {name: 'first_name', type: 'string'},
        {name: 'middle_name', type: 'string'},
        {name: 'last_name', type: 'string'},

        {name: 'activated', type: 'boolean'},
        {name: 'legal_type', type: 'string'},
        {name: 'tin', type: 'string'},
        {name: 'legal_name', type: 'string'},
        {name: 'iec', type: 'string'},

        {name: 'phone', type: 'string'},
        {name: 'post_country', type: 'string'},
        {name: 'post_index', type: 'string'},
        {name: 'post_region', type: 'string'},
        {name: 'post_city', type: 'string'},
        {name: 'post_street_address', type: 'string'},
        {name: 'registered_country', type: 'string'},
        {name: 'registered_index', type: 'string'},
        {name: 'registered_region', type: 'string'},
        {name: 'registered_city', type: 'string'},
        {name: 'registered_street_address', type: 'string'}
    ]
});