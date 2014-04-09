/**
 * @class NavixyPanel.User
 * @extends Ext.data.Model
 * Description
 */

Ext.define('NavixyPanel.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'dealer_id', type: 'int'},

        {name: 'login', type: 'string'},
        {name: 'first_name', type: 'string'},
        {name: 'middle_name', type: 'string'},
        {name: 'last_name', type: 'string'},

        {name: 'activated', type: 'boolean'},
        {name: 'legal_type', type: 'string'},
        {name: 'tin', type: 'string'},
        {name: 'legal_name', type: 'string'},
        {name: 'iec', type: 'string'},

        {name: 'phone', type: 'string'},
        {name: 'post_country', type: 'string'},
        {name: 'post_index', type: 'string'},
        {name: 'post_region', type: 'string'},
        {name: 'post_city', type: 'string'},
        {name: 'post_street_address', type: 'string'},
        {name: 'registered_country', type: 'string'},
        {name: 'registered_index', type: 'string'},
        {name: 'registered_region', type: 'string'},
        {name: 'registered_city', type: 'string'},
        {name: 'registered_street_address', type: 'string'}
    ],

    validations: [
        {field: 'dealer_id', type: 'present'},

        {field: 'login', type: 'email', min: 2, max: 100},
        {field: 'first_name', type: 'length', min: 2, max: 100},
        {field: 'middle_name', type: 'length', min: 2, max: 100},
        {field: 'last_name', type: 'length', min: 2, max: 100},

        {field: 'legal_type', type: 'inclusion', list: ['legal_entity', 'individual', 'sole_trader']},
        {field: 'tin', type: 'length', min: 9, max: 12},
        {field: 'legal_name', type: 'length', min: 2, max: 100},
        {field: 'iec', type: 'length', min: 4, max: 10},

        {field: 'phone', type: 'length', min: 10, max: 15},
        {field: 'post_country', type: 'length', min: 2, max: 100},
        {field: 'post_index', type: 'length', min: 6},
        {field: 'post_region', type: 'length', min: 2, max: 100},
        {field: 'post_city', type: 'length', min: 2, max: 100},
        {field: 'post_street_address', type: 'length', min: 2, max: 100},
        {field: 'registered_country', type: 'length', min: 2, max: 100},
        {field: 'registered_index', type: 'length', min: 6},
        {field: 'registered_region', type: 'length', min: 2, max: 100},
        {field: 'registered_city', type: 'length', min: 2, max: 100},
        {field: 'registered_street_address', type: 'length', min: 2, max: 100}
    ]
});