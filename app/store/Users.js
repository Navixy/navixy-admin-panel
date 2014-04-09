/**
 * @class NavixyPanel.store.Users
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Users', {
    extend: 'NavixyPanel.plugins.pagination.Store',
    model: 'NavixyPanel.model.User',
    storeId: 'Users',
    pageSize: 50,
    sorters: [
        {
            property: 'id',
            direction: 'DESC'
        }
    ]
});