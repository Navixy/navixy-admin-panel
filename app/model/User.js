/**
 * @class NavixyPanel.User
 * @extends Ext.data.Model
 * Description
 */

Ext.define('NavixyPanel.model.User', {
    extend: 'NavixyPanel.model.Abstract',
    fields: [
        {
            name: 'dealer_id',
            type: 'int'
        },
        {
            name: 'balance',
            type: 'float'
        },
        {
            name: 'bonus',
            type: 'float'
        },

        {
            name: 'login',
            type: 'string'
        },
        {
            name: 'first_name',
            type: 'string'
        },
        {
            name: 'middle_name',
            type: 'string'
        },
        {
            name: 'last_name',
            type: 'string'
        },

        {
            name: 'activated',
            type: 'boolean'
        },
        {
            name: 'legal_type',
            type: 'string'
        },
        {
            name: 'tin',
            type: 'string'
        },
        {
            name: 'legal_name',
            type: 'string'
        },
        {
            name: 'iec',
            type: 'string'
        },
        {
            name: 'state_reg_num',
            type: 'string'
        },
        {
            name: 'okpo_code',
            type: 'string'
        },
        {
            name: 'phone',
            type: 'string'
        },
        {
            name: 'post_country',
            type: 'string'
        },
        {
            name: 'post_index',
            type: 'string'
        },
        {
            name: 'post_region',
            type: 'string'
        },
        {
            name: 'post_city',
            type: 'string'
        },
        {
            name: 'post_street_address',
            type: 'string'
        },
        {
            name: 'registered_country',
            type: 'string'
        },
        {
            name: 'registered_index',
            type: 'string'
        },
        {
            name: 'registered_region',
            type: 'string'
        },
        {
            name: 'registered_city',
            type: 'string'
        },
        {
            name: 'registered_street_address',
            type: 'string'
        },
        {
            name: 'creation_date',
            type: 'string'
        },
        {
            name: 'verified',
            type: 'boolean'
        },
        {
            name: 'trackers_count',
            type: 'number'
        }, {
            name: 'discount',
            type: 'number'
        },
        {
            name: 'discount_min_trackers',
            type: 'number'
        },
        {
            name: 'discount_end_date'
        },
        {
            name: 'discount_strategy'
        },
        {
            name: 'comment',
            type: 'string'
        },
        {
            name: 'default_tariff_id',
            type: 'number'
            }
        },
        {
            name: 'block'
        }
    ],

    associationsMap: {
        'default_tariff_id': 'Tariffs'
    },

    getAssociations: function (loadAssociations) {
        var result = {};

        Ext.iterate(this.associationsMap, function (association, associatedStore) {
            if (!loadAssociations || (Ext.isArray(loadAssociations) && Ext.Array.indexOf(loadAssociations, associatedStore) < 0)) {
                return true;
            }

            if (!Ext.isEmpty(this.get(association)) && this.get(association) !== 0) {
                result[associatedStore] = this.get(association);
            }
        }, this);

        return Ext.Object.getSize(result)
            ? result
            : null;
    },

    hasTrackerClone: function (sourceId) {
        var trackers = this.getTrackers(),
            result = false;

        if (trackers && Ext.isNumber(sourceId)) {
            Ext.iterate(trackers, function (record) {
                if (record.get('source_id') === sourceId) {
                    result = true;
                    return false;
                }
            });
        }

        return result
    },

    getTrackers: function () {
        var trackersStore = Ext.getStore('Trackers'),
            user_id = this.get('id'),
            result = [];

        if (trackersStore) {
            trackersStore.each(function (record) {
                if (record.get('user_id') == user_id) {
                    result.push(record);
                }
            }, this);
        }

        return result.length && result;
    }
});
