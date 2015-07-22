/**
 * @class Locale.locale-en
 * @extends Locale.AbstractLocale
 */
Ext.define('Locale.locale-en', {
    "extend": "Locale.AbstractLocale",
    "dependencies": [
        {
            "name": "Locale.ext.locale-en",
            "history": false
        }
    ],
    "singleton": true,
    "main_copyright": "© Navixy. All rights reserved.",
    "panel_title": "Navixy Admin Panel",
    "error": "Error",
    "loading": "Loading...",
    "conneting_loader": "Connecting to server",
    "access_denied": "Access denied",
    "access_denied_tip": "you do not have permission to access requested page",
    "index_title": "Welcome to Admin Panel",
    "old_version": "Old version",
    "auth": {
        "login": "Login",
        "password": "Password",
        "login_btn": "Login",
        "locale_title": "Select language",
        "locale_title_short": "language",
        "auth_error": "Authentication error",
        "reloading_soon": "Reloading",
        "logout": "Logout",
        "title": "Admin panel"
    },
    "no_path_found": "No page - wrong URL",
    "phone_invalid_msg": "Please enter a valid phone number",
    "invalid_numeric_msg": "Not a valid number",
    "invalid_amount_msg": "Not a valid number<br>(2 digits after decimal point)",
    "searcher_empty_text": "Enter search query",
    "search_empty_text": "Enter search query",
    "searchTitle": "Search by category",
    "clear_form_btn": "Clear",
    "save_form_btn": "Save",
    "back_form_btn": "Back",
    "select_form_btn": "Select",
    "close_form_btn": "Close",
    "yes": "yes",
    "no": "no",
    "show_btn": "Show",
    "wrong_period": "An invalid period",
    "required_fields": "* - required fields or sections",
    "invalid_tab": "Invalid filled fields",
    "page_size": "Page size",
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
                "domain": "Incorrect domain name"
            }
        },
        "11": "Access denied",
        "12": "Service platform is not found",
        "101": "This feature is not available in Demo mode",
        "102": "Wrong username or password",
        "103": "The user has not activated",
        "111": "Wrong handler",
        "112": "Wrong method",
        "201": "No data found",
        "202": "There are too many points in the area",
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
        "224": "Device with this device-id is already in use",
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
        "251": "Insufficient funds",
        "254": "Cannot save file",
        "upload_exeption": "File upload error",
        "no_hash": "The session key is not found",
        "service_not_respond": "The service is temporarily unavailable",
        "tracker": {
            "203": "Tracker has attached rules",
            "237": "Plan invalid",
            "238": "Changing plan is not allowed",
            "239": "New plan does not exist",
            "246": "User is incorrect",
            "247": "Clone already exists",
            "249": "The operation is available only for the clones",
            "250": "Not allowed for deleted devices",
            "253": "The operation can not be performed, the tracker has the following clones<br>Clones ID: {0}"
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
    "units_combination": {
        "days": [
            "days",
            "day",
            "days"
        ],
        "hours": [
            "hours",
            "hour",
            "hours"
        ],
        "minutes": [
            "minutes",
            "minute",
            "minutes"
        ],
        "seconds": [
            "seconds",
            "second",
            "seconds"
        ],
        "everyminutes": [
            "minutes",
            "minute",
            "minutes"
        ],
        "everyseconds": [
            "seconds",
            "second",
            "seconds"
        ],
        "meters": [
            "meters",
            "meter",
            "meters"
        ],
        "degrees": [
            "degrees",
            "degree",
            "degrees"
        ],
        "objects": [
            "objects",
            "object",
            "objects"
        ],
        "years": [
            "years",
            "year",
            "years"
        ],
        "months": [
            "months",
            "month",
            "months"
        ],
        "codes": [
            "codes",
            "code",
            "codes"
        ],
        "trackers": [
            "trackers",
            "tracker",
            "trackers"
        ],
        "devices": [
            "devices",
            "device",
            "devices"
        ],
        "entries": [
            "matches",
            "match",
            "matches"
        ]
    },
    "units_short": {
        "kilometer": "km",
        "meter": "m",
        "square_kilometer": "sq. km",
        "square_meter": "sq. m",
        "ar": "ar",
        "hectare": "ha",
        "kmh": "km / h",
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
        "edit_tool": "edit",
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
            "title": "Additional information:",
            "exptitle": "Additional information <a>(show)</a>",
            "collapser_tip": "Hide additional information",
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
        "brl": "Brazilian real",
        "huf": "Hungarian forint",
        "hkd": "Hong Kong dollar",
        "dkk": "Danish krone",
        "eur": "Euro",
        "ils": "Israeli new shekel",
        "inr": "Indian rupee",
        "idr": "Indonesian rupiah",
        "cad": "Canadian Dollar",
        "cny": "Renminbi",
        "krw": "South Korean won",
        "myr": "Malaysian ringgit",
        "mxn": "Mexican peso",
        "nzd": "New Zealand Dollar",
        "nok": "Norwegian krone",
        "pkr": "Pakistani rupee",
        "pln": "Polish złoty",
        "rub": "Russian rouble",
        "sgd": "Singapore dollar",
        "usd": "U.S. Dollar",
        "twd": "New Taiwan dollar",
        "thb": "Thai baht",
        "try": "Turkish lira",
        "php": "Philippine Peso",
        "czk": "Czech koruna",
        "clp": "Chilean peso",
        "sek": "Swedish krona",
        "chf": "Swiss Franc",
        "zar": "South African rand",
        "jpy": "Japanese Yen",
        "kzt": "Kazakhstan Tenge",
        "byr": "Belarusian Ruble",
        "aud": "Australian Dollar",
        "tjs": "Tajik Somoni",
        "uah": "Ukrainian hryvnia",
        "ltl": "Lithuanian litas",
        "lvl": "Latvian lats",
        "kgs": "Kyrgyzstani som",
        "tmt": "Turkmenistan manat",
        "uzs": "Uzbekistani som",
        "mdl": "Moldovan leu",
        "gel": "Georgian lari",
        "amd": "Armenian dram",
        "azn": "Azerbaijani manat"
    },
    "maps": {
        "roadmap": "Google roadmap",
        "satellite": "Google satellite",
        "hybrid": "Google hybrid",
        "yandex": "Yandex Maps",
        "yandexpublic": "Yandex Crowdsourcing",
        "cdcom": "ProGorod Maps",
        "osm": "OpenStreet Maps",
        "osmmapnik": "OpenStreet Maps 2",
        "wikimapia": "Wikimapia",
        "navitel": "Navitel Maps",
        "doublegis": "DoubleGIS Maps",
        "ovi": "OVI Maps",
        "mailru": "Mail.ru Maps"
    },
    "dealer_info": {
        "first": "total",
        "last": "of"
    },
    "index": {
        "menu_text": "Home"
    },
    "users": {
        "menu_text": "Users",
        "create_btn": "New user",
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
            "time_zone": "Time Zone",
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
                "status_false": "Not active"
            },
            "registered_short": "legal",
            "password": "New password",
            "password_repeat": "Repeat new password",
            "password_mismatched": "Passwords do not match"
        },
        "password_form": {
            "title": "Changing password of user",
            "save_btn": "Set Password",
            "return_btn": "Cancel",
            "success_msg": "Password successfully changed"
        },
        "list": {
            "create_btn_text": "Create new user",
            "empty_text": "No users found"
        },
        "session_alert": {
            "error": "Can't create user session",
            "title": "Your session code"
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
                "user_edit": "Edit user",
                "user_change_password": "Change password",
                "transactions": "Transactions",
                "create_transaction": "Change balance"
            }
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
                "amount": "Amount",
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
                    "everyday": "monthly by day"
                }
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
        }
    },
    "trackers": {
        "menu_text": "Trackers",
        "fields": {
            "tracker_id": "ID",
            "label": "Title",
            "model": "Model",
            "phone": "Phone",
            "device_id": "Device id",
            "creation_date": "Tracker activation date",
            "creation_date_short": "Activated",
            "connection_status": "Status",
            "tracker_id_exp": "Tracker number",
            "phone_exp": "Phone number",
            "owner": "Tracker owner",
            "tariff": "Tracker plan",
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
            "main_fields": "General information",
            "title": "Edit tracker",
            "save_btn": "Save changes",
            "return_btn": "Back"
        },
        "clone_form": {
            "title": "Crate clone for the tracker",
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
            "repay": "Repay remainder of current tariff payment",
            "charge": "Charge user now (according to the new plan)",
            "charge_sup": "only for monthly based plans",
            "tariff_invalid": "must be different from current"
        },
        "list": {
            "create_btn_text": "Create new tracker",
            "owner_btn": "Change owner",
            "clone_btn": "Clone",
            "edit_btn": "Edit selected",
            "empty_text": "No trackers found",
            "after_clone_success": "Cloned: {0}",
            "after_clone_failure": "Cloned: {0} successfully, {1} failed",
            "after_owner_success": "Changed: {0}",
            "after_owner_failure": "Changed: {0}, {1} change failed",
            "select_req": "Select trackers from list",
            "select_clone_req": "Clones selected, group operations can not be performed"
        },
        "card": {
            "links": {
                "change_tracker_user": "Change owner",
                "tracker_edit": "Edit tracker",
                "tracker_tariff_edit": "Change plan",
                "tracker_clone_create": "Create clone",
                "tracker_clone_remove": "Delete clone",
                "tracker_tariff": "Tracker plan",
                "tracker_owner": "Tracker owner",
                "tracker_console": "Air console",
                "tracker_corrupt": "Cancel registration"
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
                "text": "Device will be permanently removed from database. All retated data will be lost.<br><br>Are you to remove device?"
            },
            "success_msg": "Device {0} successfully removed"
        }
    },
    "tariffs": {
        "menu_text": "Plans",
        "create_form": {
            "title": "Create new plan",
            "main_fields": "General information",
            "save_btn": "Create plan",
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
            "device_type": "Device type",
            "store_period": "Store history for",
            "active": "Available for user",
            "has_reports": "Table reports is available",
            "proportional_charge": "Subscription fee for the partial month of proportion to the number of days to write off",
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
            "tariff_type_short": "Payment"
        },
        "list": {
            "create_btn_text": "Add new plan",
            "empty_text": "No plans found"
        },
        "card": {
            "links": {
                "make_default": "Mark as default",
                "tariff_edit": "Edit plan"
            },
            "tab_panel": {
                "trackers": {
                    "title": "Trackers on this plan"
                }
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
            "everyday": "Monthly (daily debit)"
        },
        "price_type": {
            "monthly": "Monthly fee",
            "activeday": "Daily fee",
            "everyday": "Monthly fee"
        }
    },
    "codes": {
        "menu_text": "Activation codes",
        "fields": {
            "activated": "status",
            "activation_date": "Activation date",
            "bonus_amount": "Bonus",
            "code": "code",
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
        "menu_text": "Settings",
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
            "google_client_id": "Client ID for google maps",
            "currency": "Default currency",
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
            "footer_text": "The text at the bottom of page"
        },
        "edit_form": {
            "title": "Service Settings",
            "save_btn": "Save",
            "save_msg": "Settings successfully saved",
            "main_fields": "Basic Settings",
            "map_fields": "Maps settings",
            "permission_fields": "Notification dettings",
            "domain_sup": "* Map choice is limited for subdomains of *{0}",
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
            "maps_hint": "Select available maps for your users. You can also limit the list of maps on specific plans – in plans options.<br><br>Using of the maps must be granted to you by their rights owners. NAVIXY is not responsible for any violation of the license terms by you or your end users.",
            "demo_hint": "Choose user account which will be used for demo purposes and available on login page (optional)",
            "user_notifications_title": "Notifications to users",
            "user_notifications_hint": "Settings for notifications from your tracking system to users: about geo-events, low balance, password recovering, etc.",
            "special_notifications_title": "Notifications to administrators",
            "special_notifications_hint": "System notifications to administrators about service status, statistics and other"
        },
        "upload_form": {
            "save_btn": "Upload",
            "cancel_btn": "Cancel",
            "upload_btn": "View",
            "title": "Upload image. {0}",
            "titles": {
                "logo": "Logo",
                "favicon": "Favicon",
                "login_wallpaper": "Wallpaper for login page",
                "desktop_wallpaper": "Service page wallpaper"
            },
            "tips": {
                "logo": "Recommended to load horizontally oriented image with transparent background and minimal width 200px.",
                "favicon": "Recommended to load the image with transparent background and a minimum resolution of 32x32 pixels.",
                "login_wallpaper": "Recommended to load background images with a resolution of at least 1920x1080 pixels (FullHD) format JPEG."
            },
            "img_title": "Image format {0} (max size {1} MB)",
            "error_text": "Failed to load image"
        }
    },
    "accounting": {
        "menu_text": "Accounting",
        "report_msg": {
            "title": "Confirm email-newsletter",
            "text": "Alert customers about exporting data to 1C for <b>{0}</b>.<br>You sure you want make <b>email-newsletter</b>?"
        },
        "form": {
            "title": "«1C:Enterprise» Data exporting",
            "export1c": {
                "tab_title": "Accounting",
                "save_btn": "Get 1C data file",
                "report_btn": "Submit deeds by email",
                "fields": {
                    "month": "Select month",
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
                "list_miss": "incorrect: <b>{0}</b> ",
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
    }
});