/**
 * @class NavixyPanel.controller.Main
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.controller.Main', {
    extend: 'Ext.app.Controller',
    errorDelay: 50,

    views: [
        'Viewport',
        'panelUser.authWindow'
    ],

    requires: [
        'Ext.util.Cookies',
        'NavixyPanel.utils.CTemplate',

        'NavixyPanel.api.ApiConnector',
        'NavixyPanel.api.NavixyApi',

        'NavixyPanel.utils.Navigator',

        'NavixyPanel.utils.pagination.Store',
        'NavixyPanel.utils.pagination.GridPanel',
        'NavixyPanel.utils.pagination.CustomPaging'
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

    stores: ['Permissions', 'Users', 'Trackers', 'Dealer', 'TimeZones'],
    models: ['Permissions', 'User',  'Tracker'],

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

        Ext.override(Ext.Date, {
            formatISO: function (isoDate, format) {
                var date = this.tryParse(isoDate);

                return this.format(date, format || (Ext.util.Format.dateFormatFull || 'd.m.Y H:i:s'));
            },

            tryParse: function (stringDate) {
                var result = Ext.Date.parse(stringDate, 'Y-m-d H:i:s');

                if (!result) {
                    Ext.iterate(this.formatFunctions, function (format) {
                        try {
                            var tmpResult = this.parse(stringDate, format);
                            if (tmpResult) {
                                result = tmpResult;
                                return false;
                            }
                        } catch (e) {
                            Ext.log(e.stack);
                        }
                    }, this);
                }

                if (!result) {
                    result = this.toDate(stringDate);
                }

                return  result;
            },

            delta: function (date1, date2, format) {
                date1 = this.tryParse(date1);
                date2 = this.tryParse(date2);

                var offset = new Date().getTimezoneOffset() * 60000,
                    dateDelta = new Date(Math.abs(date1 - date2) + offset);

                return format ? this.format(dateDelta, format) : dateDelta;

            },

            formatFunctions: {
                'hours-minutes': function () {
                    var hours = this.getHours(),
                        minutes = this.getMinutes(),
                        hours_postfix = _l.units_combination.hours[ hours <= 10 || hours > 19 ? hours % 10 : 10] ,
                        minutes_postfix = _l.units_combination.minutes[ minutes <= 10 || minutes > 19 ? minutes % 10 : 10];

                    return  [hours, hours_postfix, minutes, minutes_postfix].join(' ');
                }
            },

            toDate: function (string) {
                var date = new Date(string);

                try {
                    if (this.isValid(date)) {
                        return date;
                    }
                    return new Date(string.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));

                } catch (e) {
                    return date;
                }

            }

        });

        Ext.override(Ext.data.Store, {
            getData: function () {
                var result = [];

                this.each(function (record) {
                    result.push(record.getData());
                });

                return result;
            },
            getFilteredData: function (filters) {
                var result = [];

                if (!filters) {

                    result = this.getData();
                } else {

                    this.suspendEvents();
                    this.filter(filters);

                    result = this.getData();

                    Ext.iterate(filters, function(filter) {
                        this.removeFilter(filter);
                    }, this);

                    this.resumeEvents();
                }
                return result;
            }
        });

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

        Ext.apply(Ext.form.field.VTypes, {
            numeric: function(v) {
                return Ext.form.VTypes['numericVal'].test(v);
            },
            numericText: _l.invalid_numeric_msg,
            numericMask: /[\-\+0-9.]/,
            numericVal: /^[-+]?\d*\.?\d*$/i
        });
    },

    // History
    registerHistory: function () {
        Ext.Nav.on('change', this.handleHistory, this);
        this.application.on('handlefound', this.onHandlerFound, this);

        //TODO Controllers load check;
        Ext.defer(this.handleHistory, 100, this);
    },

    handleHistory: function () {
        var eventConfig = Ext.Nav.getEventConfig();

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
        this.doMainRequest();
    },

    setAuthKey: function (hash) {
        Ext.util.Cookies.set(Ext.API.authKeyName, hash);
        Ext.API.initAuthKey();
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

    //Main data request
    doMainRequest: function () {
        var me = this,
            calls = ['getDealerInfo', 'getUsersList', 'getTrackersList', 'getTimeZones'];

        Ext.getBody().mask(_l.conneting_loader);

        Ext.API.batch(calls, {
            callback: function (results) {
                Ext.getBody().unmask();
                me.handleResults(results);
            },

            failure: function () {
                Ext.getBody().unmask();
                Ext.log('request failure');
            }
        });

    },

    handleResults: function (results) {
        Ext.iterate({
            'getDealerInfo': 'Dealer',
            'getUsersList': 'Users',
            'getTrackersList': 'Trackers',
            'getTimeZones': 'TimeZones'
        }, function (action, store) {

            try {
                var storeInstance = Ext.getStore(store),
                    list = Ext.isArray(results[action]) ? results[action] : [results[action]];

                storeInstance.storeLoaded = true;
                storeInstance.loadData(list);
            } catch (e) {
                Ext.log('result handler error', e.stack);
            }
        });

        if (!Ext.API.fatalError) {
            this.application.connectionReady = true;
            this.application.fireEvent('connectionset', this);
        }

        this.registerHistory();
        Ext.create('NavixyPanel.view.Viewport', {renderTo: Ext.getBody()});
    },

    // Localization

    changeLocale: function (el, value) {

        Locale.Manager.updateLocale(value);
    }
});