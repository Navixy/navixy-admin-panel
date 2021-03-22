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
        'widgets.QtipTutorial',
        'components.MessageBoxWithInputs',
        'users.TransactionsList',
        'users.TransactionAdd',
        'users.ChangePassword',
        'users.List',
        'users.Create',
        'users.Edit',
        'users.Card',
        'users.SelectWindow'
    ],

    requires: ['NavixyPanel.view.users.ActivationPanel'],

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
        },
        {
            ref: 'userCard',
            selector: 'usercard'
        }
    ],

    stores: ['Users', 'PaasPlugins'],
    models: ['User', 'Transaction', 'PaasPlugin'],
    mainStore: 'Users',

    init: function () {
        this.callParent(arguments);

        this.control({
            'usertransactions': {
                cellclick: this.handleTransactionsListAction,
            },
            'userslist': {
                actionclick: this.handleListAction,
                editclick: this.handleUserEditAction,
                downloaduserlist: this.downloadUserList
            },
            'userslist button[role="create-btn"]': {
                click: this.handleUserCreateAction
            },
            'usercreate': {
                formsubmit: this.handleUserCreateSubmit
            },
            'useredit': {
                formsubmit: this.handleUserEditSubmit
            },
            'userchangepassword': {
                formsubmit: this.handleUserChangePasswordSubmit
            },
            'usertransactionadd': {
                formsubmit: this.handleUserTransactionAddSubmit
            },
            'usercard': {
                useredit: this.handleUserEditAction,
                usercorrupt: this.handleUserCorruptAction,
                toggleactivationpanel: this.toggleActivationPanel
            },
            'usercard [role="tracker-monitoring-link"]': {
                click: this.disableTracingTutorial
            },
            'activationpanel': {
                close: this.closeActivationPanel
            },

            'checkbox[name=only_active]': {
                change: {
                    fn: this.refreshUsersStore,
                    buffer: 100
                }
            }
        });

        this.handle({
            'users': {
                fn: this.handleUserList,
                access: 'read'
            },
            'user': {
                fn: this.handleUserCard,
                access: 'read',
                loadRecord: true
            },
            'user > transactions': {
                fn: this.handleUserTransactions,
                loadRecord: true,
                access: 'read'
            },
            'user > edit': {
                fn: this.handleUserEdit,
                loadRecord: true,
                access: 'update'
            },
            'user > create': {
                fn: this.handleUserCreate,
                access: 'create'
            },
            'user > transaction_add': {
                fn: this.handleUserTransactionAdd,
                loadRecord: true,
                access: 'update'
            },
            'user > change_password': {
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

    refreshUsersStore: function () {
        this.getUsersList().store.loadPage(1);
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

    handleTransactionsListAction: function (table, td, cellIndex, record) {
        if (cellIndex == 1) {
            var trackerId = record.get('tracker_id');
            if (trackerId) {
                Ext.Nav.shift('tracker/' + trackerId);
            }
        }
    },

    handleUserList: function () {
        this.fireContent({
            xtype: 'userslist',
            createBtn: Ext.checkPermission(this.getModuleName(), 'create'),
            hasEdit: Ext.checkPermission(this.getModuleName(), 'update'),
            listeners: {
                firstload: this.showListTutorial,
                show: this.showListTutorial,
                hide: this.hideListTutorial,
                resize: this.showListTutorial
            }
        });
    },

    showListTutorial: function () {
        if (!Ext.getStore('Dealer').first().get('user_tutorial_closed')) {
            if (
                Ext.isEmpty(this.tutorialTip)
                && this.store.count() == 0
                && Ext.isEmpty(this.store.filters.last())
                && this.store.isLoaded()
            ) {

                this.tutorialTip = Ext.widget('tutorialqtip', {
                    target: this.down('button[role="create-btn"]').el,
                    html: _l.get('tutorial.user'),
                    mouseOffset: [0, -3],
                    listeners: {
                        close: function () {
                            Ext.getStore('Dealer').first().set('user_tutorial_closed', true);
                        }
                    }
                });
            } else {
                if (this.tutorialTip) {
                    this.tutorialTip.show()
                    this.tutorialTip.updateLayout()
                }
            }
        }
    },

    hideListTutorial: function () {
        if (this.tutorialTip) {
            this.tutorialTip.hide();
        }
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
            record: userRecord,
            listeners: {
                render: {
                    fn: this.showUserTutorial,
                    delay: 50
                },
                show: this.showUserTutorial,
                hide: this.hideUserTutorial,
                resize: this.showUserTutorial
            }
        });
    },

    showUserTutorial: function () {
        if (Ext.isEmpty(this.tutorialTip)) {
            if (!Ext.getStore('Dealer').first().get('active_amount_own') && !this.record.get('trackers_count')) {

                this.tutorialTip = Ext.widget('tutorialqtip', {
                    target: this.down('[role="tracker-activation-link"]').el,
                    html: _l.get('tutorial.tracker'),
                    mouseOffset: [0, -9]
                });
            } else if (!localStorage.getItem('panel-UserMonitoringTutorial') && this.record.get('trackers_count')) {
                this.tutorialTip = Ext.widget('tutorialqtip', {
                    target: this.down('[role="tracker-monitoring-link"]').el,
                    html: _l.get('tutorial.tracking'),
                    mouseOffset: [0, -9]
                });
            }
        } else {
            if (this.tutorialTip) {
                this.tutorialTip.show()
                this.tutorialTip.updateLayout()
            }
        }
    },

    hideUserTutorial: function () {
        if (this.tutorialTip) {
            this.tutorialTip.hide();
        }
    },

    disableTracingTutorial: function () {
        localStorage.setItem('panel-UserMonitoringTutorial', true);
        var card = Ext.getFirst('usercard'),
            tutorialTip = card && card.tutorialTip;

        if (tutorialTip) {
            tutorialTip.hide();
        }
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

    handleUserCorruptAction: function (record) {
        Ext.create('Ext.MessageBoxWithInputs', {
            title: _l.get('users.corrupt.alert.title'),
            msg: _l.get('users.corrupt.alert.text'),
            inputs: [
                {
                    id: 'user_login_confirmation',
                    type: 'textfield',
                    label: _l.get('users.corrupt.alert.confirm_login_label'),
                    required: true,
                }
            ],
            agreeAction: Ext.bind(function (window) {
                var confirmedLoginInput = Ext.getCmp('user_login_confirmation');
                if (record.get('login') === confirmedLoginInput.getValue()) {
                    Ext.API.removeUser({
                        params: {
                            user_id: record.getId(),
                            login: record.get('login')
                        },
                        callback: function () {
                            this.onUserRemoved(record);
                        },
                        failure: function () {
                            this.onUserRemovedFailure(record, arguments[0]);
                        },
                        scope: this
                    });
                    window.close();
                } else {
                    Ext.getCmp('user_login_confirmation').markInvalid(_l.get('users.corrupt.alert.confirm_login_error'),)
                }
            }, this)
        }).show();
    },

    onUserRemoved: function (record) {
        var name = [record.get('first_name'), record.get('middle_name'), record.get('last_name')].join(' ');

        Ext.Msg.show({
            title: _l.get('success'),
            msg: Ext.String.format(_l.get('users.corrupt.success_msg'), name),
            buttons: Ext.Msg.OK
        });

        Ext.Nav.shift('users');

        Ext.waitFor(function () {
            return this.getUsersList();
        }, function () {
            this.getUsersList().store.load();
        }, this);
    },

    onUserRemovedFailure: function (record, response) {

        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.user')[errCode] || _l.get('errors')[errCode] || status.description || false;

        Ext.Msg.show({
            title: _l.get('error'),
            msg: errCode === 7 ? errDescription.default_msg : errDescription,
            buttons: Ext.Msg.OK
        });
    },

    handleUserCreateAction: function () {

        Ext.Nav.shift('user/create');
    },

    handleUserCreateSubmit: function (cmp, formValues) {
        var record = Ext.create('NavixyPanel.model.User', formValues),
            userData = Ext.apply({}, record.getData()),
            comment = userData.comment;

        delete userData.id;
        delete userData.comment;
        delete userData.dealer_id;
        delete userData.verified;

        Ext.API.createUser({
            params: {
                user: Ext.encode(userData),
                locale: formValues.locale || Locale.Manager.getLocaleId(),
                time_zone: formValues.time_zone,
                password: formValues.password,
                comment: comment,
                discount: Ext.encode({
                    value: +userData.discount,
                    end_date: userData.discount_end_date || null,
                    strategy: 'no_summing',
                    min_trackers: +userData.discount_min_trackers
                })
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
            errDescription = _l.get('errors.user')[errCode] || _l.get('errors')[errCode] || status.description || false;

        this.getUserCreate().showSubmitErrors(errCode, errors, errDescription);
    },

    handleUserEditSubmit: function (cmp, formValues, record) {
        var userData = Ext.apply({}, formValues, record.getData()),
            discount = {
                value: +userData.discount,
                end_date: userData.discount_end_date || null,
                strategy: userData.discount_strategy,
                min_trackers: +userData.discount_min_trackers
            };

        delete userData.verified;

        Ext.API.updateUser({
            params: {
                user: Ext.encode(userData),
                discount: Ext.encode(discount),
                comment: userData.comment
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
                    if (--requestsCnt === 0) {
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
                    if (--requestsCnt === 0) {
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
    },

    toggleActivationPanel: function () {
        var card = this.getUserCard();

        if (!this.registrationPanel) {
            card.fireSessionCreateHash(function (hash) {
                this.registrationPanel = Ext.create('NavixyPanel.view.users.ActivationPanel', {
                    renderTo: Ext.getBody(),
                    hash: hash
                });

                this.registrationPanel.mon(Ext.getFirst('viewport'), {
                    resize: function (viewport, width, height) {
                        this.setHeight(height);
                    },
                    scope: this.registrationPanel
                });
            }, this);
        } else {
            this.closeActivationPanel();
        }
    },

    closeActivationPanel: function () {
        if (this.registrationPanel) {
            this.registrationPanel.slideOff();
            this.registrationPanel = null;
        }
    },

    downloadUserList: function (userList, format) {
        var columns = userList.columnManager
            .getColumns()
            .reduce(function (columns, curr) {
                if (curr.dataIndex === 'legal_name') {
                    return columns.concat(['first_name', 'middle_name', 'last_name'])
                }
                return columns.concat([curr.dataIndex])
            }, [])
            .filter(function (colName) { return !!colName })

        var params = { format: format };

        if (columns) {
            params.columns = Ext.encode(columns)
        }

        window.open(Ext.API.getUsersListDownloadLink({ params: params }), 'Download');
    }
});