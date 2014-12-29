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
        'bundles.Scanner',
        'bundles.Printer',
        'bundles.Bundles',
        'bundles.Shipping',

        'widgets.fields.IMEIField',
        'widgets.fields.ICCIDField',

        'equipment.SelectWindow'
    ],

    refs: [
        {
            ref: 'bundlesList',
            selector: 'bundles-list'
        },
        {
            ref: 'scanForm',
            selector: 'scanform'
        },
        {
            ref: 'bundlesPanel',
            selector: 'bundles'
        },
        {
            ref: 'Scanner',
            selector: 'bundle-scanner'
        },
        {
            ref: 'MainList',
            selector: 'bundles-list[role="bundles-list"]'
        },
        {
            ref: 'Shipping',
            selector: 'bundles-shipping'
        }
    ],

    stores: ['Bundles', 'Equipment'],
    models: ['Bundle', 'Order', 'Equipment'],

    init: function () {
        this.callParent(arguments);

        this.control({
            'bundles-list': {
                editclick: this.handleListEdit,
                removeclick: this.handleListRemove
            },
            'bundles tabpanel': {
                tabchange: this.handleBundlesAction
            },
            'bundles-shipping': {
                'order-assign': this.afterOrderAssign
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
            'bundle > edit' : {
                fn: this.handleBundleEdit,
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
            xtype: 'bundles-list',
            hasEdit: true
        });
    },

    handleBundles: function () {
        this.fireContent({
            xtype: 'bundles'
        });
    },

    handleBundleEdit: function (imei) {
        if (imei) {
            if (this.getBundlesPanel()) {
                this.showBundleEdit(imei);
            } else {
                this.handleBundles();
                Ext.waitFor(function () {
                    return this.getBundlesPanel() && this.getBundlesPanel().rendered
                }, function () {
                    this.showBundleEdit(imei)
                }, this)
            }
        }
    },

    showBundleEdit: function (imei) {
        this.getBundlesPanel().startBundleEdit(imei)
    },

    handleBundlesAction: function () {
        Ext.Nav.shift('bundles');
    },

    handleListEdit: function (bundle) {
        this.handleBundleEdit(bundle.get('imei'))
    },

    handleListRemove: function (bundle) {
        if (bundle && bundle.get('order_id')) {
            Ext.MessageBox.show({
                msg: Ext.String.format(_l.get('bundles.list.unassign_q'), bundle.get('imei')),
                width: 450,
                buttons: Ext.MessageBox.OKCANCEL,
                icon: Ext.MessageBox.QUESTION,
                closable: false,
                fn: function (){
                    this.unOrderBundle(bundle)
                },
                scope: this
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
                bundle.set('order_id', null);
                this.afterOrderAssign(bundle)
            },
            scope: this
        });
    },

    afterOrderAssign: function (bundle) {
        this.getMainList().doRefresh();
        this.getShipping().updateList(bundle);
        this.checkScannerChanges(bundle)
    },

    checkScannerChanges: function (bundle) {
        var scanner = this.getScanner();

        if (scanner) {
            scanner.checkBundleChanges(bundle.get('imei'));
        }
    }
});