/**
 * @class NavixyPanel.store.Geolocation
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Geolocation', {
    extend: 'Ext.data.Store',
    fields: ['type', 'name'],
    constructor: function () {
        this.data = [
            {
                type: 'disabled',
                name: _l.get('geolocation.disabled')
            },
            {
                type: 'navixy',
                name: _l.get('geolocation.navixy')
            },
            {
                type: 'mozilla',
                name: _l.get('geolocation.mozilla')
            },
            {
                type: 'combain',
                name: _l.get('geolocation.combain')
            }
        ];

        this.callParent(arguments);
    }

});