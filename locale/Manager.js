Ext.define('Locale.Manager', {

    uses: [
        'Ext.data.Store'
    ],

    singleton: true,

    _default: 'en',
    _loaded: false,
    _locale: null,
    _locales: [
        {
            id: 'en_US',
            name: 'en',
            text: 'English',
            alias: ['en', 'en_US', 'English']
        },
        {
            id: 'tr_TR',
            name: 'tr',
            text: 'Türkçeçe',
            alias: ['tr', 'tr_TR', 'Türkçeçe']
        },
        //{
        //    id: 'es_ES',
        //    name: 'es',
        //    text: 'Spanish - Español',
        //    alias: ['es', 'es_ES', 'Español']
        //},
        //{
        //    id: 'de_DE',
        //    name: 'de',
        //    text: 'German - Deutsch',
        //    alias: ['de', 'de_DE', 'de_AT']
        //},
        {
            id: 'ru_RU',
            name: 'ru',
            text: 'Russian - Русский',
            alias: ['ru', 'ru_RU', 'Русский']
        },
        //{
        //    id: 'uk_UA',
        //    name: 'uk',
        //    text: 'Ukrainian - Українська',
        //    alias: ['ua', 'uk', 'uk_UA']
        //},
        //{
        //    id: 'pt_PT',
        //    name: 'pt',
        //    text: 'Portuguese - Português',
        //    alias: ['pt', 'pt_PT', 'Português'],
        //    rtl: false
        //}

    ],

    ru_locales: ['ru', 'ru-RU', 'ru-ru', 'hy', 'AM', 'az', 'AZ', 'be', 'BY', 'ka', 'GE', 'kk', 'KZ', 'ky', 'KG', 'mo',
                 'MD', 'tg', 'TJ', 'tk', 'TM', 'uk', 'UA', 'uz', 'UZ'],

    other_locales: ['en', 'tr'],

    _ui_locales: [
        {
            id: 'en_US',
            name: 'en',
            text: 'English',
            alias: ['en', 'en_US', 'English'],
            rtl: false
        },
        {
            id: 'es_ES',
            name: 'es',
            text: 'Spanish - Español',
            alias: ['es', 'es_ES', 'Español'],
            rtl: false
        },
        {
            id: 'de_DE',
            name: 'de',
            text: 'Deutsch',
            alias: ['de', 'de_DE', 'de_AT'],
            rtl: false
        },
        {
            id: 'ru_RU',
            name: 'ru',
            text: 'Русский',
            alias: ['ru', 'ru_RU', 'Русский'],
            rtl: false
        },
        {
            id: 'uk_UA',
            name: 'uk',
            text: 'Українська',
            alias: ['ua', 'uk', 'uk_UA'],
            rtl: false
        },
        {
            id: 'pt_PT',
            name: 'pt',
            text: 'Português',
            alias: ['pt', 'pt_PT', 'Português'],
            rtl: false
        }, {
            id: 'tr_TR',
            name: 'tr',
            text: 'Türkçeçe',
            alias: ['tr', 'tr_TR', 'Türkçeçe'],
            rtl: false
        },
        {
            id: 'ar_AR',
            name: 'ar',
            text: 'Arabic - العربية',
            alias: ['ar', 'ar_AR', 'ar_AR'],
            rtl: true
        }
    ],

    _tpl: 'locale-{locale}',
    _cookie_name: 'locale',

    init: function () {

        this._loaded = true;
        this._setLang();
    },

    setLocale: function (lang) {
        var me = this,
            locale = me._checkLang(lang);

        if (locale && locale !== me.getLocale()) {
            me._pageReload(locale);
        }
    },

    updateLocale: function (lang, silent) {
        var me = this,
            locale = me._checkLang(lang),
            old_locale = me._fromCookie();

        if (locale) {
            me._toCookie(locale);
            if (!silent && locale !== old_locale) {
                me._pageReload();
            }
        }
    },

    getAvailable: function (simple) {
        var locales = this._locales;

        if (simple) {
            return locales;
        } else {
            return new Ext.data.Store({
                fields: ['name', 'text', 'alias'],
                data: locales
            });
        }
    },

    getAvailableForUI: function (simple) {
        var locales = this._ui_locales;

        if (simple) {
            return locales;
        } else {
            return new Ext.data.Store({
                fields: ['name', 'text', 'alias'],
                data: locales
            });
        }
    },

    getLocale: function () {
        return this._locale;
    },

    getLocaleId: function () {
        var result = this._locale;
        this.getAvailable().each(function (locale) {
            if (locale.get('alias').indexOf(result) > -1) {
                result = locale.get('id');
                return false;
            }
        });

        return result;
    },

    get: function (key, lang, defaultText) {
        var me = this,
            locale = me._checkLang(lang),
            plural = key.indexOf('p:') === 0,
            keys = (plural ? key.substr(2) : key).split('.'),
            k = 0,
            kNum = keys.length,
            res;

        if (!me.isLoaded()) {
            return defaultText;
        }

        for (; k < kNum ; k++) {
            key = keys[k];

            if (locale) {
                locale = locale[key];
            }
        }

        res = locale || defaultText;

        if (plural) {
            return Ext.util.Inflector.pluralize(res);
        } else {
            return res;
        }
    },

    _clearSearch: function () {
        var me = this,
            wl = window.location,
            path = wl.href.replace(wl.search, ''),
            params = Ext.urlDecode(wl.search.substring(1));

        delete params[me._cookie_name];

        wl.replace(!Ext.Object.isEmpty(params)
                ? path += '?' + Ext.urlEncode(params)
                : path
        )

    },

    _setLang: function () {
        var me = this,
            lang = me._getDefault();

        me._locale = lang;
        me._getData(lang);
    },

    _getDefault: function () {
        return this._fromLocation() || this._fromCookie() || this._fromBrowser() || this._default;
    },

    _getData: function (lang) {
        var me = this,
            path = this._tpl.replace('{locale}', lang),
            cls = 'Locale.' + path,
            loadCallback = function () {
                _l = Locale[path];
                Ext.Array.remove(Ext.Loader.history, cls);

                document.title = _l.panel_title;
            };

        try {
            Ext.require(cls, loadCallback);
        } catch (e) {
            Ext.log('cant load locale ' + path)
        }
    },

    _fromLocation: function () {
        var me = this,
            params = Ext.urlDecode(window.location.search.substring(1)),
            lang = params[me._cookie_name];

        return me._checkLang(lang);
    },

    _fromCookie: function () {
        var me = this,
            lang = Ext.util.Cookies.get(me._cookie_name);

        return me._checkLang(lang);
    },

    _fromBrowser: function () {

        function androidLocale() {
            var androidAgent = navigator.userAgent.match(/Android \d+(?:\.\d+){1,2}; [a-z]{2}-[a-z]{2}/),
                localeMath = androidAgent ? androidAgent.toString().match(/[a-z]{2}-[a-z]{2}/) : false;

            return localeMath ? localeMath[0] || false : false;
        }

        var BrowserLocalesRu = this.ru_locales,
            browserLocale = androidLocale() || navigator.language || navigator.userLanguage || false;

        return browserLocale
            ? Ext.Array.indexOf(this.ru_locales, browserLocale) > -1
                ? "ru"
                : Ext.Array.indexOf(this.other_locales, browserLocale) > -1
                    ? browserLocale
                    : "en"
            : "en";
    },

    _toCookie: function (locale) {
        var me = this;

        Ext.util.Cookies.set(me._cookie_name, locale);
    },

    _checkLang: function (lang) {
        var me = this,
            result = null;

        if (lang) {
            me.getAvailable().each(function (locale) {
                if (locale.get('alias').indexOf(lang) > -1) {
                    result = locale.get('name');
                    return false;
                }
            });
        }

        return result;
    },

    _pageReload: function (locale) {

        var me = this,
            wl = window.location;

        wl.reload();
    }
});