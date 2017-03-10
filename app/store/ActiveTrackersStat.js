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

    loadStat: function (period) {
        Ext.API.getActiveTrackersStat({
            params: period,
            callback: function (response) {
                this.loadData(this.flatterize(response));
            },
            scope: this
        });
    },

    flatterize: function (results) {
        var flatResult = [];

        Ext.each(results.list, function (group) {
            Ext.each(group.trackers, function (item, key) {
                flatResult.push(Ext.apply(item, {
                    month: group.month,
                    amount: group.amount
                }));
            });
        });

        return flatResult;
    }
});