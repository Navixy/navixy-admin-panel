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

    panel_title: 'Nyan NavixyPanel',
    error: 'Error',
    loading: 'Loading...',

    access_denied: 'ERROR! ERROR! ACCESS DENIED',
    access_denied_tip: 'You must be destroyed, sent a team of robotic man fighter',

    auth: {
        login: 'Login or Email address',
        password: 'Password',
        login_btn: 'Login',
        locale_title: 'Interface language',
        auth_error: 'Authentication error',
        logout: 'Logout'
    },

    no_path_found: 'No page on this path',

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
                activation_code: 'Activation code should contain only digits and' +
                    'from 3 to 20 characters length',
                iccid: 'ICCID should begin with 89,  contain only digits and have 19 or 20 characters length',
                apn_password: 'APN password must be specified',
                apn_user: 'APN username must be specified',
                apn_name: 'APN name must be specified',
                trackers: 'Pick at least 1 tracker',
                'apn_parameters.apn_name': 'Invalid APN'
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
    }
})
;
