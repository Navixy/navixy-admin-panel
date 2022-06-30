Config = {
    // Profiles template API
    apiProfiles: {
        // Java-API settings
        japi: {
            apiRoot: 'http://api.domain.com/panel',
            apiUrlTpl: ['{apiRoot}/{handler}/{action}']
        },
        // B2Field Java-API settings
        b2f_japi: {
          apiRoot: '//panel.ci.test.gdemoi.ru/api-v2/b2f/panel',
          apiUrlTpl: ['{apiRoot}/{handler}/{action}']
        },
    },

    // Links templates
    links: {
        // Link to "automatic" authorization in monitoring with user hash in GET.
        monUrlTpl: ['http://{company_url}/pro/demo/?session_key={hash}'],
        // Link to "automatic" authorization in selected app with user hash in GET.
        appUrlTpl: ['//saas.navixy.com/pro/demo/?session_key={hash}&app={app}&tracker_id={tracker_id}'],
        // Link to standard authorization page
        loginUrlTpl: ['http://{company_url}/login/']
    },

    // web-socket connection address for devices terminal
    terminalHost: 'ws://api.domain.com:8383/',
    // Default domain name. Use for determining map types and other settings.
    // Can be string (i.e. "gdemoi.ru") or array of strings (i.e.["gdemoi.ru", "gdemoi.com"].)
    // Default value is ".navixy.ru"
    // TO ignore comparing with  ".navixy.ru" set value to false
    // All above will be ignored if server sends own options
    paas_domain: '.domain.com',

    // Default is '.navixy.com' if empty
    brandingPaasDomain: '.domain.com',

    // Images upload filesize limit in MB
    uploadLimit: 1,

    // Incoming sms-gateway phone number for navixy
    navixyInboundNumber: "79037976362",

    // Если true - дает доступ суб-паасам к самостоятельной оплате через avangate и по счету
    // if true - allow sub-paas to payment via avangate and by invoice
    subpaasPay: false,

    avangateLinks: {
        avangate_payment_page: 'https://secure.avangate.com/order/checkout.php',
        linkTpls: {
            activation: '{avangate_payment_page}?PRODS=4656455&INFO4656455={dealer_id}&QTY=1&{styleParams}&BACK_REF=http://panel.navixy.com/payment_gate/',
            monthlyFee: '{avangate_payment_page}?PRODS=4656484&INFO4656484={dealer_id}&QTY={qty}&{styleParams}'
        },
        styleParams: 'CLEAN_CART=ALL&CART=1&CARD=2&DESIGN_TYPE=1&CURRENCY=USD&SHORT_FORM=1&ORDERSTYLE=nLWo5ZTPiLk='
    },
    // use google maps whithout its js api ,
    useGoogleMapsTilesDirectly: false

    //google_key: {
    //    allow: true,
    //    get_key_link: 'https://developers.google.com/maps/documentation/javascript/get-api-key'
    //}
};
