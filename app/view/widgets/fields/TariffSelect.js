/**
 * @class NavixyPanel.view.widgets.fields.TariffSelect
 * @extends Ext.form.field.ComboBox
 * Description
 */

Ext.define('NavixyPanel.view.widgets.fields.TariffSelect', {
    extend: 'Ext.form.field.Trigger',
    requires: ['NavixyPanel.view.tariffs.SelectWindow'],
    alias: 'widget.tariffselect',

    triggerCls: 'list',
    componentCls: 'searcher',

    editable: false,

    hasDefaultValue: false,

    store: 'Tariffs',
    record: null,
    trackerRecord: null,
    deviceType: null,
    defaultValue: null,
    selectRecord: null,

    valueField: 'id',

    window: null,

    displayTpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
        '#{id:htmlEncode}: {name:htmlEncode}',
        '</tpl>'
    ),

    initComponent: function () {

        this.emptyText = _l.tariffs.combo_empty;

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

    getRecord: function () {
        return this.selectRecord || (this.trackerRecord && this.trackerRecord.getTariffsRecord && this.trackerRecord.getTariffsRecord());
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
            this.window = Ext.widget('tariffselectwindow', {
                deviceType: this.deviceType,
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