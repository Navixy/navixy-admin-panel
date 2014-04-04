/**
 * @class NavixyPanel.view.panelUser.authWindow
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.panelUser.authWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.authwindow',

    width: 300,

    closable: false,
    draggable: false,
    shadow: false,
    autoShow: true,

    initComponent: function () {

        var localesStore = Ext.create('Ext.data.Store', {
                fields: ['locale', 'name'],
                data : [
                    {"locale" : "en_US", "name" : "English"},
                    {"locale" : "ru_RU", "name" : "Русский"}
                ]
            });

        // TODO: Locale
//        this.title = "User Login";

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
                        xtype: 'container',
                        role: 'auth-error',
                        hidden: true,
                        style: 'color: #f33; font-size: 14px'
                    },
                    {
                        name: 'login',
                        emptyText: 'Login',
                        xtype: 'textfield',
                        minLength: 2,
                        maxLength: 50,
                        vtype: 'alphanum',
                        allowBlank: false,
                        padding: '20 0 0 0'
                    },
                    {
                        name: 'password',
                        xtype: 'textfield',
                        emptyText: 'Password',
                        inputType: 'password',
                        minLength: 2,
                        maxLength: 50,
                        vtype: 'alphanum',
                        allowBlank: false
                    },
                    {
                        xtype: 'container',
                        padding: '5 0 20 0',
                        layout: {
                            type: 'fit'
                        },
                        items: [
                            {
                                xtype: 'button',
                                scale: 'medium',
                                text: 'Login',
                                flex: 1,
                                role: 'auth-submit'
                            }
                        ]
                    },
                    {
                        fieldLabel: 'Interface language',
                        labelAlign: 'top',
                        name: 'locale',
                        xtype: 'combo',
                        store: localesStore,
                        valueField: 'name',
                        displayField: 'text',
                        emptyText: localesStore.first().get('name'),
                        tpl: Ext.create('Ext.XTemplate',
                            '<tpl for=".">',
                            '<div class="x-boundlist-item locale {locale}">{name}</div>',
                            '</tpl>'
                        ),
                        // template for the content inside text field
                        displayTpl: Ext.create('Ext.XTemplate',
                            '<tpl for=".">',
                            '{name}',
                            '</tpl>'
                        )
                    }
                ]
            }
        ];

        this.callParent(arguments);
    }
});
