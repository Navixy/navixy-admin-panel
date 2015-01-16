/**
 * @class NavixyPanel.view.bundles.Import
 * @extends Ext.Component
 * Description
 */

Ext.define('NavixyPanel.view.bundles.Import', {
    extend: 'Ext.Container',
    alias: 'widget.bundle-import',
    singleCmp: true,

    layout: {
        type: 'hbox'
    },

    ui: 'light',
    cls: 'scan-panel',

    padding: '30 25 20 25',

    initComponent: function () {
        this.items = this.getItems();

        this.callParent(arguments);
    },

    afterRender: function () {
        this.fixScanFocus();
        this.callParent(arguments);
    },

    tabActivated: function () {
        this.fixScanFocus();
    },

    fixScanFocus: function () {
        this.getImportField().enable();
        Ext.defer(function () {this.getImportField().focus();}, 20, this);
    },

    getItems: function () {
        return [
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                margin: '0 0 20 0',
                items: [
                    {
                        xtype: 'container',
                        layout: 'vbox',
                        width: 450,
                        minHeight: 450,
                        items: [
                            {
                                role: 'form-container',
                                xtype: 'container',
                                layout: 'vbox',
                                minHeight: 300,
                                flex: 1,
                                items: [
                                    {
                                        xtype: 'container',
                                        cls: 'step-title',
                                        html: '1. ' + _l.get('bundles.import.titles.first')
                                    },
                                    {
                                        xtype: 'import-field',
                                        role: 'import',
                                        margin: '0 0 0 20',
                                        listeners: {
                                            change: this.checkFormReady,
                                            scope: this
                                        }
                                    }
                                ]
                            },
                            {
                                role: 'buttons-container',
                                xtype: 'container',
                                layout: 'vbox',
                                padding: '0 0 0 0',
                                defaults: {
                                    xtype: 'button',

                                    scale: 'large',
                                    width: 330,
                                    margin: '20 0 0 20',
                                    disabled: true
                                },
                                items: [
                                    {
                                        xtype: 'checkbox',
                                        role: 'factory-preset-option',
                                        boxLabel: _l.get('bundles.import.import_hints.factory_preset'),
                                        disabled: false
                                    },
                                    {
                                        text: _l.get('bundles.import.buttons.import'),
                                        role: 'import-button',
                                        handler: this.doServerAction,
                                        scope: this
                                    },
                                    {
                                        text: _l.get('bundles.import.buttons.reset'),
                                        ui: 'gray',
                                        role: 'reset-button',
                                        handler: this.resetImport,
                                        disabled: false,
                                        scope: this
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        role: 'info-container',
                        xtype: 'container',
                        layout: 'vbox',
                        height: 460,
                        items: [
                            {
                                xtype: 'container',
                                role: 'select-title',
                                margin: '0 0 0 0',

                                tpl: NavixyPanel.view.components.AbstractCard.prototype.makeMainTpl.call(this),
                                data: this.geSelectTitleTpl()
                            },
                            {
                                role: 'select-container',
                                xtype: 'container',
                                layout: 'fit',
                                width: 730,
                                height: 415,
                                items: [
                                    {
                                        xtype: 'equipment-select-list',
                                        margin: '0 0 0 20',
                                        showBBar: false,
                                        listeners: {
                                            selectionchange: this.onModelSelect,
                                            scope: this
                                        }
                                    }
                                ]
                            },
                        ]
                    }
                ]
            },
        ]
    },

    getImportField: function () {
        return this.down('[role="import"]');
    },

    getFactoryField: function () {
        return this.down('[role="factory-preset-option"]');
    },

    getImportBtn: function () {
        return this.down('[role="import-button"]');
    },

    getSelectList: function () {
        return this.down('equipment-select-list tableview');
    },

    getSelectTitle: function () {
        return this.down('[role="select-title"]');
    },

    resetImport: function () {
        this.getImportField().resetValue();
        this.getImportBtn().disable();
        this.getFactoryField().setValue(0);
    },

    getEquip: function () {
        var selection = this.getSelectList() && this.getSelectList().getSelectionModel().getSelection();

        return selection && selection[0] && selection[0].get('equip_id');
    },


    geSelectTitleTpl: function () {
        return {
            title: '2. ' + _l.get('bundles.import.titles.second'),
            title_add: _l.get('bundles.import.import_hints.no_model'),
            main_cls: 'card-header-inner',
            table_cls: 'header-table'
        }
    },


    onModelSelect: function () {
        this.getSelectTitle().update(
            this.getEquip() ? Ext.apply(this.geSelectTitleTpl(), {title_add: null}) : this.geSelectTitleTpl()
        );
        this.checkFormReady();
    },

    checkFormReady: function () {
        var equip = this.getEquip(),
            list = this.getImportField().getValue(),
            active = equip && list.length;

        this.getImportBtn()[active ? 'enable': 'disable']();
    },

    doServerAction: function (imei) {
        Ext.API.importBundles({
            params: {
                imeis: Ext.encode(this.getImportField().getValue()),
                equip_id: this.getEquip(),
                factory_preset: this.getFactoryField().getValue()
            },
            callback: this.afterServerAction,
            failure: this.afterServerActionFailure,
            scope: this
        });
    },

    afterServerAction: function (response) {
        this.fireEvent('success', this);
        Ext.MessageBox.show({
            msg: Ext.String.format(_l.get('bundles.import.import_hints.import_success'), Ext.util.Format.units(this.getImportField().getValue().length, 'devices', true)),
            closable: false,
            buttons: Ext.MessageBox.OK
        });

        this.resetImport();
    },

    afterServerActionFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.bundle')[errCode] || _l.get('errors')[errCode] || status.description || false;

        Ext.MessageBox.show({
            title: _l.get('bundles.import.import_hints.import_failure'),
            msg: errDescription,
            closable: false,
            buttons: Ext.MessageBox.OK
        });
    }
});

