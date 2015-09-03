Ext.define('NavixyPanel.view.tariffs.NewCard', {
    extend: 'NavixyPanel.view.components.Card',
    alias: 'widget.tariff-card',
    stateful: true,
    stateId: 'tariffcard',
    singleColumnBody: true,

    initComponent: function () {
        Ext.apply(this.modeVisibleTable.edit, {
            'sur-title': false,
            'real-title': true
        });
        Ext.apply(this.modeVisibleTable.card, {
            'edit-btn': Ext.checkPermission('tariffs', 'update'),
            'sur-title': true,
            'real-title': false
        });

        this.callParent(arguments);
    },

    disableForm: function () {
        this.callParent(arguments);
        this.updateSurrogateTitle();
    },

    updateSurrogateTitle: function () {

        var surTitle = this.down('[role=sur-title]'),
            recordData = this.record.getViewData();


            if (surTitle) {
            surTitle.update(this.checkDefault() ? [recordData.name, '<span class="title-add">', Ext.String.format(_l.get('tariffs.fields.default_tariff'), _l.get('devices')[recordData.device_type]), '</span>'].join('') : recordData.name)
        }
    },


    getRecordData: function () {
        return this.record.getViewData();
    },

    getProcessedValues: function () {
        var values = this.getValues();

        this.iterateFields(function(field) {
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

        return values;
    },

    checkDefault: function () {
        return this.getRecordData().isDefault;
    },

    getLinks: function () {
        var me = this,
            result = [];

        if (Ext.checkPermission('tariffs', 'update') && !this.checkDefault()) {
            result.unshift(
                {
                    html: '<a>' + _l.get('tariffs.card.links.make_default') + '</a>',
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

    getHeaderItemsConfig: function () {

        var me = this,
            deviceData = [
                {type: "tracker", "name": _l.get('devices.tracker')}
            ],
            dealer_store = Ext.getStore('Dealer'),
            dealer = dealer_store && dealer_store.first(),
            settings = this.record.getSettingsData(),
            seller_currency = (dealer && dealer.get('seller_currency')) || 'USD',
            currency = (settings && settings.currency) || 'USD',

            recordData = this.getRecordData(),
            isCamera = this.getRecordData().device_type !== "tracker",


            tariffPrices = Ext.getStore('TariffPrices').getPrices(),
            priceConfig = {
                disabledValue: function () {
                    return Ext.String.format(_l.get('currencies_tpls')[currency], Ext.util.Format.number(this.getValue(), '0.000'))
                },
                allowBlank: true,
                width: 100,

                minLength: 1,
                maxLength: 10,
                vtype: 'numeric',

                value: 0
            };

        this.deviceTypesStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data : deviceData
        });

        this.tariffTypesStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data : this.getTariffTypesData()
        });

        return [
            this.getFieldConfig({
                //html: this.checkDefault() ? [recordData.name, '<span class="title-add">', Ext.String.format(_l.get('tariffs.fields.default_tariff'), _l.get('devices')[recordData.device_type]), '</span>'].join('') : recordData.name
                name: 'name',
                colspan: 4,
                width: 384,
                role: 'real-title'
            }),

            {
                html: this.checkDefault() ? [recordData.name, '<span class="title-add">', Ext.String.format(_l.get('tariffs.fields.default_tariff'), _l.get('devices')[recordData.device_type]), '</span>'].join('') : recordData.name,
                colspan: 4,
                cellCls: 'title',
                role: 'sur-title'
            },

            {html: _l.get('tariffs.fields.tariff_type'), hidden: isCamera},
            {cellCls:'strong-height', hidden: isCamera},
            this.getFieldConfig({
                name: 'type',
                xtype: 'combobox',
                store: this.tariffTypesStore,
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type',
                hidden: isCamera
            }),{hidden: isCamera},

            {html: _l.get('tariffs.price_type')[recordData.type || "monthly"]},
            {},
            this.getFieldConfig(priceConfig, {
                name: 'price'
            }),
            {},

            {html: '&nbsp'},
            {cellCls: 'no_dots'},
            {colspan: 2},

            {
                html: _l.get('tariffs.fields.rate'),
                cellCls: 'sub_title'
            },
            {
                cellCls: 'no_dots'
            },
            {
                html: _l.get('tariffs.fields.users_price') + this.getHintSymbol(_l.get('tariffs.card.hints.7')),
                cellCls: 'sub_title'

            },
            {
                html: _l.get('tariffs.fields.client_costs') + this.getHintSymbol(_l.get('tariffs.card.hints.8')),
                cellCls: 'sub_title'
            },

            {html: _l.get('tariffs.fields.outgoing_sms') + this.getHintSymbol(_l.get('tariffs.card.hints.2'))},
            {},
            this.getFieldConfig(priceConfig, {name: 'outgoing_sms'}),
            {html: '<span class="note" data-qtip="' + _l.get('tariffs.fields.service_price') + '">+' + Ext.String.format(_l.get('currencies_tpls')[seller_currency], Ext.util.Format.number(tariffPrices.outgoing_sms, '0.000'))},

            {html: _l.get('tariffs.fields.service_sms') + this.getHintSymbol(_l.get('tariffs.card.hints.3'))},
            {},
            this.getFieldConfig(priceConfig, {name: 'service_sms'}),
            {html: '<span class="note" data-qtip="' + _l.get('tariffs.fields.service_price') + '">+' + Ext.String.format(_l.get('currencies_tpls')[seller_currency], Ext.util.Format.number(tariffPrices.service_sms, '0.000'))},

            {html: _l.get('tariffs.fields.incoming_sms') + this.getHintSymbol(_l.get('tariffs.card.hints.4'))},
            {},
            this.getFieldConfig(priceConfig, {name: 'incoming_sms'}),
            {html: '<span class="note" data-qtip="' + _l.get('tariffs.fields.service_price') + '">+' + Ext.String.format(_l.get('currencies_tpls')[seller_currency], Ext.util.Format.number(tariffPrices.incoming_sms, '0.000'))},

            {html: _l.get('tariffs.fields.traffic') + this.getHintSymbol(_l.get('tariffs.card.hints.5'))},
            {},
            this.getFieldConfig(priceConfig, {name: 'traffic'}),
            {html: '<span class="note" data-qtip="' + _l.get('tariffs.fields.service_price') + '">+' + Ext.String.format(_l.get('currencies_tpls')[seller_currency], Ext.util.Format.number(tariffPrices.traffic, '0.000'))},

            {html: _l.get('tariffs.fields.phone_call') + this.getHintSymbol(_l.get('tariffs.card.hints.6'))},
            {},
            this.getFieldConfig(priceConfig, {name: 'phone_call'}),
            {html: '<span class="note" data-qtip="' + _l.get('tariffs.fields.service_price') + '">+' + Ext.String.format(_l.get('currencies_tpls')[seller_currency], Ext.util.Format.number(tariffPrices.phone_call, '0.000'))}
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
        var recordData = this.getRecordData(),
            mapList = [],
            featuresList = [];

        Ext.getStore('MapTypes').each(function (mapRecord) {
            mapList.push({
                boxLabel: mapRecord.get('name'),
                name: 'maps',
                inputValue: mapRecord.get('type'),
                checkboxgroup: true
            });
        }, this);

        Ext.getStore('Features').each(function (featureRecord) {
            featuresList.push({
                boxLabel: featureRecord.get('name'),
                name: 'features',
                inputValue: featureRecord.get('type'),
                checkboxgroup: true
            });
        }, this);

        return [
            {
                html: [_l.get('tariffs.fields.device_limit_exp'), this.getHintSymbol(_l.get('tariffs.card.hints.7')), ":"].join(" "),
                colspan: 2
            },
            this.getFieldConfig({
                disabledValue: function () {
                    return [this.getValue(), _l.get('tariffs.fields.device_limit_postfix')].join(" ")
                },
                name: 'device_limit',
                width: 200,

                minLength: 1,
                maxLength: 6,
                vtype: 'numeric',

                value: 0,
                colspan: 2
            }),
            {
                html: [_l.get('tariffs.fields.store_period'), this.getHintSymbol(_l.get('tariffs.card.hints.8')), ":"].join(" "),
                colspan: 2
            },
            {
                //html: Ext.util.Format.unitsDecode(recordData.store_period),
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
        var recordData = this.getRecordData();

        return [
            {
                html: _l.get('tariffs.fields.group_id_exp') + ":"
            },
            this.getFieldConfig({
                disabledValue: function () {
                    return this.getValue() !== "0" ? this.getValue() : _l.get('no')
                },
                name: 'group_id',
                maxLength: 6,
                vtype: 'numeric'
            }),
            {
                html: _l.get('tariffs.fields.active_exp') + ":"
            },
            this.getFieldConfig({
                xtype: 'checkbox',
                name: 'active'
            }),
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

    getTabPanelItems: function () {
        return this.getRecordData().device_type === 'tracker' && [
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

    fireMakeDefault: function () {
        this.fireEvent('setdefault', this.record);
    }
});
