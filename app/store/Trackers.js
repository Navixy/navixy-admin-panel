/**
 * @class NavixyPanel.store.Trackers
 * @extends NavixyPanel.utils.pagination.Store
 * Description
 */

Ext.define('NavixyPanel.store.Trackers', {
    extend: 'NavixyPanel.utils.pagination.Store',
    model: 'NavixyPanel.model.Tracker',
    storeId: 'Trackers',
    pageSize: 20,
    sorters: [
        {
            property: 'id',
            direction: 'DESC'
        }
    ],

    externalFiltersMap: {
        user: 'user_id'
    }
});