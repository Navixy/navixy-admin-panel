Ext.define('NavixyPanel.utils.mapProvider.parts.leaflet.Events', {

    /**
     * Events types converter for matching with Google provider
     * @private
     * @param fn {Function} Event callback function
     * @param result {Event} Event instance returned by event caller
     * @param scope {*} Scope for the callback function
     */
    translateEvent: function (fn, result, scope) {

        var EventsMap = {
            WithTarget: ['click',
                'dblclick',
                'mousedown',
                'mouseup',
                'mouseover',
                'mouseout',
                'mousemove',
                'contextmenu',
                'preclick',
                'dragstart',
                'predrag',
                'drag',
                'dragend',
                'zoomanim'],
            DRAG: ['dragstart',
                'predrag',
                'drag',
                'dragend']
        };


        if (EventsMap.WithTarget.indexOf(result.type) < 0 && result.target) {
            result = result.target;
        }

        if (EventsMap.DRAG.indexOf(result.type) > -1 && result.target && Ext.Map.getPosition(result.target)) {
            result = {
                latLng: Ext.Map.getPosition(result.target, true),
                target: result.target
            };
        }

        if (result.latlng) {
            result.latLng = result.latlng;
        }

        fn.call(scope, result);
    },

    /**
     * Bind event listener on target
     * @public
     * @param target {Object} Target instance
     * @param config {{name: fn|{fn: fn, scope: scope}}} Event config
     * @returns {Object} Event Listener object, uses for destroy listener
     */
    on: function (target, config) {
        var eventsMap = {
                'zoomchange'        : 'zoomend',
                'bounds_changed'    : 'moveend',
                'position_changed'  : 'move',
                'map_changed'       : 'remove',
                'idle'              : 'load',
                'rightclick'        : 'contextmenu'
            },
            eventsResult = {};

        Ext.iterate(config, function (prop, fn) {
            if (prop !== 'scope') {
                var eventName = eventsMap[prop] || prop,
                    transFn = function (event) {
                        Ext.Map.translateEvent(fn, event, this);
                    };

                target.addEventListener(
                    eventName,
                    transFn,
                    config.scope || this
                );

                eventsResult[eventName] = {
                    target : target,
                    fn: transFn,
                    scope: config.scope || this
                };
            }
        });

        return eventsResult;
    },

    /**
     * Triggers event firing by target
     * @public
     * @param target {Object} Target instance
     * @param eventName {String} Event name
     * @param args {*} Arguments for event callback
     */
    trigger: function (target, eventName, args) {

        target.fireEvent(eventName, args || []);
    },

    /**
     * Removes the given listener by instance, which should have been returned by {Ext.Map.on} method
     * @public
     * @param config {EventListener} Event listener instance returned by {Ext.Map.on} method
     */
    off: function (config) {

        Ext.iterate(config, function (name, entry) {
            entry.target.removeEventListener(
                name,
                entry.fn,
                entry.scope
            );
        });
    },

    /**
     * Prevents given event from propagation further
     * @public
     * @param event {Event} Event instance returned by event caller. Only for mouse events
     */
    stopMouseEventPropagation: function (event) {
        if (event.originalEvent && event.originalEvent.stopPropagation) {
            event.originalEvent.stopPropagation()
        }
    }
});
