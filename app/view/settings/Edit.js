/**
 * @class NavixyPanel.view.settings.Edit
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.settings.Edit', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    alias: 'widget.settingsedit',
    requires: [
        'NavixyPanel.view.widgets.fields.LocaleField'
    ],

    default_paas_domain: '.navixy.ru',
    singleCmp: false,
    rights: null,

    initComponent: function () {

        this.currencyStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data : [
                {type: "RUB", "name": _l.currency.rub},
                {type: "USD", "name": _l.currency.usd},
                {type: "KZT", "name": _l.currency.kzt},
                {type: "BYR", "name": _l.currency.byr}
            ]
        });

        this.mapsStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name', 'free'],
            data : [
                {type: "roadmap", "name": _l.maps.roadmap},
                {type: "satellite", "name": _l.maps.satellite},
                {type: "hybrid", "name": _l.maps.hybrid},
                {type: "yandex", "name": _l.maps.yandex},
                {type: "yandexpublic", "name": _l.maps.yandexpublic, free: true},
                {type: "osm", "name": _l.maps.osm, free: true},
                {type: "osmmapnik", "name": _l.maps.osmmapnik, free: true},
                {type: "wikimapia", "name": _l.maps.wikimapia, free: true},
                {type: "cdcom", "name": _l.maps.cdcom},
                {type: "navitel", "name": _l.maps.navitel},
                {type: "doublegis", "name": _l.maps.doublegis},
                {type: "ovi", "name": _l.maps.ovi},
                {type: "mailru", "name": _l.maps.mailru}
            ]
        });

        this.callParent(arguments);
    },

    afterRender: function () {
        this.applyRights();
        this.callParent(arguments);
    },

    getTitle: function () {
        return _l.settings.edit_form.title;
    },

    getSaveBtnTitle: function () {
        return (this.rights.serviceEdit || this.rights.notificationEdit) && _l.settings.edit_form.save_btn;
    },

    getClearBtnTitle: function () {
        return (this.rights.serviceEdit || this.rights.notificationEdit) && _l.clear_form_btn;
    },

    getBackBtnTitle: function () {
        return false;
    },

    getFieldDefaults: function () {
        return Ext.apply(this.callParent(arguments), {allowBlank: true});
    },

    doFormReset: function () {
        this.applyRecordData();
    },

    getDomainValue: function () {
        var domainField = this.down('[name="domain"]');

        return domainField && domainField.getValue();
    },

    getDefaultMapField: function () {
        return this.down('[name="map_type"]');
    },

    getGoogleIdField: function () {
        return this.down('[name="google_client_id"]');
    },

    getUnFreeMaps: function () {

        return this.query('[role="map-unfree"]');
    },

    checkFreeDomain: function () {
        return this.getDomainValue().indexOf(Config.paas_domain || this.default_paas_domain) > -1;
    },

    updateFreeMaps: function () {
        var isFree = this.checkFreeDomain();

        this[this.checkFreeDomain() ? 'setFreeMaps' : 'unSetFreeMaps']();
    },

    setFreeMaps: function () {
        var store = this.mapsStore,
            defMap = this.getDefaultMapField();

        store.filter('free', true);

        if (!store.findRecord('type', defMap.getValue())) {
            this.getDefaultMapField().setValue(store.first().get('type'))
        }

        this.getGoogleIdField().hide();

        Ext.iterate(this.getUnFreeMaps(), function (field) {
            field.hide();
        }, this);
    },

    unSetFreeMaps: function () {
        var store = this.mapsStore;

        store.removeFilter();
        this.getGoogleIdField().show();

        Ext.iterate(this.getUnFreeMaps(), function (field) {
            field.show();
        }, this);
    },

    afterSave: function () {
        this.applyRecordData();

        Ext.MessageBox.show({
            msg: _l.settings.edit_form.save_msg,
            closable: false,
            buttons: Ext.MessageBox.OK
        });
    },

    getProcessedValues: function () {
        var values = this.getValues();

        this.iterateFields(function(field) {
            if (field.isDisabled()) {
                delete values[field.name];
            }
        });

        return values;
    },

    getNWItems: function () {
        var me = this;

        return [
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.settings.edit_form.main_fields,
                padding: '10 0 20 0',
                role: 'service-field'
            },
            {
                name: 'service_title',
                fieldLabel: _l.settings.fields.service_title,

                minLength: 2,
                maxLength: 100
            },
            {
                name: 'domain',
                fieldLabel: _l.settings.fields.domain + '<sup>*</sup>',

                minLength: 2,
                maxLength: 100,
                listeners: {
                    change: this.updateFreeMaps,
                    scope: this
                }
            },
            {
                name: 'payment_link',
                fieldLabel: _l.settings.fields.payment_link,

                minLength: 2,
                maxLength: 100
            },
            {
                name: 'locale',
                xtype: 'localefield',
                fieldLabel: _l.settings.fields.locale
            },
            {
                name: 'currency',
                xtype: 'combobox',
                fieldLabel: _l.settings.fields.currency,
                store: this.currencyStore,
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type'
            },
            {
                xtype: 'container',
                html: Ext.String.format(_l.settings.edit_form.domain_sup, Config.paas_domain || this.default_paas_domain),
                cls: 'block_sup',
                padding: '10 0 0 170',
                role: 'service-field'
            },
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.settings.edit_form.permission_fields,
                padding: '30 0 20 0',
                role: 'permission-field'
            },
            {
                name: 'email_from',
                fieldLabel: _l.settings.fields.email_from,

                minLength: 2,
                maxLength: 100,
                role: 'permission-field'
            },
            {
                name: 'email_footer',
                xtype: 'textarea',
                fieldLabel: _l.settings.fields.email_footer,

                maxLength: 600,
                role: 'permission-field'
            },
            {
                name: 'sms_originator',
                fieldLabel: _l.settings.fields.sms_originator,

                maxLength: 20,
                role: 'permission-field'
            },
            {
                name: 'caller_id',
                fieldLabel: _l.settings.fields.caller_id,

                maxLength: 20,
                role: 'permission-field'
            }
        ];
    },

    getNEItems: function () {
        var me = this;
        return [
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.settings.edit_form.demo_fields,
                padding: '10 0 20 0',
                role: 'service-field'
            },
            {
                name: 'demo_login',
                fieldLabel: _l.settings.fields.demo_login,

                minLength: 2,
                maxLength: 100
            },
            {
                name: 'demo_password',
                fieldLabel: _l.settings.fields.demo_password,

                minLength: 2,
                maxLength: 100
            },
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.settings.edit_form.map_fields,
                padding: '30 0 20 0',
                role: 'service-field'
            },
            {
                name: 'map_type',
                xtype: 'combobox',
                fieldLabel: _l.settings.fields.maps_default.type,
                store: this.mapsStore,
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type'
            },
            {
                name: 'map_zoom',
                fieldLabel: _l.settings.fields.maps_default.zoom,
                xtype: 'numberfield',
                maxValue: 17,
                minValue: 1
            },
            {
                name: 'map_location_lat',
                fieldLabel: _l.settings.fields.maps_default.location_lat,

                minLength: 2,
                maxLength: 100
            },
            {
                name: 'map_location_lng',
                fieldLabel: _l.settings.fields.maps_default.location_lng,

                minLength: 2,
                maxLength: 100
            },
            {
                name: 'google_client_id',
                fieldLabel: _l.settings.fields.google_client_id,

                minLength: 2,
                maxLength: 100
            },
            {
                xtype: 'checkboxgroup',
                fieldLabel: _l.settings.fields.maps_title,
                columns: 1,
                vertical: true,
                ui: 'light',
                items: this.getMapsList()
            }
        ];
    },

    getMapsList: function () {

        var result = [];

        this.mapsStore.each(function (mapRecord) {
            result.push({
                boxLabel: mapRecord.get('name'),
                name: 'maps',
                inputValue: mapRecord.get('type'),
                role: mapRecord.get('free') ? 'map-free' : 'map-unfree'
            });
        }, this);

        return result;
    },

    getServiceFields: function () {
        return this.query('[role!="permission-field"]');
    },

    getServiceComponents: function () {
        return this.query('[role="service-field"]');
    },

    getPermissionFields: function () {
        return this.query('[role="permission-field"]');
    },

    applyRights: function () {
        var rights = this.rights,
            ignoredXTypes = 'container button toolbar header component';

        Ext.iterate(this.getServiceFields(), function (field) {
            if (ignoredXTypes.indexOf(field.getXType()) < 0) {
                field[!rights.serviceRead ? 'hide' : 'show']();
                field.setDisabled(!rights.serviceEdit);
            }
        }, this);

        Ext.iterate(this.getServiceComponents(), function (field) {
                field[!rights.serviceRead ? 'hide' : 'show']();
        }, this);

        Ext.iterate(this.getPermissionFields(), function (field) {
            if (ignoredXTypes.indexOf(field.getXType()) < 0) {
                field.setDisabled(!rights.notificationEdit);
            }
            field[!rights.notificationRead ? 'hide' : 'show']();
        }, this);
    }

//
//    getSWItems: function () {
//        var me = this;
//        return [];
//    }
});