/**
 * @class User.store.cTimeZones
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.plugins.pagination.Store', {
    extend: 'Ext.data.Store',
    pageSize: 25,
    autoLoad: false,
    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'json'
        }
    },
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

    loadData: function (data) {
        this[this.count() ? 'waitDataClear': 'updateData'](data);
    },

    updateData: function (data) {
        this.getProxy().data = data;
        this.load();
    },

    waitDataClear: function (data) {

        // Fix clearing for Ext.toolbar.Paging component
        this.getProxy().data = null;
        this.getProxy().clear();

        this.on('bulkremove', function () {this.updateData(data);}, this, {single: true});

        this.removeAll();
    },

    setPageSize: function (recordsCnt, silent) {
        if (recordsCnt) {
            this.pageSize = recordsCnt;
            if (!silent) {
                this.load();
            }
        }
    },

    isLoaded: function () {
        return this.loaded;
    }
});