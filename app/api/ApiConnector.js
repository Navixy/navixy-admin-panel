/**
 * @class NavixyPanel.api.ApiConnector
 * Description
 */

Ext.define('NavixyPanel.api.ApiConnector', {
    requires: ['NavixyPanel.store.ErrorsManager'],
    defaultApiProfile: 'japi',
    authKeyName: 'panel_session_key',
    timeout: 120000,
    fatalError: false,

    initApiProfiles: function () {

        var configProfiles = Config.apiProfiles;

        this.apiProfiles = Ext.merge(configProfiles, {
            japi: {
                wrapProperty: false,
                isSuccess: function (res) {
                    return res.success;
                }
            },

            phpapi: {
                wrapProperty: 'Response',
                isSuccess: function (res) {
                    return res.status.id === 'done';
                }
            }
        });
    },

    constructor: function (config) {
        this.isDebugMode = Ext.util.Cookies.get('debug');

        Ext.apply(this, config);

        this.errorsManager = Ext.create('NavixyPanel.store.ErrorsManager', {
            authKeyName: this.authKeyName
        });

        this.initAuthKey();

        Ext.apply(Ext.Ajax,
            {
                useDefaultXhrHeader: false,
                cors: true
            });

        this.scope = this;
    },

    checkCode: function (response, requestConfig) {
        try {
            if (requestConfig.errorHandler) {
                requestConfig.errorHandler(response, requestConfig.params);
            } else if (requestConfig.errorHandler !== false) {
                this.fatalError = this.errorsManager.fireError(response.status.code, requestConfig.params, response);
            }
        } catch (e) {
            Ext.log(e.stack);
        }
    },

    hasAuthKey: function () {
        return !!this.authKey;
    },

    initAuthKey: function () {
        var authKey = Ext.util.Cookies.get(this.authKeyName);

        if (authKey) {
            this.authKey = authKey;
        } else if (!this.isDebugMode) {
            this.errorsManager.fireError('no_hash');
        }
    },

    initCheckInterval: function (config) {
        var stopCondition = config.stopCondition,
            callback = config.callback,
            args = config.args || [],
            scope = config.scope || this;

        var interval = setInterval(function () {
            if (stopCondition()) {
                if (callback) {
                    callback.apply(scope, args);
                }
                clearInterval(interval);

            }
        }, 50);
    },

    batch: function (methods, config) {
        var me = this,
            result = {},
            requestLen = methods.length,
            callback = config.callback,
            stepCallback = config.stepCallback,
            scope = config.scope || this,
            failureFn = config.failure;

        Ext.each(methods, function (method) {

            var success = function (res, params) {
                    if (stepCallback) {
                        stepCallback.apply(scope, arguments);
                    }
                    requestLen--;
                    result[method] = res;
                },
                failure = function () {
                    requestLen--;
                    result[method] = false;
                    if (failureFn) {
                        failureFn.apply(scope, arguments);
                    }

                };

            if (typeof method === 'string') {
                me[method](success, failure);
            } else {
                me[method.method]({
                    params: method.params,
                    callback: success,
                    scope: scope,
                    failure: failure
                });
            }
        });

        me.initCheckInterval({
            stopCondition: function () {
                return !requestLen;
            },
            callback: callback,
            args: [result],
            scope: me
        });

    },

    getRequestUrl: function (config) {
        var apiProfiles = this.apiProfiles,
            api = config.api || this.defaultApiProfile,
            apiUrlTpl = apiProfiles[api].apiUrlTpl,
            apiRoot = apiProfiles[api].apiRoot;

        return new Ext.Template(apiUrlTpl).apply({
            apiRoot: apiRoot,
            action: config.action,
            handler: config.handler
        });
    },

    getGlobalApiUrl: function (config) {
        var apiProfiles = this.apiProfiles,
            api = config.api || this.defaultApiProfile,
            apiUrlTpl = apiProfiles[api].apiUrlTpl,
            apiRoot = apiProfiles[api].apiRoot;

        return new Ext.Template('{apiRoot}/../{action}').apply({
            apiRoot: apiRoot,
            action: config.action
        });
    },

    sendRequest: function (config) {
        if (!this.apiProfiles) {
            this.initApiProfiles();
        }

        var me = this,
            successFn = config.success,
            failureFn = config.failure,
            onErrorFn = config.onerror,
            requestParams = config.params,
            requiredAction = config.requiredAction,
            apiUrl = me.getRequestUrl(config),
            rootProperty = config.root,
            apiVersion = config.api || me.defaultApiProfile,
            plain = config.plain || false,

            params = Ext.apply({
                hash: this.authKey
            }, requestParams),

            scope = config.scope || this;

        try {


            Ext.Ajax.request({
                url: apiUrl,

                timeout: this.timeout,
                params: params,
                success: function (response) {
                    try {
                        var wrapProperty = me.apiProfiles[apiVersion].wrapProperty,
                            decodedResult = plain ? response.responseText : Ext.decode(response.responseText),

                            result = wrapProperty ? decodedResult[wrapProperty] : decodedResult;

                        if (successFn) {

                            result.success = me.apiProfiles[apiVersion].isSuccess(result);
                            successFn.call(scope, rootProperty ? result[rootProperty] : result, requestParams, response);
                        }

                    } catch (e) {
                        if (onErrorFn) {
                            onErrorFn.call(scoperequestParams);
                        } else {
                            Ext.log('success callback error', e.stack);
                        }
                    }

                    if (requiredAction) {
                        requiredAction(response);
                    }
                },

                failure: function (response) {
                    if (!response.status) {
                        me.errorsManager.fireError('service_not_respond');
                    }

                    try {
                        me.checkCode(Ext.decode(response.responseText), config);
                    } catch (e) {
                        Ext.log(e.stack);
                    }

                    if (requiredAction) {
                        requiredAction.call(scope, response);
                    }
                    if (failureFn) {
                        failureFn.call(scope, Ext.decode(response.responseText), requestParams, response);
                    } else {
                        Ext.log('request failure', config);
                    }
                }
            });

        } catch (e) {
            Ext.log(e.stack);
        }

    },

    appendArguments: function (args, appendArgs) {
        var argmts = Array.prototype.slice.call(arguments);

        return appendArgs instanceof Array ? argmts.concat(appendArgs) : argmts.push(appendArgs);
    },

    requestWithOptions: function (main, options) {
        this.sendRequest(Ext.apply({
            success: main.callback,
            errorHandler: main.errorHandler,
            failure: main.failure,
            scope: main.scope,
            params: main.params
        }, options));
    }
});