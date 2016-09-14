/**
 * @class NavixyPanel.store.Tariffs
 * @extends NavixyPanel.store.Abstract
 * Description
 */

Ext.define('NavixyPanel.store.Tariffs', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.Tariff',
    storeId: 'Tariffs',
    api: {
        read: 'getTariffsList',
        record: 'getTariff'
    },
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

    proxy: {
        type: 'navixy',
        apiFilters: ['device_type']
    },

    getProxyEncoder: function () {
        var me = this;

        return function(results) {
            var pricesStore = Ext.getStore('TariffPrices');
            if (pricesStore) {
                pricesStore.loadData([results.wholesale_service_prices]);
            }

            return results;
        };
    }
});