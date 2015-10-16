Ext.define('NavixyPanel.utils.mapTypes.leaflet.GoogleMapType', {
    extend: 'NavixyPanel.utils.mapTypes.leaflet.SimpleMapType',

    constructor: function (config) {
        Ext.apply(this, config);

        this.type = new Ext.Map.Google(this.name.toUpperCase());
        this.type.googleType = true;
    }
});