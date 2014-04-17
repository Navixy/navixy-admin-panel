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
        {name: 'source', type: 'auto'}
    ]
});