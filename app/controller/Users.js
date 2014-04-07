/**
 * @class NavixyPanel.controller.Users
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Users', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'UserController',

    views: [
        'user.Test',
        'user.Test2'
    ],

    init: function () {
        this.callParent(arguments);

        this.handle({
            'user' : {
                fn: this.handleUser,
                access: 'delete'
            },
            'user > edit' : {
                fn: this.handleUserEdit,
                access: 'update'
            }
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
    }
});