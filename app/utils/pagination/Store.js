/**
 * @class NavixyPanel.utils.pagination.Store
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.utils.pagination.Store', {
    extend: 'Ext.data.Store',
    pageSize: 25,
    autoLoad: false,
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

    externalFiltersMap: null,
    externalFilters: [],

    constructor: function () {
        this.proxy =  Ext.create('Ext.data.proxy.Memory', {
                enablePaging: true,
                reader: {
                    type: 'json'
                }
            });

        this.callParent(arguments);
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
    },

    clearExternalFilters: function (key) {

        console.log(key, value);
    },

    applyExternalFilter: function (type, value) {
        var filterField = this.externalFiltersMap[type] || false,
            filterId;

        if (filterField) {
            filterId = this.filter(filterField, value);
        }
    }
});