/**
 * @class NavixyPanel.store.Abstract
 * @extends Ext.Data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Abstract', {
    extend: 'Ext.data.Store',
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

    getClone: function (config) {

        return Ext.create('NavixyPanel.utils.pagination.Store', Ext.apply(
            {},
            config,
            {
                id: 'test',
                model: this.model,
                sorters: this.getInitialConfig('sorters'),
                parentStore: this
            }
        ));
    },

    isLoaded: function () {
        return this.loaded;
    },
});