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

    requireAPISuccess: function (results, callName, done) {

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
    }
});