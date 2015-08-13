/**
 * @class NavixyPanel.store.RoadsSnap
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.RoadsSnap', {
    extend: 'Ext.data.Store',
    fields: ['type', 'name'],
    constructor: function () {
        this.data = [
            {
                type: 'disabled',
                name: _l.get('geolocation.disabled')
            },
            {
                type: 'google',
                name: _l.get('speed_restriction.google')
            }
        ];

        this.callParent(arguments);
    }

});