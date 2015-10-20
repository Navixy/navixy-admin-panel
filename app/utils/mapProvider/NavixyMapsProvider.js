/**
 * @class NavixyPanel.utils.mapProvider.NavixyMapsProvider
 * @extends NavixyPanel.utils.mapProvider.GoogeMapsProvider
 * Provides map using google maps api v 3
 */

Ext.define('NavixyPanel.utils.mapProvider.NavixyMapsProvider', {
    requires: [
        //'NavixyPanel.utils.mapTools.Direction',
        //'NavixyPanel.utils.mapTools.LBSMarker',
        //'NavixyPanel.utils.mapTools.infoWindow.TipInfoWindow',
        //'NavixyPanel.utils.mapTools.infoWindow.ContainerInfoWindow',
        //'NavixyPanel.utils.mapTools.infoWindow.ArrowInfoWindow',
        //'NavixyPanel.utils.mapTools.infoWindow.ComplexInfoWindow'
    ],

    callNavixyProvider: function (args) {
        var method = this.callNavixyProvider.caller,
            mixinName = this.providerMixinName,
            mixinInstance = (this.mixins && this.mixins[mixinName]) || false,
            superMethod = mixinInstance ? mixinInstance[method.$name] : false;

        return superMethod ? superMethod.apply(this, args || []) : null;
    },

    constructor: function (config) {
        Ext.apply(this, config);
    },

    //getDirectionArrow: function (config, map) {
    //
    //    return Ext.create('NavixyPanel.utils.mapTools.Direction', Ext.apply(config, {map: map}));
    //},
    //
    //getLBSLocationMarker: function (config, map) {
    //    return Ext.create('NavixyPanel.utils.mapTools.LBSMarker', Ext.apply(config, {map: map}));
    //
    //},

    //getInfoWindow: function (config) {
    //    config = Ext.apply({type: 'simple'}, config);
    //    var info_window = false;
    //
    //    switch (config.type) {
    //        case 'simple' :
    //            info_window = Ext.create('NavixyPanel.utils.mapTools.infoWindow.AbstractInfoWindow', config);
    //            break;
    //        case 'complex' :
    //            info_window = Ext.create('NavixyPanel.utils.mapTools.infoWindow.ComplexInfoWindow', config);
    //            break;
    //        case 'tip' :
    //            info_window = Ext.create('NavixyPanel.utils.mapTools.infoWindow.TipInfoWindow', config);
    //            break;
    //        case 'container' :
    //            info_window = Ext.create('NavixyPanel.utils.mapTools.infoWindow.ContainerInfoWindow', config);
    //            break;
    //        case 'arrow_container' :
    //            info_window = Ext.create('NavixyPanel.utils.mapTools.infoWindow.ArrowInfoWindow', config);
    //            break;
    //    }
    //
    //    if (info_window) {
    //        info_window.on({
    //            open: this.registerInfoWindow,
    //            beforeclose: this.unRegisterInfoWindow,
    //            scope: this
    //        });
    //    }
    //
    //    return info_window;
    //},

    initMap: function (map) {
        //this.initOverlayView(map);

        //this.initTilesView(map);

        //this.initFloatView(map);
//
//        this.initInfoWindowsStore(map);

        return map;
    },

    //drawPoly: function (points, map) {
    //    var poly = Ext.Map.getPolyline({
    //        points: points,
    //        map: map,
    //        strokeWeight: 2,
    //        strokeColor: 'darkblue'
    //    });
    //
    //    Ext.Map.fitBounds(map, points);
    //
    //    return poly;
    //},

    getMapImagesPath: function (dir) {
        var path = [Ext.Loader.getPath('NavixyPanel'), '../images', dir];

        return path.join('/');
    },

    //getArrowsPath: function () {
    //    return this.getMapImagesPath('arrows');
    //},

    //getMarkersPath: function (file) {
    //    return this.getMapImagesPath('markers');
    //},

    //getArrowNullCoordinats: function (size) {
    //    return [
    //        [
    //            size / 2,
    //            size / 10
    //        ].join(','),
    //        [
    //            size - size / 4,
    //            size - size / 30
    //        ].join(','),
    //        [
    //            size - size / 2,
    //            size - size / 6
    //        ].join(','),
    //        [
    //            size / 4,
    //            size - size / 30
    //        ].join(',')
    //    ];
    //},

    //getArrowIcon: function (color, heading, size, opacity) {
    //    var arrow = document.createElement('div'),
    //        svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    //        shape = document.createElementNS("http://www.w3.org/2000/svg", "polygon"),
    //        rotateCenter = size / 2;
    //
    //    arrow.appendChild(svg);
    //    svg.appendChild(shape);
    //
    //    svg.setAttribute("version", "1.2");
    //    svg.setAttribute("width", size + "px");
    //    svg.setAttribute("height", size + "px");
    //
    //    shape.setAttribute("fill", color);
    //    shape.setAttribute("points", this.getArrowNullCoordinats(size).join(" "));
    //    shape.setAttribute("stroke", "white");
    //    shape.setAttribute("stroke-width", size / 20 + "px");
    //    shape.setAttribute("transform", "rotate(" + heading + ", " + rotateCenter + ", " + rotateCenter + ")");
		//
		//if (opacity) {
		//	shape.setAttribute("fill-opacity", opacity.fill);
		//	shape.setAttribute("opacity", opacity.stroke);
		//}
		//
    //    Ext.apply(arrow.style, {
    //        position: 'absolute',
    //        width: size + 'px',
    //        height: size + 'px'
    //    });
    //
    //    return arrow;
    //},

    //updateArrowIcon: function (node, color, heading, size) {
    //    var shape = node.childNodes[0].childNodes[0],
    //        rotateCenter = size / 2;
    //
    //    shape.setAttribute("fill", color);
    //    shape.setAttribute("transform", "rotate(" + heading + ", " + rotateCenter + ", " + rotateCenter + ")");
    //},

    //getArrowStoppedIcon: function (color, heading, size) {
    //    return this.getSvgCircle(color, heading, size);
    //},

    //getSvgCircle: function (color, heading, size, strokeWidth) {
    //    var arrow = document.createElement('div'),
    //        svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    //        shape = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
    //
    //        circleCenter = size / 2,
    //        circleRadius = size / 4;
    //
    //    arrow.appendChild(svg);
    //    svg.appendChild(shape);
    //    svg.setAttribute("width", size + "px");
    //    svg.setAttribute("height", size + "px");
    //    svg.setAttribute("version", "1.2");
    //
    //    shape.setAttribute("fill", color);
    //    shape.setAttribute("stroke", "white");
    //    shape.setAttribute("cx", circleCenter);
    //    shape.setAttribute("cy", circleCenter);
    //    shape.setAttribute("r", circleRadius);
    //    shape.setAttribute("stroke-width", (strokeWidth || size / 20) + "px");
    //
    //    Ext.apply(arrow.style, {
    //        position: 'absolute',
    //        width: size + 'px',
    //        height: size + 'px'
    //    });
    //
    //    return arrow;
    //},

    //getSvgCircleWithText: function (color, heading, size, text, textSize) {
    //    var icon = this.getSvgCircle(color, heading, size),
    //        svg = icon.firstChild;
    //
    //    var textBox = document.createElementNS("http://www.w3.org/2000/svg", "text"),
    //        textNode = document.createTextNode(text),
    //
    //        textX = size / 4 * 1.5,
    //        textY = size / 4 * 2.6;
    //
    //    textSize = textSize || size / 2.5;
    //
    //    textBox.appendChild(textNode);
    //    svg.appendChild(textBox);
    //
    //    textBox.setAttribute("fill", "white");
    //    textBox.setAttribute("x", textX);
    //    textBox.setAttribute("y", textY);
    //    textBox.setAttribute("font-size", textSize);
    //    textBox.setAttribute("font-family", 'Arial, Helvetica, sans-serif;');
    //
    //    return icon;
    //},

    //getArrowParkedIcon: function (color, heading, size) {
    //    return this.getSvgCircleWithText(color, heading, size, 'P');
    //},

    //applyArrowClusterer: function (map, points, marker_options) {
    //
    //    return Ext.create('NavixyPanel.utils.mapTools.clusterer.ArrowClusterer', {
    //        map: map,
    //        points: points,
    //        markerOptions: marker_options
    //    });
    //},

    //getArrow: function (options) {
    //
    //    return Ext.create('NavixyPanel.utils.mapTools.Arrow', options);
    //},

    getMarkerTypesList: function () {
        return ['simple', 'label', 'start', 'finish', 'speedup', 'inzone', 'outzone', 'sos', 'kml'];
    },

    getMarkerColorsList: function () {
        return ["000000", "993300", "333300", "003300", "003366", "000080", "333399", "333333", "800000", "FF6600",
                "808000", "008000", "008080", "0000FF", "666699", "808080", "FF0000", "FF9900", "99CC00", "339966",
                "33CCCC", "3366FF", "800080", "969696", "FF00FF", "FFCC00", "FFFF00", "00FF00", "00FFFF", "00CCFF",
                "993366", "C0C0C0", "FF99CC", "FFCC99", "FFFF99", "CCFFCC", "CCFFFF", "99CCFF", "CC99FF", "FFFFFF"]
    },

    getMarkersUrls: function () {
        return {
            icons: {
                url: this.getMapImagesPath('markers/markers_inner.png'),
                offset: [0, 0]
            },
            colors: {
                url: this.getMapImagesPath('markers/markers.png'),
                offset: [1, 0]
            },
            cluster: {
                url: this.getMapImagesPath('markers/marker_cluster.png'),
                offset: [0, 0]
            },
            lbs: {
                url: this.getMapImagesPath('markers/marker_lbs.png'),
                offset: [0, 0]
            },
            shadow: {
                url: this.getMapImagesPath('markers/circles.png'),
                offset: [0, 0]
            },
            crosshair: {
                url: this.getMapImagesPath('markers/crosshair.png?1'),
                offset: [0, 0]
            }
        };
    },

    //getTypedMarkerImageConfig: function (type, markerSize) {
    //    var availableTypes = Ext.Map.getMarkerTypesList(),
    //        images = Ext.Map.getMarkersUrls().icons,
    //        types = {};
    //
    //    Ext.each(availableTypes, function (iconType, index) {
    //        types[iconType] = [markerSize * index, 0];
    //    });
    //
    //    return {
    //        offset: types[type] || types.simple,
    //        url: images.url,
    //        scaleSize: [markerSize * availableTypes.length, markerSize]
    //    };
    //
    //},

    getColoredMarkerImageConfig: function (type, color, markerWidth, markerHeight) {
        var availableTypes = Ext.Map.getMarkerTypesList(),
            availableColors = Ext.Map.getMarkerColorsList(),
            images = Ext.Map.getMarkersUrls().colors,

            bgWidth = markerWidth + images.offset[0],
            bgHeight = markerHeight + images.offset[1],

            types = {},

            colorIndex = color && Ext.isString(color)
                ? Ext.Array.indexOf(availableColors, color.substr(1))
                : -1;

        Ext.each(availableTypes, function (iconType, index) {
            types[iconType] = [colorIndex < 0 ? 0 : colorIndex * bgWidth + bgWidth, bgHeight * index];
        });

        return {
            offset: types[type] || types.simple,
            url: images.url,
            scaleSize: [bgWidth * availableColors.length, bgHeight * availableTypes.length]
        };

    },

    getSpecialMarker: function (type, position, map, color, noOptimization) {

        var markerWidth = 21,
            markerHeight = 40,
            centerX = Math.round(markerWidth / 2),
            centerY = markerHeight - 5,
            imageConfig = this.getColoredMarkerImageConfig(type, color, markerWidth, markerHeight),

            markerConfigArgs = [
                {
                    url: imageConfig.url,
                    position: position,
                    optimized: !noOptimization
                },
                {
                    size: [markerWidth, markerHeight],
                    offset: imageConfig.offset,
                    center: [centerX, centerY],
                    scaleSize: imageConfig.scaleSize
                }
            ];

        var marker = Ext.Map.getMarker.apply(this, markerConfigArgs);

        if (map) {
            Ext.Map.showOnMap(map, marker);
        }

        return marker;
    },

    //getClusterMarker: function (position, map, noOptimization) {
    //
    //    var markerWidth = 29,
    //        markerHeight = 40,
    //        centerX = Math.round(markerWidth / 2),
    //        centerY = markerHeight - 5,
    //        imageConfig = this.getMarkersUrls().cluster,
    //
    //        markerConfigArgs = [
    //            {
    //                url: imageConfig.url,
    //                position: position,
    //                optimized: !noOptimization
    //            },
    //            {
    //                size: [markerWidth, markerHeight],
    //                offset: imageConfig.offset,
    //                center: [centerX, centerY]
    //            }
    //        ];
    //
    //    var marker = Ext.Map.getMarker.apply(this, markerConfigArgs);
    //
    //    if (map) {
    //        Ext.Map.showOnMap(map, marker);
    //    }
    //
    //    return marker;
    //
    //},

    //getShadowMarkerImageConfig: function (color, markerWidth, markerHeight) {
    //    var availableColors = Ext.Map.getMarkerColorsList(),
    //        images = Ext.Map.getMarkersUrls().shadow,
    //
    //        bgWidth = markerWidth + images.offset[0],
    //        bgHeight = markerHeight + images.offset[1],
    //
    //        colorIndex = color && Ext.isString(color)
    //            ? Ext.Array.indexOf(availableColors, color.substr(1))
    //            : -1,
    //        colors = {};
    //
    //    Ext.each(availableColors, function (color, index) {
    //        colors['#' + color] = [colorIndex < 0 ? 0 : colorIndex * bgWidth + bgWidth, 0];
    //    });
    //
    //    return {
    //        offset: colors[color],
    //        url: images.url,
    //        scaleSize: [bgWidth * availableColors.length, bgHeight]
    //    };
    //
    //},

    //getShadowMarker: function (position, map, color, noOptimization) {
    //
    //    var markerWidth = 13,
    //        markerHeight = 14,
    //        centerX = Math.round(markerWidth / 2) - 2,
    //        centerY = Math.round(markerWidth / 2) - 1,
    //        imageConfig = this.getShadowMarkerImageConfig(color, markerWidth, markerHeight),
    //
    //        markerConfigArgs = [
    //            {
    //                url: imageConfig.url,
    //                position: position,
    //                optimized: !noOptimization
    //            },
    //            {
    //                size: [markerWidth, markerHeight],
    //                offset: imageConfig.offset,
    //                center: [centerX, centerY],
    //                scaleSize: imageConfig.scaleSize
    //            }
    //        ];
    //
    //    var marker = Ext.Map.getMarker.apply(this, markerConfigArgs);
    //
    //    if (map) {
    //        Ext.Map.showOnMap(map, marker);
    //    }
    //
    //    return marker;
    //},

    getLbsMarker: function (position, map, noOptimization) {

        var markerWidth = 22,
            markerHeight = 50,
            centerX = Math.round(markerWidth / 2),
            centerY = markerHeight - 5,
            imageConfig = this.getMarkersUrls().lbs,

            markerConfigArgs = [
                {
                    url: imageConfig.url,
                    position: position,
                    optimized: !noOptimization
                },
                {
                    size: [markerWidth, markerHeight],
                    offset: imageConfig.offset,
                    center: [centerX, centerY],
                    scaleSize: [markerWidth * 2, markerHeight]
                }
            ];

        var marker = Ext.Map.getMarker.apply(this, markerConfigArgs);

        if (map) {
            Ext.Map.showOnMap(map, marker);
        }

        return marker;
    },

    getCrosshairMarker: function (position, map, noOptimization) {

        var markerWidth = 50,
            markerHeight = 50,
            centerX = Math.round(markerWidth / 2),
            centerY = Math.round(markerHeight / 2),
            imageConfig = this.getMarkersUrls().crosshair,

            markerConfigArgs = [
                {
                    url: imageConfig.url,
                    position: position,
                    optimized: !noOptimization
                },
                {
                    size: [markerWidth, markerHeight],
                    offset: imageConfig.offset,
                    center: [centerX, centerY],
                    scaleSize: [markerWidth, markerHeight]
                }
            ];

        var marker = Ext.Map.getMarker.apply(this, markerConfigArgs);

        if (map) {
            Ext.Map.showOnMap(map, marker);
        }

        return marker;
    },

    //initInfoWindowsStore: function (map) {
    //    map.infoWindowsStore = new Ext.data.Store({
    //        storeId: 'InfoWindowsStore+' + Ext.id(),
    //        fields: ['item', 'item_id', 'type']
    //    });
    //},

    //registerInfoWindow: function (cmp) {
    //    var map = cmp.getMap() || {},
    //        cmp_id = cmp.getEl().id || false,
    //        cmp_type = cmp.type || false,
    //        store = map.infoWindowsStore || false;
    //
    //    if (store && cmp_id) {
    //        store.add([
    //            {
    //                item: cmp,
    //                item_id: cmp_id,
    //                type: cmp_type
    //            }
    //        ]);
    //    }
    //},

    //unRegisterInfoWindow: function (cmp) {
    //
    //    var map = cmp.getMap() || {},
    //        cmp_id = cmp.getEl().id || false,
    //        store = map.infoWindowsStore || false;
    //
    //    if (store && cmp_id) {
    //        store.remove(store.findRecord('item_id', cmp_id));
    //    }
    //},

    //closeAllInfoWindows: function (map) {
    //    var store = map.infoWindowsStore || false;
    //
    //    store.each(function (record) {
    //        record.get('item').close();
    //    }, this);
    //},

    isValidLocation: function (location) {
        var result = location && (location.lat || location.lng);
        if (!result) {
            Ext.log('Invalid location');
        }
        return result;
    }
});