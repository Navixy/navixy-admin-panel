/**
 * @class NavixyPanel.store.Bundles
 * @extends NavixyPanel.store.Abstract
 * Description
 */

Ext.define('NavixyPanel.store.Bundles', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.Bundle',
    storeId: 'Bundles',
    api: {
        read: 'getBundlesList'
    },
    sorters: [
        {
            property: 'model_code',
            direction: 'ASC'
        },
        {
            property: 'id',
            direction: 'ASC'
        }
    ]
});