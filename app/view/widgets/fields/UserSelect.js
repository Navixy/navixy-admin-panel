/**
 * @class NavixyPanel.view.widgets.fields.UserSelect
 * @extends Ext.form.field.ComboBox
 * Description
 */

Ext.define('NavixyPanel.view.widgets.fields.UserSelect', {
    extend: 'Ext.form.field.Trigger',
    alias: 'widget.userselect',

    triggerCls: 'list',
    componentCls: 'searcher',

    editable: false,

    hasDefaultValue: false,
    skipDefaultValue: false,

    store: 'Users',
    record: null,
    trackerRecord: null,
    selectRecord: null,
    defaultValue: null,

    valueField: 'id',

    window: null,

    displayTpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
        '#{id:htmlEncode}: {login:htmlEncode}',
        '</tpl>'
    ),

    initComponent: function () {

        this.emptyText = _l.get('users.combo_empty');

        this.callParent(arguments);
    },

    afterRender: function () {
        this.applyListeners();
    },

    applyListeners: function () {
        var parent = this.up('form');

        if (parent) {
            parent.on('hide', this.closeWindow, this);
        }

        this.getEl().on('click', this.onTriggerClick, this);
    },

    onTriggerClick: function () {
        this.showSelectWindow();
    },

    getRecord: function () {
        return this.selectRecord || (this.trackerRecord && this.trackerRecord.getUsersRecord && this.trackerRecord.getUsersRecord());
    },

    isTrackerValue: function (value) {
        return this.trackerRecord && value == this.trackerRecord.get(this.name)
    },

    setValue: function (value) {
        var text,
            isAvailable = Ext.isArray(value) && Ext.isObject(value[0])
                ? true
                : this.getRecord();

        if (isAvailable) {
            this.record = isAvailable;
            if (!(this.skipDefaultValue && this.isTrackerValue(value))) {
                text = this.displayTpl.apply(this.record.getData());
            }

            if (this.hasDefaultValue && this.defaultValue === null) {
                this.defaultValue = this.record.get(this.valueField);
            }

            this.callParent([text]);
        }
    },

    getRawValue: function () {
        var value = this.record && this.record.get(this.valueField);

        return !(this.skipDefaultValue && this.isTrackerValue(value))
            ? value || ''
            : ''
    },

    onSelect: function (record) {
        if (record) {
            this.selectRecord = record;
            this.setValue();
            this.closeWindow();
        }
    },

    showSelectWindow: function () {
        var user = this.trackerRecord && this.trackerRecord.getUsersRecord();
        if (!this.window) {
            this.window = Ext.widget('userselectwindow', {
                exclude_user_id: user && user.get("id"),
                listeners: {
                    select: this.onSelect,
                    destroy: function () {
                        this.window = null;
                    },
                    scope: this
                }
            }).show();
        }
    },

    closeWindow: function () {
        if (this.window) {
            Ext.destroy(this.window);
            this.window = null;
        }
    },

    destroy: function () {
        this.closeWindow();
        this.callParent(arguments);
    }
});