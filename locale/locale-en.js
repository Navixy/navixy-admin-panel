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

    panel_title: 'Nyan NavixyPanel',
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

    clear_form_btn: 'Clear',
    save_form_btn: 'Save',

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
        service_not_respond: 'The service is temporarily unavailable'
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
            user_id: 'ID'
        }
    },

    trackers: {
        menu_text: 'Trackers'
    }

})
;
