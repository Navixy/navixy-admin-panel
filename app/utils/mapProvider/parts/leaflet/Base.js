Ext.define('NavixyPanel.utils.mapProvider.parts.leaflet.Base', {

    /**
     * Returns simple Point map type
     * @public
     * @param x {number} The X dimension
     * @param y {number} The Y dimension
     * @returns {Point}
     */
    getPoint: function (x, y) {

        return new Ext.Map.Point(x, y);
    },

    /**
     * Returns array of LatLngs from specified variables
     * @param collection
     * @param latLngConfig
     * @returns {Array} Collection of LatLngs
     */
    getPoints: function (collection, latLngConfig) {

        var result = [],
            latField = latLngConfig ? latLngConfig.lat : 'lat',
            lngField = latLngConfig ? latLngConfig.lng : 'lng';

        Ext.each(collection, function (dataItem) {
            result.push(Ext.Map.getLatLng({
                lat: dataItem[latField],
                lng: dataItem[lngField]
            }));
        });

        return result;

    },

    /**
     * Returns heading of two or more points in degrees
     * @public
     * @param locations {Array|Object} Collection of points
     * @returns {number}
     */
    getHeading: function (locations, float) {

        var angle = 0,
            nowPoint = Ext.Map.getLatLng(locations[0]);

        Ext.each(locations, function (location, index) {
            var latLng = Ext.Map.getLatLng(location);

            if (index > 0 && !nowPoint.equals(latLng)) {
                var result = Math.atan2(latLng.lat - nowPoint.lat, (latLng.lng - nowPoint.lng) / 2) / Math.PI * 180;
                angle = float ? result : parseInt(result, 10);
                if (angle < 0) {
                    angle = 360 + angle;
                }
                angle = (630 - angle) % 360;

                return false;
            }
        });

        return locations && locations.length ? angle : null;
    },

    /**
     * Returns point in geographical coordinates
     * @public
     * @param location {Location} Location specified by lat and lng values, or instance with geographical point
     * @returns {LatLng}
     */
    getLatLng: function (location) {

        return new Ext.Map.LatLng(location.lat, location.lng);
    },

    /**
     * Returns Location type of map gathered from instance
     * @public
     * @param LatLng {Object|{lat: number, lng: number}} Instance with geographical point
     * @param isLatLng {boolean} If true - LatLngs is instance of locations not LatLng. Google provider matching, redundant for leaflet
     * @returns {Location}
     */
    getLocation: function (LatLng, isLatLng) {

        var result = null;
        if (!LatLng || !LatLng.lat || !LatLng.lng) {
            result = LatLng;
        } else {
            result = {
                lat: LatLng.lat,
                lng: LatLng.lng
            };
        }

        return result;
    },

    /**
     * Returns instance represents a rectangle in geographical coordinates
     * @public
     * @param sw {LatLng} South-west point of rectangle
     * @param ne {LatLng} North-east  point of rectangle
     * @returns {LatLngBounds}
     */
    getLatLngBounds: function (sw, ne) {

        return new this.LatLngBounds(sw, ne);
    },

    /**
     * Returns normalized instance of LatLngBounds by locations
     * @public
     * @param locations {[Location]} Collection of locations which represents the rectangle
     * @returns {LatLngBounds}
     */
    getBounds: function (locations) {

        return this.getNormalBounds(this.getPoints(locations));
    },

    /**
     * Returns normalized instance of LatLngBounds by LatLngs
     * @public
     * @param LatLngs {[LatLng]} Collection of LatLngs which represents the rectangle
     * @param isLocations {boolean} If true - LatLngs is collection of locations not LatLngs. Google provider matching, redundant for leaflet
     * @returns {Location}
     */
    getNormalBounds: function (LatLngs, isLocations) {

        if (LatLngs instanceof L.LatLngBounds) {
            var tmp_LatLngs = [];
            LatLngs.forEach(function (p) {
                tmp_LatLngs.push(p);
            });
            LatLngs = tmp_LatLngs;
        }

        var maxLat = -Infinity,
            maxLng = -Infinity,
            minLat = Infinity,
            minLng = Infinity,
            i = 0,
            v = LatLngs.length;
        for (i ; i < v ; i++) {
            var now = LatLngs[i];
            maxLat = (now.lat > maxLat) ? now.lat : maxLat;
            maxLng = (now.lng > maxLng) ? now.lng : maxLng;
            minLat = (now.lat < minLat) ? now.lat : minLat;
            minLng = (now.lng < minLng) ? now.lng : minLng;
        }
        var ne = Ext.Map.getLatLng({
                lat: maxLat,
                lng: maxLng
            }),
            sw = Ext.Map.getLatLng({
                lat: minLat,
                lng: minLng
            });

        return Ext.Map.getLatLngBounds(sw, ne);
    },

    /**
     * Returns south-west and north-east points of LatLngBounds
     * @public
     * @param object {Object} Instance witch contains bounds value
     * @returns {{sw: LatLng, ne: LatLng}}
     */
    getBoundsSwNe: function (object) {

        var bounds = object.getBounds();

        return bounds
            ? {
                   sw: bounds.getSouthWest(),
                   ne: bounds.getNorthEast()
               }
            : false;
    },

    /**
     * Returns center of given LatLngBounds
     * @param LatLngBounds {LatLngBounds} Instance of LatLngBounds
     * @returns {Location}
     */
    getBoundsCenter: function (LatLngBounds) {

        return Ext.Map.checkLocation(LatLngBounds.getSouthWest()) && Ext.Map.checkLocation(LatLngBounds.getNorthEast())
            ? Ext.Map.getLocation(LatLngBounds.getCenter())
            : {lat: null, lng: null};
    },

    /**
     * Two locations points same position check
     * @param firstLocation {Location} First location
     * @param secondLocation {Location}  First location
     * @returns {boolean} Check result
     */
    isEquals: function (firstLocation, secondLocation) {
        try {
            return Ext.Map.getLatLng(firstLocation).equals(Ext.Map.getLatLng(secondLocation));
        } catch (e) {
            Ext.logger(e.stack);
            return null;
        }

    },

    /**
     * Check given parameter membership of location type
     * @public
     * @param location {*} Instance for check
     * @returns {boolean|Location} Returns false if given parameter is not Location, otherwise returns location
     */
    checkLocation: function (location) {
        return location && Ext.isNumber(location.lat) && Ext.isNumber(location.lng) && location;
    },

    /**
     * Returns new instance of panning animation.
     * @returns {Anim}
     */
    initAnim: function () {
        return new Ext.Map.PosAnimation();
    },

    /**
     * Returns document position of given ext dom element
     * @param el {Ext.dom.Element} Instance of element
     * @returns {Point} Position of element
     */
    getDivPosition: function (el) {
        var position = Ext.Map.DomUtil.getPosition(el.dom);

        return [position.x, position.y];
    }
});
