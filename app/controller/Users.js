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

        'users.TransactionsList',
        'users.List',
        'users.Create',
        'users.Edit',
        'users.Card',
        'users.SelectWindow'
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

    stores: ['Users'],
    models: ['User',  'Transaction'],

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
                useredit: this.handleUserEditAction
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
            'user > transactions' : {
                fn: this.handleUserTransactions,
                access: 'read'
            },
            'user > edit' : {
                fn: this.handleUserEdit,
                access: 'update'
            },
            'user > create' : {
                fn: this.handleUserCreate,
                access: 'create'
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
                record: userRecord
            });
        }
    },

    handleUserTransactions: function (value) {
        var userId = parseInt(value),
            userRecord = Ext.isNumber(userId) && Ext.getStore('Users').getById(userId);

        if (userRecord) {

            this.fireContent({
                xtype: 'usertransactions',
                record: userRecord
            });
        }
    },

    handleUserCard: function (value) {
        var userId = parseInt(value),
            userRecord = Ext.isNumber(userId) && Ext.getStore('Users').getById(userId);

        this.fireContent({
            xtype: 'usercard',
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
        Ext.Nav.shift('user/' + userId);
    },

    handleUserEditAction: function (record) {
        var userId = record.getId();

        Ext.Nav.shift('user/' + userId + '/edit');
    },

    handleUserCreateAction: function () {

        Ext.Nav.shift('user/create');
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
        this.getUserCreate().afterSave(userId);
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