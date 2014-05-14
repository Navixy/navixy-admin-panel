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

    getBottomBar: Ext.emptyFn,

    getTexts: function () {
        return {
            createBtnText: _l.tariffs.list.create_btn_text,
            emptyData: _l.tariffs.list.empty_text
        };
    },

    getColumnsConfig: function () {
        var defaultTariffs = Ext.getStore('TariffDefaults').getDefaultTariffs(),
            tariffLabelTpl = [
                '<a>{name:htmlEncode}</a>',
                '<tpl if="isDefault">',
                    '<span class="scaled lighten">{[_l.tariffs.fields.default_short]}</span>',
                '</tpl>'
            ],
            tariffDeviceTpl = [
                '{device_type:deviceEncode}'
            ],
            tariffPriceTpl = [
                '{price:emptyEncode}'
            ];

        return [
            {
                text: _l.tariffs.fields.tariff_id,
                dataIndex: 'id',
                width: 60
            },
            {
                text: _l.tariffs.fields.name,
                xtype: 'templatecolumn',
                tpl: tariffLabelTpl,
                dataIndex: 'name',
                defaultRenderer: function(value, meta, record) {
                    var data = Ext.apply({isDefault: defaultTariffs[record.data.device_type] === record.get('id')}, record.data, record.getAssociatedData());
                    return this.tpl.apply(data);
                },
                flex: 1
            },
            {
                text: _l.tariffs.fields.device_type,
                xtype: 'templatecolumn',
                tpl: tariffDeviceTpl,
                dataIndex: 'device_type',
                width: 120
            },
            {
                text: _l.tariffs.fields.group_id,
                dataIndex: 'group_id',
                width: 100
            },
            {
                text: _l.tariffs.fields.price,
                xtype: 'templatecolumn',
                tpl: tariffPriceTpl,
                dataIndex: 'price',
                width: 150
            }
        ];
    }
});
