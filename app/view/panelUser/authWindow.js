/**
 * @class NavixyPanel.view.panelUser.authWindow
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.panelUser.authWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.authwindow',
    requires: ['NavixyPanel.view.widgets.fields.LocaleCombo'],

    width: 320,

    closable: false,
    draggable: false,
    shadow: false,
    autoShow: true,
    errMsg: null,

    initComponent: function () {

        this.items = [
            {
                xtype: 'form',
                role: 'auth-form',
                bodyPadding: '15 35 35 35',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                listeners: {
                    afterRender: function(thisForm, options){
                        this.keyNav = Ext.create('Ext.util.KeyNav', this.el, {
                            enter: function () {
                                this.fireEvent('submit', this.getValues());
                            },
                            scope: this
                        });
                    }
                },
                items: [
                    {
                        role: 'auth-error',
                        xtype: 'container',

                        hidden: true,
                        style: 'color: #f33; font-size: 14px'
                    },
                    {
                        name: 'login',
                        xtype: 'textfield',

                        minLength: 2,
                        maxLength: 50,
                        vtype: 'alphanum',
                        allowBlank: false,

                        emptyText: _l.auth.login,
                        padding: '20 0 0 0'
                    },
                    {
                        name: 'password',
                        xtype: 'textfield',
                        inputType: 'password',

                        minLength: 2,
                        maxLength: 50,
                        vtype: 'alphanum',
                        allowBlank: false,

                        emptyText: _l.auth.password
                    },
                    {
                        xtype: 'container',
                        padding: '5 0 20 0',
                        layout: {
                            type: 'fit'
                        },
                        items: [
                            {
                                role: 'auth-submit',
                                xtype: 'button',

                                scale: 'medium',
                                text: _l.auth.login_btn,
                                flex: 1
                            }
                        ]
                    },
                    {
                        name: 'locale',
                        xtype: 'localecombo'
                    }
                ]
            }
        ];

        this.callParent(arguments);
    },

    afterRender: function () {
        this.callParent(arguments);

        if (this.errMsg) {
            this.showError(this.errMsg);
        }
    },

    showError: function (errMsg) {
        var errBox = this.down('[role=auth-error]');

        errBox.show();
        errBox.update(errMsg);
        this.down('form').getForm().reset();
    }
});
