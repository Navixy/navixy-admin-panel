/**
 * @class NavixyPanel.utils.mapProvider.LeafletMapsProvider
 * Description Provides map using google maps api v 3
 */

Ext.define('NavixyPanel.utils.mapProvider.LeafletMapsProvider', {

    // TODO: Cant load more then two dependence.
    dependencies: [
        'Lib.leaflet.Leaflet',
        'Lib.leaflet.plugins.tile.Google',
        'Lib.leaflet.plugins.Includes',
        'Lib.leaflet.plugins.utils.GeometryUtil',
        'Lib.leaflet.plugins.utils.SpatialQuery'
    ],

    requires: [
        'NavixyPanel.utils.mapTypes.leaflet.SimpleMapType',
        'NavixyPanel.utils.mapTypes.leaflet.GoogleMapType',
        'NavixyPanel.utils.mapTypes.leaflet.ProjectionMapType',
        'NavixyPanel.utils.mapTypes.leaflet.OffsetProjectionMapType'
    ],

    providerMixinName: 'NavixyProvider',
    mixins: {
        NavixyProvider: 'NavixyPanel.utils.mapProvider.NavixyMapsProvider',
        Map: 'NavixyPanel.utils.mapProvider.parts.leaflet.Map',
        Events: 'NavixyPanel.utils.mapProvider.parts.leaflet.Events',
        Overlays: 'NavixyPanel.utils.mapProvider.parts.leaflet.Overlays',
        Layers: 'NavixyPanel.utils.mapProvider.parts.leaflet.Layers',
        Base: 'NavixyPanel.utils.mapProvider.parts.leaflet.Base',
        Geometry: 'NavixyPanel.utils.mapProvider.parts.leaflet.Geometry'
    },

    //initOverlayView: function (map) {
    //    map.overlay = Ext.create('NavixyPanel.utils.mapTools.leaflet.CustomOverlay', {
    //        map: map
    //    });
    //},

    //initTilesView: function (map) {
    //    map.tilesOverlay = Ext.create('NavixyPanel.utils.mapTools.leaflet.TilesOverlay', {
    //        map: map
    //    });
    //},

    //initTrafficView: function (map) {
    //    map.overlay = Ext.create('NavixyPanel.utils.mapTools.leaflet.TrafficOverlay', {
    //        map: map
    //    });
    //},

    //initFloatView: function (map) {
    //    map.floatOverlay = Ext.create('NavixyPanel.utils.mapTools.leaflet.FloatOverlay', {
    //        map: map
    //    });
    //},

    constructor: function (config) {
        this.callNavixyProvider([config]);

        config = config || {};
        Ext.apply(this, config, L);
    },

    /**
     * Map initial methods
     */

    /**
     * Initialization instance of map
     * @public
     * @param mapContainer {DOM} DOM container of map
     * @param options {Object} Initial map options
     * @returns {map}
     */
    initMap: function (mapContainer, options) {

        //try {
            this.initStore();

            var me = this,
                validOptions = me.validateMapOptions(options).options,

                mapOptions = Ext.applyIf({
                    center: Ext.Map.getLatLng(validOptions.center),
                    zoom: validOptions.zoom
                }, me.mapOptiton),

                map = new Ext.Map.map(mapContainer.dom, mapOptions);

            map.setView(mapOptions.center, mapOptions.zoom);

            if (localStorage.getItem('debug')) {
                /**
                 * DEBUG
                 */
                window.pam = map;
            }
            me.initMapTypes(map);
            me.changeMapType(map, validOptions.mapTypeId);

            Ext.Map.control.lscale({
                position: options.lineScalePosition || 'topright',
                imperial: true,
                locale: {
                    km: ' ' + _l.get('units_short.kilometer'),
                    m: ' ' + _l.get('units_short.meter'),
                    mi: ' ' + _l.get('units_short.mile'),
                    ft: ' ' + _l.get('units_short.feet')
                }
            }).addTo(map);

            return this.callNavixyProvider([map]);

        //} catch (e) {
        //    Ext.log('Problems with maps', e.stack);
        //}

        return null;
    }
});