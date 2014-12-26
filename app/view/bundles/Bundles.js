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
                part: 'bundle-scanner',
                items: [
                    {
                        xtype: 'bundle-scanner'
                    }
                ]
            },
            {
                title: _l.get('bundles.menu.shipping'),
                items: [
                    {
                        xtype: 'bundles-shipping'
                    }
                ]
            },
            {
                title: _l.get('bundles.menu.list'),
                items: [
                    {
                        xtype: 'bundles-list',
                        hasEdit: true,
                        padding: '10 0 0 0',
                        style: 'background-color: #f0f0f0',
                        role: 'bundles-list'
                    }
                ]
            }
        ]
    },

    startBundleEdit: function (imei) {
        var scanner = this.down('bundle-scanner'),
            tab = scanner && scanner.up();

        this.getTabPanel().setActiveTab(tab);
        scanner.resetScanner(imei);
    }
});
