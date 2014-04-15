/**
 * @class NavixyPanel.store.Users
 * @extends NavixyPanel.plugins.pagination.Store
 * Description
 */

Ext.define('NavixyPanel.store.Users', {
    extend: 'NavixyPanel.plugins.pagination.Store',
    model: 'NavixyPanel.model.User',
    storeId: 'Users',
    pageSize: 20,
    sorters: [
        {
            property: 'id',
            direction: 'DESC'
        }
    ]
});