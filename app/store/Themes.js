/**
 * @class NavixyPanel.store.Themes
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Themes', {
    extend: 'Ext.data.Store',
    fields: [
        'name',
        {
            name: 'login',
            type: 'boolean',
            defaultValue: false
        },
        'title',
        'description',
        'images'
    ],
    constructor: function () {
        var lp = _l.get('settings.themes.list');
        this.data = [
            {
                name: 'metromorph',
                login: true,
                title: lp.get('metromorph.title'),
                description: lp.get('metromorph.description'),
                images: ['1', '0', '2', '3']
            },
            {
                name: 'teal',
                login: true,
                title: lp.get('teal.title'),
                images: ['1', '0', '2', '3']
            },
            {
                name: 'orange',
                login: true,
                title: lp.get('orange.title'),
                images: ['1', '0', '2', '3']
            },
            {
                name: 'psyco',
                login: true,
                title: lp.get('psyco.title'),
                images: ['1', '0', '2', '3']
            }
        ];

        this.callParent(arguments);
    }
});