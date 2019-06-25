/**
 * @class NavixyPanel.controller.SubPaas
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.SubPaas', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'SubPaasController',

    views: [
        'widgets.ToolColumn',
        'subpaas.ChangePassword',
        'subpaas.SubPaasNotice',
        'subpaas.List',
        'subpaas.Create',
        'subpaas.Edit',
        'subpaas.Card'
    ],

    refs: [
        {
            ref: 'subpaasList',
            selector: 'subpaaslist'
        },
        {
            ref: 'subpaasCreate',
            selector: 'subpaascreate'
        },
        {
            ref: 'subpaasEdit',
            selector: 'subpaasedit'
        },
        {
            ref: 'subpaasChangePassword',
            selector: 'subpaaschangepassword'
        },
        {
            ref: 'subpaasCard',
            selector: 'subpaascard'
        }
    ],

    stores: ['SubPaas'],
    models: ['SubPaas'],
    mainStore: 'SubPaas',

    init: function () {
        this.callParent(arguments)

        this.control({
            'mainviewport': {
                afterrender: this.addSubPaasNotice
            },
            'subpaasnotice': {
                returntomaster: this.returnToMaster
            },
            'subpaaslist': {
                viewclick: this.handleSubpaasView,
                actionclick: this.handleListAction,
                editclick: this.handleSubpaasEditAction,
                afterrender: this.handleCreateBtnAvailability

            },
            'subpaaslist button[role="create-subpaas-btn"]': {
                click: this.handleSubpaasCreateAction
            },
            'subpaascreate': {
                formsubmit: this.handleSubpaasCreateSubmit
            },
            'subpaasedit': {
                formsubmit: this.handleSubpaasEditSubmit
            },
            'subpaaschangepassword': {
                formsubmit: this.handleSubpaasChangePasswordSubmit
            },

            'subpaascard': {
                subpaasedit: this.handleSubpaasEditAction,
                subpaaspanellogin: this.createSubpaasSessionAndLogin,
                avangate_pay: this.handleAvangatePay,
                invoice_request: this.handleInvoiceRequest,
                invoice_view: this.viewInvoice
            }
        })

        this.handle({
            'subpaas_list': {
                fn: this.handleSubpaasList,
                access: 'read'
            },
            'subpaas': {
                fn: this.handleSubpaasCard,
                access: 'read',
                loadRecord: true
            },

            'subpaas > edit': {
                fn: this.handleSubpaasEdit,
                loadRecord: true,
                access: 'update'
            },
            'subpaas > create': {
                fn: this.handleSubpaasCreate,
                access: 'create'
            },

            'subpaas > change_password': {
                fn: this.handleSubpaasChangePassword,
                loadRecord: true,
                access: 'update'
            }
        })

        this.menuConfig = {
            text: _l.get('subpaas.menu_text'),
            target: 'subpaas_list'
        }
    },

    registerMenu: function (config) {

        if (Ext.getStore('Dealer').isSubPaasAvailable() && this.menuConfig && this.menuConfig.target) {
            this.menuConfig.eventName = this.getHandlerEventConfig(this.menuConfig.target)

            var menuText = this.menuConfig.text || this.getModuleName(),
                menuTarget = Ext.Nav.makeToken(this.getHandlerEventPath(this.menuConfig.target))

            this.application.fireEvent('menuregister', {
                name: this.getModuleName(),
                text: menuText,
                target: menuTarget
            })
        }
    },

    handleSubpaasList: function () {
        this.handleCreateBtnAvailability()
        this.fireContent({
            xtype: 'subpaaslist',
            createBtn: Ext.checkPermission(this.getModuleName(), 'create'),
            hasEdit: Ext.checkPermission(this.getModuleName(), 'update')
        })
    },

    handleSubpaasEdit: function (subpaasRecord) {
        this.fireContent({
            xtype: 'subpaasedit',
            record: subpaasRecord
        })
    },

    handleSubpaasChangePassword: function (subpaasRecord) {
        this.fireContent({
            xtype: 'subpaaschangepassword',
            record: subpaasRecord
        })
    },

    handleSubpaasCard: function (subpaasRecord) {
        this.fireContent({
            xtype: 'subpaascard',
            record: subpaasRecord
        })
    },

    handleSubpaasCreate: function () {
        this.fireContent({
            xtype: 'subpaascreate'
        })
    },

    handleSubpaasView: function (record) {
        var subpaasId = record.getId()
        Ext.Nav.shift('subpaas/' + subpaasId)
    },
    handleSubpaasEditAction: function (record) {
        var subpaasId = record.getId()
        Ext.Nav.shift('subpaas/' + subpaasId + '/edit')
    },

    handleSubpaasCreateAction: function () {
        console.log('asdasd')
        Ext.Nav.shift('subpaas/create')
    },

    handleSubpaasCreateSubmit: function (cmp, formValues) {
        Ext.API.createSubPaas({
            params: {
                password: formValues.password,
                title: formValues.title,
                email: formValues.email,
                jur_name: formValues.jur_name,
                link_monitoring: formValues.link_monitoring,
                jur_country: formValues.jur_country
            },
            callback: function (response) {
                this.afterSubPaasCreate(response)
            },
            failure: this.afterSubPaasCreateFailure,
            scope: this
        })
    },

    afterSubPaasCreate: function (subpaasId, record) {
        this.getSubpaasCreate().afterSave(subpaasId)
        this.getSubpaasList().store.load()
    },

    afterSubPaasCreateFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = status.description || false

        this.getSubpaasCreate().showSubmitErrors(errCode, errors, errDescription)
    },

    handleSubpaasEditSubmit: function (cmp, formValues, record) {
        Ext.API.updateSubPaas({
            params: {
                subpaas_id: formValues.subpaas_id,
                title: formValues.title,
                email: formValues.email,
                jur_name: formValues.jur_name,
                link_monitoring: formValues.link_monitoring,
                jur_country: formValues.jur_country,
                contact_fio: formValues.contact_fio,
                contact_post: formValues.contact_post,
                contact_phone: formValues.contact_phone,
                block_type: formValues.block_type
            },
            callback: function (response) {
                this.afterSubpaasEdit(response, formValues, record)
            },
            failure: this.afterSubpaasEditFailure,
            scope: this
        })
    },

    afterSubpaasEdit: function (success, formValues, record) {
        if (success) {
            record.set(formValues)
            this.getSubpaasEdit().afterSave()
            this.getSubpaasList().store.load()
        }
    },

    afterSubpaasEditFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors')[errCode] || status.description || false

        this.getSubpaasEdit().showSubmitErrors(errCode, errors, errDescription)
    },

    handleSubpaasChangePasswordSubmit: function (cmp, formValues, record) {
        Ext.API.updateSubpaasPassword({
            params: {
                subpaas_id: record.getData().subpaas_id,
                new_password: formValues.new_password
            },
            callback: function (response) {
                this.afterSubpaasChangePassword(response, formValues, record)
            },
            failure: this.afterSubpaasChangePasswordFailure,
            scope: this
        })
    },

    afterSubpaasChangePassword: function (success, formValues, record) {
        if (success) {

            var titleTpl = new Ext.XTemplate(
                ' #{subpaas_id}: {title}'
            )

            Ext.MessageBox.show({
                title: titleTpl.apply(record.getData()),
                msg: _l.get('subpaas.password_form.success_msg'),
                width: 300,
                buttons: Ext.MessageBox.OK,
                fn: Ext.bind(function () {
                    this.getSubpaasChangePassword().afterSave()
                }, this)
            })
        }
    },

    afterSubpaasChangePasswordFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors')[errCode] || status.description || false

        this.getSubpaasChangePassword().showSubmitErrors(errCode, errors, errDescription)
    },

    handleListAction: function (subpaas) {
        if (subpaas.isInitialBlock()) {
            var paymentStore = Ext.getStore('PaymentSystems')

            if (Ext.getStore('Dealer').first().get('seller_currency') !== 'RUB' &&
                paymentStore.findRecord('type', 'avangate')) {
                return this.handleAvangatePay(subpaas.getId())
            }

            if (Ext.getStore('Dealer').first().get('seller_currency') === 'RUB' &&
                paymentStore.findRecord('type', 'bill')) {
                return this.viewInvoice(subpaas.getId())
            }
        }

        if (subpaas.isActive()) {
            return this.createSubpaasSessionAndLogin(subpaas.getId())
        }
    },

    createSubpaasSessionAndLogin: function (subpaasId) {
        Ext.API.createSubPaasSession({
            params: {
                subpaas_id: subpaasId
            },
            callback: function (session_key) {
                Ext.util.Cookies.set('master_panel_session_key', Ext.API.authKey)
                Ext.util.Cookies.set('master_panel_return_path', location.href)
                Ext.util.Cookies.set('panel_session_key', session_key)
                window.location = location.href.split('#')[0]
            },
            failure: this.showUserSessionHashFailure
        })
    },

    addSubPaasNotice: function () {
        Ext.getFirst('mainviewport').insert(0, [{
            xtype: 'subpaasnotice'
        }])
    },

    returnToMaster: function () {
        var masterHash = Ext.util.Cookies.get('master_panel_session_key')
        var returnPath = Ext.util.Cookies.get('master_panel_return_path')
        Ext.util.Cookies.clear('master_panel_session_key')
        Ext.util.Cookies.clear('master_panel_return_path')
        Ext.util.Cookies.set('panel_session_key', masterHash)
        Ext.API.sendRequest = Ext.emptyFn()
        document.body.style.opacity = 0;
        window.location.href = returnPath
        window.location.reload()
    },

    viewInvoice: function (subpaas_id) {
        var win = window.open('', '_blank')
        win.document.write('<h2 style="font-family:Helvetica">' + _l.get('loading') + '</h2>')

        Ext.API.pay({
            payment_system: 'bill',
            params: {
                payment_type: 'subpaas_activation',
                subpaas_id: subpaas_id
            },
            callback: function (data) {
                win.location.href = data.url
            }
        })
    },

    handleAvangatePay: function (subpaas_id) {
        var win = window.open('', '_blank')
        win.document.write('<h2 style="font-family:Helvetica">' + _l.get('loading') + '</h2>')

        Ext.API.pay({
            payment_system: 'avangate',
            params: {
                payment_type: 'subpaas_activation',
                subpaas_id: subpaas_id,
                back_ref: window.location.href
            },
            callback: function (data) {
                win.location.href = data.url
            }
        })
    },

    handleInvoiceRequest: function (subpaas_id) {
        Ext.API.pay({
            payment_system: 'bill',
            params: {
                payment_type: 'subpaas_activation',
                subpaas_id: subpaas_id,
                send_to_email: true
            },
            callback: function () {
                Ext.MessageBox.show({
                    title: _l.get('subpaas.bill.title'),
                    msg: _l.get('subpaas.bill.msg'),
                    width: 200,
                    buttons: Ext.MessageBox.OK
                })
            }
        })
    },

    checkCreateAvailability: function (callback, scope) {
        Ext.API.getSubPaasList({
            params: {
                order_by: 'block_type',
                limit: 1,
                ascending: true
            },
            callback: function (data) {
                if (data.list.length &&
                    data.list[0].block_type == 'INITIAL_BLOCK') {
                    callback.call(this, false)
                } else {
                    callback.call(this, true)
                }
            },
            scope: scope || this
        })
    },

    handleCreateBtnAvailability: function () {
        var createBtn = Ext.getFirst('button[role=create-subpaas-btn]')

        if (createBtn) {
            createBtn.disable()
            this.checkCreateAvailability(function (available) {
                if (available) {
                    createBtn.enable()
                } else {
                    createBtn.setTooltip(_l.get('subpaas.block_status.INITIAL_BLOCK'))
                }
            })
        }
    }
})
