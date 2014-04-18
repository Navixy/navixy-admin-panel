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

        'users.List',
        'users.UserCreate',
        'users.UserEdit',
        'users.Card'
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
            'userslist button[role="create-btn"]' : {
                click: this.handleUserCreateAction
            },
            'usercreate' : {
                formsubmit: this.handleUserCreateSubmit
            },
            'useredit' : {
                formsubmit: this.handleUserEditSubmit
            },
            'usercard' : {
                createsession: this.handleUserSessionCreate
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
            createBtn: Ext.checkPermission(this.getModuleName(), 'create'),
            hasEdit: Ext.checkPermission(this.getModuleName(), 'update')
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

    handleUserCard: function (value) {
        var userId = parseInt(value),
            userRecord = Ext.isNumber(userId) && Ext.getStore('Users').getById(userId);

        this.fireContent({
            xtype: 'usercard',
            rewrite: true,
            record: userRecord
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

    handleUserSessionCreate: function (userRecord) {
        var userId = userRecord && userRecord.getId();

        if (userId) {

            Ext.API.createUserSession({
                params: {
                    user_id: userId
                },
                callback: this.showUserSessionHash,
                failure: this.showUserSessionHashFailure
            });
        }
    },

    showUserSessionHash: function (hash) {
        if (hash) {
            Ext.MessageBox.show({
                prompt: true,
                width: 300,
                title: _l.users.session_alert.title,
                buttons: Ext.MessageBox.OK,
                value: hash
            });
        } else {
            this.showUserSessionHashFailure()
        }
    },

    showUserSessionHashFailure: function () {
        Ext.MessageBox.alert(_l.error, _l.users.session_alert.error);
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