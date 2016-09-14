/**
 * @class NavixyPanel.api.NavixyApiProxy
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.utils.store.NavixyApiProxy', {
    extend: 'Ext.data.proxy.Server',
    alias: 'proxy.navixy',

    apiCalls: {},
    startParam: 'offset',
    limitParam: 'limit',
    sortParam: 'order_by',
    directionParam: 'ascending',
    simpleSortMode: true,
    apiFilterProperty: '_all',
    apiFilters: ['user_id', 'tariff_id'],

    responseEncodeFn: null,

    reader: {
        type: 'json',
        root: 'list',
        successProperty: 'success',
        totalProperty: 'count'
    },

    doRequest: function(operation, callback, scope) {
        var writer  = this.getWriter(),
            request = this.buildRequest(operation),
            method = this.getMethod(operation),
            params, config;

        if (operation.allowWrite()) {
            request = writer.write(request);
        }

        config = {
            callback: this.createSuccessCallback(request, operation, callback, scope),
            failure: this.createFailureCallback(request, operation, callback, scope),
            params: this.buildParams(request),
            scope: scope
        };

        Ext.API[method](config);

        return request;
    },

    getMethod: function (request) {
        return this.apiCalls[request.action];
    },

    buildParams: function (request) {
        return request.jsonData || request.params;
    },

    createSuccessCallback: function (request, operation, callback, scope) {
        var me = this;

        return function(data, params, response) {
            me.processResponse(true, operation, request, Ext.isFunction(me.responseEncodeFn) ? me.responseEncodeFn(data) : data , callback, scope);
        };
    },

    createFailureCallback: function (request, operation, callback, scope) {
        var me = this;

        return function(data, params, response) {
            me.processResponse(false, operation, request, Ext.isFunction(me.responseEncodeFn) ? me.responseEncodeFn(data) : data, callback, scope);
        };
    },

    buildUrl: function () {
        return false;
    },

    getParams: function(operation) {

        var params = this.callParent(arguments);

        if (!Ext.isEmpty(params[this.directionParam])) {
            params[this.directionParam] = params[this.directionParam] === 'ASC';
        }

        return Ext.apply(params, this.encodeSpecialFilters(operation.filters));
    },

    encodeFilters: function(filters) {
        var min = [],
            length = filters.length,
            i = 0,
            result = null;

        for (; i < length; i++) {
            if (filters[i].property === this.apiFilterProperty){
                return filters[i].value;
            }
        }
        return result;
    },

    encodeSpecialFilters: function (filters) {
        var min = [],
            length = filters.length,
            i = 0,
            result = {};

        for (; i < length; i++) {
            if (Ext.Array.indexOf(this.apiFilters, filters[i].property) > -1){
                result[filters[i].property] = filters[i].value;
            }
        }

        return result;
    }
});
