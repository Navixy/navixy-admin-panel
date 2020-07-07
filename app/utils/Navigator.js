/**
 * @class NavixyPanel.utils.History
 * @extends Ext.util.History
 * Description
 */

Ext.define('NavixyPanel.utils.Navigator', {
    alternateClassName: 'Ext.Nav',
    requires: ['Ext.util.History'],
    singleton: true,
    delimiter: '/',
    eventNameTpl: ['section-{handler}<tpl if="values.action">-{action}</tpl>'],

    mixins: {
        observable: 'Ext.util.Observable'
    },

    noActionMap: ['search'],

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

        action = !Ext.Array.contains(this.noActionMap, handler) && parts.length
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

    makeToken: function (config) {
        var parts = [];

        if (config.handler) {
            parts.push(config.handler);

            if (config.params) {
                Ext.iterate(config.params, function (param) {
                    if (Ext.isNumeric(param)) {
                        parts.push(param);
                    }
                }, this);
            }

            if (config.action) {
                parts.push(config.action);
            }
        }

        return parts.length
            ? parts.join(this.delimiter)
            : '';
    },

    getEventConfig: function (path) {
        var parts = path || this.getParts(),
            result = {
                name: 'index'
            };

        if (parts) {
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

    shift: function (token) {
        Ext.History.add(token);
    },
    
    back: function () {
        Ext.History.back();
    },

    isIndex: function () {
        return Ext.History.getToken() == '';
    },

    getMonitoring: function (hash) {
        var url = new Ext.Template(Config.links.monUrlTpl).apply({
                company_url: Ext.getStore('Dealer').first().get('domain') || 'my.gdemoi.ru',
                hash: hash || ''
            });

        return url;
    },

    getApplicationLink: function (hash, app, params) {
        var domain = Ext.getStore('Dealer').first().get('domain'),
            paasDomain = Config.links.paasCompanyUrl,
            data = Ext.apply({
                company_url:  Ext.isNavixy() ? paasDomain : domain || paasDomain,
                hash: hash || '',
                app: app
            }, params || {}),
            locale = Locale.Manager.getLocale(),
            link = new Ext.Template(Config.links.appUrlTpl).apply(data);

        return !!domain && !!app && Ext.String.urlAppend(link, 'locale=' + locale);
    },

    getLogin: function () {
        var domain = Ext.getStore('Dealer').first().get('domain'),
            url = !!domain && new Ext.Template(Config.links.loginUrlTpl).apply({
                company_url: domain
            });

        return url;
    },

    getSearch: function (searchString) {
        return Ext.String.format('search/{0}', searchString);
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
