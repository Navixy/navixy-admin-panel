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
            img.style.marginTop  = (-origin.y) + 'px';
        }

        if (scale) {
            img.style.width  = scale.x + 'px';
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
            img.style.marginTop  = (-anchor.y) + 'px';
        }

        if (size) {
            img.style.width  = size.x + 'px';
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