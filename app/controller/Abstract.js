/**
 * @class NavixyPanel.controller.User
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Abstract', {
    extend: 'Ext.app.Controller',
    handleDelimiter: ' > ',

    init: function () {
        this.callParent(arguments);

        this.control({
            'mainviewport': {
                render: {
                    fn: this.registerModule,
                    single: true
                }
            }
        });
    },

    handle: function (handlers) {
        var controls = {};

        Ext.iterate(handlers, function (name, eventConfig) {
            var eventName = this.getHandlerEventConfig(name),
                caller, handleCaller, callConfig;

            if (eventName && name !== 'scope') {
                handleCaller = eventConfig.fn || eventConfig;
                callConfig = eventConfig;
                caller = Ext.bind(this.callHandle, handlers.scope || this, {
                    fn: handleCaller,
                    controllerParent: this,
                    eventName: eventName
                }, true);

                if (eventConfig.fn) {
                    callConfig.fn = caller;
                } else {
                    callConfig = caller;
                }

                controls[eventName] = callConfig;//Ext.bind(this.callHandle, this, eventConfig, true);
            }
        }, this);

        this.application.on(controls);
    },

    callHandle: function (args, origin, callerConfig) {

        var controller = callerConfig.controllerParent,
            eventName = callerConfig.eventName;

        if (args && !Ext.isArray(args)) {
            args = [args];
        }

        controller.callHandleFound(eventName);

        callerConfig.fn.apply(this, args);
    },

    callHandleFound: function (eventName) {
        this.application.fireEvent('handlefound', eventName);
    },

    getHandlerEventConfig: function (name) {
        var eventPath = name.replace(/\s+/g," ").split(this.handleDelimiter),
            path = {},
            config;

        if (eventPath[0]) {
            path.handler = eventPath[0];
        }

        if (eventPath[1]) {
            path.action = eventPath[1];
        }

        config = Ext.Navigator.genEventConfig(path);

        return config && config.name
            ? config.name
            : null;
    },

    getModuleName: function () {
        var clsName = this.id || this.$className,
            path = clsName.split('.');

        return path.pop();
    },

    registerModule: function () {
        this.application.fireEvent('registgerModule', {name: this.getModuleName()});
    },

    fireContent: function (config) {
        this.application.fireEvent('contentchange', config);
    },
});

