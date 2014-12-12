/**
 * @class NavixyPanel.controller.Bundles
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Bundles', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'BundlesController',

    views: [
        'bundles.List',
        'bundles.Scan',
        'bundles.Printer'
    ],

    refs: [
        {
            ref: 'bundlesList',
            selector: 'bundleslist'
        },
        {
            ref: 'scanForm',
            selector: 'scanform'
        }
    ],

    stores: ['Bundles'],
    models: ['Bundle'],
    waitStores: ['Bundles'],

    init: function () {
        this.callParent(arguments);

        this.control({
            'bundleslist': {
                bundlescan: this.handleScanAction
            },
            'bundlescan': {
                'bundles-list': this.handleListAction
            }
        });

        this.handle({
            'bundles' : {
                fn: this.handleList,
                access: 'read'
            },
            'bundles > scan' : {
                fn: this.handleScan,
                access: 'read,update'
            }
        });

        this.menuConfig = {
            text: _l.get('bundles.menu_text'),
            target: 'bundles/scan'
        };
    },

    handleListAction: function () {
        Ext.Nav.shift('bundles');
    },

    handleList: function () {
        this.fireContent({
            xtype: 'bundleslist',
            createBtn: true,
            hasEdit: false
        });
    },

    handleScanAction: function () {
        Ext.Nav.shift('bundles/scan');
    },

    handleScan: function () {
        this.fireContent({
            xtype: 'bundlescan'
        });
    }
});