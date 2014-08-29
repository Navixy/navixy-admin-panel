/**
 * @class NavixyPanel.view.codes.Edit
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.trackers.GroupClone', {
    extend: 'NavixyPanel.view.trackers.AbstractGroupForm',
    alias: 'widget.trackersgroupclone',

    hasGridEdit: true,

    getTitle: function () {
        return _l.get('trackers.group_clone_form.title');
    },

    getSaveBtnTitle: function () {
        return _l.get('trackers.group_clone_form.save_btn');
    },

    getGridLabelTip: function () {
        return _l.get('trackers.group_clone_form.grid_clone_tip');
    },

    getGridLabel: function () {
        return _l.get('trackers.group_clone_form.grid_clone_label');
    }
});