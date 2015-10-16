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
