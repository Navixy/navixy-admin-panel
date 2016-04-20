/**
 * @class NavixyPanel.view.settings.avangate.TestEmailWindow
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.settings.smtpgate.TestEmailWindow', {
    extend: 'Ext.Window',
    alias: 'widget.smtp-gate-test-email-win',
    autoShow: true,
    modal: true,
    closeAction: 'destroy',
    bodyPadding: '0 20 20 20',
    width: 300,
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'stretch'
    },
    initComponent: function () {
        var localePart = _l.get('settings.test_email');

        this.title = localePart.get('title');

        this.items = [{
            xtype: 'textfield',
            fieldLabel: localePart.get('email_field'),
            vtype: 'email',
            labelAlign: 'top',
            width: 200,
            emptyText: 'example@example.com',
            allowBlank: false
        }, {
            xtype: 'button',
            maxWidth: 100,
            text: localePart.get('send_btn'),
            scale: 'medium',
            handler: this.sendTestEmail,
            scope: this
        }];

        this.callParent(arguments);
    },

    afterRender: function () {
        this.callParent(arguments);
        this.down('textfield').focus();
    },

    sendTestEmail: function (btn) {
        var email = this.down('textfield').getValue();

        if (email) {
            Ext.API.sendTestEmail({
                params: {
                    to: email
                },
                callback: function () {
                    btn.up().close();
                }
            })
        }

    }

});