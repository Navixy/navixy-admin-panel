/**
 * @class NavixyPanel.store.ActivationCodes
 * @extends NavixyPanel.store.Abstract
 * Description
 */

Ext.define('NavixyPanel.store.Equipment', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.Equipment',
    storeId: 'Equipment',
    api: {
        read: 'getEquipmentList'
    },

    sorters: [
        {
            property: 'id',
            direction: 'ASC'
        }
    ]
});