/**
 * @class NavixyPanel.view.trackers.Edit
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.trackers.Edit', {
    extend: 'NavixyPanel.view.trackers.AbstractForm',
    alias: 'widget.trackeredit',

    getTitle: function () {

        var titleTpl = new Ext.XTemplate(
            _l.get('trackers.edit_form.title'),
            ' #{id}: {label}'
        );
        return titleTpl.apply(this.getRecordData());
    }
});