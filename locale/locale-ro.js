/**
* @class Locale.locale-ro
* @extends Locale.AbstractLocale
*/
Ext.define('Locale.locale-ro',{
    "extend": "Locale.AbstractLocale",
    "dependencies": [
        {
            "name": "Locale.ext.locale-ro",
            "history": false
        }
    ],
    "singleton": true,
    "main_copyright": "© Navixy. Toate drepturile rezervate.",
    "panel_title": "Panou de administrare Navixy",
    "error": "Eroare",
    "loading": "Încărcare...",
    "conneting_loader": "Conectare la server",
    "access_denied": "Acces interzis",
    "access_denied_tip": "Nu aveți permisiunea de a accesa pagina solicitată",
    "index_title": "Bine ați venit la Panoul de control",
    "old_version": "Versiune veche",
    "auth": {
        "login": "Logare sau adresa de email",
        "password": "Parola",
        "login_btn": "Logare",
        "locale_title": "Alegeți limba",
        "locale_title_short": "limba",
        "auth_error": "Eroare de autentificare",
        "reloading_soon": "Reîncărcare",
        "logout": "Ieşire",
        "title": "Panoul Administratorului"
    },
    "no_path_found": "Nu există o pagină în această direcție",
    "phone_invalid_msg": "Vă rugăm să introduceți un număr de telefon valid",
    "invalid_numeric_msg": "Nu este un număr valid",
    "invalid_amount_msg": "Nu este un număr valid<br>(2 cifre după virgulă)",
    "searcher_empty_text": "Introduceţi cuvîntul cheie de căutare",
    "search_empty_text": "Introduceţi cuvîntul cheie de căutare",
    "searchTitle": "Căutare după categorie",
    "clear_form_btn": "Golire",
    "save_form_btn": "Salvare",
    "back_form_btn": "Înapoi",
    "select_form_btn": "Selectare",
    "close_form_btn": "Închidere",
    "yes": "Da",
    "no": "Nu",
    "show_btn": "Afişare",
    "wrong_period": "O prioadă nevalidă",
    "required_fields": "* - domenii sau secțiuni obligatorii",
    "invalid_tab": "Cîmpuri completate nevalid",
    "page_size": "Dimensiunea paginii",
    "errors": {
        "1": "Eroare conexiune de date (001). Vă rugăm să contactați suportul sau încercați din nou mai târziu.",
        "2": "Eroare a sistemului de de autorizare (002). Vă rugăm să contactați suportul sau încercați din nou mai târziu.",
        "3": "Cheie de sesiune greșită (003).  Vă rugăm să vă conectaţi din nou. Dacă problema persistă, contactați asistența.",
        "4": "Utilizatorul nu poate fi găsit sau sesiunea sa încheiat (004).  Vă rugăm să vă conectaţi din nou.",
        "5": "Cerere incorectă(005). Vă rugăm să contactați suportul sau încercați din nou mai târziu.",
        "6": "Eroare neașteptată (006). Vă rugăm să contactați suportul sau încercați din nou mai tîrziu.",
        "7": {
            "default_msg": "Parametrii de cerere incorecți. Verificați datele.",
            "title": "Parametri incorecți:",
            "errors": {
                "login": "Trebuie sa fie  validă o adresa de email",
                "domain": "Nume de domeniu incorect"
            }
        },
        "11": "Acces interzis",
        "12": "Platforma de serviciu nu a fost găsită",
        "101": "În modul demo această funcție este dezactivată",
        "102": "Nume utilizator sau parolă greșită",
        "103": "Utilizatorul nu a activat",
        "111": "Handler greșit",
        "112": "Metodă greșită",
        "201": "Nu s-au gasit date",
        "202": "Prea multe puncte din zonă",
        "203": "Elementul similar a fost șters",
        "204": "Elementul nu a fost găsit",
        "205": "Parametri nevalizi",
        "206": "Acest nume de utilizator este deja utilizat",
        "207": "Invalid captcha",
        "208": "The device is locked",
        "209": "Failed to send message",
        "210": "Geocoding failed",
        "211": "Requested time span is too big",
        "212": "Requested limit is too big",
        "213": "The device is offline",
        "214": "Requested operation are not supported by the device",
        "215": "External service error",
        "216": "Group is not empty",
        "217": "List contains nonexistent entities",
        "218": "Malformed external service parameters",
        "219": "The action is not allowed for the clone objects",
        "220": "Unknown device model",
        "221": "Tariff restriction:</br> Device limit exceeded.",
        "222": "Plugin not found",
        "223": "This phone number is already in use",
        "224": "Device with this device-id is already in use",
        "225": "Not allowed for this legal type",
        "226": "Wrong ICCID",
        "227": "Invalid activation code",
        "228": "Not supported by sensor",
        "229": "Requested data is not ready yet",
        "230": "Not supported for this entity type",
        "231": "Entity type mismatch",
        "232": "Input already in use",
        "233": "No data file",
        "234": "Invalid data format",
        "235": "Missing calibration data",
        "236": "Feature unavailable due to tariff restrictions",
        "238": "Changing tariff is not allowed",
        "240": "Not allowed to change tariff too frequently",
        "242": "Validation error",
        "251": "Insufficient funds",
        "254": "Cannot save file",
        "upload_exeption": "File upload error",
        "no_hash": "The session key is not found",
        "service_not_respond": "The service is temporarily unavailable",
        "tracker": {
            "203": "Tracker has attached rules",
            "237": "Invalid tariff",
            "238": "Changing tariff is not allowed",
            "239": "New tariff doesn't exist",
            "246": "User is incorrect",
            "247": "Clone already exists",
            "249": "The operation is available only for the clones",
            "250": "Not allowed for deleted devices",
            "253": "The operation can not be performed, the tracker has clones<br>Clones ID: {0}"
        },
        "tariff": {
            "244": "Tariff with the same name already exists"
        },
        "settings": {
            "225": "New password must be different",
            "248": "Wrong password"
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
    "units_combination": {
        "days": "zile|zi|zile",
        "hours": "ore|oră|ore",
        "minutes": "minute|minut|minute",
        "seconds": "seconds|second|seconds",
        "everyminutes": "minute|minut|minute",
        "everyseconds": "secunde|secundă|secunde",
        "meters": "metri|metru|metri",
        "degrees": "grade|grad|grade",
        "objects": "obiecte|obiect|obiecte",
        "years": "ani|an|ani",
        "months": "luni|lună|luni",
        "codes": "coduri|cod|coduri",
        "trackers": "trackeri|tracker|trackeri",
        "devices": "dispozitive|dispozitiv|dispozitive",
        "entries": "partide|partidă|partide",
        "assets": "active|aciv|active"
    },
    "units_short": {
        "kilometer": "km",
        "meter": "m",
        "square_kilometer": "sq. km",
        "square_meter": "sq. m",
        "ar": "creanţe de încasat.",
        "hectare": "ha",
        "kmh": "km / h",
        "hour": "h",
        "minute": "m",
        "second": "s",
        "litres": "l",
        "day": "d",
        "mile": "mi"
    },
    "search": {
        "empty": "Căutare după categorie",
        "btn": "Găsire"
    },
    "list": {
        "edit_tool": "editare",
        "create_btn_text": "Creare",
        "empty_text": "Nu există date",
        "search_title_tpl": "{0}: găsite {1}",
        "search_empty_title_tpl": "{0}: nici o potrivire găsită",
        "search_title": "Căutare",
        "search_empty_title": "Nici o potrivire găsită"
    },
    "card": {
        "links": {
            "collapser_tip": "Ascundere link-uri",
            "collapser_exptip": "Afișare link-uri"
        },
        "body": {
            "title": "Opțiunile de abonament și detalii::",
            "exptitle": "Opțiunile de abonament și detalii <a>(extidere)</a>",
            "collapser_tip": "Ascundere informații suplimentare",
            "collapser_exptip": "Afișare mai multe",
            "exptitle_show": "<a>(afișare)</a>"
        }
    },
    "devices": {
        "tracker": "Tracker",
        "camera": "Camera",
        "socket": "Muftă"
    },
    "currency": {
        "rub": "Russian Rouble",
        "usd": "U.S. Dollar",
        "kzt": "Kazakhstan Tenge",
        "byr": "Belarusian Ruble",
        "eur": "Euro",
        "jpy": "Japanese Yen",
        "gbp": "Liră sterlină",
        "chf": "Swiss Franc",
        "cad": "Dolar Canadian",
        "aud": "Australian Dollar",
        "nzd": "New Zealand Dollar",
        "tjs": "Tajik Somoni",
        "php": "Philippine Peso",
        "uah": "Ukrainian hryvnia",
        "brl": "imobiliare braziliană",
        "huf": "forintul din Ungaria",
        "hkd": "dolar Hong Kong",
        "dkk": "Croane Daneze",
        "ils": "shekel nou Israelian",
        "inr": "Rupii Indiene",
        "idr": "rupie Indoneziană",
        "cny": "Renminbi",
        "krw": "won din Coreea de Sud",
        "myr": "Malaysian ringgit",
        "mxn": "Mexican peso",
        "nok": "Norwegian krone",
        "pkr": "Pakistani rupee",
        "pln": "Polish złoty",
        "sgd": "Singapore dollar",
        "twd": "New Taiwan dollar",
        "thb": "Thai baht",
        "try": "Turkish lira",
        "czk": "Czech koruna",
        "clp": "Chilean peso",
        "sek": "Swedish krona",
        "zar": "South African rand",
        "ltl": "Lithuanian litas",
        "lvl": "Latvian lats",
        "kgs": "Kyrgyzstani som",
        "tmt": "Turkmenistan manat",
        "uzs": "Uzbekistani som",
        "mdl": "Moldovan leu",
        "gel": "Georgian lari",
        "amd": "Armenian dram",
        "azn": "Azerbaijani manat",
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
        "mad": "Moroccan dirham"
    },
    "maps": {
        "roadmap": "Foaia de parcurs google",
        "satellite": "Satelit google",
        "hybrid": "Hibrid google",
        "yandex": "Hărți Yandes",
        "yandexpublic": "Harta Yandex Narod",
        "cdcom": "Hărți ProGorod",
        "osm": "Deschidere hărțile strrăzilor",
        "osmmapnik": "Deschidere hărțile străzilor 2",
        "wikimapia": "Wikimapia",
        "navitel": "Hărți Navitel",
        "doublegis": "Hărți DoubleGis",
        "ovi": "Hărți OVI",
        "mailru": "Mail.ru Maps",
        "here": "HERE Maps",
        "bing": "Bing Maps"
    },
    "dealer_info": {
        "first": "Total",
        "last": "al"
    },
    "index": {
        "menu_text": "Acasă"
    },
    "users": {
        "menu_text": "Utilizatori",
        "create_btn": "Utilizator nou",
        "create_form": {
            "title": "Utiliztor nou",
            "main_fields": "Inforrmație generală",
            "contact_fields": "Detalii de contact",
            "address_fields": "Adresă",
            "legal_fields": "Informații persoană juridică",
            "password": "Parola",
            "password_repeat": "Repetare parolă",
            "password_mismatched": "Passwords do not match",
            "language": "Default language",
            "time_zone": "Time Zone",
            "save_btn": "Create User",
            "clear_btn": "Clear form",
            "copy_address": "Copy from address"
        },
        "edit_form": {
            "title": "Editare utilizator",
            "save_btn": "Salvare modificări",
            "return_btn": "Înapoi"
        },
        "fields": {
            "creation_date": "Data de înregistrare",
            "login": "Adresa de email",
            "balance": "Balanță",
            "bonus": "Bonus",
            "first_name": "Nume",
            "middle_name": "Middle name",
            "last_name": "Surname",
            "activated": "Activated",
            "activated_t": "User active",
            "legal_type": "Legal status",
            "tin": "TIN",
            "legal_name": "Legal Name",
            "iec": "IEC",
            "phone": "Phone number",
            "post_country": "Country",
            "post_index": "Zip code",
            "post_region": "Region",
            "post_city": "City",
            "post_street_address": "Street, address",
            "registered_country": "Registration country",
            "registered_index": "Registration zip code",
            "registered_region": "Registration region",
            "registered_city": "Registration city",
            "registered_street_address": "Registration address",
            "sole_trader": "Sole trader",
            "legal_entity": "Legal entity",
            "individual": "Individual",
            "full_name": "Full Name",
            "login_short": "Login",
            "user_id": "ID",
            "user_id_exp": "User number",
            "activated_short": {
                "title": "Status",
                "status_true": "Active",
                "status_false": "Not active",
                "status_no": "Active, email not confirmed"
            },
            "registered_short": "legal",
            "password": "New password",
            "password_repeat": "Repeat new password",
            "password_mismatched": "Passwords do not match"
        },
        "password_form": {
            "title": "Schimbarea parolei de utilizator",
            "save_btn": "Setare parolă",
            "return_btn": "Anulare",
            "success_msg": "Parola a fost modificată cu succes"
        },
        "list": {
            "create_btn_text": "Creare utilizator nou",
            "empty_text": "Nici un utilizator găsit"
        },
        "session_alert": {
            "error": "Nu se poate crea sesiunea de utilizator",
            "title": "Codul Dvs de sesiune"
        },
        "card": {
            "tab_panel": {
                "trackers": {
                    "title": "Utilizare trackeri"
                },
                "transactions": {
                    "title": "Transactions"
                }
            },
            "links": {
                "session_text": "Go to monitoring",
                "user_edit": "Edit user",
                "user_change_password": "Change password",
                "transactions": "Transactions",
                "create_transaction": "Change balance",
                "hash_text": "Get session key"
            }
        },
        "transactions": {
            "list": {
                "empty_text": "No transactions found",
                "title": "Transactions for user"
            },
            "fields": {
                "description": "Operation",
                "type": "Operation type",
                "subtype": "Subtype",
                "date": "Date",
                "amount": "Sum",
                "old_balance": "Old",
                "new_balance": "New",
                "type_set": {
                    "main_charge": "subscription",
                    "payment": "payment",
                    "tariff_charge": "telecom services",
                    "bonus_charge": "bonus refill"
                },
                "subtype_set": {
                    "monthly": "monthly",
                    "partner": "from a partner",
                    "activeday": "active day",
                    "everyday": "monthly by day",
                    "sms": "SMS message"
                }
            }
        },
        "transaction_add": {
            "title": "Changing balance (adding transaction) of users",
            "description": "Transaction description",
            "balance": "Balance changes",
            "bonus": "Bonus changes",
            "value_sup": "* - amount of which will change the current value, can be negative"
        },
        "combo_empty": "Select an user",
        "select_error": "Tracker or his clone is already bound to selected user",
        "select": {
            "title": "Select an user"
        },
        "session_hash": {
            "title": "User session key"
        }
    },
    "trackers": {
        "menu_text": "Trackeri",
        "fields": {
            "tracker_id": "ID-ul",
            "label": "Titlul",
            "model": "Model",
            "phone": "Telefon",
            "device_id": "ID-ul dipozitivului",
            "creation_date": "Data activării Tracker-ului",
            "creation_date_short": "Activat",
            "connection_status": "Status",
            "tracker_id_exp": "Tracker number",
            "phone_exp": "Phone number",
            "owner": "Tracker owner",
            "tariff": "Tracker tariff",
            "deleted": "Marked as deleted",
            "blocked": "Service paused",
            "user_id": "User ID",
            "clone": "Clone",
            "clone_owner": "Clone owner",
            "options": {
                "clone": "clone",
                "deleted": "deleted",
                "blocked": "blocked"
            },
            "statuses": {
                "active": "Online",
                "signal_lost": "Connection lost",
                "offline": "Offline",
                "just_registered": "Just registered",
                "idle": "GPS not updated"
            }
        },
        "edit_form": {
            "main_fields": "Informația principală",
            "title": "Editare tracker",
            "save_btn": "Salvre schimbări",
            "return_btn": "Înapoi"
        },
        "clone_form": {
            "title": "Creare clone de tracker",
            "remove_failure_msg": "Eliminarea clona a eșuat",
            "failure_msg": "Crearea clona a eșuat",
            "remove_confirm": "Eliminați clona"
        },
        "group_clone_form": {
            "title": "Grup clonarea de trackere",
            "save_btn": "Clona",
            "grid_clone_label": "Clonele vor fi adăugate",
            "grid_clone_tip": "Utilizați dublu clic pentru a schimba eticheta clona"
        },
        "group_owner_form": {
            "title": "Schimbare proprietar pentru un grup de trackeri",
            "save_btn": "Modificare proprietar",
            "grid_clone_label": "Trackers will be changed"
        },
        "tariff_form": {
            "title": "Modificare plan pentru tracker",
            "save_btn": "Save changes",
            "repay": "Repay remainder of current tariff payment",
            "charge": "Charge payment for new tariff",
            "charge_sup": "only for the tariff plans with monthly payment",
            "tariff_invalid": "must be different from current"
        },
        "list": {
            "create_btn_text": "Create new tracker",
            "owner_btn": "Change owner",
            "clone_btn": "Clone",
            "edit_btn": "Edit selected",
            "empty_text": "No tracers found",
            "after_clone_success": "Cloned: {0}",
            "after_clone_failure": "Cloned: {0}, {1} clone failed",
            "after_owner_success": "Changed: {0}",
            "after_owner_failure": "Changed: {0}, {1} change failed",
            "select_req": "Select trackers from list",
            "select_clone_req": "Clones selected, group operations can not be performed"
        },
        "card": {
            "links": {
                "change_tracker_user": "Change owner",
                "tracker_edit": "Edit tracker",
                "tracker_tariff_edit": "Change tariff",
                "tracker_clone_create": "Create clone of this tracker",
                "tracker_clone_remove": "Delete this clone",
                "tracker_tariff": "Tracker tariff",
                "tracker_owner": "Tracker owner",
                "tracker_console": "GPRS-terminal",
                "tracker_corrupt": "Cancel registration"
            }
        },
        "console": {
            "title": "GPRS-terminal for tracker",
            "connect_btn": "Start connection",
            "disconnect_btn": "Close connection",
            "auto_scroll": "Auto-scrolling",
            "clear": "Clear console",
            "send_btn": "Send",
            "send_empty": "Type the command",
            "loading": "Connecting to a device",
            "connect_init": "Connection is established",
            "show_time": "Show message time",
            "show_status": "Show status",
            "disconnect_msg": "Connection terminated",
            "connect_msg": "Connection is established",
            "error_msg": "Error connecting to device",
            "connection_failure": "Unable to connect to device",
            "close_question": "Close connection?",
            "status_title": "Device status",
            "status_property_title": "Status",
            "status_value_title": "Value"
        },
        "corrupt": {
            "alert": {
                "title": "Remove tracker registration?",
                "text": "The device will be permanently deleted from the database, all the data - not available!<br><br>You sure you want remove registration?"
            },
            "success_msg": "Device {0} successfully removed"
        }
    },
    "tariffs": {
        "menu_text": "Tarife",
        "create_form": {
            "title": "Creare tarif nou",
            "main_fields": "Informația principală",
            "save_btn": "Creare plan",
            "clear_btn": "Formă clară",
            "options_fields": "Opțiuni tarifare",
            "prices_fields": "Tariff prices"
        },
        "edit_form": {
            "title": "Editare tarif",
            "save_btn": "Salvare schimbări"
        },
        "default_form": {
            "title": "Setări tarifare implicit"
        },
        "fields": {
            "tariff_id": "ID",
            "name": "Etichetă",
            "group_id": "Group",
            "price": "Monthly payment",
            "device_limit": "Limit of devices",
            "device_type": "Device type",
            "store_period": "History storage period",
            "active": "Available for user",
            "has_reports": "Table reports is available",
            "proportional_charge": "Subscription fee for the partial month of proportion to the number of days to write off",
            "incoming_sms": "Incoming SMS",
            "outgoing_sms": "Outgoing SMS",
            "service_sms": "Service SMS",
            "phone_call": "Phone calls",
            "traffic": "GPRS (for Mb)",
            "default_tariff": "the default tariff for devices of type «{0}»",
            "default_short": "default",
            "service_price": "the amount charged for service usage",
            "group_id_exp": "Tariff group",
            "active_exp": "Users can switch to this tariff on his own",
            "device_limit_exp": "Maximum devices",
            "activation_bonus": "Activation bonus",
            "free_days": "Number of free days",
            "tariff_type": "Billing cycle",
            "tariff_type_short": "Payment",
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
            "create_btn_text": "Adăugare tarif nou",
            "empty_text": "Tariffs not found"
        },
        "card": {
            "links": {
                "make_default": "Mark as default",
                "tariff_edit": "Edit tariff"
            },
            "tab_panel": {
                "trackers": {
                    "title": "Trackers at this tariff"
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
                    "misc": "Miscellanous"
                }
            },
            "hints": {
                "2": "Messages which are sent with user’s consent or by his request. These SMS are sent from the service platform to users and devices through the SMS gateway you defined.<br /><br />Particular use cases:<br />User notifications about geo-based events they want to stay aware of<br /> – M2M commands to those device models which can be configured over SMS channel only (device configuration, output change), as well as manual acquiring location by SMS (for models which support that feature).",
                "3": "Service and maintenance SMS commands which are sent from the platform to devices, normally without a special approvement from user. For example, they are used for automatic device activation – to deliver initialization SMS commands (APN, server address, etc.), or when your support team performs remote device diagnostic.",
                "4": "If you use Navixy SIM cards in devices, you can additionally charge users for incoming SMS messages from these SIM cards (e.g. confirmations from devices about accomplishing the commands).",
                "5": "If you use Navixy SIM-cards in devices, you can set up a fee for the its usage based on traffic volume (traffic in both directions is billed).",
                "6": "User notifications by automatic phone calls are currently supported in some regions and in limited languages only.",
                "7": "If user reaches the limitation, he will not be available to add or track more assets in his account. In the case user has assets on different plans, the minimum value will be applied.",
                "8": "The system logs and stores data (about trips, events, etc.) within set time span relative to the current date only. If you extend the time span, the older logs might not be available.",
                "9": "Select maps available for user if he tracks assets on the current plan. The list of all available maps is defined by the preferences for your service.",
                "10": "Select options which are available for users who have assets on this plan.",
                "11": "Select options which are available for users who have assets on this plan.",
                "12": "The price user pays to you as a service provider. The billing system uses the currency you defined in Account settings.<br /><br />If you see “N/A” instead of value, it means that service is not offered or cannot be billed by the billing system.",
                "13": "The price you pay for services provided to you by Navixy. If you see “N/A” instead of value, it means that service is not offered (not ordered or unavailable).",
                "14": "This plan will be used by default when user activates a new device. Note: this setting will be overridden by the plan defined in the activation code parameters.",
                "15": "Integer number (0, 1, 2, …) of the group to which this plan belongs to.",
                "16": "Mark the checkbox if you allow users to switch their devices to this plan (from other plans within the same group) by their own.",
                "17": "The plan will be set by default for all devices added by user, if with no activation code is used.<br /><br />When user enters an activation code, its parameters are used prioritily.",
                "18": "Amount of complimentary days user gets after adding a device (including the day when device was added).",
                "19": "Amount of money complimentary charged to user’s balance when he adds a new device.<br /><br />It won’’t be used for general service fee payment, but only for additional services, e.g. SMS notifications.",
                "20": "If the checkbox is marked, user will be always charged a fee for the full month when service for the device is being renewed. For example, if user failed to pay on time and filled up his balance on the 10th day, he will be charged for the full month anyway.<br /><br />If the checkbox is cleared, user will be charged proportionally to the amount of days left from the date of payment to the end of the month.",
                "plan_options": "<b>Notice about plans compatibility.</b> If there are assets on different plans within same user account, some maps and options (which are not included into all plans) might become unavailable for that user. You can avoid such a collision by nesting similar plans into groups, thus making impossible for users to have devices on incompatible plans. We consider that is the only possible way to offer your flexible configuration of your plans and, at the same time, not giving your users the opportunity to cheat with your pricing.",
                "plan_availability": "By combining plans into groups you can organize your plans better and allow your users to switch between plans on their own. While you can assign any plan for any asset in the Admin panel, your users are able to switch only to the plans that are marked with appropriate checkbox."
            }
        },
        "combo_empty": "Select tariff",
        "select_error": "This tariff is not available",
        "select": {
            "title": "Select tariff"
        },
        "types": {
            "activeday": "Daily",
            "monthly": "Monthly",
            "everyday": "Monthly (daily debit)"
        },
        "price_type": {
            "monthly": "Monthly fee",
            "activeday": "Daily fee",
            "everyday": "Monthly fee"
        }
    },
    "codes": {
        "menu_text": "Coduri de activare",
        "fields": {
            "activated": "status",
            "activation_date": "Activare date",
            "bonus_amount": "Bonus",
            "code": "cod",
            "device_id": "Device ID",
            "device_type": "Device type",
            "free_days": "Free days",
            "money_amount": "Amount",
            "tariff_id": "Tariff ID",
            "tariff_name": "Tariff",
            "status": {
                "activated": "activated",
                "no_activated": "not activated"
            }
        },
        "edit_form": {
            "title": "Editare coduri de activare",
            "save_btn": "Salvare schimbare",
            "selected_count": "Codurile selectate",
            "device_type": "Codes selected for devices"
        },
        "create_form": {
            "title": "Creare coduri de activare",
            "save_btn": "Creare coduri",
            "new_codes_count": "Amount of new codes"
        },
        "list": {
            "empty_text": "Coduri de activare nu au fost găsite",
            "create_btn": "Create new",
            "edit_btn": "Edit selected",
            "reload_btn": "Reload",
            "after_create_success": "Created: {0}",
            "after_edit_success": "Changes: {0}",
            "after_edit_failure": "Changed: {0}, {1} change failed",
            "select_req": "Select codes from list",
            "same_type_req": "You must specify one device type codes",
            "edited_tip": "changed",
            "filters": {
                "activated": "Activated",
                "no_activated": "Not activated",
                "trackers": "Trackers",
                "cameras": "Cameras",
                "sockets": "Sockets",
                "toggle_all": "Show all"
            },
            "faq_link": "http://www.navixy.com/docs/user/admin-panel-docs/activation-codes/",
            "faq_text": "Activation codes FAQ"
        }
    },
    "settings": {
        "menu_text": "Setări",
        "fields": {
            "service_title": "Titlul service",
            "page_title": "Titlul pagină",
            "locale": "User interface language",
            "demo_login": "Demo user",
            "demo_password": "Demo password",
            "maps_title": "Available maps",
            "maps_default": {
                "type": "Default map",
                "location_lat": "Latitude default",
                "location_lng": "Longitude default",
                "zoom": "Default zoom"
            },
            "google_client_id": "Client ID for google maps",
            "currency": "Currency for users",
            "payment_link": "Payment system URL",
            "promo_url": "Promo website URL",
            "domain": "Domain",
            "email_from": "Sender Email",
            "email_special": "Email for alerts",
            "email_footer": "Email footer",
            "sms_originator": "SMS originator",
            "caller_id": "Voice notice originator",
            "password": "New password",
            "password_repeat": "Repeat new password",
            "password_old": "Current password",
            "password_mismatched": "Passwords do not match",
            "footer_email": "Company E-mail",
            "footer_site": "«About Us» Link",
            "footer_text": "The text at the bottom of page",
            "geocoder": "Default geocoder",
            "route_provider": "Default route provider",
            "translit": "SMS transliteration",
            "measurement_system": "Measurement system",
            "payment_description": "Payment options and terms",
            "support_email": "Email for customers support",
            "alerts_email": "Email for important alerts and invoices",
            "time_zone": "Time zone",
            "service_title_ph": "marketing name",
            "service_title_hint": "Used at the login page, in browser tab and in other places",
            "footer_text_ph": "Some text you want to add into the footer of the login page",
            "footer_text_hint": "Custom text for the footer of the login page, links to privacy policy, etc. Links starting with http: and maito: will be active. Use plain text only, HTML tags are not supported.",
            "promo_url_ph": "http://www.company.com",
            "promo_url_hint": "Your company’s website, starting with http://. If set, this link is used for \"About\" at the login page.",
            "favicon_hint": "Icon will be shown in browser’s tab. (The feature is not supported in Internet Explorer.)",
            "logo_hint": "The logo is shown at the login page, in PDF-reports and Email notifications to users.",
            "login_wallpaper_hint": "Upload attractive background image at the login page of your service",
            "domain_ph": ".navixy.com",
            "domain_hint": "Launch and run your service on your own domain name (e.g.: tracking.company.com). Before configuring a custom domain here, you need to setup an appropriate CNAME-record on your DNS server and point it to saas.navixy.com.",
            "domain_help": "How do I set up a CNAME-record",
            "domain_help_link": "http://www.navixy.com/docs/user/admin-panel-docs/settings/domain-name/",
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
            "sms_inbound_hint": "We do not recommend, but you can also use another numeric or apha-numeric Sender ID. However, in this case it is likely that platform will not be able to receive any SMS from devices. Please also note that special requirements can be applied by national laws and regulations to avoid spam. Make sure that the Sender ID you entered meets these requirements, otherwise SMS messaging service might not work properly.",
            "display_model_features_link": "Show a link to a website with information about the model",
            "display_model_features_link_hint": "User can be provided with additional information about the model of the device activated",
            "monitoring_logo_hint": "Additional logo that is shown in the user web interface (above menu)",
            "show_call_notifications": "Allow configuration of voice notifications",
            "monitoring_logo_clickable": "Click on the logo in the interface opens a promo web-site"
        },
        "edit_form": {
            "title": "Service Settings",
            "save_btn": "Save",
            "save_msg": "Settings saved successfully",
            "main_fields": "Basic Settings",
            "map_fields": "Maps settings",
            "permission_fields": "Notification dettings",
            "domain_sup": "* - for domains like *{0} available map types limited",
            "custom_fields": "Customization",
            "main_buttons_title": "Displaying buttons",
            "show_mobile_apps": "Show buttons for downloading mobile apps",
            "allow_registration": "Allow user self registration",
            "main_texts_title": "Main texts",
            "footer_texts_title": "Text in the basement of the login page",
            "logo_title": "Logo",
            "favicon_title": "Favicon",
            "login_wallpaper_title": "Authorization page background",
            "desktop_wallpaper_title": "Services page background",
            "upload_btn": "Upload",
            "update_btn": "Change",
            "remove_btn": "Remove",
            "upload_loading": "Upload Image",
            "domain_fields": "Domain",
            "regional_fields": "Regional settings",
            "maps_fields": "Maps",
            "demo_fields": "Demo user",
            "notifications_fields": "Notifications",
            "password_fields": "Change password",
            "pass_hint": "Changes in other tabs will not be saved",
            "pass_save_msg": "Password changed successfully",
            "pass_save_btn": "Change Password",
            "maps_hint": "Please define the selection of maps which will available for the customers of your service. The list of maps for specific users can be limited with their tariff plan settings.<br><br>The use of map services you selected must be granted to you by their rights owners. NAVIXY is not responsible for any violation of the license terms by you or your end users.",
            "demo_hint": "Choose user account which will be used for demo purposes and available on login page (optional)",
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
            "misc_header": "Optional features",
            "monitoring_logo_title": "User interface logo"
        },
        "upload_form": {
            "save_btn": "Upload",
            "cancel_btn": "Cancel",
            "upload_btn": "View",
            "title": "Upload image. {0}",
            "titles": {
                "logo": "Logo",
                "favicon": "Favicon",
                "login_wallpaper": "Login page wallpaper",
                "desktop_wallpaper": "Service page wallpaper",
                "monitoring_logo": "Additional logo"
            },
            "tips": {
                "logo": "Recommended to load horizontally oriented image with a transparent background and a width of not less than 200 points.",
                "favicon": "Recommended to load the image with a transparent background and a minimum resolution of 32x32 pixels.",
                "login_wallpaper": "Recommended to load background images with a resolution of at least 1920x1080 pixels (FullHD) format JPEG.",
                "monitoring_logo": "It is recommended to use the logo image with the transparent background (PNG) and minimal width of 200px."
            },
            "img_title": "The image format {0} (the maximum size of {1} MB)",
            "error_text": "Failed to load image"
        },
        "subscription": {
            "activation_btn_text": "Achitare taxă de activare acum (500 USD) on-line",
            "monthly_fee_btn_text": "Plată online",
            "activation_hint": "Evaluați versiunea de încercare Navixy ServerMate (pînă{0}). Pentru a continua cu versiunea comercială, vă rugăm să alegeți opțiunile de abonament, și să continuați cu plata de activare:",
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
                        "7": "Reserverd",
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
        "menu_text": "Contabilitate",
        "report_msg": {
            "title": "Confirmare email-buletin informativ",
            "text": "Alertă pentru clienți referitor la exportul datelor la 1C pentru <b>{0}</b>.<br>Sigur doriți să efectuați<b>buletinul informativ pe e-mail</b>?"
        },
        "form": {
            "title": "«1C:Enterprise» Data exporting",
            "export1c": {
                "tab_title": "Accounting",
                "save_btn": "Get 1C data file",
                "report_btn": "Submit deeds by email",
                "fields": {
                    "month": "Select a month",
                    "last_act": "Last deed number"
                }
            },
            "payments": {
                "tab_title": "Payments",
                "save_btn": "Get 1C data file",
                "fields": {
                    "date": "Time interval",
                    "type": "Payment system"
                },
                "ps": {
                    "default": "All of the above",
                    "cyberplat": "CyberPlat",
                    "deltapay": "DeltaPay",
                    "mobile": "Mobile",
                    "mobimoney": "Mobi.Money",
                    "rbkmoney": "RBK Money",
                    "webmoney": "WebMoney",
                    "sberbank": "Sberbank"
                }
            }
        },
        "report_success": "Buletinul informativ pe email a reușit"
    },
    "payments": {
        "menu_text": "Plăți",
        "import_sberbank": {
            "title": "Importul plăților Sberbank",
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
        "menu_text": "Conținutul pachetului",
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
                "unassign_failure": "Error. Failed to detach the SIM card from ustroystva"
            }
        },
        "import": {
            "import_hints": {
                "enter_list": "Enter or scan the list of IMEI-codes",
                "enter_list_no_focus": "Enter or scan the list of IMEI-codes<br>scanning not ready<br>Set the focus on the field",
                "list_count": "Resposne codes: <b>{0}</b>",
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
    "measurement_systems": {
        "metric": "Metric",
        "imperial": "Imperial",
        "us": "US"
    },
    "route_providers": {
        "progorod": "Progorod",
        "google": "Google",
        "osrm": "OSRM"
    },
    "geocoders": {
        "google": "Google",
        "yandex": "Yandex",
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
        "GHC": "{0} ¢",
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
        "MAD": "{0} Dh"
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
    "edit_form_btn": "Editare",
    "cancel_form_btn": "Anulare",
    "na": "N/A",
    "enable": "Activare",
    "disable": "Dezactivare",
    "disabled": "Dezactivat",
    "forbid": "Interzicţi",
    "allow": "Permiteţi",
    "forbidden": "Interzis",
    "features": {
        "api": "API",
        "app_tasks": "<a href='http://www.navixy.com/docs/user/web-interface-docs/tasks/' target='_blank'>Tasks</a>",
        "app_fleet": "Fleet",
        "app_reports": "<a href='http://www.navixy.com/docs/user/web-interface-docs/reports-docs/' target='_blank'>Reports</a>",
        "batch_operations": "Batch operations",
        "custom_maps": "Custom maps",
        "event_notification": "Event notifications",
        "geocoding": "Geocoding",
        "lbs": "Location by Cell ID",
        "map_layers": "Map layers",
        "multilevel_access": "Object clones",
        "priority_support": "Priority support",
        "retranslation": "Retranslation",
        "report_xls": "Reports to file",
        "report_scheduled": "<a href='http://www.navixy.com/docs/user/web-interface-docs/reports-docs/scheduled-reports/' target='_blank'>Scheduled reports</a>",
        "routing": "Routing",
        "ui_mobile": "Mobile web interface",
        "weblocator": "Weblocator",
        "chat": "Chat",
        "statuses": "Work statuses"
    },
    "map": {
        "zoom_in": "Zoom in",
        "zoom_out": "Zoom out"
    },
    "map_type_label": "Map"
});