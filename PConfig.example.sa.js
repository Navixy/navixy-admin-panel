Config = {
    // Profiles template API
    apiProfiles: {
        // Java-API settings
        japi: {
            apiRoot: 'http://api.domain.com/panel',
            apiUrlTpl: ['{apiRoot}/{handler}/{action}']
        }
    },

    // Links templates
    links: {
        // Used in monUrlTpl instead of company_url for all PaaS without own panel domain. Needed to fix crossdomain error.
        paasCompanyUrl: 'saas.navixy.com',
        // Link to "automatic" authorization in monitoring with user hash in GET.
        monUrlTpl: ['http://{company_url}/pro/demo/?session_key={hash}'],
        // Link to "automatic" authorization in selected app with user hash in GET.
        appUrlTpl: ['//{company_url}/pro/demo/?session_key={hash}&app={app}&tracker_id={tracker_id}'],
        // Link to standard authorization page
        loginUrlTpl: ['//{company_url}/login/']
    },

    // web-socket connection address for devices terminal
    terminalHost: 'ws://api.domain.com:8383/',
    // Default domain name. Use for determining map types and other settings.
    // Can be string (i.e. "gdemoi.ru") or array of strings (i.e.["gdemoi.ru", "gdemoi.com"].)
    // Default value is ".navixy.ru"
    // TO ignore comparing with  ".navixy.ru" set value to false
    // All above will be ignored if server sends own options
    paas_domain: '.domain.com',

    // Incoming sms-gateway phone number for navixy
    navixyInboundNumber: "79037976362",

    //use google maps whithout its js api
    useGoogleMapsTilesDirectly: false
    //Extended locales for use in MONITORING not in Panel
    //extended_locales: {
    //    override: true,
    //    items: [{
    //        id: 'en_US',
    //        name: 'en',
    //        text: 'English',
    //        alias: ['en', 'en_US'],
    //        rtl: false
    //    }, {
    //        id: 'zh_CN',
    //        name: 'zh',
    //        text: 'Chineese',
    //        alias: ['zh', 'zh_CN'],
    //        rtl: false
    //    }]
    //}
};
