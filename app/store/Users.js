/**
 * @class NavixyPanel.store.Users
 * @extends NavixyPanel.utils.pagination.Store
 * Description
 */

Ext.define('NavixyPanel.store.Users', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.User',
    storeId: 'Users',
    sorters: [
        {
            property: 'id',
            direction: 'ASC'
        }
    ]
});