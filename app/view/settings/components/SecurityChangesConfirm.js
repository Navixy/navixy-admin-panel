/**
 * @class NavixyPanel.view.settings.components.SecurityChangesConfirm
 * @extends Ext.Container
 * Description
 */
Ext.define('NavixyPanel.view.settings.components.SecurityChangesConfirm', {
    extend: 'Ext.window.Window',
    alias: 'SecurityChangesConfirm',
    xtype: 'settings-security-changes-confirm',
    cls: 'message-box-with-alert message-box-with-input',
    modal: true,
    draggable: false,
    resizable: false,
    width: 480,
    titleAlign: 'center',

    initComponent: function () {
        this.title = _l.get('settings.security.confirm.title');
        this.bbar = this.getBBarItems();
        this.items = this.getItems();

        this.callParent(arguments);
    },

    getBBarItems: function () {
        return {
            xtype: 'container',
            layout: {
                type: 'hbox',
                pack: 'center',
            },
            padding: '0 0 10',
            defaults: {
                minWidth: 90,
            },
            items: [
                {
                    xtype: 'button',
                    ui: 'gray',
                    text: _l.get('settings.security.confirm.btn.apply'),
                    scope: this,
                    handler: function () {
                        this.onApply();
                        this.close();

                        return true;
                    },
                },
                { xtype: 'tbspacer', minWidth: 10 },
                {
                    xtype: 'button',
                    ui: 'default',
                    text: _l.get('settings.security.confirm.btn.cancel'),
                    scope: this,
                    handler: function () {
                        this.onCancel();
                        this.close();

                        return false;
                    },
                },
            ],
        };
    },

    getItems: function () {
        return {
            xtype: 'container',
            padding: '15 30',
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'center',
            },
            items: [
                {
                    xtype: 'component',
                    tpl: [
                        '<div class="message-box" style="display: flex; align-items: center; gap: 16px;">',
                        '<div class="x-message-box-warning x-message-box-warning-red" style="flex: 0 0 40px;"></div>',
                        '<div class="x-message-warning" style="margin-left: 0;">{msg}</div>',
                        '</div>'
                    ],
                    data: {
                        msg: _l.get('settings.security.confirm.text'),
                    }
                },
            ],
        };
    },

    onApply: Ext.emptyFn,

    onCancel: Ext.emptyFn,
});
