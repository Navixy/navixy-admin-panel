/**
 * @class NavixyPanel.view.components.MessageBoxWithAlert
 * @extends Ext.Window
 * Description
 */

Ext.define('NavixyPanel.view.components.MessageBoxWithAlert', {
    extend: 'Ext.Window',
    alternateClassName: 'Ext.MessageBoxWithAlert',
    cls: 'message-box-with-alert',
    closeAction: 'destroy',
    modal: true,
    resizable: false,
    draggable: false,
    width: 500,
    buttonAlign: 'center',
    bodyPadding: '10 25 0',

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
        return [{
            xtype: 'component',
            tpl: [
                '<div class="message-box">',
                '<div class="x-message-box-warning x-message-box-warning-yellow"></div>',
                '<div class="x-message-warning">{msg}</div>',
                '</div>'
            ],
            data: {
                msg: this.msg
            }
        }, {
            xtype: 'checkbox',
            minHeight: 50,
            boxLabel: this.locale.get('argeement'),
            listeners: {
                change: function (cbx, value) {
                    this.down('button[action=remove]').setDisabled(!value);
                },
                scope: this
            }
        }];
    }

});