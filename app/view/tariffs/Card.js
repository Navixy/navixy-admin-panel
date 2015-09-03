Ext.define('NavixyPanel.view.tariffs.Card', {
    extend: 'NavixyPanel.view.components.AbstractCard',
    alias: 'widget.tariffcard',
    stateful: true,
    stateId: 'tariffcard',
    singleColumnBody: true,

    getRecordData: function () {
        return this.record.getViewData();
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

        if (Ext.checkPermission('tariffs', 'update')) {
            result.unshift(
                {
                    html: '<a>' + _l.get('tariffs.card.links.tariff_edit') + '</a>',
                    listeners: {
                        click: {
                            fn: this.fireTariffEdit,
                            scope: me
                        }
                    }
                }
            );
        }

        return result;
    },

    checkDefault: function () {
        return this.getRecordData().isDefault;
    },

    getHintSymbol: function (hint, cls) {
        return ['<span class="icon-help ',
            cls || '',
            '" style="color:#f89406;font-size:12px; padding: 5px" ',
            'data-qtip="', Ext.String.htmlEncode(hint), '"',
            'data-qclass="settings-tip"',
            'data-qwidth="300"',
            '></span>'].join('');
    },

    getPanelItemsConfig: function () {
        var headerConfig = {
                xtype: 'container',
                cls: 'card-header-inner content-table',
                itemCls: '',
                padding: '10',
                layout: {
                    type: 'table',
                    columns: 4
                },
                defaults: {
                    xtype: 'component'
                },
                items: this.prepareHeaderItems()
            },
            tabPanelConfig = {
                xtype: 'tabpanel',
                ui: 'light',
                border: 0,
                items: this.getTabPanelItems()
            },
            items = [
                this.getOptionsCollapserConfig(),
                {
                    role: 'options-body',
                    xtype: 'panel',
                    ui: 'transparent',
                    cls: 'card-body',
                    padding: '10',
                    collapseMode: 'mini',
                    layout: {
                        type: 'vbox',
                        aligh: 'stretch'
                    },
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
                },
                {
                    xtype: 'component',
                    height: 10
                },
                this.getAvailabilityCollapserConfig(),
                {
                    role: 'availability-body',
                    xtype: 'panel',
                    ui: 'transparent',
                    cls: 'card-body',
                    padding: '10',
                    collapseMode: 'mini',
                    layout: {
                        type: 'vbox',
                        aligh: 'stretch'
                    },
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
                        items: this.prepareAvailabilityItems()
                    }
                },
                {
                    xtype: 'container',
                    height: 40
                }
            ];

        items.unshift(headerConfig);
        items.push(tabPanelConfig);

        return items;
    },

    getOptionsCollapserConfig: function () {
        var me = this;

        return {
            role: 'options-collapser',
            xtype: 'clickable',
            cls: 'body-collapser',
            padding: '5 0 5 30',

            html: _l.get('tariffs.fields.plan_options'),

            collapsedHtml: _l.get('tariffs.fields.plan_options'),
            expandedHtml: [_l.get('tariffs.fields.plan_options'), _l.get('card.body.exptitle_show')].join(" "),

            tip: _l.get('card.body.collapser_tip'),
            expTip: _l.get('card.body.collapser_exptip'),

            listeners: {
                click: function () {
                    this.toggleBody(undefined, this.down("[role='options-body']"), this.down("[role='options-collapser']"))
                },
                scope: me
            }
        };
    },

    getAvailabilityCollapserConfig: function () {
        var me = this;

        return {
            role: 'availability-collapser',
            xtype: 'clickable',
            cls: 'body-collapser',
            padding: '5 0 5 30',

            html: _l.get('tariffs.fields.plan_availability'),

            collapsedHtml: _l.get('tariffs.fields.plan_availability'),
            expandedHtml: [_l.get('tariffs.fields.plan_availability'), _l.get('card.body.exptitle_show')].join(" "),

            tip: _l.get('card.body.collapser_tip'),
            expTip: _l.get('card.body.collapser_exptip'),

            listeners: {
                click: function () {
                    this.toggleBody(undefined, this.down("[role='availability-body']"), this.down("[role='availability-collapser']"))
                },
                scope: me
            }
        };
    },

    prepareOptionsItems: function () {
        var recordData = this.getRecordData(),
            result = [
                {
                    html: [_l.get('tariffs.fields.device_limit_exp'), this.getHintSymbol(_l.get('tariffs.card.hints.7')), ":"].join(" "),
                    colspan: 2
                },
                {
                    html: [recordData.device_limit, _l.get('tariffs.fields.device_limit_postfix')].join(" "),
                    colspan: 2
                },
                {
                    html: [_l.get('tariffs.fields.store_period'), this.getHintSymbol(_l.get('tariffs.card.hints.8')), ":"].join(" "),
                    colspan: 2
                },
                {
                    html: Ext.util.Format.unitsDecode(recordData.store_period),
                    colspan: 2
                },
                {
                    html: "&nbsp;",
                    colspan: 4
                }
            ];

        result.push({
            html: [_l.get('tariffs.fields.available_maps'), this.getHintSymbol(_l.get('tariffs.card.hints.9'))].join(" "),
            colspan: 4,
            cellCls: 'sub_title'
        });

        Ext.getStore("MapTypes").each(function(record) {
            result.push({
                html: record.get('name'),
                cellCls: !record.get('free') ? "disabled": ''
            })
        });

        result[result.length - 1].colspan = 5 - Ext.getStore("MapTypes").count() % 4;

        result = result.concat([
            {
                html: "&nbsp;",
                colspan: 4
            },
            {
                html: [_l.get('tariffs.fields.available_features'), this.getHintSymbol(_l.get('tariffs.card.hints.10'))].join(" "),
                colspan: 4,
                cellCls: 'sub_title'
            }
        ]);


        Ext.getStore("Features").each(function(record) {
            result.push({
                html: record.get('name'),
                cellCls: !record.get('free') ? "disabled": ''
            })
        });

        result[result.length - 1].colspan = 5 - Ext.getStore("Features").count() % 4;


        result = result.concat([
            {
                html: "&nbsp;",
                colspan: 4
            },
            {
                html: _l.get('tariffs.card.hints.plan_options'),
                colspan: 4,
                cellCls: 'hint'
            }
        ]);

        return result;
    },

    prepareAvailabilityItems: function () {
        var recordData = this.getRecordData(),
            result = [
                {
                    html: _l.get('tariffs.fields.group_id_exp') + ":",
                    colspan: 2
                },
                {
                    html: recordData.group_id || _l.get('no'),
                    colspan: 2
                },
                {
                    html: _l.get('tariffs.fields.active_exp') + ":",
                    colspan: 2
                },
                {
                    html: _l[recordData.active ? 'yes' : 'no'],
                    colspan: 2
                },
                {
                    html: "&nbsp;",
                    colspan: 4
                },
                {
                    html: _l.get('tariffs.card.hints.plan_availability'),
                    colspan: 4,
                    cellCls: 'hint'
                }
            ];

        return result;
    },

    prepareHeaderItems: function () {
        var recordData = this.getRecordData(),
            tariffPrices = Ext.getStore('TariffPrices').getPrices(),
            seller_currency = 'USD',
            currency = 'GBP';

        return [
            {
                colspan: 4,
                cellCls: 'title',
                html: this.checkDefault() ? [recordData.name, '<span class="title-add">', Ext.String.format(_l.get('tariffs.fields.default_tariff'), _l.get('devices')[recordData.device_type]), '</span>'].join('') : recordData.name
            },
            {
                html: _l.get('tariffs.fields.tariff_type')
            },
            {},
            {
                html: _l.get('tariffs.types')[recordData.type || 'monthly']
            },
            {},
            {
                html: _l.get('tariffs.price_type')[recordData.type || "monthly"]
            },
            {},
            {
                html: Ext.String.format(_l.get('currencies_tpls')[currency], Ext.util.Format.number(recordData.price, '0.000'))
            },
            {},
            {
                html: '&nbsp'
            },
            {
                cellCls: 'no_dots'
            },
            {
                colspan: 2
            },

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

            {
                html: _l.get('tariffs.fields.outgoing_sms') + this.getHintSymbol(_l.get('tariffs.card.hints.2'))
            },
            {},
            {
                html: '<span class="pre_note">' + Ext.String.format(_l.get('currencies_tpls')[currency], Ext.util.Format.number(recordData.outgoing_sms, '0.000')) + '</span>'
            },
            {
                html: '<span class="note" data-qtip="' + _l.get('tariffs.fields.service_price') + '">+' + Ext.String.format(_l.get('currencies_tpls')[seller_currency], Ext.util.Format.number(tariffPrices.outgoing_sms, '0.000'))
            },

            {
                html: _l.get('tariffs.fields.service_sms') + this.getHintSymbol(_l.get('tariffs.card.hints.3'))
            },
            {},
            {
                html: '<span class="pre_note">' + Ext.String.format(_l.get('currencies_tpls')[currency], Ext.util.Format.number(recordData.service_sms, '0.000')) + '</span>'
            },
            {
                html: '<span class="note" data-qtip="' + _l.get('tariffs.fields.service_price') + '">+' + Ext.String.format(_l.get('currencies_tpls')[seller_currency], Ext.util.Format.number(tariffPrices.service_sms, '0.000'))
            },

            {
                html: _l.get('tariffs.fields.incoming_sms') + this.getHintSymbol(_l.get('tariffs.card.hints.4'))
            },
            {},
            {
                html: '<span class="pre_note">' + Ext.String.format(_l.get('currencies_tpls')[currency], Ext.util.Format.number(recordData.incoming_sms, '0.000')) + '</span>'
            },
            {
                html: '<span class="note" data-qtip="' + _l.get('tariffs.fields.service_price') + '">+' + Ext.String.format(_l.get('currencies_tpls')[seller_currency], Ext.util.Format.number(tariffPrices.incoming_sms, '0.000'))
            },

            {
                html: _l.get('tariffs.fields.traffic') + this.getHintSymbol(_l.get('tariffs.card.hints.5'))
            },
            {},
            {
                html: '<span class="pre_note">' + Ext.String.format(_l.get('currencies_tpls')[currency], Ext.util.Format.number(recordData.traffic, '0.000')) + '</span>'
            },
            {
                html: '<span class="note" data-qtip="' + _l.get('tariffs.fields.service_price') + '">+' + Ext.String.format(_l.get('currencies_tpls')[seller_currency], Ext.util.Format.number(tariffPrices.traffic, '0.000'))
            },

            {
                html: _l.get('tariffs.fields.phone_call') + this.getHintSymbol(_l.get('tariffs.card.hints.6'))
            },
            {},
            {
                html: '<span class="pre_note">' + Ext.String.format(_l.get('currencies_tpls')[currency], Ext.util.Format.number(recordData.phone_call, '0.000')) + '</span>'
            },
            {
                html: '<span class="note" data-qtip="' + _l.get('tariffs.fields.service_price') + '">+' + Ext.String.format(_l.get('currencies_tpls')[seller_currency], Ext.util.Format.number(tariffPrices.phone_call, '0.000'))
            }
        ]
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

    fireTariffEdit: function () {
        this.fireEvent('tariffedit', this.record);
    },

    fireMakeDefault: function () {
        this.fireEvent('setdefault', this.record);
    }
});
