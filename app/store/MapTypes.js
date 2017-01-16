/**
 * @class NavixyPanel.store.MapTypes
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.MapTypes', {
    extend: 'Ext.data.Store',
    model: 'NavixyPanel.model.MapType',
    constructor: function () {
        this.data = [
            {
                type: "roadmap",
                "name": _l.get('maps.roadmap'),
                free: true
            },
            {
                type: "satellite",
                "name": _l.get('maps.satellite'),
                free: true
            },
            {
                type: "hybrid",
                "name": _l.get('maps.hybrid'),
                free: true
            },
            {
                type: "yandex",
                "name": _l.get('maps.yandex')
            },
            {
                type: "yandex_satellite",
                "name": _l.get('maps.yandex_satellite')
            },
            {
                type: "yandex_hybrid",
                "name": _l.get('maps.yandex_hybrid')
            },
            {
                type: "yandexpublic",
                "name": _l.get('maps.yandexpublic'),
                free: true
            },
            {
                type: "osm",
                "name": _l.get('maps.osm'),
                free: true
            },
            {
                type: "osmmapnik",
                "name": _l.get('maps.osmmapnik'),
                free: true
            },
            {
                type: "wikimapia",
                "name": _l.get('maps.wikimapia'),
                free: true
            },
            {
                type: "cdcom",
                "name": _l.get('maps.cdcom')
            },
            {
                type: "doublegis",
                "name": _l.get('maps.doublegis')
            },
            {
                type: "ovi",
                "name": _l.get('maps.ovi')
            },
            {
                type: "bing",
                "name": _l.get('maps.bing')
            },
            {
                type: "bing_satellite",
                "name": _l.get('maps.bing_satellite')
            },
            {
                type: "bing_hybrid",
                "name": _l.get('maps.bing_hybrid')
            },

            {
                type: "mailru",
                "name": _l.get('maps.mailru')
            },
            {
                type: "kosmosnimki",
                "name": _l.get('maps.kosmosnimki'),
                free: true
            },
            {
                type: "sputnik",
                "name": _l.get('maps.sputnik'),
                free: true
            }
        ];

        this.callParent(arguments);
    },

    getClone: function (config) {

        return Ext.create(this.self.getName(), Ext.apply(
            {
                storeId: this.storeId + Ext.id()
            },
            config
        ));
    },

    setAllowedMaps: function (maps) {
        if (Ext.isArray(maps) && maps.length) {
            this.filters.clear();

            this.filterBy(function (record) {
                return Ext.Array.contains(maps, record.get('type'));
            }, this);
        }
    }
});