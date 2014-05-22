/**
 * @class NavixyPanel.utils.pagination.Store
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.utils.pagination.Store', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    autoDestroy: true,
    autoLoad: false,
    loaded: false,

    parentStore: null,
    parentFilters: null,
    parentListeners: null,

    filterCount: null,

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

    constructor: function () {
        this.proxy =  Ext.create('Ext.data.proxy.Memory', {
                enablePaging: true,
                reader: {
                    type: 'json'
                }
            });

        this.callParent(arguments);
        this.cloneParent();
    },

    cloneParent: function () {
        if (this.parentStore) {
            var parentData = this.parentStore.getFilteredData(this.parentFilters);
            this.loadData(parentData);
        }
    },

    applyParentListeners: function () {
        if (this.parentStore) {
            this.removeParentListeners();
            this.parentListeners = this.parentStore.on({
                add: this.onParentRecordAdd,
                update: this.onParentRecordUpdate,
                bulkremove: this.onParentRecordsRemove,
                scope: this,
                destroyable: true
            });
        }
    },

    removeParentListeners: function () {
        if (Ext.isArray(this.parentListeners)) {
            Ext.destroy(this.parentListeners);
        }
    },

    onParentRecordAdd: function (parent, records) {
        var isUpdated = false;
        Ext.iterate(records, function(parentRecord) {
            this.add(parentRecord.getData());
            isUpdated = true;
        }, this);
    },

    onParentRecordsRemove: function (parent, records) {
        Ext.iterate(records, function(parentRecord) {
            var curRecord = this.getRecordByParent(parentRecord);
            if (curRecord) {
                this.remove(curRecord);
            }
        }, this);
    },

    onParentRecordUpdate: function (parent, record, operation, fields) {

        var isIdChange = Ext.Array.indexOf(fields, 'id') > -1;

        // Ugly way for update by id;
        this[isIdChange ? 'cloneParent': 'updateRecordByParent'](record);
    },

    updateRecordByParent: function (parentRecord) {
        var data = parentRecord.getData(),
            curRecord = this.getRecordByParent(parentRecord);

        if (curRecord) {
            curRecord.set(data);
        }
    },

    getRecordByParent: function (parentRecord) {
        return this.getById(parentRecord.getId()) || false;
    },

    loadData: function (data) {
        this[this.count() ? 'waitDataClear': 'updateData'](data);
    },

    updateData: function (data) {
        this.getProxy().data = data;
        this.load();
        this.applyParentListeners();
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

    destroyStore: function () {
        this.removeParentListeners();
        this.callParent(arguments);
    },

    tCount: function () {
        return this.getProxy().data.length;
    },

    addOptFilter: function (field, value) {
        var filter = Ext.create('Ext.util.Filter',
                {
                    property: field,
                    value: value,
                    root: 'data'
                }
            );

        this.applyToProxy(function () {
            this.filter(filter);
        });
    },

    removeOptFilter: function (field, value) {
        this.applyToProxy(function () {
            this.filters.each(function(filter) {
                if (filter.property === field && filter.value.toString() === value.toString()) {
                    this.removeFilter(filter);
                }
            }, this);
            this.load();
        });
    },

    applyToProxy: function (fn) {
        var pageSize = this.pageSize;

        this.suspendEvents();
        this.setPageSize(10000000);
        fn.call(this);
        this.updateFilteredCount();
        this.setPageSize(pageSize);
        this.resumeEvents();
        this.load();
    },

    updateFilteredCount: function () {
        var curCount = this.count(),
            totalCount = this.tCount();

        this.filterCount = curCount === totalCount
            ? null
            : curCount;
    },

    fCount: function () {
        return this.filterCount;
    }
});