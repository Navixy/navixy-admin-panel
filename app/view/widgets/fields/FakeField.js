/**
 * @class User.view.form.FakeField
 * @extends Ext.container.Container
 * Description
 */

Ext.define('NavixyPanel.view.widgets.fields.FakeField', {
    extend: 'Ext.container.Container',
    alias: 'widget.fakefield',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    fieldConfig: null,

    textCls: null,
    textStyle: null,
    onText: null,
    offText: null,

    onChange: Ext.emptyFn,

    initComponent: function () {
        this.items = this.getItems();

        this.callParent(arguments);
    },

    getItems: function () {
        return [
            Ext.apply({
                    role: 'field',
                    listeners: {
                        disable: this.onDisable,
                        enable: this.onEnable,
                        change: this.onChange,
                        scope: this
                    }
                },
                this.fieldConfig || {}
            ),
            {
                xtype: 'component',
                role: 'fake-text',
                style: this.textStyle || "",
                cls: this.textCls || "",
                hidden: true
            }
        ];
    },

    getText: function () {
        return this.down('[role=fake-text]');
    },

    getField: function () {
        return this.down('[role=field]');
    },

    onDisable: function () {
        this.updateText();
        this.getField().hide();
        this.getText().show();
    },

    onEnable: function () {
        this.getField().show();
        this.getText().hide();
    },

    updateText: function () {
        this.getText().update(this.processText(this.getField().getValue()));
    },

    processText: function (value) {
        return value
            ? this.onText || _l.get("yes")
            : this.offText || _l.get("no");
    }
})
;
