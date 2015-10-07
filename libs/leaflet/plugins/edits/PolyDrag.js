L.Handler.PolyDrag = L.Handler.extend({
    initialize: function (poly) {
        this._poly = poly;
    },

    addHooks: function () {
        var container = this._poly._container;
        if (!this._draggable) {
            this._draggable = new L.DraggablePoly(container, container)
            .on('dragstart', this._onDragStart, this)
            .on('drag', this._onDrag, this)
            .on('dragend', this._onDragEnd, this);
        }
        this._draggable.enable();
    },

    removeHooks: function () {
        this._draggable.disable();
    },

    moved: function () {
        return this._draggable && this._draggable._moved;
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
        L.DomUtil.setPosition(this._poly._container, new L.Point(0,0));
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

        L.DomUtil.setPosition(this._poly._container, new L.Point(0,0));
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
    _onMove: function (e) {
        if (e.touches && e.touches.length > 1) { return; }

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


        if (!this._diffVec.x && !this._diffVec.y) { return; }

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
