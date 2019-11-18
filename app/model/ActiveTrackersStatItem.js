/**
 * @class NavixyPanel.model.Bundle
 * @extends NavixyPanel.model.Abstract
 * Description
 */

Ext.define('NavixyPanel.model.ActiveTrackersStatItem', {
    extend: 'NavixyPanel.model.Abstract',
    fields: [
        { name: 'month' },
        { name: 'amount' },
        { name: 'device_id' },
        { name: 'label' },
        { name: 'tracker_id' },
        { name: 'user_id' },
        { name: 'amount' }
    ]
})
