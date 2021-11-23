/**
 * @class NavixyPanel.view.components.CustomInputsPrompt
 * @extends Ext.Window
 * Description
 */

Ext.define('NavixyPanel.view.components.CustomInputsPrompt', {
    extend: 'NavixyPanel.view.components.MessageBoxWithInputs',
    alternateClassName: 'Ext.MessageBoxWithCustomInputsPrompt',
    alias: 'widget.custom-items-prompt',
    action: Ext.emptyFn,
    cls: 'message-box-with-alert',
    requiredFields: [],

    getButtons: function () {
        var me = this;
        return [{
            text: this.locale.get(this.buttonTextKeys.ok),
            action: 'remove',
            handler: Ext.bind(this.callAction, this),
            disabled: true,
            scope: this
        }, {
            text: this.locale.get(this.buttonTextKeys.cancel),
            handler: this.close,
            scope: this
        }];
    },

    getItems: function () {
        var items = [{
            xtype: 'component',
            tpl: [
                '<div class="message-box">',
                '<div class="x-message-warning">{msg}</div>',
                '</div>'
            ],
            data: {
                msg: this.msg
            }
        }];

        Ext.iterate(this.inputs, function (input) {
            items.push(Ext.apply(input, {
                id: Ext.id(),
                listeners: input.required ? {
                    change: this.checkErrors,
                    scope: this
                }: {}
            }))

            if (input.required) {
                this.requiredFields.push(input.id)
            }
        }, this)

        return items;
    },

    callAction: function () {
        var result = {}
        Ext.iterate(this.query('[name]'), function (field) {
            result[field.name] = field.getValue && typeof field.getValue === "function" ? field.getValue() : null
        }, this)
        this.action.call(this, result)
        this.destroy()
    },

    checkErrors: function() {
        var hasErrors = false;
        Ext.iterate(this.requiredFields, function(field) {
            hasErrors = hasErrors || !this.items.get(field).isValid();
        }, this);
        this.down('button[action=remove]').setDisabled(hasErrors);
    }
});
