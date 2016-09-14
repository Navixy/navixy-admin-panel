/**
 * @class NavixyPanel.store.Abstract
 * @extends Ext.Data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Abstract', {
    extend: 'Ext.data.Store',
    requires: [
        'NavixyPanel.utils.store.NavixyApiProxy'
    ],

    autoLoad: false,
    autoSync: false,
    api: {},

    writerRoot: null,
    writerEncode: false,

    pageSize: 20,
    searchFilter: null,
    remoteFilter: true,
    remoteSort: true,

    loaded: false,
    searchResult: false,
    onSearch: false,

    apiCall: null,
    recordAPI: null,

    constructor: function () {
        var me = this;

        if (!this.proxy || this.proxy.type === 'navixy') {
            this.proxy = Ext.apply(this.proxy || {}, {
                type: 'navixy',
                enablePaging: true,
                apiCalls: this.api,
                responseEncodeFn: this.getProxyEncoder(),
                writer: {
                    type: 'json',
                    root: this.writerRoot,
                    encode: this.writerEncode
                },
                listeners: {
                    exception: Ext.bind(me.onException, me)
                }
            });
        }

        this.callParent(arguments);
    },

    getProxyEncoder: function () {
        return null;
    },

    getClone: function (config) {

        return Ext.create(this.self.getName(), Ext.apply(
            {
                autoLoad: true,
                storeId: this.storeId + Ext.id()
            },
            config
        ));
    },

    setPageSize: function (recordsCnt, silent) {
        if (recordsCnt) {
            this.pageSize = recordsCnt;
            if (!silent) {
                this.load();
            }
        }
    },

    addSearchFilter: function (searchReq) {

        this.removeSearchFilter(true);

        this.addFilter(
            Ext.create('Ext.util.Filter', {
                id: this.getFilterProperty(),
                property: this.getFilterProperty(),
                value: searchReq
            }),
            true);
    },

    removeSearchFilter: function (silent) {
        if (this.filters.getByKey(this.getFilterProperty())) {
            this.filters.removeAtKey(this.getFilterProperty());

            if (!silent) {
                delete this.totalCount;

                if (this.buffered) {
                    this.data.clear();
                    this.loadPage(1);
                } else {
                    // Reset to the first page, clearing a filter will destroy the context of the current dataset
                    this.currentPage = 1;
                    this.load();
                }
            }
        }
    },

    getFilterProperty: function () {
        return this.getProxy().apiFilterProperty || '_all';
    },

    isLoaded: function () {
        return this.loaded;
    },

    loadRecord: function (recordId, callback, scope, loadAssociations, failure) {
        if (this.api.record) {
            var loadCallback = this.createLoadCallback(callback, scope, loadAssociations);
            Ext.API[this.api.record](recordId, loadCallback, failure || loadCallback, scope);
        } else {
            callback.call(scope);
        }
    },

    loadRecordDep: function (record, fn, scope, loadAssociations) {
        var associations = record.getAssociations && record.getAssociations(typeof loadAssociations !== "undefined" ? loadAssociations : true),
            aCnt = associations && Ext.Object.getSize(associations);

        if (aCnt) {
            Ext.iterate(associations, function (storeName, depId) {
                var associationStore = Ext.getStore(storeName);

                if (associationStore && associationStore.loadRecord) {
                    associationStore.loadRecord(depId, function (aRecord) {
                        record.setAssociation(storeName, aRecord);
                        if (--aCnt === 0) {
                            fn.call(scope, record);
                        }
                    }, this, false, function() {
                        if (--aCnt === 0) {
                            fn.call(scope, record);
                        }
                    });
                } else {
                    if (--aCnt === 0) {
                        fn.call(scope, record);
                    }
                }
            }, this);
        } else {
            fn.call(scope, record);
        }
    },

    createLoadCallback: function (fn, scope, loadAssociations) {
        var me = this;
        return function(recordData) {
            me.loadRecordDep(
                me.model
                    ? Ext.create(me.model, recordData)
                    : recordData,
                fn, scope, loadAssociations);
        };
    }
});