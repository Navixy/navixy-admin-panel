L.GeoJSON.include({

    addData: function (geojson) {

        var features = L.Util.isArray(geojson) ? geojson : geojson.features,
            i, len, feature;

        // Fier 'add' event for empty geojson
        if (features && !features.length) {
            this.fireEmptyAdd();
        }

        if (features) {
            this.fLength = features.length;
            this.fCount = 0;

            for (i = 0, len = features.length ; i < len ; i++) {
                // Only add this if geometry or geometries are set and not null
                feature = features[i];
                if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
                    this.addData(features[i]);
                }
            }
            return this;
        }

        var options = this.options;

        if (options.filter && !options.filter(geojson)) {
            return;
        }

        var layer = L.GeoJSON.geometryToLayer(geojson, options.pointToLayer, options.coordsToLatLng);
        layer.feature = L.GeoJSON.asFeature(geojson);

        layer.defaultOptions = layer.options;
        this.resetStyle(layer);

        if (options.onEachFeature) {
            options.onEachFeature(geojson, layer);
        }

        if (!this.fLength) {
        }

        return this.addLayer(layer);
    },

    fireEmptyAdd: function () {
        var me = this;
        setTimeout(function () {
            me.fire('add');
        }, 10);
    },

    maybeFireAddEvent: function () {
        this.fCount++;

        if (this.fCount === this.fLength) {
            this.fire('add');
        }
    },

    addLayer: function (layer) {
        if (this.hasLayer(layer)) {
            return this;
        }

        layer.on(L.FeatureGroup.EVENTS, this._propagateEvent, this);
        layer.on('add', this.maybeFireAddEvent, this);

        L.LayerGroup.prototype.addLayer.call(this, layer);

        if (this._popupContent && layer.bindPopup) {
            layer.bindPopup(this._popupContent, this._popupOptions);
        }

        return this.fire('layeradd', {layer: layer});
    },

});

L.Marker.include({
    getIcon: function () {
        return this.options.icon;
    },

    getMap: function () {
        return this._map;
    },

    // Changed event firing position to after _map set to null
    onRemove: function (map) {
        if (this.dragging) {
            this.dragging.disable();
        }

        this._removeIcon();
        this._removeShadow();

        map.off({
            'viewreset': this.update,
            'zoomanim': this._animateZoom
        }, this);

        this._map = null;

        this.fire('remove');
    },

    onAdd: function (map) {
        this._map = map;

        map.on('viewreset', this.update, this);

        this._initIcon();
        this.update();

        if (map.options.zoomAnimation && map.options.markerZoomAnimation) {
            map.on('zoomanim', this._animateZoom, this);
        }

        this.fire('add');
    },

    _onMouseClick: function (e) {
        var wasDragged = this.dragging && this.dragging.moved();

        if (this.hasEventListeners(e.type) || wasDragged) {
            L.DomEvent.stopPropagation(e);
        }

        if (wasDragged) {
            return;
        }

        if ((!this.dragging || !this.dragging._enabled) && this._map.dragging && this._map.dragging.moved()) {
            return;
        }

        this.fire(e.type, {
            originalEvent: e,
            latlng: this._latlng
        });
        L.DomEvent.stopPropagation(e);
    }
});

L.Path.include({
    getPath: function () {
        return this.getLatLngs();
    },

    getMap: function () {
        return this._map;
    },

    redraw: function () {
        if (this._map) {
            this.projectLatlngs();
            this._updatePath();
            this.fire('redraw');
        }
        return this;
    }
});

L.Icon.include({

    _setIconStyles: function (img, name) {
        var options = this.options,
            size = L.point(options[name + 'Size']),
            anchor;

        if (name === 'shadow') {
            anchor = L.point(options.shadowAnchor || options.iconAnchor);
        } else {
            anchor = L.point(options.iconAnchor);
        }

        if (!anchor && size) {
            anchor = size.divideBy(2, true);
        }

        img.className = 'leaflet-marker-' + name + ' ' + options.className;

        if (options && options.style) {
            var key;
            for (key in options.style) {
                if (options.style.hasOwnProperty(key)) {
                    img.style[key] = options.style[key];
                }
            }
        }

        if (anchor) {
            img.style.marginLeft = (-anchor.x) + 'px';
            img.style.marginTop = (-anchor.y) + 'px';
        }

        if (size) {
            img.style.width = size.x + 'px';
            img.style.height = size.y + 'px';
        }
    },
});

L.Circle.include({
    getCenter: function () {
        return this.getLatLng();
    },

    setCenter: function (latLng) {
        return this.setLatLng(latLng);
    },

    getMap: function () {
        return this._map;
    }
});

//marker/ScaledIcon.js
L.ScaledIcon = L.Icon.extend({
    options: {
        className: 'leaflet-marker-icon-scaled'
    },

    _createIcon: function (name, oldIcon) {
        var src = this._getIconUrl(name);

        if (!src) {
            if (name === 'icon') {
                throw new Error('iconUrl not set in Icon options (see the docs).');
            }
            return null;
        }

        var div;

        if (!oldIcon) {
            div = this._createDiv(src);
        } else {
            div = this._createDiv(src, oldIcon);
        }

        this._setDivStyles(div, name);
        this._setImgStyles(div.firstChild, name);

        return div;
    },

    _createDiv: function (src, el) {

        if (!el) {
            el = document.createElement('div');
        } else {
            el.removeChild(el.firstChild);
        }

        this._createImg(src, el);

        return el;
    },

    _createImg: function (src, el) {

        var img = document.createElement('img');
        img.src = src;

        el.appendChild(img);

        return el;
    },

    _setImgStyles: function (img, name) {
        var options = this.options,
            size = L.point(options[name + 'Size']),
            origin = L.point(options[name + 'Origin']),
            scale = L.point(options[name + 'Scale']),
            anchor;

//        img.className = 'leaflet-marker-' + name + ' ' + options.className;

        if (origin) {
            img.style.marginLeft = (-origin.x) + 'px';
            img.style.marginTop = (-origin.y) + 'px';
        }

        if (scale) {
            img.style.width = scale.x + 'px';
            img.style.height = scale.y + 'px';
        }
    },

    _setDivStyles: function (img, name) {
        var options = this.options,
            size = L.point(options[name + 'Size']),
            anchor;

        if (name === 'shadow') {
            anchor = L.point(options.shadowAnchor || options.iconAnchor);
        } else {
            anchor = L.point(options.iconAnchor);
        }

        if (!anchor && size) {
            anchor = size.divideBy(2, true);
        }

        img.className = 'leaflet-marker-' + name + ' ' + options.className;

        if (anchor) {
            img.style.marginLeft = (-anchor.x) + 'px';
            img.style.marginTop = (-anchor.y) + 'px';
        }

        if (size) {
            img.style.width = size.x + 'px';
            img.style.height = size.y + 'px';
        }

        this._applyIconOptions(name);
    },

    _applyIconOptions: function (name) {
        var options = this.options;
        Ext.apply(this, {
            anchor: L.point(options[name + 'Anchor']),
            origin: L.point(options[name + 'Origin']),
            scaledSize: new L.Size(L.point(options[name + 'Scale'])),
            size: new L.Size(L.point(options[name + 'Size'])),
            url: this._getIconUrl(name)
        });
    }
});

// utils/Size.js
L.Size = L.Class.extend({
    initialize: function (width, height) {
        if (typeof width === 'object') {
            this._initFromPoint(width);
        } else {
            this._initFromArguments(width, height);
        }
    },

    _setValue: function (width, height) {
        this.width = width || 0;
        this.height = height || 0;
    },

    _initFromPoint: function (point) {
        this._setValue(point.x, point.y);
    },

    _initFromArguments: function (width, height) {
        this._setValue(width, height);
    }
});

// edits/SimpleShape.js

L.Edit = L.Edit || {};
L.Edit.SimpleShape = L.Handler.extend({
    options: {
        moveIcon: new L.DivIcon({
            iconSize: new L.Point(9, 9),
            className: 'leaflet-div-icon leaflet-editing-icon leaflet-edit-move'
        }),
        resizeIcon: new L.DivIcon({
            iconSize: new L.Point(9, 9),
            className: 'leaflet-div-icon leaflet-editing-icon leaflet-edit-resize'
        })
    },

    initialize: function (shape, options) {
        this._shape = shape;
        L.Util.setOptions(this, options);
    },

    addHooks: function () {
        if (this._shape._map) {
            this._map = this._shape._map;

            if (!this._markerGroup) {
                this._initMarkers();
            }
            this._map.addLayer(this._markerGroup);
        }
    },

    removeHooks: function () {
        if (this._shape._map) {
            this._unbindMarker(this._moveMarker);

            for (var i = 0, l = this._resizeMarkers.length ; i < l ; i++) {
                this._unbindMarker(this._resizeMarkers[i]);
            }
            this._resizeMarkers = null;

            this._map.removeLayer(this._markerGroup);
            delete this._markerGroup;
        }

        this._map = null;
    },

    updateMarkers: function () {
        this._markerGroup.clearLayers();
        this._initMarkers();
    },

    _initMarkers: function () {
        if (!this._markerGroup) {
            this._markerGroup = new L.LayerGroup();
        }

        // Create center marker
        this._createMoveMarker();

        // Create edge marker
        this._createResizeMarker();
    },

    _createMoveMarker: function () {
        // Children override
    },

    _createResizeMarker: function () {
        // Children override
    },

    _createMarker: function (latlng, icon) {
        var marker = new L.Marker(latlng, {
            draggable: true,
            icon: icon,
            zIndexOffset: 10
        });

        this._bindMarker(marker);

        this._markerGroup.addLayer(marker);

        return marker;
    },

    _bindMarker: function (marker) {
        marker
            .on('dragstart', this._onMarkerDragStart, this)
            .on('drag', this._onMarkerDrag, this)
            .on('dragend', this._onMarkerDragEnd, this);
    },

    _unbindMarker: function (marker) {
        marker
            .off('dragstart', this._onMarkerDragStart, this)
            .off('drag', this._onMarkerDrag, this)
            .off('dragend', this._onMarkerDragEnd, this);
    },

    _onMarkerDragStart: function (e) {
        var marker = e.target;
        marker.setOpacity(0);
    },

    _fireEdit: function () {
        this._shape.edited = true;
        this._shape.fire('edit');
    },

    _onMarkerDrag: function (e) {
        var marker = e.target,
            latlng = marker.getLatLng();

        if (marker === this._moveMarker) {
            this._move(latlng);
        } else {
            this._resize(latlng);
        }

        this._shape.redraw();
    },

    _onMarkerDragEnd: function (e) {
        var marker = e.target;
        marker.setOpacity(1);

        this._fireEdit();
    },

    _move: function () {
        // Children override
    },

    _resize: function () {
        // Children override
    }
});

//edits/Circle.js
L.Edit.Circle = L.Edit.SimpleShape.extend({
    _createMoveMarker: function () {
        var center = this._shape.getLatLng();

        this._moveMarker = this._createMarker(center, this.options.moveIcon);
    },

    _createResizeMarker: function () {
        var center = this._shape.getLatLng(),
            resizemarkerPoint = this._getResizeMarkerPoint(center);

        this._resizeMarkers = [];
        this._resizeMarkers.push(this._createMarker(resizemarkerPoint, this.options.resizeIcon));
    },

    _getResizeMarkerPoint: function (latlng) {
        // From L.shape.getBounds()
        var delta = this._shape._radius * Math.cos(Math.PI / 4),
            point = this._map.project(latlng);
        return this._map.unproject([point.x + delta, point.y - delta]);
    },

    _move: function (latlng) {
        var resizemarkerPoint = this._getResizeMarkerPoint(latlng);

        // Move the resize marker
        this._resizeMarkers[0].setLatLng(resizemarkerPoint);

        // Move the circle
        this._shape.setLatLng(latlng);
    },

    _resize: function (latlng) {
        var moveLatLng = this._moveMarker.getLatLng(),
            radius = moveLatLng.distanceTo(latlng);
        if (typeof  this._shape.minRadius !== 'undefined') {
            if (radius > this._shape.minRadius) {
                this._shape.setRadius(radius);
                this.minRadiusLatLng = latlng;
            } else {
                this._resizeMarkers[0].setLatLng(this.minRadiusLatLng);
            }
        } else {
            this._shape.setRadius(radius);

        }

    }
});

L.Circle.addInitHook(function () {
    if (L.Edit.Circle) {
        this.editing = new L.Edit.Circle(this);

        if (this.options.editable) {
            this.editing.enable();
        }
    }

    this.on('add', function () {
        if (this.editing && this.editing.enabled()) {
            this.editing.addHooks();
        }
    });

    this.on('remove', function () {
        if (this.editing && this.editing.enabled()) {
            this.editing.removeHooks();
        }
    });
});

// edits/Poly.js
L.Edit.Poly = L.Handler.extend({
    options: {
        icon: new L.DivIcon({
            iconSize: new L.Point(8, 8),
            className: 'leaflet-div-icon leaflet-editing-icon'
        })
    },

    initialize: function (poly, options) {
        this._poly = poly;
        L.setOptions(this, options);
        this.options.icon.options.style = {'borderColor': this._poly.options.color}
    },

    addHooks: function () {
        if (this._poly._map) {
            this._inEdited = false;
            if (!this._markerGroup) {
                this._initMarkers();
            }
            this._poly._map.addLayer(this._markerGroup);
            this._poly.on('redraw', function () {
                if (!this._inEdited) {
                    this.updateMarkers()
                }
            }, this);
        }
    },

    removeHooks: function () {
        if (this._poly._map) {
            this._poly._map.removeLayer(this._markerGroup);
            delete this._markerGroup;
            delete this._markers;
        }
    },

    updateMarkers: function () {
        if (this._markerGroup) {
            this._markerGroup.clearLayers();
        }
        this._initMarkers();
    },

    _initMarkers: function () {
        if (!this._markerGroup) {
            this._markerGroup = new L.LayerGroup();
        }
        this._markers = [];

        var latlngs = this._poly._latlngs,
            i, j, len, marker;

        // TODO refactor holes implementation in Polygon to support it here

        for (i = 0, len = latlngs.length ; i < len ; i++) {

            marker = this._createMarker(latlngs[i], i);
//            marker.on('click', this._onMarkerClick, this);
            this._markers.push(marker);
        }

        var markerLeft, markerRight;

        for (i = 0, j = len - 1 ; i < len ; j = i++) {
            if (i === 0 && !(L.Polygon && (this._poly instanceof L.Polygon))) {
                continue;
            }

            markerLeft = this._markers[j];
            markerRight = this._markers[i];

            this._createMiddleMarker(markerLeft, markerRight);
            this._updatePrevNext(markerLeft, markerRight);
        }
    },

    _createMarker: function (latlng, index) {
        var marker = new L.Marker(latlng, {
            draggable: true,
            icon: this.options.icon
        });

        marker._origLatLng = latlng;
        marker._index = index;

        marker.on('drag', this._onMarkerDrag, this);
        marker.on('dragend', this._fireEdit, this);
        marker.on('add', this._addMarkerEvents, this);

        this._markerGroup.addLayer(marker);

        return marker;
    },

    _removeMarker: function (marker) {
        var i = marker._index;

        this._markerGroup.removeLayer(marker);
        this._markers.splice(i, 1);
        this._poly.spliceLatLngs(i, 1);
        this._updateIndexes(i, -1);

        marker
            .off('drag', this._onMarkerDrag, this)
            .off('dragend', this._fireEdit, this)
            .off('add', this._addMarkerEvents, this);
    },

    _fireEdit: function () {
        this._inEdited = false;
        this._poly.edited = true;
        this._poly.fire('edit');
    },

    _onMarkerDrag: function (e) {
        this._inEdited = true;
        var marker = e.target;

        L.extend(marker._origLatLng, marker._latlng);

        if (marker._middleLeft) {
            marker._middleLeft.setLatLng(this._getMiddleLatLng(marker._prev, marker));
        }
        if (marker._middleRight) {
            marker._middleRight.setLatLng(this._getMiddleLatLng(marker, marker._next));
        }

        this._poly.redraw();
    },

    _addMarkerEvents: function (event) {
        var marker = event.target,
            icon = marker._icon,
            events = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'contextmenu'];

        for (var i = 0 ; i < events.length ; i++) {
            L.DomEvent.on(icon, events[i], function (e) {
                this._fireMouseEvent(e, marker);
            }, this);
        }
    },

    _fireMouseEvent: function (e, marker) {

        var originalEvent = e,
            type = originalEvent.type;

        this._poly.fireEvent(type, {
            originalEvent: e,
            latlng: marker._latlng,
            vertex: marker._index
        });

        if (e.type === 'contextmenu') {
            L.DomEvent.preventDefault(e);
        }
        if (e.type !== 'mousedown' && e.type !== 'mouseup') {
            L.DomEvent.stopPropagation(e);
        } else {
            L.DomEvent.preventDefault(e);
        }
    },

    _onMarkerClick: function (e) {

        var minPoints = L.Polygon && (this._poly instanceof L.Polygon) ? 4 : 3,
            marker = e.target;

        // If removing this point would create an invalid polyline/polygon don't remove
        if (this._poly._latlngs.length < minPoints) {
            return;
        }

        // remove the marker
        this._removeMarker(marker);

        // update prev/next links of adjacent markers
        this._updatePrevNext(marker._prev, marker._next);

        // remove ghost markers near the removed marker
        if (marker._middleLeft) {
            this._markerGroup.removeLayer(marker._middleLeft);
        }
        if (marker._middleRight) {
            this._markerGroup.removeLayer(marker._middleRight);
        }

        // create a ghost marker in place of the removed one
        if (marker._prev && marker._next) {
            this._createMiddleMarker(marker._prev, marker._next);

        } else if (!marker._prev) {
            marker._next._middleLeft = null;

        } else if (!marker._next) {
            marker._prev._middleRight = null;
        }

        this._fireEdit();
    },

    _updateIndexes: function (index, delta) {
        this._markerGroup.eachLayer(function (marker) {
            if (marker._index > index) {
                marker._index += delta;
            }
        });
    },

    _createMiddleMarker: function (marker1, marker2) {
        var latlng = this._getMiddleLatLng(marker1, marker2),
            marker = this._createMarker(latlng),
            onClick,
            onDragStart,
            onDragEnd;

        marker.setOpacity(0.6);

        marker1._middleRight = marker2._middleLeft = marker;

        onDragStart = function () {
            this._inEdited = true;
            var i = marker2._index;

            marker._index = i;

            marker
                .off('click', onClick, this)
                .on('click', this._onMarkerClick, this);

            latlng.lat = marker.getLatLng().lat;
            latlng.lng = marker.getLatLng().lng;
            this._poly.spliceLatLngs(i, 0, latlng);
            this._markers.splice(i, 0, marker);

            marker.setOpacity(1);

            this._updateIndexes(i, 1);
            marker2._index++;
            this._updatePrevNext(marker1, marker);
            this._updatePrevNext(marker, marker2);
        };

        onDragEnd = function () {
            this._inEdited = false;
            marker.off('dragstart', onDragStart, this);
            marker.off('dragend', onDragEnd, this);

            this._createMiddleMarker(marker1, marker);
            this._createMiddleMarker(marker, marker2);
        };

        onClick = function () {
            onDragStart.call(this);
            onDragEnd.call(this);
            this._fireEdit();
        };

        marker
            .on('click', onClick, this)
            .on('dragstart', onDragStart, this)
            .on('dragend', onDragEnd, this);

        this._markerGroup.addLayer(marker);
    },

    _updatePrevNext: function (marker1, marker2) {
        if (marker1) {
            marker1._next = marker2;
        }
        if (marker2) {
            marker2._prev = marker1;
        }
    },

    _getMiddleLatLng: function (marker1, marker2) {
        var map = this._poly._map,
            p1 = map.project(marker1.getLatLng()),
            p2 = map.project(marker2.getLatLng());

        return map.unproject(p1._add(p2)._divideBy(2));
    }
});

L.Polyline.addInitHook(function () {

    // Check to see if handler has already been initialized. This is to support versions of Leaflet that still have L.Handler.PolyEdit
    if (this.editing) {
        return;
    }

    if (L.Edit.Poly) {
        this.editing = new L.Edit.Poly(this);

        if (this.options.editable) {
            this.editing.enable();
        }
    }

    this.on('add', function () {
        if (this.editing && this.editing.enabled()) {
            this.editing.addHooks();
        }
    });

    this.on('remove', function () {
        if (this.editing && this.editing.enabled()) {
            this.editing.removeHooks();
        }
    });
});

// edits/PolyDrag.js
L.Handler.PolyDrag = L.Handler.extend({
    initialize: function (poly) {
        this._poly = poly;
    },

    addHooks: function () {
        if (this._poly._container) {
            this._bindHandler()
        } else {
            this._poly.on('add', this._bindHandler, this);
        }
    },

    removeHooks: function () {
        this._draggable.disable();
        this._poly.off('add', this._bindHandler, this);
    },

    moved: function () {
        return this._draggable && this._draggable._moved;
    },

    _bindHandler: function () {
        var container = this._poly._container;
        if (!this._draggable) {
            this._draggable = new L.DraggablePoly(container, container)
                .on('dragstart', this._onDragStart, this)
                .on('drag', this._onDrag, this)
                .on('dragend', this._onDragEnd, this);
        }
        this._draggable.enable();
    },

    _onDragStart: function (e) {
        if (this._poly.editing.enabled()) {
            this._wasEditing = true;
            this._poly.editing.disable();
        }
        this._poly
            .fire('movestart')
            .fire('dragstart');
    },

    _onDrag: function (e) {
        L.DomUtil.setPosition(this._poly._container, e.target._totalDiffVec);
        this._poly
            .fire('move')
            .fire('drag');
    },

    _onDragEnd: function (e) {
        var map = this._poly._map;
        var oldLatLngs = this._poly.getLatLngs();
        var newLatLngs = [];
        var i;
        for (i in oldLatLngs) {
            var oldContainerPoint = map.latLngToContainerPoint(oldLatLngs[i]);
            var newContainerPoint =
                oldContainerPoint.add(e.target._totalDiffVec);
            newLatLngs.push(map.containerPointToLatLng(newContainerPoint));
        }
        L.DomUtil.setPosition(this._poly._container, new L.Point(0, 0));
        this._poly.setLatLngs(newLatLngs);
        if (this._wasEditing) {
            this._poly.editing.enable();
            this._wasEditing = false;
        }
        this._poly
            .fire('moveend')
            .fire('dragend');
    }
});

L.Handler.CircleDrag = L.Handler.PolyDrag.extend({
    _onDragEnd: function (e) {
        var map = this._poly._map;
        var oldLatLng = this._poly.getLatLng();

        var oldContainerPoint = map.latLngToContainerPoint(oldLatLng);
        var newContainerPoint =
            oldContainerPoint.add(e.target._totalDiffVec);
        var newLatLng = map.containerPointToLatLng(newContainerPoint);

        L.DomUtil.setPosition(this._poly._container, new L.Point(0, 0));
        this._poly.setLatLng(newLatLng);
        if (this._wasEditing) {
            this._poly.editing.enable();
            this._wasEditing = false;
        }
        this._poly
            .fire('moveend')
            .fire('dragend');
    }
});

L.DraggablePoly = L.Draggable.extend({

    _onDown: function (e) {
        this._moved = false;

        if (e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) {
            return;
        }

        L.DomEvent.stopPropagation(e);

        if (L.Draggable._disabled) {
            return;
        }

        L.DomUtil.disableImageDrag();
        L.DomUtil.disableTextSelection();

        if (this._moving) {
            return;
        }

        var first = e.touches ? e.touches[0] : e;

        this._startPoint = new L.Point(first.clientX, first.clientY);

        L.DomEvent
            .on(document, L.Draggable.MOVE[e.type], this._onMove, this)
            .on(document, L.Draggable.END[e.type], this._onUp, this);
    },

    _onUp: function (e) {
        L.DomUtil.removeClass(document.body, 'leaflet-dragging');
        L.DomUtil.removeClass((e.target || e.srcElement), 'leaflet-drag-target');

        for (var i in L.Draggable.MOVE) {
            L.DomEvent
                .off(document, L.Draggable.MOVE[i], this._onMove)
                .off(document, L.Draggable.END[i], this._onUp);
        }

        L.DomUtil.enableImageDrag();
        L.DomUtil.enableTextSelection();

        if (this._moved && this._moving) {
            // ensure drag is not fired after dragend
            L.Util.cancelAnimFrame(this._animRequest);

            this.fire('dragend', {});
        }

        this._moving = false;
    },

    _onMove: function (e) {
        if (e.touches && e.touches.length > 1) {
            this._moved = true;
            return;
        }

        var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e);
        if (this._moved) {
            this._lastPoint = this._newPoint;
        } else {
            this._lastPoint = this._startPoint;
        }
        this._newPoint = new L.Point(first.clientX, first.clientY);
        this._diffVec = this._newPoint.subtract(this._lastPoint);
        this._totalDiffVec = new L.Point(e.clientX, e.clientY).subtract(
            this._startPoint
        );

        if (!this._diffVec.x && !this._diffVec.y) {
            return;
        }

        L.DomEvent.stop(e);

        if (!this._moved) {
            this.fire('dragstart');
            this._moved = true;
        }

        this._moving = true;

        L.Util.cancelAnimFrame(this._animRequest);
        this._animRequest = L.Util.requestAnimFrame(
            this._updatePosition, this, true, this._dragStartTarget
        );
    },

    _updatePosition: function () {
        this.fire('predrag');
        this.fire('drag');
    }
});

L.Polyline.addInitHook(function () {

    // Check to see if handler has already been initialized. This is to support versions of Leaflet that still have L.Handler.PolyEdit
    if (this.dragging) {
        return;
    }

    if (L.Handler.PolyDrag) {
        this.dragging = new L.Handler.PolyDrag(this);

        if (this.options.draggable) {
            this.dragging.enable();
        }
    }

    this.on('add', function () {
        if (this.dragging && this.dragging.enabled()) {
            this.dragging.addHooks();
        }
    });

    this.on('remove', function () {
        if (this.dragging && this.dragging.enabled()) {
            this.dragging.removeHooks();
        }
    });
});

L.Circle.addInitHook(function () {

    // Check to see if handler has already been initialized. This is to support versions of Leaflet that still have L.Handler.PolyEdit
    if (this.dragging) {
        return;
    }

    if (L.Handler.CircleDrag) {
        this.dragging = new L.Handler.CircleDrag(this);

        if (this.options.draggable) {
            this.dragging.enable();
        }
    }

    this.on('add', function () {
        if (this.dragging && this.dragging.enabled()) {
            this.dragging.addHooks();
        }
    });

    this.on('remove', function () {
        if (this.dragging && this.dragging.enabled()) {
            this.dragging.removeHooks();
        }
    });
});

L.GeometryUtil = {
    // Ported from the OpenLayers implementation. See https://github.com/openlayers/openlayers/blob/master/lib/OpenLayers/Geometry/LinearRing.js#L270
    geodesicArea: function (latLngs) {
        var pointsCount = latLngs.length,
            area = 0.0,
            d2r = L.LatLng.DEG_TO_RAD,
            p1, p2;

        if (pointsCount > 2) {
            for (var i = 0 ; i < pointsCount ; i++) {
                p1 = latLngs[i];
                p2 = latLngs[(i + 1) % pointsCount];
                area += ((p2.lng - p1.lng) * d2r) *
                    (2 + Math.sin(p1.lat * d2r) + Math.sin(p2.lat * d2r));
            }
            area = area * 6378137.0 * 6378137.0 / 2.0;
        }

        return Math.abs(area);
    },

    readableArea: function (area, isMetric) {
        var areaStr;

        if (isMetric) {
            if (area >= 10000) {
                areaStr = (area * 0.0001).toFixed(2) + ' ha';
            } else {
                areaStr = area.toFixed(2) + ' m&sup2;';
            }
        } else {
            area *= 0.836127; // Square yards in 1 meter

            if (area >= 3097600) { //3097600 square yards in 1 square mile
                areaStr = (area / 3097600).toFixed(2) + ' mi&sup2;';
            } else if (area >= 4840) {//48040 square yards in 1 acre
                areaStr = (area / 4840).toFixed(2) + ' acres';
            } else {
                areaStr = Math.ceil(area) + ' yd&sup2;';
            }
        }

        return areaStr;
    },

    readableDistance: function (distance, isMetric) {
        var distanceStr;

        if (isMetric) {
            // show metres when distance is < 1km, then show km
            if (distance > 1000) {
                distanceStr = (distance / 1000).toFixed(2) + ' km';
            } else {
                distanceStr = Math.ceil(distance) + ' m';
            }
        } else {
            distance *= 1.09361;

            if (distance > 1760) {
                distanceStr = (distance / 1760).toFixed(2) + ' miles';
            } else {
                distanceStr = Math.ceil(distance) + ' yd';
            }
        }

        return distanceStr;
    }
};

L.CRS.Yandex = L.extend({}, L.CRS, {
    code: 'EPSG:3395',

    atanh: function (x) {
        return 0.5 * Math.log((1 + x) / (1 - x));
    },

    latLngToPoint: function (latlng, zoom) { // (LatLng, Number) -> Point
        var PixelsAtZoom = 256 * Math.pow(2, zoom);
        var exct = 0.0818197;
        var z = Math.sin(latlng.lat / 180 * Math.PI);
        var c = (PixelsAtZoom / (2 * Math.PI));
        var x = Math.floor(PixelsAtZoom / 2 + latlng.lng * (PixelsAtZoom / 360));
        var y = Math.floor(PixelsAtZoom / 2 - c * (this.atanh(z) - exct * this.atanh(exct * z)));
        return new L.Point(x, y);
    },

    pointToLatLng: function (point, zoom) { // (Point, Number[, Boolean]) -> LatLng
        var PixelsAtZoom = 256 * Math.pow(2, zoom);
        var Lon = ((point.x) - PixelsAtZoom / 2) / (PixelsAtZoom / 360);
        var Lat = ((point.y) - PixelsAtZoom / 2) / -(PixelsAtZoom / (2 * Math.PI));
        Lat = Math.abs((2 * Math.atan(Math.exp(Lat)) - Math.PI / 2) * 180 / Math.PI);

        var Zu = Lat / (180 / Math.PI);
        var Zum1 = Zu + 1;
        var exct = 0.0818197;
        var yy = -Math.abs(((point.y) - PixelsAtZoom / 2));
        while (Math.abs(Zum1 - Zu) > 0.0000001) {
            Zum1 = Zu;
            Zu = Math.asin(1 - ((1 + Math.sin(Zum1)) * Math.pow(1 - exct * Math.sin(Zum1), exct))
                / (Math.exp((2 * yy) / -(PixelsAtZoom / (2 * Math.PI))) * Math.pow(1 + exct * Math.sin(Zum1), exct)));
        }
        if (point.y > PixelsAtZoom / 2) {
            Lat = -Zu * 180 / Math.PI
        }
        else {
            Lat = Zu * 180 / Math.PI
        }
        ;
        return new L.LatLng(Lat, Lon);
    }
});

L.CRS.CdCom = L.extend({}, L.CRS.Yandex, {
    code: 'EPSG:3395',

    offset: [255, 256, 258, 261, 267, 278, 300, 344, 432, 607, 957, 1657, 3057, 5857, 11457, 22657, 45057, 89857],

    latLngToPoint: function (latlng, zoom) { // (LatLng, Number) -> Point
        var point = L.CRS.Yandex.latLngToPoint.call(this, latlng, zoom);
        return new L.Point(point.x, point.y + this.offset[zoom])
    },

    pointToLatLng: function (point, zoom) { // (Point, Number[, Boolean]) -> LatLng
        point = new L.Point(point.x, point.y - this.offset[zoom]);
        return L.CRS.Yandex.pointToLatLng.call(this, point, zoom);
    }
});

L.TileLayer.WithCRS = L.TileLayer.extend({

    defaultWithCRSParams: {
        crs: 'Yandex'
    },

    initialize: function (url, options) { // (String, Object)

        L.TileLayer.prototype.initialize.call(this, url, options);

        this._crs = L.CRS[options.crs || this.defaultWithCRSParams.crs];
    },

    getTileUrl: function (tilePoint) { // (Point, Number) -> String

        var map = this._map,
            tileSize = this.options.tileSize,
            zoom = tilePoint.z,
            cPoint = tilePoint.multiplyBy(tileSize);

        tilePoint = this._crs.latLngToPoint(map.unproject(cPoint, zoom), zoom).divideBy(tileSize)._floor();

        tilePoint.z = zoom;

        return L.TileLayer.prototype.getTileUrl.call(this, tilePoint);
    },

    _getTilePos: function (tilePoint) {
        var map = this._map,
            tileSize = this.options.tileSize,
            zoom = this._map.getZoom(),
            origin = this._map.getPixelOrigin(),
            cPoint = tilePoint.multiplyBy(tileSize),
            cTilePoint = this._crs.latLngToPoint(map.unproject(cPoint, zoom), zoom).divideBy(tileSize)._floor(),
            cOrigin = this._crs.latLngToPoint(map.unproject(origin, zoom), zoom);

        return cTilePoint.multiplyBy(tileSize).subtract(cOrigin);
    },

    _addTilesFromCenterOut: function (bounds) {

        // There shifting for one tile fo compensate offsets
        bounds.min.y -= 1;
        bounds.max.y += 1;

        return L.TileLayer.prototype._addTilesFromCenterOut.call(this, bounds);
    },

    _reset: function () {
        if (this.options.clearTiles) {
            this._bgBuffer.innerHTML = '';
        }
        return L.TileLayer.prototype._reset.call(this);
    }
});

L.tileLayer.WithCRS = function (url, options) {
    return new L.TileLayer.WithCRS(url, options);
};

L.Util.toGeoJSON = (function () {
    'use strict';

    var removeSpace = (/\s*/g),
        trimSpace = (/^\s*|\s*$/g),
        splitSpace = (/\s+/);
    // generate a short, numeric hash of a string
    function okhash(x) {
        if (!x || !x.length) {
            return 0;
        }
        for (var i = 0, h = 0 ; i < x.length ; i++) {
            h = ((h << 5) - h) + x.charCodeAt(i) | 0;
        }
        return h;
    }

    // all Y children of X
    function get(x, y) {
        return x.getElementsByTagName(y);
    }

    function attr(x, y) {
        return x.getAttribute(y);
    }

    function attrf(x, y) {
        return parseFloat(attr(x, y));
    }

    // one Y child of X, if any, otherwise null
    function get1(x, y) {
        var n = get(x, y);
        return n.length ? n[0] : null;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Node.normalize
    function norm(el) {
        if (el.normalize) {
            el.normalize();
        }
        return el;
    }

    // cast array x into numbers
    function numarray(x) {
        for (var j = 0, o = [] ; j < x.length ; j++) {
            o[j] = parseFloat(x[j]);
        }
        return o;
    }

    function clean(x) {
        var o = {};
        for (var i in x) {
            if (x[i]) {
                o[i] = x[i];
            }
        }
        return o;
    }

    // get the content of a text node, if any
    function nodeVal(x) {
        if (x) {
            norm(x);
        }
        return x && x.firstChild && x.firstChild.nodeValue;
    }

    // get one coordinate from a coordinate array, if any
    function coord1(v) {
        return numarray(v.replace(removeSpace, '').split(','));
    }

    // get all coordinates from a coordinate array as [[],[]]
    function coord(v) {
        var coords = v.replace(trimSpace, '').split(splitSpace),
            o = [];
        for (var i = 0 ; i < coords.length ; i++) {
            o.push(coord1(coords[i]));
        }
        return o;
    }

    function coordPair(x) {
        var ll = [attrf(x, 'lon'), attrf(x, 'lat')],
            ele = get1(x, 'ele');
        if (ele) {
            ll.push(parseFloat(nodeVal(ele)));
        }
        return ll;
    }

    // create a new feature collection parent object
    function fc() {
        return {
            type: 'FeatureCollection',
            features: []
        };
    }

    function kmlColor(v) {
        var color, opacity;
        v = v || "";
        if (v.substr(0, 1) === "#") {
            v = v.substr(1);
        }
        if (v.length === 6 || v.length === 3) {
            color = v;
        }
        if (v.length === 8) {
            opacity = parseInt(v.substr(0, 2), 16) / 255;
            color = v.substr(2);
        }
        if (color) {
            color = color.substr(4, 2) + color.substr(2, 2) + color.substr(0, 2);
        }
        return [color, isNaN(opacity) ? undefined : opacity];
    }

    // Parse styles
    function ps(s, t) {
        var t = t || {},
            lineStyle = get1(s, 'LineStyle'),
            polyStyle = get1(s, 'PolyStyle');

        if (lineStyle) {
            var linestyles = kmlColor(nodeVal(get1(lineStyle, 'color'))),
                color = linestyles[0],
                opacity = linestyles[1],
                width = parseFloat(nodeVal(get1(lineStyle, 'width')));
            if (color) {
                t.stroke = color;
            }
            if (!isNaN(opacity)) {
                t['stroke-opacity'] = opacity;
            }
            if (!isNaN(width)) {
                t['stroke-width'] = width;
            }
        }
        if (polyStyle) {
            var polystyles = kmlColor(nodeVal(get1(polyStyle, 'color'))),
                pcolor = polystyles[0],
                popacity = polystyles[1],
                fill = nodeVal(get1(polyStyle, 'fill')),
                outline = nodeVal(get1(polyStyle, 'outline'));
            if (pcolor) {
                t.fill = pcolor;
            }
            if (!isNaN(popacity)) {
                t['fill-opacity'] = popacity;
            }
            if (fill) {
                t['fill-opacity'] = fill === "1" ? 1 : 0;
            }
            if (outline) {
                t['stroke-opacity'] = outline === "1" ? 1 : 0;
            }
        }

        return t;
    }

    function mo(o1, o2) {
        var o3 = {};
        for (var attrname in o1) {
            o3[attrname] = o1[attrname];
        }
        for (var attrname in o2) {
            o3[attrname] = o2[attrname];
        }
        return o3;
    }

    var serializer;
    if (typeof XMLSerializer !== 'undefined') {
        serializer = new XMLSerializer();
        // only require xmldom in a node environment
    } else if (typeof exports === 'object' && typeof process === 'object' && !process.browser) {
        serializer = new (require('xmldom').XMLSerializer)();
    }
    function xml2str(str) {
        return serializer.serializeToString(str);
    }

    var t = {
        kml: function (doc, o) {
            if (typeof doc === 'string') {
                doc = (new DOMParser()).parseFromString(doc, 'text/xml');
            }

            o = o || {};

            var gj = fc(),
            // styleindex keeps track of hashed styles in order to match features
                styleIndex = {},
                styleMap = {},
            // atomic geospatial types supported by KML - MultiGeometry is
            // handled separately
                geotypes = ['Polygon', 'LineString', 'Point', 'Track'],
            // all root placemarks in the file
                placemarks = get(doc, 'Placemark'),
                styles = get(doc, 'Style'),
                stylesMap = get(doc, 'StyleMap');

            for (var k = 0 ; k < styles.length ; k++) {
                styleIndex['#' + attr(styles[k], 'id')] = okhash(xml2str(styles[k])).toString(16);
                styleMap['#' + attr(styles[k], 'id')] = ps(styles[k])
            }

            for (var h = 0 ; h < stylesMap.length ; h++) {
                var key = get1(stylesMap[h], 'Pair');

                if (key && nodeVal(get1(key, 'styleUrl'))) {
                    styleIndex['#' + attr(stylesMap[h], 'id')] = okhash(xml2str(styles[h])).toString(16);
                    styleMap['#' + attr(stylesMap[h], 'id')] = L.Util.extend({}, styleMap[nodeVal(get1(key, 'styleUrl'))]);
                }
            }
            for (var j = 0 ; j < placemarks.length ; j++) {
                gj.features = gj.features.concat(getPlacemark(placemarks[j]));
            }
            function gxCoord(v) {
                return numarray(v.split(' '));
            }

            function gxCoords(root) {
                var elems = get(root, 'coord', 'gx'), coords = [];
                for (var i = 0 ; i < elems.length ; i++) {
                    coords.push(gxCoord(nodeVal(elems[i])));
                }
                return coords;
            }

            function getGeometry(root) {
                var geomNode, geomNodes, i, j, k, geoms = [];
                if (get1(root, 'MultiGeometry')) {
                    return getGeometry(get1(root, 'MultiGeometry'));
                }
                if (get1(root, 'MultiTrack')) {
                    return getGeometry(get1(root, 'MultiTrack'));
                }
                for (i = 0 ; i < geotypes.length ; i++) {
                    geomNodes = get(root, geotypes[i]);
                    if (geomNodes) {
                        for (j = 0 ; j < geomNodes.length ; j++) {
                            geomNode = geomNodes[j];
                            if (geotypes[i] == 'Point') {
                                geoms.push({
                                    type: 'Point',
                                    coordinates: coord1(nodeVal(get1(geomNode, 'coordinates')))
                                });
                            } else if (geotypes[i] == 'LineString') {
                                geoms.push({
                                    type: 'LineString',
                                    coordinates: coord(nodeVal(get1(geomNode, 'coordinates')))
                                });
                            } else if (geotypes[i] == 'Polygon') {
                                var rings = get(geomNode, 'LinearRing'),
                                    coords = [];
                                for (k = 0 ; k < rings.length ; k++) {
                                    coords.push(coord(nodeVal(get1(rings[k], 'coordinates'))));
                                }
                                geoms.push({
                                    type: 'Polygon',
                                    coordinates: coords
                                });
                            } else if (geotypes[i] == 'Track') {
                                geoms.push({
                                    type: 'LineString',
                                    coordinates: gxCoords(geomNode)
                                });
                            }
                        }
                    }
                }
                return geoms;
            }

            function getPlacemark(root) {
                var geoms = getGeometry(root), i, properties = {},
                    name = nodeVal(get1(root, 'name')),
                    styleUrl = nodeVal(get1(root, 'styleUrl')),
                    description = nodeVal(get1(root, 'description')),
                    timeSpan = get1(root, 'TimeSpan'),
                    extendedData = get1(root, 'ExtendedData'),
                    lineStyle = get1(root, 'LineStyle'),
                    polyStyle = get1(root, 'PolyStyle');

                if (!geoms.length) {
                    return [];
                }
                if (name) {
                    properties.name = name;
                }
                if (styleUrl && styleIndex[styleUrl]) {
                    properties.styleUrl = styleUrl;
                    properties.styleHash = styleIndex[styleUrl];
                    if (styleMap[styleUrl]) {
                        properties = mo(properties, styleMap[styleUrl]);
                    }
                }
                if (description) {
                    properties.description = description;
                }
                if (timeSpan) {
                    var begin = nodeVal(get1(timeSpan, 'begin'));
                    var end = nodeVal(get1(timeSpan, 'end'));
                    properties.timespan = {
                        begin: begin,
                        end: end
                    };
                }
                ps(root, properties);
                if (extendedData) {
                    var datas = get(extendedData, 'Data'),
                        simpleDatas = get(extendedData, 'SimpleData');

                    for (i = 0 ; i < datas.length ; i++) {
                        properties[datas[i].getAttribute('name')] = nodeVal(get1(datas[i], 'value'));
                    }
                    for (i = 0 ; i < simpleDatas.length ; i++) {
                        properties[simpleDatas[i].getAttribute('name')] = nodeVal(simpleDatas[i]);
                    }
                }
                return [{
                    type: 'Feature',
                    geometry: (geoms.length === 1) ? geoms[0] : {
                        type: 'GeometryCollection',
                        geometries: geoms
                    },
                    properties: properties
                }];
            }

            return gj;
        },
        gpx: function (doc, o) {
            var i,
                tracks = get(doc, 'trk'),
                routes = get(doc, 'rte'),
                waypoints = get(doc, 'wpt'),
            // a feature collection
                gj = fc();
            for (i = 0 ; i < tracks.length ; i++) {
                gj.features.push(getTrack(tracks[i]));
            }
            for (i = 0 ; i < routes.length ; i++) {
                gj.features.push(getRoute(routes[i]));
            }
            for (i = 0 ; i < waypoints.length ; i++) {
                gj.features.push(getPoint(waypoints[i]));
            }
            function getPoints(node, pointname) {
                var pts = get(node, pointname), line = [];
                for (var i = 0 ; i < pts.length ; i++) {
                    line.push(coordPair(pts[i]));
                }
                return line;
            }

            function getTrack(node) {
                var segments = get(node, 'trkseg'), track = [];
                for (var i = 0 ; i < segments.length ; i++) {
                    track.push(getPoints(segments[i], 'trkpt'));
                }
                return {
                    type: 'Feature',
                    properties: getProperties(node),
                    geometry: {
                        type: track.length === 1 ? 'LineString' : 'MultiLineString',
                        coordinates: track.length === 1 ? track[0] : track
                    }
                };
            }

            function getRoute(node) {
                return {
                    type: 'Feature',
                    properties: getProperties(node),
                    geometry: {
                        type: 'LineString',
                        coordinates: getPoints(node, 'rtept')
                    }
                };
            }

            function getPoint(node) {
                var prop = getProperties(node);
                prop.sym = nodeVal(get1(node, 'sym'));
                return {
                    type: 'Feature',
                    properties: prop,
                    geometry: {
                        type: 'Point',
                        coordinates: coordPair(node)
                    }
                };
            }

            function getProperties(node) {
                var meta = ['name', 'desc', 'author', 'copyright', 'link',
                            'time', 'keywords'],
                    prop = {},
                    k;
                for (k = 0 ; k < meta.length ; k++) {
                    prop[meta[k]] = nodeVal(get1(node, meta[k]));
                }
                return clean(prop);
            }

            return gj;
        }
    };
    return t;
})();

L.Size = L.Class.extend({
    initialize: function (width, height) {
        if (typeof width === 'object') {
            this._initFromPoint(width);
        } else {
            this._initFromArguments(width, height);
        }
    },

    _setValue: function (width, height) {
        this.width = width || 0;
        this.height = height || 0;
    },

    _initFromPoint: function (point) {
        this._setValue(point.x, point.y);
    },

    _initFromArguments: function (width, height) {
        this._setValue(width, height);
    }
});

L.Control.LcaledScale = L.Control.Scale.extend({
    options: {
        position: 'bottomleft',
        maxWidth: 100,
        metric: true,
        imperial: true,
        updateWhenIdle: false,
        locale: {
            m: ' m',
            km: ' km',
            mi: ' mi',
            ft: ' ft'
        }
    },

    _updateMetric: function (maxMeters) {
        var meters = this._getRoundNum(maxMeters);

        this._mScale.style.width = this._getScaleWidth(meters / maxMeters) + 'px';
        this._mScale.innerHTML = meters < 1000 ? meters + (this.options.locale.m || ' m') : (meters / 1000) + (this.options.locale.km || ' km');
    },

    _updateImperial: function (maxMeters) {
        var maxFeet = maxMeters * 3.2808399,
            scale = this._iScale,
            maxMiles, miles, feet;

        if (maxFeet > 5280) {
            maxMiles = maxFeet / 5280;
            miles = this._getRoundNum(maxMiles);

            scale.style.width = this._getScaleWidth(miles / maxMiles) + 'px';
            scale.innerHTML = miles + (this.options.locale.mi || ' mi');

        } else {
            feet = this._getRoundNum(maxFeet);

            scale.style.width = this._getScaleWidth(feet / maxFeet) + 'px';
            scale.innerHTML = feet + (this.options.locale.ft || ' ft');
        }
    }
});

L.control.lscale = function (options) {
    return new L.Control.LcaledScale(options);
};
