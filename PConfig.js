Config = {
    apiProfiles: {
        japi: {
            apiRoot: 'http://api.test.gdemoi.ru/panel',
            apiUrlTpl: ['{apiRoot}/{handler}/{action}']
        },
        jgapi: {
            apiRoot: 'http://api.test.gdemoi.ru/',
            apiUrlTpl: ['{apiRoot}/{handler}/{action}']
        }
    },

    appRedirect: {
        authProperty: 'hash',
        appPage: 'main',
        loginPage: 'login'
    }
};
