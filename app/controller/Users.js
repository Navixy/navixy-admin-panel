/**
 * @class NavixyPanel.controller.Users
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Users', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'UserController',

    views: [
        'users.UsersList',
        'users.Test'
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
                access: 'delete',
                ignoreMenu: true
            }
        });

        this.menuConfig = {
            text: _l.users.menu_text,
            target: 'users'
        };
    },

    handleUser: function () {
        this.fireContent({
            xtype: 'userslist'
        });
    },

    handleUserEdit: function () {
        this.fireContent({
            xtype: 'utest'
        });
    },


    handleListAction: function () {
        console.log(arguments);
    }
});