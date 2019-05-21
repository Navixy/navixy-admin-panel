/**
 * @class NavixyPanel.controller.Reports
 * @extends NavixyPanel.controller.Abstract
 * Description
 */

Ext.define('NavixyPanel.controller.Reports', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'ReportsController',

    views: [
        'reports.active_trackers.List',
        'reports.Panel'
    ],

    refs: [
        {
            ref: 'activeTraclersStatList',
            selector: 'active-trackers-grid'
        }
    ],

    stores: ['ActiveTrackersStat', 'SubpaasActiveTrackersStat'],
    models: ['ActiveTrackersStatItem', 'SubpaasActiveTrackersStatItem'],

    init: function () {
        this.callParent(arguments)
        this.menuConfig = {
            text: _l.get('reports.menu_text'),
            target: 'reports'
        }

        this.handle({
            'reports': {
                fn: this.handleReports,
                entity: 'trackers',
                access: 'report'
            }
        })
    },

    registerMenu: function () {
        if (Ext.checkPermission('trackers', 'report')) {

            this.menuConfig.eventName = this.getHandlerEventConfig(this.menuConfig.target)

            var menuText = this.menuConfig.text || this.getModuleName(),
                menuTarget = Ext.Nav.makeToken(this.getHandlerEventPath(this.menuConfig.target))

            this.application.fireEvent('menuregister', {
                name: this.getModuleName(),
                text: menuText,
                target: menuTarget
            })
        }
    },

    handleReports: function () {
        Ext.API.getSubPaasList({
            params: {
                order_by: 'block_type',
                ascending: false
            },
            callback: function (result) {
                var newReportsView = false

                if (result.count) {
                    var subpaases = result.list
                    if (subpaases[0].block_type !== 'INITIAL_BLOCK') {
                        newReportsView = true
                    }
                }

                Ext.getStore('Dealer').newReports = newReportsView

                this.fireContent({
                    xtype: 'reports-panel'
                })
            },
            scope: this
        })


    }
});
