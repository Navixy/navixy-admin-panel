/**
 * @class NavixyPanel.store.Tariffs
 * @extends NavixyPanel.store.Abstract
 * Description
 */

Ext.define('NavixyPanel.store.Tariffs', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.Tariff',
    storeId: 'Tariffs',
    apiCall: 'getTariffsList',
    sorters: [
        {
            property: 'device_type',
            direction: 'ASC'
        },
        {
            property: 'id',
            direction: 'ASC'
        }
    ],

    requireAPISuccess: function (results, callName, done, callback, scope) {
        var pricesStore = Ext.getStore('TariffPrices');

        if (pricesStore) {
            pricesStore.loadData([results.wholesale_service_prices]);
        }

        this.loadData(results.list);
        if (this.loaded = done) {
            this.fireEvent('apisuccess', this);
            if (Ext.isFunction(callback)) {
                callback.call(scope);
            }
        }
    },

    requireAPISearchSuccess: function (results, callName, done, callback, scope) {
        var pricesStore = Ext.getStore('TariffPrices');

        if (pricesStore) {
            pricesStore.loadData([results.wholesale_service_prices]);
        }

        var list = Ext.isArray(results) ? results : [results];

        this.searchResult = results.list;
        this.loadData(results.list);
        if (this.onSearch = done) {
            this.fireEvent('apisearchsuccess', this);
            if (Ext.isFunction(callback)) {
                callback.call(scope);
            }
        }
    }
});