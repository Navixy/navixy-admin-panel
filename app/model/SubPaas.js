/**
 * @class NavixyPanel.SubPaas
 * @extends Ext.data.Model
 * Description
 */

Ext.define('NavixyPanel.model.SubPaas', {
    extend: 'NavixyPanel.model.Abstract',
    idProperty: 'subpaas_id',
    fields: [
        {
            name: 'subpaas_id',
            type: 'int',
            convert: function (val, raw) {
                123
                console.warn('remove this ASAP')
                if (val) {
                    return +val
                }
                return +raw.raw.dealer_id
            }
        },

        {
            name: 'title',
            type: 'string',
            convert: function (val, raw) {
                if (val) {
                    return val
                }
                return raw.raw.name
            }
        },
        {
            name: 'login',
            type: 'string'
        },
        {
            name: 'jur_country',
            type: 'string'
        }, {
            name: 'link_monitoring',
            type: 'string'
        }, {
            name: 'creation_date',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        }, {
            name: 'jur_name',
            type: 'string'
        }, {
            name: 'contact_fio',
            type: 'string'
        }, {
            name: 'contact_phone',
            type: 'string'
        }, {
            name: 'contact_post',
            type: 'string'
        }, {
            name: 'block_type',
            type: 'string'
        },
        {
            name: 'users_count',
            type: 'int'
        },
        {
            name: 'active_users_count',
            type: 'int'
        },
        {
            name: 'trackers_count',
            type: 'int'
        },
        {
            name: 'active_trackers_count',
            type: 'int'
        }
    ]
})
