Ext.define('NavixyPanel.view.components.Card', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    requires: ['NavixyPanel.view.widgets.ClickableComponent'],

    cls: 'card-editor',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    bodyPadding: 0,
    buttonsMargin: '0 10 0 0',

    mode: 'card',

    createTarget: null,
    modeVisibleTable: {
        card: {
            'save-btn': false,
            'create-btn': false,
            'clear-btn': false,
            'back-btn': false,
            'cancel-btn': false,
            'edit-btn': true
        },
        edit: {
            'save-btn': true,
            'create-btn': false,
            'clear-btn': false,
            'back-btn': false,
            'cancel-btn': true,
            'edit-btn': false
        },
        create: {
            'save-btn': false,
            'create-btn': true,
            'clear-btn': false,
            'back-btn': false,
            'cancel-btn': true,
            'edit-btn': false
        }
    },

    initComponent: function () {
        this.title = this.getTitle();

        this.items = this.getItems();

        Ext.form.Panel.prototype.initComponent.call(this, arguments)
    },

    afterFirstLayout: function () {
        this.callParent(arguments);
        this.setMode(this.mode)
    },

    afterSave: function (id) {

        if (id && this.createTarget) {
            Ext.Nav.shift(this.createTarget + id);
        } else {
            this.applyRecordData();
            this.toCardMode();
        }
    },

    onFormCancel: function () {
        if (this.mode === "create") {
            this.backFromForm();
        } else {
            this.toCardMode();
        }
    },


    getMode: function () {
        return this.mode;
    },

    isFormDisabled: function () {
        return this.getMode() !== 'edit';
    },

    toEditMode: function () {
        this.setMode('edit');
    },

    toCardMode: function () {
        this.setMode('card');
    },

    setMode: function (mode) {
        var modeRules = this.modeVisibleTable[mode],
            cmp;

        if (modeRules) {
            Ext.iterate(modeRules, function (role, value) {
                cmp = this.down('[role=' + role + ']');
                if (cmp) {
                    cmp[value ? 'show': 'hide']()
                }
            }, this);
        }

        switch (mode) {
            case 'card':
                this.disableForm();
            break;
            case 'edit':
                this.enableForm(mode);
            break;
            case 'create':
                this.enableForm(mode);
            break;
        }

        this.mode = mode;
    },

    iterateFields: function (fn, scope) {
        this.getForm().getFields().each(function (field) {
            if (!field.up("[role=tab-panel]")) {
                fn.apply(this, arguments);
            }
        }, scope || this);
    },

    disableForm: function () {
        this.applyRecordData();
        Ext.suspendLayouts();
        this.iterateFields(function(field) {
            field.disable();
            if (Ext.isFunction(field.disabledValue)) {
                field.setValue(field.disabledValue.call(field));
            }
        });
        Ext.resumeLayouts();
        this.updateLayout();
    },

    enableForm: function (mode) {
        this.applyRecordData();
        Ext.suspendLayouts();
        this.iterateFields(function(field) {
            if (!(field.strictDisabled && field.strictDisabled === mode)) {
                field.enable();
            }
        });
        Ext.resumeLayouts();
        this.updateLayout();
    },

    getFieldDefaults: function () {
        return {
            xtype: 'textfield',
            cellCls: 'form-cell',
            margin: 0,
            width: 200,

            allowBlank: false,
            msgTarget: 'under',

            labelPad: 10,
            labelAlign: 'right',
            labelSeparator: this.fieldRequiredMark ? '' : ':',
            afterLabelTextTpl: this.fieldRequiredMark ? new Ext.XTemplate('<tpl if="allowBlank === false"><sup>*</sup>:<tpl else>:</tpl>', { disableFormats: true }) : null,

            ui: 'light',

            disabled: !this.isFormDisabled()
        };
    },

    getFieldConfig: function (config, defaults) {
        return Ext.apply(this.getFieldDefaults(), config, defaults);
    },

    getButtons: function () {

        var saveBtn = this.getSaveBtnTitle(),
            clearBtn = this.getClearBtnTitle(),
            createBtn = this.getCreateBtnTitle(),
            backBtn = this.getBackBtnTitle(),
            editBtn = this.getEditBtnTitle(),
            cancelBtn = this.getCancelBtnTitle(),
            result = [];

        if (editBtn) {
            result.push(
                {
                    text: editBtn,
                    role: 'edit-btn',
                    iconCls: 'edit-button',
                    margin: this.buttonsMargin,
                    handler: Ext.bind(this.toEditMode, this)
                }
            );
        }

        if (createBtn) {
            result.push(
                {
                    text: createBtn,
                    role: 'create-btn',
                    iconCls: 'save-button',
                    formBind: true,
                    disabled: true,
                    margin: this.buttonsMargin,
                    handler: Ext.bind(this.sendFormCreate, this)
                }
            );
        }

        if (saveBtn) {
            result.push(
                {
                    text: saveBtn,
                    role: 'save-btn',
                    iconCls: 'save-button',
                    formBind: true,
                    disabled: true,
                    margin: this.buttonsMargin,
                    handler: Ext.bind(this.sendForm, this)
                }
            );
        }

        if (clearBtn) {
            result.push(
                {
                    text: clearBtn,
                    role: 'clear-btn',
                    ui: 'gray',
                    margin: this.buttonsMargin,
                    handler: Ext.bind(this.doFormReset, this)
                }
            );
        }

        if (backBtn) {
            result.push(
                {
                    text: backBtn,
                    role: 'back-btn',
                    ui: 'gray',
                    margin: this.buttonsMargin,
                    handler: Ext.bind(this.backFromForm, this)
                }
            );
        }

        if (cancelBtn) {
            result.push(
                {
                    text: cancelBtn,
                    role: 'cancel-btn',
                    ui: 'gray',
                    margin: this.buttonsMargin,
                    handler: Ext.bind(this.onFormCancel, this)
                }
            );
        }

        return result;
    },

    getEditBtnTitle: function () {
        return _l.get('edit_form_btn');
    },

    getCancelBtnTitle: function () {
        return _l.get('cancel_form_btn');
    },


    getTitle: Ext.emptyFn,

    getItems: function () {

        var linksConfig = !!this.getLinks(),
            links = linksConfig && this.getLinksPanelConfig(),
            linksCollapser = linksConfig && this.getLinksCollapserConfig();

        return [
            {
                xtype: 'panel',
                ui: 'light',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                flex: 1,
                bodyPadding: 10,
                items: !linksCollapser
                    ? this.getPanelItemsConfig()
                    : Ext.Array.merge(this.getPanelItemsConfig(), [linksCollapser])
            },
            links ? links : {hidden: true}
        ];
    },

    getPanelItemsConfig: function () {
        var titleConfig = {

            },
            tabPanelConfig = {
                xtype: 'tabpanel',
                role: 'tab-panel',
                ui: 'light',
                border: 0,
                items: this.getTabPanelItems()
            };

        return [
            // Header part
            {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [

                    // Buttons container
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            pack: 'start'
                        },
                        padding: '10 0 0 10',
                        defaults: {
                            xtype: 'button',
                            minWidth: 70,
                        },
                        items: this.getButtons()
                    },

                    // Form header part
                    this.getHeaderConfig()
                ]
            },

            // Body part
            {
                xtype: 'container',
                ui: 'transparent',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: this.getBodyItemsConfig()
            },
            tabPanelConfig
        ]
    },

// TabPanel
    getTabPanelItems: Ext.emptyFn,

// HEADER
    getHeaderConfig: function () {
        return {
            xtype: 'container',
            cls: 'card-header-inner header-table',
            itemCls: '',
            padding: '10',
            layout: {
                type: 'table',
                columns: 4
            },
            defaults: this.getHeaderDefaults(),
            items: this.getHeaderItemsConfig()
        }
    },

    getHeaderItemsConfig: Ext.emptyFn,

    getHeaderDefaults: function () {
        return {
            xtype: 'component'
        }
    },


// BODY
    getBodyItemsConfig: function () {
        return [

            this.getBodyCollapserConfig('options'),
            this.getBodyConfig('options')
        ]
    },

    getBodyConfig: function (name, config) {
        return Ext.apply({
            role: name + '-body',
            xtype: 'panel',
            ui: 'transparent',
            cls: 'card-body',
            padding: '0 10 10 10',
            collapseMode: 'mini',
            layout: {
                type: 'vbox',
                aligh: 'stretch'
            }
        }, config);
    },


    getBodyCollapserConfig: function (name, config) {
        var me = this,
            collapserRole = name + '-collapser',
            bodyRole = name + '-body';

        return Ext.apply({
            role: collapserRole,
            xtype: 'clickable',
            cls: 'body-collapser',
            margin: '5 10 0 10',
            padding: '10 0 10 30',

            tip: _l.get('card.body.collapser_tip'),
            expTip: _l.get('card.body.collapser_exptip'),

            listeners: {
                click: function () {
                    me.toggleBody(undefined, me.down("[role='" + bodyRole + "']"), me.down("[role='" + collapserRole + "']"))
                }
            }
        }, config);
    },

    handBodyCollapseTool: function (forceState, bodyEl, collapserEl) {
        this.toggleBody(forceState);
    },

    toggleBody: function (forceState, bodyEl, collapserEl) {
        var direction = 'top',
            bodyPanel = bodyEl,
            collapser = collapserEl,
            isForce = forceState !== undefined,
            collapsed;

        if (bodyPanel && collapser) {
            collapsed = !!bodyPanel.getCollapsed();

            if (!isForce || (collapsed !== forceState)) {
                bodyPanel[collapsed ? 'expand' : 'collapse'](collapsed ? false : direction, false);
                collapser[collapsed ? 'removeCls' : 'addCls']('active');
                collapser.updateTip(collapsed ? collapser.tip : collapser.expTip);
                collapser.update(collapsed ? collapser.collapsedHtml : collapser.expandedHtml);
                if (!isForce) {
                    this.saveState();
                }
            }
        }
    },

// LINKS

    getLinks: Ext.emptyFn,

    getLinksCollapser: function () {
        return this.down("[role='links-collapser']");
    },

    getLinksPanel: function () {
        return this.down("[role='links']");
    },

    getLinksPanelConfig: function () {
        return {
            role: 'links',
            xtype: 'panel',
            ui: 'transparent',
            cls: 'links-panel',
            bodyPadding: '20 10 10 20',

            width: 230,
            defaults: {
                xtype: 'clickable',
                width: 200,
                margin: '0 0 5 0'
            },
            items: this.getLinks()
        };
    },

    getLinksCollapserConfig: function () {
        var me = this;
        return {
            role: 'links-collapser',
            xtype: 'clickable',
            cls: 'links-collapser',
            height: 0,
            width: 0,
            tip: _l.get('card.links.collapser_tip'),
            expTip: _l.get('card.links.collapser_exptip'),
            listeners: {
                click: me.handleLinksCollapseTool,
                scope: me
            }
        };
    },

    handleLinksCollapseTool: function () {
        this.toggleLinks();
    },

    toggleLinks: function (forceState) {
        var direction = 'right',
            linksPanel = this.getLinksPanel(),
            collapser = this.getLinksCollapser(),
            isForce = forceState !== undefined,
            collapsed;

        if (linksPanel && collapser) {
            collapsed = !!linksPanel.getCollapsed();

            if (!isForce || (collapsed !== forceState)) {
                linksPanel[collapsed ? 'expand' : 'collapse'](collapsed ? false : direction, false);
                collapser[collapsed ? 'removeCls' : 'addCls']('active');
                collapser.updateTip(collapsed ? collapser.tip : collapser.expTip);
                if (!isForce) {
                    this.saveState();
                }
            }
        }
    },

// UTIL,

    getProcessedValues: function () {
        var values = this.getValues();

        this.iterateFields(function(field) {
            if (field.is('checkboxgroup')) {
                var value = field.getValue(),
                    name = field.items.first().name,
                    data = value[name];

                values[name] = Ext.isArray(data) ? data : [data];
            }
            if (field.role === 'checkbox') {
                values[field.name] = field.getValue();
            }
        });

        return values;
    },

    getRecordId: function () {
        return this.record.getId();
    },

    getHintSymbol: function (hint, cls) {
        return ['<span class="icon-help ',
            cls || '',
            '" style="color:#f89406;font-size:12px; padding: 5px" ',
            'data-qtip="', Ext.String.htmlEncode(hint), '"',
            'data-qclass="settings-tip"',
            'data-qwidth="300"',
            '></span>'].join('');
    }
});
