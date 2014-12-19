/**
 * @class NavixyPanel.view.bundles.Bundles
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.bundles.Bundles', {
    extend: 'NavixyPanel.view.components.AbstractTabForm',
    alias: 'widget.bundles',

    singleCmp: false,

    bodyPadding: '0 0 0 0',
    formRowPadding: '50 0 0 0',


    getCellDefaults: function () {
        return {
            xtype: 'container',
            flex: 1
        };
    },

    getButtons: function () {
        return null;
    },

    getTitle: function () {
        return _l.get('bundles.title');
    },

    getTabs: function () {

        return [
            {
                title: _l.get('bundles.menu.scan'),
                items: [
                    {
                        xtype: 'bundlescan'
                    }
                ]
            },
            {
                title: _l.get('bundles.menu.shipping'),
                items: [
                    {
                        xtype: 'bundlesshipping'
                    }
                ]
            },
            {
                title: _l.get('bundles.menu.list'),
                items: [
                    {
                        xtype: 'bundleslist',
                        hasEdit: true,
                        padding: '10 0 0 0',
                        style: 'background-color: #f0f0f0'
                    }
                ]
            }
        ]
    }
});
