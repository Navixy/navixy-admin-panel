/**
 * @class NavixyPanel.store.ActiveTrackers
 * @extends NavixyPanel.store.Abstract
 * Description
 */

Ext.define('NavixyPanel.store.ActiveTrackersStat', {
    extend: 'Ext.data.Store',
    model: 'NavixyPanel.model.ActiveTrackersStatItem',
    storeId: 'ActiveTrackersStat',
    groupers: ['month', 'user_id'],

    loadStatData: function (data) {
        this.loadData(this.flatterize(data))
    },

    flatterize: function (results) {
        var flatResult = []

        Ext.each(results.list, function (group) {
            Ext.each(group.trackers, function (item, key) {
                flatResult.push(Ext.apply(item, {
                    month: group.month,
                    amount: group.amount
                }))
            })
        })

        return flatResult
    }
})
