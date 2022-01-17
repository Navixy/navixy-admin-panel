/**
 * @class NavixyPanel.store.SubpaasActiveTrackersStat
 * @extends NavixyPanel.store.Abstract
 * Description
 */

Ext.define('NavixyPanel.store.SubpaasActiveTrackersStat', {
    extend: 'Ext.data.Store',
    model: 'NavixyPanel.model.SubpaasActiveTrackersStatItem',
    storeId: 'SubpaasActiveTrackersStat',
    groupers: ['month', 'dealer_title', 'user_id'],

    loadStatData: function (data) {
        this.loadData(this.flatterize(data))
    },

    flatterize: function (results) {
        var flatResult = [];
        var monthAmount = {};
        var dealerAmount = {};
        Ext.each(results.subpaases, function (subpaas) {
            Ext.each(subpaas.list, function (monthStat) {
                if (!monthAmount[monthStat.month]) {
                    monthAmount[monthStat.month] = 0
                }
                monthAmount[monthStat.month] += monthStat.amount
                dealerAmount[subpaas.subpaas_id] = monthStat.trackers.length
                Ext.each(monthStat.trackers, function (item) {
                    flatResult.push(Ext.apply(item, {
                        subpaas_id: subpaas.subpaas_id,
                        dealer_title: subpaas.title,
                        month: monthStat.month,
                    }))
                })
            })
        })
        flatResult.forEach(function (item) {
            item.amount = monthAmount[item.month]
            item.dealer_count = dealerAmount[item.subpaas_id]
        })
        return flatResult
    }
})
