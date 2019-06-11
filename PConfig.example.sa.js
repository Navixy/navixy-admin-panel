Config = {

    // Шаблоны профилей API
    apiProfiles: {
        // Настройки Java-API
        japi: {
            apiRoot: 'http://api.domain.com/panel',
            apiUrlTpl: ['{apiRoot}/{handler}/{action}']
        }
    },

    // Шаблоны внешних ссылок
    links: {
        // Используется в monUrlTpl вместо company_url для всех PaaS, не использующих собственный домен для панели. Нужно для обхода ошибки кроссдоменности.
        paasCompanyUrl: 'saas.navixy.com',
        // Ссылка на "автоматичесую" авторизацию в мониторинге, с передачей хэша через GET. Испольхуется страница  прямого показа демонстрации мониторинга.
        monUrlTpl: ['http://{company_url}/pro/demo/?session_key={hash}'],
        // Ссылка на "автоматичесую" авторизацию в указанном приложении, с передачей хэша через GET.
        appUrlTpl: ['//{company_url}/pro/demo/?session_key={hash}&app={app}&tracker_id={tracker_id}'],
        // Ссылка на стандартную авторизацию в мониторинге.
        loginUrlTpl: ['//{company_url}/login/']
    },

    // Адарес подкючения к веб-сокету терминала для устройств
    terminalHost: 'ws://api.domain.com:8383/',
    // Доменное имя по умолчанию. Учатсвует в определении доступных типов карт и других настроек paas. Может принимать значением строку указаывающую домен i.e. "gdemoi.ru" или массив перечисляющий домены i.e.["gdemoi.ru", "gdemoi.com"]. В случае отсутствия занчения домен будет сравниваться с ".navixy.ru", чтобы игнорировать сравнение с ".navixy.ru" установите значение в false. Все выше перечисленные могут быть проигнорированы при получении команды (опции) от сервера.
    paas_domain: '.domain.com',


    // Номер приема входящих сообщений для sms-шлюза navixy
    navixyInboundNumber: "79037976362",

    useGoogleMapsTilesDirectly: false //use google maps whithout its js api
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
