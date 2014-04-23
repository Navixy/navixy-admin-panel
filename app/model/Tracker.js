/**
 * @class NavixyPanel.model.Tracker
 * @extends Ext.data.Model
 * Description
 */

Ext.define('NavixyPanel.model.Tracker', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'group_id', type: 'int'},
        {name: 'user_id', type: 'int'},
        {name: 'dealer_id', type: 'int'},

        {name: 'label', type: 'string'},
        {name: 'creation_date', type: 'string'},

        {name: 'clone', type: 'boolean'},
        {name: 'deleted', type: 'boolean'},
        {name: 'source', type: 'auto'},

        {name: 'source_id', type: 'int', convert: function (value, record) {return record.get('source').id;}},
        {name: 'device_id', type: 'int', convert: function (value, record) {return record.get('source').device_id;}},
        {name: 'tariff_id', type: 'int', convert: function (value, record) {return record.get('source').tariff_id;}},
        {name: 'model', type: 'string', convert: function (value, record) {return record.get('source').model;}},
        {name: 'phone', type: 'string', convert: function (value, record) {return record.get('source').phone;}},
        {name: 'blocked', type: 'boolean', convert: function (value, record) {return record.get('source').blocked;}},
        {name: 'connection_status', type: 'boolean', convert: function (value, record) {return record.get('source').connection_status;}},
        {name: 'creation_date', type: 'date', dateReadFormat: 'Y-m-d H:i:s', convert: function (value, record) {return record.get('source').creation_date;}}
    ]
});