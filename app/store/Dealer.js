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
        "locale",
        "domain",
        "favicon",
        "logo"
    ],

    getImgUrl: function (field) {
        var record = this.first(),
            value = record.get(field),
            isUrl = new RegExp('http://|https://', 'i').test(value);

        return value
            ? isUrl
                ? value
                : Config.imagesHost && Config.imagesHost + value
            : null
    },

    getLogo: function () {
        return this.getImgUrl('logo') || false;
    },

    getFavicon: function () {
        return this.getImgUrl('favicon') || false;
    }
});
