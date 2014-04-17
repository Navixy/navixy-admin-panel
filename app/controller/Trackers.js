/**
 * @class NavixyPanel.controller.Trackers
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Trackers', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'TrackersController',

    views: [
        'trackers.List'
    ],

    init: function () {
        this.callParent(arguments);

        this.handle({
            'trackers' : {
                fn: this.handleTrackers,
                access: 'read'
            }
        });

        this.menuConfig = {
            text: _l.trackers.menu_text,
            target: 'trackers'
        };
    },

    handleTrackers: function () {
        this.fireContent({
            xtype: 'trackerslist',
            createBtn: Ext.checkPermission(this.getModuleName(), 'create'),
            hasEdit: Ext.checkPermission(this.getModuleName(), 'update')
        });
    }
});