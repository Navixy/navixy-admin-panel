Ext.define('NavixyPanel.utils.mapProvider.parts.leaflet.Layers', {

    /**
     *
     * @param map
     * @param position
     * @returns {*}
     */
    layerPointToContainerPoint: function (map, position) {
        return map.layerPointToContainerPoint(Ext.Map.getLatLng(position));
    },

    layerPointToLatLng: function (map, point) {
        return map.layerPointToLatLng(Ext.Map.getPoint(point.x, point.y));
    },

    latLngToLayerPoint: function (map, position) {
        return map.latLngToLayerPoint(Ext.Map.getLatLng(position));
    },

    latLngToNewLayerPoint: function (map, position, zoom, center) {
        return map._latLngToNewLayerPoint(Ext.Map.getLatLng(position), zoom, center);
    },

    getTrafficOverlay: function (options) {
        return Ext.create('NavixyPanel.utils.mapTools.leaflet.TrafficOverlay', options);
    },

    getKMLLayer: function (map, data, show) {
        var result, geoJSON;
        if (L.Util.toGeoJSON) {
            geoJSON = L.Util.toGeoJSON.kml(data);
        }
		Ext.each(geoJSON.features, function (layerContainer) {
			if (layerContainer.properties.description) {
				layerContainer.properties.description = layerContainer.properties.description.replace('cellpadding=0', 'cellpadding=5');
			}
			if (layerContainer.geometry.type == 'GeometryCollection') {
				Ext.each(layerContainer.geometry.geometries, function (pointLayer) {
					if (pointLayer.type == 'Point') {
						pointLayer.mark = 'PointOfLayer';
					}
				});
			};
		});
        if (geoJSON) {
            result = L.geoJson(geoJSON, {
                style: Ext.Map.parseKmlStyle,
                pointToLayer: Ext.Map.getKmlMarker,
                onEachFeature: Ext.Map.applyKmlInfo
            });

            if (show && map) {
                Ext.Map.showOnMap(map, result);
            }
        }

        return result;
    },

    parseKmlStyle: function (feature) {
        var input = Ext.apply({}, feature.properties, feature.properties.style),
            styleMap = {
                'fill-opacity': "fillOpacity",
                'fill': "fillColor",
                'stroke': "color",
                'stroke-opacity': "opacity",
                'stroke-width': "weight"
            },
            kmlName, kmlStyle, GeoJsonName;

        Ext.iterate(input, function (node) {
            kmlStyle = input[node];
            GeoJsonName = styleMap[node];

            if (GeoJsonName) {
                input[GeoJsonName] = GeoJsonName.toLowerCase().indexOf('color') > -1 ? '#' + kmlStyle : kmlStyle;
                delete input[node];
            }
        });

        return input;
    },

    getKmlMarker: function (feature, LatLng, options) {
        var markerOptions = Ext.apply({
                markerType: 'kml',
                markerColor: false
            }, options),
            marker = null,
			radius = feature.geometry.mark == "PointOfLayer" ? 0 : 8;
		if (Ext.isFunction(Ext.Map.getSpecialMarker)) {
			marker = Ext.Map.getSpecialMarker(
                markerOptions.markerType,
                Ext.Map.getLocation(LatLng),
                markerOptions.markerColor
            );
			if (feature.geometry.mark == "PointOfLayer") {
				marker.setOpacity(0);
			}
		}
		else {
			marker = Ext.Map.circleMarker(LatLng, {
                radius: radius,
                fillColor: "#ff7800",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
		}

		return marker;
    },

    applyKmlInfo: function (feature, layer) {
        if (feature.properties && (feature.properties.name || feature.properties.description)) {
            Util.waitFor(function () {
                return layer._map;
            }, function () {
                Ext.Map.getKmlInfo(feature, layer);
            });

        }
    },

    getKmlInfo: function (feature, layer) {
        var map = layer._map,
            position = Ext.Map.getPosition(layer),
            properties = feature.properties,
            infoWindow = map && Ext.Map.getInfoWindow({
                    maxWidth: 400,
                    type: 'complex',
                    content: {
                        type: 'marker',
                        body: Ext.isString(properties.description) ? properties.description.replace(/(<a href[^<>]+)>/, '$1 target="_blank">') : null,
                        header: Ext.isString(properties.name) ? properties.name.replace(/(<a href[^<>]+)>/, '$1 target="_blank">') : null,
                        footer: position
                            ? Ext.util.Format.number(position.lat, '00.000000') + ', ' + Ext.util.Format.number(position.lng, '00.000000')
                            : null
                    },
                    clickShow: true,
                    clickClose: true,
                    map: map,
                    anchor: layer
                });
		layer.infoWindow = infoWindow;
		layer.infoWindow.on({
			open: function () {
				layer.parentModel.onInfoWindowEvent(layer, true);
			},
			close: function () {
				layer.parentModel.onInfoWindowEvent(layer, false);
			},
			scope: this
		});
    }
});
