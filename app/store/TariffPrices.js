/**
 * @class NavixyPanel.store.TariffPrices
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.TariffPrices', {
    extend: 'Ext.data.Store',
    storeId: 'TariffPrices',

    fields: [
        {
            name: 'incoming_sms',
            type: 'auto'
        },
        {
            name: 'outgoing_sms',
            type: 'auto'
        },
        {
            name: 'service_sms',
            type: 'auto'
        },
        {
            name: 'phone_call',
            type: 'auto'
        },
        {
            name: 'traffic',
            type: 'auto'
        }
    ],

    getPrices: function () {
        return this.first().getData() || null;
    }
});