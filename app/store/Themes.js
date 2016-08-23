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
                name: 'corp',
                login: true,
                title: 'Corp',
                images: ['1', '0', '2', '3']
            },
            {
                name: 'flat',
                login: true,
                title: 'Flat',
                images: ['1', '0', '2', '3']
            },
            {
                name: 'vine',
                login: true,
                title: 'Vine',
                images: ['1', '0', '2', '3']
            },
            {
                name: 'dark_blue',
                login: true,
                title: 'Dark Blue',
                images: ['1', '0', '2', '3']
            },
            {
                name: 'warm',
                login: true,
                title: 'Warm',
                images: ['1', '0', '2', '3']
            }
        ];

        this.callParent(arguments);
    }
});