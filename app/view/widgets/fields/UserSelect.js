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

        this.emptyText = _l.users.combo_empty;

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

    setValue: function (value) {
        var text,
            isAvailable = Ext.isArray(value) && Ext.isObject(value[0])
                ? true
                : this.getRecord();

        if (isAvailable) {
            this.record = isAvailable;
            text = this.displayTpl.apply(this.record.getData());

            if (this.hasDefaultValue && this.defaultValue === null) {
                this.defaultValue = this.record.get(this.valueField);
            }

            this.callParent([text]);
        }
    },

    getRawValue: function () {
        return this.record ? this.record.get(this.valueField): '';
    },

    onSelect: function (record) {
        if (record) {
            this.selectRecord = record;
            this.setValue();
            this.closeWindow();
        }
    },

    showSelectWindow: function () {
        if (!this.window) {
            this.window = Ext.widget('userselectwindow', {
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