/**
 * @class NavixyPanel.store.Trackers
 * @extends NavixyPanel.store.Abstract
 * Description
 */

Ext.define('NavixyPanel.store.Trackers', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.Tracker',
    storeId: 'Trackers',
    sorters: [
        {
            property: 'id',
            direction: 'ASC'
        }
    ]
});