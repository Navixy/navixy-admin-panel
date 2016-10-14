Ext.define('NavixyPanel.view.tariffs.NewCard', {
    extend: 'NavixyPanel.view.components.Card',
    requires: ['NavixyPanel.plugins.FieldPostfix'],

    alias: 'widget.tariff-card',
    stateful: true,
    stateId: 'tariffcard',
    singleColumnBody: true,

    addTarget: 'tariff/create',
    createTarget: 'tariff/',

    settings: null,

    initComponent: function () {
        Ext.apply(this.modeVisibleTable.card, {
            'edit-btn': Ext.checkPermission('tariffs', 'update'),
            'add-btn': Ext.checkPermission('tariffs', 'create')
        });
        Ext.apply(this.modeVisibleTable.edit, {
            'add-btn': false
        });
        Ext.apply(this.modeVisibleTable.create, {
            'add-btn': false
        });

        this.callParent(arguments);
    },

    getRecordData: function () {
        return this.record && this.record.getViewData();
    },

    applyRecordData: function () {
        var recordData = this.getRecordData(),
            fieldName, fieldValue, fieldType,
            disableMaps = false;

        if (recordData) {
            var defaultTariff = Ext.getStore('TariffDefaults').findRecord('id', recordData.device_type),
                defaultData = defaultTariff && defaultTariff.getData(),
                isDefault = recordData.id === defaultData.tariff_id;

            recordData["tariff_is_default"] = isDefault;
            recordData["activation_bonus"] = isDefault ? defaultData['activation_bonus'] : 0;
            recordData["free_days"] = isDefault ? defaultData['free_days'] : 0;
            recordData["free_days_device_limit"] = isDefault ? defaultData['free_days_device_limit'] : null;

            if (recordData.maps_exclusion) {
                if (recordData["maps"].length) {
                    disableMaps = true;
                }
                recordData["maps"] = this.reverseMaps(recordData["maps"]);
            }

            this.iterateFields(function (field) {
                fieldName = field.name;
                fieldType = field.getXType();
                fieldValue = recordData[fieldName];

                if (fieldValue !== undefined) {
                    field.setValue(fieldValue);
                }

                if (fieldName === "maps") {
                    field.strictDisabled = disableMaps ? "edit" : false;
                }
            });
            if (isDefault) {
                this.down("[name=tariff_is_default]").strictDisabled = "edit";
            }
            this.changeDefault(isDefault);
            this.changePaymentType(recordData['type']);
        }

        this.getForm().isValid();
    },

    enableForm: function (mode) {
        this.callParent(arguments);
        if (mode == "create") {
            this.changeDefault(false);
            this.changePaymentType("monthly");
        }
    },

    reverseMaps: function (maps) {
        var result = [],
            type;

        Ext.getStore('MapTypes').each(function (mapRecord) {
            type = mapRecord.get('type');
            if (Ext.Array.indexOf(maps, type) < 0) {
                result.push(type)
            }
        }, this);

        return result
    },

    getProcessedValues: function () {
        var values = this.getValues();

        this.iterateFields(function (field) {
            if (field.is('checkboxgroup')) {
                var value = field.getValue(),
                    name = field.sRole || field.items.first().name,
                    data = value[name];

                if (data) {
                    if (!Ext.isArray(data) && !Ext.isEmpty(data)) {
                        data = [data];
                    }
                    if (!Ext.isArray(values[name]) && !Ext.isEmpty(values[name])) {
                        values[name] = [values[name]];
                    }
                    values[name] = values[name] && values[name].length
                        ? Ext.Array.unique(values[name].concat(data))
                        : data || []
                } else {
                    if (!values[name]) {
                        values[name] = [];
                    }
                }
            }

            if (field.is('checkboxfield') && !field.checkboxgroup) {
                values[field.name] = field.getValue();
            }
        });
        if (values.type != "monthly") {
            values.proportional_charge = false;
        }

        return values;
    },

    fireMakeDefault: function () {
        this.fireEvent('setdefault', this.record);
    },

    getButtons: function () {
        var result = this.callParent(arguments),
            addBtn = this.getAddBtnTitle();

        if (addBtn) {
            result.push(
                {
                    text: addBtn,
                    role: 'add-btn',
                    iconCls: 'add-button',
                    margin: this.buttonsMargin,
                    handler: this.toTariffAdd,
                    scope: this
                }
            );
        }

        return result;
    },

    toTariffAdd: function () {
        Ext.Nav.shift(this.addTarget);
    },

    getAddBtnTitle: function () {
        return _l.get('tariffs.card.add_form_btn');
    },

    getEditBtnTitle: function () {
        return _l.get('tariffs.card.edit_form_btn');
    },

    getCreateBtnTitle: function () {
        return _l.get('tariffs.card.create_form_btn');
    },

    getSaveBtnTitle: function () {
        return _l.get('tariffs.card.save_form_btn');
    },

    getHeaderItemsConfig: function () {

        var me = this,
            dealer_store = Ext.getStore('Dealer'),
            dealer = dealer_store && dealer_store.first(),
            settings = (this.record && this.record.getSettingsData()) || this.settings,
            seller_currency = (dealer && dealer.get('seller_currency')) || 'USD',
            currency = (settings && settings.currency) || 'USD',

            recordData = this.getRecordData(),
            isCamera = recordData && recordData.device_type !== "tracker",
            hasCamera = !!dealer.get('enable_cameras'),
            deviceData = [
                {
                    type: "tracker",
                    "name": _l.get('devices.tracker')
                }
            ],

            tariffPrices = Ext.getStore('TariffPrices').getPrices(),
            priceConfig = {
                xtype: 'tariffprice',
                cellCls: 'form-cell',
                tariffPrices: tariffPrices,
                currency: currency,
                fieldConfig: this.getFieldConfig({

                    allowBlank: true,
                    width: 100,

                    minLength: 1,
                    maxLength: 10,
                    vtype: 'numeric',

                    value: 0
                })
            };

        if (!!dealer.get('enable_cameras')) {
            deviceData.push({
                type: "camera",
                "name": _l.get('devices.camera')
            })
        }

        this.deviceTypesStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data: deviceData
        });

        this.tariffTypesStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data: this.getTariffTypesData()
        });

        return [
            // 0 --------------------------------------------------------------------- //
            {
                html: _l.get('tariffs.fields.name'),
                width: 180
            },
            {},
            this.getFieldConfig({
                width: 250,
                name: 'name',
                value: _l.get('tariffs.fields.default_name')
            }),
            {},

            // 1 --------------------------------------------------------------------- //
            {
                html: _l.get('tariffs.fields.device_type'),
                hidden: hasCamera
            },
            {
                cellCls: 'strong-height',
                hidden: hasCamera
            },
            this.getFieldConfig({
                name: 'device_type',
                xtype: 'combobox',
                store: this.deviceTypesStore,
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type',
                value: 'tracker',
                disabled: true,
                strictDisabled: 'edit',
                listeners: {
                    change: function () {
                        me.changeDeviceType(this.getValue() !== "tracker");
                    }
                },
                hidden: hasCamera
            }), {hidden: hasCamera},

            // 2.0 --------------------------------------------------------------------- //
            {
                html: _l.get('tariffs.fields.tariff_type'),
                hidden: isCamera
            },
            {
                cellCls: 'strong-height',
                hidden: isCamera
            },
            this.getFieldConfig({
                name: 'type',
                xtype: 'combobox',
                store: this.tariffTypesStore,
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type',
                value: "monthly",

                width: 250,
                hidden: isCamera,
                listeners: {
                    change: function () {
                        me.changePaymentType(this.getValue());
                    }
                }
            }), {hidden: isCamera},

            // 2.1 --------------------------------------------------------------------- //
            {
                html: [_l.get('tariffs.fields.proportional_charge'),
                       this.getHintSymbol(_l.get('tariffs.card.hints.20'))].join(""),
                role: "proportional_charge_label",
                cellCls: 'strong-height'
            },
            {role: "proportional_charge_empty1"},
            {
                xtype: 'fakefield',
                role: "proportional_charge",
                textStyle: "padding: 0 0 0 5px",
                fieldConfig: this.getFieldConfig({
                    xtype: 'checkbox',
                    checked: true,
                    name: 'proportional_charge'
                })
            },
            {role: "proportional_charge_empty2"},

            // 3 --------------------------------------------------------------------- //
            {
                role: "price_label",
                html: _l.get('tariffs.price_type')[recordData && recordData.type || "monthly"]
            },
            {},
            this.getFieldConfig({
                disabledValue: function () {
                    return Ext.String.format(_l.get('currencies_tpls')[currency], Ext.util.Format.number(this.getValue(), '0.00'))
                },
                name: 'price',
                allowBlank: true,
                width: 100,

                minLength: 1,
                maxLength: 10,
                vtype: 'numeric',

                value: 0
            }),
            {},

            // -3.1i --------------------------------------------------------------------- //
            {
                html: [_l.get('tariffs.fields.tariff_is_default'),
                       this.getHintSymbol(_l.get('tariffs.card.hints.17'))].join(""),
                cellCls: 'strong-height',
                role: 'tariff-is-default-hint'
            },
            {
                role: 'tariff-is-default-empty1'
            },
            {
                xtype: 'fakefield',
                textStyle: "padding: 0 0 0 5px",
                role: 'tariff-is-default-field',
                onChange: function (cmp, value) {
                    me.changeDefault(value);
                },
                fieldConfig: this.getFieldConfig({
                    xtype: 'checkbox',
                    name: 'tariff_is_default',
                    checked: false
                })
            },
            {
                role: 'tariff-is-default-empty2'
            },

            // -3.2i --------------------------------------------------------------------- //
            {
                html: [_l.get('tariffs.fields.free_days'),
                       this.getHintSymbol(_l.get('tariffs.card.hints.18'))].join(""),
                role: "free_days_label",
                cellCls: 'strong-height'
            },
            {role: "free_days_empty1"},
            this.getFieldConfig({
                xtype: 'numberfield',
                role: 'free_days',
                plugins: [
                    {
                        ptype: 'fieldpostfix',
                        units: "days",
                        allowZeroValues: true,
                        useRaw: true
                    }
                ],
                hideTrigger: true,
                name: 'free_days',
                width: 200,
                minValue: 0,
                minLength: 1,
                maxLength: 6,

                value: 0
            }),

            {role: "free_days_empty2"},

            // -3.3i --------------------------------------------------------------------- //

            {
                html: [_l.get('tariffs.fields.free_days_device_limit'),
                       this.getHintSymbol(_l.get('tariffs.card.hints.free_days_device_limit'))].join(""),
                role: "free_days_device_limit_label",
                cellCls: 'strong-height'
            },
            {role: "free_days_device_limit_empty1"},
            this.getFieldConfig({
                xtype: 'numberfield',
                role: 'free_days_device_limit',
                allowBlank: true,
                plugins: [
                    {
                        ptype: 'fieldpostfix',
                        units: "assets",
                        allowZeroValues: true,
                        useRaw: true
                    }
                ],
                cls: 'free_days_device_limit',
                emptyText: _l.get('tariffs.fields.free_days_device_no_limit'),
                hideTrigger: true,
                name: 'free_days_device_limit',
                width: 200,
                minValue: 0,
                minLength: 1,
                maxLength: 6
            }),
            {role: "free_days_device_limit_empty2"},

            // -3.3i --------------------------------------------------------------------- //
            {
                html: [_l.get('tariffs.fields.activation_bonus'), , " (",
                       Ext.String.format(_l.get('currencies_tpls')[currency], "").replace(" ", ""), ")",
                       this.getHintSymbol(_l.get('tariffs.card.hints.19'))].join(""),
                role: "activation_bonus_label",
                cellCls: 'strong-height'
            },
            {role: "activation_bonus_empty1"},
            this.getFieldConfig({
                role: 'activation_bonus',
                disabledValue: function () {
                    return Ext.String.format(_l.get('currencies_tpls')[currency], Ext.util.Format.number(this.getValue(), '0.00'))
                },
                name: 'activation_bonus',
                allowBlank: true,
                width: 100,

                minLength: 1,
                maxLength: 10,
                vtype: 'numeric',

                value: 0
            }),
            {role: "activation_bonus_empty2"},

            // 4 --------------------------------------------------------------------- //
            {html: '&nbsp'},
            {cellCls: 'no_dots'},
            {width: 220},
            {},

            // 5 --------------------------------------------------------------------- //
            {
                html: _l.get('tariffs.fields.rate'),
                cellCls: 'sub_title'
            },
            {
                cellCls: 'no_dots'
            },
            {
                html: [_l.get('tariffs.fields.users_price'), " (",
                       Ext.String.format(_l.get('currencies_tpls')[currency], "").replace(" ", ""), ")",
                       this.getHintSymbol(_l.get('tariffs.card.hints.12'))].join(""),
                cellCls: 'sub_title'

            },
            {
                html: [_l.get('tariffs.fields.client_costs'), " (",
                       Ext.String.format(_l.get('currencies_tpls')[seller_currency], "").replace(" ", ""), ")",
                       this.getHintSymbol(_l.get('tariffs.card.hints.13'))].join(""),
                cellCls: 'sub_title'
            },

            // 6 --------------------------------------------------------------------- //
            {html: _l.get('tariffs.fields.outgoing_sms') + this.getHintSymbol(_l.get('tariffs.card.hints.2'))},
            {},
            Ext.apply({name: 'outgoing_sms'}, priceConfig),
            {html: this.getTariffPriceText("outgoing_sms", tariffPrices, seller_currency)},

            // 7 --------------------------------------------------------------------- //
            {html: _l.get('tariffs.fields.service_sms') + this.getHintSymbol(_l.get('tariffs.card.hints.3'))},
            {},
            Ext.apply({name: 'service_sms'}, priceConfig),
            {html: this.getTariffPriceText("service_sms", tariffPrices, seller_currency)},

            // 8 --------------------------------------------------------------------- //
            {html: _l.get('tariffs.fields.incoming_sms') + this.getHintSymbol(_l.get('tariffs.card.hints.4'))},
            {},
            Ext.apply({name: 'incoming_sms'}, priceConfig),
            {html: this.getTariffPriceText("incoming_sms", tariffPrices, seller_currency)},

            // 9 --------------------------------------------------------------------- //
            {html: _l.get('tariffs.fields.traffic') + this.getHintSymbol(_l.get('tariffs.card.hints.5'))},
            {},
            Ext.apply({name: 'traffic'}, priceConfig),
            {html: this.getTariffPriceText("traffic", tariffPrices, seller_currency)},

            // 10 -------------------------------------------------------------------- //
            {html: _l.get('tariffs.fields.phone_call') + this.getHintSymbol(_l.get('tariffs.card.hints.6'))},
            {},
            Ext.apply({name: 'phone_call'}, priceConfig),
            {html: this.getTariffPriceText("phone_call", tariffPrices, seller_currency)}
        ]
    },

    getBodyItemsConfig: function () {
        return [
            this.getBodyCollapserConfig('options', {
                html: _l.get('tariffs.fields.plan_options'),
                collapsedHtml: _l.get('tariffs.fields.plan_options'),
                expandedHtml: [_l.get('tariffs.fields.plan_options'), _l.get('card.body.exptitle_show')].join(" "),
            }),
            this.getBodyConfig('options', this.getOptionsBodyConfig()),
            {
                xtype: 'component',
                height: 10
            },
            this.getBodyCollapserConfig('availability', {
                html: _l.get('tariffs.fields.plan_availability'),
                collapsedHtml: _l.get('tariffs.fields.plan_availability'),
                expandedHtml: [_l.get('tariffs.fields.plan_availability'), _l.get('card.body.exptitle_show')].join(" "),
            }),
            this.getBodyConfig('availability', this.getAvailabilityBodyConfig()),
            {
                xtype: 'container',
                height: 40
            }
        ]
    },

    getOptionsBodyConfig: function () {
        return {
            items: {
                xtype: 'container',
                cls: 'card-body-inner options-table',
                itemCls: '',
                width: '100%',
                padding: '10',
                layout: {
                    type: 'table',
                    tdAttrs: {
                        style: {
                            width: '25%'
                        }
                    },
                    columns: 4
                },
                defaults: {
                    xtype: 'component'
                },
                items: this.prepareOptionsItems()
            }
        }
    },

    getAvailabilityBodyConfig: function () {
        return {
            items: {
                xtype: 'container',
                cls: 'card-body-inner options-table',
                itemCls: '',
                width: '100%',
                padding: '10',
                layout: {
                    type: 'table',
                    tdAttrs: {
                        style: {
                            width: '50%'
                        }
                    },
                    columns: 2
                },
                defaults: {
                    xtype: 'component'
                },
                items: this.prepareAvailabilityItems()
            }
        }
    },

    handleReportsChange: function (cmp, state) {
        var report_scheduled = this.down('[role=feature_report_scheduled]'),
            report_xls = this.down('[role=feature_report_xls]');

        if (!state) {
            if (report_scheduled) {
                report_scheduled.setValue(false, true);
            }
            if (report_xls) {
                report_xls.setValue(false, true);
            }
        }
    },

    handleReportsFeatureChange: function (cmp, state) {
        var has_reports = this.down('[role=feature_has_reports]');

        if (state && has_reports) {
            has_reports.setValue(true, true);
        }
    },

    prepareOptionsItems: function () {
        var mapList = [],
            appsList = [{
                boxLabel: _l.get('features.app_reports'),
                name: 'has_reports',
                role: 'feature_has_reports',
                cls: 'shadow',
                checked: true,
                listeners: {
                    change: this.handleReportsChange,
                    scope: this
                }
            }],
            miscList = [],
            featuresList = [],
            listItem,
            dealer_store = Ext.getStore('Dealer'),
            dealer = dealer_store && dealer_store.first();

        Ext.getStore('MapTypes').each(function (mapRecord) {
            mapList.push({
                boxLabel: mapRecord.get('name'),
                name: 'maps',
                inputValue: mapRecord.get('type'),
                cls: 'shadow',
                checked: true,
                checkboxgroup: true
            });
        }, this);

        Ext.getStore('Features').each(function (featureRecord) {
            listItem = {
                boxLabel: featureRecord.get('name'),
                name: 'features',
                inputValue: featureRecord.get('type'),
                role: 'feature_' + featureRecord.get('type'),
                cls: 'shadow',
                checked: true,
                checkboxgroup: true
            };

            if (Ext.Array.indexOf(['report_xls', 'report_scheduled'], featureRecord.get('type')) > -1) {
                listItem.listeners = {
                    change: this.handleReportsFeatureChange,
                    scope: this
                }
            }

            switch (featureRecord.get("group")) {
                case "apps":
                    appsList.push(listItem);
                    break;
                case "features":
                    featuresList.push(listItem);
                    break;
                case "mis�":
                    miscList.push(listItem);
                    break;
            }
        }, this);

        return [
            {
                html: [_l.get('tariffs.fields.device_limit_exp'), this.getHintSymbol(_l.get('tariffs.card.hints.7')),
                       ":"].join(" "),
                colspan: 2,
                height: 25
            },
            this.getFieldConfig({
                xtype: 'numberfield',
                plugins: [
                    {
                        ptype: 'fieldpostfix',
                        units: "assets",
                        allowZeroValues: true,
                        useRaw: true
                    }
                ],
                allowBlank: false,
                hideTrigger: true,
                name: 'device_limit',
                width: 200,

                minValue: 1,
                minLength: 1,
                maxLength: 6,

                value: 5,
                colspan: 2,
                listeners: {
                    change: function (cmp, value) {
                        cmp.suspendEvent('change');
                        cmp.setValue(0);
                        cmp.setValue(value);
                        cmp.resumeEvent('change');
                    }
                }
            }),
            {
                html: [_l.get('tariffs.fields.store_period'), this.getHintSymbol(_l.get('tariffs.card.hints.8')),
                       ":"].join(" "),
                colspan: 2,
                height: 25,
                role: 'store_period_label'
            },
            {
                fname: 'store_period',
                xtype: 'periodfield',
                role: 'store_period',
                ui: 'light',
                numberWidth: 120,
                width: 200,
                allowBlank: true,
                cellCls: 'form-cell',
                colspan: 2,
                initDisabled: this.isFormDisabled(),
                limit: dealer.get('store_period')
            },
            {
                html: "&nbsp;",
                colspan: 4
            },
            {
                html: [_l.get('tariffs.fields.available_maps'),
                       this.getHintSymbol(_l.get('tariffs.card.hints.9'))].join(" "),
                colspan: 4,
                cellCls: 'sub_title'
            },
            {
                xtype: 'checkboxgroup',
                columns: 4,
                vertical: true,
                ui: 'light',
                items: mapList,
                cellCls: 'form-cell',
                colspan: 4,
                role: "maps-list",
                padding: '0 0 0 10'
            },
            {
                html: "&nbsp;",
                colspan: 4
            },
            {
                html: [_l.get('tariffs.fields.available_features'),
                       this.getHintSymbol(_l.get('tariffs.card.hints.10'))].join(" "),
                colspan: 4,
                cellCls: 'sub_title'
            },
            {
                html: _l.get('tariffs.card.features.groups.apps') + ":",
                colspan: 4,
                cellCls: 'sub_title.apps'
            },
            {
                xtype: 'checkboxgroup',
                columns: 4,
                vertical: true,
                ui: 'light',
                sRole: 'features',
                items: appsList,
                cellCls: 'form-cell',
                colspan: 4,
                padding: '0 0 0 10'
            },
            {
                html: _l.get('tariffs.card.features.groups.features') + ":",
                colspan: 4,
                cellCls: 'sub_title.apps'
            },
            {
                xtype: 'checkboxgroup',
                columns: 4,
                vertical: true,
                ui: 'light',
                sRole: 'features',
                items: featuresList,
                cellCls: 'form-cell',
                colspan: 4,
                padding: '0 0 0 10'
            },
            {
                html: _l.get('tariffs.card.features.groups.misc') + ":",
                colspan: 4,
                cellCls: 'sub_title.apps'
            },
            {
                xtype: 'checkboxgroup',
                columns: 4,
                vertical: true,
                ui: 'light',
                items: miscList,
                cellCls: 'form-cell',
                colspan: 4,
                padding: '0 0 0 10'
            },
            {
                html: "&nbsp;",
                colspan: 4
            },
            {
                html: _l.get('tariffs.card.hints.plan_options'),
                colspan: 4,
                cellCls: 'hint'
            }
        ];
    },

    prepareAvailabilityItems: function () {
        return [
            {
                html: _l.get('tariffs.fields.group_id_exp') + this.getHintSymbol(_l.get('tariffs.card.hints.15')) + ":",
                cellCls: 'strong-height'
            },
            {
                xtype: 'fakefield',
                cellCls: 'form-cell',
                processText: function (value) {
                    return value != "0" ? value : _l.get('no')
                },
                fieldConfig: this.getFieldConfig({
                    name: 'group_id',
                    maxLength: 6,
                    vtype: 'numeric',
                    allowBlank: true
                })
            },

            {
                html: _l.get('tariffs.fields.active_exp') + this.getHintSymbol(_l.get('tariffs.card.hints.16')) + ":",
                cellCls: 'strong-height'
            },
            {
                xtype: 'fakefield',
                cellCls: 'form-cell',
                fieldConfig: this.getFieldConfig({
                    xtype: 'checkbox',
                    name: 'active'
                })
            },
            {},
            {
                html: "&nbsp;",
                colspan: 2
            },
            {
                html: _l.get('tariffs.card.hints.plan_availability'),
                colspan: 2,
                cellCls: 'hint'
            }
        ];
    },

    changeDefault: function (value) {
        var fields = [
            this.down('[role="free_days_label"]'),
            this.down('[role="free_days_empty1"]'),
            this.down('[role="free_days"]'),
            this.down('[role="free_days_empty2"]'),

            this.down('[role="free_days_device_limit_label"]'),
            this.down('[role="free_days_device_limit_empty1"]'),
            this.down('[role="free_days_device_limit"]'),
            this.down('[role="free_days_device_limit_empty2"]'),

            this.down('[role="activation_bonus_label"]'),
            this.down('[role="activation_bonus_empty1"]'),
            this.down('[role="activation_bonus"]'),
            this.down('[role="activation_bonus_empty2"]')
        ];
        //    price_label = this.down('[role="price_label"]');

        Ext.iterate(fields, function (field) {
            if (field) {
                field[!value ? 'hide' : 'show']();
            }
        }, this);

        //price_label.update(_l.get('tariffs.price_type')[paymentType]);
    },

    changePaymentType: function (paymentType) {
        var type = paymentType == "monthly";

        var trackerFields = [
                this.down('[role="proportional_charge"]'),
                this.down('[role="proportional_charge_label"]'),
                this.down('[role="proportional_charge_empty1"]'),
                this.down('[role="proportional_charge_empty2"]')
            ],
            price_label = this.down('[role="price_label"]');

        Ext.iterate(trackerFields, function (field) {
            field[!type ? 'hide' : 'show']();
        }, this);

        price_label.update(_l.get('tariffs.price_type')[paymentType]);
    },

    changeDeviceType: function (type) {
        var trackerFields = [
            this.down('[role="options-collapser"]'),
            this.down('[role="options-body"]')
        ];

        Ext.iterate(trackerFields, function (field) {
            field[type ? 'hide' : 'show']();
        }, this);
    },

    getTabPanelItems: function () {
        var data = this.getRecordData();

        return data && data.device_type === 'tracker' && [
                {
                    xtype: 'trackerslist',
                    title: _l.get('tariffs.card.tab_panel.trackers.title'),
                    noTBar: true,
                    showStatus: false,
                    filter: {
                        tariff_id: this.getRecordId()
                    },
                    hasEdit: Ext.checkPermission('trackers', 'read')
                }
            ];
    },

    getTariffTypesData: function () {
        var types = Ext.Array.difference(["monthly", "everyday",
                                          "activeday"], Config.excludedTariffs ? Ext.isArray(Config.excludedTariffs) ? Config.excludedTariffs : [Config.excludedTariffs] : []),
            result = [],
            empty_result = [
                {
                    type: null,
                    "name": _l.get('tariffs.types.empty')
                }
            ];

        Ext.iterate(types, function (type) {
            result.push({
                type: type,
                "name": _l.get('tariffs.types')[type]
            })
        }, this);

        return result.length ? result : empty_result;
    },

    getTariffPriceText: function (type, prices, currency) {
        return prices[type] !== null
            ? Ext.String.format(_l.get('currencies_tpls')[currency], Ext.util.Format.number(prices[type], '0.00'))
            : _l.get("na")
    }
});
