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
    "main_copyright": "© 2015 RusLink. All rights reserved.",
    "panel_title": "NavixyPanel",
    "error": "Error",
    "loading": "Loading...",
    "conneting_loader": "Connecting to server",
    "access_denied": "Access denied",
    "access_denied_tip": "you do not have permission to access requested page",
    "index_title": "Welcome to Control Panel",
    "old_version": "Old version",
    "auth": {
        "login": "Login or Email address",
        "password": "Password",
        "login_btn": "Login",
        "locale_title": "Choose language",
        "locale_title_short": "language",
        "auth_error": "Authentication error",
        "reloading_soon": "Reloading",
        "logout": "Logout",
        "title": "Admin panel"
    },
    "no_path_found": "No page on this path",
    "phone_invalid_msg": "Please enter a valid phone number",
    "invalid_numeric_msg": "Not a valid number",
    "invalid_amount_msg": "Not a valid number<br>(2 digits after decimal mark)",
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
        "12": "The service platform is not found",
        "101": "In demo mode this feature is disabled",
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
            "collapser_exptip": "Show additional information"
        }
    },
    "devices": {
        "tracker": "Tracker",
        "camera": "Camera",
        "socket": "Socket"
    },
    "currency": {
        "rub": "Russian Rouble",
        "usd": "U.S. Dollar",
        "kzt": "Kazakhstan Tenge",
        "byr": "Belarusian Ruble",
        "eur": "Euro",
        "jpy": "Japanese Yen",
        "gbp": "Pound Sterling",
        "chf": "Swiss Franc",
        "cad": "Canadian Dollar",
        "aud": "Australian Dollar",
        "nzd": "New Zealand Dollar",
        "tjs": "Tajik Somoni",
        "php": "Philippine Peso",
        "uah": "Ukrainian hryvnia"
    },
    "maps": {
        "roadmap": "Google roadmap",
        "satellite": "Google satellite",
        "hybrid": "Google hybrid",
        "yandex": "Yandes Maps",
        "yandexpublic": "Yandex Narod Map",
        "cdcom": "ProGorod Maps",
        "osm": "OpenStreet Maps",
        "osmmapnik": "OpenStreet Maps 2",
        "wikimapia": "Wikimapia",
        "navitel": "Navitel Maps",
        "doublegis": "DoubleGis Maps",
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
            "clear_btn": "Clear form",
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
            "error": "Cant create user session",
            "title": "Your sessio code"
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
                "session_text": "Go to monitoring",
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
                    "everyday": "monthly by day"
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
            "creation_date": "Date of registration",
            "creation_date_short": "Registered",
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
            "main_fields": "Main information",
            "title": "Edit tracker",
            "save_btn": "Save changes",
            "return_btn": "Back"
        },
        "clone_form": {
            "title": "Crate clone of tracker",
            "remove_failure_msg": "Removing clone failed",
            "failure_msg": "Creating clone failed",
            "remove_confirm": "Remove clone"
        },
        "group_clone_form": {
            "title": "Cloning group of trackers",
            "save_btn": "Clone",
            "grid_clone_label": "Clones will be added",
            "grid_clone_tip": "You can change the label of the clone by double clicking on it in the list"
        },
        "group_owner_form": {
            "title": "Changing owner for group of trackers",
            "save_btn": "Changing owner",
            "grid_clone_label": "Trackers will be changed"
        },
        "tariff_form": {
            "title": "Change tariff plan for tracker",
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
        "menu_text": "Tariffs",
        "create_form": {
            "title": "Create new tariff",
            "main_fields": "Main information",
            "save_btn": "Create tariff",
            "clear_btn": "Clear form",
            "options_fields": "Tariff options",
            "prices_fields": "Tariff prices"
        },
        "edit_form": {
            "title": "Edit tariff",
            "save_btn": "Save changes"
        },
        "default_form": {
            "title": "Default tariff settings"
        },
        "fields": {
            "tariff_id": "ID",
            "name": "Label",
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
            "tariff_type_short": "Payment"
        },
        "list": {
            "create_btn_text": "Add new tariff",
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
            "tariff_id": "Tariff ID",
            "tariff_name": "Tariff",
            "status": {
                "activated": "activated",
                "no_activated": "not activated"
            }
        },
        "edit_form": {
            "title": "Edit activation codes",
            "save_btn": "Save changes",
            "selected_count": "Codes selected",
            "device_type": "Codes selected for devices"
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
            "footer_text": "The text at the bottom of page"
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
                "login_wallpaper": "Login page wallpaper",
                "desktop_wallpaper": "Service page wallpaper"
            },
            "tips": {
                "logo": "Recommended to load horizontally oriented image with a transparent background and a width of not less than 200 points.",
                "favicon": "Recommended to load the image with a transparent background and a minimum resolution of 32x32 pixels.",
                "login_wallpaper": "Recommended to load background images with a resolution of at least 1920x1080 pixels (FullHD) format JPEG."
            },
            "img_title": "The image format {0} (the maximum size of {1} MB)",
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
                "file_title": "Import file of format {0} (maximal size {1} Mb)"
            },
            "errors": {
                "242": "Line {0}, column {1}, description:<br><i>{2}</i>"
            },
            "success_msg": "Sberbank payments successfully imported",
            "success_dsc": "Date of registry: <b>{0}</b><br>Count of loaded payments: <b>{1}</b><br>Sum of loaded payments: <b>{2}</b>"
        }
    }
});