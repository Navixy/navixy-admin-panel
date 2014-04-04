/**
 * @class NavixyPanel.controller.User
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.User', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'UserController',

    views: [
        'user.Test',
        'user.Test2'
    ],

    init: function () {
        this.callParent(arguments);

        this.handle({
            'user' : this.handleUser,
            'user > edit' : this.handleUserEdit
        });
    },

    handleUser: function () {
        this.fireContent({
            xtype: 'utest'
        });
    },

    handleUserEdit: function () {
        this.fireContent({
            xtype: 'utest2'
        });
    },
});