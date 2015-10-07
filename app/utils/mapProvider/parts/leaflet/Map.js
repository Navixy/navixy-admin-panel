Ext.define('NavixyPanel.utils.mapProvider.parts.leaflet.Map', {
    mapOptiton: {
        zoom: 4,

        zoomControl: false,
        noClear: false,
        maxZoom: 18,
        overviewMapControl: false,
        draggableCursor: 'default',
        trackResize: true
    },

    store: 'leMaps',
    mapTypesClassSrc: 'NavixyPanel.utils.mapTypes.leaflet',

    /**
     * Init store of map types options
     * @private
     */
    initStore: function () {
        if (typeof this.store === 'string') {
            this.store = Ext.getStore(this.store);
        }
    },

    /**
     * Initialization of map types
     * @private
     * @param map {map} Instance of map for types initialization
     */
    initMapTypes: function (map) {
        var me = this,
            type;

        this.initTypesStore(map);
        this.store.each(function (mapTypeRecord) {
            try {

                type = me.createMapType(map, Ext.apply({}, mapTypeRecord.getData()));

                map.typesStore.add({
                    mapTypeId: type.getName(),
                    type: type.getType(),
                    typeObj: type
                });
            } catch (e) {
                Ext.logger('Can`t init map type', e.stack, mapTypeRecord);
            }

        });
    },

    /**
     * Init store of of map types for given map
     * @private
     * @param map {map} Instance of map for store initialization
     */
    initTypesStore: function (map) {
        if (!map.typesStore) {
            map.typesStore = new Ext.data.Store({
                storeId: 'MapTypesStore-' + Ext.id(),
                fields: ['mapTypeId', 'type', 'typeObj']
            });
        }
    },

    /**
     * Initialization of single map type
     * @private
     * @param map {map} Instance of map for type initialization
     * @param mapConfig {Object} Map type options, record of types options store
     */
    createMapType: function (map, mapConfig) {
        var className = 'SimpleMapType';

        if (mapConfig.projection) {
            className = mapConfig.projection;
        }

        if (this.store.getTrafficMaps().indexOf(mapConfig.name) > -1) {
            mapConfig.traffic = true;
        }

        return Ext.create(this.mapTypesClassSrc + '.' + className, mapConfig);
    },

    /**
     * Get record of types options store by type Id
     * @private
     * @param map {map} Instance of map that contains the type
     * @param mapTypeId {String} Id of map type
     * @returns {Object} Map type record of map types store
     */
    getMapTypeByName: function (map, mapTypeId) {
        return map.typesStore.findRecord('mapTypeId', mapTypeId).get('type') || false;
    },

    /**
     * Check the availability of the map type by his Id
     * @private
     * @param map {map} Instance of map for check
     * @param mapTypeId {String} Id of map type for check
     * @returns {boolean} Result of check
     */
    isAllowedMapType: function (map, mapTypeId) {
        return map.typesStore.find('mapTypeId', mapTypeId) >= 0;
    },

    /**
     * Check the availability of the map traffic type by his Id
     * @private
     * @param map {map} Instance of map for check
     * @param mapTypeId {String} Id of map type for check
     * @returns {boolean} Result of check
     */
    isAllowedMapTrafficType: function (map, mapTypeId) {

        return this.store.getTrafficMaps().indexOf(mapTypeId) >= 0;
    },

    /**
     * Removes all applied types of given map
     * @private
     * @param map {map} Instance of map for clear
     * @param exclude {String} Id of ignored map type
     */
    clearMapTypeLayers: function (map, exclude) {
        map.typesStore.each(function (type) {
            var lLayer = type.get('type'),
                mapTypeId = type.get('mapTypeId');

            if (this.hasLayer(map, lLayer) && mapTypeId !== exclude && !this.isAllowedMapTrafficType(map, mapTypeId)) {
                this.removeTypeLayer(map, lLayer);
            }
        }, this);
    },

    /**
     * Removes all applied traffic types of given map
     * @private
     * @param map {map} Instance of map for clear
     * @param exclude {String} Id of ignored map type
     */
    hasLayer: function (map, lLayer) {
        var hasLayer = true;

        if (Ext.isArray(lLayer)) {
            Ext.each(lLayer, function (layer) {
                if (!map.hasLayer(layer)) {
                    hasLayer = false;
                    return false;
                }

            });
        } else {
            hasLayer = map.hasLayer(lLayer);
        }

        return hasLayer;

    },

    clearMapTrafficTypeLayers: function (map, exclude) {
        map.typesStore.each(function (type) {
            var lLayer = type.get('type'),
                mapTypeId = type.get('mapTypeId');

            if (this.hasLayer(map, lLayer) && mapTypeId !== exclude && this.isAllowedMapTrafficType(map, mapTypeId)) {
                this.removeTypeLayer(map, lLayer);
            }
        }, this);
    },

    /**
     * Show map type on map
     * @private
     * @param map {map} Instance of map for showing
     * @param lLayer {Object} Instance of generated map type for showing, record of map types store
     */
    addTypeLayer: function (map, lLayer) {
        if (Ext.isArray(lLayer)) {
            Ext.each(lLayer, function (layer) {
                map.addLayer(layer);

            });
        } else {
            map.addLayer(lLayer);
        }

    },

    /**
     * Hide map type on map
     * @private
     * @param map {map} Instance of map for hiding
     * @param lLayer {Object} Instance of generated map type for hiding, record of map types store
     */
    removeTypeLayer: function (map, lLayer) {
        if (Ext.isArray(lLayer)) {
            Ext.each(lLayer, function (layer) {
                map.removeLayer(layer);

            });
        } else {
            map.removeLayer(lLayer);
        }
    },

    /**
     * Applying options from types options store to new map type
     * @private
     * @param map {map} Instance of map for applying settings
     * @param mapTypeId {String} Map type if
     */
    applyTypeLayerOptions: function (map, mapTypeId) {
        var typeObj = map.typesStore.findRecord('mapTypeId', mapTypeId).get('typeObj'),
            options = Ext.apply({}, typeObj.getOptions()),
            zoomCheck = this.checkMapZoom(this.getZoom(map), mapTypeId, true);

        if (Ext.isNumber(zoomCheck)) {
            this.setZoom(map, zoomCheck);
        }

        Ext.Map.Util.setOptions(map, options);
    },

    /**
     * Fires map type changed event on leaflet map
     * @private
     * @param map {map} Map instance for firing event
     */
    fireMapTypeChanged: function (map) {
        map.fire('maptypeid_changed');
    },

    /**
     * Returns default max zoom level of map
     * @private
     * @returns {number|null}
     */
    getInitialMaxZoom: function () {
        return this.store.max('maxZoom') || null;
    },

    /**
     * Returns default max zoom level of map
     * @private
     * @returns {number|null}
     */
    getInitialMinZoom: function () {
        return this.store.max('minZoom') || null;
    },

    /**
     * PUBLIC
     * ============================================================================================
     */

    /**
     * Returns current map type of given map
     * @public
     * @param map {map} Instance of map for type definition
     * @returns {String} Id of current type of map
     */
    getMapType: function (map) {
        var result,
            trafficTypes = this.store.getTrafficMaps();

        map.typesStore.each(function (type) {
            if (map.hasLayer(type.get('type')) && trafficTypes.indexOf(type.get('mapTypeId')) < 0) {
                result = type.get('mapTypeId');
            }
        }, this);

        return result || this.getDefaultMapType();
    },

    /**
     * Returns default map type
     * @public
     * @returns {String} Id of default map type
     */
    getDefaultMapType: function () {
        return this.store.first().get('name');
    },

    /**
     * Changing map type for given map
     * @public
     * @param map {map} Instance of map for type changing
     * @param mapTypeId {String} If of map type for changing
     */
    changeMapType: function (map, mapTypeId) {
        if (this.isAllowedMapType(map, mapTypeId)) {
            this.applyTypeLayerOptions(map, mapTypeId);
            this.addTypeLayer(map, this.getMapTypeByName(map, mapTypeId));
            this.clearMapTypeLayers(map, mapTypeId);
            this.fireMapTypeChanged(map);
            map.currentMapType = mapTypeId;
        } else {
            Ext.logger('Map type', mapTypeId, 'is not defined(change)');
        }
    },

    /**
     * Shows traffic layer on map, only for leaflet
     * @public
     * @param map {map} Instance of map for type changing
     * @param mapTypeId {String} Id of map traffic type for changing
     */
    showTrafficMapType: function (map, mapTypeId) {
        this.clearMapTrafficTypeLayers(map, mapTypeId);
        if (this.isAllowedMapTrafficType(map, mapTypeId)) {
            this.applyTypeLayerOptions(map, mapTypeId);
            this.addTypeLayer(map, this.getMapTypeByName(map, mapTypeId));
            map.fire('traffic_showd');
        } else {
            Ext.logger('Map type', mapTypeId, 'is not defined(traffic)');
        }
    },

    /**
     * Remove traffic layer on map, only for leaflet
     * @public
     * @param map {map} Instance of map for type changing
     * @param mapTypeId {String} Id of map traffic type for changing
     */
    hideTrafficMapType: function (map, mapTypeId) {
        this.clearMapTrafficTypeLayers(map);
        map.fire('traffic_removed');
    },

    /**
     * Shows traffic layer on google map type
     * @param map {map} Instance of map for type changing
     */
    hideGoogleTraffic: function (map) {
        var mapType = this.getMapTypeByName(map, this.getMapType(map));
        if (!!mapType.googleType) {
            mapType.removeTraffic();
        }
    },

    /**
     * Removes traffic layer on google map type
     * @param map {map} Instance of map for type changing
     */
    showGoogleTraffic: function (map) {
        var mapType = this.getMapTypeByName(map, this.getMapType(map));

        if (!!mapType.googleType) {
            Util.waitFor(function () {
                return mapType._ready;
            }, function () {
                mapType.showTraffic();
            });
        }
    },

    /**
     * Map initial methods
     */

    /**
     * Returns initial map type option from types options store
     * @param mapTypeId {String} Id of map type
     * @param optName {String} Name of option which u want get
     * @returns {*} Map type initial option
     */
    getTypeOption: function (mapTypeId, optName) {
        var record = this.store.findRecord('name', mapTypeId);

        if (record) {
            return record.get(optName);
        }

        return record;
    },

    /**
     * Map validate methods
     */

    /**
     * Validate map options, and returns default map options if check is unsuccessful
     * @public
     * @param options {{Center: Location, Zoom: number, MapTypeId: String}} Collection of options for check
     * @returns {{options: Object, success: boolean}} Returns validation successes or not, if not returns default options for map
     */
    validateMapOptions: function (options) {
        var mapType = options.mapTypeId && this.store.findRecord('name', options.mapTypeId)
                ? options.mapTypeId
                : this.getDefaultMapType(),

            centerCheck = options.center && this.checkLocation(options.center),
            zoomCheck = this.checkMapZoom(options.zoom, mapType),
            success = !!(centerCheck && zoomCheck);

        return {
            options: {
                center: (success && centerCheck) || {
                    lat: 0,
                    lng: 0
                },
                mapTypeId: success
                    ? mapType
                    : this.getDefaultMapType(),
                zoom: success
                    ? options.zoom
                    : this.mapOptiton.zoom
            },
            success: success
        };
    },

    /**
     * Validate given zoom level for map type
     * @public
     * @param zoom {number} Zoom level for availability check
     * @param mapTypeId {String} Map type id for zoom level availability check
     * @param getZoom {boolean} If true method return default map type max zoom level
     * @returns {boolean|number} Result of validation? or default max zoom level for given map type
     */
    checkMapZoom: function (zoom, mapTypeId, getZoom) {

        var mapTypeOptions = this.store.findRecord('name', mapTypeId),
            typeMaxZoom = mapTypeOptions.get('maxZoom'),
            typeMinZoom = mapTypeOptions.get('minZoom'),
            result = false;

        if (Ext.isNumber(zoom)) {

            if (Ext.isNumber(typeMaxZoom) && Ext.isNumber(typeMinZoom)) {
                if (zoom <= typeMaxZoom && zoom >= typeMinZoom) {
                    result = true;
                } else if (zoom > typeMaxZoom && getZoom) {
                    result = typeMaxZoom;
                }
            } else {
                result = true;
            }
        }

        return result;
    },

    /**
     * Map state methods
     */

    /**
     * Returns the position displayed at the center of the given map
     * @public
     * @param map {map} Map instance
     * @param isLatLng {boolean} If true - result will be instance of LatLng type, otherwise Locations type
     * @returns {Location|LatLng}
     */
    getCenter: function (map, isLatLng) {
        var LatLng = map.getCenter();

        return isLatLng
            ? LatLng
            : {
            lat: LatLng.lat,
            lng: LatLng.lng
        };
    },

    /**
     * Returns the current zoom level of given map instance
     * @public
     * @param map {map} Map instance
     * @returns {number} Zoom level
     */
    getZoom: function (map) {
        try {
            return map.getZoom();

        } catch (e) {
            Ext.logger(e.stack);
            return null;
        }
    },

    /**
     * Returns the lat/lng bounds of the current viewport of given map instance.
     * @public
     * @param map {map} Map Instance
     * @returns {LatLngBounds}
     */
    getMapBounds: function (map) {
        return map.getBounds();
    },

    /**
     * Returns panes of given map on leaflet and overlay panes for goole provider. Often uses for check map fully loaded.
     * @public
     * @param map {map} Instance of map which contains panes
     * @returns {Array} Map panes Collections
     */
    getPanes: function (map) {
        return map.getPanes();
    },

    /**
     * Returns the container element of the given map
     * @public
     * @param map {map} Instance of map
     * @returns {HTMLElement} Map container
     */
    getMapDiv: function (map) {
        return map.getContainer();
    },

    /**
     * Return given map instance frozen state. Means an automatic return center of map to the position of the selected tracker
     * @public
     * @param map {map} Instance of map which contains panes
     * @returns {boolean} Map frozen state
     */
    isMapFrozen: function (map) {
        return map.frozen;
    },

    /**
     * Check map is loaded
     * @param map {map} Instance of map
     * @returns {boolean} True if map fully loaded
     */
    isMapReady: function (map) {
        return !!map.getPanes();
    },

    /**
     * Change map options
     * @param map {map} Instance of map
     * @param options {Object}
     */
    setMapOptions: function (map, options) {
        // Rewrite google maps option
        if (Ext.isBoolean(options.disableDoubleClickZoom)) {
            map.doubleClickZoom[!options.disableDoubleClickZoom ? 'enable' : 'disable']();
        }

        if (Ext.isBoolean(options.draggable)) {
            map.dragging[options.draggable ? 'enable' : 'disable']();
        }

        Ext.Map.Util.setOptions(map, options);
    },

    /**
     * Changes the center of the map to the given Location
     * @public
     * @param map {map} Instance of map for center change
     * @param location {Location} Instance of location
     */
    setCenter: function (map, location, force) {
        if (Ext.Map.isValidLocation(location) || force) {
            map.panTo(this.getLatLng(location), {
                animate: false
            });
        }
    },

    /**
     * Sets the zoom level of the given map instance
     * @public
     * @param map {map} Instance of map for zoom level change
     * @param zoomLevel {number} Zoom level
     */
    setZoom: function (map, zoomLevel) {

        if (Ext.isObject(map)) {
            map.setZoom(zoomLevel, {
                animate: false
            });
        }
    },

    /**
     * Trigger for map redraw overlays.
     * @public
     * @param map {map} Instance of map for redraw
     */
    redrawMap: function (map) {
        if (map) {
            map.invalidateSize();
        }
    },

    /**
     * Update given map instance frozen state. Means an automatic return center of map to the position of the selected tracker
     * @public
     * @param map {map} Instance of map which contains panes
     * @param frozen {boolean} State of map frozen
     */
    setMapFrozen: function (map, frozen) {
        map.frozen = frozen;
    },

    /**
     * Set map cursor to draggableCursor - Cross
     * public
     * @param map {map} Instance of map for changing cursor
     * @param state {boolean} State of cross cursor. true - cross, false - default hand
     */
    setCrosshairCursor: function (map, state) {

        if (map._container) {
            Ext.get(map._container)[state ? 'addCls' : 'removeCls']('leaflet-crosshair');
        }
    },

    /**
     * Changes the center of the map to the given Location with animation
     * @public
     * @param map {map} Map instance
     * @param location {Location} Instance of location
     * @param force {boolean} If true - ignores map frozen state.
     */
    panTo: function (map, location, force) {

        if (!this.isMapFrozen(map) || force || Ext.Map.isValidLocation(location)) {

            try {
                map.panTo(Ext.Map.getLatLng(location), {
                    animate: false
                });

            } catch (e) {

                Ext.logger('Can`t panTo point', e.stack);
            }
        }

    },

    /**
     * Sets the viewport to contain the given LatLngBounds collection.
     * @public
     * @param map {map} Map instance
     * @param boundsArray {[LatLngBounds]} Collection of LatLngBounds for viewport change
     * @param force {boolean} If true - ignores map frozen state.
     */
    fitArrayBounds: function (map, boundsArray, force, disableAnimation) {
        var i = 1,
            len = boundsArray.length,
            resultBounds = boundsArray[0];

        if (len) {
            for (i ; i < len ; i++) {
                try {
                    resultBounds = resultBounds.extend(boundsArray[i]);
                } catch (e) {
                    Ext.logger(e.stack);
                }
            }

            Ext.Map.fitByBounds(map, resultBounds, force, disableAnimation);
        }
    },

    /**
     * fitByBounds is an alias for Ext.Map.fitBounds
     * @public
     * @param map {map} Map instance
     * @param bounds {LatLngBounds} Collection of points
     * @param force {boolean} If true - ignores map frozen state.
     */
    fitByBounds: function (map, bounds, force, disableAnimation) {
        if ((!this.isMapFrozen(map) || force) && map.mapReady) {
            map.fitBounds(bounds, {
                paddingTopLeft: [30, 30],
                paddingBottomRight: [30, 30],
                animate: !disableAnimation,
            });
        }
    },

    /**
     * Sets the map viewport to contain the given LatLngBounds
     * @public
     * @param map {map} Map instance
     * @param points {LatLngBounds|[LatLng]|[Location]} Collection of points
     * @param force {boolean} If true - ignores map frozen state.
     */
    fitBounds: function (map, points, force, disableAnimation) {
        if (!points.length) {
            return;
        }

        if (!(points instanceof Ext.Map.LatLngBounds)) {
            points = this.getPoints(points);
        }

        var bounds = null;

        if (!(points instanceof L.LatLngBounds)) {
            bounds = this.getNormalBounds(points);
        } else {
            bounds = points;
        }

        if (bounds) {
            Ext.Map.fitByBounds(map, bounds, force, disableAnimation);
        }
    },

//
//    fitLineBounds: function (map, line) {
//        if (this.isMapFrozen(map)) {
//            map.fitBounds(Ext.Map.getLineBounds(line));
//        }
//    },
//

    /**
     * showPlace is an alias for Ext.Map.panTo
     * @public
     * @param map {map} Map instance
     * @param location {Location} Instance of location
     * @param zoom {number} Zoom
     */
    showPlace: function (map, location, zoom, force, disableAnimation) {
        if (map && Ext.Map.isValidLocation(location)) {
            map.panTo(Ext.Map.getLatLng(location), {animate: !disableAnimation});

            if (Ext.isNumber(zoom)) {
                map.setZoom(zoom, {animate: !disableAnimation});
            }
        }
    }
});