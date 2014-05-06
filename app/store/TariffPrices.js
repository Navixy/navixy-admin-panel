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
            type: 'int'
        },
        {
            name: 'outgoing_sms',
            type: 'int'
        },
        {
            name: 'service_sms',
            type: 'int'
        },
        {
            name: 'phone_call',
            type: 'int'
        },
        {
            name: 'traffic',
            type: 'int'
        }
    ],

    getPrices: function () {
        return this.first().getData() || null;
    }
});