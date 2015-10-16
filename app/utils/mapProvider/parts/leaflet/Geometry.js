Ext.define('NavixyPanel.utils.mapProvider.parts.leaflet.Geometry', {

    /**
     * Returns distance from point to line
     * @public
     * @param lineStatLocation {Location} Line stat location
     * @param lineEndLocation {Location} Line end location
     * @param pointLocation {Location} Point location
     * @returns {number} Distance between line and location in metres
     */
    computeDistanceBetweenLine: function (lineStatLocation, lineEndLocation, pointLocation) {

        var ab = this.computeDistanceBetween(lineStatLocation, lineEndLocation),
            ac = this.computeDistanceBetween(lineStatLocation, pointLocation),
            bc = this.computeDistanceBetween(lineEndLocation, pointLocation),
            p = 0.5 * (ab + ac + bc),
            s = Math.sqrt(p * (p - ab) * (p - ac) * (p - bc));

        return s / (0.5 * ab);
    },

    /**
     * Returns distance between two Locations
     * @public
     * @param firstLocation {Location} First location
     * @param secondLocation {Location} Second location
     * @returns {number} Distance between locations in metres
     */
    computeDistanceBetween: function (firstLocation, secondLocation) {

        return Ext.Map.getLatLng(firstLocation).distanceTo(Ext.Map.getLatLng(secondLocation));
    },

    /**
     * Returns amount of pixels on given meters on given map
     * @public
     * @param meters {number} Meters value for convert
     * @param map {map} Map instance
     * @returns {number} Pixels amount
     */
    metersToPixels: function (meters, map) {

        var latConv = Ext.Map.computeDistanceBetween(Ext.Map.getLatLng({lat: 0, lng: 0}), Ext.Map.getLatLng({lat: 0.1, lng: 0})) * 10,
            lat = meters / latConv,
            pixels0 = map.latLngToContainerPoint(this.getLatLng({lat: 0, lng: 0})),
            pixels1 = map.latLngToContainerPoint(this.getLatLng({lat: lat, lng: 0}));

        return Math.abs(pixels0.y - pixels1.y);
    },

    computeBoundsArea: function (Path) {
        return 0;
    },

    computeGeodesicArea: function (Path) {
        return L.GeometryUtil.geodesicArea(Path);
    }
});
