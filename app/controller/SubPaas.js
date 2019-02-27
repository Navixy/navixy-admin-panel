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
        'components.MessageBoxWithAlert',
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
                actionclick: this.handleListAction,
                editclick: this.handleSubpaasEditAction
            },
            'subpaaslist button[role="create-btn"]': {
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
                subpaaspanellogin: this.createSubpaasSessionAndLogin
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
        var dealer = Ext.getStore('Dealer').first().getData()

        if (!dealer.subpaas && dealer.tariff.allow_subpaas && Ext.checkPermission('subpaas', 'read') && this.menuConfig && this.menuConfig.target) {

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

    handleListAction: function (record) {
        var subpaasId = record.getId()
        Ext.Nav.shift('subpaas/' + subpaasId)
    },

    handleSubpaasEditAction: function (record) {
        var subpaasId = record.getId()
        console.log(record)
        Ext.Nav.shift('subpaas/' + subpaasId + '/edit')
    },

    handleSubpaasCreateAction: function () {
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
                this.afterSubPaasrCreate(response)
            },
            failure: this.afterSubPaasrCreateFailure,
            scope: this
        })
    },

    afterSubPaasrCreate: function (subpaasId, record) {
        this.getSubpaasCreate().afterSave(subpaasId)
        this.getSubpaassList().store.load()
        Ext.getStore('Subpaass').load()
    },

    afterSubPaasrCreateFailure: function (response) {
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
            this.getSubpaassList().store.load()
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

    createSubpaasSessionAndLogin: function (subpaasId) {
        Ext.API.createSubPaasSession({
            params: {
                subpaas_id: subpaasId
            },
            callback: function (session_key) {
                Ext.util.Cookies.set('master_panel_session_key', Ext.API.authKey)
                Ext.util.Cookies.set('panel_session_key', session_key)
                window.location = location.href.split('#')[0]
            },
            failure: this.showUserSessionHashFailure
        })
    },

    addSubPaasNotice: function () {
        Ext.getFirst('mainviewport').add({
            xtype: 'subpaasnotice'
        })
    },

    returnToMaster: function () {
        var masterHash = Ext.util.Cookies.get('master_panel_session_key')
        Ext.util.Cookies.clear('master_panel_session_key')
        Ext.util.Cookies.set('panel_session_key', masterHash)
        window.location.reload()
        window.location.href = location.href.split('#')[0] + '#subpaas_list'
    }
})
