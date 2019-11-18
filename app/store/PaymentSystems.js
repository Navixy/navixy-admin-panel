/**
 * @class NavixyPanel.store.PaymentSystems
 * @extends NavixyPanel.utils.pagination.Store
 * Description
 */

Ext.define('NavixyPanel.store.PaymentSystems', {
    extend: 'Ext.data.Store',
    fields: ['type'],
    storeId: 'PaymentSystems'
})
