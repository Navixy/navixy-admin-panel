/**
 * @class NavixyPanel.store.Abstract
 * @extends Ext.Data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Abstract', {
    extend: 'Ext.data.Store',
    loaded: false,
    searchResult: false,
    onSearch: false,

    apiCall: null,
//    listeners: {
//        refresh: {
//            fn: function (store) {
//                store.loaded = true;
//                store.fireEvent('storeloaded');
//            },
//            scope: this,
//            single: true
//        }
//    },

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

    isSearch: function () {
        return this.onSearch;
    },

    APILoad: function (callback, scope) {
        if (this.apiCall && !this.loaded) {

            var calls = this.apiCall.split(','),
                callsCnt = calls.length;

            Ext.iterate(calls, function (APICall) {
                Ext.API[APICall]({
                    callback: function (results) {
                        this.requireAPISuccess(results, APICall, --callsCnt === 0, callback, scope);
                    },
                    failure:                 function (results) {
                        this.requireAPIFailure(results, APICall, --callsCnt === 0, callback, scope);
                    },
                    scope: this
                });
            }, this);

            this.fireEvent('apistart', this);
        } else if (Ext.isFunction(callback)) {
            callback.call(scope);
        }
    },

    requireAPISuccess: function (results, callName, done, callback, scope) {
        var list = Ext.isArray(results) ? results : [results];

        this.loadData(list);
        if (this.loaded = done) {
            this.fireEvent('apisuccess', this);
            if (Ext.isFunction(callback)) {
                callback.call(scope);
            }
        }
    },

    requireAPIFailure: function (results, callName, done, callback, scope) {
        this.fireEvent('apifailure', results);

        if (Ext.isFunction(callback) && done) {
            callback.call(scope);
        }
    },

    APISearch: function (searchReq, callback, scope) {
        if (this.apiCall) {

            var calls = this.apiCall.split(','),
                callsCnt = calls.length;

            Ext.iterate(calls, function (APICall) {
                Ext.API[APICall]({
                    params: {
                        filter: searchReq
                    },
                    callback: function (results) {
                        this.requireAPISearchSuccess(results, APICall, --callsCnt === 0, callback, scope);
                    },
                    failure:                 function (results) {
                        this.requireAPISearchFailure(results, APICall, --callsCnt === 0, callback, scope);
                    },
                    scope: this
                });
            }, this);

            this.fireEvent('apisearchstart', this);
        } else if (Ext.isFunction(callback)) {
            callback.call(scope);
        }
    },

    requireAPISearchSuccess: function (results, callName, done, callback, scope) {
        var list = Ext.isArray(results) ? results : [results];

        this.searchResult = list;
        this.loadData(list);
        if (this.onSearch = done) {
            this.fireEvent('apisearchsuccess', this);
            if (Ext.isFunction(callback)) {
                callback.call(scope);
            }
        }
    },

    requireAPISearchFailure: function (results, callName, done, callback, scope) {
        this.fireEvent('apisearchfailure', results);

        if (Ext.isFunction(callback) && done) {
            callback.call(scope);
        }
    },

    getSearchData: function () {
        return this.searchResult || [];
    }
});