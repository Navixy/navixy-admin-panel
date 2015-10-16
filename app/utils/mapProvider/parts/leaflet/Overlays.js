Ext.define('NavixyPanel.utils.mapProvider.parts.leaflet.Overlays', {

    getShapePoints: function (shape) {
        var me = this,
            path = this.getPath(shape),
            points = [];

        path.forEach(function (vertex) {
            points.push(me.getLocation(vertex));
        });

        return points;
    },

    getPosition: function (item, isLatLng) {

        if (typeof item.getLatLng === 'function') {
            var position = item.getLatLng();

            if (!isLatLng) {
                position = this.getLocation(position);
            }

            return position;
        }
        return null;
    },

    getLayerBound: function (item) {

        if (typeof item.getBounds === 'function') {
            return item.getBounds();
        }
        return null;
    },

    getLayerBoundsCenter: function (item) {

        var bounds = Ext.Map.getLayerBound(item);
        if (bounds) {
            return bounds.getCenter();
        }
        return null;
    },

    showOnMap: function (map, items) {
        if (!items) {
            return;
        }

        if (!Ext.isArray(items)) {
            items = [items];
        }

        Ext.each(items, function (item) {
            if (item) {
                map.addLayer(item);
            }
        });
    },

    remove: function (items, parentMap) {
        if (!Ext.isArray(items)) {
            items = [items];
        }
        Ext.each(items, function (item) {
            if (item) {
                var map = parentMap || Ext.Map.getMap(item) || false;

                if (map) {
                    map.removeLayer(item);
                }
            }
        });
    },

    // TODO : Apply this to google map provider and all {cmp}.getMap() calls
    getMap: function (layer) {

        return layer && typeof layer.getMap === "function" ? layer.getMap()
            : false;
    },

    isOnMap: function (items) {
        if (!Ext.isArray(items)) {
            items = [items];
        }

        var result = true;
        Ext.each(items, function (item) {
            if (typeof item.getMap === 'function' && !item.getMap()) {
                result = false;
                return false;
            }
        });
        return result;
    },

    setOverlayOptions: function (item, options) {

        if (options && typeof Ext.Map.Util.setOptions === 'function') {
            Ext.Map.Util.setOptions(item, options);
        }

        if (options.map) {
            Ext.Map.showOnMap(options.map, item);
        }

        if (options.position) {
            item.setLatLng(options.position);
        }

        if (Ext.isBoolean(options.draggable)) {
            if (item.dragging) {
                item.dragging[options.draggable ? 'enable' : 'disable']();
            } else {
                item.options.draggable = options.draggable;
            }
        }

        if (Ext.isBoolean(options.editable)) {
            Ext.Map.setEditablePolygon(item, item.editable);
        }

        if (options.path) {
            item.setLatLngs(options.path);
            item.redraw();
        }
    },

    setPolylinePath: function (item, latlngs) {
        if (latlngs) {
            item.setLatLngs(latlngs);
            item.redraw();
        }
    },

    /**
     * Marker
     */


    getDivMarker: function (config, divConfig) {
        var markerConfig = {
            title: config.title,
            riseOnHover: false
        };

        if (divConfig) {
            markerConfig.icon = new Ext.Map.DivIcon(divConfig);
        }

        var marker = new Ext.Map.Marker(Ext.Map.getLatLng(config.position), markerConfig);

        if (config.map) {
            Ext.Map.showOnMap(config.map, marker);
        }
        return marker;
    },

    getMarker: function (config, imageConfig) {
        var image = config.url,
            markerConfig = {
                title: config.title,
                riseOnHover: true
            };

        if (imageConfig) {
            markerConfig.icon = Ext.Map.getIcon(image, imageConfig);
        }

        var marker = new Ext.Map.Marker(Ext.Map.getLatLng(config.position), markerConfig);

        if (config.map) {
            Ext.Map.showOnMap(config.map, marker);
        }

        return marker;
    },

    getIcon: function (url, iconConfig) {
        var scaledSize = iconConfig.scaleSize;

        return new Ext.Map.ScaledIcon({
            iconUrl: url,
            iconSize: new Ext.Map.Point(iconConfig.size[0], iconConfig.size[1]),
            iconOrigin: new Ext.Map.Point(iconConfig.offset[0], iconConfig.offset[1]),
            iconAnchor: new Ext.Map.Point(iconConfig.center[0], iconConfig.center[1]),
            iconScale: scaledSize ? new Ext.Map.Point(scaledSize[0], scaledSize[1]) : undefined
        });
    },

    updateMarker: function (marker, options) {
        var allowToUpdate = {
            icon: 'updateMarkerIcon',
            position: 'updateMarkerPosition'
        };

        Ext.iterate(options, function (key, value) {
            if (allowToUpdate[key]) {
                try {
                    Ext.Map[allowToUpdate[key]](marker, value);
                } catch (e) {
                    Ext.log(e.stack);
                }

            }
        });

    },

    updateMarkerPosition: function (marker, position) {
        marker.setLatLng(Ext.Map.getLatLng(position));
    },

    updateMarkerIcon: function (marker, icon) {
        var markerIcon = Ext.Map.getIcon(icon.url, icon.config);

        marker.setIcon(markerIcon);
    },

    /**
     * Polyline
     */

    getPolyline: function (config) {
        var poly = new Ext.Map.Polyline(Ext.Map.getPoints(config.points), {
            stroke: true,
            color: config.color,
            weight: config.weight || 2,
            opacity: config.opacity || 1,
            fill: config.fill,
            fillColor: config.fillColor,
            fillOpacity: config.fillOpacity || 1
        });

        if (config.map) {
            Ext.Map.showOnMap(config.map, poly);
        }

        return poly;
    },

    setPolylineOptions: function (poly, options) {
        poly.setStyle({
            color: options.color || poly.options.color,
            weight: options.weight || poly.options.weight,
            opacity: options.opacity || poly.options.opacity
        });
    },

    getPath: function (shape) {
        return shape.getPath();
    },

    getLineBounds: function (polyline) {

        if (polyline) {
            var points = [],
                vertexes = Ext.Map.getPath(polyline),
                i = 0,
                len = vertexes.length;

            for (i ; i < len ; i++) {
                points.push(vertexes[i]);
            }

            return Ext.Map.getNormalBounds(points);
        }

        return null;
    },

    /**
     * Polygon
     */

    getPolygonConfig: function (config) {

        return {
            path: config.points ? Ext.Map.getPoints(config.points) : config.path || [],
            options: {
                draggable: config.draggable || false,
                editable: config.editable || false,
                enablePropagation: true,
                stroke: true,
                fill: true,

                fillColor: config.fillColor || config.color,
                fillOpacity: config.fillOpacity || 0.6,
                color: config.color,
                weight: config.weight || 1.5,
                opacity: config.opacity || 1
            }
        };
    },

    getPolygon: function (config) {
        var polyConfig = Ext.Map.getPolygonConfig(config);

        var polygon = new Ext.Map.Polygon(polyConfig.path, polyConfig.options);

        if (config.map) {
            Ext.Map.showOnMap(config.map, polygon);
        }

        return polygon;
    },

    getMyltiPolygon: function (config) {
        var polyConfig = Ext.Map.getPolygonConfig(config);

        var polygon = new Ext.Map.multiPolygon(polyConfig.path, polyConfig.options);

        if (config.map) {
            Ext.Map.showOnMap(config.map, polygon);
        }

        return polygon;
    },

    setEditablePolygon: function (polygon, editable) {
        try {
            polygon.editing[editable ? 'enable' : 'disable']();
        } catch (e) {
            Ext.log(e.stack);
        }
    },

    setDraggablePolygon: function (polygon, draggable) {
        try {
            polygon.dragging[draggable ? 'enable' : 'disable']();
        } catch (e) {
            Ext.log(e.stack);
        }

    },

    getDefaultPolygonPoints: function (map, vertexCount, sideSizeInPixels) {
        try {
            var centerP = map.latLngToContainerPoint(map.getCenter()),
                poitns = [],
                i = 0;

            for (i ; i < vertexCount ; i++) {
                var angle = (2 * Math.PI * i) / vertexCount;

                var x = centerP.x + sideSizeInPixels * Math.cos(0.93 + angle),
                    y = centerP.y + sideSizeInPixels * Math.sin(0.93 + angle),
                    latLng = map.layerPointToLatLng(Ext.Map.getPoint(x, y));

                poitns.push(Ext.Map.getLocation(latLng));
            }
            return poitns;
        } catch (e) {
            Ext.log(e.stack);
        }
    },

    /**
     * Circle
     */

    getCircle: function (config) {
        var polyConfig = this.getPolygonConfig(config);
        var circle = new Ext.Map.Circle(
            Ext.Map.getLatLng(config.center),
            config.radius,
            polyConfig.options
        );

        if (config.map) {
            Ext.Map.showOnMap(config.map, circle);
        }

        return circle;
    },

    getDefaultCircleRadius: function (map, radiusInPixels) {
        var centerP = map.latLngToContainerPoint(map.getCenter()),
            radius_point = map.containerPointToLatLng(Ext.Map.getPoint(
                centerP.x - radiusInPixels,
                centerP.y + radiusInPixels
            ));

        return Ext.Map.computeDistanceBetween(Ext.Map.getCenter(map), radius_point);
    },

    getPointsFromCircle: function (center, radius) {
        var lat = center.lat;
        var lng = center.lng;

        var d2r = Math.PI / 180;
        var r2d = 180 / Math.PI;
        var Clat = (radius / 6378100) * r2d;

        var Clng = Clat / Math.cos(lat * d2r);
        var points = [], Cy, Cx;

        for (var i = 0 ; i < 80 ; i++) {
            var theta = Math.PI * (i / 40);
            Cx = 1 * lng + (Clng * Math.cos(theta));
            Cy = 1 * lat + (Clat * Math.sin(theta));
            points.push([Cy, Cx]);
        }

        return points;
    }
});
