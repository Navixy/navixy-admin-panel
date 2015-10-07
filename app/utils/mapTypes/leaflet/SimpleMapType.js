Ext.define('NavixyPanel.utils.mapTypes.leaflet.SimpleMapType', {
    urlTpl: null,

    tileSize: 256,
    name: null,
    defaultMinZoom: 0,
    defaultMaxZoom: 19,

    attribution: '',
    noWrap: true,

    type: null,
    crs: null,
    tplFns: null,
    traffic: false,

    constructor: function (config) {
        Ext.apply(this, config);
        var tpl = this.getTypeTpl();

        if (Ext.isArray(tpl)) {
            this.type = [];
            Ext.each(tpl, function (tplItem) {
                this.type.push(Ext.Map.tileLayer(tplItem, this.getTypeOptions()));
            }, this);
        } else {
            this.type = Ext.Map.tileLayer(tpl, this.getTypeOptions());
        }
    },

    getType: function () {
        return this.type;
    },

    getName: function () {
        return this.name;
    },

    getTypeTpl: function () {
        return this.urlTpl;
    },

    resolveRetina: function () {
        var detectRetina = window.screen.height > 480;

        if (!localStorage.getItem('hd_maps_enabled')) {
            localStorage.setItem('hd_maps_enabled', +detectRetina);
        } else {
            detectRetina = +localStorage.getItem('hd_maps_enabled');
        }
        Ext.Map.retinaDetect = !!detectRetina;
        return !!detectRetina;
    },

    getTypeOptions: function () {
        var tileSize = this.tileSize,
            detectRetina = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())) && !this.crs ? this.resolveRetina() : false;

        return Ext.apply(this.tplFns || {}, {
            tileSize: this.tileSize,
            name: this.name,
            minZoom: Ext.isNumber(this.minZoom) ? this.minZoom : this.defaultMinZoom,
            maxZoom: Ext.isNumber(this.maxZoom) ? this.maxZoom : this.defaultMaxZoom,
            noWrap: this.noWrap,
            crs: this.crs,
            continuousWorld: true,
            detectRetina: detectRetina,
            reuseTiles: false,
            zIndex: this.traffic ? 1 : 0,
            clearTiles: this.traffic,
            attribution: this.attribution
        });
    },

    getOptions: function () {
        return {
            minZoom: Ext.isNumber(this.minZoom) ? this.minZoom : this.defaultMinZoom,
            maxZoom: Ext.isNumber(this.maxZoom) ? this.maxZoom : this.defaultMaxZoom
        };
    }
});