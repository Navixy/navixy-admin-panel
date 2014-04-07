/**
 * @class NavixyPanel.controller.Main
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.controller.Main', {
    extend: 'Ext.app.Controller',
    errorDelay: 50,

    views: [
        'panelUser.authWindow'
    ],

    requires: [
        'Ext.util.Cookies',

        'NavixyPanel.api.ApiConnector',
        'NavixyPanel.api.NavixyApi',

        'NavixyPanel.utils.Navigator'
    ],

    refs: [
        {
            ref: 'authWindow',
            selector: 'authwindow'
        },
        {
            ref: 'authForm',
            selector: 'authwindow form'
        }
    ],

    store: ['Permissions'],
    model: ['Permissions'],

    init: function () {
        this.checkAuth();
        this.initOverrides();
        this.control({
            'authwindow form button[role=auth-submit]': {
                click: this.doAuth
            },
            'authwindow form[role=auth-form]': {
                submit: this.doAuth
            },
            'button[role=auth-logout]': {
                click: this.doLogout
            },
            'localecombo': {
                change: this.changeLocale
            }
        });
    },

    // Overrides
    initOverrides: function () {
        Ext.override(Ext, {

            /**
             * Get access to module, or permission of module
             * @param sectionId {string} - Module name/id
             * @param [right] {string} - module permission for check
             * @returns {boolean}
             */
            checkPermission: function (sectionId, right) {
                var delimiter = ',',
                    result = false;

                if (Ext.isString(right) && right.indexOf(delimiter) > -1) {

                    var rights = right.split(delimiter);

                    Ext.iterate(rights, function (cRight) {
                        result = Ext.checkPermission(sectionId, cRight) || result;
                    }, this);

                } else {

                    var store = Ext.getStore('Permissions'),
                        section = store && store.getById(sectionId);

                    result = Ext.isString(right)
                        ? section
                            ? !!section.get(right)
                            : false
                        : !!section;
                }

                return result;
            }
        });
    },

    // History
    registerHistory: function () {
        Ext.Navigator.on('change', this.handleHistory, this);
        this.application.on('handlefound', this.onHandlerFound, this);

        //TODO Controllers load check;
        Ext.defer(this.handleHistory, 100, this);
    },

    handleHistory: function () {
        var eventConfig = Ext.Navigator.getEventConfig();

        if (eventConfig) {
            this.checkHandlerLoad();
            this.application.fireEvent(eventConfig.name, eventConfig.params || null);
        }
    },

    // Navigation
    checkHandlerLoad: function () {
        this.notFoundHandlerErrorDelay = Ext.defer(this.onHandlerFoundError, this.errorDelay, this);
    },

    onHandlerFoundError: function () {

        Ext.MessageBox.alert(_l.error, _l.no_path_found);
        console.log('err');
        //TODO Show 404 or something
    },

    onHandlerFound: function (handle) {
        if (
            this.notFoundHandlerErrorDelay
            ) {
            clearTimeout(this.notFoundHandlerErrorDelay);
        }
    },


    // Authentication
    checkAuth: function () {
        this[Ext.API.hasAuthKey() ? 'loadPermissions': 'showAuth']();
    },

    showAuth: function () {

        Ext.widget('authwindow', {
            renderTo: Ext.getBody()
        });
    },

    doAuth: function () {
        var authWindow = this.getAuthWindow(),
            form = this.getAuthForm(),
            values = form.getValues();

        if (form && form.isValid()) {
            Ext.getBody().mask(_l.loading);
            authWindow.hide();
            Ext.API.authUser(this.onUserAuth, this.onUserAuthFailure, values, this);
        }
    },

    onUserAuth: function (result) {
        if (result && result.hash) {
            Ext.getBody().unmask();
            Ext.destroy(this.getAuthWindow());

            this.setAuthKey(result.hash);

            this.loadPermissions(result.permissions);
        } else {
            this.onUserAuthFailure();
        }
    },

    onUserAuthFailure: function () {
        var form = this.getAuthForm(),
            errBox = form.down('[role=auth-error]');

        errBox.show();
        errBox.update(_l.auth.auth_error);
        form.getForm().reset();

        Ext.getBody().unmask();
        this.getAuthWindow().show();
    },

    loadPermissions: function (config) {

        if (config) {
            var data = [];

            Ext.iterate(config, function (key, permissions) {
                if (Ext.isArray(permissions)) {
                    var section = {id: key};
                    data.push(section);
                    Ext.iterate(permissions, function (permission) {
                        section[permission] = true;
                    }, this);
                }
            }, this);

            this.getStore('Permissions').loadData(data);

            this.afterConnectionSet();
        } else {
            Ext.API.loadPermissions(this.loadPermissions, this.onUserAuthFailure, this);
        }
    },

    afterConnectionSet: function () {
        this.registerHistory();

        if (!Ext.API.fatalError) {
            this.application.connectionReady = true;
            this.application.fireEvent('connectionset', this);
        }

        Ext.create('NavixyPanel.view.Viewport');
    },

    setAuthKey: function (hash) {
        Ext.util.Cookies.set(Ext.API.authKeyName, hash);
    },

    removeAuthKey: function (hash) {
        Ext.util.Cookies.clear(Ext.API.authKeyName);
    },

    getAppRoot: function () {
        return [Ext.Loader.getPath('NavixyPanel'), '../'].join('/');
    },

    doLogout: function () {
        this.removeAuthKey();

        Ext.defer(function () {
            try {
                window.top.location.href(this.getAppRoot());
            } catch (e) {
                window.top.location.href = this.getAppRoot();
            }
        }, 20, this);
    },

    // Localization

    changeLocale: function (el, value) {

        Locale.Manager.updateLocale(value);
    }
});