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

        this.initStore();

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

    initStore: function () {

        var storeName = Ext.isString(this.store)
            ? this.store
            : this.store.self.getName();

        if (storeName) {
            this.store = Ext.getStore(storeName);
        }
    },

    setValue: function (value) {
        var text,
            isAvailable = Ext.isArray(value) && Ext.isObject(value[0])
            ? true
            : this.store.findRecord(this.valueField, value);

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

    validator: function (value) {
        var result = true;

        if (this.trackerRecord && this.record
            && this.defaultValue !== value
            && this.record.hasTrackerClone(this.trackerRecord.get('source_id'))) {
            result = _l.users.select_error;
        }

        return result;
    },

    onSelect: function (record) {
        if (record) {
            this.setValue(record.get(this.valueField));
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