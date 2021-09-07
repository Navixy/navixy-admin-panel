/**
 * @class NavixyPanel.store.DateFormats
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.DateFormats', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name'],
    constructor: function () {
        var labels = _l.get('date_formats');
        this.data = [
            {
                id: 'default',
                name: labels.default,
            },
            {
                id: 'ddMMyyyy_dots',
                name: labels.ddMMyyyy_dots,
            },
            {
                id: 'ddMMyyyy_slashes',
                name: labels.ddMMyyyy_slashes,
            },
            {
                id: 'MMddyyyy_hyphens',
                name: labels.MMddyyyy_hyphens,
            },
            {
                id: 'yyyyMMdd_hyphens',
                name: labels.yyyyMMdd_hyphens,
            },
            {
                id: 'dMMMy',
                name: labels.dMMMy,
            },
            {
                id: 'dMMMMy',
                name: labels.dMMMMy,
            },
        ];
        this.callParent(arguments);
    }
});