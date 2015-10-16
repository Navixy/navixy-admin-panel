/**
 * @class NavixyPanel.store.leMaps
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.leMaps', {
    extend: 'Ext.data.Store',
    fields: ['name', 'maxZoom', 'minZoom', 'urlTpl', 'projection', 'tplFns', 'attribution', 'httpsReady'],
    allowedMaps: ['osm', 'wikimapia', 'yandexpublic'],
    constructor: function () {
        var locale = Locale.Manager.getLocale(),
            langCodeMap = {
                en: 0,
                ru: 1,
                es: 3
            },
            langCode = langCodeMap[locale];

        this.data = [
            {
                name: 'ROADMAP',
                httpsReady: true,
                projection: 'GoogleMapType'
            },
            {
                name: 'arcgistopo',
                httpsReady: true,
                maxZoom: 18,
                minZoom: 2,
                urlTpl: '//server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            },

            {
                name: 'arcgisstreet',
                httpsReady: true,
                maxZoom: 18,
                minZoom: 2,
                urlTpl: '//server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            },

            {
                name: 'osm',
                httpsReady: false,
                maxZoom: 17,
                minZoom: 2,
//            urlTpl: '//mtile0{serv}.mqcdn.com/tiles/1.0.0/vx/map/{z}/{x}/{y}.png',
                urlTpl: '//otile{serv}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
                attribution: _l.get('map.mapAttiributes.osm'),
                tplFns: {
                    serv: function (data) {
                        return Math.ceil(Math.random() * 4);
                    }
                }
            },
            {
                name: 'osmmapnik',
                httpsReady: true,
                maxZoom: 18,
                minZoom: 2,
                urlTpl: '//{serv}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: _l.get('map.mapAttiributes.osm'),
                tplFns: {
                    serv: function (data) {
                        var servers = ['a', 'b', 'c'];
                        return servers[Math.floor(Math.random() * 3)];
                    }
                }
            },

            {
                name: 'wikimapia',
                httpsReady: false,
                maxZoom: 18,
                minZoom: 2,
                urlTpl: '//i{serv}.wikimapia.org/?zoom={z}&x={x}&y={y}&lng=' + langCode,
                tplFns: {
                    serv: function (data) {
                        return (data.x % 4) + (data.y % 4) * 4;
                    }
                }
            },

            {
                name: 'doublegis',
                httpsReady: false,
                maxZoom: 16,
                minZoom: 2,
                urlTpl: '//tile{serv}.maps.2gis.ru/tiles?z={z}&x={x}&y={y}&lng=' + langCode,
                tplFns: {
                    serv: function (data) {
                        return Math.floor(Math.random() * 3 + 1);
                    }
                }
            },

            {
                name: 'ovi',
                httpsReady: false,
                maxZoom: 18,
                minZoom: 2,
                urlTpl: '//{serv}.maptile.lbs.ovi.com/maptiler/v2/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?lg=' + locale + '&token=&appId=',
                tplFns: {
                    serv: function () {
                        return Math.floor(Math.random() * 3 + 1);
                    }
                }
            }, {
                name: 'here',
                maxZoom: 18,
                minZoom: 2,
                urlTpl: '//{serv}.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?app_id=SqE1xcSngCd3m4a1zEGb&token=r0sR1DzqDkS6sDnh902FWQ&lg={lang}',
                tplFns: {
                    serv: function () {
                        return Math.floor(Math.random() * 3 + 1);
                    },
                    lang: function () {
                        return locale === 'ru' ? 'RUS' : 'ENG';
                    }
                }
            },
            {
                name: 'bing',
                httpsReady: true,
                maxZoom: 18,
                minZoom: 2,
                urlTpl: '//t{serv}.tiles.virtualearth.net/tiles/r{quadKey}.jpeg?g=3893',
                tplFns: {
                    serv: function () {
                        return Math.floor(Math.random() * 3 + 1);
                    },
                    quadKey: function (data) {

                        var x = data.x,
                            y = data.y, z = data.z,
                            quadKey = [];
                        for (var i = z ; i > 0 ; i--) {
                            var digit = '0';
                            var mask = 1 << (i - 1);
                            if ((x & mask) !== 0) {
                                digit++;
                            }
                            if ((y & mask) !== 0) {
                                digit++;
                                digit++;
                            }
                            quadKey.push(digit);
                        }
                        return quadKey.join('');
                    }

                },
                attribution: '&copy; <a href="http://bing.com/maps">Bing Maps</a>'
            },

            {
                name: 'mailru',
                httpsReady: true,
                maxZoom: 18,
                minZoom: 2,
                urlTpl: '//tile.digimap.ru/rumap/{z}/{x}/{y}.png'
            },

            {
                name: 'yandex',
                httpsReady: true,
                maxZoom: 17,
                minZoom: 2,
                urlTpl: '//vec0{serv}.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=' + locale,
                tplFns: {
                    serv: function (data) {
                        return (data.x + data.y) % 5;
                    }
                },
                projection: 'ProjectionMapType'

            },

            {
                name: 'yandexpublic',
                httpsReady: true,
                maxZoom: 18,
                minZoom: 2,
                urlTpl: ' //0{serv}.pvec.maps.yandex.net/?l=pmap&x={x}&y={y}&z={z}&lang=' + locale,
                projection: 'ProjectionMapType',
                tplFns: {
                    serv: function () {
                        return Math.ceil(Math.random() * 4);
                    }
                }
            },

            {
                name: 'traffic_yandex',
                httpsReady: true,
                maxZoom: 17,
                minZoom: 7,
                urlTpl: '//jgo.maps.yandex.net/tiles?l=trf&lang=' + locale + '&x={x}&y={y}&z={z}&tm={tstmp}',
                tplFns: {
                    tstmp: function (data) {
                        var source = Ext.getStore('sMaps'),
                            tstmp1 = source ? source.getYandexTimestamp() : new Date(document.lastModified).getTime() / 1000,
                            tstmp2 = new Date().getTime() / 1000,
                            tsp_delta = Math.abs(tstmp1 - tstmp2);

                        return Math.round((tstmp2 - tsp_delta) / 240) * 240 - 240;
                    }
                },
                projection: 'ProjectionMapType'
            },

            {
                name: 'cdcom',
                httpsReady: false,
                maxZoom: 17,
                minZoom: 2,
                urlTpl: '//h0{serv}.tiles.tmcrussia.com/lv{z}/{coords}.png',
                tplFns: {
                    coords: function (data) {

                        function getSeparate(string, num) {
                            var tmp = ((new Array(num + 1)).join("0").substr(0, num - String(string).length) + String(string)),
                                res = "", i;

                            for (i = 0 ; i < num ; i += 3) {
                                res += "/" + tmp.substr(i, 3);
                            }

                            return res;
                        }

                        var limit = Math.pow(2, data.z),
                            x = ((data.x % limit) + limit) % limit,
                            y = limit - ((data.y % limit) + limit) % limit;

                        return '/00' + getSeparate(x, 9) + getSeparate(y, 9);
                    },
                    serv: function () {
                        return Math.floor(Math.random() * (4 - 1) + 1);
                    }
                },

                projection: 'OffsetProjectionMapType'
            },

            {
                name: 'traffic_cdcom',
                httpsReady: false,
                maxZoom: 16,
                minZoom: 9,
                urlTpl: '//h0{serv}.tiles.tmcrussia.com/traffic/lv{z}/{coords}.png',
                tplFns: {
                    coords: function (data) {

                        function getSeparate(string, num) {
                            var tmp = ((new Array(num + 1)).join("0").substr(0, num - String(string).length) + String(string)),
                                res = "", i;

                            for (i = 0 ; i < num ; i += 3) {
                                res += "/" + tmp.substr(i, 3);
                            }

                            return res;
                        }

                        var limit = Math.pow(2, data.z),
                            x = ((data.x % limit) + limit) % limit,
                            y = limit - ((data.y % limit) + limit) % limit;

                        return '/00' + getSeparate(x, 9) + getSeparate(y, 9);
                    },
                    serv: function () {
                        return Math.floor(Math.random() * (4 - 1) + 1);
                    }
                },
                projection: 'OffsetProjectionMapType'
            },
            {
                name: 'satellite',
                httpsReady: true,
                projection: 'GoogleMapType'
            },

            {
                name: 'hybrid',
                httpsReady: true,
                projection: 'GoogleMapType'
            },

            {
                name: 'terrain',
                httpsReady: true,
                maxZoom: 15,
                minZoom: 2,
                projection: 'GoogleMapType'
            }
        ];
        return this.callParent(arguments);
    },

    getMapCode: function (name) {
        var mapCode = null;

        this.each(function (mapRecord) {
            var mapName = mapRecord.get('name');

            if (mapName.toLowerCase() === name) {
                mapCode = mapName;
                return false;
            }
        });

        return mapCode;
    },

    getMapName: function (code) {
        var mapName = null;

        this.each(function (mapRecord) {
            var mapCode = mapRecord.get('name');

            if (mapCode === code) {
                mapName = mapCode.toLowerCase();
                return false;
            }
        });

        return mapName;
    },

    availableLoad: function (allowedMaps) {
        var result = [];

        Ext.each(allowedMaps, function (mapCodeName) {
            var mapCode = this.getMapCode(mapCodeName);

            if (mapCode) {
                result.push(mapCode);
            }
        }, this);

        this.allowedMaps = result;

        this.fireEvent('allowedload', this, this.getAvailableMaps());
    },

    getAvailableMaps: function () {
        if (location.protocol === 'http:') {
            return this.allowedMaps;
        }

        var allowed = [];

        this.each(function (mapRecord) {
            var mapCode = mapRecord.get('name');
            if (Ext.Array.contains(this.allowedMaps, mapCode) && mapRecord.get('httpsReady')) {
                allowed.push(mapCode);
            }
        }, this);

        return allowed;
    },

    getTrafficMaps: function () {
        return ['traffic_cdcom'];
    },

    getMapNameAt: function (index) {
        try {
            return this.getAt(index).get('name');
        } catch (e) {
            return null;
        }
    },

    getDefaultMap: function () {
        return 0;
    }
});