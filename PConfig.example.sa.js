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
        // Ссылка на "автоматичесую" авторизацию в мониторинге, с передачей хэша через GET. Испольхуется страница  прямого показа демонстрации мониторинга.
        monUrlTpl: ['http://{company_url}/pro/demo/?session_key={hash}']
    },

    // Адарес подкючения к веб-сокету терминала для устройств
    terminalHost: 'ws://api.domain.com:8383/',
    // Доменное имя по умолчанию. Учатсвует в определении доступных типов карт и других настроек paas. Может принимать значением строку указаывающую домен i.e. "gdemoi.ru" или массив перечисляющий домены i.e.["gdemoi.ru", "gdemoi.com"]. В случае отсутствия занчения домен будет сравниваться с ".navixy.ru", чтобы игнорировать сравнение с ".navixy.ru" установите значение в false. Все выше перечисленные могут быть проигнорированы при получении команды (опции) от сервера.
    paas_domain: '.domain.com',

    // Отключенные типы биллинга для создания тарифов. Может пнинимать значением строку указывающую тип monthly|everyday|activeday или массив перечислящий отключенные типы ["monthly", "everyday"]. Если будут указаны все три типа ["monthly", "everyday", "activeday"], то кнопка создания нового тарифа отображаться не будет. Не указывать параметр если ограничений на тип биллинга нет.
    excludedTariffs: "monthly",

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
