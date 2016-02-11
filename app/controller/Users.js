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
        'users.TransactionAdd',
        'users.ChangePassword',
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
        },
        {
            ref: 'userChangePassword',
            selector: 'userchangepassword'
        },
        {
            ref: 'transactionAdd',
            selector: 'usertransactionadd'
        }
    ],

    stores: ['Users'],
    models: ['User', 'Transaction'],
    mainStore: 'Users',

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
            'userchangepassword' : {
                formsubmit: this.handleUserChangePasswordSubmit
            },
            'usertransactionadd' : {
                formsubmit: this.handleUserTransactionAddSubmit
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
                access: 'read',
                loadRecord: true
            },
            'user > transactions' : {
                fn: this.handleUserTransactions,
                loadRecord: true,
                access: 'read'
            },
            'user > edit' : {
                fn: this.handleUserEdit,
                loadRecord: true,
                access: 'update'
            },
            'user > create' : {
                fn: this.handleUserCreate,
                access: 'create'
            },
            'user > transaction_add' : {
                fn: this.handleUserTransactionAdd,
                loadRecord: true,
                access: 'update'
            },
            'user > change_password' : {
                fn: this.handleUserChangePassword,
                loadRecord: true,
                access: 'update'
            }
        });

        this.menuConfig = {
            text: _l.get('users.menu_text'),
            target: 'users'
        };
    },

    registerMenu: function (config) {
        if (Ext.checkPermission(this.getModuleName(), 'read') && this.menuConfig && this.menuConfig.target) {

            this.menuConfig.eventName = this.getHandlerEventConfig(this.menuConfig.target);

            var menuText = this.menuConfig.text || this.getModuleName(),
                menuTarget = Ext.Nav.makeToken(this.getHandlerEventPath(this.menuConfig.target));

            this.application.fireEvent('menuregister', {
                name: this.getModuleName(),
                text: menuText,
                target: menuTarget
            });
        }
    },

    handleUserList: function () {
        this.fireContent({
            xtype: 'userslist',
            createBtn: Ext.checkPermission(this.getModuleName(), 'create'),
            hasEdit: Ext.checkPermission(this.getModuleName(), 'update')
        });
    },

    handleUserEdit: function (userRecord) {
        this.fireContent({
            xtype: 'useredit',
            record: userRecord
        });
    },

    handleUserTransactions: function (userRecord) {
        this.fireContent({
            xtype: 'usertransactions',
            record: userRecord
        });
    },

    handleUserTransactionAdd: function (userRecord) {
        this.fireContent({
            xtype: 'usertransactionadd',
            record: userRecord
        });
    },

    handleUserChangePassword: function (userRecord) {
        this.fireContent({
            xtype: 'userchangepassword',
            record: userRecord
        });
    },

    handleUserCard: function (userRecord) {
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

        delete userData.id; delete userData.dealer_id; delete userData.verified;

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
        this.getUserCreate().afterSave(userId);
        this.getUsersList().store.load();
        Ext.getStore('Users').load();
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

        delete userData.verified;

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
            this.getUsersList().store.load();
        }
    },

    afterUserEditFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors')[errCode] || status.description || false;

        this.getUserEdit().showSubmitErrors(errCode, errors, errDescription);
    },

    handleUserChangePasswordSubmit: function (cmp, formValues, record) {
        var userData = Ext.apply({}, formValues, record.getData());

        Ext.API.updateUserPassword({
            params: {
                user_id: record.getData().id,
                password: formValues.new_password
            },
            callback: function (response) {
                this.afterUserChangePassword(response, formValues, record);
            },
            failure: this.afterUserChangePasswordFailure,
            scope: this
        });
    },

    afterUserChangePassword: function (success, formValues, record) {
        if (success) {

            var titleTpl = new Ext.XTemplate(
                ' #{id}: {last_name} {first_name} {middle_name}'
            );

            Ext.MessageBox.show({
                title: titleTpl.apply(record.getData()),
                msg: _l.get('users.password_form.success_msg'),
                width: 300,
                buttons: Ext.MessageBox.OK,
                fn: Ext.bind(function () {
                    this.getUserChangePassword().afterSave()
                }, this)
            });
        }
    },

    afterUserChangePasswordFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors')[errCode] || status.description || false;

        this.getUserChangePassword().showSubmitErrors(errCode, errors, errDescription);
    },

    handleUserTransactionAddSubmit: function (cmp, formValues, record) {
        var userData = record.getData(),
            balance = parseFloat(formValues.balance_dif),
            bonus = parseFloat(formValues.bonus_dif),
            requestsCnt = 0;

        if (balance) {
            requestsCnt++;
            Ext.API.addUserTransaction({
                params: {
                    user_id: userData.id,
                    amount: balance,
                    type: 'balance',
                    text: formValues.text
                },
                callback: function (response) {
                    if (--requestsCnt === 0)  {
                        this.afterUserTransactionAdd(response, formValues, record);
                    }
                },
                failure: function (response) {
                    --requestsCnt;
                    this.afterUserTransactionAddFailure(response, formValues, record);
                },
                scope: this
            });
        }

        if (bonus) {
            requestsCnt++;
            Ext.API.addUserTransaction({
                params: {
                    user_id: userData.id,
                    amount: bonus,
                    type: 'bonus',
                    text: formValues.text
                },
                callback: function (response) {
                    if (--requestsCnt === 0)  {
                        this.afterUserTransactionAdd(response, formValues, record);
                    }
                },
                failure: function (response) {
                    --requestsCnt;
                    this.afterUserTransactionAddFailure(response, formValues, record);
                },
                scope: this
            });
        }

    },

    afterUserTransactionAdd: function (success, formValues, record) {
        if (success) {
            var recordData = record.getData();
            record.set({
                balance: recordData.balance + parseFloat(formValues.balance_dif),
                bonus: recordData.bonus + parseFloat(formValues.bonus_dif)
            });
            this.getTransactionAdd().afterSave();
        }
    },

    afterUserTransactionAddFailure: function (response, formValues, record) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors')[errCode] || status.description || false;

        this.getTransactionAdd().showSubmitErrors(errCode, errors, errDescription);
    }
});