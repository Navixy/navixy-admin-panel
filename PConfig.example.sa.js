Config = {
    // Profiles template API
    apiProfiles: {
        // Java-API settings
        japi: {
            apiRoot: '/api-v2/panel',
            apiUrlTpl: ['{apiRoot}/{handler}/{action}']
        }
    },

    // Links templates
    links: {
        // Link to "automatic" authorization in monitoring with user hash in GET.
        monUrlTpl: ['://{company_url}/pro/demo/?session_key={hash}'],
        // Link to "automatic" authorization in selected app with user hash in GET.
        appUrlTpl: ['//{company_url}/pro/demo/?session_key={hash}&app={app}&tracker_id={tracker_id}']
    },

    // web-socket connection address for devices terminal
    terminalHost: 'ws'+window.location.protocol.substring(4)+'//'+window.location.host+'/',
    
    paas_domain: false,
    
    navixyInboundNumber: "unknown",

    //use google maps whithout its js api
    useGoogleMapsTilesDirectly: false
    
};
