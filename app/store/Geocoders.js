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
                type: 'progorod',
                name: _l.get('geocoders.progorod')
            },
            {
                type: 'osm',
                name: _l.get('geocoders.osm')
            }
        ];

        this.callParent(arguments);
    }

});