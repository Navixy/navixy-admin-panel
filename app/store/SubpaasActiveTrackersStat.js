/**
 * @class NavixyPanel.store.SubpaasActiveTrackersStat
 * @extends NavixyPanel.store.Abstract
 * Description
 */

Ext.define('NavixyPanel.store.SubpaasActiveTrackersStat', {
    extend: 'Ext.data.Store',
    model: 'NavixyPanel.model.SubpaasActiveTrackersStatItem',
    storeId: 'SubpaasActiveTrackersStat',
    groupers: ['dealer_title', 'month', 'user_id'],

    loadStatData: function (data) {
        this.loadData(this.flatterize(data))
    },

    flatterize: function (results) {
        var flatResult = []

        Ext.each(results.subpaases, function (subpaas) {
            Ext.each(subpaas.list, function (group, key) {
                Ext.each(group.trackers, function (item, key) {
                    flatResult.push(Ext.apply(item, {
                        subpaas_id: subpaas.subpaas_id,
                        dealer_title: subpaas.title,
                        month: group.month,
                        amount: group.amount
                    }))
                })
            })
        })

        return flatResult
    }
})
