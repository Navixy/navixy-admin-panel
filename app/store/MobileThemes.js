/**
 * @class NavixyPanel.store.MobileThemes
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.MobileThemes', {
    extend: 'Ext.data.Store',
    fields: [
        'name',
        'color',
        {
            name: 'default',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'disabled',
            type: 'boolean',
            defaultValue: false
        }
    ],
    constructor: function () {
        this.data = [
            {
                name: 'orange_1',
                color: 'F44336'
            },
            {
                name: 'pink_1',
                color: 'E91E63'
            },
            {
                name: 'violet_1',
                color: '9C27B0'
            },
            {
                name: 'violet_2',
                color: '673AB7'
            },
            {
                name: 'blue_1',
                color: '3F51B5'
            },
            {
                name: 'blue_2',
                default: true,
                color: '1E96DC'
            },
            {
                name: 'blue_3',
                color: '0097A7'
            },
            {
                name: 'green_1',
                color: '009688'
            },
            {
                name: 'green_2',
                color: '43A047'
            },
            {
                name: 'orange_2',
                color: 'FFA000'
            },
            {
                name: 'orange_3',
                color: 'E65100'
            },
            {
                name: 'grey_1',
                color: '607D8B'
            },
            {
                name: 'green_3',
                color: '97C33C',
                disabled: true
            },
            {
                name: 'blue_4',
                color: '29ACDF',
                disabled: true
            }
        ];
        this.callParent(arguments);
    },

    getDefaultTheme: function () {
        var record = this.findRecord('default', true);

        return record && record.get('name');
    },

    checkThemeAvailability: function (name) {
        var search = this.findBy(function (record) {
                return !record.get('disabled') && record.get('name') == name
            }, this);

        return search !== -1
            ? name
            : this.getDefaultTheme();
    }
});