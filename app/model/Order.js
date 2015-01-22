/**
 * @class NavixyPanel.model.Order
 * @extends NavixyPanel.model.Abstract
 * Description
 */

Ext.define('NavixyPanel.model.Order', {
    extend: 'NavixyPanel.model.Abstract',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'user_id', type: 'int'},
        {name: 'sum', type: 'float'},
        {name: 'payer', type: 'string'},
        {name: 'recipient', type: 'string'},
        {name: 'contacts', type: 'string'},
        {name: 'place', type: 'string'},
        {name: 'comment', type: 'string'},
        {name: 'status', type: 'string'},

        {name: 'creation_time', type: 'date', dateReadFormat: Ext.util.Format.dateFormatFull}
    ]
});