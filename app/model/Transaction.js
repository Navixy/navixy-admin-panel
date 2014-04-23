/**
 * @class NavixyPanel.Transaction
 * @extends Ext.data.Model
 * Description
 */

Ext.define('NavixyPanel.model.Transaction', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'dealer_id', type: 'int'},
        {name: 'tracker_id', type: 'int'},
        {name: 'user_id', type: 'int'},
        {name: 'tracker_id', type: 'int'},

        {name: 'description', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'subtype', type: 'string'},

        {
            name: 'timestamp',
            type: 'date',
            dateReadFormat: 'Y-m-d H:i:s',
            dateFormat: Ext.util.Format.dateFormat
        },
        {
            name: 'date',
            type: 'date',
            convert: function (value, record) {
                return Ext.Date.formatISO(record.get('timestamp'), "Y-m-d");
            }
        },

        {name: 'amount', type: 'int'},
        {name: 'new_balance', type: 'int'},
        {name: 'old_balance', type: 'int'},

        {name: 'bonus_amount', type: 'int'},
        {name: 'new_bonus', type: 'int'},
        {name: 'old_bonus', type: 'int'}
    ]
});