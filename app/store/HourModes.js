/**
 * @class NavixyPanel.store.HourModes
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.HourModes', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name'],
    constructor: function () {
        var labels = _l.get('hour_modes');
        this.data = [
            {
                id: 'default',
                name: labels.default,
            },
            {
                id: 'TWENTY_FOUR_HOURS',
                name: labels.twentyfour,
            },
            {
                id: 'TWELVE_HOURS',
                name: labels.twelve,
            },
        ];
        this.callParent(arguments);
    }
});