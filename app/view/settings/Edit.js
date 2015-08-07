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
        'NavixyPanel.view.widgets.fields.TimeZoneCombo',
        'NavixyPanel.view.settings.UploadWindow',
        'NavixyPanel.view.settings.BlockHeader'
    ],

    default_paas_domain: '.navixy.ru',
    singleCmp: false,
    rights: null,
    bodyPadding: '0 0 60 0',
    formRowPadding: '50 0 0 0',

    initComponent: function () {
        this.mapsStore = Ext.getStore('MapTypes');
        this.mapsStore.setAllowedMaps(this.getRecordData().allowed_maps || []);
        this.callParent(arguments);
    },

    afterRender: function () {
        this.applyRights();
        this.callParent(arguments);
        this.down('tabpanel').on('tabchange', this.changeSaveBtn, this);
    },

    getHintSymbol: function (hint, cls) {
        return ['<span class="icon-help ',
                cls || '',
            '" style="margin-left:5px;color:#f89406;font-size:12px;" ',
            'data-qtip="', Ext.String.htmlEncode(hint),
            '"></span>'].join('');
    },

    changeSaveBtn: function () {

        this.getForm().isValid();

        var save_btn = this.down('[action="form_submit"]'),
            pass_btn = this.down('[action="pass_submit"]');

        if (save_btn && pass_btn) {
            if (this.isPassTab()) {
                pass_btn.show();
                save_btn.hide();
            } else {
                pass_btn.hide();
                save_btn.show();
            }
        }
        this.clearPasswords();
    },

    getButtons: function () {

        var passSaveBtn = this.getPassBtnTitle(),
            saveBtn = this.getSaveBtnTitle(),
            clearBtn = this.getClearBtnTitle(),
            backBtn = this.getBackBtnTitle(),
            result = [];

        if (saveBtn) {
            result.push(
                {
                    text: saveBtn,
                    scale: 'medium',
                    formBind: true,
                    disabled: true,
                    margin: '10 5',
                    action: 'form_submit',
                    handler: Ext.bind(this.sendForm, this)
                }
            );
        }

        if (passSaveBtn) {
            result.push(
                {
                    text: passSaveBtn,
                    scale: 'medium',
                    hidden: true,
                    margin: '10 5',
                    action: 'pass_submit',
                    handler: Ext.bind(this.sendPassForm, this)
                }
            );
        }

        if (clearBtn) {
            result.push(
                {
                    text: clearBtn,
                    scale: 'medium',
                    ui: 'gray',
                    margin: '10 5',
                    handler: Ext.bind(this.doFormReset, this)
                }
            );
        }

        if (backBtn) {
            result.push(
                {
                    text: backBtn,
                    scale: 'medium',
                    ui: 'gray',
                    margin: '10 5',
                    handler: Ext.bind(this.backFromForm, this)
                }
            );
        }

        return result;
    },

    sendPassForm: function () {
        var form = this.getForm();

        if (form.isValid()) {
            this.fireEvent('formsubmitpassword', this, this.getProcessedValues(), this.record);
        }
    },

    getTitle: function () {
        return _l.get('settings.edit_form.title');
    },

    getSaveBtnTitle: function () {
        return (this.rights.serviceEdit || this.rights.notificationEdit) && _l.get('settings.edit_form.save_btn');
    },

    getPassBtnTitle: function () {
        return Ext.checkPermission('password', 'update') && _l.get('settings.edit_form.pass_save_btn');
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
        var value = this.getDomainValue(),
            fromConfig = Config.paas_domain && Ext.Array.from(Config.paas_domain),
            isDomain = false;

        Ext.iterate(fromConfig, function (domain) {
            if (value.indexOf(domain) > -1) {
                isDomain = true;
            }
        });

        return isDomain || false
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

//        this.getGoogleIdField().hide();

        Ext.iterate(this.getUnFreeMaps(), function (field) {
            field.hide();
        }, this);
    },

    unSetFreeMaps: function () {
        var store = this.mapsStore;

        store.removeFilter();
//        this.getGoogleIdField().show();

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

    afterPasswordSave: function () {
        this.clearPasswords();
        Ext.MessageBox.show({
            msg: _l.get('settings.edit_form.pass_save_msg'),
            closable: false,
            buttons: Ext.MessageBox.OK
        });
    },

    clearPasswords: function () {
        var pField = this.down('[name="password"]'),
            npField = this.down('[name="new_password"]'),
            opField = this.down('[name="old_password"]');

        if (pField && npField && opField) {
            pField.setValue('');
            npField.setValue('');
            opField.setValue('');
        }
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
                if (field.is('checkboxgroup')) {
                    var value = field.getValue(),
                        name = field.items.first().name,
                        data = value[name];

                    values[name] = Ext.isArray(data) ? data : [data];
                }
                if (field.role === 'checkbox') {
                    values[field.name] = field.getValue();
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
            padding: '20 20 0 25',
            layout: {
                type: 'vbox'
            }
        };
    },

    getTabs: function () {

        return [
            {
                title: _l.get('settings.edit_form.branding_fields'),
                role: 'tab',
                padding: '0 0 0 20',
                items: [
                    {
                        items: this.getBrandingItems(),
                        defaults: Ext.apply(this.getFieldDefaults(), {
                            margin: '5 0 0 10',
                            labelAlign: 'top',
                            labelSeparator: ''
                        })
                    },
                    {
                        items: this.getImgsCustom(),
                        defaults: Ext.apply(this.getFieldDefaults(), {
                            margin: '5 0 0 10'
                        })
                    }
                ]
            },
            {
                title: _l.get('settings.edit_form.service_fields'),
                role: 'tab',
                padding: '0 0 0 20',
                items: [
                    {
                        items: this.getServiceItemsLeft(),
                        defaults: Ext.apply(this.getFieldDefaults(), {
                            margin: '5 0 0 10',
                            labelAlign: 'top',
                            labelSeparator: ''
                        })
                    },
                    {
                        items: this.getServiceItemsRight(),
                        defaults: Ext.apply(this.getFieldDefaults(), {
                            margin: '5 0 0 10',
                            labelAlign: 'top',
                            labelSeparator: ''
                        })
                    }
                ]
            },
            {
                title: _l.get('settings.edit_form.accounts_fields'),
                role: 'tab',
                padding: '0 0 0 20',
                items: [
                    {
                        items: this.getAccountItemsLeft(),
                        defaults: Ext.apply(this.getFieldDefaults(), {
                            margin: '5 0 0 10',
                            labelAlign: 'top',
                            labelSeparator: ''
                        })
                    },
                    {
                        items: this.getAccountItemsRight(),
                        defaults: Ext.apply(this.getFieldDefaults(), {
                            margin: '5 0 0 10',
                            labelAlign: 'top',
                            labelSeparator: ''
                        })
                    }
                ]
            },
            {
                title: _l.get('settings.edit_form.emails_fields'),
                role: 'tab',
                padding: '0 0 0 20',
                items: [
                    {
                        items: this.getEmailsItems(),
                        defaults: Ext.apply(this.getFieldDefaults(), {
                            margin: '5 0 0 10',
                            labelAlign: 'top',
                            labelSeparator: ''
                        })
                    }
                ]
            },
            {
                title: _l.get('settings.edit_form.sms_fields'),
                role: 'tab',
                padding: '0 0 0 20',
                items: [
                    {
                        items: this.getSMSItems(),
                        defaults: Ext.apply(this.getFieldDefaults(), {
                            margin: '5 0 0 10',
                            labelAlign: 'top',
                            labelSeparator: ''
                        })
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

    getBrandingItems: function () {
        return [
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.branding_main_title')
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
                height: 120,
                fieldLabel: _l.get('settings.fields.footer_text'),

                maxLength: 512,

                value: '<FooterText Lorem ipsum...>'
            },
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.branding_contacts_title')
            },
            {
                name: 'promo_url',
                fieldLabel: _l.get('settings.fields.promo_url'),
                allowBlank: true,
                minLength: 2,
                maxLength: 100,
                vtype: 'rurl'
            //    TODO: API w8
            //},
            //{
            //    name: 'payment_description',
            //    fieldLabel: _l.get('settings.fields.payment_description'),
            //    allowBlank: true
            //},
            //{
            //    name: 'support_email',
            //    fieldLabel: _l.get('settings.fields.support_email'),
            //    allowBlank: true
            }
        ]
    },

    getImgsCustom: function () {

        return [
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.branding_img_title')
            },
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.get('settings.edit_form.favicon_title') + ' <span class="desc">(' + _l.get('settings.edit_form.favicon_desc') + ')</span>',
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

    getServiceItemsLeft: function () {
        return [
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.service_links_title')
            },
            {
                name: 'domain',
                fieldLabel: _l.get('settings.fields.domain'),
                allowBlank: false,

                minLength: 2,
                maxLength: 100,
                listeners: {
                    change: this.updateFreeMaps,
                    scope: this
                }
            },
            {
                name: 'payment_link',
                fieldLabel: _l.get('settings.fields.payment_link'),

                minLength: 2,
                maxLength: 100,
                vtype: 'rurl'
            },
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.service_regional_title')
            },
            {
                name: 'locale',
                xtype: 'localefield',
                fieldLabel: _l.get('settings.fields.locale')
            },
            {
                name: 'currency',
                xtype: 'combobox',
                fieldLabel: _l.get('settings.fields.currency'),
                store: Ext.getStore('Currencies'),
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type'
            },
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.service_login_title')
            },
            {
                name: 'allow_registration',
                xtype: 'checkbox',
                role: 'checkbox',
                boxLabel: _l.get('settings.edit_form.allow_registration')
            },
            {
                name: 'show_mobile_apps',
                xtype: 'checkbox',
                role: 'checkbox',
                boxLabel: _l.get('settings.edit_form.show_mobile_apps')
            },
            {
                name: 'demo_login',
                fieldLabel: _l.get('settings.fields.demo_login') + this.getHintSymbol(_l.get('settings.edit_form.demo_hint')),

                minLength: 2,
                maxLength: 100
            },
            {
                name: 'demo_password',
                fieldLabel: _l.get('settings.fields.demo_password'),

                minLength: 2,
                maxLength: 100
            }
            //    TODO: API w8
            //{
            //    xtype: 'blockheader',
            //    html: _l.get('settings.edit_form.service_additional_title')
            //},
            //{
            //    fieldLabel: _l.get('settings.fields.alerts_email'),
            //    allowBlank: true
            //}
        ]
    },

    getServiceItemsRight: function () {
        return [
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.service_maps_title')
            },
            {
                xtype: 'checkboxgroup',
                fieldLabel: _l.get('settings.fields.maps_title') + this.getHintSymbol(_l.get('settings.edit_form.maps_hint')),
                allowBlank: false,
                columns: 1,
                vertical: true,
                margin: '0 0 50 10',
                ui: 'light',
                items: this.getMapsList()
            },
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.service_maps_defaults_title')
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
                allowBlank: true,
                maxValue: 17
            },
            {
                name: 'map_location_lat',
                fieldLabel: _l.get('settings.fields.maps_default.location_lat'),
                allowBlank: true,
                vtype: 'numeric',
                minLength: 0,
                maxLength: 100
            },
            {
                name: 'map_location_lng',
                fieldLabel: _l.get('settings.fields.maps_default.location_lng'),
                allowBlank: true,
                vtype: 'numeric',
                minLength: 0,
                maxLength: 100
            },
//            {
//                name: 'google_client_id',
//                fieldLabel: _l.get('settings.fields.google_client_id'),
//                minLength: 2,
//                maxLength: 100
//            }
        ];
    },

    getAccountItemsLeft: function () {
        return [
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.accounts_regional_title')
            },
            //    TODO: API w8
            //{
            //    xtype: 'timezoneselect',
            //    fieldLabel: _l.get('settings.fields.time_zone'),
            //    name: 'time_zone'
            //},
            {
                name: 'measurement_system',
                xtype: 'combobox',
                fieldLabel: _l.get('settings.fields.measurement_system'),
                store: Ext.getStore('MeasurementSystems'),
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type'
            },
            {
                name: 'translit',
                xtype: 'checkbox',
                role: 'checkbox',
                margin: '20 0 0 10',
                boxLabel: _l.get('settings.fields.translit')
            }
        ]
    },

    getAccountItemsRight: function () {
        return [
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.accounts_geocoding_title')
            },
            {
                name: 'geocoder',
                xtype: 'combobox',
                fieldLabel: _l.get('settings.fields.geocoder'),
                store: Ext.getStore('Geocoders'),
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type'
            },
            {
                name: 'route_provider',
                xtype: 'combobox',
                fieldLabel: _l.get('settings.fields.route_provider'),
                store: Ext.getStore('RouteProviders'),
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type'
            }
        ]
    },

    getEmailsItems: function () {
        return [
            {
                name: 'email_from',
                fieldLabel: _l.get('settings.fields.email_from'),
                labelAlign: 'top',
                minLength: 2,
                maxLength: 100,
                role: 'permission-field'
            },
            {
                name: 'email_footer',
                xtype: 'textarea',
                fieldLabel: _l.get('settings.fields.email_footer'),
                labelAlign: 'top',
                width: 450,
                rows: 10,

                maxLength: 450,
                role: 'permission-field'
            },
            {
                name: 'email_special',
                fieldLabel: _l.get('settings.fields.email_special'),
                labelAlign: 'top',
                minLength: 2,
                maxLength: 100,
                role: 'permission-field'
            }
        ]
    },

    getSMSItems: function () {
        return [
            {
                name: 'sms_originator',
                fieldLabel: _l.get('settings.fields.sms_originator'),
                labelAlign: 'top',
                allowBlank: false,
                maxLength: 20,
                role: 'permission-field'
            },
            {
                name: 'caller_id',
                fieldLabel: _l.get('settings.fields.caller_id'),
                labelAlign: 'top',
                allowBlank: false,
                maxLength: 20,
                role: 'permission-field'
            },
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
        Ext.API.getDealerInfo(this.updateDealerInfo, this.updateDealerInfo(), this);

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
        Ext.API.getDealerInfo(this.updateDealerInfo, this.updateDealerInfo(), this);

        var imgContainer = this.down('[role="' + type + '_img"]'),
            removeBtn = this.down('[role="' + type + '_delete_btn"]');

        this.record.set(type, null);

        if (imgContainer && removeBtn) {
            imgContainer.hide();
            removeBtn.hide();
        }
    },

    updateDealerInfo: function (data) {
        var store = Ext.getStore('Dealer'),
            dealer = store && store.first();

        if (dealer) {
            dealer.set(data);
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
                name: 'password',
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