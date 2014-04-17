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
        'users.UserEdit',
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
        },
        {
            ref: 'userEdit',
            selector: 'useredit'
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
            },
            'useredit' : {
                formsubmit: this.handleUserEditSubmit
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
                access: 'update'
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

    handleUserEdit: function (value) {
        var userId = parseInt(value),
            userRecord = Ext.isNumber(userId) && Ext.getStore('Users').getById(userId);

        if (userRecord) {

            this.fireContent({
                xtype: 'useredit',
                rewrite: true,
                record: userRecord
            });
        }
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

    // TODO: Messages on success
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
            callback: function (response) {
                this.afterUserCreate(response);
            },
            failure: this.afterUserCreateFailure,
            scope: this
        });
    },

    afterUserCreate: function (userId, record) {
        record.setId(userId);
        Ext.getStore('Users').add(record);
        this.getUserCreate().afterSave();

        Ext.Navigator.goTo('users');
    },


    afterUserCreateFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = status.description || false;

        this.getUserCreate().showSubmitErrors(errCode, errors, errDescription);
    },

    handleUserEditSubmit: function (cmp, formValues, record) {
        var userData = Ext.apply({}, formValues, record.getData());

        Ext.API.updateUser({
            params: {
                user: Ext.encode(userData)
            },
            callback: function (response) {
                this.afterUserEdit(response, formValues, record);
            },
            failure: this.afterUserEditFailure,
            scope: this
        });
    },

    afterUserEdit: function (success, formValues, record) {
        if (success) {
            record.set(formValues);
            this.getUserEdit().afterSave();
            Ext.Navigator.goTo('users');
        }
    },

    afterUserEditFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = status.description || false;

        this.getUserEdit().showSubmitErrors(errCode, errors, errDescription);
    }
});