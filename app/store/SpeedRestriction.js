/**
 * @class NavixyPanel.store.SpeedRestriction
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.SpeedRestriction', {
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
            },
            {
                type: 'cityguide',
                name: _l.get('speed_restriction.cityguide')
            }
        ];

        this.callParent(arguments);
    }

});