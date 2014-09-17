/**
 * @class NavixyPanel.view.settings.Edit
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.settings.Edit', {
    extend: 'NavixyPanel.view.components.AbstractTabForm',
    alias: 'widget.settingsedit',
    requires: [
        'NavixyPanel.view.widgets.fields.LocaleField',
        'NavixyPanel.view.settings.UploadWindow'
    ],

    default_paas_domain: '.navixy.ru',
    singleCmp: false,
    rights: null,
    bodyPadding: '0 0 60 0',
    formRowPadding: '50 0 0 0',

    initComponent: function () {

        this.currencyStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data: [
                {type: "RUB", "name": _l.get('currency.rub')},
                {type: "USD", "name": _l.get('currency.usd')},
                {type: "KZT", "name": _l.get('currency.kzt')},
                {type: "BYR", "name": _l.get('currency.byr')}
            ]
        });

        this.mapsStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name', 'free'],
            data: [
                {type: "roadmap", "name": _l.get('maps.roadmap'), free: true},
                {type: "satellite", "name": _l.get('maps.satellite'), free: true},
                {type: "hybrid", "name": _l.get('maps.hybrid'), free: true},
                {type: "yandex", "name": _l.get('maps.yandex')},
                {type: "yandexpublic", "name": _l.get('maps.yandexpublic'), free: true},
                {type: "osm", "name": _l.get('maps.osm'), free: true},
                {type: "osmmapnik", "name": _l.get('maps.osmmapnik'), free: true},
                {type: "wikimapia", "name": _l.get('maps.wikimapia'), free: true},
                {type: "cdcom", "name": _l.get('maps.cdcom')},
                {type: "navitel", "name": _l.get('maps.navitel')},
                {type: "doublegis", "name": _l.get('maps.doublegis')},
                {type: "ovi", "name": _l.get('maps.ovi')},
                {type: "mailru", "name": _l.get('maps.mailru')}
            ]
        });

        this.callParent(arguments);
    },

    afterRender: function () {
        this.applyRights();
        this.callParent(arguments);
    },

    getTitle: function () {
        return _l.get('settings.edit_form.title');
    },

    getSaveBtnTitle: function () {
        return (this.rights.serviceEdit || this.rights.notificationEdit) && _l.get('settings.edit_form.save_btn');
    },

    getClearBtnTitle: function () {
        return (this.rights.serviceEdit || this.rights.notificationEdit) && _l.get('clear_form_btn');
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

        this[isFree ? 'setFreeMaps' : 'unSetFreeMaps']();
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
            msg: _l.get('settings.edit_form.save_msg'),
            closable: false,
            buttons: Ext.MessageBox.OK
        });
    },

    getProcessedValues: function () {
        var values = this.getValues();

        if (this.isPassTab()) {
            values = {
                old_password: values.old_password,
                new_password: values.new_password
            };
        } else {
            this.iterateFields(function (field) {
                if (field.isDisabled()) {
                    delete values[field.name];
                }
            });
        }

        return values;
    },

    getCellDefaults: function () {
        return {
            xtype: 'container',
            flex: 1,
            defaults: this.getFieldDefaults(),
            padding: '40 20 0 25',
            layout: {
                type: 'vbox'
            }
        };
    },

    getTabs: function () {

        return [
            {
                title: _l.get('settings.edit_form.domain_fields'),
                items: [
                    {
                        items: this.getDomainItems()
                    }
                ]
            },
            // TODO: Open after all api ready
            {
                title: _l.get('settings.edit_form.custom_fields'),
                items: [
                    {
                        items: this.getImgsCustomLeft()
                    },
                    {
                        items: this.getImgsCustomRight()
                    }
                ]
            },
            {
                title: _l.get('settings.edit_form.regional_fields'),
                items: [
                    {
                        items: this.getRegionalItems()
                    }
                ]
            },
            {
                title: _l.get('settings.edit_form.maps_fields'),
                items: [
                    {
                        items: this.getMapsItems()
                    },
                    {
                        padding: this.formRowPadding,
                        items: this.getMapsHint()
                    }
                ]
            },
            {
                title: _l.get('settings.edit_form.demo_fields'),
                items: [
                    {
                        items: this.getDemoItems()
                    },
                    {
                        padding: this.formRowPadding,
                        items: this.getDemoHint()
                    }
                ]
            },
            {
                title: _l.get('settings.edit_form.notifications_fields'),
                items: [
                    {
                        items: this.getNotificationsItems()
                    }
                ]
            },
            Ext.checkPermission('password', 'update')
                ? {
                title: _l.get('settings.edit_form.password_fields'),
                role: 'pass_tab',
                items: [
                    {
                        items: this.getPasswordItems()
                    },
                    {
                        padding: this.formRowPadding,
                        items: this.getPassHint()
                    }
                ]
            }
                : null
        ]
    },

    getDomainItems: function () {
        return [
            {
                name: 'domain',
                fieldLabel: _l.get('settings.fields.domain') + '<sup>*</sup>',

                minLength: 2,
                maxLength: 100,
                listeners: {
                    change: this.updateFreeMaps,
                    scope: this
                }
            },
            {
                name: 'promo_url',
                fieldLabel: _l.get('settings.fields.promo_url'),
                allowBlank: true,
                minLength: 2,
                maxLength: 100
            },
            {
                name: 'payment_link',
                fieldLabel: _l.get('settings.fields.payment_link'),

                minLength: 2,
                maxLength: 100
            },
            {
                xtype: 'container',
                html: Ext.String.format(_l.get('settings.edit_form.domain_sup'), Config.paas_domain || this.default_paas_domain),
                cls: 'block_sup',
                padding: '10 0 0 170',
                role: 'service-field'
            }
        ]
    },

    getImgsCustomLeft: function () {

        return [
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.get('settings.edit_form.main_texts_title'),
                padding: '0 0 20 0'
            },
            {
                name: 'service_title',
                fieldLabel: _l.get('settings.fields.service_title'),

                minLength: 2,
                maxLength: 100,

                value: '<Service name>'
            },
            {
                name: 'login_footer',
                xtype: 'textarea',
                labelAlign: 'top',
                height: 180,
                fieldLabel: _l.get('settings.fields.footer_text'),

                maxLength: 512,

                value: '<FooterText Lorem ipsum...>'
            }
        ]
    },

    getImgsCustomRight: function () {

        return [
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.get('settings.edit_form.favicon_title'),
                padding: '0 0 10 0'
            },
            this.getImgButtonConfig('favicon'),
            this.getImgConfig('favicon', {maxWidth: 28}),
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.get('settings.edit_form.logo_title'),
                padding: '20 0 10 0'
            },
            this.getImgButtonConfig('logo'),
            this.getImgConfig('logo'),
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.get('settings.edit_form.login_wallpaper_title'),
                padding: '20 0 10 0'
            },
            this.getImgButtonConfig('login_wallpaper'),
            this.getImgConfig('login_wallpaper')
        ]
    },

    getImgConfig: function (type, config) {
        var value = this.getImgUrl(type),
            role = type + '_img';

        return Ext.apply({
                xtype: 'image',
                role: role,
                hidden: !value,
                src: value,
                cls: 'form-img',
                maxWidth: 350,
                listeners: {
                    render: function (img) {
                        img.getEl().on('load', function () {
                            img.ownerCt.doLayout();
                        });
                        img.getEl().on('click', function (e, node) {
                            window.open(Ext.get(node).getAttribute('src'), '_blank');
                        });
                    }
                }
            },
                config || {})
    },

    getImgUrl: function (type, record) {
        var data = record
                ? record.getData()
                : this.getRecordData(),
            value = data[type],
            isUrl = new RegExp('http://|https://', 'i').test(value),
            aCache = "?" + new Date().getTime();

        return value
            ? isUrl
                ? value + aCache
                : [Ext.API.getGlobalApiUrl({action: value}), aCache].join('')
            : null
    },


    getImgButtonConfig: function (type) {
        var me = this,
            role = type + '_upload_btn',
            text = this.getRecordData()[type] ? _l.get('settings.edit_form.update_btn') : _l.get('settings.edit_form.upload_btn'),
            delRole = type + '_delete_btn',
            hidden = !this.getRecordData()[type];

        return Ext.checkPermission('service_settings', 'update')
            ? {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        role: role,
                        xtype: 'button',
                        text: text,
                        margin: '0 0 10 0',
                        ui: 'default',
                        scale: 'medium',
                        width: 140,
                        handler: function () {
                            Ext.widget('uploadwindow', {
                                fileType: type,
                                listeners: {
                                    fileupload: me.afterUpload,
                                    scope: me
                                }
                            });
                        }
                    },
                    {
                        role: delRole,
                        xtype: 'button',
                        text: _l.get('settings.edit_form.remove_btn'),
                        margin: '0 0 10 10',
                        hidden: hidden,
                        ui: 'gray',
                        scale: 'medium',
                        width: 140,
                        handler: function () {
                            me.removeImgCall(type);
                        }
                    }
                ]
            }
            : null
    },

    removeImgCall: function (type) {

        Ext.API.removeSettingsPassword({
            params: {
                type: type
            },
            callback: function () {
                this.afterRemove(type);
            },
            failure: function (response) {
                this.afterRemove(response);
            },
            scope: this
        })
    },


    afterUpload: function (type, record) {
        var imgContainer = this.down('[role="' + type + '_img"]'),
            removeBtn = this.down('[role="' + type + '_delete_btn"]'),
            newSrc = this.getImgUrl(type, record);

        this.record.set(type, record.get(type));

        if (imgContainer && removeBtn && newSrc) {
            imgContainer.show();
            removeBtn.show();
            imgContainer.setSrc(newSrc);
        }
    },

    afterRemove: function (type) {
        var imgContainer = this.down('[role="' + type + '_img"]'),
            removeBtn = this.down('[role="' + type + '_delete_btn"]');

        if (imgContainer && removeBtn) {
            imgContainer.hide();
            removeBtn.hide();
        }
    },

    afterRemoveFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.settings')[errCode] || _l.get('errors')[errCode] || status.description || false;

        Ext.MessageBox.show({
            title: _l.get('error') + ' #' + errCode,
            msg: errDescription,
            closable: false,
            buttons: Ext.MessageBox.OK
        });
    },

    getRegionalItems: function () {
        return [
            {
                name: 'locale',
                xtype: 'localefield',
                fieldLabel: _l.get('settings.fields.locale')
            },
            {
                name: 'currency',
                xtype: 'combobox',
                fieldLabel: _l.get('settings.fields.currency'),
                store: this.currencyStore,
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type'
            }
        ]
    },

    getMapsItems: function () {
        return [
            {
                xtype: 'checkboxgroup',
                fieldLabel: _l.get('settings.fields.maps_title'),
                columns: 1,
                vertical: true,
                margin: '0 0 10 0',
                ui: 'light',
                items: this.getMapsList()
            },
            {
                name: 'map_type',
                xtype: 'combobox',
                fieldLabel: _l.get('settings.fields.maps_default.type'),
                store: this.mapsStore,
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type'
            },
            {
                name: 'map_zoom',
                fieldLabel: _l.get('settings.fields.maps_default.zoom'),
                xtype: 'numberfield',
                maxValue: 17,
                minValue: 1
            },
            {
                name: 'map_location_lat',
                fieldLabel: _l.get('settings.fields.maps_default.location_lat'),
                allowBlank: false,
                minLength: 2,
                maxLength: 100
            },
            {
                name: 'map_location_lng',
                fieldLabel: _l.get('settings.fields.maps_default.location_lng'),
                allowBlank: false,
                minLength: 2,
                maxLength: 100
            },
            {
                name: 'google_client_id',
                fieldLabel: _l.get('settings.fields.google_client_id'),
                minLength: 2,
                maxLength: 100
            }
        ];
    },

    getMapsHint: function () {
        return [
            {
                xtype: 'container',
                html: _l.get('settings.edit_form.maps_hint')
            }
        ];
    },

    getDemoItems: function () {
        return [
            {
                name: 'demo_login',
                fieldLabel: _l.get('settings.fields.demo_login'),

                minLength: 2,
                maxLength: 100
            },
            {
                name: 'demo_password',
                fieldLabel: _l.get('settings.fields.demo_password'),

                minLength: 2,
                maxLength: 100
            }
        ];
    },

    getDemoHint: function () {
        return [
            {
                xtype: 'container',
                html: _l.get('settings.edit_form.demo_hint')
            }
        ];
    },

    getNotificationsItems: function () {
        return [
            {
                name: 'email_from',
                fieldLabel: _l.get('settings.fields.email_from'),

                minLength: 2,
                maxLength: 100,
                role: 'permission-field'
            },
            {
                name: 'email_footer',
                xtype: 'textarea',
                fieldLabel: _l.get('settings.fields.email_footer'),

                maxLength: 600,
                role: 'permission-field'
            },
            {
                name: 'sms_originator',
                fieldLabel: _l.get('settings.fields.sms_originator'),
                allowBlank: false,
                maxLength: 20,
                role: 'permission-field'
            },
            {
                name: 'caller_id',
                fieldLabel: _l.get('settings.fields.caller_id'),
                allowBlank: false,
                maxLength: 20,
                role: 'permission-field'
            }
        ];
    },

    getPassHint: function () {
        return [
            {
                xtype: 'container',
                html: _l.get('settings.edit_form.pass_hint')
            }
        ];
    },

    getPasswordItems: function () {
        var me = this;

        return [
            {
                fieldLabel: _l.get('settings.fields.password'),
                name: 'new_password',
                inputType: 'password',

                minLength: 6,
                maxLength: 20
            },
            {
                fieldLabel: _l.get('settings.fields.password_repeat'),
                inputType: 'password',

                minLength: 6,
                maxLength: 20,

                validator: function (value) {
                    var pass_val = me.down('textfield[name=new_password]').getValue();
                    return value === pass_val || _l.get('settings.fields.password_mismatched');
                }
            },
            {
                fieldLabel: _l.get('settings.fields.password_old'),
                name: 'old_password',
                inputType: 'password'
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

    isPassTab: function () {
        var tab = this.down('tabpanel').getActiveTab(),
            role = tab && tab.role;

        return role === 'pass_tab'
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
            ignoredXTypes = 'container,button,toolbar,header,component';

        Ext.iterate(this.getServiceFields(), function (field) {
            if (!field.is(ignoredXTypes)) {
                field[!rights.serviceRead ? 'hide' : 'show']();
                field.setDisabled(!rights.serviceEdit);
            }
        }, this);

        Ext.iterate(this.getServiceComponents(), function (field) {
            field[!rights.serviceRead ? 'hide' : 'show']();
        }, this);

        Ext.iterate(this.getPermissionFields(), function (field) {
            if (!field.is(ignoredXTypes)) {
                field.setDisabled(!rights.notificationEdit);
            }
            field[!rights.notificationRead ? 'hide' : 'show']();
        }, this);
    }
});