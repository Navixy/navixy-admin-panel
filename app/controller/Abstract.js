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
                    fn: this.registerMenu,
                    single: true
                }
            }
        });
    },

    waitConnectionReady: function (fn, args, scope) {
        if (this.application.connectionReady) {
            fn.apply(scope || this, args);
        } else {
            this.application.on('connectionset', Ext.bind(fn, scope || this, args));
        }
    },

    registerMenu: function (config) {
        if (Ext.checkPermission(this.getModuleName()) && this.menuConfig && this.menuConfig.target) {

            this.menuConfig.eventName = this.getHandlerEventConfig(this.menuConfig.target);

            var menuText = this.menuConfig.text || this.getModuleName(),
                menuTarget = Ext.Navigator.makeToken(this.getHandlerEventPath(this.menuConfig.target));

            this.application.fireEvent('menuregister', {
                name: this.getModuleName(),
                text: menuText,
                target: menuTarget
            });
        }
    },

    handle: function () {
        this.waitConnectionReady(this.bindHandlers, arguments);
    },

    bindHandlers: function (handlers) {
        var controls = {};

        Ext.iterate(handlers, function (name, eventConfig) {
            var eventName = this.getHandlerEventConfig(name),
                eventAccess = Ext.checkPermission(this.getModuleName(), eventConfig.access || false),
                caller, handleCaller, callConfig;

            if (eventName && name !== 'scope') {

                callConfig = eventConfig;

                handleCaller = eventAccess
                    ? eventConfig.fn || eventConfig
                    : this.handleAccessDenied;

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

        controller[origin.ignoreMenu ? 'callUnHandleMenu' : 'callHandleMenu']();

        callerConfig.fn.apply(this, args);
    },

    callUnHandleMenu: function () {
        this.application.fireEvent('menudeselect', this.getModuleName());
    },

    callHandleMenu: function () {
        this.application.fireEvent('menuselect', this.getModuleName());
    },

    callHandleFound: function (eventName) {
        this.application.fireEvent('handlefound', eventName);
    },

    getHandlerEventConfig: function (name) {

        var path = this.getHandlerEventPath(name),
            config = Ext.Navigator.genEventConfig(path);

        return config && config.name
            ? config.name
            : null;
    },

    getHandlerEventPath: function (name) {
        var eventPath = name.replace(/\s+/g," ").split(this.handleDelimiter),
            path = {},
            config;

        if (eventPath[0]) {
            path.handler = eventPath[0];
        }

        if (eventPath[1]) {
            path.action = eventPath[1];
        }

        return path;
    },

    handleAccessDenied: function () {
        this.fireContent({
            xtype: 'accessdenied'
        });
    },

    getModuleName: function () {
        var clsName = this.id || this.$className,
            path = clsName.split('.');

        return Ext.String.uncapitalize(path.pop());
    },


    fireContent: function (config) {
        this.application.fireEvent('contentchange', config);
    },
});

