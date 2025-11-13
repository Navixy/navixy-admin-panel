Ext.define('NavixyPanel.constants.InformationCenterLinks', {
    singleton: true,

    DOCS: {
        DEFAULT: 'https://squaregps.gitbook.io/in-app/',
        ES: 'https://squaregps.gitbook.io/in-app/',
        RU: 'https://squaregps.gitbook.io/in-app/user-guide-ru',
        FR: 'https://squaregps.gitbook.io/in-app/user-guide-fr',
        PT_BR: 'https://squaregps.gitbook.io/in-app/user-guide-pt-br',
        ID: 'https://squaregps.gitbook.io/in-app/user-guide-id',
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
