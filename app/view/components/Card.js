Ext.define('NavixyPanel.view.components.Card', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    requires: ['NavixyPanel.view.widgets.ClickableComponent'],

    cls: 'card-editor',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    bodyPadding: 0,
    buttonsMargin: '5 0',

    mode: 'card',
    modeVisibleTable: {
        card: {
            'save-btn': false,
            'clear-btn': false,
            'back-btn': false,
            'cancel-btn': false,
            'edit-btn': true
        },
        edit: {
            'save-btn': true,
            'clear-btn': false,
            'back-btn': false,
            'cancel-btn': true,
            'edit-btn': false
        }
    },

    initComponent: function () {
        //this.defaults = this.getRowDefaults();

        this.title = this.getTitle();

        this.items = this.getItems();

        Ext.form.Panel.prototype.initComponent.call(this, arguments)
    },

    afterFirstLayout: function () {
        this.callParent(arguments);
        this.setMode(this.mode)
    },

    afterSave: function () {
        this.toCardMode();
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
                this.enableForm();
            break;
        }

        this.mode = mode;
    },

    disableForm: function () {
        this.iterateFields(function(field) {
            if (!field.strictDisabled) {
                field.disable();
            }
            if (Ext.isFunction(field.disabledValue)) {
                field.setValue(field.disabledValue.call(field));
            }
        });
    },

    enableForm: function () {
        this.applyRecordData();
        this.iterateFields(function(field) {
            if (!field.strictDisabled) {
                field.enable();
            }
        });
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
            backBtn = this.getBackBtnTitle(),
            editBtn = this.getEditBtnTitle(),
            cancelBtn = this.getCancelBtnTitle(),
            result = [];

        if (editBtn) {
            result.push(
                {
                    text: editBtn,
                    role: 'edit-btn',
                    scale: 'medium',
                    margin: this.buttonsMargin,
                    handler: Ext.bind(this.toEditMode, this)
                }
            );
        }

        if (saveBtn) {
            result.push(
                {
                    text: saveBtn,
                    role: 'save-btn',
                    scale: 'medium',
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
                    scale: 'medium',
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
                    scale: 'medium',
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
                    scale: 'medium',
                    ui: 'gray',
                    margin: this.buttonsMargin,
                    handler: Ext.bind(this.toCardMode, this)
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
            links
        ];
    },

    getPanelItemsConfig: function () {
        var titleConfig = {

            },
            tabPanelConfig = {
                xtype: 'tabpanel',
                ui: 'light',
                border: 0,
                items: this.getTabPanelItems()
            };

        return [
            // Header part
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    // Form header part
                    this.getHeaderConfig(),
                    {
                        xtype: 'component',
                        flex: 2
                    },

                    // Buttons container
                    {
                        xtype: 'container',
                        layout: {
                            type: 'vbox',
                            align: 'stretch',
                            pack: 'end'
                        },
                        flex: 1,
                        padding: '20 20 0 0',
                        defaults: {
                            xtype: 'button',
                            margin: 50
                        },
                        items: this.getButtons()
                    }
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
            padding: '10',
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
            padding: '5 0 5 30',

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
