/**
 * @class NavixyPanel.store.MeasurementSystems
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.MeasurementSystems', {
    extend: 'Ext.data.Store',
    fields: ['type', 'name'],
    constructor: function () {
        this.data = [
            {
                type: 'metric',
                name: _l.get('measurement_systems.metric')
            },
            {
                type: 'imperial',
                name: _l.get('measurement_systems.imperial')
            },
            {
                type: 'us',
                name: _l.get('measurement_systems.us')
            }
        ];

        this.callParent(arguments);
    }
});