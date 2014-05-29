/**
 * @class NavixyPanel.store.Abstract
 * @extends Ext.Data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Abstract', {
    extend: 'Ext.data.Store',
    loaded: false,

    apiCall: null,

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

    APILoad: function (callback, scope) {
        if (this.apiCall && !this.loaded) {

            var calls = this.apiCall.split(','),
                callsCnt = calls.length;

            Ext.iterate(calls, function (APICall) {
                Ext.API[APICall](function (results) {
                    this.requireAPISuccess(results, APICall, --callsCnt === 0, callback, scope);
                },
                function (results) {
                    this.requireAPIFailure(results, APICall, --callsCnt === 0, callback, scope);
                }, this);
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
    }
});