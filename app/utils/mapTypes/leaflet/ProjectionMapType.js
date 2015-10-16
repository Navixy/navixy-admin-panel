Ext.define('NavixyPanel.utils.mapTypes.leaflet.ProjectionMapType', {
    extend: 'NavixyPanel.utils.mapTypes.leaflet.SimpleMapType',

    crs: 'Yandex',

    constructor: function(config) {
        Ext.apply(this, config);

        this.type = Ext.Map.tileLayer.WithCRS(this.getTypeTpl(), Ext.apply(this.getTypeOptions()));
    }
});