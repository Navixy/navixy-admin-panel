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
        'bundles.Printer',
        'bundles.Bundles',
        'bundles.Shipping',
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
    models: ['Bundle', 'Order'],
    waitStores: ['Bundles'],

    init: function () {
        this.callParent(arguments);

        this.control({
            'bundleslist': {
                editclick: this.handleListAction
            }
        });

        this.handle({
            'bundles' : {
                fn: this.handleBundles,
                access: 'read'
            },
            'bundles > list' : {
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
            target: 'bundles'
        };
    },

    handleList: function () {
        this.fireContent({
            xtype: 'bundleslist',
            hasEdit: true
        });
    },

    handleBundles: function () {
        this.fireContent({
            xtype: 'bundles'
        });
    },

    handleScanAction: function () {
        Ext.Nav.shift('bundles/scan');
    },

    handleScan: function () {
        this.fireContent({
            xtype: 'bundlescan'
        });
    },

    handleListAction: function (bundle) {
        if (bundle && bundle.get('order_id')) {
            Ext.MessageBox.show({
                msg: Ext.String.format(_l.get('bundles.list.unassign_q'), bundle.get('imei')),
                width: 450,
                buttons: Ext.MessageBox.OKCANCEL,
                icon: Ext.MessageBox.QUESTION,
                closable: false,
                fn: Ext.bind(this.unOrderBundle, this, [bundle])
            });
        }
    },

    unOrderBundle: function (bundle) {
        Ext.API.assignBundleToOrder({
            params: {
                order_id: null,
                bundle_id: bundle.getId()
            },
            callback: function () {
                this.afterServerAssign(bundle)
            },
//            failure: this.afterServerAssignFailure,
            scope: this
        });
    },

    afterServerAssign: function (bundle) {
        bundle.set('order_id', null);
        Ext.getStore('Bundles').load();
    }
});