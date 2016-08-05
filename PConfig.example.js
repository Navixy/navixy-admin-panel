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
        monUrlTpl: ['http://{company_url}/pro/demo/?session_key={hash}'],
        // Ссылка на стандартную авторизацию в мониторинге.
        loginUrlTpl: ['http://{company_url}/login/']
    },

    // Адарес подкючения к веб-сокету терминала для устройств
    terminalHost: 'ws://api.domain.com:8383/',
    // Доменное имя по умолчанию. Учатсвует в определении доступных типов карт и других настроек paas. Может принимать значением строку указаывающую домен i.e. "gdemoi.ru" или массив перечисляющий домены i.e.["gdemoi.ru", "gdemoi.com"]. В случае отсутствия занчения домен будет сравниваться с ".navixy.ru", чтобы игнорировать сравнение с ".navixy.ru" установите значение в false. Все выше перечисленные могут быть проигнорированы при получении команды (опции) от сервера.
    paas_domain: '.domain.com',

    // Отключенные типы биллинга для создания тарифов. Может пнинимать значением строку указывающую тип monthly|everyday|activeday или массив перечислящий отключенные типы ["monthly", "everyday"]. Если будут указаны все три типа ["monthly", "everyday", "activeday"], то кнопка создания нового тарифа отображаться не будет. Не указывать параметр если ограничений на тип биллинга нет.
    excludedTariffs: "monthly",

    // Номер приема входящих сообщений для sms-шлюза navixy
    navixyInboundNumber: "79037976362",

    // Разрешение на выбор тем интерфейса мониторинга в настройках
    allowTheming: false,

    avangateLinks: {
        avangate_payment_page: 'https://secure.avangate.com/order/checkout.php',
        linkTpls: {
            activation: '{avangate_payment_page}?PRODS=4656455&INFO4656455={dealer_id}&QTY=1&{styleParams}&BACK_REF=http://panel.navixy.com/payment_gate/',
            monthlyFee: '{avangate_payment_page}?PRODS=4656484&INFO4656484={dealer_id}&QTY={qty}&{styleParams}'
        },
        styleParams: 'CLEAN_CART=ALL&CART=1&CARD=2&DESIGN_TYPE=1&CURRENCY=USD&SHORT_FORM=1&ORDERSTYLE=nLWo5ZTPiLk='
    },

    useGoogleMapsTilesDirectly: false //use google maps whithout its js api ,

    //google_key: {
    //    allow: true,
    //    get_key_link: 'https://developers.google.com/maps/documentation/javascript/get-api-key'
    //}
};
