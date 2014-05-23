Config = {
    apiProfiles: {
        japi: {
            apiRoot: 'http://api.test.gdemoi.ru/panel',
            apiUrlTpl: ['{apiRoot}/{handler}/{action}']
        }
    },

    appRedirect: {
        authProperty: 'hash',
        appPage: 'main',
        loginPage: 'login'
    },

    links: {
        monUrlTpl: ['http://{company_url}/pro/demo/?session_key={hash}']
    },

    terminalHost: 'ws://api.test.gdemoi.ru:8383/',
    paas_domain: '.navixy.ru'
};
