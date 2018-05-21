/**
 * @class NavixyPanel.view.users.UserCreate
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.tariffs.Create', {
    extend: 'NavixyPanel.view.tariffs.AbstractForm',
    alias: 'widget.tariffcreate',

    getNWItems: function () {
        var me = this,
            deviceData = [
                {type: "tracker", "name": _l.get('devices.tracker')},
            ],
            dealer_store = Ext.getStore('Dealer'),
            dealer = dealer_store && dealer_store.first();

        deviceData.push({type: "camera", "name": _l.get('devices.camera')})

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
                hidden: true,
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
                fieldLabel: _l.get('tariffs.price_type.monthly'),
                name: 'price',

                minLength: 1,
                maxLength: 14,
                vtype: 'numeric',

                hidden: true,
                value: 0
            }
        ];
    },

    changeDeviceType: function (type) {
        var trackerFields = [
            this.down('[name="has_reports"]'),
            this.down('[name="device_limit"]'),
            this.down('[name="type"]'),
            this.down('[role="store_period"]')
            ];

        Ext.iterate(trackerFields, function (field) {
            field[type ? 'hide' : 'show']();
        }, this);

        if (type) {
            this.changePaymentType(false);
        }
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
    }
});