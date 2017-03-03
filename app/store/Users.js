/**
 * @class NavixyPanel.store.Users
 * @extends NavixyPanel.utils.pagination.Store
 * Description
 */

Ext.define('NavixyPanel.store.Users', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.User',
    storeId: 'Users',
    api: {
        read: 'getUsersList',
        record: 'getUser'
    },
    sorters: [
        {
            property: 'id',
            direction: 'ASC'
        }
    ],
    proxy: {
        type: 'navixy',
        buildParams: function (request) {

            var params = request.jsonData || request.params,
                onlyActiveUsersCfg = Ext.state.Manager.get('ShowOnlyActiveUsers');

            if (onlyActiveUsersCfg && onlyActiveUsersCfg.checked) {
                params.hide_inactive = true;
            }

            return params;
        }
    }
});