/**
 * @class NavixyPanel.utils.History
 * @extends Ext.util.History
 * Description
 */

Ext.define('NavixyPanel.utils.Navigator', {
    alternateClassName: 'Ext.Navigator',
    requires: ['Ext.util.History'],
    singleton: true,
    delimiter: '/',
    eventNameTpl: ['section-{handler}<tpl if="values.action">-{action}</tpl>'],

    mixins: {
        observable: 'Ext.util.Observable'
    },

    constructor: function (config) {
        this.mixins.observable.constructor.call(this, config);
        this.eventNameGenerator = new Ext.XTemplate(this.eventNameTpl);

        Ext.History.init(this.bindHistory, this);
    },

    bindHistory: function () {
        this.historyRelay = this.relayEvents(Ext.History, ['change']);
    },

    getParts: function () {
        var curToken = Ext.History.getToken() || "",
            parts = curToken.split(this.delimiter),
            handler, action, params,
            eventName;

        handler = parts.length
            ? parts.shift()
            : null;

        action = parts.length
            ? parts.pop()
            : null;

        if (Ext.isNumeric(action)) {
            parts.push(action);
            action = null;
        }

        params = parts.length
            ? parts.length === 1
                ? parts[0]
                : Ext.apply([], parts)
            : null;

        return handler
            ? {
                handler: handler,
                action: action,
                params: params
            }
            : null;
    },

    getEventConfig: function (path) {
        var parts = path || this.getParts(),
            result
            ;

        if (parts) {
            result = {};
            result.name = this.eventNameGenerator.apply(parts);
            if (parts.params) {
                result.params = parts.params;
            }
        }

        return result;
    },

    genEventConfig: function (path) {
        return Ext.isObject(path) && path.handler
            ? this.getEventConfig(path)
            : null;
    },

    goTo: function (token) {
        Ext.History.add(token);
    },
});
