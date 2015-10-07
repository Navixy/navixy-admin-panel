/**
 * @class NavixyPanel.view.widgets.Map
 * @extends Ext.Component
 * Description
 */

Ext.define('NavixyPanel.view.widgets.map.Map', {
    extend: 'Ext.Component',
    alias: 'widget.map',
    cls: 'map',
    mapReady: false,
    lineScalePosition: 'topright',

    centerMarker: null,

    getCenter: function () {
        return Ext.Map.getCenter(this.getMap());
    },

    setCenter: function (location) {
        Ext.Map.setCenter(this.getMap(), location);
    },

    initComponent: function () {
        this.on({
            'resize': this.redrawMap,
            'mousedown': {
                fn: function () {
                    this.fireEvent('mousedown', this);
                },
                element: 'el'
            },
            scope: this
        });

        this.callParent();
    },

    updateSettings: function (settings) {
        var center = {lat: settings.map_location_lat, lng: settings.map_location_lng},
            zoom = settings.map_zoom,
            typesStore = Ext.getStore("leMaps"),
            type = typesStore.getMapCode(settings.map_type);

        if (!Ext.isEmpty(center)) {
            this.setCenter(center);
            this.updateMarker(center);
        }
        if (!Ext.isEmpty(zoom)) {
            this.setZoom(zoom);
        }
        if (!Ext.isEmpty(type)) {
            this.changeMap(type);
        }
        this.getMap().silent = false;
    },


    changeMap: function (mapTypeId) {
        try {

            Ext.waitFor(function () {
                return this.getMap();
            }, function () {
                var map = this.getMap();
                var zoomCheck = Ext.Map.checkMapZoom(Ext.Map.getZoom(map), mapTypeId, true);

                if (Ext.isNumber(zoomCheck)) {
                    Ext.Map.setZoom(map, zoomCheck);
                }
                Ext.Map.changeMapType(map, mapTypeId);

                this.activeMapType = mapTypeId;

                this.fireEvent('maptypechange');
            }, this);
        } catch (e) {
            Ext.logger(e.stack);
            return false;
        }
    },

    getMapType: function () {
        return this.activeMapType;
    },

    getMapTypeName: function () {
        var mapsStore = Ext.getStore("leMaps");

        return mapsStore.getMapName(this.activeMapType);
    },

    redrawMap: function () {
        Ext.Map.redrawMap(this.getMap());
    },

    resetMap: function (options) {
        this.setZoom(options.zoom);
        this.changeMap(options.mapTypeId, true);
        this.setCenter(options.center);
        this.redrawMap();
    },

    setMapReady: function () {
        this.map.mapReady = true;
        this.mapReady = true;
        this.fireEvent('mapready', this);
    },

    afterFirstLayout: function () {
        this.map = Ext.Map.initMap(this.getEl(), {
            zoom: this.zoom,
            lineScalePosition: this.lineScalePosition
        });

        this.map.silent = true;

        Ext.Map.on(this.map, {
            'bounds_changed': function () {
                this.fireEvent('bounds_changed', this);
            },

            scope: this
        });

        this.bindControls();
        this.initMarker();
        this.callParent(arguments);

        Ext.defer(this.setMapReady, 10, this);
    },

    bindControls: function () {
        try {
            var controlPanel = Ext.getFirst('mapcontrols');

            controlPanel.bindMap(this.map);
        } catch (e) {
            Ext.logger('controls bind problem', e.stack);
        }
    },

    setZoom: function (zoom) {
        Ext.Map.setZoom(this.getMap(), zoom);
    },

    getZoom: function (zoom) {
        return Ext.Map.getZoom(this.getMap());
    },

    getMap: function () {
        return this.map;
    },

    initMarker: function () {
        this.centerMarker = this.getMarker();
    },


    getMarker: function () {

        var marker = Ext.Map.getSpecialMarker(
            'simple',
            this.getCenter(),
            this.map,
            "808000"
        );

        Ext.Map.setOverlayOptions(marker, {
            draggable: true,
            raiseOnDrag: false
        });

        Ext.Map.on(marker, {
            "dragend": this.onMarkerDrag,
            scope: this
        });

        return marker;
    },

    getMarkerPosition: function () {
        return Ext.Map.getPosition(this.centerMarker);
    },

    onMarkerDrag: function () {
        var position = Ext.Map.getPosition(this.centerMarker);
        this.setCenter(position);
        this.fireEvent('centerchange', position);
    },

    updateMarker: function (location) {
        if (this.centerMarker) {
            Ext.Map.updateMarkerPosition(this.centerMarker, location);
        }
    }
});