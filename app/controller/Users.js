/**
 * @class NavixyPanel.controller.Users
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Users', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'UserController',

    views: [
        'users.Test',
        'users.Test2',
        'NavixyPanel.view.widgets.CustomPaging',
        'users.UsersList'
    ],

    refs: [
        {
            ref: 'usersList',
            selector: 'userslist'
        }
    ],

    init: function () {
        this.callParent(arguments);

        this.control({
            'userslist': {
                cellclick: this.handleListAction
            }
        });

        this.handle({
            'users' : {
                fn: this.handleUser,
                access: 'read'
            },
            'user > edit' : {
                fn: this.handleUserEdit,
                access: 'update'
            }
        });
    },

    handleUser: function () {
        this.fireContent({
            xtype: 'userslist'
        });
    },

    handleUserEdit: function () {
        this.fireContent({
            xtype: 'utest2'
        });
    },


    handleListAction: function () {
        console.log(arguments);
    }
});