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
                    html: '<a>' + _l.tariffs.card.links.make_default + '</a>',
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
                    html: '<a>' + _l.tariffs.card.links.tariff_edit + '</a>',
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

    prepareHeaderData: function () {
        var recordData = this.getRecordData(),
            tariffPrices = Ext.getStore('TariffPrices').getPrices();

        return {
            title: recordData.name,
            title_add: this.checkDefault() ? Ext.String.format(_l.tariffs.fields.default_tariff, _l.devices[recordData.device_type]) : false,
            main_cls: 'card-header-inner',
            table_cls: 'header-table',
            fields: [
                {
                    title: _l.tariffs.fields.price,
                    value: recordData.price
                },
                {
                    title: _l.tariffs.fields.outgoing_sms,
                    value: '<span class="pre_note">' + recordData.outgoing_sms + '</span> <span class="note" data-qtip="' + _l.tariffs.fields.service_price + '">+' + tariffPrices.outgoing_sms + '</span>',
                    no_encode: true
                },
                {
                    title: _l.tariffs.fields.incoming_sms,
                    value: '<span class="pre_note">' + recordData.incoming_sms + '</span> <span class="note" data-qtip="' + _l.tariffs.fields.service_price + '">+' + tariffPrices.incoming_sms + '</span>',
                    no_encode: true
                },
                {
                    title: _l.tariffs.fields.service_sms,
                    value: '<span class="pre_note">' + recordData.service_sms + '</span> <span class="note" data-qtip="' + _l.tariffs.fields.service_price + '">+' + tariffPrices.service_sms + '</span>',
                    no_encode: true
                },
                {
                    title: _l.tariffs.fields.phone_call,
                    value: '<span class="pre_note">' + recordData.phone_call + '</span> <span class="note" data-qtip="' + _l.tariffs.fields.service_price + '">+' + tariffPrices.phone_call + '</span>',
                    no_encode: true
                },
                {
                    title: _l.tariffs.fields.traffic,
                    value: '<span class="pre_note">' + recordData.traffic + '</span> <span class="note" data-qtip="' + _l.tariffs.fields.service_price + '">+' + tariffPrices.traffic + '</span>',
                    no_encode: true
// TODO: Unlock by API
//                },
//                {
//                    title: _l.tariffs.fields.tariff_type,
//                    value: _l.tariffs.types[recordData.tariff_type || 'monthly'], // TODO: Tariff_type name api value
//                    no_encode: true
                }
            ]
        };
    },

    prepareBodyLeftData: function () {
        var recordData = this.getRecordData();

        return {
            main_cls : 'card-body-inner',
            table_cls: 'body-table single',
            fields: [
                {
                    title: _l.tariffs.fields.device_limit_exp,
                    value: recordData.device_limit,
                    no_empty: true
                },
                {
                    title: _l.tariffs.fields.group_id_exp,
                    value: recordData.group_id,
                    no_empty: true
                },
                {
                    title: _l.tariffs.fields.store_period,
                    value: Ext.util.Format.unitsDecode(recordData.store_period),
                    no_empty: true
                },
                {
                    title: _l.tariffs.fields.has_reports,
                    value: _l[recordData.has_reports ? 'yes' : 'no'],
                    no_empty: true
                },
                {
                    title: _l.tariffs.fields.active,
                    value: _l[recordData.active ? 'yes' : 'no'],
                    no_empty: true
                },
                {
                    title: _l.tariffs.fields.proportional_charge,
                    value: _l[recordData.proportional_charge ? 'yes' : 'no'],
                    no_empty: true
                }
            ]
        };
    },

    getTabPanelItems: function () {
        return this.getRecordData().device_type === 'tracker' && [
            {
                xtype: 'trackerslist',
                title: _l.tariffs.card.tab_panel.trackers.title,
                noTBar: true,
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
