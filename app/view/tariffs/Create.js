/**
 * @class NavixyPanel.view.users.UserCreate
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.tariffs.Create', {
    extend: 'NavixyPanel.view.tariffs.AbstractForm',
    alias: 'widget.tariffcreate',

    getNWItems: function () {
        var me = this;
        this.deviceTypesStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data : [
                {type: "tracker", "name": _l.get('devices.tracker')},
                {type: "camera", "name": _l.get('devices.camera')}
            ]
        });
        this.tariffTypesStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data : [
                {type: "monthly", "name": _l.get('tariffs.types.monthly')},
                {type: "activeday", "name": _l.get('tariffs.types.activeday')}
            ]
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
                fieldLabel: _l.get('tariffs.price_type.monthly'),
                name: 'price',

                minLength: 1,
                maxLength: 6,
                vtype: 'numeric',

                value: 0
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
                        me.changePaymentType(this.getValue() !== "monthly");
                    }
                }
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

    changePaymentType: function (type) {
        var trackerFields = [
                this.down('[name="proportional_charge"]')
            ],
            price_field = this.down('[name="price"]');

        Ext.iterate(trackerFields, function (field) {
            field[type ? 'hide' : 'show']();
        }, this);

        price_field.setFieldLabel(_l.get('tariffs.price_type')[type ? 'activeday': "monthly"]);
    },
});