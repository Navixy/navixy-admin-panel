/**
 * @class NavixyPanel.view.trackers.AbstractForm
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.trackers.AbstractForm', {
    extend: 'NavixyPanel.view.components.AbstractForm',

    requires: ['NavixyPanel.view.widgets.fields.UserSelect'],

    getTitle: function () {
        return _l.trackers.edit_form.title;
    },

    getSaveBtnTitle: function () {
        return _l.trackers.edit_form.save_btn;
    },

    getClearBtnTitle: function () {
        return false;
    },

    getNWItems: function () {
        var me = this;

        return [
            {
                xtype: 'container',
                height: 20
            },
            {
                fieldLabel: _l.trackers.fields.label,
                name: 'label',

                minLength: 1,
                maxLength: 60
            },
            {
                fieldLabel: _l.trackers.fields.owner,
                name: 'user_id',
                xtype: 'userselect',
                trackerRecord: this.record,
                hasDefaultValue: true
            },
            {
                fieldLabel: _l.trackers.fields.deleted,
                name: 'deleted',
                xtype: 'checkbox'
            },
            {
                fieldLabel: _l.trackers.fields.blocked,
                name: 'blocked',
                xtype: 'checkbox'
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                fieldLabel: _l.trackers.fields.creation_date,
                name: 'creation_date',
                disabled: true
            },
            {
                fieldLabel: _l.trackers.fields.model,
                name: 'model',
                disabled: true
            },
            {
                fieldLabel: _l.trackers.fields.device_id,
                name: 'device_id',
                disabled: true
            },
            {
                fieldLabel: _l.trackers.fields.phone_exp,
                name: 'phone',
                disabled: true
            }
        ];
    },

    getNEItems: function () {
        return [];
    },

    gatSaveTarget: function () {
        return 'tracker/' + this.record.getId();
    }
});