/**
 * @class NavixyPanel.controller.Main
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.controller.Main', {
    extend: 'Ext.app.Controller',
    errorDelay: 100,

    views: [
        'Viewport',
        'panelUser.authWindow'
    ],

    requires: [
        'Ext.util.Cookies',
        'NavixyPanel.utils.CTemplate',

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

    stores: ['Permissions', 'Dealer', 'TimeZones'],
    models: ['Permissions'],

    init: function () {
        this.checkAuth();
        this.initOverrides();
        this.initPanelOverrides();

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
            'button[role=old-version]': {
                click: this.doOldVersion,
            },
            'localecombo': {
                change: this.changeLocale
            }
        });
    },

    // Overrides
    initOverrides: function () {
        Ext.override(Ext, {
            log: function () {
                try {
                    if (Ext.debug) {
                        console.log.apply(console, arguments);
                    }
                } catch (e) {
                }
            }
        });

        Ext.override(Ext.data.Connection, {
            onUploadComplete: function (frame, options) {
                try {
                    var result = frame.contentWindow.location.search.substr(1);
                    result = Ext.urlDecode(result);

                    var doc = frame.contentWindow.document || frame.contentDocument || window.frames[frame.id].document;
                    if (result.response) {
                        doc.write(result.response);
                    }
                } catch (e) {
                    Ext.log(e.stack);
                }
                return this.callParent(arguments);
            }
        });

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
                        hours_postfix = _l.get('units_combination.hours')[ hours <= 10 || hours > 19 ? hours % 10 : 10] ,
                        minutes_postfix = _l.get('units_combination.minutes')[ minutes <= 10 || minutes > 19 ? minutes % 10 : 10];

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
            }
        });

        Ext.override(Ext, {
            getFirst: function (query, returnAll) {
                var result = Ext.ComponentQuery.query(query);

                return returnAll ? result : result[0];
            }
        });


        Ext.override(Ext.picker.Month, {
            initCls: function() {

                var me = this,
                    baseCls = me.single ? 'x-monthpicker-single' : me.baseCls,
                    cls = [ baseCls, me.getComponentLayout().targetCls ];

                //<deprecated since=0.99>
                if (Ext.isDefined(me.cmpCls)) {
                    if (Ext.isDefined(Ext.global.console)) {
                        Ext.global.console.warn('Ext.Component: cmpCls has been deprecated. Please use componentCls.');
                    }
                    me.componentCls = me.cmpCls;
                    delete me.cmpCls;
                }
                //</deprecated>

                if (me.componentCls) {
                    cls.push(me.componentCls);
                } else {
                    me.componentCls = baseCls;
                }

                return cls;
            }
        });

        Ext.override(Ext.tip.QuickTip, {
            dismissDelay: 0
        });

        Ext.override(Ext.util.Format, {

            daysEncode: function (value) {
                return Ext.util.Format.units(value, 'days', true);
            },

            units: function (value, unit, withValue) {
                var result;

                if (_l.get('units_combination')[unit]) {
                    var tmp = value % 100,
                        index = tmp < 20 && tmp > 10 ? tmp % 20 : tmp % 10,
                        len = _l.get('units_combination')[unit].length;

                    if (_l.get('units_combination')[unit][index]) {
                        result = _l.get('units_combination')[unit][index];
                    } else {
                        result = _l.get('units_combination')[unit][len - 1];
                    }

                }

                return result ? withValue ? value + ' ' + result : result : '';
            },

            unitsDecode: function (value) {
                var units = this.unitsParse(value),
                    unitsMap = {
                        d: 'days',
                        m: 'months',
                        y: 'years'
                    };

                return !!(units.value && units.period) && unitsMap[units.period]
                    ? Ext.util.Format.units(units.value, unitsMap[units.period], true)
                    : value;
            },

            unitsParse: function (value) {

                return value
                    ? {
                        value: parseInt(value.substr(0, value.length - 1)),
                        period: value.substr(value.length - 1, 1)
                    }
                    : {
                        value: null,
                        period: null
                    };
            }
        });


        // Fix view mask shadow layout
        Ext.override(Ext.LoadMask, {
            onHide: function() {
                this.callParent();
                if (this.maskEl) {
                    this.maskEl.remove();
                    this.maskEl = null;
                }
            }
        });

        Ext.apply(Ext.form.field.VTypes, {
            numeric: function(v) {
                return Ext.form.VTypes['numericVal'].test(v);
            },
            numericText: _l.get('invalid_numeric_msg'),
            numericMask: /[\-\+0-9.]/,
            numericVal: /^[-+]?\d*\.?\d*$/i
        });

        Ext.apply(Ext.form.field.VTypes, {
            multiemail : function(v) {
                var array = v.split(',');
                var valid = true;
                Ext.each(array, function(value) {
                    if (!this.email(value)) {
                        valid = false;
                        return false;
                    }
                }, this);
                return valid;
            },
            multiemailText : 'This field should be an e-mail address, or a list of email addresses separated by commas(,) in the format "user@domain.com,test@test.com"',            numericMask: /[\-\+0-9.]/,
            multiemailMask : /[a-z0-9_\.\-@\,]/i
        });


        Ext.apply(Ext.form.field.VTypes, {
            amount: function(v) {
                return Ext.form.VTypes['amountVal'].test(v);
            },
            amountText: _l.get('invalid_amount_msg'),
            amountMask: /[\-\+0-9.]/,
            amountVal: /^[-+]?\d*\.?\d{0,2}$/i
        });

        Ext.apply(Ext.form.field.VTypes, {
            rurl: function(v) {
                return Ext.form.VTypes['rurlVal'].test(v);
            },
            rurlText: Ext.form.field.VTypes.urlText,
            rurlVal: /(((^https?)|(^ftp)):\/\/([\-а-яёa-z0-9]+\.)+[а-яёa-z0-9]{2,3}(\/[%\-а-яёa-z0-9]+(\.[а-яёa-z0-9]{2,})?)*(([а-яёa-z0-9\-\.\?\\\/+@&#;`~=%!]*)(\.[а-яёa-z0-9]{2,})?)*\/?)/i
        });
    },

    // Special Overrides
    initPanelOverrides: function () {

        Ext.override(Ext, {
            waitFor: function (condition, callback, scope, timeout) {
                var readyFn = function () {
                    try {
                        if (callback) {
                            callback.call(scope || this);
                        }
                    } catch (e) {
                        console.log(e.stack)
                    }
                }, result;

                try {
                    result = condition && condition.call(scope || this);
                } catch (e) {
                    result = false;
                }

                if (result) {
                    readyFn();
                } else {
                    var checkInterval = setInterval(function () {
                        if (condition && condition.call(scope || this)) {
                            clearInterval(checkInterval);
                            readyFn();
                        }
                    }, 5);
                }

                timeout = timeout || 100000;

                setTimeout(function () {
                    clearInterval(checkInterval);
                }, timeout);
            },

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
                        return result = Ext.checkPermission(sectionId, cRight);
                    }, this);

                } else {

                    var store = Ext.getStore('Permissions'),
                        name = store.getAlias(sectionId) || sectionId,
                        names = name.split(','),
                        section = null;

                    if (names.length > 1) {
                        Ext.iterate(names, function (name) {
                            section = store && store.getById(name);
                            result = Ext.isString(right)
                                ? section
                                ? !!section.get(right)
                                : false
                                : !!section;
                            if (result) {
                                return false;
                            }
                        }, this);

                    } else {
                        section = store && store.getById(name);
                        result = Ext.isString(right)
                            ? section
                            ? !!section.get(right)
                            : false
                            : !!section;
                    }
                }

                return result;
            },

            checkPermissons: function (sections) {
                var result = false;
                Ext.iterate(sections, function (sectionName) {
                    if (Ext.checkPermission(sectionName)) {
                        result = true;
                    }
                }, this);

                return result;
            },

            waitRecordReady: function (recordId, storeName, callback, scope, loadAssociations) {
                var store = Ext.getStore(storeName);
                if (store && store.loadRecord) {
                    Ext.getBody().mask(_l.get('loading'));
                    store.loadRecord(
                        recordId,
                        function() {
                            Ext.getBody().unmask();
                            callback.apply(scope, arguments);
                        },
                        scope,
                        loadAssociations,
                        function () {
                            Ext.getBody().unmask();
                            callback.apply(scope, [false]);
                        }
                    );
                } else {
                    Ext.getBody().unmask();
                    callback.call(scope);
                }
            },

            setPageFavicon: function (favicon_url) {

                if (!favicon_url) {
                    return false
                }

                var oldIcons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]'),
                    i, newIcon;

                for (i = 0 ; i < oldIcons.length ; i++) {
                    oldIcons[i].parentNode.removeChild(oldIcons[i]);
                }

                newIcon = document.createElement("link");
                newIcon.setAttribute("rel", "icon");
                newIcon.setAttribute("href", [favicon_url, '?', Ext.Date.now()].join(''));
                document.querySelector("head").appendChild(newIcon);
            }
        });

        Ext.override(Ext.util.Format, {

            //TODO: Cameras and sockets
            deviceLabelEncode: function (type, id) {
                var store,
                    record,
                    recordData;

                switch (type) {
                    case 'tracker' :
                        store = Ext.getStore('Trackers');
                        record = store && store.findRecord('id', id);
                        recordData = record && recordData.getData();
                        break;
                    case 'camera' :
                        store = Ext.getStore('Cameras');
                        break;
                    case 'socket' :
                        store = Ext.getStore('Sockets');
                        break;
                }

                return recordData
                    ? recordData.get('label')
                    : '';
            },

            devicesEncode: function (value) {
                return Ext.util.Format.units(value, 'devices', true);
            },

            deviceEncode: function (type) {
                return '<span class="' + type + ' device"><span></span>' + _l.get('devices')[type] + '</span>';
            },

            tariffEncode: function (type) {
                return '<span class="' + type + ' device">' + _l.get('tariffs.types')[type] + '</span>';
            },

            emptyEncode: function (value) {

                return !value
                    ? '<span class="gray nopad">' + value + '</span>'
                    : value
            },

            booleanEncode: function (value) {

                return value || _l.get('no');
            },

            balanceEncode: function (value) {

                return !value
                    ? '<span class="gray nopad">' + value + '</span>'
                    : value > 0
                        ? Ext.Number.toFixed(value, 2)
                        : '<span class="red nopad">' + value + '</span>'
            },

            bonusEncode: function (value) {

                return !value
                    ? '<span class="gray nopad">' + value + '</span>'
                    : Ext.Number.toFixed(value, 2)
            }
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

        Ext.MessageBox.alert(_l.get('error'), _l.get('no_path_found'));
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
            Ext.getBody().mask(_l.get('loading'));
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

        this.getAuthWindow().showError(_l.get('auth.auth_error'));

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
            calls = [
                'getDealerInfo',
                'getTimeZones'
            ];

        Ext.getBody().mask(_l.get('conneting_loader'));

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
    },

    doOldVersion: function () {
        if (Config.oldVersionURL) {
            document.location = Config.oldVersionURL
        }
    },
});