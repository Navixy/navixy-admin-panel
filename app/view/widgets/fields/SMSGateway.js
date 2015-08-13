/**
 * @class User.view.form.SMSGateway
 * @extends Ext.container.Container
 * Description
 */

Ext.define('NavixyPanel.view.widgets.fields.SMSGateway', {
    extend: 'Ext.container.Container',
    alias: 'widget.smsgateway',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    fieldLabel: '',
    emptyText: '',

    initComponent: function () {
        this.initStore();

        this.items = this.getItems();

        this.callParent(arguments);
    },

    afterRender: function () {
        var select = this.down('[role=gateway-select]');
        if (select) {
            this.relayEvents(select, ['change']);
        }

        this.callParent(arguments);
    },


    getItems: function () {

        var lp = _l.get('settings.sms_gateway');
        return [
            {
                role: 'gateway-select',
                fieldLabel: this.fieldLabel,
                emptyText: this.emptyText,
                margin: 0,
                labelAlign: 'top',
                labelSeparator: '',
                editable: false,

                xtype: 'combobox',
                applyValueMethod: 'select',
                queryMode: 'local',

                store: this.store,
                displayField: 'desc',
                valueField: 'type',
                forceSelection: true,
                tpl: Ext.create('Ext.XTemplate',
                    '<tpl for=".">',
                    '<div class="x-boundlist-item"><b>{name}</b><br>{desc}</div>',
                    '</tpl>'
                ),

                displayTpl: Ext.create('Ext.XTemplate',
                    '<tpl for=".">',
                    '{name}',
                    '</tpl>'
                ),
                listeners: {
                    change: {
                        fn: this.changeCredentials,
                        scope: this
                    },
                }
            },
            {
                xtype: 'container',
                role: 'gateway-type',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                defaults: {
                    xtype: 'container',
                    role: 'credentials',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    cls: 'credentials',
                    padding: '0 0 11 0',
                    hidden: true,
                    defaults: {
                        xtype: 'textfield',
                        allowBlank: true,
                        margin: '5 10 0 10',
                        labelAlign: 'top',
                        labelSeparator: ''
                    }
                },
                items: [
                    {
                        type: 'navixy'
                    },
                    {
                        type: 'nexmo',
                        items: [
                            {
                                sname: 'nexmo.key',
                                fieldLabel: lp.get('nexmo.credentials.key')
                            },
                            {
                                sname: 'nexmo.secret',
                                fieldLabel: lp.get('nexmo.credentials.secret'),
                                inputType: 'password'
                            }
                        ]
                    },
                    {
                        type: 'twilio',
                        items: [
                            {
                                sname: 'twilio.sid',
                                fieldLabel: lp.get('twilio.credentials.sid')
                            },
                            {
                                sname: 'twilio.token',
                                fieldLabel: lp.get('twilio.credentials.token')
                            }
                        ]
                    },
                    {
                        type: 'smstraffic',
                        items: [
                            {
                                sname: 'smstraffic.login',
                                fieldLabel: lp.get('smstraffic.credentials.login')
                            },
                            {
                                sname: 'smstraffic.password',
                                fieldLabel: lp.get('smstraffic.credentials.password'),
                                inputType: 'password'
                            }
                        ]
                    },
                    {
                        type: 'yaestar',
                        items: [
                            {
                                sname: 'yaestar.ip',
                                fieldLabel: lp.get('yaestar.credentials.ip')
                            },
                            {
                                sname: 'yaestar.port',
                                fieldLabel: lp.get('yaestar.credentials.port')
                            },
                            {
                                sname: 'yaestar.login',
                                fieldLabel: lp.get('yaestar.credentials.login')
                            },
                            {
                                sname: 'yaestar.password',
                                fieldLabel: lp.get('yaestar.credentials.password'),
                                inputType: 'password'
                            }
                        ]
                    },
                    {
                        type: 'smpp',
                        items: [
                            {
                                sname: 'smpp.ip',
                                fieldLabel: lp.get('smpp.credentials.ip')
                            },
                            {
                                sname: 'smpp.port',
                                fieldLabel: lp.get('smpp.credentials.port')
                            },
                            {
                                sname: 'smpp.login',
                                fieldLabel: lp.get('smpp.credentials.login')
                            },
                            {
                                sname: 'smpp.password',
                                fieldLabel: lp.get('smpp.credentials.password'),
                                inputType: 'password'
                            },
                            {
                                sname: 'smpp.source',
                                fieldLabel: lp.get('smpp.credentials.source'),

                                xtype: 'combobox',
                                applyValueMethod: 'select',
                                queryMode: 'local',
                                editable: false,
                                displayField: 'name',
                                valueField: 'type',
                                forceSelection: true,
                                value: '-1',

                                store: Ext.create('Ext.data.Store', {
                                    fields: ['type', 'name'],
                                    data: [
                                        {
                                            type: '-1',
                                            name: lp.get('smpp.credentials.source_select.-1')
                                        },
                                        {
                                            type: '0',
                                            name: lp.get('smpp.credentials.source_select.0')
                                        },
                                        {
                                            type: '1',
                                            name: lp.get('smpp.credentials.source_select.1')
                                        },
                                        {
                                            type: '2',
                                            name: lp.get('smpp.credentials.source_select.2')
                                        },
                                        {
                                            type: '3',
                                            name: lp.get('smpp.credentials.source_select.3')
                                        },
                                        {
                                            type: '4',
                                            name: lp.get('smpp.credentials.source_select.4')
                                        },
                                        {
                                            type: '5',
                                            name: lp.get('smpp.credentials.source_select.5')
                                        },
                                        {
                                            type: '6',
                                            name: lp.get('smpp.credentials.source_select.6')
                                        },
                                        {
                                            type: '7',
                                            name: lp.get('smpp.credentials.source_select.7')
                                        }
                                    ]
                                })
                            },
                            {
                                sname: 'smpp.destination',
                                fieldLabel: lp.get('smpp.credentials.destination'),

                                xtype: 'combobox',
                                applyValueMethod: 'select',
                                queryMode: 'local',
                                editable: false,
                                displayField: 'name',
                                valueField: 'type',
                                forceSelection: true,
                                value: '0',

                                store: Ext.create('Ext.data.Store', {
                                    fields: ['type', 'name'],
                                    data: [
                                        {
                                            type: '0',
                                            name: lp.get('smpp.credentials.destination_select.0')
                                        },
                                        {
                                            type: '1',
                                            name: lp.get('smpp.credentials.destination_select.1')
                                        },
                                        {
                                            type: '3',
                                            name: lp.get('smpp.credentials.destination_select.3')
                                        },
                                        {
                                            type: '4',
                                            name: lp.get('smpp.credentials.destination_select.4')
                                        },
                                        {
                                            type: '6',
                                            name: lp.get('smpp.credentials.destination_select.6')
                                        },
                                        {
                                            type: '8',
                                            name: lp.get('smpp.credentials.destination_select.8')
                                        },
                                        {
                                            type: '9',
                                            name: lp.get('smpp.credentials.destination_select.9')
                                        },
                                        {
                                            type: '10',
                                            name: lp.get('smpp.credentials.destination_select.10')
                                        },
                                        {
                                            type: '13',
                                            name: lp.get('smpp.credentials.destination_select.13')
                                        },
                                        {
                                            type: '18',
                                            name: lp.get('smpp.credentials.destination_select.18')
                                        }
                                    ]
                                })
                            },
                            {
                                sname: 'smpp.charset',
                                fieldLabel: lp.get('smpp.credentials.charset'),

                                xtype: 'combobox',
                                applyValueMethod: 'select',
                                queryMode: 'local',
                                editable: false,
                                displayField: 'name',
                                valueField: 'type',
                                forceSelection: true,
                                value: 'GSM8',

                                store: Ext.create('Ext.data.Store', {
                                    fields: ['type', 'name'],
                                    data: [
                                        {
                                            type: 'GSM8',
                                            name: lp.get('smpp.credentials.charset_select.GSM8')
                                        },
                                        {
                                            type: 'GSM7',
                                            name: lp.get('smpp.credentials.charset_select.GSM7')
                                        },
                                        {
                                            type: 'ISO-8859-1',
                                            name: lp.get('smpp.credentials.charset_select.ISO-8859-1')
                                        },
                                        {
                                            type: 'ISO-8859-15',
                                            name: lp.get('smpp.credentials.charset_select.ISO-8859-15')
                                        },
                                        {
                                            type: 'UTF-8',
                                            name: lp.get('smpp.credentials.charset_select.UTF-8')
                                        },
                                        {
                                            type: 'UCS-2',
                                            name: lp.get('smpp.credentials.charset_select.UCS-2')
                                        }
                                    ]
                                })
                            },
                            {
                                sname: 'smpp.long',
                                fieldLabel: lp.get('smpp.credentials.long'),

                                xtype: 'combobox',
                                applyValueMethod: 'select',
                                queryMode: 'local',
                                editable: false,
                                displayField: 'name',
                                valueField: 'type',
                                forceSelection: true,
                                value: 'UDH',

                                store: Ext.create('Ext.data.Store', {
                                    fields: ['type', 'name'],
                                    data: [
                                        {
                                            type: 'UDH',
                                            name: lp.get('smpp.credentials.long_select.UDH')
                                        },
                                        {
                                            type: 'Payload',
                                            name: lp.get('smpp.credentials.long_select.Payload')
                                        }
                                    ]
                                })
                            }
                        ]
                    }
                ]
            }
        ]
    },

    changeCredentials: function (cmp, type) {
        var container = this.down("[role=credentials][type=" + type + "]");

        this.hideCredentials();
        if (container.items.length) {
            container.show();
        }
    },

    hideCredentials: function () {
        var container = this.down("[role=gateway-type]");

        if (container && container.items) {
            container.items.each(function (item, index) {
                item.hide();
            })
        }
    },


    initStore: function () {
        var lp = _l.get("settings.sms_gateway");
        this.store = Ext.create('Ext.data.Store', {
            fields: ['type', 'name', 'desc'],
            data: [
                {
                    type: 'navixy',
                    name: lp.get('navixy.name'),
                    desc: lp.get('navixy.desc')
                },
                {
                    type: 'nexmo',
                    name: lp.get('nexmo.name'),
                    desc: lp.get('nexmo.desc')
                },
                {
                    type: 'twilio',
                    name: lp.get('twilio.name'),
                    desc: lp.get('twilio.desc')
                },
                {
                    type: 'smstraffic',
                    name: lp.get('smstraffic.name'),
                    desc: lp.get('smstraffic.desc')
                },
                {
                    type: 'yaestar',
                    name: lp.get('yaestar.name'),
                    desc: lp.get('yaestar.desc')
                },
                {
                    type: 'smpp',
                    name: lp.get('smpp.name'),
                    desc: lp.get('smpp.desc')
                }
            ]
        });
    }
})
;
