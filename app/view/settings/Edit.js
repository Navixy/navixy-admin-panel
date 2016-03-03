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
        'NavixyPanel.view.widgets.fields.SMSGateway',
        'NavixyPanel.view.settings.UploadWindow',
        'NavixyPanel.view.settings.BlockHeader',

        'NavixyPanel.view.settings.components.Map'
    ],

    default_paas_domain: '.navixy.ru',
    singleCmp: false,
    rights: null,
    bodyPadding: '0 0 60 0',
    formRowPadding: '50 0 0 0',

    paymentCurrency: 'USD',

    mapSettingsReady: false,

    afterRender: function () {
        this.applyRights();
        this.callParent(arguments);
        this.down('tabpanel').on('tabchange', this.changeSaveBtn, this);
    },

    getHintSymbol: function (hint, cls) {
        return ['<span class="icon-help ',
                cls || '',
                '" style="color:#f89406;font-size:12px; padding: 10px" ',
                'data-qtip="', Ext.String.htmlEncode(hint), '"',
                'data-qclass="settings-tip"',
                'data-qwidth="300"',
                '></span>'].join('');
    },

    changeSaveBtn: function (tabpanel, tab) {

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

        this.down('toolbar[dock=bottom]').setVisible(tab.role !== 'not-settings-tab');
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
        return (this.rights.serviceEdit || this.rights.notificationEdit) && _l.get('settings.edit_form.clear_btn');
    },

    getBackBtnTitle: function () {
        return false;
    },

    doFormReset: function () {
        this.applyRecordData();
    },

    applyRecordData: function () {
        this.callParent(arguments);
        this.mapSettingsReady = true;
    },

    getDomainValue: function () {
        var domainField = this.down('[name="domain"]');

        return domainField && domainField.getValue();
    },

    getGoogleIdField: function () {
        return this.down('[name="google_client_id"]');
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
        var isFree = this.checkFreeDomain(),
            mapSettings = this.down('settings-map');

        if (mapSettings) {
            mapSettings[isFree ? 'setFreeMaps' : 'unSetFreeMaps']();
        }
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
                if (field.isDisabled() && !field.shadowField) {
                    delete values[field.name];
                } else if (field.shadowField) {
                    values[field.name] = field.getValue()
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

    getItems: function () {
        return [
            {
                xtype: 'tabpanel',
                plain: true,
                activeTab: 0,
                border: 0,
                width: '100%',
                ui: 'light',
                cls: 'header-tabs',
                defaults: this.getHintDefaults(),
                items: this.getTabs()
            }
        ];
    },

    getHintDefaults: function () {
        return {
            xtype: 'container',
            role: 'tab',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: this.getRowDefaults()
        }
    },

    getRowDefaults: function () {
        return {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: this.getCellDefaults()
        };
    },

    getCellDefaults: function () {
        return {
            xtype: 'container',
            flex: 1,
            defaults: this.getFieldDefaults(),
            padding: '0 20 0 25',
            layout: {
                type: 'vbox'
            }
        };
    },

    getFieldDefaults: function () {
        return Ext.apply(this.callParent(arguments), {
            allowBlank: true,
            margin: '5 0 0 10',
            labelAlign: 'top',
            labelSeparator: ''
        });
    },

    getTabs: function () {

        var lp = _l.get('settings.edit_form'),
            dealer_store = Ext.getStore('Dealer'),
            dealer = dealer_store && dealer_store.first(),
            seller_currency = dealer && dealer.get('seller_currency');

        return [
            {
                title: lp.get('branding_fields'),
                role: 'tab',
                padding: '0 0 0 20',
                items: [
                    {
                        xtype: 'component',
                        cls: 'block_hint',
                        margin: '40 20 0 25',
                        html: lp.get('branding_main_info')
                    },
                    {
                        items: [
                            {
                                items: this.getBrandingItems()
                            },
                            {
                                items: this.getImgsCustom(),
                                defaults: Ext.apply(this.getFieldDefaults(), {
                                    margin: '5 0 0 10'
                                })
                            }
                        ]
                    }
                ]
            },
            {
                title: lp.get('service_fields'),
                role: 'tab',
                padding: '0 0 0 20',
                items: [
                    {
                        xtype: 'component',
                        cls: 'block_hint',
                        margin: '40 20 0 25',
                        html: lp.get('service_info')
                    },
                    {
                        items: [
                            {
                                items: this.getServiceItemsLeft()
                            },
                            {
                                xtype: 'settings-map',
                                record: this.record
                            }
                        ]
                    }
                ]
            },
            {
                title: lp.get('accounts_fields'),
                role: 'tab',
                padding: '0 0 0 20',
                items: [
                    {
                        xtype: 'component',
                        cls: 'block_hint',
                        margin: '40 20 0 25',
                        html: lp.get('account_info')
                    },
                    {
                        items: [
                            {
                                items: this.getAccountItemsLeft()
                            },
                            {
                                items: this.getAccountItemsRight()
                            }
                        ]
                    }
                ]
            },
            {
                title: lp.get('emails_fields'),
                role: 'tab',
                padding: '0 0 0 20',
                items: [
                    {
                        xtype: 'component',
                        cls: 'block_hint',
                        margin: '40 20 0 25',
                        html: lp.get('emails_main_info')
                    },
                    {
                        items: [
                            {
                                items: this.getEmailsItems()
                            }
                        ]
                    }
                ]
            },
            {
                title: lp.get('sms_fields'),
                role: 'tab',
                padding: '0 0 0 20',
                items: [
                    {
                        xtype: 'component',
                        cls: 'block_hint',
                        margin: '40 20 0 25',
                        html: lp.get('sms_main_info')
                    },
                    {
                        items: [
                            {
                                items: this.getSMSM2MItems()
                            },
                            {
                                items: this.getSMSUserItems()
                            }
                        ]
                    }
                ]
            },
            Ext.checkPermission('password', 'update')
                ? {
                title: lp.get('password_fields'),
                role: 'pass_tab',
                items: [
                    {
                        margin: '30 0 0 20',
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
                ]
            }
                : null,
            Ext.checkPermission('paas_payments', 'create') && seller_currency === this.paymentCurrency
                ? {
                xtype: 'avangate-panel',
                layout: {
                    type: 'auto'
                },
                role: 'not-settings-tab'
            } : null
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
                fieldLabel: _l.get('settings.fields.service_title') + this.getHintSymbol(_l.get('settings.fields.service_title_hint')),
                emptyText: _l.get('settings.fields.service_title_ph'),
                minLength: 2,
                maxLength: 100
            },
            {
                name: 'login_footer',
                xtype: 'textarea',
                height: 120,
                fieldLabel: _l.get('settings.fields.footer_text') + this.getHintSymbol(_l.get('settings.fields.footer_text_hint')),
                emptyText: _l.get('settings.fields.footer_text_ph'),

                maxLength: 512
            },
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.branding_contacts_title')
            },
            {
                name: 'promo_url',
                fieldLabel: _l.get('settings.fields.promo_url') + this.getHintSymbol(_l.get('settings.fields.promo_url_hint')),
                emptyText: _l.get('settings.fields.promo_url_ph'),
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
            },
            {
                xtype: 'checkbox',
                role: 'checkbox',
                boxLabel: _l.get('settings.fields.monitoring_logo_clickable') + (_l.get('settings.fields.monitoring_logo_clickable_hint') !== "" && _l.get('settings.fields.monitoring_logo_clickable_hint') !== 'settings.fields.monitoring_logo_clickable_hint' ? this.getHintSymbol(_l.get('settings.fields.monitoring_logo_clickable_hint')) : ""),
                name: 'monitoring_logo_clickable'
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
                xtype: 'component',
                cls: 'block_header',
                html: _l.get('settings.edit_form.favicon_title') + this.getHintSymbol(_l.get('settings.fields.favicon_hint')),
                padding: '0 0 5 0'
            },
            this.getImgConfig('favicon', {maxWidth: 28}),
            this.getImgButtonConfig('favicon'),
            {
                xtype: 'component',
                cls: 'block_header',
                html: _l.get('settings.edit_form.logo_title') + this.getHintSymbol(_l.get('settings.fields.logo_hint')),
                padding: '20 0 5 0'
            },
            this.getImgConfig('logo'),
            this.getImgButtonConfig('logo'),
            {
                xtype: 'component',
                cls: 'block_header',
                html: _l.get('settings.edit_form.monitoring_logo_title') + this.getHintSymbol(_l.get('settings.fields.monitoring_logo_hint')),
                padding: '20 0 5 0'
            },
            this.getImgConfig('monitoring_logo'),
            this.getImgButtonConfig('monitoring_logo'),
            {
                xtype: 'component',
                cls: 'block_header',
                html: _l.get('settings.edit_form.login_wallpaper_title') + this.getHintSymbol(_l.get('settings.fields.login_wallpaper_hint')),
                padding: '20 0 5 0'
            },
            this.getImgConfig('login_wallpaper'),
            this.getImgButtonConfig('login_wallpaper')
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
                fieldLabel: _l.get('settings.fields.domain') + this.getHintSymbol(_l.get('settings.fields.domain_hint')) + '<a href="' + _l.get('settings.fields.domain_help_link') + '" target="_blank">' + _l.get('settings.fields.domain_help') + '</a>',
                emptyText: Ext.getStore('Dealer').first().get('id') + _l.get('settings.fields.domain_ph'),
                value: Ext.getStore('Dealer').first().get('id') + _l.get('settings.fields.domain_ph'),
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
                fieldLabel: _l.get('settings.fields.locale') + this.getHintSymbol(_l.get('settings.fields.locale_hint'))
            },
            {
                name: 'currency',
                xtype: 'combobox',
                fieldLabel: _l.get('settings.fields.currency') + this.getHintSymbol(_l.get('settings.fields.currency_hint')),
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
                boxLabel: _l.get('settings.fields.allow_registration') + this.getHintSymbol(_l.get('settings.fields.allow_registration_hint'))
            },
            {
                name: 'show_mobile_apps',
                xtype: 'checkbox',
                role: 'checkbox',
                boxLabel: _l.get('settings.edit_form.show_mobile_apps') + this.getHintSymbol(_l.get('settings.fields.show_mobile_apps_hint'))
            },
            {
                name: 'demo_login',
                fieldLabel: _l.get('settings.fields.demo_login') + this.getHintSymbol(_l.get('settings.edit_form.demo_hint')),
                emptyText: _l.get('settings.fields.demo_login_ph'),

                minLength: 2,
                maxLength: 100
            },
            {
                name: 'demo_password',
                fieldLabel: _l.get('settings.fields.demo_password'),
                emptyText: _l.get('settings.fields.demo_password_ph'),

                minLength: 2,
                maxLength: 100
            },
            {
                xtype: 'blockheade',
                html: _l.get('settings.edit_form.service_additional_title')
            },
            //TODO: API w8
            //{
            //    //name: 'email_newsletters',
            //    labelClsExtra: 'red-label',
            //    fieldLabel: _l.get('settings.fields.newsletters') + this.getHintSymbol(_l.get('settings.fields.newsletters_hint')),
            //    emptyText: _l.get('settings.fields.daily_reports_ph'),
            //    minLength: 2,
            //    maxLength: 100,
            //    allowBlank: true,
            //    vtype: 'multiemail'
            //},
            {
                name: 'email_special',
                fieldLabel: _l.get('settings.fields.daily_reports') + this.getHintSymbol(_l.get('settings.fields.daily_reports_hint')),
                emptyText: _l.get('settings.fields.daily_reports_ph'),
                minLength: 2,
                maxLength: 100,
                role: 'permission-field',
                allowBlank: true
            },

            //TODO: API w8
            //{
            //    //name: 'email_invoices',
            //    labelClsExtra: 'red-label',
            //    fieldLabel: _l.get('settings.fields.invoices') + this.getHintSymbol(_l.get('settings.fields.invoices_hint')),
            //    emptyText: _l.get('settings.fields.daily_reports_ph'),
            //    minLength: 2,
            //    maxLength: 100,
            //    role: 'permission-field',
            //    allowBlank: true
            //}
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.misc_header')
            },
            {
                xtype: 'checkbox',
                role: 'checkbox',
                boxLabel: _l.get('settings.fields.display_model_features_link') + this.getHintSymbol(_l.get('settings.fields.display_model_features_link_hint')),
                name: 'display_model_features_link'
            },
            {
                xtype: 'checkbox',
                role: 'checkbox',
                boxLabel: _l.get('settings.fields.show_call_notifications') + (_l.get('settings.fields.show_call_notifications_hint') !== "" && _l.get('settings.fields.show_call_notifications_hint') !== 'settings.fields.show_call_notifications_hint' ? this.getHintSymbol(_l.get('settings.fields.show_call_notifications_hint')) : ""),
                name: 'show_call_notifications'
            }
        ]
    },

    getAccountItemsLeft: function () {
        return [
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.accounts_regional_title')
            },
            {
                name: 'measurement_system',
                xtype: 'combobox',
                fieldLabel: _l.get('settings.fields.measurement_system') + this.getHintSymbol(_l.get('settings.fields.measurement_system_hint')),
                store: Ext.getStore('MeasurementSystems'),
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type'
            },
            //TODO: API w8
            //{
            //    xtype: 'timezoneselect',
            //    labelClsExtra: 'red-label',
            //    fieldLabel: _l.get('settings.fields.time_zone') + this.getHintSymbol(_l.get('settings.fields.time_zone_hint')),
            //    name: 'time_zone'
            //},
            {
                name: 'translit',
                xtype: 'checkbox',
                role: 'checkbox',
                margin: '20 0 0 10',
                boxLabel: _l.get('settings.fields.translit') + this.getHintSymbol(_l.get('settings.fields.translit_hint'))
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
                fieldLabel: _l.get('settings.fields.geocoder') + this.getHintSymbol(_l.get('settings.fields.geocoder_hint')),
                store: Ext.getStore('Geocoders'),
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type'
            },
            {
                name: 'route_provider',
                xtype: 'combobox',
                fieldLabel: _l.get('settings.fields.route_provider') + this.getHintSymbol(_l.get('settings.fields.route_provider_hint')),
                store: Ext.getStore('RouteProviders'),
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type'
            },
            //TODO: API w8
            {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },

                items: [
                    {
                        //name: 'geolocation',
                        //labelClsExtra: 'red-label',
                        xtype: 'combobox',
                        fieldLabel: _l.get('settings.fields.geolocation') + this.getHintSymbol(_l.get('settings.fields.geolocation_hint')),
                        store: Ext.getStore('Geolocation'),
                        editable: false,
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'type',
                        value: "navixy",
                        margin: 0,
                        labelAlign: 'top',
                        labelSeparator: '',
                        disabled: true,
                        baseCls: 'settings-combo-disabled',
                    },
                ]
            }
            //TODO: API w8
            //{
            //    xtype: 'blockheader',
            //    html: _l.get('settings.edit_form.account_roads_title')
            //},
            //{
            //    //name: 'speed_restriction',
            //    labelClsExtra: 'red-label',
            //    xtype: 'combobox',
            //    fieldLabel: _l.get('settings.fields.speed_restriction') + this.getHintSymbol(_l.get('settings.fields.speed_restriction_hint')),
            //    store: Ext.getStore('SpeedRestriction'),
            //    editable: false,
            //    queryMode: 'local',
            //    displayField: 'name',
            //    valueField: 'type',
            //    value: "google"
            //},
            //{
            //    //name: 'speed_restriction',
            //    labelClsExtra: 'red-label',
            //    xtype: 'combobox',
            //    fieldLabel: _l.get('settings.fields.roads_snap') + this.getHintSymbol(_l.get('settings.fields.roads_snap_hint')),
            //    store: Ext.getStore('RoadsSnap'),
            //    editable: false,
            //    queryMode: 'local',
            //    displayField: 'name',
            //    valueField: 'type',
            //    value: "google"
            //}
        ]
    },

    getEmailsItems: function () {
        return [
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.emails_main_title')
            },
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
                width: 450,
                rows: 10,

                maxLength: 450,
                role: 'permission-field'
            }
        ]
    },

    getSMSM2MItems: function () {
        return [
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.sms_m2m_title') + this.getHintSymbol(_l.get('settings.edit_form.sms_m2m_info'))
            },
            {
                xtype: 'smsgateway',
                fieldLabel: _l.get('settings.fields.sms_gateway') + this.getHintSymbol(_l.get('settings.fields.sms_gateway_hint')),
                emptyText: _l.get('settings.fields.sms_gateway_ph'),
                listeners: {
                    change: function (cmp, type) {
                        var originator = this.down('[name=m2m_sms_originator]');

                        if (type === "navixy") {
                            originator.setValue(Config.navixyInboundNumber || "79037976362");
                            originator.setReadOnly(true);
                        } else {
                            originator.setReadOnly(false);
                        }
                    },
                    scope: this
                }
            },
            {
                name: "m2m_sms_originator",
                fieldLabel: _l.get('settings.fields.sms_sender_id') + this.getHintSymbol(_l.get('settings.fields.sms_sender_id_hint')),
                emptyText: _l.get('settings.fields.sms_sender_id_ph'),
                allowBlank: true,
                minLength: 0,
                maxLength: 100,
                disabled: true,
                value: _l.get('settings.fields.not_editable'),
                cls: 'settings-disabled'
            }
            //{
            //    name: 'sms_originator',
            //    labelClsExtra: 'red-label',
            //    fieldLabel: _l.get('settings.fields.sms_inbound') + this.getHintSymbol(_l.get('settings.fields.sms_inbound_hint')),
            //    emptyText: _l.get('settings.fields.sms_inbound_ph'),
            //    allowBlank: true,
            //    vtype: 'numeric',
            //    minLength: 0,
            //    maxLength: 100
            //}
            //{
            //    name: 'sms_originator',
            //    fieldLabel: _l.get('settings.fields.sms_originator'),
            //    allowBlank: false,
            //    maxLength: 20,
            //    role: 'permission-field'
            //},
            //{
            //    name: 'caller_id',
            //    fieldLabel: _l.get('settings.fields.caller_id'),
            //    allowBlank: false,
            //    maxLength: 20,
            //    role: 'permission-field'
            //},
        ]
    },

    getSMSUserItems: function () {
        return [
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.sms_user_title') + this.getHintSymbol(_l.get('settings.edit_form.sms_user_info'))
            },
            //TODO: API w8
            {
                xtype: 'smsgateway',
                labelClsExtra: 'red-label',
                fieldLabel: _l.get('settings.fields.user_sms_gateway') + this.getHintSymbol(_l.get('settings.fields.user_sms_gateway_hint')),
                emptyText: _l.get('settings.fields.user_sms_gateway_ph'),
                listeners: {
                    change: function (cmp, type) {
                        var originator = this.down('[name=sms_originator]');

                        if (type === "navixy") {
                            originator.setValue(Config.navixyInboundNumber || "79037976362");
                            originator.setReadOnly(true);
                        } else {
                            originator.setReadOnly(false);
                        }
                    },
                    scope: this
                }
            },
            {
                name: 'sms_originator',
                fieldLabel: _l.get('settings.fields.user_sms_sender_id') + this.getHintSymbol(_l.get('settings.fields.user_sms_sender_id_hint')),
                emptyText: _l.get('settings.fields.user_sms_sender_id_ph'),
                allowBlank: false,
                minLength: 2,
                maxLength: 100
            },
            {
                fieldLabel: _l.get('settings.fields.user_sms_inbound') + this.getHintSymbol(_l.get('settings.fields.user_sms_inbound_hint')),
                emptyText: _l.get('settings.fields.user_sms_inbound_ph'),
                allowBlank: true,
                minLength: 0,
                maxLength: 100,
                disabled: true,
                value: _l.get('settings.fields.not_editable'),
                cls: 'settings-disabled'
            }
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
                    margin: '5 0 10 0',
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
                    margin: '5 0 10 10',
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
                xtype: 'component',
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