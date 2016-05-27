/**
 * @class NavixyPanel.store.MapTypes
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.MapTypes', {
    extend: 'Ext.data.Store',
    fields: ['type', 'name', 'free'],
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
            }, {
                type: "bing",
                "name": _l.get('maps.bing')
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

    setAllowedMaps: function (maps) {
        if (Ext.isArray(maps) && maps.length) {
            this.filters.clear();

            this.filterBy(function (record) {
                return Ext.Array.indexOf(maps, record.get('type')) > -1
            }, this);
        }
    }
});