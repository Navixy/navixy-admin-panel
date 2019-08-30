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
        'images',
        'colors'
    ],
    constructor: function () {
        var lp = _l.get('settings.themes.list');
        this.data = [
            {
                name: 'metromorph',
                login: true,
                title: lp.get('metromorph.title'),
                description: lp.get('metromorph.description'),
                images: ['0', '1'],
                colors: ['1E96dC', '505A64']
            },
            {
                name: 'corp',
                login: true,
                title: 'Corp',
                images: ['0', '1'],
                colors: ['1E96dC', 'FFFFFF']
            },
            {
                name: 'flat',
                login: true,
                title: 'Flat',
                images: ['0', '1'],
                colors: ['1E96dC', '283C50']
            },
            {
                name: 'vine',
                login: true,
                title: 'Vine',
                images: ['0', '1'],
                colors: ['75B08A', '6D637F']
            },
            {
                name: 'dark_blue',
                login: true,
                title: 'Dark Blue',
                images: ['0', '1'],
                colors: ['144682', '3B424D']
            },
            {
                name: 'warm',
                login: true,
                title: 'Warm',
                images: ['0', '1'],
                colors: ['DC7828', '403D3C']
            }
        ];

        this.callParent(arguments);
    }
});