/**
 * @class NavixyPanel.controller.Users
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Users', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'UserController',

    views: [
        'widgets.ToolColumn',

        'users.UsersList',
        'users.UserCreate',
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
                actionclick: this.handleListAction,
                editclick: this.handleUserEditAction
            }
        });

        this.handle({
            'users' : {
                fn: this.handleUser,
                access: 'read'
            },
            'user' : {
                fn: this.handleUserCard,
                access: 'read'
            },
            'user > edit' : {
                fn: this.handleUserEdit,
                access: 'read'
            },
            'user > create' : {
                fn: this.handleUserCreate,
                access: 'create',
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
            xtype: 'utest2'
        });
    },

    handleUserCard: function () {
        this.fireContent({
            xtype: 'utest'
        });
    },

    handleUserCreate: function () {
        this.fireContent({
            xtype: 'usercreate'
        });
    },



    handleListAction: function (record) {
        var userId = record.getId();
        Ext.Navigator.goTo('user/' + userId);
    },

    handleUserEditAction: function (record) {
        var userId = record.getId();

        Ext.Navigator.goTo('user/' + userId + '/edit');
    }
});