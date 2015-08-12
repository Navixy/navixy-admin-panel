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

    getItems: function () {
        return [
            {
                fieldLabel: this.fieldLabel,
                emptyText: this.emptyText,
                margin: '5 0 0 0',
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
                )
            }
        ]
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
