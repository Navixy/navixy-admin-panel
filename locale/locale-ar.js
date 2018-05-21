/**
* @class Locale.locale-ar
* @extends Locale.AbstractLocale
*/
Ext.define('Locale.locale-ar',{
    "extend": "Locale.AbstractLocale",
    "dependencies": [
        {
            "name": "Locale.ext.locale-ar",
            "history": false
        }
    ],
    "singleton": true,
    "main_copyright": "نافيكسي . كل الحقوق محفوظة",
    "panel_title": "لوحة المدير",
    "error": "خطأ",
    "loading": "تحميل ...",
    "conneting_loader": "الاتصال بالخادم",
    "access_denied": "تم الرفض",
    "access_denied_tip": "ليس  لديك إذن للوصول إلى طلب الصفحة",
    "index_title": "اهلا بك في لوحة المدير",
    "old_version": "نسخة قديمة",
    "auth": {
        "login": "تسجيل الدخول",
        "password": "كلمة المرور",
        "login_btn": "تسجيل الدخول",
        "locale_title": "اختر اللغة",
        "locale_title_short": "اللغة",
        "auth_error": "خطأ في المصادقة",
        "reloading_soon": "إعادة تحميل",
        "logout": "تسجيل الخروج",
        "title": "لوحة المدير"
    },
    "no_path_found": "لا يوجد صفحة للURL غير صحيح",
    "phone_invalid_msg": "يرجى إدخال رقم هاتف فعال",
    "invalid_numeric_msg": "الرقم غير صحيح",
    "invalid_amount_msg": "رقم غير صحيح",
    "searcher_empty_text": "أدخل طلب البحث",
    "search_empty_text": "أدخل طلب البحث",
    "searchTitle": "البحث حسب التصنيف",
    "clear_form_btn": "نظيف",
    "save_form_btn": "حفظ",
    "back_form_btn": "رجوع",
    "select_form_btn": "اختار",
    "close_form_btn": "اغلاق",
    "yes": "نعم",
    "no": "no",
    "show_btn": "عرض",
    "wrong_period": "الفترة غير صالحة",
    "required_fields": "مقاطع مطلوبة",
    "invalid_tab": "المقاطع المعبأة غير صالحة",
    "page_size": "حجم الصفحة",
    "errors": {
        "1": "خطأ في الاتصال بقاعدة البيانات (001). الرجاء الاتصال بالدعم أو المحاولة مرة أخرى في وقت لاحق.",
        "2": "خطأ في ترخيص النظام (002).  الرجاء الاتصال بالدعم أو المحاولة مرة أخرى في وقت لاحق.",
        "3": "مفتاح الجلسة خطأ (003).  يرجى إعادة تسجيل الدخول. إذا استمرت المشكلة، اتصل بالدعم.",
        "4": "لا يمكن العثور على المستخدم  أو إن الدورة قد انتهت (004).  يرجى إعادة تسجيل الدخول.",
        "5": "الطلب غير صحيح (005). الرجاء الاتصال بالدعم أو المحاولة مرة أخرى في وقت لاحق.",
        "6": "خطأ غير متوقع (006). الرجاء الاتصال بالدعم أو المحاولة مرة أخرى في وقت لاحق.",
        "7": {
            "default_msg": "المعلومات عن طلب غير صحيحة. الرجاء التحقق من البيانات.",
            "title": "معلمات غير صحيحة:",
            "errors": {
                "login": "يجب أن يكون الايميل مفعّل",
                "domain": "معلمات غير صحيحة:"
            }
        },
        "11": "تم الرفض",
        "12": "لم يتم العثور على منصة الخدمة",
        "101": "ميزة غير متوفرة على الخطة الخاصة بك",
        "102": "اسم المستخدم أو كلمة المرور خاطئة",
        "103": "لم يتم تنشيط المستخدم",
        "111": "معالج خطأ",
        "112": "طريقة خاطئة",
        "201": "لا توجد بيانات",
        "202": "هناك نقاط كثيرة جدا في المنطقة",
        "203": "Related item has been deleted",
        "204": "لم يتم العثور على العنصر",
        "205": "Invalid parameters",
        "206": "This username is already in use",
        "207": "Invalid captcha",
        "208": "الجهاز مقفل ",
        "209": "فشل في إرسال الرسالة",
        "210": "Geocoding failed",
        "211": "نطاق الوقت المطلوب كبير جداً",
        "212": "Requested limit is too big",
        "213": "الجهاز غير متصل",
        "214": "Requested operation are not supported by the device",
        "215": "External service error",
        "216": "المجموعة ليست فارغة",
        "217": "List contains nonexistent entities",
        "218": "Malformed external service parameters",
        "219": "The action is not allowed for the clone objects",
        "220": "Unknown device model",
        "221": "Tariff restriction:</br> Device limit exceeded.",
        "222": "Plugin not found",
        "223": "This phone number is already in use",
        "224": "الجهاز بهذا المعرف موجود بالفعل",
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
        "238": "تغيير الخطة غير مسموح",
        "240": "Not allowed to change tariff too frequently",
        "242": "Validation error",
        "251": "Insufficient funds",
        "254": "Cannot save file",
        "upload_exeption": "خطأ في تحميل ملف",
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
    "units_combination_list": {
        "days": "أيام",
        "hours": "ساعات",
        "minutes": "دقيقة",
        "seconds": "ثواني",
        "everyminutes": "دقيقة",
        "everyseconds": "ثواني",
        "meters": "متر",
        "degrees": "درجة",
        "objects": "الأجسام",
        "years": "سنة",
        "months": "الشهر",
        "codes": "كود",
        "trackers": "متعقب",
        "devices": "جهاز/أجهزة",
        "entries": "matches|match|matches",
        "assets": "assets|asset|assets"
    },
    "units_short": {
        "kilometer": "كم",
        "meter": "د",
        "square_kilometer": "كم مربع",
        "square_meter": "متر مربع",
        "ar": "عربي",
        "hectare": "هكتار",
        "kmh": "كم / ساعة",
        "hour": "ح",
        "minute": "م",
        "second": "س",
        "litres": "ل",
        "day": "د",
        "mile": "ميل"
    },
    "search": {
        "empty": "البحث حسب التصنيف",
        "btn": "جد"
    },
    "list": {
        "edit_tool": "تعديل",
        "create_btn_text": "إنشاء",
        "empty_text": "لا توجد بيانات",
        "search_title_tpl": "{0} ح {1} م",
        "search_empty_title_tpl": "لا المسارات وجدت",
        "search_title": "بحث",
        "search_empty_title": "لا توجد بيانات"
    },
    "card": {
        "links": {
            "collapser_tip": "إخفاء الإعدادات",
            "collapser_exptip": "إظهار الإعدادات"
        },
        "body": {
            "title": "التفاصيل وخيارات الخطة",
            "exptitle": "التفاصيل وخيارات الخطة",
            "collapser_tip": "اخفاء خيارات خطة وتفاصيل",
            "collapser_exptip": "عرض المزيد",
            "exptitle_show": "<a>(عربي)</a>"
        }
    },
    "devices": {
        "tracker": "المقتفي",
        "camera": "كاميرا",
        "socket": "مأخذ التوصيل"
    },
    "currency": {
        "rub": "Russian Rouble",
        "usd": "U.S. Dollar",
        "kzt": "Kazakhstan Tenge",
        "byr": "Belarusian Ruble",
        "eur": "يورو",
        "jpy": "ين ياباني",
        "gbp": "الجنيه الإسترليني",
        "chf": "Swiss Franc",
        "cad": "Canadian Dollar",
        "aud": "Australian Dollar",
        "nzd": "الدولار النيوزيلندي",
        "tjs": "Tajik Somoni",
        "php": "Philippine Peso",
        "brl": "برازيلي حقيقي",
        "huf": "الفورنت الهنغاري",
        "hkd": "دولار هونغ كونغ",
        "dkk": "الكرون الدنماركي",
        "ils": "شيكل",
        "inr": "روبية هندية",
        "idr": "Indonesian rupiah",
        "cny": "صيني",
        "krw": "فازت كوريا الجنوبية",
        "myr": "رينغيت ماليزي",
        "mxn": "البيزو المكسيكي",
        "nok": "الكرونة النرويجية",
        "pkr": "الروبية الباكستانية",
        "pln": "Polish złoty",
        "sgd": "Singapore dollar",
        "twd": "New Taiwan dollar",
        "thb": "Thai baht",
        "try": "Turkish lira",
        "czk": "Czech koruna",
        "clp": "Chilean peso",
        "sek": "Swedish krona",
        "zar": "South African rand",
        "uah": "Ukrainian hryvnia",
        "ltl": "Lithuanian litas",
        "lvl": "Latvian lats",
        "kgs": "Kyrgyzstani som",
        "tmt": "Turkmenistan manat",
        "uzs": "Uzbekistani som",
        "mdl": "Moldovan leu",
        "gel": "Georgian lari",
        "amd": "درام أرميني",
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
        "omr": "ريال عمان",
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
        "roadmap": "خارطة جوجل",
        "satellite": "جوجل القمر الصناعي",
        "hybrid": "جوجل الهجين",
        "yandex": "خرائط ياندكس",
        "yandexpublic": "ياندكس المشاركة الجماعية",
        "cdcom": "خرائط بروجورود",
        "osm": "خرائط OpenStreet",
        "osmmapnik": "خرائط OpenStreet 2",
        "wikimapia": "Wikimapia",
        "navitel": "خرائط Navitel",
        "doublegis": "DoubleGis Maps",
        "ovi": "OVI Maps",
        "mailru": "خرائط Mail.ru",
        "here": "خرائط هنا",
        "bing": "خرائط بلنج"
    },
    "dealer_info": {
        "first": "مجموع",
        "last": "من"
    },
    "index": {
        "menu_text": "الرئيسي"
    },
    "users": {
        "menu_text": "المستخدمين",
        "create_btn": "مستخدم جديد",
        "create_form": {
            "title": "مستخدم جديد",
            "main_fields": "معلومات عامة",
            "contact_fields": "تفاصيل المشترك",
            "address_fields": "عنوان",
            "legal_fields": "معلومات الكيان القانوني",
            "password": "Password",
            "password_repeat": "Repeat password",
            "password_mismatched": "لا تتطابق كلمات المرور",
            "language": "اللغة الافتراضية",
            "time_zone": "المنطقة الزمنية",
            "save_btn": "Create User",
            "clear_btn": "إعادة تعيين النموذج",
            "copy_address": "Copy from address"
        },
        "edit_form": {
            "title": "تعديل المستخدم",
            "save_btn": "حفظ التغييرات",
            "return_btn": "خلف"
        },
        "fields": {
            "creation_date": "Date of registration",
            "login": "بريد الكتروني",
            "balance": "الرصيد",
            "bonus": "Bonus",
            "first_name": "Name",
            "middle_name": "الاسم الأوسط",
            "last_name": "اللقب",
            "activated": "تنشيط",
            "activated_t": "User active",
            "legal_type": "الوضع القانوني",
            "tin": "رقم الضريبة",
            "legal_name": "الاسم القانوني",
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
            "registered_city": "مدينة التسجيل",
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
            "password_mismatched": "لا تتطابق كلمات المرور"
        },
        "password_form": {
            "title": "تغيير كلمة السر لالعميل",
            "save_btn": "تعيين كلمة المرور",
            "return_btn": "Cancel",
            "success_msg": "Password successfully changed"
        },
        "list": {
            "create_btn_text": "إنشاء مستخدم جديد",
            "empty_text": "No users found"
        },
        "session_alert": {
            "error": "Cant create user session",
            "title": "Your sessio code"
        },
        "session_hash": {
            "title": "مفتاح جلسة عمل المستخدم"
        },
        "card": {
            "tab_panel": {
                "trackers": {
                    "title": "تتبع المستخدم"
                },
                "transactions": {
                    "title": "المعاملات"
                }
            },
            "links": {
                "session_text": "تسجيل الدخول كمستخدم",
                "hash_text": "الحصول على مفتاح جلسة عمل",
                "user_edit": "Edit user",
                "user_change_password": "تغيير كلمة المرور",
                "transactions": "المعاملات",
                "create_transaction": "تغيير التوازن"
            }
        },
        "transactions": {
            "list": {
                "empty_text": "المعاملات لم يتم العثور على",
                "title": "حركات للمستخدم"
            },
            "fields": {
                "description": "العملية",
                "type": "Operation type",
                "subtype": "النوع الفرعي",
                "date": "تاريخ",
                "amount": "المبلغ",
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
                    "sms": "رسالة SMS"
                }
            }
        },
        "transaction_add": {
            "title": "تغيير التوازن (إضافة المعاملات) للمستخدمين",
            "description": "Transaction description",
            "balance": "تغيير التوازن",
            "bonus": "مكافأة التغييرات",
            "value_sup": "* مبلغ لإضافة (إيجابية) أو الطرح (السلبية)"
        },
        "combo_empty": "Select an user",
        "select_error": "وكان الفعل يحدها تعقب أو استنساخ للمستخدم المحدد",
        "select": {
            "title": "حدد المستخدم"
        }
    },
    "trackers": {
        "menu_text": "المقتفي",
        "fields": {
            "tracker_id": "الهوية",
            "label": "عنوان",
            "model": "Model",
            "phone": "هاتف",
            "device_id": "معرف الجهاز",
            "creation_date": "Date of registration",
            "creation_date_short": "Registered",
            "connection_status": "مركز",
            "tracker_id_exp": "رقم تعقب",
            "phone_exp": "رقم الهاتف",
            "owner": "مالك المقتفي",
            "tariff": "خطة المقتفي",
            "deleted": "حذف المقتفي",
            "blocked": "تعليق الخدمة",
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
            "main_fields": "معلومات عامة",
            "title": "Edit tracker",
            "save_btn": "تحفيظ التغيير",
            "return_btn": "مرة أخرى"
        },
        "clone_form": {
            "title": "Crate clone of tracker",
            "remove_failure_msg": "فشل في إزالة استنساخ",
            "failure_msg": "فشل إنشاء استنساخ",
            "remove_confirm": "Remove clone"
        },
        "group_clone_form": {
            "title": "استنساخ مجموعة من تتبع",
            "save_btn": "استنساخ",
            "grid_clone_label": "Clones will be added",
            "grid_clone_tip": "You can change the label of the clone by double clicking on it in the list"
        },
        "group_owner_form": {
            "title": "تغيير المالك لمجموعة من تتبع",
            "save_btn": "Changing owner",
            "grid_clone_label": "Trackers will be changed"
        },
        "tariff_form": {
            "title": "Change tariff plan for tracker",
            "save_btn": "Save changes",
            "repay": "رد الرصيد المتبقي من خطة التعريفة الحالية لحساب المستخدم",
            "charge": "حساب المستخدم المسؤول وفقا لخطة التعريفة الجمركية الجديدة",
            "charge_sup": "فقط من أجل الخطط على أساس شهري",
            "tariff_invalid": "يجب أن تكون مختلفة عن الحالية"
        },
        "list": {
            "create_btn_text": "Create new tracker",
            "owner_btn": "تغيير المالك",
            "clone_btn": "استنساخ",
            "edit_btn": "تحرير مختارة",
            "empty_text": "لم يتم العثور على بتتبع",
            "after_clone_success": "استنساخ: {0}",
            "after_clone_failure": "استنساخ: {0} بنجاح، {1} فشل",
            "after_owner_success": "تغيير: {0}",
            "after_owner_failure": "Changed: {0}, {1} change failed",
            "select_req": "Select trackers from list",
            "select_clone_req": "Clones selected, group operations can not be performed"
        },
        "card": {
            "links": {
                "change_tracker_user": "تغيير المالك",
                "tracker_edit": "تحرير المقتفي",
                "tracker_tariff_edit": "خطة التغيير",
                "tracker_clone_create": "إنشاء استنساخ",
                "tracker_clone_remove": "Delete this clone",
                "tracker_tariff": "خطة المقتفي",
                "tracker_owner": "مالك المقتفي",
                "tracker_console": "GPRS-terminal",
                "tracker_corrupt": "Cancel registration"
            }
        },
        "console": {
            "title": "وحدة التحكم بالهواء لتعقب",
            "connect_btn": "بدء الاتصال",
            "disconnect_btn": "إنهاء جلسة العمل",
            "auto_scroll": "Auto-scrolling",
            "clear": "وحدة واضحة",
            "send_btn": "إرسال",
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
            "status_title": "حالة الجهاز",
            "status_property_title": "Status",
            "status_value_title": "Value"
        },
        "corrupt": {
            "alert": {
                "title": "إزالة تعقب؟",
                "text": "سيتم إزالة الجهاز بشكل دائم من قاعدة البيانات. سيتم فقدان كافة البيانات الموجودة ريتاتيد. <br><br>، يمكنك إزالة الجهاز؟"
            },
            "success_msg": "{0} الجهاز بنجاح إزالة"
        }
    },
    "tariffs": {
        "menu_text": "مخطط",
        "create_form": {
            "title": "انشاء خطة جديدة",
            "main_fields": "Main information",
            "save_btn": "قم بإنشاء خطة",
            "clear_btn": "مسح النموذج",
            "options_fields": "Tariff options",
            "prices_fields": "Tariff prices"
        },
        "edit_form": {
            "title": "Edit tariff",
            "save_btn": "حفظ التغييرات"
        },
        "default_form": {
            "title": "إعدادات الخطة الافتراضية"
        },
        "fields": {
            "tariff_id": "معرف",
            "name": "Label",
            "group_id": "Group",
            "price": "الدفع الشهري",
            "device_limit": "الحد الأقصى للأجهزة",
            "device_type": "نوع الجهاز",
            "store_period": "تخزين محفوظات",
            "active": "Available for user",
            "has_reports": "جدول التقارير المتاحة",
            "proportional_charge": "رسوم تتناسب مع الرسوم الشهرية",
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
            "device_limit_exp": "الحد الأقصى لعدد الأجهزة",
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
            "tariff_is_default": "تستخدم هذه الخطة كافتراضي"
        },
        "list": {
            "create_btn_text": "Add new tariff",
            "empty_text": "Tariffs not found"
        },
        "card": {
            "links": {
                "make_default": "Mark as default",
                "tariff_edit": "تحرير الخطة"
            },
            "tab_panel": {
                "trackers": {
                    "title": "تتبع في هذه الخطة"
                }
            },
            "edit_form_btn": "تحرير الخطة",
            "create_form_btn": "قم بإنشاء خطة",
            "add_form_btn": "إضافة خطة جديدة",
            "save_form_btn": "حفظ الخطة",
            "currency_in": "(in {0})",
            "features": {
                "groups": {
                    "apps": "تطبيقات",
                    "features": "Features",
                    "misc": "متنوعة"
                }
            },
            "hints": {
                "2": "Messages which are sent with user’s consent or by his request. These SMS are sent from the service platform to users and devices through the SMS gateway you defined.<br /><br />Particular use cases:<br />User notifications about geo-based events they want to stay aware of<br /> – M2M commands to those device models which can be configured over SMS channel only (device configuration, output change), as well as manual acquiring location by SMS (for models which support that feature).",
                "3": "أوامر الرسائل القصيرة خدمة وصيانة المرسلة من المنصة للأجهزة، عادة دون أي أبروفيمينت الخاصة من المستخدم. على سبيل المثال، تستخدم هذه الأوامر sms لتفعيل الجهاز التلقائي – لتسليم أوامر SMS التهيئة (APN، عنوان ملقم، إلخ)، أو عندما يقوم فريق الدعم الخاص بتشخيص الجهاز البعيد.",
                "4": "If you use Navixy SIM cards in devices, you can additionally charge users for incoming SMS messages from these SIM cards (e.g. confirmations from devices about accomplishing the commands).",
                "5": "If you use Navixy SIM-cards in devices, you can set up a fee for the its usage based on traffic volume (traffic in both directions is billed).",
                "6": "User notifications by automatic phone calls are currently supported in some regions and in limited languages only.",
                "7": "If user reaches the limitation, he will not be available to add or track more assets in his account. In the case user has assets on different plans, the minimum value will be applied.",
                "8": "The system logs and stores data (about trips, events, etc.) within set time span relative to the current date only. If you extend the time span, the older logs might not be available.",
                "9": "Select maps available for user if he tracks assets on the current plan. The list of all available maps is defined by the preferences for your service.",
                "10": "Select options which are available for users who have assets on this plan.",
                "11": "Select options which are available for users who have assets on this plan.",
                "12": "المستخدم تكلفة يجب أن يدفع لك للخدمة. وينطبق نظام الفواتير بالعملة التي تم تحديدها في إعدادات الحساب. < br/> < br/> إذا كنت ترى \"n/A\" بدلاً من القيمة، فهذا يعني أن الخدمة لا يتوفر أو لا يمكن اتهام عن طريق نظام الفواتير.",
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
        "combo_empty": "حدد خطة",
        "select_error": "هذه الخطة غير متوفر",
        "select": {
            "title": "حدد خطة"
        },
        "types": {
            "activeday": "اليومية",
            "monthly": "Monthly",
            "everyday": "شهريا (السحب اليومي)"
        },
        "price_type": {
            "monthly": "Monthly fee",
            "activeday": "الأجر اليومي",
            "everyday": "رسوم شهرية"
        }
    },
    "codes": {
        "menu_text": "رمز التفعيل",
        "fields": {
            "activated": "status",
            "activation_date": "تاريخ التنشيط",
            "bonus_amount": "مكافأة",
            "code": "code",
            "device_id": "Device ID",
            "device_type": "نوع الجهاز",
            "free_days": "أيام الحر",
            "money_amount": "المبلغ",
            "tariff_id": "معرف الخطة",
            "tariff_name": "Tariff",
            "status": {
                "activated": "تنشيط",
                "no_activated": "غير نشط"
            }
        },
        "edit_form": {
            "title": "تحرير رموز التنشيط",
            "save_btn": "حفظ التغييرات",
            "selected_count": "Codes selected",
            "device_type": "Codes selected for devices"
        },
        "create_form": {
            "title": "إنشاء رموز التنشيط",
            "save_btn": "Create codes",
            "new_codes_count": "Amount of new codes"
        },
        "list": {
            "empty_text": "رموز التنشيط لا يتم العثور على",
            "create_btn": "Create new",
            "edit_btn": "تحرير مختارة",
            "reload_btn": "إعادة تحميل",
            "after_create_success": "إنشاء: {0}",
            "after_edit_success": "التغييرات: {0}",
            "after_edit_failure": "Changed: {0}, {1} change failed",
            "select_req": "حدد الرموز من القائمة",
            "same_type_req": "يجب عليك تحديد أحد رموز نوع الجهاز",
            "edited_tip": "changed",
            "filters": {
                "activated": "Activated",
                "no_activated": "Not activated",
                "trackers": "Trackers",
                "cameras": "Cameras",
                "sockets": "Sockets",
                "toggle_all": "Show all"
            },
            "faq_link": "https://www.navixy.com/docs/admin-panel-docs/activation-codes/ ",
            "faq_text": "Activation codes FAQ"
        }
    },
    "settings": {
        "menu_text": "Settings",
        "fields": {
            "service_title": "عنوان الخدمة",
            "page_title": "عنوان الصفحة",
            "locale": "User interface language",
            "demo_login": "مستخدم تجريبي",
            "demo_password": "عرض كلمة مرور",
            "maps_title": "الخرائط المتاحة",
            "maps_default": {
                "type": "الخريطة الافتراضية",
                "location_lat": "Latitude default",
                "location_lng": "الطول الافتراضي",
                "zoom": "التكبير الافتراضي"
            },
            "google_client_id": "Client ID for google maps",
            "currency": "عمله الفوترة للمستخدمين",
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
            "password_mismatched": "لا تتطابق كلمات المرور",
            "footer_email": "Company E-mail",
            "footer_site": "«About Us» Link",
            "footer_text": "The text at the bottom of page",
            "geocoder": "geocoder الافتراضي",
            "route_provider": "افتراضي مزود الطريق",
            "translit": "حرفي SMS",
            "measurement_system": "نظام القياس",
            "payment_description": "Payment options and terms",
            "support_email": "Email for customers support",
            "alerts_email": "Email for important alerts and invoices",
            "time_zone": "Time zone",
            "service_title_ph": "marketing name",
            "service_title_hint": "يستخدم في صفحة تسجيل الدخول، في التبويب مستعرض وفي أماكن أخرى",
            "footer_text_ph": "Some text you want to add into the footer of the login page",
            "footer_text_hint": "Custom text for the footer of the login page, links to privacy policy, etc. Links starting with http: and mailto: will be active. Use plain text only, HTML tags are not supported.",
            "promo_url_ph": "http://www.company.com",
            "promo_url_hint": "Your company’s website, starting with http://. If set, this link is used for \"About\" at the login page.",
            "favicon_hint": "سيظهر رمز في التبويب المستعرض (غير معتمد الميزة في Internet Explorer).",
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
            "user_sms_inbound_hint": "إيدينتيفيكاتور ألفا-رقمية مرسل رسالة SMS تظهر أن تأتي من (من 'عنوان') عندما يتلقى المستخدمون رسالة على هاتفه. الأكثر شيوعاً هو التأجير لك عدد الرسائل الواردة أو الخدمة الخاصة بك التسويق اسم. < br/> < br/> يمكن تطبيق المتطلبات الخاصة بالقوانين المحلية واللوائح لتجنب البريد المزعج. الرجاء التأكد من أن \"معرف المرسل\" الذي قمت بإدخاله يفي بهذه المتطلبات، وإلا قد لا تعمل خدمة الرسائل القصيرة بشكل صحيح.",
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
            "save_msg": "إعدادات تم حفظها بنجاح",
            "main_fields": "الإعدادات الأساسية",
            "map_fields": "إعدادات الخرائط",
            "permission_fields": "Notification dettings",
            "domain_sup": "* خيار خريطة محدودة بالنسبة للمجالات الفرعية من * {0}",
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
            "update_btn": "تغيير",
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
            "user_notifications_title": "إعلامات إلى المستخدمين",
            "user_notifications_hint": "Settings for notifications from your tracking system to users: about geo-events, low balance, password recovering, etc.",
            "special_notifications_title": "Notifications to administrators",
            "special_notifications_hint": "System notifications to administrators about service status, statistics and other",
            "defaults_fields": "User default settings",
            "defaults_hint": "Settings in this section will be automatically applied to all new users",
            "branding_fields": "Branding",
            "branding_main_title": "الإعدادات الرئيسية العلامة التجارية",
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
            "save_btn": "تحميل",
            "cancel_btn": "إلغاء الأمر",
            "upload_btn": "طريقة العرض",
            "title": "Upload image. {0}",
            "titles": {
                "logo": "Logo",
                "favicon": "Favicon",
                "login_wallpaper": "Login page wallpaper",
                "desktop_wallpaper": "Service page wallpaper",
                "monitoring_logo": "شعار إضافي"
            },
            "tips": {
                "logo": "من المستحسن استخدام صورة الشعار بخلفية شفافة (PNG) وعرض الحد الأدنى من 200px.",
                "favicon": "Recommended to load the image with a transparent background and a minimum resolution of 32x32 pixels.",
                "login_wallpaper": "Recommended to load background images with a resolution of at least 1920x1080 pixels (FullHD) format JPEG.",
                "monitoring_logo": "It is recommended to use the logo image with the transparent background (PNG) and minimal width of 200px."
            },
            "img_title": "The image format {0} (the maximum size of {1} MB)",
            "error_text": "Failed to load image"
        },
        "subscription": {
            "activation_btn_text": "Pay activation fee now (500 USD) online",
            "monthly_fee_btn_text": "الدفع عبر الإنترنت",
            "activation_hint": "تقوم فيه بتقييم الإصدار التجريبي سيرفيرماتي نافيكسي (حتى {0}). مواصلة التجارية الإصدار الرجاء اختيار خيارات الاشتراك الخاص بك والمضي قدما في دفع التنشيط:",
            "monthly_fee_hint": "مراجعة رصيد الاشتراك الخاص بك وإضافة الأموال هنا. أننا نشكركم على المدفوعات الخاصة بك في الوقت المناسب. لتجنب التلقائي تعطيل الاشتراك الخاص بك الرجاء دائماً إغلاق الفواتير الخاصة بك في غضون 10 أيام بعد استلام الفاتورة للشهر السابق.",
            "license_balance": "المبلغ المعلق {0}",
            "subscription_hint": "لإتمام الدفع عبر الإنترنت سيتم إعادة توجيهك إلى صفحة ويب آمنة مدخلنا الدفع. يمكنك استخدام خيارات الدفع المختلفة هناك. حالما يتم التأكد من الدفع الأموال الخاصة بك سوف تضاف تلقائياً إلى حسابك في سيرفيرماتي. لأي أسئلة الرجاء الاتصال بنا عن طريق accounting@navixy.com البريد الإلكتروني",
            "pending_amount": "المبلغ المعلق: {0}",
            "current_balance": "Current balance: {0}",
            "payment_recieved_msg": "تم بنجاح تنفيذ الدفع الخاص بك وسيتم معالجتها قريبا.",
            "waiting_activation_fee": "تم بنجاح تنفيذ الدفع الخاص بك وسيتم معالجتها قريبا."
        },
        "sms_gateway": {
            "navixy": {
                "name": "Navixy",
                "desc": "خدمة SMS، يقدمها لك نافيكسي مجاناً بينما كنت تستخدم الإصدار التجريبي."
            },
            "nexmo": {
                "name": "نيكسمو",
                "desc": "واحدة من الخدمات الأكثر شعبية في العالم (<a href=\"http://www.nexmo.com\" target=\"blank\"> www.nexmo.com</a>)",
                "credentials": {
                    "key": "مفتاح",
                    "secret": "سر"
                }
            },
            "twilio": {
                "name": "توليو",
                "desc": "واحدة من الخدمات الأكثر شعبية في العالم (<a href=\"http://www.twilio.com\" target=\"blank\"> www.twilio.com</a>)",
                "credentials": {
                    "sid": "حساب SID",
                    "token": "رمز المصادقة"
                }
            },
            "smstraffic": {
                "name": "سمسترافيك",
                "desc": "الخدمات المقدمة من شركة سمسترافيك (<a href=\"http://www.smstraffic.ru\" target=\"blank\"> www.smstraffic.ru</a>)",
                "credentials": {
                    "login": "تسجيل الدخول",
                    "password": "Password"
                }
            },
            "yaestar": {
                "name": "نوجيت يستر",
                "desc": "بوابة الأجهزة، التي يمكنك شراء وتثبيت محلياً (<a href=\"http://www.yeastar.com\" target=\"blank\"> www.yeastar.com</a>)",
                "credentials": {
                    "ip": "Server IP",
                    "port": "Port",
                    "login": "تسجيل الدخول",
                    "password": "Password"
                }
            },
            "smpp": {
                "name": "SMPP v.3.4",
                "desc": "Common industrial standard for communication with SMS Gateways (<a href=\"https://en.wikipedia.org/wiki/Short_Message_Peer-to-Peer\" target=\"blank\">Wikipedia</a>)",
                "credentials": {
                    "ip": "Server IP",
                    "port": "منفذ",
                    "login": "Login (System ID)",
                    "password": "كلمة المرور",
                    "source": "Source TON/NPI",
                    "source_select": {
                        "0": "Unknown",
                        "1": "International",
                        "2": "National",
                        "3": "شبكة محددة",
                        "4": "Subscriber Number",
                        "5": "Abbreviated",
                        "6": "Alphanumeric",
                        "7": "محفوظة",
                        "-1": "Auto"
                    },
                    "destination": "Destination TON/NPI",
                    "destination_select": {
                        "0": "Unknown",
                        "1": "خطة الترقيم الهاتف ISDN (E163/E164)",
                        "3": "Data numbering plan (X.121)",
                        "4": "Telex numbering plan (F.69)",
                        "6": "Land Mobile (E.212)",
                        "8": "خطة الترقيم الوطنية",
                        "9": "Private numbering plan",
                        "10": "ERMES numbering plan (ETSI DE/PS 3 01-3)",
                        "13": "Internet (IP)",
                        "18": "WAP Client Id (to be defined by WAP Forum)"
                    },
                    "charset": "مجموعة الأحرف الافتراضية",
                    "charset_select": {
                        "GSM8": "GSM8",
                        "GSM7": "GSM7",
                        "ISO-8859-1": "ISO-8859-1",
                        "ISO-8859-15": "إيزو-8859-15",
                        "UTF-8": "UTF-8",
                        "UCS-2": "UCS-2"
                    },
                    "long": "Long messages",
                    "long_select": {
                        "UDH": "UDH",
                        "Payload": "الحمولة"
                    }
                }
            }
        }
    },
    "accounting": {
        "menu_text": "المحاسبة",
        "report_msg": {
            "title": "تأكيد البريد الإلكتروني النشرة الإخبارية",
            "text": "تنبيه العملاء حول تصدير البيانات إلى 1 ج ل <b>{0}</b>. <br>أنت متأكد من أنك تريد جعل <b>البريد الإلكتروني النشرة الإخبارية</b>؟"
        },
        "form": {
            "title": "«1C:Enterprise» Data exporting",
            "export1c": {
                "tab_title": "المحاسبة",
                "save_btn": "الحصول على ملف بيانات ج 1",
                "report_btn": "تقديم سندات عن طريق البريد الإلكتروني",
                "fields": {
                    "month": "حدد الشهر",
                    "last_act": "Last deed number"
                }
            },
            "payments": {
                "tab_title": "المدفوعات",
                "save_btn": "الحصول على ملف بيانات ج 1",
                "fields": {
                    "date": "الفاصل الزمني",
                    "type": "Payment system"
                },
                "ps": {
                    "default": "All of the above",
                    "cyberplat": "سيبيربلات",
                    "deltapay": "DeltaPay",
                    "mobile": "Mobile",
                    "mobimoney": "Mobi.Money",
                    "rbkmoney": "RBK Money",
                    "webmoney": "WebMoney",
                    "sberbank": "Sberbank"
                }
            }
        },
        "report_success": "البريد الإلكتروني النشرة الإخبارية الناجحة"
    },
    "payments": {
        "menu_text": "المدفوعات",
        "import_sberbank": {
            "title": "وسبربنك مدفوعات الواردات",
            "save_btn": "Import payments",
            "upload_btn": "طريقة العرض",
            "upload_loading": "تحميل الملف",
            "error_text": "فشل استيراد المدفوعات",
            "fields": {
                "file_title": "استيراد الملف {0} (الحد الأقصى لحجم {1} ميغابايت)"
            },
            "errors": {
                "242": "Line {0}, column {1}, description:<br><i>{2}</i>"
            },
            "success_msg": "المدفوعات وسبربنك استيرادها بنجاح",
            "success_dsc": "Date of registry: <b>{0}</b><br>Count of loaded payments: <b>{1}</b><br>Sum of loaded payments: <b>{2}</b>"
        }
    },
    "bundles": {
        "menu_text": "Package contents",
        "title": "العمل مع مجموعات من المعدات",
        "menu": {
            "list": "قائمة بمجموعات",
            "scan": "ربط بطاقة SIM للمرشد اللاسلكي",
            "shipping": "النقل البحري",
            "import": "استيراد"
        },
        "fields": {
            "id": "معرف",
            "model_code": "نموذج",
            "imei": "IMEI",
            "iccid": "ICCID",
            "sim_card": "بطاقة SIM",
            "assign_time": "Date",
            "phone": "Phone",
            "apn": "APN",
            "order_id": "The order number"
        },
        "list": {
            "scan_btn_text": "التقاط إشارات",
            "empty_text": "لا توجد مجموعات",
            "unassign": "detach from order",
            "unassign_q": "Do you want to remove the complete<br>c IMEI-code \"{0}\" out of order?"
        },
        "shipping": {
            "search_btn": "البحث عن",
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
                "assign_time": "بطاقة sim ملزمة"
            },
            "buttons": {
                "enter": "Enter",
                "assign_iccid": "Snap the SIM card",
                "reassign_iccid": "To reassign the SIM card",
                "remove_iccid": "Detach the SIM card",
                "print": "To print the label",
                "reset": "للبدء من جديد",
                "change_equip": "Change the composition"
            },
            "imie_hints": {
                "imei_ready": "Attach the scanner to the bar code IMEI",
                "imei_invalid": "You entered an incorrect value<br>scan Again",
                "imei_focus_lose": "Scanning is not ready<br>Set the focus on the field",
                "imei_not_found": "Sets your phone's IMEI code<br><b>{0}</b> not found",
                "auto_print": "طباعة تلقائياً والبدء من جديد"
            },
            "iccid_hints": {
                "iccid_ready": "Attach the scanner to the barcode ICCID",
                "iccid_invalid": "You entered an incorrect value<br>scan Again",
                "iccid_focus_lose": "Scanning is not ready<br>Set the focus on the field",
                "iccid_not_found": "فشل في ربط سيم بطاقة c رمز <br><b>{0}</b>",
                "iccid_cant_unassign": "Failed to detach the SIM card"
            },
            "print_hints": {
                "print_error": "Error. Not found the label template for the kit.<br>Printing is not possible."
            },
            "hints": {
                "imei_ready": "Ready to scan. Attach the scanner to the barcode device IMEI.",
                "imei_focus_lose": "خطأ. المسح الضوئي غير جاهز. انقر فوق الزر أدناه.",
                "imei_focus_lose_btn": "To start the scan",
                "imei_invalid": "Error. Entered IMEI invalid value \"{0}\".<br>Please re-scan.",
                "imei_not_found": "Error. The ICCID value \"{0}\" not found.<br>Please re-scan.",
                "iccid_ready": "IMEI العثور عليها. استعداد للمسح الضوئي. <br>إرفاق الماسح الضوئي للرمز الشريطي ICCID.",
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
                "unassign_success": "بطاقة SIM غير المربوطة من الجهاز",
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
                "no_model": "لم يتم تحديد نموذج"
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
            "name": "الاسم",
            "model_name": "نموذج",
            "model_code": "نموذج التعليمات البرمجية",
            "vendor": "الشركة المصنعة"
        },
        "select": {
            "title": "اختيار مجموعة"
        },
        "list": {
            "empty_text": "لم يتم العثور على مجموعات"
        }
    },
    "measurement_systems": {
        "metric": "متري",
        "imperial": "إمبراطوري",
        "us": "الإمبراطورية الأمريكية"
    },
    "route_providers": {
        "progorod": "بروجورود",
        "google": "جوجل",
        "osrm": "أوسرم"
    },
    "geocoders": {
        "google": "جوجل",
        "yandex": "ياندكس",
        "progorod": "Progorod",
        "osm": "أوبن ستريت ماب"
    },
    "currencies_tpls": {
        "GBP": "جنيه استرليني {0}",
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
        "MYR": "RM {0}",
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
        "KWD": "\u200f{0} د.ك",
        "BDT": "{0} ৳"
    },
    "geolocation": {
        "disabled": "معطل",
        "navixy": "Mozilla location services / @Navixy Telehouse",
        "mozilla": "خدمات موقع موزيلا",
        "combain": "كومبين"
    },
    "speed_restriction": {
        "disabled": "Disabled",
        "google": "جوجل خرائط الطرق",
        "quazar": "كوازار"
    },
    "edit_form_btn": "تعديل",
    "cancel_form_btn": "إلغاء",
    "na": "غير متوفر",
    "enable": "تمكين",
    "disable": "تعطيل",
    "disabled": "تعطيل",
    "forbid": "منع",
    "allow": "سماح",
    "forbidden": "محظور",
    "features": {
        "api": "API",
        "app_tasks": "<a href='https://www.navixy.com/docs/user/web-interface-docs/tasks/' target='_blank'>Tasks</a>",
        "app_fleet": "أسطول",
        "app_reports": "<a href='https://www.navixy.com/docs/user/web-interface-docs/reports-docs/' target='_blank'>Reports</a>",
        "batch_operations": "Batch operations",
        "statuses": "Work statuses",
        "custom_maps": "Custom maps",
        "event_notification": "Event notifications",
        "geocoding": "Geocoding",
        "lbs": "Location by Cell ID",
        "map_layers": "خريطة الطبقات",
        "multilevel_access": "استنساخ كائن",
        "priority_support": "Priority support",
        "retranslation": "Retranslation",
        "report_xls": "Reports to file",
        "report_scheduled": "<a href='https://www.navixy.com/docs/user/web-interface-docs/reports-docs/scheduled-reports/' target='_blank'>Scheduled reports</a>",
        "routing": "التوجيه",
        "ui_mobile": "Mobile web interface",
        "weblocator": "ويبلوكاتور",
        "chat": "Chat"
    },
    "map": {
        "zoom_in": "Zoom in",
        "zoom_out": "التصغير"
    },
    "map_type_label": "خريطة"
});