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

    getItems: function () {
        return [
            {
                items: [
                    {
                        items: this.getNWItems()
                    },
                    {
                        padding: this.formCellsPadding,
                        items: this.getNEItems()
                    }
                ]
            },
            {
                padding: this.formRowPadding,
                items: [
                    {
                        items: this.getSEItems()
                    },
                    {
                        padding: this.formCellsPadding,
                        items: this.getSWItems()
                    }
                ]
            }
        ];
    },

    getNWItems: function () {
        var items = this.callParent(arguments);

        items[4].disabled = true;
        items[2].fieldLabel = _l.get('trackers.fields.clone_owner');
        items[2].hasDefaultValue = false;
        items[2].skipDefaultValue = true;
        items[2].allowBlank = false;

        delete items[3];

        return items;
    }
});