/**
* @class Locale.locale-uk
* @extends Locale.AbstractLocale
*/
Ext.define('Locale.locale-uk',{
    "extend": "Locale.AbstractLocale",
    "dependencies": [
        {
            "name": "Locale.ext.locale-uk",
            "history": false
        }
    ],
    "singleton": true,
    "panel_title": "NavixyPanel",
    "error": "Помилка",
    "loading": "Завантаження...",
    "conneting_loader": "Підключення до сервера",
    "access_denied": "Доступ заборонений",
    "access_denied_tip": "ви не маєте дозволу на доступ до запитаної сторінки",
    "index_title": "Ласкаво просимо до панелі управління",
    "old_version": "Стара версія",
    "auth": {
        "login": "Логін чи адреса електронної пошти",
        "password": "Пароль",
        "login_btn": "Логін",
        "locale_title": "Мова інтерфейсу",
        "locale_title_short": "мова",
        "auth_error": "Помилка автентифікації",
        "reloading_soon": "Перевантаження",
        "logout": "Вихід із системи",
        "title": "Адмін-панель"
    },
    "no_path_found": "Немає сторінки по цьому шляху",
    "phone_invalid_msg": "Будь ласка, введіть припустимий номер телефону",
    "invalid_numeric_msg": "Не дійсний номер",
    "invalid_amount_msg": "Не дійсний номер<br>(2 цифри після десяткового знака)",
    "searcher_empty_text": "Введіть пошуковий запит",
    "search_empty_text": "Введіть пошуковий запит",
    "searchTitle": "Пошук за категорією",
    "clear_form_btn": "Очистити",
    "save_form_btn": "Зберегти",
    "back_form_btn": "Назад",
    "select_form_btn": "Вибрати",
    "close_form_btn": "Закрити",
    "yes": "так",
    "no": "ні",
    "show_btn": "Показати",
    "wrong_period": "Неприпустимий період",
    "required_fields": "* - необхідні поля або розділи",
    "invalid_tab": "Неприпустимі заповнені поля",
    "page_size": "Розмір сторінки",
    "errors": {
        "1": "Помилка підключення до бази даних (001). Будь ласка, зверніться до служби підтримки або повторіть спробу пізніше.",
        "2": "Системна помилка авторизації (002).  Будь ласка, зверніться до служби підтримки або повторіть спробу пізніше.",
        "3": "Неправильний ключ сеансу ( 003 ) . Будь ласка, повторіть вхід в систему. Якщо проблему не вирішено, зверніться в службу підтримки.",
        "4": "Користувач не може бути знайдений або сеанс закінчився (004).  Виконайте вхід.",
        "5": "Неправильний запит (005). Будь ласка, зверніться до служби підтримки або повторіть спробу пізніше.",
        "6": "Неочікувана помилка (006). Будь ласка, зверніться до служби підтримки або повторіть спробу пізніше.",
        "7": {
            "default_msg": "Неправильні параметри запиту. Перевірте дані.",
            "title": "Неправильні параметри:",
            "errors": {
                "login": "Повинна бути дійсна адреса електронної пошти",
                "domain": "Неправильне доменне ім'я"
            }
        },
        "11": "Доступ заборонений",
        "12": "Платформу служби не знайдено",
        "101": "В демо-режимі цю функцію вимкнено",
        "102": "Неправильне ім'я користувача або пароль",
        "103": "Користувача не активовано",
        "111": "Неправильний обробник",
        "112": "Неправильний метод",
        "201": "Дані не знайдено",
        "202": "Дуже багато точок в області",
        "203": "Пов'язаний елемент видалено",
        "204": "Елемент не знайдено",
        "205": "Неприпустимі параметри",
        "206": "Таке ім'я користувача вже існує",
        "207": "Неприпустима капча",
        "208": "Пристрій заблоковано",
        "209": "Не вдалося надіслати повідомлення",
        "210": "Геокодування не вдалося",
        "211": "Запрошений проміжок часу занадто великий",
        "212": "Запитане обмеження завелике",
        "213": "Пристрій перебуває в автономному режимі",
        "214": "Запитана операція не підтримується пристроєм",
        "215": "Помилка зовнішньої служби",
        "216": "Група не порожня",
        "217": "Список містить неіснуючих юридичних осіб",
        "218": "Неправильний формат зовнішньої служби параметрів",
        "219": "Дію не можна використовувати для клонів",
        "220": "Невідома модель пристрою",
        "221": "Обмеження тарифу:</br>Перевищено ліміт пристроїв.",
        "222": "Плагін не знайдено",
        "223": "Цей телефонний номер вже використовується",
        "224": "Пристрій з цим ідентифікатором вже знаходиться у використанні",
        "225": "Не допускається для цієї правової форми",
        "226": "Неправильний ICCID",
        "227": "Невірний код активації",
        "228": "Не підтримується датчиком",
        "229": "Запитані дані ще не готові",
        "230": "Не підтримується для цього типу сутності",
        "231": "Невідповідність типу сутності",
        "232": "Вхід уже використовується",
        "233": "Немає файлу даних",
        "234": "Неприпустимий формат данних",
        "235": "Відсутні дані калібрування",
        "236": "Функція недоступна через обмеження тарифу",
        "238": "Змінювати тариф заборонено",
        "240": "Не дозволено змінювати тариф занадто часто",
        "242": "Помилка перевірки",
        "251": "Недостатньо коштів",
        "254": "Не вдалося зберегти файл",
        "upload_exeption": "Помилка завантаження файлу",
        "no_hash": "Сеансовий ключ не знайдено",
        "service_not_respond": "Послуга тимчасово недоступна",
        "tracker": {
            "203": "Трекер має застосовані правила",
            "237": "Неприпустимий тариф",
            "238": "Змінювати тариф заборонено",
            "239": "Новий тариф не існує",
            "246": "Хибний користувач",
            "247": "Клон уже існує",
            "249": "Операція доступна лише для клонів",
            "250": "Не можна використовувати для видалених пристроїв",
            "253": "Операція не може бути виконана, трекер має клонів <br>ID Клонів: {0}"
        },
        "tariff": {
            "244": "Тариф з такою назвою вже існує"
        },
        "settings": {
            "225": "Новий пароль має відрізнятися",
            "248": "Неправильний пароль"
        },
        "payment": {
            "201": "Not found in database",
            "242": "There were errors during content validation",
            "246": "Invalid user ID",
            "247": "Entity already exists",
            "259": "Payments count not comply with summary",
            "260": "Payments sum not comply with summary"
        }
    },
    "units_combination_list": {
        "days": "днів|день|днів",
        "hours": "годин|година|годин",
        "minutes": "хвилин|хвилина|хвилин",
        "seconds": "секунд|секунда|секунд",
        "everyminutes": "хвилин|хвилина|хвилин",
        "everyseconds": "секунд|секунда|секунд",
        "meters": "метри|метр|метри",
        "degrees": "градусів|градус|градусів",
        "objects": "об'єкти|об'єкт|об'єкти",
        "years": "роки|рік|роки",
        "months": "місяців|місяць|місяців",
        "codes": "коди|код|коди",
        "trackers": "трекери|трекер|трекери",
        "devices": "пристрої|пристрій|пристрої",
        "entries": "співпадає|матч|співпадає",
        "assets": "assets|asset|assets"
    },
    "units_short": {
        "kilometer": "км",
        "meter": "м",
        "square_kilometer": "кв. км",
        "square_meter": "кв. м",
        "ar": "ar",
        "hectare": "га",
        "kmh": "км / год",
        "hour": "г",
        "minute": "м",
        "second": "c",
        "litres": "l",
        "day": "д",
        "mile": "mi"
    },
    "search": {
        "empty": "Пошук за категорією",
        "btn": "Знайти"
    },
    "list": {
        "edit_tool": "редагувати",
        "create_btn_text": "Створити",
        "empty_text": "Немає даних",
        "search_title_tpl": "{0}: знайдено {1}",
        "search_empty_title_tpl": "{0}: збігів не знайдено",
        "search_title": "Пошук",
        "search_empty_title": "Збігів не знайдено"
    },
    "card": {
        "links": {
            "collapser_tip": "Сховати посилання",
            "collapser_exptip": "Показати посилання"
        },
        "body": {
            "title": "Додаткова інформація:",
            "exptitle": "Додаткова інформація <a>(показати)</a>",
            "collapser_tip": "Приховати додаткову інформацію",
            "collapser_exptip": "Відобразити додаткову інформацію",
            "exptitle_show": "<a>(show)</a>"
        }
    },
    "devices": {
        "tracker": "Трекер",
        "camera": "Камера",
        "socket": "Гніздо"
    },
    "currency": {
        "gbp": "Фунт стерлінгів",
        "brl": "Бразильський реал",
        "huf": "Угорський форинт",
        "hkd": "Гонконґівський долар",
        "dkk": "Данська крона",
        "eur": "Євро",
        "ils": "Ізраїльський новий шекель",
        "inr": "Індійська рупія",
        "idr": "Індонезійська рупія",
        "cad": "Канадський долар",
        "cny": "Юань Женьміньбі",
        "krw": "Південнокорейська вона",
        "myr": "Малайзійський рингіт",
        "mxn": "Мексиканський песо",
        "nzd": "Новозеландський долар",
        "nok": "Норвезька крона",
        "pkr": "Пакистанська рупія",
        "pln": "Злотий",
        "rub": "Російський рубль",
        "sgd": "Сінгапурський долар",
        "usd": "Долар США",
        "twd": "Новий тайванський долар",
        "thb": "Бат",
        "try": "Турецька ліра",
        "php": "Філіппінське песо",
        "czk": "Чеська крона",
        "clp": "Чилійський песо",
        "sek": "Шведська крона",
        "chf": "Швейцарський франк",
        "zar": "Південно-Африканський ранд",
        "jpy": "Японська Єна",
        "kzt": "Казахстанський теньге",
        "byr": "Білоруський рубль",
        "aud": "Австралійський долар",
        "tjs": "Таджицька Сомоні",
        "uah": "Гривня",
        "ltl": "Литовський лит",
        "lvl": "Латвійський лат",
        "kgs": "Кирґизький сом",
        "tmt": "Туркменський манат",
        "uzs": "Узбецький сом",
        "mdl": "Молдовський лей",
        "gel": "Грузинський ларі",
        "amd": "Вірменський драм",
        "azn": "Азербайджанський манат",
        "all": "Albania Lek",
        "afn": "Afghanistan Afghani",
        "ars": "Argentina Peso",
        "awg": "Aruba Guilder",
        "bsd": "Bahamas Dollar",
        "bbd": "Barbados Dollar",
        "bzd": "Belize Dollar",
        "bmd": "Bermuda Dollar",
        "bob": "Bolivia Boliviano",
        "bam": "Bosnia and Herzegovina Convertible Marka",
        "bwp": "Botswana Pula",
        "bgn": "Bulgaria Lev",
        "bnd": "Brunei Darussalam Dollar",
        "khr": "Cambodia Riel",
        "kyd": "Cayman Islands Dollar",
        "cop": "Colombia Peso",
        "crc": "Costa Rica Colon",
        "hrk": "Croatia Kuna",
        "cup": "Cuba Peso",
        "dop": "Dominican Republic Peso",
        "xcd": "East Caribbean Dollar",
        "egp": "Egypt Pound",
        "svc": "El Salvador Colon",
        "eek": "Estonia Kroon",
        "fkp": "Falkland Islands (Malvinas) Pound",
        "fjd": "Fiji Dollar",
        "ghc": "Ghana Cedi",
        "gip": "Gibraltar Pound",
        "gtq": "Guatemala Quetzal",
        "ggp": "Guernsey Pound",
        "gyd": "Guyana Dollar",
        "hnl": "Honduras Lempira",
        "isk": "Iceland Krona",
        "irr": "Iran Rial",
        "imp": "Isle of Man Pound",
        "jmd": "Jamaica Dollar",
        "jep": "Jersey Pound",
        "kpw": "Korea (North) Won",
        "lak": "Laos Kip",
        "lbp": "Lebanon Pound",
        "lrd": "Liberia Dollar",
        "mkd": "Macedonia Denar",
        "mur": "Mauritius Rupee",
        "mnt": "Mongolia Tughrik",
        "mzn": "Mozambique Metical",
        "nad": "Namibia Dollar",
        "npr": "Nepal Rupee",
        "ang": "Netherlands Antilles Guilder",
        "nio": "Nicaragua Cordoba",
        "ngn": "Nigeria Naira",
        "omr": "Oman Rial",
        "pab": "Panama Balboa",
        "pyg": "Paraguay Guarani",
        "pen": "Peru Nuevo Sol",
        "qar": "Qatar Riyal",
        "ron": "Romania New Leu",
        "shp": "Saint Helena Pound",
        "sar": "Saudi Arabia Riyal",
        "rsd": "Serbia Dinar",
        "scr": "Seychelles Rupee",
        "sbd": "Solomon Islands Dollar",
        "sos": "Somalia Shilling",
        "lkr": "Sri Lanka Rupee",
        "srd": "Suriname Dollar",
        "syp": "Syria Pound",
        "ttd": "Trinidad and Tobago Dollar",
        "trl": "Turkey Lira",
        "tvd": "Tuvalu Dollar",
        "uyu": "Uruguay Peso",
        "vef": "Venezuela Bolivar",
        "vnd": "Viet Nam Dong",
        "yer": "Yemen Rial",
        "zwd": "Zimbabwe Dollar",
        "mad": "Moroccan dirham",
        "kwd": "Kuwaiti dinar",
        "bdt": "Bangladeshi taka"
    },
    "maps": {
        "roadmap": "Google roadmap",
        "satellite": "Google satellite",
        "hybrid": "Google hybrid",
        "yandex": "Yandex Maps",
        "yandexpublic": "Yandex Narod Map",
        "cdcom": "ProGorod Maps",
        "osm": "OpenStreet Maps",
        "osmmapnik": "OpenStreet Maps 2",
        "wikimapia": "Wikimapia",
        "navitel": "Navitel Maps",
        "doublegis": "DoubleGis Maps",
        "mailru": "Mail.ru Maps",
        "here": "HERE Maps",
        "bing": "Bing Maps"
    },
    "dealer_info": {
        "first": "всього",
        "last": "з"
    },
    "index": {
        "menu_text": "Головна"
    },
    "users": {
        "menu_text": "Користувачі",
        "create_btn": "Новий користувач",
        "create_form": {
            "title": "Новий користувач",
            "main_fields": "Загальна інформація",
            "contact_fields": "Контактні дані",
            "address_fields": "Адреса",
            "legal_fields": "Інформація юридичної особи",
            "password": "Пароль",
            "password_repeat": "Повторіть пароль",
            "password_mismatched": "Паролі не співпадають",
            "language": "Мова за замовчуванням",
            "time_zone": "Часовий пояс",
            "save_btn": "Створити користувача",
            "clear_btn": "Очистити форму",
            "copy_address": "Копіювати з адреси"
        },
        "edit_form": {
            "title": "Редагувати користувача",
            "save_btn": "Збереження змін",
            "return_btn": "Назад"
        },
        "fields": {
            "creation_date": "Дата реєстрації",
            "login": "Адреса електронної пошти",
            "balance": "Баланс",
            "bonus": "Бонус",
            "first_name": "Ім’я",
            "middle_name": "По батькові",
            "last_name": "Прізвище",
            "activated": "Активовано",
            "activated_t": "Користувач активний",
            "legal_type": "Правовий статус",
            "tin": "TIN",
            "legal_name": "Юридична назва",
            "iec": "IEC",
            "phone": "Номер телефону",
            "post_country": "Країна",
            "post_index": "Поштовий індекс",
            "post_region": "Регіон",
            "post_city": "Місто",
            "post_street_address": "Вулиця, адреса",
            "registered_country": "Країна реєстрації",
            "registered_index": "Поштовий індекс реєстрації",
            "registered_region": "Регіон реєстрації",
            "registered_city": "Місто реєстрації",
            "registered_street_address": "Адреса реєстрації",
            "sole_trader": "Індивідуальний підприємець",
            "legal_entity": "Юридична особа",
            "individual": "Людина",
            "full_name": "Повне ім'я",
            "login_short": "Логін",
            "user_id": "ID",
            "user_id_exp": "Номер користувача",
            "activated_short": {
                "title": "Статус",
                "status_true": "Активний",
                "status_false": "Не активний",
                "status_no": "Active, email not confirmed"
            },
            "registered_short": "юридичні",
            "password": "Новий пароль",
            "password_repeat": "Повторіть новий пароль",
            "password_mismatched": "Паролі не співпадають"
        },
        "password_form": {
            "title": "Зміна пароля користувача",
            "save_btn": "Встановити пароль",
            "return_btn": "Скасувати",
            "success_msg": "Пароль успішно змінено"
        },
        "list": {
            "create_btn_text": "Створити нового користувача",
            "empty_text": "Жодного користувача не знайдено"
        },
        "session_alert": {
            "error": "Не вдалося створити сесії користувача",
            "title": "Код вашої сесії"
        },
        "card": {
            "tab_panel": {
                "trackers": {
                    "title": "Трекери користувача"
                },
                "transactions": {
                    "title": "Транзакції"
                }
            },
            "links": {
                "session_text": "Перейти до моніторингу",
                "user_edit": "Редагувати користувача",
                "user_change_password": "Змінити пароль",
                "transactions": "Транзакції",
                "create_transaction": "Змінити баланс",
                "hash_text": "Get session key"
            }
        },
        "transactions": {
            "list": {
                "empty_text": "Транзакцій не знайдено",
                "title": "Транзакції для користувача"
            },
            "fields": {
                "description": "Операція",
                "type": "Тип операції",
                "subtype": "Підтип",
                "date": "Дата",
                "amount": "Сума",
                "old_balance": "Старий",
                "new_balance": "Новий",
                "type_set": {
                    "main_charge": "підписка",
                    "payment": "оплата",
                    "tariff_charge": "телекомунікаційні послуги",
                    "bonus_charge": "бонусне поповнення"
                },
                "subtype_set": {
                    "monthly": "щомісяця",
                    "partner": "від партнера",
                    "activeday": "активний день",
                    "everyday": "щомісячно по дням",
                    "sms": "SMS message"
                }
            }
        },
        "transaction_add": {
            "title": "Зміна балансу (додавання транзакції) користувачів",
            "description": "Опис транзакції",
            "balance": "Зміни балансу",
            "bonus": "Зміни бонуса",
            "value_sup": "* - розмір яких змінить поточне значення, може бути від'ємним"
        },
        "combo_empty": "Виберіть користувача",
        "select_error": "Трекер або його клон вже прив'язано до вибраного користувача",
        "select": {
            "title": "Виберіть користувача"
        },
        "session_hash": {
            "title": "User session key"
        }
    },
    "trackers": {
        "menu_text": "Трекери",
        "fields": {
            "tracker_id": "ID",
            "label": "Назва",
            "model": "Модель",
            "phone": "Телефон",
            "device_id": "Ідентифікатор пристрою",
            "creation_date": "Дата реєстрації",
            "creation_date_short": "Зареєстровано",
            "connection_status": "Статус",
            "tracker_id_exp": "Номер трекера",
            "phone_exp": "Номер телефону",
            "owner": "Власник трекера",
            "tariff": "Тариф трекера",
            "deleted": "Позначено як видалені",
            "blocked": "Службу призупинено",
            "user_id": "ID користувача",
            "clone": "Клон",
            "clone_owner": "Власник клона",
            "options": {
                "clone": "клон",
                "deleted": "видалено",
                "blocked": "заблоковано"
            },
            "statuses": {
                "active": "Онлайн",
                "signal_lost": "Обрив зв'язку",
                "offline": "В автономному режимі",
                "just_registered": "Щойно зареєстровано",
                "idle": "GPS не оновлено"
            }
        },
        "edit_form": {
            "main_fields": "Основна інформація",
            "title": "Редагувати трекер",
            "save_btn": "Збереження змін",
            "return_btn": "Назад"
        },
        "clone_form": {
            "title": "Зробити клон трекера",
            "remove_failure_msg": "Видалення клона не вдалося",
            "failure_msg": "Створення клону не вдалося",
            "remove_confirm": "Видалити клона"
        },
        "group_clone_form": {
            "title": "Клонування групи трекерів",
            "save_btn": "Клон",
            "grid_clone_label": "Клони буде додано",
            "grid_clone_tip": "Ви можете змінити етикетку клону, двічі клацнувши по ньому у списку"
        },
        "group_owner_form": {
            "title": "Зміна власника для групи трекерів",
            "save_btn": "Зміна власника",
            "grid_clone_label": "Трекери буде змінено"
        },
        "tariff_form": {
            "title": "Змінити тарифний план трекера",
            "save_btn": "Збереження змін",
            "repay": "Repay remainder of current tariff payment",
            "charge": "Charge user now (according to the new plan)",
            "charge_sup": "тільки для тарифних планів з оплатою помісячно",
            "tariff_invalid": "має відрізнятися від поточного"
        },
        "list": {
            "create_btn_text": "Створити новий трекер",
            "owner_btn": "Зміна власника",
            "clone_btn": "Клон",
            "edit_btn": "Змінити вибране",
            "empty_text": "Не знайдено індикаторів",
            "after_clone_success": "Клоновані: {0}",
            "after_clone_failure": "Клоновано: {0}, {1} клонувати не вдалося",
            "after_owner_success": "Змінено: {0}",
            "after_owner_failure": "Змінено: {0}, {1} змінити не вдалось",
            "select_req": "Виберіть трекери зі списку",
            "select_clone_req": "Клонів обрано,  групові операції не можуть бути виконані"
        },
        "card": {
            "links": {
                "change_tracker_user": "Зміна власника",
                "tracker_edit": "Редагувати трекер",
                "tracker_tariff_edit": "Змінити тариф",
                "tracker_clone_create": "Створити клон цього трекера",
                "tracker_clone_remove": "Видалити цей клон",
                "tracker_tariff": "Тариф трекера",
                "tracker_owner": "Власник трекера",
                "tracker_console": "GPRS-термінал",
                "tracker_corrupt": "Скасування реєстрації"
            }
        },
        "console": {
            "title": "GPRS-термінал для трекера",
            "connect_btn": "Почати підключення",
            "disconnect_btn": "Тісний зв'язок",
            "auto_scroll": "Автоматичне прокручування",
            "clear": "Очистити консоль",
            "send_btn": "Надіслати",
            "send_empty": "Введіть команду",
            "loading": "Підключення до пристрою",
            "connect_init": "З'єднання встановлене",
            "show_time": "Показати час повідомлення",
            "show_status": "Показувати стан",
            "disconnect_msg": "Зв'язок розірвано",
            "connect_msg": "З'єднання встановлене",
            "error_msg": "Помилка підключення до пристрою",
            "connection_failure": "Не вдалося підключитися до пристрою",
            "close_question": "Тісний зв'язок?",
            "status_title": "Статус пристрою",
            "status_property_title": "Статус",
            "status_value_title": "Значення"
        },
        "corrupt": {
            "alert": {
                "title": "Видалити реєстрацію трекера?",
                "text": "Пристрій, буде остаточно видалено з бази даних, усі дані будуть не доступні!<br><br>, Ви дійсно бажаєте видалити реєстрацію?"
            },
            "success_msg": "Пристрій {0} успішно видалено"
        }
    },
    "tariffs": {
        "menu_text": "Тарифи",
        "create_form": {
            "title": "Створити новий тариф",
            "main_fields": "Основна інформація",
            "save_btn": "Створити тариф",
            "clear_btn": "Очистити форму",
            "options_fields": "Тарифні опції",
            "prices_fields": "Ціни тарифу"
        },
        "edit_form": {
            "title": "Редагувати тариф",
            "save_btn": "Збереження змін"
        },
        "default_form": {
            "title": "Налаштування тарифу за замовчуванням"
        },
        "fields": {
            "tariff_id": "ID",
            "name": "Label",
            "group_id": "Група",
            "price": "Щомісячний платіж",
            "device_limit": "Ліміт пристроїв",
            "device_type": "Тип пристрою",
            "store_period": "Період історії зберігання",
            "active": "Доступні для користувача",
            "has_reports": "Табличні звіти доступні",
            "proportional_charge": "Абонентська плата за неповний місяць пропорційно кількості днів, які треба списати",
            "incoming_sms": "Вхідні SMS",
            "outgoing_sms": "Вихідні SMS",
            "service_sms": "Послуга SMS",
            "phone_call": "Телефонні дзвінки",
            "traffic": "GPRS rate (per Mb)",
            "default_tariff": "тариф за замовчуванням для пристроїв типу «{0}»",
            "default_short": "за замовчуванням",
            "service_price": "сума, яка сплачується за користування послугою",
            "group_id_exp": "Тарифна група",
            "active_exp": "Користувач може перейти на цей тариф самостійно",
            "device_limit_exp": "Maximum devices",
            "activation_bonus": "Бонус активації",
            "free_days": "Number of free days",
            "tariff_type": "Платіжний цикл",
            "tariff_type_short": "Оплата",
            "rate": "Rate",
            "users_price": "Price for users",
            "client_costs": "Your costs",
            "plan_options": "Plan options",
            "plan_availability": "Plan availability",
            "available_maps": "Available maps",
            "available_features": "Available features",
            "default_name": "My plan",
            "tariff_is_default": "Use this plan as default"
        },
        "list": {
            "create_btn_text": "Додати новий тариф",
            "empty_text": "Тарифи не знайдено"
        },
        "card": {
            "links": {
                "make_default": "Позначити як за замовчуванням",
                "tariff_edit": "Редагувати тариф"
            },
            "tab_panel": {
                "trackers": {
                    "title": "Трекери цього тарифу"
                }
            },
            "edit_form_btn": "Edit plan",
            "create_form_btn": "Create plan",
            "add_form_btn": "Add new plan",
            "save_form_btn": "Save plan",
            "currency_in": "(in {0})",
            "features": {
                "groups": {
                    "apps": "Apps",
                    "features": "Features",
                    "misc": "Miscellaneous"
                }
            },
            "hints": {
                "2": "Messages sent with user’s consent or by his request. These SMS are sent from the service platform to users and devices through the SMS gateway you defined.<br /><br />Particular use cases:<br /> – Notifications about geo-based events your users want to stay aware of<br /> – M2M commands to those devices which can be configured over SMS channel only (e.g. device configuration, output change), as well as manual location request via SMS (for models which support such feature).",
                "3": "Service and maintenance SMS commands which are sent from the platform to devices, normally without any special approvement from user. For example, they are used for automatic device activation – to deliver initialization SMS commands (APN, server address, etc.), or when your support team performs remote device diagnostics.",
                "4": "If you use Navixy SIM cards in devices, you can additionally charge users for incoming SMS messages from these SIM cards (e.g. confirmations from devices about accomplishing the commands).",
                "5": "If you use Navixy SIM-cards in devices, you can set up a fee for the its usage based on traffic volume (traffic in both directions is billed).",
                "6": "User notifications by automatic phone calls are currently supported in some regions and in limited languages only.",
                "7": "If user reaches the limit, he will not be able to add or track more assets in his account. In case user has assets on different plans, the minimum value will be applied.",
                "8": "The system logs and stores data (about trips, events, etc.) within set time span relative to the current date only. If you extend the time span, the older logs might not be available.",
                "9": "Select maps available for user if he tracks assets on the current plan. The list of all available maps is defined by the preferences for your service.",
                "10": "Select options which are available for users who have assets on this plan.",
                "11": "Select options which are available for users who have assets on this plan.",
                "12": "The price user pays to you as a service provider. The billing system uses the currency you defined in Account settings.<br /><br />If you see “N/A” instead of value, it means that service is not offered or cannot be billed by the billing system.",
                "13": "The price you pay for services provided to you by Navixy. If you see “N/A” instead of value, it means that service is not offered (not ordered or unavailable).",
                "14": "This plan will be used by default when user activates a new device. Note: this setting will be overridden by the plan defined in the activation code parameters.",
                "15": "Integer number (0, 1, 2, …) of the group to which this plan belongs to.",
                "16": "Mark the checkbox if you allow users to switch their devices to this plan (from other plans within the same group) by their own.",
                "17": "The plan will be set by default for all devices added by user, if no activation code used.<br /><br />When user enters an activation code its parameters are used as primary.",
                "18": "Amount of complimentary days user gets after adding a device (including the day when device was added).",
                "19": "Amount of money complimentary charged to user’s balance after he adds a new device.<br /><br />It can’t be used for general service fee payments, but only for additional services, e.g. SMS notifications.",
                "20": "If the checkbox is marked, user will be charged proportionally to the amount of days left from the date of last payment till the end of the current month.<br /><br />If the checkbox is cleared, user will be always charged a full monthly fee after the service for the device has been renewed. For example, if user failed to pay on time and filled up his balance on the 10th day, he will be charged for the full month anyway.",
                "plan_options": "<b>Notice about plans compatibility.</b> If there are assets on different plans within same user account, some maps and options (which are not included into all plans) might become unavailable for that user. You can avoid such a collision by nesting similar plans into groups, thus making impossible for users to have devices on incompatible plans. We consider that is the only possible way to offer your flexible configuration of your plans and, at the same time, not giving your users the opportunity to cheat with your pricing.",
                "plan_availability": "By combining plans into groups you can organize your plans better and allow your users to switch between plans on their own. While you can assign any plan for any asset in the Admin panel, your users are able to switch only to the plans that are marked with appropriate checkbox."
            }
        },
        "combo_empty": "Виберіть тариф",
        "select_error": "Цей тариф не доступний",
        "select": {
            "title": "Вибрати тариф"
        },
        "types": {
            "activeday": "Щоденні",
            "monthly": "Щомісяця",
            "everyday": "Щомісяця (щоденний дебет)"
        },
        "price_type": {
            "monthly": "Щомісячна абонентська плата",
            "activeday": "Щоденна плата",
            "everyday": "Щомісячна абонентська плата"
        }
    },
    "codes": {
        "menu_text": "Коди активації",
        "fields": {
            "activated": "статус",
            "activation_date": "Дата активації",
            "bonus_amount": "Бонус",
            "code": "код",
            "device_id": "Ідентифікатор пристрою",
            "device_type": "Тип пристрою",
            "free_days": "Вільні дні",
            "money_amount": "Кількість",
            "tariff_id": "ID тарифу",
            "tariff_name": "Тариф",
            "status": {
                "activated": "активовано",
                "no_activated": "не активовано"
            }
        },
        "edit_form": {
            "title": "Редагувати коди активації",
            "save_btn": "Збереження змін",
            "selected_count": "Вибрані коди",
            "device_type": "Коди, вибрані для пристроїв"
        },
        "create_form": {
            "title": "Створити коди активації",
            "save_btn": "Створити коди",
            "new_codes_count": "Кількість нових кодів"
        },
        "list": {
            "empty_text": "Не знайдено кодів активації",
            "create_btn": "Створити новий",
            "edit_btn": "Змінити вибране",
            "reload_btn": "Перезавантажити",
            "after_create_success": "Створено: {0}",
            "after_edit_success": "Зміни: {0}",
            "after_edit_failure": "Змінено: {0}, {1} змінити не вдалось",
            "select_req": "Вибрати коди зі списку",
            "same_type_req": "Необхідно вказати коди пристрою одного типу",
            "edited_tip": "змінено",
            "filters": {
                "activated": "Активовано",
                "no_activated": "Не активовано",
                "trackers": "Трекери",
                "cameras": "Камери",
                "sockets": "Розетки",
                "toggle_all": "Показати всі"
            },
            "faq_link": "https://www.navixy.com/docs/admin-panel-docs/activation-codes/ ",
            "faq_text": "Activation codes FAQ"
        }
    },
    "settings": {
        "menu_text": "Налаштування",
        "fields": {
            "service_title": "Назва послуги",
            "page_title": "Заголовок сторінки",
            "locale": "Мова моніторінгу",
            "demo_login": "Демо користувач",
            "demo_password": "Демо пароль",
            "maps_title": "Доступні карти",
            "maps_default": {
                "type": "Карта за умовчанням",
                "location_lat": "Широта за замовчуванням",
                "location_lng": "Довгота за замовчуванням",
                "zoom": "Зум за замовчуванням"
            },
            "google_client_id": "ID клієнта для google maps",
            "currency": "Валюти для користувачів",
            "payment_link": "URL платіжної системи",
            "promo_url": "URL промо-сайту",
            "domain": "Домен",
            "email_from": "Електронна пошта відправника",
            "email_special": "Email for alerts",
            "email_footer": "Підвал Email",
            "sms_originator": "Автор SMS",
            "caller_id": "Відправник голосового повідомлення",
            "password": "Новий пароль",
            "password_repeat": "Повторіть новий пароль",
            "password_old": "Поточний пароль",
            "password_mismatched": "Паролі не співпадають",
            "footer_email": "Електронна пошта компанії",
            "footer_site": "Посилання «Про нас»",
            "footer_text": "Текст у нижній частині сторінки",
            "geocoder": "Геокодер за замовчуванням",
            "measurement_system": "Cистема заходів",
            "route_provider": "Постачальник типового маршруту",
            "translit": "Транслітерація SMS-повідомлень",
            "payment_description": "Payment options and terms",
            "support_email": "Email for customers support",
            "alerts_email": "Email for important alerts and invoices",
            "time_zone": "Time zone",
            "service_title_ph": "marketing name",
            "service_title_hint": "Used at the login page, in browser tab and in other places",
            "footer_text_ph": "Some text you want to add into the footer of the login page",
            "footer_text_hint": "Custom text for the footer of the login page, links to privacy policy, etc. Links starting with http: and mailto: will be active. Use plain text only, HTML tags are not supported.",
            "promo_url_ph": "http://www.company.com",
            "promo_url_hint": "Your company’s website, starting with http://. If set, this link is used for \"About\" at the login page.",
            "favicon_hint": "Icon will be shown in browser’s tab. (The feature is not supported in Internet Explorer.)",
            "logo_hint": "The logo is shown at the login page, in PDF-reports and Email notifications to users.",
            "login_wallpaper_hint": "Upload attractive background image at the login page of your service",
            "domain_ph": ".navixy.com",
            "domain_hint": "Launch and run your service on your own domain name (e.g.: tracking.company.com). Before configuring a custom domain here, you need to setup an appropriate CNAME-record on your DNS server and point it to saas.navixy.com.",
            "domain_help": "How do I set up a CNAME-record",
            "domain_help_link": "https://www.navixy.com/docs/admin-panel-docs/settings/domain-name/",
            "locale_hint": "The language used by default for all new user accounts. User can also change the preferred language in his account settings.",
            "currency_hint": "Choose the currency which is commonly used in your region. The system will bill your users in this currency and according to the service plans you set up.",
            "allow_registration": "Allow users to create accounts",
            "allow_registration_hint": "By checking this checkbox you allow users to create user accounts on their own – from the login page and with mobile apps. If the checkbox is disabled, you will able to create new user accounts from this Admin Panel only (and with Admin Panel API).",
            "show_mobile_apps_hint": "If this checkbox is marked, the buttons for mobile apps downloading will be visible at the login page. Regardless this checkbox users will be able to use mobile version of the web interface.",
            "measurement_system_hint": "All physical quantities (length, weight, volume, etc.) will be represented in chosen measurement system.",
            "time_zone_hint": "The most typical time zone for your users.",
            "translit_hint": "Transliteration allow to reduce the amount of symbols in SMS by replacing the symbols of national alphabet with the closest latin ones.",
            "geocoder_hint": "The service which transforms the address to coordinates and versa.",
            "route_provider_hint": "The service for finding optimal directions between start place and destinations.",
            "geolocation": "Cell ID geolocation",
            "geolocation_hint": "Backup geolocation via cellular base stations allows to acquire approximate location of the assets, when signals of satellite navigation systems can not be received (i.e. in the underground parking, in the subway).",
            "speed_restriction": "Speed limits",
            "speed_restriction_hint": "Service allows to detect speed limits violations according to traffic regulations and road signs. The speed limit data accuracy is not guaranteed, however; the data may be estimated, incomplete or outdated.",
            "roads_snap": "Snap to roads",
            "roads_snap_hint": "Service visually improves the tracks received from GPS devices to the most likely roads the vehicle was traveling along. It helps to draw paths that smoothly follow the geometry of the road.",
            "daily_reports_ph": "email1@company.com,email2@company.com,...",
            "newsletters": "Newsletters",
            "newsletters_hint": "Emails for newsletters and important updates. Use comma to separate multiple addresses.",
            "daily_reports": "Daily reports",
            "daily_reports_hint": "Emails for daily reports about the revenues. Use comma to separate multiple addresses.",
            "invoices": "Invoices",
            "invoices_hint": "Emails for invoices and accounting documents. Use comma to separate multiple addresses.",
            "demo_login_ph": "login",
            "demo_password_ph": "password",
            "sms_gateway": "SMS Gateway",
            "sms_gateway_ph": "SMS Gateway not selected",
            "sms_gateway_hint": "Select the SMS gateway you use. You need to have an appropriate account and provide credentials for the secure connection with that gateway.",
            "sms_sender_id": "Sender ID",
            "sms_sender_id_ph": "Example: Navixy",
            "sms_sender_id_hint": "It is highly recommended to use the number your lease for inbound messages as a Sender ID. In this case the service platform will be able to receive SMS from devices replies with the command confirmations and other valued data.",
            "user_sms_gateway": "SMS Gateway",
            "user_sms_gateway_ph": "SMS Gateway not selected",
            "user_sms_gateway_hint": "Select the SMS gateway you use. You need to have an appropriate account and provide credentials for the secure connection with that gateway.",
            "user_sms_sender_id": "Sender ID",
            "user_sms_sender_id_ph": "Example: Navixy",
            "user_sms_sender_id_hint": "Numeric or alpha-numeric sender identificator that an SMS appears to come from (‘from address’) when users receive a message on his phone. Most commonly it is the number you lease for inbound messages or your service marketing name.<br />Special requirements can be applied by local laws and regulations to avoid spam. Please ensure that the Sender ID you entered meets these requirements, otherwise SMS messaging service might not work properly.",
            "user_sms_inbound": "Number for inbound messages",
            "user_sms_inbound_ph": "Example: 12162780905",
            "user_sms_inbound_hint": "Numeric or alpha-numeric sender identificator that an SMS appears to come from (‘from address’) when users receive a message on his phone. Most commonly it is the number you lease for inbound messages or your service marketing name.<br /><br />Special requirements can be applied by local laws and regulations to avoid spam. Please ensure that the Sender ID you entered meets these requirements, otherwise SMS messaging service might not work properly.",
            "not_editable": "not editable",
            "sms_inbound": "Number for inbound messages",
            "sms_inbound_ph": "Example: 12162780905",
            "sms_inbound_hint": "We do not recommend, but you can also use another numeric or alpha-numeric Sender ID. However, in this case it is likely that platform will not be able to receive any SMS from devices. Please also note that special requirements can be applied by national laws and regulations to avoid spam. Make sure that the Sender ID you entered meets these requirements, otherwise SMS messaging service might not work properly.",
            "monitoring_logo_hint": "Additional logo that is shown in the user web interface (above menu)",
            "display_model_features_link": "Show a link to a website with information about the model",
            "display_model_features_link_hint": "User can be provided with additional information about the model of the device activated",
            "show_call_notifications": "Allow configuration of voice notifications",
            "monitoring_logo_clickable": "Click on the logo in the interface opens a promo web-site"
        },
        "edit_form": {
            "title": "Параметри служби",
            "save_btn": "Зберегти",
            "save_msg": "Налаштування збережено успішно",
            "main_fields": "Основні налаштування",
            "map_fields": "Налаштування карти",
            "permission_fields": "Налаштування повідомлень",
            "domain_sup": "* - для доменів як *{0} обмежено доступні типи карт",
            "custom_fields": "Налаштування",
            "main_buttons_title": "Відображення кнопок",
            "show_mobile_apps": "Відображати кнопки для завантаження мобільних додатків",
            "allow_registration": "Дозволити користувачеві самостійно реєструватися",
            "main_texts_title": "Основні тексти",
            "footer_texts_title": "Текст у підвалі логін-сторінки",
            "logo_title": "Логотип",
            "favicon_title": "Favicon",
            "login_wallpaper_title": "Авторизація фону сторінки",
            "desktop_wallpaper_title": "Фон сторінки послуг",
            "upload_btn": "Завантажити",
            "update_btn": "Змінити",
            "remove_btn": "Видалити",
            "upload_loading": "Завантажити зображення",
            "domain_fields": "Домен",
            "regional_fields": "Регіональні параметри",
            "maps_fields": "Карти",
            "demo_fields": "Демо користувач",
            "notifications_fields": "Сповіщення",
            "password_fields": "Зміна пароля",
            "pass_hint": "Зміни в інших закладках не буде збережено",
            "pass_save_msg": "Пароль успішно змінено",
            "pass_save_btn": "Зміна пароля",
            "maps_hint": "Будь ласка, визначьте карти, які будуть доступні для клієнтів вашої служби. Список карт для конкретних користувачів може бути обмежений налаштуваннями їх тарифних планів.<br><br>Права на використання картографічних сервісів, що ви вибрали повинні бути надані вам їх правовласниками. NAVIXY не несе відповідальності за будь-яке порушення умов ліцензії вами або вашими кінцевими користувачами.",
            "demo_hint": "Виберіть обліковий запис користувача, який буде використовуватися для демонстраційних цілей і буде доступним на сторонці входа в систему (опціонально)",
            "user_notifications_title": "Notifications to users",
            "user_notifications_hint": "Settings for notifications from your tracking system to users: about geo-events, low balance, password recovering, etc.",
            "special_notifications_title": "Notifications to administrators",
            "special_notifications_hint": "System notifications to administrators about service status, statistics and other",
            "defaults_fields": "User default settings",
            "defaults_hint": "Settings in this section will be automatically applied to all new users",
            "branding_fields": "Branding",
            "branding_main_title": "Branding main settings",
            "branding_img_title": "Images and logo",
            "branding_contacts_title": "Contact information for users",
            "service_fields": "Service preferences",
            "service_links_title": "Domain and URLs",
            "service_regional_title": "Regional settings",
            "service_login_title": "Login page",
            "service_maps_title": "Maps",
            "service_maps_defaults_title": "Map default settings",
            "service_additional_title": "Email notifications",
            "accounts_fields": "User defaults",
            "accounts_regional_title": "Regional settings",
            "accounts_geocoding_title": "Cartography and databases",
            "account_info": "These user profile settings will be applied for every new user account. When it is required, users can change default settings in their accounts themselves.",
            "account_roads_title": "Roads",
            "emails_fields": "Email messages",
            "emails_main_title": "Main settings",
            "emails_main_info": "Settings for sending Emails to users about geo based events, low balance warnings, etc.",
            "sms_fields": "SMS messages",
            "sms_main_title": "Main settings",
            "sms_main_info": "Configure SMS messages and SMS gateways which are used for bi-directional communication between service platform and users, service platform and devices.<br>You can use same or different gateways to deliver messages to users and devices.",
            "sms_m2m_title": "M2M messages",
            "sms_m2m_info": "M2M message exchange between service platform and devices through SMS channel plays important role for simple device activation and remote management.<br /><br />            SMS channel is used for the following purposes:<br /><ul><li>initial automatic device configuration (APN, server address, etc.) of majority devices</li><li>receiving confirmations from devices about command accomplishing</li><li>as a backup channel to locate assets when GPRS is not available (low signal, international roaming, etc.)</li><li>for models which support such a feature</li></ul><br />.Furthermore, for those budget models which do not offer the possibility to control them remotely over GPRS/IP protocol, their settings change and output control is also performed via SMS channel.",
            "sms_user_title": "User notifications",
            "sms_user_info": "The service platform can deliver SMS notifications to users about geo-based events they want to stay aware of. Besides, the platform can also provide a special phone number, to which users can send SMS commands from their trusted phone numbers (command examples: ‘?’ – acquire location, ‘ON 1’ – enable device output).",
            "branding_main_info": "Configure the appearance of your service, using your company’s brand names, marketing attributes and other customization options.",
            "service_info": "Define the preferences of your service.",
            "maps_defaults_hint": "Choose the map and its options, which will be used when user logins the Web-interface for the first time.",
            "service_maps_preview": "Map default settings preview",
            "service_maps_preview_info": "You an example of the initial display of the map view on the user interface. You can change center of the map by moving the marker and zoom by using tool or by using the mouse wheel on the map.",
            "map_edit_btn": "Visual editor",
            "map_window": {
                "title": "Map default settings – Visual editor",
                "header": "Choose default map center by moving the crosshair with your mouse. To select default map zoom use the scroll wheel or zoom in / out buttons.",
                "save_btn": "Choose"
            },
            "clear_btn": "Reset",
            "monitoring_logo_title": "User interface logo",
            "misc_header": "Optional features"
        },
        "upload_form": {
            "save_btn": "Завантажити",
            "cancel_btn": "Скасувати",
            "upload_btn": "Вид",
            "title": "Завантажити зображення. {0}",
            "titles": {
                "logo": "Логотип",
                "favicon": "Favicon",
                "login_wallpaper": "Шпалери сторінки логіна",
                "desktop_wallpaper": "Шпалери сервісної сторінки",
                "monitoring_logo": "Additional logo"
            },
            "tips": {
                "logo": "Рекомендується завантажити горизонтально орієнтоване зображення з прозорим фоном і шириною не менше 200 точок.",
                "favicon": "Рекомендовано завантажувати зображення з прозорим фоном і мінімальним дозволом 32x32 пікселі.",
                "login_wallpaper": "Рекомендується завантажити фонові рисунки з роздільною здатністю не менше 1920х1080 пікселів (FullHD) формат JPEG.",
                "monitoring_logo": "It is recommended to use the logo image with the transparent background (PNG) and minimal width of 200px."
            },
            "img_title": "Зображення формату {0} (максимальний розмір {1} МБ)",
            "error_text": "Не вдалося завантажити зображення"
        },
        "subscription": {
            "activation_btn_text": "Pay activation fee now (500 USD) online",
            "monthly_fee_btn_text": "Pay online",
            "activation_hint": "You are evaluating Navixy ServerMate trial version (till {0}). To continue with the commercial version please choose your subscription options and proceed with the activation payment:",
            "monthly_fee_hint": "Review your subscription’s balance and add funds here. We thank you for your timely payments. To avoid the automatic disruption of your subscription please always close your bills within 10 days after you received the invoice for the previous month.",
            "license_balance": "Pending amount {0}",
            "subscription_hint": "To complete the online payment you will be redirected to our payment gateway’s secure web page. You can use various payment options there. Once the payment is confirmed, your funds will be automatically added to your ServerMate account. For any questions please contact us by email accounting@navixy.com",
            "pending_amount": "Pending amount: {0}",
            "current_balance": "Current balance: {0}",
            "payment_recieved_msg": "Your payment was successfully executed and will be processed shortly.",
            "waiting_activation_fee": "Your payment was successfully executed and will be processed shortly."
        },
        "sms_gateway": {
            "navixy": {
                "name": "Navixy",
                "desc": "SMS-service, provided to you by Navixy for free while you are using Trial version."
            },
            "nexmo": {
                "name": "Nexmo",
                "desc": "One of the most popular services in the world (<a href=\"http://www.nexmo.com\" target=\"blank\">www.nexmo.com</a>)",
                "credentials": {
                    "key": "Key",
                    "secret": "Secret"
                }
            },
            "twilio": {
                "name": "Twilio",
                "desc": "One of the most popular services in the world (<a href=\"http://www.twilio.com\" target=\"blank\">www.twilio.com</a>)",
                "credentials": {
                    "sid": "Account SID",
                    "token": "Auth token"
                }
            },
            "smstraffic": {
                "name": "SMSTraffic",
                "desc": "The service provided by SMSTraffic company (<a href=\"http://www.smstraffic.ru\" target=\"blank\">www.smstraffic.ru</a>)",
                "credentials": {
                    "login": "Login",
                    "password": "Password"
                }
            },
            "yaestar": {
                "name": "Yaestar NeoGate",
                "desc": "Hardware gateway, which you can purchase and install locally (<a href=\"http://www.yeastar.com\" target=\"blank\">www.yeastar.com</a>)",
                "credentials": {
                    "ip": "Server IP",
                    "port": "Port",
                    "login": "Login",
                    "password": "Password"
                }
            },
            "smpp": {
                "name": "SMPP v.3.4",
                "desc": "Common industrial standard for communication with SMS Gateways (<a href=\"https://en.wikipedia.org/wiki/Short_Message_Peer-to-Peer\" target=\"blank\">Wikipedia</a>)",
                "credentials": {
                    "ip": "Server IP",
                    "port": "Port",
                    "login": "Login (System ID)",
                    "password": "Password",
                    "source": "Source TON/NPI",
                    "source_select": {
                        "0": "Unknown",
                        "1": "International",
                        "2": "National",
                        "3": "Network Specific",
                        "4": "Subscriber Number",
                        "5": "Abbreviated",
                        "6": "Alphanumeric",
                        "7": "Reserved",
                        "-1": "Auto"
                    },
                    "destination": "Destination TON/NPI",
                    "destination_select": {
                        "0": "Unknown",
                        "1": "ISDN/telephone numbering plan (E163/E164)",
                        "3": "Data numbering plan (X.121)",
                        "4": "Telex numbering plan (F.69)",
                        "6": "Land Mobile (E.212)",
                        "8": "National numbering plan",
                        "9": "Private numbering plan",
                        "10": "ERMES numbering plan (ETSI DE/PS 3 01-3)",
                        "13": "Internet (IP)",
                        "18": "WAP Client Id (to be defined by WAP Forum)"
                    },
                    "charset": "Default charset",
                    "charset_select": {
                        "GSM8": "GSM8",
                        "GSM7": "GSM7",
                        "ISO-8859-1": "ISO-8859-1",
                        "ISO-8859-15": "ISO-8859-15",
                        "UTF-8": "UTF-8",
                        "UCS-2": "UCS-2"
                    },
                    "long": "Long messages",
                    "long_select": {
                        "UDH": "UDH",
                        "Payload": "Payload"
                    }
                }
            }
        }
    },
    "accounting": {
        "menu_text": "Бухгалтерський облік",
        "report_msg": {
            "title": "Підтвердіть електронну розсилку",
            "text": "Оповіщення клієнтів про експорт даних до 1С для <b>{0}</b>.<br>Ви впевнені, що ви хочете зробити <b>Email- розсилку</b>?"
        },
        "form": {
            "title": "«1С: підприємство» експортування даних",
            "export1c": {
                "tab_title": "Бухгалтерський облік",
                "save_btn": "Отримати 1С файл даних",
                "report_btn": "Відправити справи по електронній пошті",
                "fields": {
                    "month": "Виберіть місяць",
                    "last_act": "Номер останньої справи"
                }
            },
            "payments": {
                "tab_title": "Платежі",
                "save_btn": "Отримати 1С файл даних",
                "fields": {
                    "date": "Інтервал часу",
                    "type": "Платіжна система"
                },
                "ps": {
                    "default": "Все перераховане вище",
                    "cyberplat": "CyberPlat",
                    "deltapay": "DeltaPay",
                    "mobile": "Мобільний",
                    "mobimoney": "Mobi.Money",
                    "rbkmoney": "RBK Money",
                    "webmoney": "WebMoney",
                    "sberbank": "Sberbank"
                }
            }
        },
        "report_success": "Email-newsletter successful"
    },
    "main_copyright": "© 2015 RusLink. Всі права захищені.",
    "payments": {
        "menu_text": "Payments",
        "import_sberbank": {
            "title": "Sberbank payments import",
            "save_btn": "Import payments",
            "upload_btn": "View",
            "upload_loading": "Uploading file",
            "error_text": "Failed to import payments",
            "fields": {
                "file_title": "Import file of format {0} (maximal size {1} Mb)"
            },
            "errors": {
                "242": "Line {0}, column {1}, description:<br><i>{2}</i>"
            },
            "success_msg": "Sberbank payments successfully imported",
            "success_dsc": "Date of registry: <b>{0}</b><br>Count of loaded payments: <b>{1}</b><br>Sum of loaded payments: <b>{2}</b>"
        }
    },
    "bundles": {
        "menu_text": "Package contents",
        "title": "Working with sets of equipment",
        "menu": {
            "list": "A list of sets",
            "scan": "Linking the SIM card to the beacon",
            "shipping": "Shipping",
            "import": "Import"
        },
        "fields": {
            "id": "ID",
            "model_code": "Model",
            "imei": "IMEI",
            "iccid": "ICCID",
            "sim_card": "SIM card",
            "assign_time": "Date",
            "phone": "Phone",
            "apn": "APN",
            "order_id": "The order number"
        },
        "list": {
            "scan_btn_text": "Snap beacons",
            "empty_text": "No kits",
            "unassign": "detach from order",
            "unassign_q": "Do you want to remove the complete<br>c IMEI-code \"{0}\" out of order?"
        },
        "shipping": {
            "search_btn": "Search",
            "steps": {
                "first": {
                    "title": "The order search"
                },
                "second": {
                    "title": "The addition of retro fit kits to order"
                }
            },
            "hints": {
                "ready_for_search": "Please enter the order number.",
                "order_search_failure": "Error. Order number \"{0}\" not found.",
                "order_found": "Order number \"{0}\" was found.",
                "imei_same_order": "Error. Set your phone's IMEI code \"{0}\" is already attached to the current order.",
                "imei_order_set": "Attention! Set your phone's IMEI code \"{0}\" is already assigned to the order number \"{1}\".",
                "imei_reset_q": "Do you want perinatality set on the current order?",
                "imei_reset_btn": "Reassign",
                "bundle_asssigned": "Set your phone's IMEI code \"{0}\" was successfully added to the order of \"{1}\".",
                "bundle_asssign_failure": "Error. Set your phone's IMEI code \"{0}\" could not be added to the order \"{1}\"."
            },
            "fields": {
                "id": "The order number",
                "user_id": "The user number",
                "sum": "Order amount",
                "payer": "Payer",
                "recipient": "The recipient",
                "contacts": "Contacts",
                "place": "Address",
                "comment": "Comment",
                "creation_time": "Creation time",
                "status": "Status"
            }
        },
        "scan": {
            "clear_form": "To start over",
            "to_list": "A list of sets",
            "steps": {
                "first": {
                    "title": "Scan the IMEI code of the device"
                },
                "second": {
                    "title": "Installation ICCID code device"
                }
            },
            "fields": {
                "title": "Information about the kit",
                "title_add": "The SIM card is already linked!",
                "title_add_changed": "The SIM card is changed",
                "equip_add_changed": "The kit changed",
                "id": "Room set",
                "imei": "IMEI",
                "iccid": "ICCID",
                "model_code": "The model",
                "equip_id": "Code kit",
                "order_id": "The order number",
                "assign_time": "The binding sim card"
            },
            "buttons": {
                "enter": "Enter",
                "assign_iccid": "Snap the SIM card",
                "reassign_iccid": "To reassign the SIM card",
                "remove_iccid": "Detach the SIM card",
                "print": "To print the label",
                "reset": "To start over",
                "change_equip": "Change the composition"
            },
            "imie_hints": {
                "imei_ready": "Attach the scanner to the bar code IMEI",
                "imei_invalid": "You entered an incorrect value<br>scan Again",
                "imei_focus_lose": "Scanning is not ready<br>Set the focus on the field",
                "imei_not_found": "Sets your phone's IMEI code<br><b>{0}</b> not found",
                "auto_print": "Automatically print and start again"
            },
            "iccid_hints": {
                "iccid_ready": "Attach the scanner to the barcode ICCID",
                "iccid_invalid": "You entered an incorrect value<br>scan Again",
                "iccid_focus_lose": "Scanning is not ready<br>Set the focus on the field",
                "iccid_not_found": "Failed to bind the SIM card c code<br><b>{0}</b>",
                "iccid_cant_unassign": "Failed to detach the SIM card"
            },
            "print_hints": {
                "print_error": "Error. Not found the label template for the kit.<br>Printing is not possible."
            },
            "hints": {
                "imei_ready": "Ready to scan. Attach the scanner to the barcode device IMEI.",
                "imei_focus_lose": "Error. Scanning is not ready. Click the button below.",
                "imei_focus_lose_btn": "To start the scan",
                "imei_invalid": "Error. Entered IMEI invalid value \"{0}\".<br>Please re-scan.",
                "imei_not_found": "Error. The ICCID value \"{0}\" not found.<br>Please re-scan.",
                "iccid_ready": "IMEI found. Ready to scan.<br>Attach the scanner to the barcode ICCID.",
                "iccid_focus_lose": "Error. Scanning is not ready. Click the button below.",
                "iccid_focus_lose_btn": "To start the scan",
                "iccid_invalid": "Error. You entered an incorrect value ICCID \"{0}\".<br>Please re-scan.",
                "iccid_found": "IMEI found. With him is associated ICCID code \"{0}\".<br>You can scan the new ICCID code to change it manually or detach the SIM card",
                "iccid_succcess": "ICCID \"{0}\" successfully assigned.",
                "iccid_print_ready": "If automatic printing of stickers has not occurred, click the button below.",
                "iccid_no_model": "Error. Not found the label template for the model. Cannot print",
                "iccid_send_btn": "Send ICCID",
                "iccid_unassign_btn": "Detach the SIM card",
                "iccid_print_btn": "Print sticker",
                "last_scan_text": "The results of the previous scan:",
                "unassign_q": "Detach the SIM card from the device?",
                "unassign_success": "SIM card untethered from the device",
                "unassign_failure": "Error. Failed to detach the SIM card from device"
            }
        },
        "import": {
            "import_hints": {
                "enter_list": "Enter or scan the list of IMEI-codes",
                "enter_list_no_focus": "Enter or scan the list of IMEI-codes<br>scanning not ready<br>Set the focus on the field",
                "list_count": "Response codes: <b>{0}</b>",
                "list_miss": "incorrect: <b>{0}</b>",
                "list_rep": "introduced repetitions: <b>{0}</b>",
                "import_success": "Successfully imported {0}",
                "import_failure": "The list of devices to import failed",
                "factory_preset": "The device is already configured by the manufacturer",
                "no_model": "The model is not selected"
            },
            "titles": {
                "first": "The input set of IMEI-codes",
                "second": "Model selection for devices"
            },
            "buttons": {
                "import": "To import codes",
                "reset": "Clear form"
            }
        }
    },
    "equipment": {
        "fields": {
            "equip_id": "ID",
            "name": "Name",
            "model_name": "Model",
            "model_code": "Model code",
            "vendor": "Manufacturer"
        },
        "select": {
            "title": "The choice of kit"
        },
        "list": {
            "empty_text": "Packages not found"
        }
    },
    "route_providers": {
        "progorod": "Progorod",
        "google": "Google",
        "osrm": "OSRM"
    },
    "measurement_systems": {
        "metric": "Метрична",
        "imperial": "Англійська",
        "us": "Англійська (США)"
    },
    "geocoders": {
        "google": "Google",
        "yandex": "Яндекс",
        "progorod": "Progorod",
        "osm": "OpenStreetMap"
    },
    "currencies_tpls": {
        "GBP": "£{0}",
        "BRL": "R${0}",
        "HUF": "{0} Ft",
        "HKD": "HK${0}",
        "DKK": "kr {0}",
        "EUR": "€{0}",
        "ILS": "₪{0}",
        "INR": "₹{0}",
        "IDR": "Rp {0}",
        "CAD": "С${0}",
        "CNY": "¥{0}",
        "KRW": "₩{0}",
        "MYR": "RM{0}",
        "MXN": "Mex${0}",
        "NZD": "NZ${0}",
        "NOK": "kr {0}",
        "PKR": "Rs. {0}",
        "PLN": "{0} zł",
        "RUB": "{0} rub.",
        "SGD": "S${0}",
        "USD": "${0}",
        "TWD": "NT${0}",
        "THB": "฿{0}",
        "TRY": "₺{0}",
        "PHP": "{0} ₱",
        "CZK": "{0} Kč",
        "CLP": "${0}",
        "SEK": "{0} kr",
        "CHF": "{0} franc",
        "ZAR": "R {0}",
        "JPY": "¥{0}",
        "KZT": "{0} tenge",
        "BYR": "{0} rub.",
        "AUD": "A${0}",
        "TJS": "{0} som.",
        "UAH": "{0} ₴",
        "LTL": "{0} Lt",
        "LVL": "Ls {0}",
        "KGS": "{0} som",
        "TMT": "{0} man.",
        "UZS": "{0} som",
        "MDL": "{0} lei",
        "GEL": "{0} lari",
        "AMD": "{0} dram",
        "AZN": "{0} man.",
        "ALL": "{0} Lek",
        "AFN": "{0} ؋",
        "ARS": "{0} $",
        "AWG": "{0} ƒ",
        "BSD": "{0} $",
        "BBD": "{0} $",
        "BZD": "{0} BZ$",
        "BMD": "{0} $",
        "BOB": "{0} $b",
        "BAM": "{0} KM",
        "BWP": "{0} P",
        "BGN": "{0} лв",
        "BND": "{0} $",
        "KHR": "{0} ៛",
        "KYD": "{0} $",
        "COP": "{0} $",
        "CRC": "{0} ₡",
        "HRK": "{0} kn",
        "CUP": "{0} ₱",
        "DOP": "{0} RD$",
        "XCD": "{0} $",
        "EGP": "{0} £",
        "SVC": "{0} $",
        "EEK": "{0} kr",
        "FKP": "{0} £",
        "FJD": "{0} $",
        "GHS": "{0} ¢",
        "GIP": "{0} £",
        "GTQ": "{0} Q",
        "GGP": "{0} £",
        "GYD": "{0} $",
        "HNL": "{0} L",
        "ISK": "{0} kr",
        "IRR": "{0} ﷼",
        "IMP": "{0} £",
        "JMD": "{0} J$",
        "JEP": "{0} £",
        "KPW": "{0} ₩",
        "LAK": "{0} ₭",
        "LBP": "{0} £",
        "LRD": "{0} $",
        "MKD": "{0} ден",
        "MUR": "{0} ₨",
        "MNT": "{0} ₮",
        "MZN": "{0} MT",
        "NAD": "{0} $",
        "NPR": "{0} ₨",
        "ANG": "{0} ƒ",
        "NIO": "{0} C$",
        "NGN": "{0} ₦",
        "OMR": "{0} ﷼",
        "PAB": "{0} B/.",
        "PYG": "{0} Gs",
        "PEN": "{0} S/.",
        "QAR": "{0} ﷼",
        "RON": "{0} lei",
        "SHP": "{0} £",
        "SAR": "{0} ﷼",
        "RSD": "{0} Дин.",
        "SCR": "{0} ₨",
        "SBD": "{0} $",
        "SOS": "{0} S",
        "LKR": "{0} ₨",
        "SRD": "{0} $",
        "SYP": "{0} £",
        "TTD": "{0} TT$",
        "TRL": "{0} ₤",
        "TVD": "{0} $",
        "UYU": "{0} $U",
        "VEF": "{0} Bs",
        "VND": "{0} ₫",
        "YER": "{0} ﷼",
        "ZWD": "{0} Z$",
        "MAD": "{0} Dh",
        "KWD": "KD {0}",
        "BDT": "{0} ৳"
    },
    "geolocation": {
        "disabled": "Disabled",
        "navixy": "Mozilla location services / @Navixy Telehouse",
        "mozilla": "Mozilla location services",
        "combain": "Combain"
    },
    "speed_restriction": {
        "disabled": "Disabled",
        "google": "Google Maps Roads",
        "quazar": "Quazar"
    },
    "edit_form_btn": "Edit",
    "cancel_form_btn": "Скасувати",
    "na": "N/A",
    "enable": "enable",
    "disable": "disable",
    "disabled": "Вимкнено",
    "forbid": "forbid",
    "allow": "allow",
    "forbidden": "Forbidden",
    "features": {
        "api": "API",
        "app_tasks": "<a href='https://www.navixy.com/docs/user/web-interface-docs/tasks/' target='_blank'>Tasks</a>",
        "app_fleet": "Aвтопарк",
        "app_reports": "<a href='https://www.navixy.com/docs/user/web-interface-docs/reports-docs/' target='_blank'>Reports</a>",
        "batch_operations": "Batch operations",
        "custom_maps": "Custom maps",
        "event_notification": "Event notifications",
        "geocoding": "Geocoding",
        "lbs": "Location by Cell ID",
        "map_layers": "Шари карти",
        "multilevel_access": "Object clones",
        "priority_support": "Priority support",
        "retranslation": "Retranslation",
        "report_xls": "Reports to file",
        "report_scheduled": "<a href='https://www.navixy.com/docs/user/web-interface-docs/reports-docs/scheduled-reports/' target='_blank'>Scheduled reports</a>",
        "routing": "Призначення маршруту",
        "ui_mobile": "Mobile web interface",
        "weblocator": "Веблокатор",
        "chat": "Chat",
        "statuses": "Work statuses"
    },
    "map": {
        "zoom_in": "Zoom in",
        "zoom_out": "Zoom out"
    },
    "map_type_label": "Map"
});
