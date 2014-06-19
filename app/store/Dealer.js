/**
 * @class NavixyPanel.store.Dealer
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Dealer', {
    extend: 'Ext.data.Store',
    storeId: 'Dealer',
    fields: [
        "parent_dealer_id",
        "contract_type",
        "effective_dealer_id",
        "title",
        "legal_name",
        "active_amount",
        "active_limit",
        "locale"
    ]
});
