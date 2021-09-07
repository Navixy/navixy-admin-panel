/**
 * @class NavixyPanel.view.trackers.BatchCorrupt
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.trackers.BatchCorrupt', {
    extend: 'NavixyPanel.view.trackers.AbstractGroupForm',
    alias: 'widget.trackersbatchcorrupt',

    getTitle: function () {
        return _l.get('trackers.batch_corrupt_form.title');
    },

    getSaveBtnTitle: function () {
        return _l.get('trackers.batch_corrupt_form.save_btn');
    },

    getGridLabel: function () {
        return _l.get('trackers.batch_corrupt_form.grid_corrupt_label');
    },

    getNWItems: function () {
        var items = this.callParent(arguments);
        delete items[1]

        return items
    },

});
