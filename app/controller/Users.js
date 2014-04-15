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
        },
        {
            ref: 'userCreate',
            selector: 'usercreate'
        }
    ],

    init: function () {
        this.callParent(arguments);

        this.control({
            'userslist': {
                actionclick: this.handleListAction,
                editclick: this.handleUserEditAction
            },
            'userslist button[role="user-create-btn"]' : {
                click: this.handleUserCreateAction
            },
            'usercreate' : {
                formsubmit: this.handleUserCreateSubmit
            }
        });

        this.handle({
            'users' : {
                fn: this.handleUserList,
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

    handleUserList: function () {
        this.fireContent({
            xtype: 'userslist',
            createBtn: Ext.checkPermission(this.getModuleName(), 'create')
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
    },

    handleUserCreateAction: function () {

        Ext.Navigator.goTo('user/create');
    },

    handleUserCreateSubmit: function (cmp, formValues) {

        var dealerId = Ext.getStore('Dealer').first().getId(),
            record = Ext.create('NavixyPanel.model.User', formValues),
            userData = Ext.apply({}, record.getData());

        delete userData.id; delete userData.dealer_id;

        Ext.API.createUser({
            params: {
                user: Ext.encode(userData),
                locale: formValues.locale || Locale.Manager.getLocaleId(),
                time_zone: formValues.time_zone,
                password: formValues.password
            },
            callback: function (userId) {
                this.afterUserCreate(userId, record);
            },
            failure: function () {
                this.afterUserCreateFailure();
            },
            scope: this
        });
    },

    afterUserCreate: function (userId, record) {
        record.setId(userId);
        Ext.getStore('Users').add(record);
        this.getUserCreate().afterSave();

        Ext.Navigator.goTo('users');
    },

    afterUserCreateFailure: function () {

    }
});