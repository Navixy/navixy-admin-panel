/**
 * @class NavixyPanel.store.RouteProviders
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.RouteProviders', {
    extend: 'Ext.data.Store',
    fields: ['type', 'name'],
    constructor: function () {
        this.data = [
            {
                type: 'google',
                name: _l.get('route_providers.google')
            },
            {
                type: 'osrm',
                name: _l.get('route_providers.osrm')
            },
            {
                type: 'progorod',
                name: _l.get('route_providers.progorod')
            }
        ];

        this.callParent(arguments);
    }

});