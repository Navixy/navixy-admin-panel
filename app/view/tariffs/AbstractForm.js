/**
 * @class NavixyPanel.view.tariffs.AbstractForm
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.tariffs.AbstractForm', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    requires: [
        'NavixyPanel.view.widgets.ClickableComponent',
        'NavixyPanel.view.widgets.fields.PeriodField'
    ],

    getTitle: function () {
        return _l.tariffs.create_form.title;
    },

    getSaveBtnTitle: function () {
        return _l.tariffs.create_form.save_btn;
    },

    getClearBtnTitle: function () {
        return _l.tariffs.create_form.clear_btn;
    },

    getNWItems: function () {
        var me = this;
        this.deviceTypesStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data : [
                {type: "tracker", "name": _l.devices.tracker},
                {type: "camera", "name": _l.devices.camera}
            ]
        });
        this.tariffTypesStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data : [
                {type: "monthly", "name": _l.tariffs.types.monthly},
                {type: "daily", "name": _l.tariffs.types.daily}
            ]
        });

        return [
            {
                xtype: 'container',
                height: 20
            },
            {
                fieldLabel: _l.tariffs.fields.name,
                name: 'name',

                minLength: 2,
                maxLength: 100
            },
            {
                fieldLabel: _l.tariffs.fields.price,
                name: 'price',

                minLength: 1,
                maxLength: 6,
                vtype: 'numeric',

                value: 0
            },
            {
                name: 'device_type',
                xtype: 'combobox',
                fieldLabel: _l.tariffs.fields.device_type,
                store: this.deviceTypesStore,
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type',
                listeners: {
                    change: function() {
                        me.changeDeviceType(this.getValue() !== "tracker");
                    }
                }
            },
            {
                // TODO: Tariff_type name api value
                name: 'tariff_type',
                xtype: 'combobox',
                fieldLabel: _l.tariffs.fields.tariff_type,
                store: this.tariffTypesStore,
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type',
                listeners: {
                    change: function() {
                        me.changePaymentType(this.getValue() !== "monthly");
                    }
                }
            }
        ];
    },

    getSWItems: function () {
        var me = this;

        return [
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.tariffs.create_form.options_fields,
                padding: '10 0 20 0'
            },
            {
                fieldLabel: _l.tariffs.fields.group_id_exp,
                name: 'group_id',
                labelAlign: 'left',
                width: 400,
                labelWidth: 220,
                minLength: 1,
                maxLength: 6,
                vtype: 'numeric',
                value: 0
            },
            {
                fieldLabel: _l.tariffs.fields.device_limit_exp,
                name: 'device_limit',
                allowBlank: true,
                labelAlign: 'left',
                width: 400,
                labelWidth: 220,
                minLength: 1,
                maxLength: 6,
                vtype: 'numeric',
                value: 0
            },
            {
                fieldLabel: _l.tariffs.fields.store_period,
                fname: 'store_period',
                allowBlank: true,
                xtype: 'periodfield',
                role: 'store_period',
                ui: 'light',
                width: 400,
                labelWidth: 225
            },
            {
                boxLabel: _l.tariffs.fields.proportional_charge,
                name: 'proportional_charge',
                labelWidth: 'auto',
                width: 'auto',
                xtype: 'checkbox'
            },
            {
                boxLabel: _l.tariffs.fields.active_exp,
                name: 'active',
                labelWidth: 'auto',
                width: 'auto',
                xtype: 'checkbox'
            },
            {
                boxLabel: _l.tariffs.fields.has_reports,
                name: 'has_reports',
                allowBlank: true,
                labelWidth: 'auto',
                width: 'auto',
                xtype: 'checkbox'
            }
        ];
    },

    getSEItems: function () {
        var me = this,
            numericDefaults = Ext.apply(
                this.getFieldDefaults(),
                {
                    minLength: 1,
                    maxLength: 6,
                    vtype: 'numeric',
                    width: 410,
                    value: 0
                }
            ),
            priceDefaults = {
                xtype: 'clickable',
                padding: '5 5',
                width: 40,
                style: {
                    'text-align': 'right'
                },
                tip: _l.tariffs.fields.service_price
            },
            tariffPrices = Ext.getStore('TariffPrices').getPrices();

        return [
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.tariffs.create_form.prices_fields,
                padding: '10 0 20 0'
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '0 0 5 0',
                items: [
                    Ext.apply({
                        fieldLabel: _l.tariffs.fields.outgoing_sms,
                        name: 'outgoing_sms'
                    }, numericDefaults),
                    Ext.apply({
                        html: '+' + tariffPrices.service_sms
                    }, priceDefaults)
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '0 0 5 0',
                items: [
                    Ext.apply({
                        fieldLabel: _l.tariffs.fields.incoming_sms,
                        name: 'incoming_sms'
                    }, numericDefaults),
                    Ext.apply({
                        html: '+' + tariffPrices.incoming_sms
                    }, priceDefaults)
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '0 0 5 0',
                items: [
                    Ext.apply({
                        fieldLabel: _l.tariffs.fields.service_sms,
                        name: 'service_sms'
                    }, numericDefaults),
                    Ext.apply({
                        html: '+' + tariffPrices.service_sms
                    }, priceDefaults)
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '0 0 5 0',
                items: [
                    Ext.apply({
                        fieldLabel: _l.tariffs.fields.phone_call,
                        name: 'phone_call'
                    }, numericDefaults),
                    Ext.apply({
                        html: '+' + tariffPrices.phone_call
                    }, priceDefaults)
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '0 0 5 0',
                items: [
                    Ext.apply({
                        fieldLabel: _l.tariffs.fields.traffic,
                        name: 'traffic'
                    }, numericDefaults),
                    Ext.apply({
                        html: '+' + tariffPrices.traffic
                    }, priceDefaults)
                ]
            }
        ];
    },

    changeDeviceType: function (type) {
        var trackerFields = [
                this.down('[name="has_reports"]'),
                this.down('[name="device_limit"]'),
                this.down('[role="store_period"]')
            ];

        Ext.iterate(trackerFields, function (field) {
            field[type ? 'hide' : 'show']();
        }, this);
    },

    changePaymentType: function (type) {
        var trackerFields = [
                this.down('[name="proportional_charge"]')
            ];

        Ext.iterate(trackerFields, function (field) {
            field[type ? 'hide' : 'show']();
        }, this);
    },

    gatSaveTarget: function (value) {
        return 'tariff/' + (value || this.record.getId());
    }
});