/**
 * @class NavixyPanel.store.PaymentSystems
 * @extends NavixyPanel.utils.pagination.Store
 * Description
 */

Ext.define('NavixyPanel.store.PaymentSystems', {
    extend: 'Ext.data.Store',
    fields: ['type', 'currency', 'methods', 'auto_payments_enabled', 'intent_required', 'create_customer', 'publishable_key'],
    storeId: 'PaymentSystems',

    hasSubscription: function () {
        return this.find('type', 'bill') > -1 && this.count() > 1;
    }
})
