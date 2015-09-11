Ext.define('NavixyPanel.view.tariffs.NewCard', {
    extend: 'NavixyPanel.view.components.Card',
    requires: ['NavixyPanel.plugins.FieldPostfix'],

    alias: 'widget.tariff-card',
    stateful: true,
    stateId: 'tariffcard',
    singleColumnBody: true,

    addTarget: 'tariff/create',
    createTarget: 'tariff/',

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
            if (recordData.maps_exclusion) {
                recordData["maps"] = this.reverseMaps(recordData["maps"]);
                if (recordData["maps"].length) {
                    disableMaps = true;
                }
            }

            this.iterateFields(function(field) {
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
        }

        this.getForm().isValid();
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


    getLinks: function () {

        var me = this,
            data = this.getRecordData(),
            result = [];

        if (Ext.checkPermission('tariffs', 'update') && data && !data.isDefault) {
            result.unshift(
                {
                    html: '<a>' + _l.get('tariffs.card.links.make_default') + '</a>' + this.getHintSymbol(_l.get('tariffs.card.hints.14')),
                    listeners: {
                        click: {
                            fn: this.fireMakeDefault,
                            scope: me
                        }
                    }
                }
            );
        }

        return result;
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
            settings = false, //this.record.getSettingsData(),
            seller_currency = (dealer && dealer.get('seller_currency')) || 'USD',
            currency = (settings && settings.currency) || 'USD',

            recordData = this.getRecordData(),
            isCamera = recordData && recordData.device_type !== "tracker",
            hasCamera = !!dealer.get('enable_cameras'),
            deviceData = [
                {type: "tracker", "name": _l.get('devices.tracker')}
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
            // 0 --------------------------------------------------------------------- //
            {html: _l.get('tariffs.fields.name')},
            {},
            this.getFieldConfig({
                name: 'name',
                value: _l.get('tariffs.fields.default_name')
            }),
            {},

            // 1 --------------------------------------------------------------------- //
            {html: _l.get('tariffs.fields.device_type'), hidden: hasCamera},
            {cellCls: 'strong-height', hidden: hasCamera},
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
                    change: function() {
                        me.changeDeviceType(this.getValue() !== "tracker");
                    }
                },
                hidden: hasCamera
            }),{hidden: hasCamera},

            // 2 --------------------------------------------------------------------- //
            {html: _l.get('tariffs.fields.tariff_type'), hidden: isCamera},
            {cellCls: 'strong-height', hidden: isCamera},
            this.getFieldConfig({
                name: 'type',
                xtype: 'combobox',
                store: this.tariffTypesStore,
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type',
                value: "monthly",

                hidden: isCamera
            }),{hidden: isCamera},

            // 3 --------------------------------------------------------------------- //
            {html: _l.get('tariffs.price_type')[recordData && recordData.type || "monthly"]},
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
                html: [_l.get('tariffs.fields.users_price'), " ", Ext.String.format(_l.get('tariffs.card.currency_in'), Ext.String.format(_l.get('currencies_tpls')[currency], "").replace(" ", "")), this.getHintSymbol(_l.get('tariffs.card.hints.12'))].join(""),
                cellCls: 'sub_title'

            },
            {
                html: _l.get('tariffs.fields.client_costs') + this.getHintSymbol(_l.get('tariffs.card.hints.13')),
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
            //this.getFieldConfig(priceConfig, {name: 'service_sms'}),
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

    prepareOptionsItems: function () {
        var mapList = [],
            featuresList = [];

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
            featuresList.push({
                boxLabel: featureRecord.get('name'),
                name: 'features',
                inputValue: featureRecord.get('type'),
                cls: 'shadow',
                checked: true,
                checkboxgroup: true
            });
        }, this);

        return [
            {
                html: [_l.get('tariffs.fields.device_limit_exp'), this.getHintSymbol(_l.get('tariffs.card.hints.7')), ":"].join(" "),
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
                hideTrigger: true,
                name: 'device_limit',
                width: 200,

                minLength: 1,
                maxLength: 6,

                value: 5,
                colspan: 2
            }),
            {
                html: [_l.get('tariffs.fields.store_period'), this.getHintSymbol(_l.get('tariffs.card.hints.8')), ":"].join(" "),
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
                initDisabled: this.isFormDisabled()
            },
            {
                html: "&nbsp;",
                colspan: 4
            },
            {
                html: [_l.get('tariffs.fields.available_maps'), this.getHintSymbol(_l.get('tariffs.card.hints.9'))].join(" "),
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
                colspan: 4
            },
            {
                html: "&nbsp;",
                colspan: 4
            },
            {
                html: [_l.get('tariffs.fields.available_features'), this.getHintSymbol(_l.get('tariffs.card.hints.10'))].join(" "),
                colspan: 4,
                cellCls: 'sub_title'
            },
            {
                xtype: 'checkboxgroup',
                columns: 4,
                vertical: true,
                ui: 'light',
                items: featuresList,
                cellCls: 'form-cell',
                colspan: 4
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
                cellCls:'strong-height'
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
                cellCls:'strong-height'
            },
            {
                xtype: 'fakefield',
                cellCls: 'form-cell',
                fieldConfig: this.getFieldConfig({
                    xtype: 'checkbox',
                    name: 'active'
                })
            },
            {
            },
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

    getTariffPriceText: function (type, prices, currency) {
        return prices[type]
            ? Ext.String.format(_l.get('currencies_tpls')[currency], Ext.util.Format.number(prices[type], '0.00'))
            : _l.get("na")
    }
});
