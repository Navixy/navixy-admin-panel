/**
 * @class NavixyPanel.store.Geocoders
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Geocoders', {
    extend: 'Ext.data.Store',
    fields: ['type', 'name'],
    constructor: function () {
        this.data = [
            {
                type: 'google',
                name: _l.get('geocoders.google')
            },
            {
                type: 'osm',
                name: _l.get('geocoders.osm')
            },
            {
                type: 'progorod',
                name: _l.get('geocoders.progorod')
            }
        ];

        this.callParent(arguments);
    },

    handleLabels: function (hasGoogleKey, isPremiumGis) {
        if (hasGoogleKey && !isPremiumGis) {
            this.findRecord('type', 'google').set('name', _l.get('premium_gps_has_own_key'));
        }
        return this;
    }

});