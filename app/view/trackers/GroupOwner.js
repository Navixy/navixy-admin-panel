/**
 * @class NavixyPanel.view.codes.Edit
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.trackers.GroupOwner', {
    extend: 'NavixyPanel.view.trackers.AbstractGroupForm',
    alias: 'widget.trackersgroupowner',

    getTitle: function () {
        return _l.get('trackers.group_owner_form.title');
    },

    getSaveBtnTitle: function () {
        return _l.get('trackers.group_owner_form.save_btn');
    },

    getGridLabelTip: function () {
        return null;
    },

    getGridLabel: function () {
        return _l.get('trackers.group_owner_form.grid_clone_label');
    }
});