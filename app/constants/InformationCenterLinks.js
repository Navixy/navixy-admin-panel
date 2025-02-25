Ext.define('NavixyPanel.constants.InformationCenterLinks', {
    singleton: true,

    DOCS: {
        DEFAULT: 'https://en.docs.navixy.com/ud/',
        ES: 'https://es.docs.navixy.com/ud/',
        RU: 'https://ru.docs.navixy.com/ud/',
    },

    RELEASE_NOTES: 'https://release.x-gps.app/',

    /**
     * Get docs link.
     * @return {string}
     */
    getDocsLink: function () {
        return this.DOCS[Locale.Manager.getLocale().toUpperCase()] || this.DOCS.DEFAULT;
    },

    /**
     * Get release notes link with optional locale parameter.
     * @param locale {'en'|'ru'=}
     * @return {string}
     */
    getReleaseNotesLink: function (locale) {
        return this.RELEASE_NOTES + (locale || '');
    },
});
