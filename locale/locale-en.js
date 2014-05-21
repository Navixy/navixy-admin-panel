/**
 * @class Locale.locale-en
 * @extends Ext.Base
 * Description
 */

Ext.define('Locale.locale-en', {
    dependencies: [
        'Locale.ext.locale-en'
    ],
    singleton: true,

    main_copyright: '© 2005-2014 RusLink. All rights reserved.',

    panel_title: 'NavixyPanel',
    error: 'Error',
    loading: 'Loading...',
    conneting_loader: 'Connecting to server',

    access_denied: 'ERROR! ERROR! ACCESS DENIED',
    access_denied_tip: 'You must be destroyed, sent a team of robotic man fighter',

    auth: {
        login: 'Login or Email address',
        password: 'Password',
        login_btn: 'Login',
        locale_title: 'Interface language',
        locale_title_short: 'language',
        auth_error: 'Authentication error',
        logout: 'Logout'
    },

    no_path_found: 'No page on this path',
    phone_invalid_msg: 'Please enter a valid phone number',
    invalid_numeric_msg: 'Not a valid number',

    searcher_empty_text: 'Enter search query',

    clear_form_btn: 'Clear',
    save_form_btn: 'Save',
    back_form_btn: 'Back',
    select_form_btn: 'Select',
    close_form_btn: 'Close',
    yes: 'yes',
    no: 'no',
    show_btn: 'Show',
    wrong_period: 'An invalid period',
    required_fields: '* - required fields or sections',

    page_size: 'Page size',

    errors: {
        1: 'Database connection error (001). Please contact support or try again later.',
        2: 'Authorization system error (002).  Please contact support or try again later.',
        3: 'Wrong session key (003).  Please re-login. If the problem persists, contact support.',
        4: 'User can not be found or session has ended (004).  Please re-login.',
        5: 'Incorrect request (005). Please contact support or try again later.',
        6: 'Unexpected error (006). Please contact support or try again later.',
        7: {
            default_msg: 'Incorrect request parameters. Check the data.',
            title: 'Incorrect parameters:',
            errors: {
                login: 'Must be a valid email address'
            }
        },

        11: 'Access denied',
        12: 'The service platform is not found',
        101: 'In demo mode this feature is disabled',
        102: 'Wrong username or password',
        103: 'The user has not activated',
        111: 'Wrong handler',
        112: 'Wrong method',
        201: 'No data found',
        202: 'There are too many points in the area',
        203: 'Related item has been deleted',
        204: 'Element not found',
        205: 'Invalid parameters',
        206: 'This username is already in use',
        207: 'Invalid captcha',
        208: 'The device is locked',
        209: 'Failed to send message',
        213: 'The device is offline',
        214: 'Requested operation are not supported by the device',
        219: 'The action is not allowed for the clone objects',
        221: 'Tariff restriction:</br> Device limit exceeded.',
        223: 'This phone number is already in use',
        224: 'Device with this device-id is already in use',
        227: 'Invalid activation code',
        210: 'Geocoding failed',
        211: 'Requested time span is too big',
        212: 'Requested limit is too big',
        215: 'External service error',
        216: 'Group is not empty',
        217: 'List contains nonexistent entities',
        218: 'Malformed external service parameters',
        220: 'Unknown device model',
        222: 'Plugin not found',
        225: 'Not allowed for this legal type',
        226: 'Wrong ICCID',
        228: 'Not supported by sensor',
        229: 'Requested data is not ready yet',
        230: 'Not supported for this entity type',
        231: 'Entity type mismatch',
        232: 'Input already in use	',
        233: 'No data file',
        234: 'Invalid data format',
        235: 'Missing calibration data',
        236: 'Feature unavailable due to tariff restrictions',
        238: 'Changing tariff is not allowed',
        240: 'Not allowed to change tariff too frequently',
        242: 'Validation error',
        upload_exeption: 'File upload error',
        no_hash: 'The session key is not found',
        service_not_respond: 'The service is temporarily unavailable',
        tracker: {
            203: 'Tracker has attached rules',
            246: 'User is incorrect',
            247: 'Clone already exists',
            249: 'The operation is available only for the clones'
        },
        tariff: {
            244: 'Tariff with the same name already exists'
        }
    },

    units_combination: {
        days: ['days', 'day', 'days'],
        hours: ['hours', 'hour', 'hours'],
        minutes: ['minutes', 'minute', 'minutes'],
        seconds: ['seconds', 'second', 'seconds'],
        everyminutes: ['minutes', 'minute', 'minutes'],
        everyseconds: ['seconds', 'second', 'seconds'],
        meters: ['meters', 'meter', 'meters'],
        degrees: ['degrees', 'degree', 'degrees'],
        objects: ['objects', 'object', 'objects'],
        years: ['years', 'year', 'years'],
        months: ['months', 'month', 'months'],
        codes: ['codes', 'code', 'codes'],
        devices: ['devices', 'device', 'devices'],
        entries: ['matches', 'match', 'matches']
    },

    units_short: {
        kilometer: 'km',
        meter: 'm',
        square_kilometer: 'sq. km',
        square_meter: 'sq. m',
        ar: 'ar',
        hectare: 'ha',
        kmh: 'km / h',
        hour: 'h',
        minute: 'm',
        second: 's',
        litres: 'l',
        day: 'd'
    },

    search: {
        empty: 'Search by category',
        btn: 'Find'
    },

    list: {
        edit_tool: 'edit',
        create_btn_text: 'Create',
        empty_text: 'No data',
        search_title_tpl: '{0}: found {1}',
        search_empty_title_tpl: '{0}: no matches found',
        search_title: 'Search',
        search_empty_title: 'No matches found'
    },

    card: {
        links: {
            collapser_tip: 'Hide links',
            collapser_exptip: 'Show links'
        },
        body: {
            title: 'Additional information:',
            exptitle: 'Additional information <a>(show)</a>',
            collapser_tip: 'Hide additional information',
            collapser_exptip: 'Show additional information'
        }
    },

    devices: {
        tracker: 'Tracker',
        camera: 'Camera'
    },

    dealer_info: {
        first: 'active',
        last: 'of'
    },

    index: {
        menu_text: 'Home'
    },

    users: {
        menu_text: 'Users',
        create_btn: 'New user',
        create_form: {
            title: 'New user',
            main_fields: 'General information',
            contact_fields: 'Contact details',
            address_fields: 'Address',
            legal_fields: 'Legal entity information',
            password: 'Password',
            password_repeat: 'Repeat password',
            password_mismatched: 'Passwords do not match',
            language: 'Default language',
            time_zone: 'Time Zone',
            save_btn: 'Create User',
            clear_btn: 'Clear form',
            copy_address: 'Copy from address'
        },
        edit_form: {
            title: 'Edit user',
            save_btn: 'Save changes',
            return_btn: 'Back'
        },
        fields: {
            menu_text: 'Users',
            login: 'Email address',
            first_name: 'Name',
            middle_name: 'Patronymic',
            last_name: 'Surname',
            activated: 'Activated',
            legal_type: 'Legal status',
            tin: 'TIN',
            legal_name: 'Legal Name',
            iec: 'IEC',
            phone: 'Phone number',
            post_country: 'Country',
            post_index: 'Zip code',
            post_region: 'Region',
            post_city: 'City',
            post_street_address: 'Street, address',
            registered_country: 'Registration country',
            registered_index: 'Registration zip code',
            registered_region: 'Registration region',
            registered_city: 'Registration city',
            registered_street_address: 'Registration address',

            sole_trader: 'Sole trader',
            legal_entity: 'Legal entity',
            individual : 'Individual',
            full_name: 'Full Name',
            login_short: 'Login',
            user_id: 'ID',
            user_id_exp: 'User number',
            activated_short: {
                title: 'Status',
                status_true: 'Active',
                status_false: 'Not active'
            },
            registered_short: 'legal'
        },
        list: {
            create_btn_text: 'Create new user',
            empty_text: 'No users found'
        },
        session_alert: {
            error: 'Cant create user session',
            title: 'Your sessio code'
        },
        card: {
            tab_panel: {
                trackers: {
                    title: 'User trackers'
                },
                transactions: {
                    title: 'Transactions'
                }
            },
            links: {
                session_text : 'Go to monitoring',
                user_edit: 'Edit user',
                transactions: 'Transactions'
            }
        },
        transactions: {
            list: {
                empty_text: 'No transactions found',
                title: 'Transactions for user'
            },
            fields: {
                description: 'Operation',
                type: 'Operation type',
                subtype: 'Subtype',
                date: 'Date',
                amount: 'Sum',
                old_balance: 'Old',
                new_balance: 'New',
                type_set: {
                    main_charge: 'main_charge',
                    payment: 'payment'
                },
                subtype_set: {
                    monthly: 'monthly',
                    partner: 'partner'
                }
            }
        },
        combo_empty: 'Select an user',
        select_error: 'Tracker or his clone is already bound to selected user',
        select: {
            title: 'Select an user'
        }
    },

    trackers: {
        menu_text: 'Trackers',
        fields: {
            tracker_id: 'ID',
            label: 'Title',
            model: 'Model',
            phone: 'Phone',
            device_id: 'Device id',
            creation_date: 'Creation date',
            creation_date_short: 'Created',
            connection_status: 'Status',
            tracker_id_exp: 'Tracker number',
            phone_exp: 'Phone number',
            owner: 'Tracker owner',
            tariff: 'Tracker tariff',
            deleted: 'Marked as deleted',
            blocked: 'Service paused',
            clone: 'Clone',
            clone_owner: 'Clone owner',
            options: {
                clone: 'clone',
                deleted: 'deleted',
                blocked: 'blocked'
            },
            statuses: {
                online: 'Online',
                offline: 'Offline',
                just_registered: 'Offline',
                signal_lost: 'No connect'
            }
        },
        edit_form: {
            main_fields: 'Main information',
            title: 'Edit tracker',
            save_btn: 'Save changes',
            return_btn: 'Back'
        },
        clone_form: {
            title: 'Crate clone of tracker',
            remove_failure_msg: 'Removing clone failed',
            failure_msg: 'Creating clone failed',
            remove_confirm: 'Remove clone'
        },
        list: {
            create_btn_text: 'Create new tracker',
            empty_text: 'No tracers found'
        },
        card: {
            links: {
                change_tracker_user: 'Change owner',
                tracker_edit: 'Edit tracker',
                tracker_clone_create: 'Create clone of this tracker',
                tracker_clone_remove: 'Delete this clone',
                tracker_tariff: 'Tracker tariff',
                tracker_owner: 'Tracker owner',
                tracker_console: 'GPRS-terminal'
            }
        },
        console: {
            title: 'GPRS-terminal for tracker',
            connect_btn: 'Start connection',
            disconnect_btn: 'Close connection',
            auto_scroll: 'Auto-scrolling',
            clear: 'Clear console',
            send_btn: 'Send',
            send_empty: 'Type the command',
            loading: 'Connecting to a device',
            connect_init: 'Connection is established',
            show_time: 'Show message time',
            show_status: 'Show status',
            disconnect_msg: 'Connection terminated',
            connect_msg: 'Connection is established',
            error_msg: 'Error connecting to device',
            connection_failure: 'Unable to connect to device',
            close_question: 'Close connection?',
            status_title: 'Device status',
            status_property_title: 'Status',
            status_value_title: 'Value'
        }
    },

    tariffs: {
        menu_text: 'Tariffs',
        create_form: {
            title: 'Create new tariff',
            main_fields: 'Main information',
            save_btn: 'Create tariff',
            clear_btn: 'Clear form',
            options_fields: 'Tariff options',
            prices_fields: 'Tariff prices'
        },
        edit_form: {
            title: 'Edit tariff',
            save_btn: 'Save changes'
        },
        default_form: {
            title: 'Default tariff settings'
        },
        fields: {
            tariff_id: 'ID',
            name: 'Label',
            group_id: 'Group',
            price: 'Monthly payment',
            device_limit: 'Limit of devices',
            device_type: 'Device type',
            store_period: 'History storage period',
            active: 'Available for user',
            has_reports: 'Table reports is available',
            proportional_charge: 'Subscription fee for the partial month of proportion to the number of days to write off',
            incoming_sms: 'Incoming SMS',
            outgoing_sms: 'Outgoing SMS',
            service_sms: 'Service SMS',
            phone_call: 'Phone calls',
            traffic: 'GPRS (for Mb)',
            default_tariff: 'the default tariff for devices of type «{0}»',
            default_short: 'default',
            service_price: 'the amount charged for service usage',
            group_id_exp: 'Tariff group',
            active_exp: 'Users can switch to this tariff on his own',
            device_limit_exp: 'Maximum devices',
            activation_bonus: 'Activation bonus',
            free_days: 'Number of free days'
        },
        list: {
            create_btn_text: 'Add new tariff',
            empty_text: 'Tariffs not found'
        },
        card: {
            links: {
                make_default: 'Mark as default',
                tariff_edit: 'Edit tariff'
            },
            tab_panel: {
                trackers: {
                    title: 'Trackers at this tariff'
                }
            }
        },
        combo_empty: 'Select tariff',
        select_error: 'This tariff is not available',
        select: {
            title: 'Select tariff'
        }
    },

    codes: {
        menu_text: 'Activation codes',
        fields: {
            activated: 'status',
            activation_date: 'Activation date',
            bonus_amount: 'Bonus',
            code: 'code',
            device_id: 'Device ID',
            device_type: 'Device type',
            free_days: 'Free days',
            money_amount: 'Amount',
            tariff_id: 'Tariff ID',
            tariff_name: 'Tariff',
            status: {
                activated: 'activated',
                no_activated: 'not activated'
            }
        },
        edit_form: {
            title: 'Edit activation codes',
            save_btn: 'Save changes',
            selected_count: 'Codes selected',
            device_type: 'Codes selected for devices'
        },
        list: {
            empty_text: 'No activation codes found',
            create_btn: 'Edit selected',
            reload_btn: 'Reload',
            after_edit_success: 'Changes: {0}',
            after_edit_failure: 'Changed: {0}, {0} change failed',
            select_req: 'Select codes from list',
            same_type_req: 'You must specify one device type codes',
            edited_tip: 'changed'
        }
    }
})
;
