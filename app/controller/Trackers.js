/**
 * @class NavixyPanel.controller.Trackers
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Trackers', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'TrackersController',

    views: [
        'users.Test2'
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
            target: 'trackers'
        };
    },

    handleTrackers: function () {
        this.fireContent({
            xtype: 'utest2'
        });
    }
});