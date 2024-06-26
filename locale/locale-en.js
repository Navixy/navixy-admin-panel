/**
 * @class Locale.locale-en
 * @extends Locale.AbstractLocale
 */
Ext.define("Locale.locale-en", {
    "extend": "Locale.AbstractLocale",
    "dependencies": [
        {
            "name": "Locale.ext.locale-en",
            "history": false
        }
    ],
    "singleton": true,
    "main_copyright": "© SquareGPS Inc. All rights reserved.",
    "paas_main_copyright": "© All rights reserved.",
    "privacy_policy": "<a href=\"https://www.navixy.com/about/privacy-policy/\" target=\"_blank\">Privacy Policy</a>",
    "terms_of_service": "<a href=\"https://www.navixy.com/about/privacy-policy/\" target=\"_blank\">Terms of Use</a>",
    "panel_title": "Navixy Admin Panel",
    "paas_panel_title": "Admin Panel",
    "error": "Error",
    "success": "Operation was successfully completed",
    "loading": "Loading...",
    "conneting_loader": "Connecting to server",
    "access_denied": "Access denied",
    "access_denied_tip": "you do not have permission to access requested page",
    "index_title": "Welcome to the Admin Panel",
    "index_blocked": {
        "inital_block": "Initial blocking.",
        "block_login": "Access to your admin panel suspended. Please top up the balance.",
        "clients_blocked": "Access to your admin panel and tracking platform suspended. Please top up the balance."
    },
    "header_blocked": {
        "initial_block": "Initial blocking",
        "block_login": "Access to admin panel is blocked",
        "clients_blocked": "Access to the tracking platform and admin panel is blocked"
    },
    "index_blocked_payment": "You can refill your balance from \"Subscription\" tab",
    "old_version": "Old version",
    "maintenance_warning": '<div>Starting June 1, the Weblocator plugin will be deprecated and removed from Navixy. Existing weblocator links will function until July 1, after which all links will be deactivated. Please transition to the new Geo Links module, which offers enhanced functionality and customization features. You can learn more about Geo Links <a href="https://www.navixy.com/docs/user/web-interface-docs/geo-links/" target="_blank">here</a></div>',
    "auth": {
        "login": "Login",
        "password": "Password",
        "login_btn": "Login",
        "locale_title": "Select your language",
        "locale_title_short": "language",
        "auth_error": "Authentication error",
        "reloading_soon": "Reloading",
        "logout": "Logout",
        "title": "Admin panel"
    },

    "account-btn": {
        "sa_token": "On-premise license key",
        "change_password": "Change password",
        "logout": "Logout"
    },
    "no_path_found": "No page - wrong URL",
    "phone_invalid_msg": "Please enter a valid phone number",
    "invalid_numeric_msg": "Not a valid number",
    "invalid_amount_msg": "Not a valid number<br>({0} digits after decimal point)",
    "searcher_empty_text": "Enter search query",
    "search_empty_text": "Enter search query",
    "searchTitle": "Search by category",
    "clear_form_btn": "Clear",
    "save_form_btn": "Save",
    "back_form_btn": "Back",
    "select_form_btn": "Select",
    "close_form_btn": "Close",
    "edit_form_btn": "Edit",
    "cancel_form_btn": "Cancel",
    "yes": "yes",
    "no": "no",
    "na": "N/A",
    "enable": "enable",
    "disable": "disable",
    "disabled": "Disabled",
    "forbid": "forbid",
    "allow": "allow",
    "forbidden": "Forbidden",
    "show_btn": "Show",
    "wrong_period": "An invalid period",
    "required_fields": "<span style=\"color:red\">*</span> - required fields or sections",
    "invalid_tab": "Invalid filled fields",
    "page_size": "Page size",
    "invalid_multi_email": "This field should be an e-mail address, or a list of email addresses separated by commas(,) in the format \"user@domain.com,test@test.com\"",
    "errors": {
        "1": "Database connection error (001). Please contact support or try again later.",
        "2": "Authorization system error (002).  Please contact support or try again later.",
        "3": "Wrong session key (003).  Please re-login. If the problem persists, contact support.",
        "4": "User can not be found or session has ended (004).  Please re-login.",
        "5": "Incorrect request (005). Please contact support or try again later.",
        "6": "Unexpected error (006). Please contact support or try again later.",
        "7": {
            "default_msg": "Incorrect request parameters. Check the data.",
            "title": "Incorrect parameters:",
            "errors": {
                "login": "Must be a valid email address",
                "domain": "Incorrect domain name",
                "link_monitoring": "Incorrect domain name",
                "subpaas.link_monitoring": "Incorrect domain name. Maybe it is already in use.",
                "user.post_index": "Post index must match \"[-a-zA-Z0-9 ]{0,30}\"",
                "user._i_e_c": "IEC: Length must be between 0 and 255"
            }
        },
        "9": "Too large request",
        "11": "Access denied",
        "12": "Service platform is not found",
        "101": "This feature is not available in the Demo mode",
        "102": "Wrong username or password",
        "103": "The user has not activated",
        "111": "Wrong handler",
        "112": "Wrong method",
        "201": "No data found",
        "202": "Too many points in the area",
        "203": "Related item has been deleted",
        "204": "Element not found",
        "205": "Invalid parameters",
        "206": "This username is already in use",
        "207": "Invalid captcha",
        "208": "The device is locked",
        "209": "Failed to send message",
        "210": "Geocoding failed",
        "211": "Requested time range is too large",
        "212": "Requested limit is too large",
        "213": "The device is offline",
        "214": "Requested operation are not supported by the device",
        "215": "External service error",
        "216": "Group is not empty",
        "217": "List contains nonexistent entities",
        "218": "Malformed external service parameters",
        "219": "This action is not allowed for the cloned objects",
        "220": "Unknown device model",
        "221": "Plan restriction:</br> Device limit exceeded.",
        "222": "Plugin not found",
        "223": "This phone number is already in use",
        "224": "Device with this ID already exists",
        "225": "Not allowed for this legal entity type",
        "226": "Wrong ICCID",
        "227": "Invalid activation code",
        "228": "Not supported by sensor",
        "229": "Requested data is not ready yet",
        "230": "Not supported for this legal entity type",
        "231": "Entity type mismatch",
        "232": "Input already in use",
        "233": "No data file",
        "234": "Invalid data format",
        "235": "Missing calibration data",
        "236": "This feature is not available on current plan",
        "238": "Changin plan is not allowed",
        "240": "Not allowed to change plan too frequently",
        "242": "Validation error",
        "246": 'User is incorrect',
        "251": "Insufficient funds",
        "252": "Device already corrupted",
        "254": "Cannot save file",
        "264": "Timeout to perform reoperation has not expired",
        "268": "Object creation limit has been exceeded",
        "upload_exeption": "File upload error",
        "no_hash": "The session key is not found",
        "service_not_respond": "The service is temporarily unavailable",
        "tracker": {
            "203": {
                "msg": "Tracker has attached: {0}",
                "entities": {
                    "rules": "rules",
                    "vehicles": "vehicles"
                }
            },
            "237": "Plan invalid",
            "238": "Changing plan is not allowed",
            "239": "New plan does not exist",
            "246": "User is incorrect",
            "247": "Clone already exists",
            "249": "The operation is available only for the clones",
            "250": "Not allowed for deleted devices",
            "253": "The operation can not be performed, the tracker has the following clones<br>Clones ID: {0}"
        },
        "user": {
            "252": "User already removed",
            "253": "Some of user trackers has clone"
        },
        "tariff": {
            "244": "Plan with same name already exists"
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
            "259": "Payments amount does not correspond to the total sum",
            "260": "Payments amount does not correspond to the total sum"
        }
    },
    "message_box_with_alert": {
        "ok": "OK",
        "cancel": "Cancel",
        "yes": "Yes",
        "no": "No",
        "argeement": "I read the warning and understand that the operation is irreversible"
    },
    "users_import_message_box": {
        title: "Import users",
        message: "Fill out <a href=\"app/resources/users_import_template_en.xlsx\"> the template</a> and upload it",
        file_input_label: "View",
        blank_input_label: "Select file",
        submit: "Upload",
        cancel: "Cancel",
        process_msg: "Loading",
        success_msg: "File has been successfully uploaded. Total imported users: ",
        file_params: "XLSX, CSV file format; max size 10 Mb",
        errors: {
            msg: "File import error.",
            row_number: "line ",
            codes: {
                1: "Database error",
                6: "Unexpected error",
                7: "Please check that row has correct values.",
                206: "This email already in use",
                233: "Empty import file",
                234: "Invalid data format",
                268: "Import is limited by 10,000 records max",
                273: "Email is dublicated",
                274: "Empty import file"
            }
        }
    },
    "units_combination_list": {
        "days": "days|day|days",
        "hours": "hours|hour|hours",
        "minutes": "minutes|minute|minutes",
        "seconds": "seconds|second|seconds",
        "everyminutes": "minutes|minute|minutes",
        "everyseconds": "seconds|second|seconds",
        "meters": "meters|meter|meters",
        "degrees": "degrees|degree|degrees",
        "objects": "objects|object|objects",
        "years": "years|year|years",
        "months": "months|month|months",
        "codes": "codes|code|codes",
        "trackers": "trackers|tracker|trackers",
        "devices": "devices|device|devices",
        "entries": "matches|match|matches",
        "assets": "assets|asset|assets",
        "clones": "clones|clone|clones|clones|clones|clones",
        "deleted": "deleted|deleted|deleted|deleted|deleted|deleted"
    },
    "units_short": {
        "kilometer": "km",
        "mile": "mi",
        "meter": "m",
        "square_kilometer": "sq. km",
        "square_meter": "sq. m",
        "ar": "ar",
        "hectare": "ha",
        "kmh": "km/h",
        "hour": "h",
        "minute": "m",
        "second": "s",
        "litres": "l",
        "day": "d"
    },
    "search": {
        "empty": "Search by category",
        "btn": "Find"
    },
    "list": {
        "edit_tool": "Edit",
        "create_btn_text": "Create",
        "empty_text": "No data",
        "search_title_tpl": "{0}: found {1}",
        "search_empty_title_tpl": "{0}: no matches found",
        "search_title": "Search",
        "search_empty_title": "No matches found"
    },
    "card": {
        "links": {
            "collapser_tip": "Hide links",
            "collapser_exptip": "Show links"
        },
        "body": {
            "title": "Plan options and details:",
            "exptitle": "Plan options and details <a>(expand)</a>",
            "exptitle_show": "<a>(show)</a>",
            "collapser_tip": "Hide plan options and details",
            "collapser_exptip": "Show more"
        }
    },
    "devices": {
        "tracker": "Tracker",
        "camera": "Camera",
        "socket": "Socket"
    },
    "currency": {
        "gbp": "Pound Sterling",
        "brl": "Brazilian Real",
        "huf": "Hungarian Forint",
        "hkd": "Hong Kong Dollar",
        "dkk": "Danish Krone",
        "eur": "Euro",
        "ils": "Israeli New Shekel",
        "inr": "Indian Rupee",
        "idr": "Indonesian rupiah",
        "cad": "Canadian Dollar",
        "cny": "Renminbi",
        "krw": "South Korean Won",
        "myr": "Malaysian Ringgit",
        "mxn": "Mexican Peso",
        "nzd": "New Zealand Dollar",
        "nok": "Norwegian Krone",
        "pkr": "Pakistani Rupee",
        "pln": "Polish Złoty",
        "rub": "Russian rouble",
        "sgd": "Singapore Dollar",
        "usd": "U.S. Dollar",
        "twd": "New Taiwan Dollar",
        "thb": "Thai Baht",
        "try": "Turkish Lira",
        "php": "Philippine Peso",
        "czk": "Czech Koruna",
        "clp": "Chilean Peso",
        "sek": "Swedish Krona",
        "chf": "Swiss Franc",
        "zar": "South African Rand",
        "jpy": "Japanese Yen",
        "kzt": "Kazakhstan Tenge",
        "byr": "Belarusian Ruble",
        "aud": "Australian Dollar",
        "tjs": "Tajik Somoni",
        "uah": "Ukrainian Hryvnia",
        "kgs": "Kyrgyzstani Som",
        "tmt": "Turkmenistan Manat",
        "uzs": "Uzbekistani Som",
        "mdl": "Moldovan Leu",
        "gel": "Georgian Lari",
        "amd": "Armenian Dram",
        "azn": "Azerbaijani Manat",
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
        "tvd": "Tuvalu Dollar",
        "uyu": "Uruguay Peso",
        "vef": "Venezuela Bolivar Fuerte",
        "vnd": "Viet Nam Dong",
        "yer": "Yemen Rial",
        "zwd": "Zimbabwe Dollar",
        "mad": "Moroccan Dirham",
        "xaf": "Central African CFA Franc",
        "xof": "West African CFA Franc",
        "aed": "United Arab Emirates Dirham",
        "aoa": "Angolan Kwanza",
        "kwd": "Kuwaiti Dinar",
        "bdt": "Bangladeshi Taka",
        "kes": "Kenyan Shilling",
        "xpf": "Pacific Franc",
        "vuv": "Vanuatu Vatu",
        "mmk": "Burmese Kyat",
        "ssp": "South Sudanese Pound",
        "ves": "Venezuelan Bolívar",
        "stn": "São Tomé and Príncipe dobra",
        "mru": "Mauritanian Ouguiya",
        "ugx": "Ugandan Shilling",
        "pgk": "Papua New Guinean kina",
        "tzs": "Tanzanian Shilling",
        "bhd": "Bahraini Dinar",
        "bif": "Burundian Franc",
        "btn": "Bhutanese Ngultrum",
        "cdf": "Congolese Franc",
        "cve": "Cape Verde Escudo",
        "djf": "Djiboutian Franc",
        "dzd": "Algerian Dinar",
        "ern": "Eritrean Nakfa",
        "etb": "Ethiopian Birr",
        "gmd": "Gambian Dalasi",
        "gnf": "Guinean Franc",
        "htg": "Haitian Gourde",
        "iqd": "Iraqi Dinar",
        "jod": "Jordanian Dinar",
        "lsl": "Lesotho Loti",
        "lyd": "Libyan Dinar",
        "mga": "Malagasy Ariary",
        "mop": "Macau Pataca",
        "mvr": "Maldives Rufiyaa",
        "mwk": "Malawian Kwacha",
        "rwf": "Rwandan Franc",
        "sdg": "Sudanese Pound",
        "sll": "Sierra Leonean leone",
        "szl": "Swazi Lilangeni",
        "tnd": "Tunisian Dinar",
        "top": "Tongan Paʻanga",
        "wst": "Samoan Tālā",
        "zmw": "Zambian Kwacha",
        "kmf": "Comorian Franc"
    },
    "maps": {
        "roadmap": "Google roadmap",
        "satellite": "Google satellite",
        "hybrid": "Google hybrid",
        "yandex": "Yandex Maps",
        "yandex_satellite": "Yandex Satellite",
        yandex_hybrid: "Yandex Satellite with streets",
        "yandexpublic": "Yandex Crowdsourcing",
        "cdcom": "ProGorod Maps",
        "osm": "OpenStreet Maps",
        "osmmapnik": "OpenStreet Maps 2",
        "wikimapia": "Wikimapia",
        "navitel": "Navitel Maps",
        "doublegis": "DoubleGIS Maps",
        "mailru": "Mail.ru Maps",
        "kosmosnimki": "Kosmosnimki (OSM)",
        "sputnik": "Sputnik (OSM)",
        "here": "HERE Maps",
        "bing": "Bing Maps",
        "bing_satellite": "Bing Satellite",
        bing_hybrid: "Bing Satellite with streets"

    },
    "dealer_info": {
        "first": "total",
        "last": "of",
        clients: "Clients",
        subpaas: "Dealers"
    },
    "index": {
        "menu_text": "Home"
    },
    "users": {
        "menu_text": "Users",
        "create_btn": "New user",
        show_only_active_users: "Show only active users",
        "create_form": {
            "title": "New user",
            "main_fields": "General information",
            "contact_fields": "Contact details",
            "address_fields": "Address",
            "legal_fields": "Legal entity information",
            "password": "Password",
            "password_repeat": "Repeat password",
            "password_mismatched": "Passwords do not match",
            "language": "Default language",
            "time_zone": "Time zone",
            "save_btn": "Create User",
            "clear_btn": "Reset form",
            "copy_address": "Copy from address"
        },
        "edit_form": {
            "title": "Edit user",
            "save_btn": "Save changes",
            "return_btn": "Back"
        },
        "fields": {
            "creation_date": "Date of registration",
            "login": "Email address",
            "balance": "Balance",
            "bonus": "Bonus",
            "first_name": "Name",
            "middle_name": "Middle name",
            "last_name": "Surname",
            "activated": "Activated",
            "activated_t": "User active",
            "legal_type": "Legal status",
            "tin": "Tax number",
            "state_reg_num": "OGRN",
            "state_reg_num_sole": "OGRNIP",
            "legal_name": "Legal name",
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
            "trackers_count": "Devices",
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
            "password_mismatched": "Passwords do not match",
            discount: {
                value: "Discount",
                min_trackers: "Minimum number of trackers",
                end_date: "End date",
                permanent: "Permanent",
                set_permanent: "Set permanent"
            },
            "default_tariff": "Basic trackers plan",
            "default_tariff_hint": "The plan will be applied by default once the user has added a new tracker",
            "default_tariff_empty": "Not set up"
        },
        "password_form": {
            "title": "Changing password of user",
            "save_btn": "Set Password",
            "return_btn": "Cancel",
            "success_msg": "Password successfully changed"
        },
        "list": {
            "create_btn_text": "Create new user",
            "import_btn_text": "Import users",
            "empty_text": "No users found"
        },
        "session_alert": {
            "error": "Can't create user session",
            "title": "Your session code"
        },
        "session_hash": {
            "title": "User session key"
        },
        "card": {
            "tab_panel": {
                "trackers": {
                    "title": "User trackers"
                },
                "transactions": {
                    "title": "Transactions"
                }
            },
            "links": {
                "session_text": "Login as user",
                "hash_text": "Get session key",
                "activate_tracker": "Activate tracker",
                "user_edit": "Edit user",
                "user_change_password": "Change password",
                "transactions": "Transactions",
                "create_transaction": "Change balance",
                "wrong_config": "Check PConfig.js -> links -> appUrlTpl",
                "corrupt": "Remove user",
                "unblock_user": "Unblock user",
                "block_user": "Block user"
            },
            "user_blocked": "Blocked"
        },
        "unblock": {
            "alert": {
                "title": "Unblock user # {0}: {1}",
                "text": "After unlocking, the user will again have access to all the functions of the service. Unblock user?",
                "btn_ok": "Unblock"
            }
        },
        "block": {
            "alert": {
                "title": "Blocking user # {0}: {1}",
                "text": "After blocking, the user will not be able to use the service. He will not be able to manage employees or create tasks for them. The tracks of his employees will not be recorded and they will not be able to complete tasks. The user will see a message offering to contact the manager. Block user?",
                "label": "For block user enter manager's phone number",
                "btn_ok": "Block"
            }
        },
        "corrupt": {
            "alert": {
                "title": "Remove user?",
                "text": "User will be permanently removed from the database. All related trackers, data and sub-users will be lost.",
                "confirm_login_label": "Confirm user login",
                "confirm_login_error": "Incorrect user login"
            },
            "success_msg": "User {0} successfully removed"
        },
        "transactions": {
            "list": {
                "empty_text": "No transactions found",
                "title": "Transactions for user"
            },
            "fields": {
                "description": "Operation",
                "type": "Transaction type",
                "subtype": "Subtype",
                "date": "Date",
                "bonus_amount": "Bonus:",
                "old_bonus": "Old",
                "new_bonus": "New",
                "amount": "Amount:",
                "old_balance": "Old",
                "new_balance": "New",
                "total_refills": "Total refills",
                "total_charges": "Total charges",
                "type_set": {
                    "main_charge": "subscription",
                    "payment": "payment",
                    "tariff_charge": "telecom services",
                    "bonus_charge": "bonus refill"
                },
                "subtype_set": {
                    "monthly": "monthly",
                    "every_year": "annual",
                    "partner": "from a partner",
                    "activeday": "active day",
                    "everyday": "monthly by day",
                    "every_year": "annual",
                    "sms": "SMS message"
                },
                "invalid_date": "The end of the period must be after the start of the period"
            }
        },
        "transaction_add": {
            "title": "Changing balance (adding transaction) of users",
            "description": "Transaction description",
            "balance": "Balance changes",
            "bonus": "Bonus changes",
            "value_sup": "* Amount to add (positive) or subtract (negative)"
        },
        "combo_empty": "Select user",
        "select_error": "Tracker or clone was already bounded to selected user",
        "select": {
            "title": "Select user"
        },
        "download_btn": "Download user list"
    },
    "trackers": {
        "menu_text": "Trackers",
        "confirm_delete_clones": "Delete {0}?",
        "clones_delete_success_msg": "{1} successfully deleted.",
        "clones_delete_failure_msg": "{1} not deleted due to an error.",
        "clones_delete_failure_details_msg": "The clone was not deleted. An error occurred while deleting. {0}.",
        "clones_filter": {
            "all": "All",
            "clones": "Clones",
            "trackers": "Trackers"
        },
        "fields": {
            "tracker_id": "ID",
            "label": "Title",
            "model": "Model",
            "phone": "Phone",
            "device_id": "Device ID",
            "last_connection_date": "Last connection (UTC+0)",
            "creation_date": "Tracker activation date",
            "creation_date_short": "Activated",
            "creation_date_short2": "Activated",
            "connection_status": "Status",
            "tracker_id_exp": "Tracker number",
            "phone_exp": "Phone number",
            "owner": "Tracker owner",
            "owner_short": "Owner",
            "tariff": "Tracker plan",
            "deleted": "Hidden",
            "blocked": "Service suspended",
            "user_id": "User ID",
            "clone": "Clone",
            "clone_owner": "Clone owner",
            "comment": "Сomment",
            "options": {
                "clone": "clone",
                "deleted": "Hidden",
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
            "main_fields": "General information",
            "title": "Edit tracker",
            "save_btn": "Save changes",
            "return_btn": "Back"
        },
        "clone_form": {
            "title": "Create a clone for the tracker",
            "remove_failure_msg": "Removing clone failed",
            "failure_msg": "Creating clone failed",
            "remove_confirm": "Remove clone"
        },
        "group_clone_form": {
            "title": "Cloning group of trackers",
            "save_btn": "Clone",
            "grid_clone_label": "Clones will be added",
            "grid_clone_tip": "Use double click to change the clone label"
        },
        "group_owner_form": {
            "title": "Changing owner for group of trackers",
            "save_btn": "Changing owner",
            "grid_clone_label": "Trackers will be changed"
        },
        "tariff_form": {
            "title": "Change plan for tracker",
            "save_btn": "Save changes",
            "repay": "Repay remainder of current plan payment",
            "charge": "Charge user now (according to the new plan)",
            "charge_sup": "only for monthly based plans",
            "tariff_invalid": "must be different from current"
        },
        "list": {
            "create_btn_text": "Create new tracker",
            "owner_btn": "Change owner",
            "clone_btn": "Clone",
            "delete_clone_btn": "Delete",
            "edit_btn": "Edit selected",
            "empty_text": "No trackers found",
            "after_clone_success": "Cloned: {0}",
            "after_clone_failure": "Cloned: {0} successfully, {1} failed",
            "after_owner_success": "Changed: {0}",
            "after_owner_failure": "Changed: {0}, {1} change failed",
            "select_req": "Select trackers from list",
            "select_clone_req": "There are clones and trackers selected. Grouping operations not available.",
            "after_batch_corrupt_success": "Removed: {0}",
            "after_batch_corrupt_failure": "Removed: {0}, {1} filed to remove"
        },
        "card": {
            "links": {
                "change_tracker_user": "Change owner",
                "tracker_edit": "Edit tracker",
                "tracker_settings": "Tracker settings",
                "tracker_tariff_edit": "Change plan",
                "tracker_clone_create": "Create clone",
                "tracker_clone_remove": "Delete clone",
                "tracker_tariff": "Tracker plan",
                "tracker_owner": "Tracker owner",
                "tracker_console": "Air console",
                "tracker_corrupt": "Cancel registration",
                "tracker_register_retry": "Retry activation",
                "countdown_msg": "Timeout to perform reactivation has not expired"
            }
        },
        "console": {
            "title": "Air console for tracker",
            "connect_btn": "Start connection",
            "disconnect_btn": "Terminate session",
            "auto_scroll": "Auto-scroll",
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
                "title": "Remove tracker?",
                "text": "Device will be permanently removed from database. All related data will be lost.<br><br>Are you to remove device?"
            },
            "success_msg": "Device {0} successfully removed"
        },
        "batch_corrupt_form": {
            "title": "Mass removal of trackers from registration",
            "save_btn": "Remove",
            "grid_corrupt_label": "List to remove",
            "alert": {
                "confirm_secret_label": "Enter a secret word to confirm",
                "confirm_secret_invalid": "Stay where the squad is sent",
                "secret": "j0j0"
            }
        },
        "retry_registraion": {
            "alert": {
                "title": "Retry activation",
                "text": "Send activation commands to the device?"
            }
        },
        "confirm_update_owner_1": "The tracker will be moved to the following account {0} and will be assigned a new plan {1}",
        "confirm_update_owner_2": "The tracker will be moved to the following account {0}, with no changes to its plan "
    },
    "tariffs": {
        "menu_text": "Plans",
        "create_form": {
            "title": "Create a new plan",
            "main_fields": "General information",
            "save_btn": "Create a plan",
            "clear_btn": "Clear form",
            "options_fields": "Plan options",
            "prices_fields": "Rates"
        },
        "edit_form": {
            "title": "Edit plan",
            "save_btn": "Save changes"
        },
        "default_form": {
            "title": "Default plan settings"
        },
        "fields": {
            "tariff_id": "ID",
            "name": "Label",
            "group_id": "Group",
            "price": "Monthly payment",
            "device_limit": "Limit of devices",
            "free_days_device_limit": "Limit of devices with free period",
            "free_days_device_no_limit": "No limit",
            "device_type": "Device type",
            "store_period": "Store history for",
            "active": "Available for user",
            "has_reports": "Table reports available",
            "proportional_charge": "Monthly fee proportional charge",
            "incoming_sms": "Incoming SMS",
            "outgoing_sms": "Outgoing SMS",
            "service_sms": "Service SMS",
            "phone_call": "Phone calls",
            "traffic": "GPRS rate (per Mb)",
            "default_tariff": "default plan for devices with type «{0}»",
            "default_short": "default",
            "service_price": "the amount charged for service usage",
            "group_id_exp": "Plan group",
            "active_exp": "Users are allowed to select this plan",
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
            "create_btn_text": "Add new plan",
            "empty_text": "No plans found"
        },
        "card": {
            "edit_form_btn": "Edit plan",
            "create_form_btn": "Create plan",
            "add_form_btn": "Add new plan",
            "save_form_btn": "Save plan",
            "currency_in": "(in {0})",
            "links": {
                "make_default": "Mark as default",
                "tariff_edit": "Edit plan"
            },
            "tab_panel": {
                "trackers": {
                    "title": "Trackers on this plan"
                }
            },
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
                "4": "If you use bundle SIM cards in devices, you can additionally charge users for incoming SMS messages from these SIM cards (e.g. confirmations from devices about accomplishing the commands)",
                "5": "If you use bundle SIM cards in devices, you can set up a fee for its usage based on traffic volume (traffic in both directions is billed)",
                "6": "User notifications by automatic phone calls are currently supported for limited number of regions and limited number of languages",
                "7": "If user reaches the limit, he will not be able to add or track more assets in his account. In case user has assets on different plans, the minimum value will be applied.",
                "8": "The system logs and stores data (about trips, events, etc.) within set time span relative to the current date only. If you extend the time span, the older logs might not be available.",
                "9": "Select maps available for user if he tracks assets on the current plan. The list of all available maps is defined by the preferences for your service.",
                "10": "Select options which are available for users who have assets on this plan",
                "11": "Select options which are available for users who have assets on this plan",
                "12": "The price user pays to you as a service provider. The billing system uses the currency you defined in Account settings.<br /><br />If you see “N/A” instead of value, it means that service is not offered or cannot be billed by the billing system.",
                "13": "The price you pay for services provided to you by Navixy. If you see “N/A” instead of value, it means that service is not offered (not ordered or unavailable).",
                "14": "This plan will be used by default when user activates a new device. Note: this setting will be overridden by the plan defined in the activation code parameters.",
                "15": "Integer number (0, 1, 2, …) of the group to which this plan belongs to",
                "16": "Mark the checkbox if you allow users to switch their devices to this plan (from other plans within the same group) by their own",
                "17": "The plan will be set by default for all devices added by user, if no activation code used.<br /><br />When user enters an activation code its parameters are used as primary.",
                "18": "Amount of complimentary days user gets after adding a device (including the day when device was added).",
                "19": "Amount of money complimentary charged to user’s balance after he adds a new device.<br /><br />It can’t be used for general service fee payments, but only for additional services, e.g. SMS notifications.",
                "20": "If the checkbox is marked, user will be charged proportionally to the amount of days left from the date of last payment till the end of the current month.<br /><br />If the checkbox is cleared, user will be always charged a full monthly fee after the service for the device has been renewed. For example, if user failed to pay on time and filled up their balance on the 10th day, they will be charged for the full month.",
                "plan_options": "<b>Notice about plans compatibility.</b> If there are assets on different plans within the same user account, some maps and options (which are not included into all plans) might become unavailable for that user. You can avoid this error by nesting similar plans into groups, thus making it impossible for users to have devices on incompatible plans. This is the only way to offer flexible configuration of your plans and not give users the ability to bypass the set pricing.",
                "plan_availability": "By combining plans into groups, you can organize your plans better and allow your users to switch between plans on their own. While you can assign any plan for any asset in the Admin panel, your users will only be able to switch to the plans that are marked with appropriate checkbox.",
                "free_days_device_limit": "If user reaches the limit, new assets will have no free period"

            }
        },
        "combo_empty": "Select plan",
        "select_error": "This plan is not available",
        "select": {
            "title": "Select plan"
        },
        "types": {
            "activeday": "Daily",
            "monthly": "Monthly",
            "every_year": "Annual",
            "everyday": "Monthly (daily debit)"
        },
        "price_type": {
            "monthly": "Monthly fee",
            "activeday": "Daily fee",
            "every_year": "Annual fee",
            "everyday": "Monthly fee"
        }
    },
    "codes": {
        "menu_text": "Activation codes",
        "fields": {
            "activated": "Status",
            "activation_date": "Activation date",
            "bonus_amount": "Bonus",
            "code": "Code",
            "device_id": "Device ID",
            "device_type": "Device type",
            "free_days": "Free days",
            "money_amount": "Amount",
            "tariff_id": "Plan ID",
            "tariff_name": "Plan",
            "status": {
                "activated": "activated",
                "no_activated": "not activated"
            }
        },
        "edit_form": {
            "title": "Edit activation codes",
            "save_btn": "Save changes",
            "selected_count": "Codes selected",
            "device_type": "Type of devices for selected codes"
        },
        "create_form": {
            "title": "Create activation codes",
            "save_btn": "Create codes",
            "new_codes_count": "Amount of new codes"
        },
        "list": {
            "empty_text": "No activation codes found",
            "create_btn": "Create new",
            "edit_btn": "Edit selected",
            "reload_btn": "Reload",
            "after_create_success": "Created: {0}",
            "after_edit_success": "Changes: {0}",
            "after_edit_failure": "Changed: {0} successfully, {1} failed",
            "select_req": "Select codes from list",
            "same_type_req": "You must specify one device type codes",
            "edited_tip": "changed",
            "faq_link": "https://www.navixy.com/docs/admin-panel-docs/activation-codes/ ",
            "faq_text": "Activation codes FAQ",
            "filters": {
                "activated": "Activated",
                "no_activated": "Not activated",
                "trackers": "Trackers",
                "cameras": "Cameras",
                "sockets": "Sockets",
                "toggle_all": "Show all"
            }
        }
    },
    "settings": {
        "menu_text": "Account management",
        "themes": {
            "title": "UI themes",
            "main_info": "Select a color theme for the user interface of your web platform",
            "mobile_title": "Mobile app",
            "web_title": "Web interface",
            "main_title": "Select theme",
            "preview_title": "Theme screenshots",
            "preview_btn": "Preview in monitoring",
            "list": {
                "metromorph": {
                    "title": "Metromorph",
                    "description": "Default UI theme"
                }
            },
            'mobile_app': "Mobile app"
        },
        "subscription": {
            "title": "Subscription",
            "activation_btn_text": "Pay activation fee now (500 USD) online",
            "monthly_fee_btn_text": "Pay online",
            "activation_hint": "You are evaluating Navixy ServerMate trial version (till {0}). To continue with the commercial version please choose your subscription options and proceed with the activation payment:",
            "monthly_fee_hint": "Review your subscription’s balance and add funds here. We thank you for your timely payments. To avoid the automatic disruption of your subscription please always close your bills within 10 days after you received the invoice for the previous month.",
            "pending_amount": "Pending amount: {0}",
            "current_balance": "Current balance: {0}",
            "subscription_hint": "To complete the online payment you will be redirected to our payment gateway’s secure web page. You can use various payment options there. Once the payment is confirmed, your funds will be automatically added to your ServerMate account. For any questions please contact us by email accounting@navixy.com",
            "paas_subscription_hint": "To complete the online payment you will be redirected to our payment gateway’s secure web page. You can use various payment options there. Once the payment is confirmed, your funds will be automatically added to your ServerMate account. For any questions please contact your billing department.",
            "payment_recieved_msg": "Your payment was successfully executed and will be processed shortly.",
            "waiting_activation_fee": "Your payment was successfully executed and will be processed shortly.",
            "license_balance": "Pending amount {0}",
            "pay_with_avangate": "Pay with 2Checkout",
            "pay_with_stripe": "Pay with Stripe"
        },
        "email_gateways": {
            "title": "Email gateways",
            "description": "To ensure the deliverability of emails from the platform to your users (notifications, alerts, invoices, etc.) and avoid anti-spam filters we offer several options on which email gateway to use.",
            "mandril_text": "If you want to use your customised email address in the ‘From’ field, please configure <b>SPF</b> and <b>DKIM</b> records for your domain as described in our <a href=\"https://www.navixy.com/docs/admin-panel-docs/settings/email/navixy-email-gateway/\" target=\"_blank\">manual</a> first, then send us your request to support@navixy.com with letting us know which email address you want to use. As soon as your records will be verified, we’ll accomplish your request",
            "paas_mandril_text": "If you want to use your customised email address in the ‘From’ field, please configure <b>SPF</b> and <b>DKIM</b> records for your domain as described in the manual first, then send us your request with letting us know which email address you want to use. As soon as your records will be verified, we’ll accomplish your request",
            "label": "Server label",
            "default_label": "Your SMTP server",
            "encryption": {
                "label": "Encryption",
                "tls": "TLS",
                "ssl": "SSL",
                "none": "None"
            },
            "auth_label": "Authentication",
            "trust_all_hosts": "Trust all hosts",
            "host_label": "SMTP host",
            "port_label": "SMTP port",
            "host_placeholder": "IP or domain name",
            "user": "Username",
            "password": "Password",
            "default_from_email": "Default from",
            "save_btn_text": "Save settings",
            "gateway_assing_success_msg": "Email gate has been successfully assigned"
        },
        "test_email": {
            "title": "Send test email",
            "email_field": "Target email",
            "send_test_email_btn": "Send test email",
            "send_btn": "Send"
        },
        "fields": {
            "service_title": "Service title",
            "page_title": "Page title",
            "locale": "User interface language",
            "demo_login": "Demo user",
            "demo_password": "Demo password",
            "maps_title": "Available maps",
            "maps_default": {
                "type": "Default map",
                "location_lat": "Default latitude",
                "location_lng": "Default longitude",
                "zoom": "Default zoom"
            },
            "google_client_id": "Client ID or API-key for google maps {0}",
            "google_client_id_link": "<a href={0} target=\"blank\">Get api key</a>",
            "currency": "Billing currency for users",
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
            "geocoder": "Geocoding",
            "default_geocoder": "Geocoding",
            "route_provider": "Route provider",
            "translit": "Transliteration for SMS",
            "measurement_system": "Measurement system",
            "date_format": "Date format",
            "hour_mode": "Time format",
            "payment_description": "Payment options and terms",
            "support_email": "Email for customers support",
            "alerts_email": "Email for important alerts and invoices",
            "time_zone": "Time zone",
            "service_title_ph": "marketing name",
            "service_title_hint": "Your company name used on the login page and browser tabs",
            "footer_text_ph": "Some text you want to add into the footer of the login page",
            "footer_text_hint": "Custom text for the footer of the login page, links to privacy policy, etc. Links starting with http: and mailto: will be active. Use plain text only, HTML tags are not supported.",
            "promo_url_ph": "http://www.company.com",
            "promo_url_hint": "Your company’s website, starting with http://. If set, this link is used for \"About\" at the login page.",
            "favicon_hint": "Displayed on the browser tab. Important: not supported by Internet Explorer.",
            "logo_hint": "Displayed on the login page and in the Admin Panel",
            "app_logo_hint": "Displayed on the mobile app login screen",
            "monitoring_logo_hint": "Displayed in the user web interface menu",
            "document_logo_hint": "Displayed in reports and email notifications",
            "login_wallpaper_hint": "Upload a background image displayed on the login page",
            "domain_ph": ".navixy.com",
            "paas_domain_ph": ".domain.com",
            "domain_hint": "Launch and run your service on your own domain name (e.g.: tracking.company.com). Before configuring a custom domain here, you need to setup an appropriate CNAME-record on your DNS server and point it to saas.navixy.com.",
            "paas_domain_hint": "Launch and run your service on your own domain name (e.g.: tracking.company.com). Before configuring a custom domain here, you need to setup your DNS server accordingly.",
            "domain_help": "How do I set up a CNAME-record",
            "domain_help_link": "https://docs.navixy.com/admin-panel/domain-name",
            "domain_google_key_help": "How domain name affects the use of Google Maps",
            "domain_google_key_details": "<br>Click on \"How domain name affects the use of Google Maps\" above to get more information.",
            "domain_google_key_link":  "https://docs.navixy.com/admin-panel/maps",
            "domain_mismatched": "Domain name must include <b>{0}</b>",
            "get_key_link": "https://www.navixy.com/docs/admin-panel-docs/settings/cartography/gis/premium-gis/",
            "locale_hint": "The language used by default for all new user accounts. Users can also change the preferred language in their account settings.",
            "currency_hint": "Choose the currency which is commonly used in your region. The system will bill your users in this currency and according to the service plans you set up.",
            "allow_registration": "Allow users to create accounts",
            "allow_registration_hint": "By checking this checkbox you allow users to create user accounts on their own – from the login page and with mobile apps. If the checkbox is disabled, you will able to create new user accounts from this Admin Panel only (and with Admin Panel API).",
            "show_mobile_apps_hint": "When accessing a platform on smartphones or tablets, users will be prompted to download the mobile app or continue with the mobile version of the web interface",
            "measurement_system_hint": "All physical quantities (length, weight, volume, etc.) will be represented in chosen measurement system",
            "time_zone_hint": "The most typical time zone for your users",
            "translit_hint": "Transliteration allow to reduce the amount of symbols in SMS by replacing the symbols of national alphabet with the closest latin ones",
            "geocoder_hint": "The service which transforms the address to coordinates and versa",
            "route_provider_hint": "The service for finding optimal directions between start place and destinations",
            "geolocation": "Cell ID geolocation",
            "geolocation_hint": "Backup geolocation via cellular base stations allows to acquire approximate location of the assets, when signals of satellite navigation systems can not be received (i.e. in the underground parking, in the subway)",
            "speed_restriction": "Speed limits",
            "speed_restriction_hint": "Service allows to detect speed limits violations according to traffic regulations and road signs. The speed limit data accuracy is not guaranteed, however; the data may be estimated, incomplete or outdated.",
            "roads_snap": "Snap to roads",
            "roads_snap_hint": "Service visually improves the tracks received from GPS devices to the most likely roads the vehicle was traveling along. It helps to draw paths that smoothly follow the geometry of the road.",
            "daily_reports_ph": "email1@company.com,email2@company.com,...",
            "newsletters": "Newsletters",
            "newsletters_hint": "Emails for newsletters and important updates. Use comma to separate multiple addresses.",
            "daily_reports": "Daily reports",
            "daily_reports_hint": "Emails for daily reports on revenue. Use comma to separate multiple addresses.",
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
            "display_model_features_link": "Show a link to a website with information about the model",
            "display_model_features_link_hint": "User can be provided with additional information about the model of the device activated",
            "do_not_apply_default_seetings_during_activation": "Do not send default settings",
            "do_not_apply_default_seetings_during_activation_hint": "If selected, the platform will not send configurational SMS and GPRS commands to the device with default settings. The device should be manually configured for its activation on the platform.",
            "no_auto_create_rules": "Do not create default event rules\n",
            "no_auto_create_rules_hint": "If selected, the platform will not create default event rules. You will need to create them manually.",
            "no_auto_create_sensors": "Do not create default sensors",
            "no_auto_create_sensors_hint": "If selected, the platform will not create default sensors. You will need to create them manually.",
            "show_call_notifications": "Allow configuration of voice notifications",
            "show_call_notifications_hint": "",
            "monitoring_logo_clickable": "Click on the logo in the interface opens a promo web-site",
            "monitoring_logo_clickable_hint": "",
            "privacy_policy_title": "Link to Privacy Policy",
            "privacy_policy_hint": "Please insert a link to Privacy Policy. The link should begin with http: or https.",
            "tos_title": "Terms of Use",
            "tos_hint": "Insert random text with links. Users will see this text when clicking on the “Terms of Use” link in a pop-up window. Links starting with http:,https: and mailto: will be converted into active hyperlinks. Please, use plain text only, html marking is not allowed.",
            premium_gis: 'Activate "Premium GIS" package from Navixy which includes licensed Google Maps usage and improved geo-services (like geocoding, directions, LBS, etc.). {0}',
            paas_premium_gis: 'Activate "Premium GIS" package which includes licensed Google Maps usage and improved geo-services (like geocoding, directions, LBS, etc.). {0}',
            premium_gis_link: ' <a href="{0}"  target="_blank">Read more</a>',
            paas_maps_is_unavailable: 'This map type is not available on these domains: {0}',
            'unavaliable': 'Not available',
            'menu_preset': 'Select menu preset',
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
                "desc": "The service provided by SMSTraffic company (<a href=\"http://www.smstraffic.ru\" target=\"_blank\">www.smstraffic.ru</a>)",
                "credentials": {
                    "login": "Login",
                    "password": "Password"
                }
            },
            "yaestar": {
                "name": "Yaestar NeoGate",
                "desc": "Hardware gateway, which you can purchase and install locally (<a href=\"http://www.yeastar.com\" target=\"_blank\">www.yeastar.com</a>)",
                "credentials": {
                    "ip": "Server IP",
                    "port": "Port",
                    "login": "Login",
                    "password": "Password"
                }
            },
            "smpp": {
                "name": "SMPP v.3.4",
                "desc": "Common industrial standard for communication with SMS Gateways (<a href=\"https://en.wikipedia.org/wiki/Short_Message_Peer-to-Peer\" target=\"_blank\">Wikipedia</a>)",
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
        },
        "edit_form": {
            "title": "Service Settings",
            "save_btn": "Save",
            "save_msg": "Settings successfully saved",
            "main_fields": "Basic Settings",
            "map_fields": "Maps settings",
            "permission_fields": "Notification settings",
            "domain_sup": "* Map choice is limited for subdomains of *{0}",
            "custom_fields": "Customization",
            "main_buttons_title": "Displaying buttons",
            "show_mobile_apps": "Show mobile apps download buttons",
            "main_texts_title": "Main texts",
            "footer_texts_title": "Text in the basement of the login page",
            "logo_title": "Logo",
            "app_logo_title": "Logo in mobile app",
            "monitoring_logo_title": "User interface logo",
            "document_logo_title": "Documents and notifications logo",
            "document_logo": "Documents and notifications logo",
            "favicon_title": "Favicon",
            "login_wallpaper_title": "Login page background",
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
            "demo_hint": "Choose user account which will be used for demo purposes and available on login page (optional)",
            "user_notifications_title": "Notifications to users",
            "user_notifications_hint": "Settings for notifications from your tracking system to users: about geo-events, low balance, password recovering, etc.",
            "special_notifications_title": "Notifications to administrators",
            "special_notifications_hint": "System notifications to administrators about service status, statistics and other",
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
            "accounts_geocoding_title": "Cartography",
            "account_info": "These user profile settings will be applied for every new user account. When it is required, users can change default settings in their accounts themselves",
            "account_roads_title": "Roads",
            "emails_fields": "Email messages",
            "emails_main_title": "Main settings",
            "emails_main_info": "Settings for sending Emails to users about geo based events, low balance warnings, etc.",
            "sms_fields": "SMS messages",
            "sms_main_title": "Main settings",
            "sms_main_info": "Configure SMS messages and SMS gateways which are used for bi-directional communication between service platform and users, service platform and devices<br>You can use same or different gateways to deliver messages to users and devices",
            "sms_m2m_title": "M2M messages",
            "sms_m2m_info": "M2M message exchange between service platform and devices through SMS channel plays important role for simple device activation and remote management.<br /><br />            SMS channel is used for the following purposes:<br /><ul><li>initial automatic device configuration (APN, server address, etc.) of majority devices</li><li>receiving confirmations from devices about command accomplishing</li><li>as a backup channel to locate assets when GPRS is not available (low signal, international roaming, etc.)</li><li>for models which support such a feature</li></ul><br />.Furthermore, for those budget models which do not offer the possibility to control them remotely over GPRS/IP protocol, their settings change and output control is also performed via SMS channel.",
            "sms_user_title": "User notifications",
            "sms_user_info": "The service platform can deliver SMS notifications to users about geo-based events they want to stay aware of. Besides, the platform can also provide a special phone number, to which users can send SMS commands from their trusted phone numbers (command examples: ‘?’ – acquire location, ‘ON 1’ – enable device output).",
            "branding_main_info": "Customize the appearance of your service by using your brand name, logo, color scheme, and marketing attributes.",
            "branding_main_info_first_condition": "Upgrade to white label version by contacting your personal manager in order to customise the appearance of your tracking service.",
            "branding_main_info_first_condition_hint": "The current version does not allow you to:<br /> - Upload your own logos to the web interface and mobile app.<br /> - Choose a color scheme for the web interface and mobile app.<br /> - Set up a custom domain name.",
            "branding_main_info_second_condition": "Upgrade to white label version by contacting your personal manager in order to customise the appearance of your platform interface.",
            "branding_main_info_second_condition_hint": "The current version does not allow you to:<br /> - Upload your own logos to the web interface.<br /> - Choose a color scheme for the web interface.<br /> - Set up a custom domain name.",
            "branding_main_info_third_condition": "Upgrade to white label version by contacting your personal manager in order to customise the appearance of the X-GPS Monitor mobile app.",
            "branding_main_info_third_condition_hint": "The current version does not allow you to:<br /> - Upload your own logo to the mobile app.<br /> - Choose a color scheme for the mobile app.",
            "service_info": "Define the preferences of your service",
            "maps_hint": "Mark the maps which you want to be enabled for your service platform. You can also restrict particular users to access specific maps – by using the map option of their plans.<br /><br />Usage of selected maps must be granted to you by their rights owners. Navixy is not responsible for any violation of the maps license terms by you or your end users.",
            "paas_maps_hint": "Mark the maps which you want to be enabled for your service platform. You can also restrict particular users to access specific maps – by using the map option of their plans.<br /><br />Usage of selected maps must be granted to you by their rights owners. Our company is not responsible for any violation of the maps license terms by you or your end users.",
            "google_maps_alert": 'Requires Google Maps client credentials or activation of "Premium GIS" package from Navixy',
            "paas_google_maps_alert": 'Requires Google Maps client credentials or activation of "Premium GIS" package.',
            "maps_defaults_hint": "Select a default map and map center when your users log in for the first time",
            "service_maps_preview": "Map default settings preview",
            "service_maps_preview_info": "You an example of the initial display of the map view on the user interface. You can change center of the map by moving the marker and zoom by using tool or by using the mouse wheel on the map.",
            "map_edit_btn": "Visual editor",
            "map_window": {
                "title": "Map default settings – Visual editor",
                "header": "Choose default map center by moving the crosshair with your mouse. To select default map zoom use the scroll wheel or zoom in / out buttons.",
                "save_btn": "Choose"
            },
            "clear_btn": "Reset",
            "device_activation": "Device activation",
            "misc_header": "Optional features",

            "ui_settings_header": "UI Settings",
            "support": "Support",
            "device_settings_checkbox": "Show Devices and Settings menu item",
            "device_settings_checkbox_hint": "The setting will be applied to all users. However, you can enable or disable this option for each user individually in the user profile",
            "display_release_notes": "Display release notes",
            "display_release_notes_hint": "This option enables the display of release updates history within the user interface. Languages supported natively are English, Spanish, French, and Russian.",
            "menu_editor": "Menu editor"
        },
        "upload_form": {
            "save_btn": "Upload",
            "cancel_btn": "Cancel",
            "upload_btn": "View",
            "title": "Upload image. {0}",
            "titles": {
                "logo": "Logo",
                "monitoring_logo": "Additional logo",
                "document_logo": "Document logo",
                "favicon": "Favicon",
                "login_wallpaper": "Wallpaper for login page",
                "desktop_wallpaper": "Service page wallpaper",
                "app_logo": "Logo in mobile app"
            },
            "tips": {
                "logo": "It is recommended to use the logo image with the transparent background (PNG) and minimal width of 200px.",
                "monitoring_logo": "It is recommended to use the logo image with the transparent background (PNG) and minimal width of 200px.",
                "document_logo": "It is recommended to use the logo image with the transparent background (PNG) and minimal width of 200px.",
                "favicon": "It is recommended to use the logo image with the transparent background and size of 32x32 px.",
                "login_wallpaper": "It is recommended to use horizontally oriented background images with a resolution of at least 1920x1080 pixels (FullHD) and in JPEG format.",
                "app_logo": "It is recommended to use the logo image with the transparent background (PNG) and minimal width of 200px."
            },
            "img_title": "Image format {0} (max size {1} MB)",
            "error_text": "Failed to load image"
        },
        "domain_warnings": {
            "domain_warning": "Domain name has been changed",
            "continue": "Continue",
            "domain_changed": "Domain name change may affect Google Maps availability.</br><a target=\"_blank\" href=\"{0}\">Read more about Google Maps for your domain.</a>"
        },
        "payments": {
            "type": {
                "avangate": "2Checkout",
                "stripe": "Stripe"
            },
            "stripe": {
                "header_text": "You can pay by Visa, MasterCard, Maestro, and others.<br><br>",
                "payment_window_title": "Enter card details",
                "short_name": "Credit cards",
                "name": "Payment by credit card",
                "amount": "Payment Amount",
                "single_payment_submit": "Top up balance",
                "auto_payment_submit": "Turn on AutoPay",
                "card_holder": "Cardholder Name",
                "card_holder_placeholder": "For ex., CHRIS VANAGS",
                "card_number": "Card Number",
                "cvc_hint": "3 or 4 digits",
                "expiration": "Valid THRU",
                "success_title": "Success!",
                "success_msg": "The payment was successful. Your balance will be topped up in a short time",
                "error_title": "An error occurred",
                "error_msg": "An unexpected error occurred while making a payment. Please try again.",
                "reset_btn": " Try again",
                "success_btn": "OK",
                "bind_card_message": "In order to turn on the AutoPay, please enter your credit card details",
                "hint": "Secure payments powered by Stripe",
                "errors": {
                    "card_holder_required": "Card holder name is required"
                },
                "errors_descriptions": {
                    "7": "The entered amount is too low. Please enter an amount higher than $0.5.",
                    "215": "Error with Stripe operation",
                    "251": "Not enough money on the card"
                }
            }
        }
    },
    "accounting": {
        "menu_text": "Accounting",
        "report_msg": {
            "title": "Confirm email-newsletter",
            "text": "Alert customers about exporting data to 1C for <b>{0}</b>.<br>You sure you want make <b>email-newsletter</b>?"
        },
        "report_success": "Email-newsletter successful",
        "form": {
            "title": "«1C:Enterprise» Data exporting",
            "export1c": {
                "tab_title": "Accounting",
                "save_btn": "Get 1C data file",
                "report_btn": "Submit deeds by email",
                "fields": {
                    "month": "Select month",
                    "last_act": "Last deed number",
                    "check": "Ignore errors"
                },
                errors_window: {
                    title: "Validation errors occurred during export process",
                    close: "Close",
                    users_list: "Users",
                    dealers_list: "PaaS"
                }
            },

            payments_avangate: {
                "tab_title": "Avangate"
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
                    "sberbank": "Sberbank",
                    "yandex": "Yandex",
                    "ios_inapp": "Inapp purchase(isOS)",
                    "android_inapp": "Inapp purchase(Android)"
                }
            }
        }
    },
    "payments": {
        "menu_text": "Payments",
        "import_sberbank": {
            "title": "Sberbank payments import",
            "save_btn": "Import payments",
            "upload_btn": "View",
            "upload_loading": "Uploading file",
            "error_text": "Failed to import payments",
            "fields": {
                "file_title": "Import {0} file (max size {1} Mb)"
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
                "imei_same_order": "Error. Set your phone\"s IMEI code \"{0}\" is already attached to the current order.",
                "imei_order_set": "Attention! Set your phone\"s IMEI code \"{0}\" is already assigned to the order number \"{1}\".",
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
    "measurement_systems": {
        "metric": "Metric",
        "imperial": "Imperial",
        "us": "US",
        "metric_gal_us": "Metric + Gallons (US)",
        "nautical": "Nautical"
    },
    "hour_modes": {
        "twelve": "12-hour clock (5:30 PM)",
        "twentyfour": "24-hour clock (17:30)",
        "default": "Default"
    },
    "date_formats": {
        "default": "Default",
        "ddMMyyyy_dots": "01.12.2021 (DD.MM.YYYY)",
        "ddMMyyyy_slashes": "01/12/2021(DD/MM/YYYY')",
        "MMddyyyy_hyphens": "12-01-2021 (MM-DD-YYYY)",
        "yyyyMMdd_hyphens": "2021-12-01 (YYYY-MM-DD)",
        "dMMMy": "1 Dec 2021 (DD MMM YYYY)",
        "dMMMMy": "1 December 2021 (DD MMMM YYYY)"
    },
    "route_providers": {
        "progorod": "Basic GIS (Progorod)",
        "google": "Premium GIS (Google)",
        "osrm": "Basic GIS (OSRM)"
    },
    "geocoders": {
        "google": "Premium GIS (Google)",
        "yandex": "Basic GIS (Yandex)",
        "progorod": "Basic GIS (Progorod)",
        "osm": "Basic GIS (OpenStreetMap)"
    },
    "geolocation": {
        "disabled": "Disabled",
        "navixy": "Mozilla location services / @Navixy Telehouse",
        "paas_navixy": "Mozilla location services / @Telehouse",
        "mozilla": "Mozilla location services",
        "combain": "Combain"
    },
    "speed_restriction": {
        "disabled": "Disabled",
        "google": "Google Maps Roads",
        "quazar": "Quazar"
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
        "TVD": "{0} $",
        "UYU": "{0} $U",
        "VEF": "{0} Bs",
        "VND": "{0} ₫",
        "YER": "{0} ﷼",
        "ZWD": "{0} Z$",
        "MAD": "{0} Dh",
        "XOF": "{0} franc",
        "XAF": "{0} franc",
        "AED": "{0} Dh",
        "AOA": "{0} Kz",
        "KWD": "KD {0}",
        "BDT": "{0} ৳",
        "KES": "{0} KSh",
        "XPF": "{0} CFP",
        "VUV": "{0} VT",
        "MMK": "K {0}",
        "SSP": "{0} SS£",
        "VES": "{0} Bs.",
        "STN": "{0} Db",
        "MRU": "{0} UM",
        "UGX": "{0} USh",
        "PGK": "{0} K",
        "TZS": "{0} TSh",
        "BHD": "{0} BD",
        "BIF": "{0} FBu",
        "BTN": "{0} BTN",
        "CDF": "{0} FC",
        "CVE": "{0} $",
        "DJF": "{0} Fdj",
        "DZD": "{0} DA",
        "ERN": "{0} Nkf",
        "ETB": "{0} Br",
        "GMD": "{0} D",
        "GNF": "{0} GFr",
        "HTG": "{0} G",
        "IQD": "{0}  د.ع",
        "JOD": "{0} JD",
        "LSL": "{0} L",
        "LYD": "{0} LD",
        "MGA": "{0} Ar",
        "MOP": "{0} MOP$",
        "MVR": "{0} Rf",
        "MWK": "{0} MK",
        "RWF": "{0} FRw",
        "SDG": "{0} SDG",
        "SLL": "{0} Le",
        "SZL": "E {0}",
        "TND": "{0} DT",
        "TOP": "{0} T$",
        "WST": "{0} WS$",
        "ZMW": "{0} ZK",
        "KMF": "{0} CF"
    },
    "features": {
        "api": "API",
        "app_tasks": "Field service",
        "app_tasks_link": "<a href='https://www.navixy.com/docs/user/web-interface-docs/tasks/' target='_blank'>{0}</a>",
        "app_fleet": "Fleet",
        "app_reports": "Reports",
        "app_reports_link": "<a href='https://www.navixy.com/docs/user/web-interface-docs/reports-docs/' target='_blank'>{0}</a>",
        "batch_operations": "Batch operations",
        "statuses": "Work statuses",
        "custom_maps": "Custom maps",
        "event_notification": "Event notifications",
        "geocoding": "Geocoding",
        "lbs": "Location by Cell ID",
        "map_layers": "Map layers",
        "street_view": "Street view",
        "custom_fields": "Custom fields",
        "multilevel_access": "Users and roles",
        "priority_support": "Priority support",
        "retranslation": "Retranslation",
        "report_xls": "Reports to file",
        "report_scheduled": "Scheduled reports",
        "report_scheduled_link": "<a href='https://www.navixy.com/docs/user/web-interface-docs/reports-docs/scheduled-reports/' target='_blank'>{0}</a>",
        "routing": "Routing",
        "driver_journal": "Driver Journal",
        "ui_mobile": "Mobile web interface",
        "weblocator": "Geo links",
        "chat": "Chat",
        "checkins": "Check-ins on the map",
        "route_import": "Import routes",
        "customer_requests": "Customer Requests"
    },
    "map": {
        "zoom_in": "Zoom in",
        "zoom_out": "Zoom out"
    },
    "map_type_label": "Map",
    "premium_gps_has_own_key": "Asset tracking (Google)",
    "premium_gps_caution": "Available on Premium GIS",
    "premium_gps_warning_tip": "Ask your manager for the package",
    "premium_gps_warning_error": "This value available only on Premium GIS",

    reports: {
        active_trackers: {
            empty: "There are no active trackers",
            title: "Active devices",
            count_label: "Devices",
            month: "Date",
            open_tracker: "Go to device",
            own_devices: "Your devices",
            subpaas_devices: "Dealers devices"
        },
        menu_text: "Reports"
    },
    subpaas: {
        notice_text: "Current reseller admin panel: {0}  <a>Go back to the main admin panel</a>",
        payment_wait_text: "Your personal Navixy manager will contact you soon to send the invoice.",
        list: {
            empty_text: "Dealers not found",
            create_btn_text: "Create a reseller",
            users: "Users",
            users_count: "Registered",
            active_users_count: "Active",
            trackers: "Devices",
            trackers_count: "Registered",
            active_trackers_count: "Active"
        },
        menu_text: "Resellers",
        card: {
            links: {
                session_text: "Access admin panel",
                subpaas_edit: "Edit reseller",
                subpaas_change_password: "Change password",
                invoice_view: "View invoice",
                invoice_request: "Get invoice by email",
                avangate_pay: "Pay online"

            }
        },
        edit_form: {
            title: "Edit reseller",
            save_btn: "Save"
        },
        password_form: {
            title: "Change Reseller’s password",
            password: "New password",
            password_repeat: "Repeat new password",
            save_btn: "Change password",
            return_btn: "Cancel",
            success_msg: "Password successfully changed"
        },

        create_form: {
            title: "New reseller",
            main_fields: "Main information:",
            misc_fields: "Additional:",
            premium_gis_hint: "To activate the Premium GIS package for the reseller, please contact your technical support.",
            save_btn: "Create",
            "password_mismatched": "Passwords do not match"
        },

        fields: {
            subpaas_id: "ID",
            block_type: "Status",
            creation_date: "Created",
            title: "Name",
            login: "Login",
            users_count: "Registered users",
            active_users_count: "Active users",
            trackers_count: "Registered devices",
            active_trackers_count: "Active devices",
            link_monitoring: "Domain",
            email: "Email",
            jur_name: "Legal name",
            jur_country: "Country",
            contact_fio: "Contact person",
            contact_phone: "Phone",
            contact_post: "Post",
            password: "Password",
            password_repeat: "Repeat password",
            password_change_tip: "Create a new password for Reseller’s access to the Admin Panel",
            "password_mismatched": "Passwords do not match"
        },

        block_status: {
            NOT_BLOCKED: "Active",
            INITIAL_BLOCK: "Not paid",
            BLOCK_LOGIN: "Admin Panel suspended",
            CLIENTS_BLOCKED: "Service fully suspended",
            DELETED: "Removed"
        },

        bill: {
            title: "Invoice",
            msg: "Invoice was sent on your email"
        }
    },
    exponential: {
        "title": "Your current pricing",
        "xaxis": "Devices amount",
        "yaxis": "Price",
        update_btn: "Refresh",
        start: "Min amount",
        end: "Max amount"
    },
    plain_price: {
        license_pay: 'Minimum monthly fee',
        price_per_tracker_month: 'Monthly price per active tracker ',
        price_per_tracker_daily: ' Daily price per active tracker'
    },
    tutorial: {
        user: 'To get started, please create a user',
        tracker: 'In order to continue, please activate a tracker',
        tracking: 'To start tracking, please go to the monitoring system'
    },

    "sa-token": {
        "sa-token-title": "On-premise license key",
        "field": "License key"
    },

    "menu-editor": {
        "default-preset": "Default menu preset"
    }
});
