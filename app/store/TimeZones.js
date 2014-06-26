/**
 * @class NavixyPanel.store.TimeZones
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.TimeZones', {
    extend: 'Ext.data.Store',
    fields: ['zone_id', 'description', 'base_offset', 'dst_offset', 'country_code'],
    storeId: 'TimeZones',

    sorters: [
        {
            property: 'base_offset',
            direction: 'ASC'
        }
    ],

    loaded: false,

    listeners: {
        refresh: {
            fn: function (store) {
                store.loaded = true;
                store.fireEvent('storeloaded');
            },
            scope: this,
            single: true
        }
    },

    isLoaded: function () {
        return this.loaded;
    }
});