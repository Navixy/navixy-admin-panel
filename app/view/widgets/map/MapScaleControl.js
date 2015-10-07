/**
 * @class NavixyPanel.view.widgets.map.MapScaleControl
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.widgets.map.MapScaleControl', {
    extend: 'Ext.Container',
    alias: 'widget.mapscale',
    layout: {
        type: 'hbox',
        align: 'bottom'
    },
    map: null,
    cls: 'scale',
    initialValue: 9,
    maxZoom: 18,
    getSliderConfig: function () {
        return {

            value: this.initialValue, //this.map.getZoom(),
            minValue: 0,
            incriment: 1,
            width: 70,
            maxValue: this.maxZoom
        };
    },

    setZoom: function (zoom) {
        if (this.map) {
            Ext.Map.setZoom(this.map, zoom);
            this.initialValue = zoom;
        }
    },

    zoomChange: function (cmp, maybeValue) {
        var zoom = this.initialValue;
        if (cmp.role) {
            zoom += cmp.role == 'in' ? 1 : -1;
        } else if (maybeValue) {
            zoom = maybeValue;
        }

        var type = Ext.Map.getMapType(this.map),
            check = Ext.Map.checkMapZoom(zoom, type);

        if (zoom <= this.maxZoom && check) {
            this.setZoom(zoom);
        }
    },

    initComponent: function () {
        var sliderConfig = this.getSliderConfig();

        this.items = [
            {
                xtype: 'clickable',
                role: 'out',
                cls: 'zoom_out',
                tip: _l.get('map.zoom_out'),
                scope: this,
                handler: this.zoomChange
            },

            Ext.apply({
                xtype: 'slider',
                cls: 'scale_slider',
                listeners: {
                    change: this.zoomChange,
                    scope: this
                }

            }, sliderConfig),
            {
                xtype: 'clickable',
                role: 'in',
                cls: 'zoom_in',
                tip: _l.get('map.zoom_in'),
                scope: this,
                handler: this.zoomChange
            }
        ];

        this.callParent(arguments);
    },

    getScaleSlider: function () {
        return this.down('slider');
    },

    setValue: function (zoom, silent) {
        this.initialValue = zoom;

        var slider = this.getScaleSlider();

        slider.suspendEvents();
        slider.setValue(zoom, false);
        slider.resumeEvents(false);

        if (!this.map.silent) {
            this.fireEvent('zoomchange', zoom);
        }
    },

    bindMap: function (map) {
        if (map) {
            this.map = map;
            this.initialValue = Ext.Map.getZoom(this.map);

            this.setValue(this.initialValue);

            var maxZoom = map.maxZoom;

            Ext.Map.on(map, {
                'zoomchange': function (map) {
                    this.setValue(Ext.Map.getZoom(this.map));
                },
                scope: this
            });
        }
    }
});