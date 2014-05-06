/**
 * @class NavixyPanel.store.Tariffs
 * @extends NavixyPanel.store.Abstract
 * Description
 */

Ext.define('NavixyPanel.store.Tariffs', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.Tariff',
    storeId: 'Tariffs',
    sorters: [
        {
            property: 'device_type',
            direction: 'ASC'
        },
        {
            property: 'id',
            direction: 'ASC'
        }
    ]
});