Config = {
    apiProfiles: {
        japi: {
            apiRoot: 'http://api.domain.com/panel',
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

    terminalHost: 'ws://api.domain.com:8383/',
    paas_domain: '.domain.com',

    optUrl: 'http://opt.domain.com/',
    hasOptDelivery: false
};
