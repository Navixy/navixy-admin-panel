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

    init: function () {
        this.checkAuth();

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
            // TODO Permissions store load;
            this.afterConnectionSet();
        } else {
            Ext.API.loadPermissions(this.loadPermissions, this.onUserAuthFailure, this);
        }
    },

    afterConnectionSet: function () {
        this.registerHistory();
        Ext.create('NavixyPanel.view.Viewport');
    },

    setAuthKey: function (hash) {
        Ext.util.Cookies.set(Ext.API.authKeyName, hash);
    },

    removeAuthKey: function (hash) {
        console.log('removeAuthKey',Ext.API.authKeyName);
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
    },
});