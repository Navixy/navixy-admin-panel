/**
 * @class NavixyPanel.store.SubPaas
 * @extends NavixyPanel.utils.pagination.Store
 * Description
 */

Ext.define('NavixyPanel.store.SubPaas', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.SubPaas',
    storeId: 'SubPaas',
    api: {
        read: 'getSubPaasList',
        record: 'getSubPaas'
    },
    sorters: [
        {
            property: 'subpaas_id',
            direction: 'ASC'
        }
    ],
    proxy: {
        type: 'navixy'
    }
})
