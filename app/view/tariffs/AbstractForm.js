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
        return _l.get('tariffs.create_form.title');
    },

    getSaveBtnTitle: function () {
        return _l.get('tariffs.create_form.save_btn');
    },

    getClearBtnTitle: function () {
        return _l.get('tariffs.create_form.clear_btn');
    },

    getNWItems: function () {
        var me = this,
            deviceData = [
                {type: "tracker", "name": _l.get('devices.tracker')},
            ],
            dealer_store = Ext.getStore('Dealer'),
            dealer = dealer_store && dealer_store.first();

        if (!!dealer.get('enable_cameras')) {
            deviceData.push({type: "camera", "name": _l.get('devices.camera')})
        }

        this.deviceTypesStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data : deviceData
        });
        this.tariffTypesStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data : this.getTariffTypesData()
        });

        return [
            {
                xtype: 'container',
                height: 20
            },
            {
                fieldLabel: _l.get('tariffs.fields.name'),
                name: 'name',

                minLength: 2,
                maxLength: 100
            },
            {
                name: 'device_type',
                xtype: 'combobox',
                fieldLabel: _l.get('tariffs.fields.device_type'),
                store: this.deviceTypesStore,
                editable: false,
                disabled: true,
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
                name: 'type',
                xtype: 'combobox',
                fieldLabel: _l.get('tariffs.fields.tariff_type'),
                store: this.tariffTypesStore,
                editable: false,
                disabled: true,
                hidden: this.getRecordData().device_type !== "tracker",
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type',
                listeners: {
                    change: function() {
                        me.changePaymentType(this.getValue());
                    }
                }
            },
            {
                fieldLabel: _l.get('tariffs.price_type')[this.getRecordData().type || "monthly"],
                name: 'price',

                editable: false,
                disabled: true,

                minLength: 1,
                maxLength: 6,
                vtype: 'numeric',

                value: 0
            }
        ];
    },

    getSWItems: function () {
        var me = this;

        return [
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.get('tariffs.create_form.options_fields'),
                padding: '10 0 20 0'
            },
            {
                fieldLabel: _l.get('tariffs.fields.group_id_exp'),
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
                fieldLabel: _l.get('tariffs.fields.device_limit_exp'),
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
                fieldLabel: _l.get('tariffs.fields.store_period'),
                fname: 'store_period',
                allowBlank: true,
                xtype: 'periodfield',
                role: 'store_period',
                ui: 'light',
                width: 400,
                labelWidth: 225
            },
            {
                boxLabel: _l.get('tariffs.fields.proportional_charge'),
                name: 'proportional_charge',
                labelWidth: 'auto',
                width: 'auto',
                xtype: 'checkbox'
            },
            {
                boxLabel: _l.get('tariffs.fields.active_exp'),
                name: 'active',
                labelWidth: 'auto',
                width: 'auto',
                xtype: 'checkbox'
            },
            {
                boxLabel: _l.get('tariffs.fields.has_reports'),
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
                tip: _l.get('tariffs.fields.service_price')
            },
            tariffPrices = Ext.getStore('TariffPrices').getPrices();

        return [
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.get('tariffs.create_form.prices_fields'),
                padding: '10 0 20 0'
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '0 0 5 0',
                items: [
                    Ext.apply({
                        fieldLabel: _l.get('tariffs.fields.outgoing_sms'),
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
                        fieldLabel: _l.get('tariffs.fields.incoming_sms'),
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
                        fieldLabel: _l.get('tariffs.fields.service_sms'),
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
                        fieldLabel: _l.get('tariffs.fields.phone_call'),
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
                        fieldLabel: _l.get('tariffs.fields.traffic'),
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

    changePaymentType: function (paymentType) {
        var type = paymentType == "monthly";

        var trackerFields = [
                this.down('[name="proportional_charge"]')
            ],
            price_field = this.down('[name="price"]');

        Ext.iterate(trackerFields, function (field) {
            field[!type ? 'hide' : 'show']();
        }, this);

        price_field.setFieldLabel(_l.get('tariffs.price_type')[paymentType]);
        price_field.show();
    },

    getTariffTypesData: function () {
        var types = Ext.Array.difference(["monthly", "everyday", "activeday"], Config.excludedTariffs ? Ext.isArray(Config.excludedTariffs) ? Config.excludedTariffs : [Config.excludedTariffs] : []),
            result = [],
            empty_result = [
                {
                    type: null, "name": _l.get('tariffs.types.empty')
                }
            ];

        Ext.iterate(types, function(type) {
            result.push({
                type: type, "name": _l.get('tariffs.types')[type]
            })
        }, this);

        return result.length ? result : empty_result;
    },

    gatSaveTarget: function (value) {
        return 'tariff/' + (value || this.record.getId());
    },

    getProcessedValues: function () {
        var values = this.getValues(),
            type = values.type || this.getRecordData().type;

        this.iterateFields(function(field) {
            if (field.is('checkboxfield, checkbox')) {
                values[field.name] = field.getValue();
            }
        });

        if (type != "monthly") {
            values.proportional_charge = false;
        }
        return values;
    }
});