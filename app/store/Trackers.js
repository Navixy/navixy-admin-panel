/**
 * @class NavixyPanel.store.Trackers
 * @extends NavixyPanel.store.Abstract
 * Description
 */

Ext.define('NavixyPanel.store.Trackers', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.Tracker',
    storeId: 'Trackers',
    api: {
        read: 'getTrackersList',
        record: 'getTracker'
    },
    sorters: [
        {
            property: 'id',
            direction: 'ASC'
        }
    ],



    constructor: function () {
        var me = this;

        if (!this.proxy) {
            this.proxy = {
                type: 'navixy',
                enablePaging: true,
                apiCalls: this.api,
                responseEncodeFn: this.getProxyEncoder(),

                writer: {
                    type: 'json',
                    root: this.writerRoot,
                    encode: this.writerEncode
                },

                listeners: {
                    exception: Ext.bind(me.onException, me)
                },

                buildParams: function (request) {

                    var params = request.jsonData || request.params,
                        cloneFilterMode = Ext.state.Manager.get('TrackersCloneFilter');

                    if (cloneFilterMode === 'clones') {
                        params.clones_filter = 'include_clones_only';
                    }
                    if (cloneFilterMode === 'trackers') {
                        params.clones_filter = 'exclude_clones'
                    }

                    if (cloneFilterMode === 'all') {
                        delete params.clones_filter
                    }

                    return params;
                },

                doRequest: function(operation, callback, scope) {
                    var writer  = this.getWriter(),
                        request = this.buildRequest(operation),
                        method = this.getMethod(operation),
                        params, config;

                    if (request && request.params && request.params.order_by === "model_name") {
                        request.params.order_by = "model";
                    }

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
                }
            };
        }

        Ext.data.Store.prototype.constructor.apply(this, arguments);
    }
});
