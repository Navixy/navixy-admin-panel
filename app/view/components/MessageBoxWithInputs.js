/**
 * @class NavixyPanel.view.components.MessageBoxWithInputs
 * @extends Ext.Window
 * Description
 */

Ext.define('NavixyPanel.view.components.MessageBoxWithInputs', {
    extend: 'Ext.Window',
    alternateClassName: 'Ext.MessageBoxWithInputs',
    cls: 'message-box-with-alert message-box-with-input',
    closeAction: 'destroy',
    modal: true,
    resizable: false,
    draggable: false,
    width: 600,
    buttonAlign: 'center',
    bodyPadding: '10 25 10',

    agreeAction: Ext.emptyFn,
    msg: '',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    buttonTextKeys: {
        ok: "yes",
        cancel: "no"
    },
    // { id, type, label, required }
    inputs: [],
    requiredFields: [],

    initComponent: function () {
        this.locale = _l.get('message_box_with_alert');
        this.buttons = this.getButtons();
        this.items = this.getItems();

        this.callParent(arguments);
    },

    getButtons: function () {
        return [{
            text: this.locale.get(this.buttonTextKeys.ok),
            action: 'remove',
            handler: Ext.bind(this.agreeAction, this, [this]),
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
                '<div class="x-message-box-warning x-message-box-warning-red"></div>',
                '<div class="x-message-warning">{msg}</div>',
                '</div>'
            ],
            data: {
                msg: this.msg
            }
        }, {
            id: 'box_agreement',
            xtype: 'checkbox',
            minHeight: 50,
            boxLabel: this.locale.get('argeement'),
            listeners: {
                change: this.checkErrors,
                scope: this
            }
        }];
        var me = this;
        Ext.each(this.inputs, function(input) {
            items.push({
                id: input.id,
                xtype: input.type,
                fieldLabel: input.label,
                emptyText: '',
                labelAlign: 'top',
                listeners: input.required ? {
                    change: me.checkErrors,
                    scope: me
                }: {}
            })
            if(input.required) {
                me.requiredFields.push(input.id);
            }
        })
        return items;
    },

    checkErrors: function() {
        var hasErrors = false;
        var me = this;
        // Check required fields
        Ext.each(this.requiredFields, function(field) {
            hasErrors = hasErrors || !me.items.get(field).value;
        });
        // Check agreement label
        hasErrors = hasErrors || !me.items.get('box_agreement').value
        me.down('button[action=remove]').setDisabled(hasErrors);
    }

});