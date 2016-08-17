/**
 * @class NavixyPanel.view.tariffs.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.tariffs.List', {
    extend: 'NavixyPanel.view.components.AbstractList',

    alias: 'widget.tariffslist',
    store: 'Tariffs',

    viewPageSize: 1000,
    showBBar: false,

    getTopBar: function () {

        var barConfig = {
            padding: '0 0 10 0',
            border: 0,
            ui: 'light',
            height: 36,
            items: []
        };

        if (this.createBtn && !(Config.excludedTariffs && Ext.isArray(Config.excludedTariffs) && Config.excludedTariffs.length > 2)) {
            barConfig.items.push({
                xtype: 'button',
                iconCls: 'add-button',
                role: this.texts.createBtnRole,
                text: this.texts.createBtnText
            });
        }

        if (this.hasFilter) {
            barConfig.items.push('->');
            barConfig.items.push({
                xtype: 'navixylistfilter',
                margin: '0 -2 0 0',
                width: 200,
                listeners: {
                    filter: this.applyListFilter,
                    clear: this.removeListFilter,
                    scope: this
                }
            });
        }

        return !this.noTBar && barConfig;
    },

    getBottomBar: function () {
        return this.storeSearch || this.showBBar ? this.callParent(arguments) : false;
    },

    getTexts: function () {
        return {
            createBtnText: _l.get('tariffs.list.create_btn_text'),
            emptyData: _l.get('tariffs.list.empty_text')
        };
    },

    getColumnsConfig: function () {
        var defaultTariffs = Ext.getStore('TariffDefaults').getDefaultTariffs(),
            tariffLabelTpl = [
                '<a>{name:htmlEncode}</a>',
                '<tpl if="isDefault">',
                    '<span class="scaled lighten">{[_l.get("tariffs.fields.default_short")]}</span>',
                '</tpl>'
            ],
            tariffDeviceTpl = [
                '{device_type:deviceEncode}'
            ],
            tariffPriceTpl = [
                '{price:emptyEncode}'
            ],
            tariffTypeTpl = [
                '{type:tariffEncode}'
            ];

        return [
            {
                text: _l.get('tariffs.fields.name'),
                xtype: 'templatecolumn',
                tpl: tariffLabelTpl,
                dataIndex: 'name',
                defaultRenderer: function(value, meta, record) {
                    var data = Ext.apply({isDefault: defaultTariffs[record.data.device_type] === record.get('id')}, record.data, record.getAssociatedData());
                    return this.tpl.apply(data);
                },
                flex: 3
            },
            {
                text: _l.get('tariffs.fields.tariff_type_short'),
                xtype: 'templatecolumn',
                tpl: tariffTypeTpl,
                dataIndex: 'type',
                sortable: false,
                width: 100
            },
            {
                text: _l.get('tariffs.fields.device_type'),
                xtype: 'templatecolumn',
                tpl: tariffDeviceTpl,
                dataIndex: 'device_type',
                width: 120
            },
            {
                text: _l.get('tariffs.fields.group_id'),
                dataIndex: 'group_id',
                width: 100
            },
            {
                text: _l.get('tariffs.fields.price'),
                xtype: 'templatecolumn',
                tpl: tariffPriceTpl,
                dataIndex: 'price',
                minWidth: 150,
                resizable: false,
                flex: 1
            }
        ];
    }
});
