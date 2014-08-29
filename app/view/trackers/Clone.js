/**
 * @class NavixyPanel.view.trackers.Clone
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.trackers.Clone', {
    extend: 'NavixyPanel.view.trackers.AbstractForm',
    alias: 'widget.trackerclone',

    getTitle: function () {

        var titleTpl = new Ext.XTemplate(
            _l.get('trackers.clone_form.title'),
            ' #{id}: {label}'
        );
        return titleTpl.apply(this.getRecordData());
    },


    getNWItems: function () {
        var items = this.callParent(arguments);

        items[4].disabled = true;
        items[2].fieldLabel = _l.get('trackers.fields.clone_owner');
        items[2].hasDefaultValue = false;

        delete items[3];

        return items;
    }
});