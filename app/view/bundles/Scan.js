/**
 * @class NavixyPanel.view.bundles.Scan
 * @extends Ext.form.Panel
 * Description
 */

Ext.define('NavixyPanel.view.bundles.Scan', {
    extend: 'Ext.form.Panel',
    alias: 'widget.bundlescan',
    singleCmp: true,

    layout: {
        type: 'hbox',
//        align: 'center'
    },

    ui: 'light',
    cls: 'scan-panel',

    bodyPadding: '30 20 60 25',
    buttonAlign: 'center',

    currentStep: 1,
    imie: null,
    iccid: null,

    initComponent: function () {
        this.title = this.getTitle();

        this.items = this.getItems();

        this.buttons = this.getButtons();

        this.callParent(arguments);
    },


    getTitle: function () {
        return _l.get('bundles.scan.title');
    },

    getButtons: function () {
        return [];
    },

    getItems: function () {
        return [
            this.getStepItems(),
            this.getHintItems(),
        ];
    },

    getStepItems: function () {
        return {
            xtype: 'container',
            layout: 'vbox',
            width: 450,

            role: 'steps',

            items: [
                this.getFirstStep(),
                this.getSecondStep()
            ]
        }
    },

    getHintItems: function () {
        return {
            xtype: 'container',
            layout: 'vbox',

            flex: 1,
            role: 'hints',

            items: [
                this.getFirstStepHints(),
                this.getSecondStepHints()
            ]
        }
    },


    getFirstStep: function () {
        return {
            xtype: 'container',
            layout: 'vbox',
            role: 'first-step',

            items: [
                {
                    xtype: 'container',
                    role: 'step-title',
                    cls: 'step-title',

                    html: '1. ' + _l.get('bundles.scan.steps.first.title')
                },
                {
                    xtype: 'numberfield',

                    role: 'imei',

                    cls: 'step-field',
                    width: 250,
                    margin: '0 0 0 20',
                    ui: 'light',

                    maxLength: 15,
                    enforceMaxLength: true,
                    hideTrigger: true,

                    listeners: {
                        blur: this.checkScanFocus,
                        focus: this.checkScanFocus,
                        change: this.onScanFilled,
                        scope: this
                    }
                },
            ]
        }
    },

    getFirstStepHints: function () {
        return {
            xtype: 'container',
            layout: 'vbox',
            role: 'first-step',

            items: [
                {
                    xtype: 'container',
                    role: 'imei-ready',
                    cls: 'step-hint',
                    html: _l.get('bundles.scan.hints.imei_ready')
                },
                {
                    xtype: 'container',
                    role: 'imei-invalid',
                    cls: 'step-hint error',
                    html: _l.get('bundles.scan.hints.imei_invalid')
                },
                {
                    xtype: 'container',
                    role: 'imei-focus-lose',
                    layout: {
                        type: 'vbox'
                    },

                    items: [
                        {
                            xtype: 'container',
                            cls: 'step-hint error',
                            html: _l.get('bundles.scan.hints.imei_focus_lose')
                        },
                        {
                            xtype: 'button',
                            scale: 'large',
                            text: _l.get('bundles.scan.hints.imei_focus_lose_btn'),
                            handler: this.fixScanFocus,
                            scope: this
                        },
                    ]
                }
            ]
        }
    },

    getSecondStep: function () {
        return {
            xtype: 'container',
            layout: 'vbox',
            role: 'second-step',

            padding: '0 0 0 0',
            hidden: true,
            items: [
                {
                    role: 'bundle-info',
                    xtype: 'container',
                    tpl: this.makeMBundleTpl(),
                    margin: '0 0 30 25'
                },
                {
                    xtype: 'container',
                    role: 'step-title',
                    cls: 'step-title',

                    html: '2. ' + _l.get('bundles.scan.steps.second.title')
                },
                {
                    xtype: 'textfield',

                    role: 'iccid',

                    cls: 'step-field',
                    width: 350,
                    margin: '0 0 0 20',
                    ui: 'light',

                    selectOnFocus: true,

                    listeners: {
                        blur: this.checkICCIDScanFocus,
                        focus: this.checkICCIDScanFocus,
                        change: this.onICCIDScanFilled,
                        scope: this
                    }
                },
                {
                    xtype: 'button',
                    scale: 'large',
                    margin: '10 0 0 20',

                    hidden: true,
                    role: 'iccid-send',
                    text: _l.get('bundles.scan.hints.iccid_send_btn'),
                    handler: this.onICCIDScanSend,
                    scope: this
                }
            ]
        }

    },

    getSecondStepHints: function () {
        return {
            xtype: 'container',
            layout: 'vbox',
            role: 'second-step',

            items: [
                {
                    xtype: 'container',
                    role: 'iccid-ready',
                    cls: 'step-hint',
                    html: _l.get('bundles.scan.hints.iccid_ready')
                },
                {
                    xtype: 'container',
                    role: 'iccid-found',
                    cls: 'step-hint',
                    html: _l.get('bundles.scan.hints.iccid_found')
                },
                {
                    xtype: 'container',
                    role: 'iccid-invalid',
                    cls: 'step-hint error',
                    html: _l.get('bundles.scan.hints.iccid_invalid')
                },
                {
                    xtype: 'container',
                    role: 'iccid-focus-lose',
                    layout: {
                        type: 'vbox'
                    },

                    items: [
                        {
                            xtype: 'container',
                            cls: 'step-hint error',
                            html: _l.get('bundles.scan.hints.iccid_focus_lose')
                        },
                        {
                            xtype: 'button',
                            scale: 'large',
                            text: _l.get('bundles.scan.hints.iccid_focus_lose_btn'),
                            handler: this.fixICCIDScanFocus,
                            scope: this
                        },
                    ]
                }
            ]
        }

    },


    hideAllHints: function () {
        this.getScanHintText().hide();
        this.getScanHintFocusLose().hide();
        this.getScanHintInvalid().hide();
        this.getICCIDScanHintText().hide();
        this.getICCIDScanHintFocusLose().hide();
        this.getICCIDScanHintInvalid().hide();
        this.getICCIDHintFound().hide();
        this.getICCIDSendBnt().hide();
    },

    getScanHintText: function () {
        return this.down('[role="hints"] [role="first-step"] [role="imei-ready"]');
    },

    getScanHintFocusLose: function () {
        return this.down('[role="hints"] [role="first-step"] [role="imei-focus-lose]');
    },

    getScanHintInvalid: function () {
        return this.down('[role="hints"] [role="first-step"] [role="imei-invalid"]');
    },

    getIMEIField: function () {
        return this.down('[role="steps"] [role="first-step"] [role="imei"]');
    },

    fixScanFocus: function () {
        this.hideAllHints();
        this.getScanHintText().show();
        this.getIMEIField().focus();
    },

    checkScanFocus: function () {
        if (this.getStepState() === 1 && !this.getIMEIField().isDisabled()) {
            if (!this.getIMEIField().hasFocus) {
                this.hideAllHints();
                this.getScanHintFocusLose().show();
            } else {
                this.hideAllHints();
                this.getScanHintText().show();
            }
        }
    },

    validateIMEI: function (imei) {
        var str = Ext.isNumber(imei) && imei.toString();
        return imei && str && str.length === 15
    },

    onScanFilled: function () {
        var value = this.getIMEIField().getValue();

        if (value) {
            this.hideAllHints();
            if (this.validateIMEI(value)) {
                this.checkServerICCID();
            } else {
                this.getScanHintInvalid().show();
                this.getScanHintInvalid().update(Ext.String.format(_l.get('bundles.scan.hints.imei_invalid'), value));
                this.getIMEIField().setValue('');
                this.getIMEIField().focus();
            }
        }
    },

    checkServerICCID: function () {
        this.imei = this.getIMEIField().getValue();
        Ext.API.getBundles({
            params: {
                imei: this.imei
            },
            callback: this.afterServerCheck,
            failure: this.afterServerCheckFailure,
            scope: this
        });
    },

    afterServerCheck: function (response) {
        var data = response && response.value;

        this.bundle = Ext.create('NavixyPanel.model.Bundle', data);

        this.startSecondStep();
    },

    afterServerCheckFailure: function () {
        this.startSecondStep();
    },


    makeMBundleTpl: function () {
        return NavixyPanel.view.components.AbstractCard.prototype.makeMainTpl.call(this);
    },

    getBundleInfo: function () {
        return this.down('[role="steps"] [role="second-step"] [role="bundle-info"]');
    },

    getSecondStepField: function () {
        return this.down('[role="steps"] [role="second-step"]');
    },

    getICCIDScanHintText: function () {
        return this.down('[role="hints"] [role="second-step"] [role="iccid-ready"]');
    },

    getICCIDHintFound: function () {
        return this.down('[role="hints"] [role="second-step"] [role="iccid-found"]');
    },

    getICCIDScanHintFocusLose: function () {
        return this.down('[role="hints"] [role="second-step"] [role="iccid-focus-lose]');
    },

    getICCIDField: function () {
        return this.down('[role="steps"] [role="second-step"] [role="iccid"]');
    },

    getICCIDScanHintInvalid: function () {
        return this.down('[role="hints"] [role="second-step"] [role="iccid-invalid"]');
    },

    getICCIDSendBnt: function () {
        return this.down('[role="steps"] [role="second-step"] [role="iccid-send"]');
    },

    startSecondStep: function () {
        this.currentStep = 2;

        this.hideAllHints();
        this.getIMEIField().disable();
        this.getSecondStepField().show();

        this.showBundleInfo();

        var serverICCID = this.bundle && this.bundle.get('iccid');

        if (serverICCID) {
            this.getICCIDField().focus();
            this.getICCIDField().setValue(serverICCID);
            this.getICCIDHintFound().show();
            this.getICCIDHintFound().update(Ext.String.format(_l.get('bundles.scan.hints.iccid_found'), this.bundle.get('imei')));
        } else {
            this.getICCIDScanHintText().show();
            this.getICCIDField().setValue('');
            this.getICCIDField().focus();
        }
    },

    showBundleInfo: function () {

        var bundleData = this.bundle.getData(),
            data = {
                main_cls: 'card-header-inner',
                table_cls: 'header-table',
                fields: [
                    {
                        title: _l.get('bundles.fields.id'),
                        value: bundleData.id
                    },
                    {
                        title: _l.get('bundles.fields.model_code'),
                        value: bundleData.model_code
                    }
                ]
            };

        this.getBundleInfo().update(data);
    },


    checkICCIDScanFocus: function () {
        if (!this.bundle.get('iccid')) {
            if (this.getStepState() === 2 && !this.getICCIDField().isDisabled()) {
                if (!this.getICCIDField().hasFocus) {
                    this.hideAllHints();
                    this.getICCIDScanHintFocusLose().show();
                } else {
                    this.hideAllHints();
                    this.getICCIDScanHintText().show();
                }
            }
        }
    },

    fixICCIDScanFocus: function () {
        this.hideAllHints();
        this.getICCIDScanHintText().show();
        this.getICCIDField().focus();
    },

    validateICCID: function (iccid) {
        var value = parseInt(iccid);
        return Ext.isNumber(value) && iccid.length > 9
    },

    onICCIDScanFilled: function () {
        var value = this.getICCIDField().getValue();

        if (value && this.bundle && !this.bundle.get('iccid')) {
            this.hideAllHints();
            if (this.validateICCID(value)) {
                this.applyServerICCID();
                console.log('start third step');
            } else {
                this.getICCIDScanHintInvalid().show();
                this.getICCIDScanHintInvalid().update(Ext.String.format(_l.get('bundles.scan.hints.iccid_invalid'), value));
                this.getICCIDField().setValue('');
                this.getICCIDField().focus();
            }
        } else if (this.bundle.get('iccid')) {
            this.getICCIDSendBnt().show()
        }
    },

    onICCIDScanSend: function () {
        var value = this.getICCIDField().getValue();

        if (this.validateICCID(value)) {
            this.applyServerICCID();
            console.log('start third step');
        } else {
            this.getICCIDScanHintInvalid().show();
            this.getICCIDScanHintInvalid().update(Ext.String.format(_l.get('bundles.scan.hints.iccid_invalid'), value));
            this.getICCIDField().setValue('');
            this.getICCIDField().focus();
        }
    },


    applyServerICCID: function () {
        var value = this.getICCIDField().getValue();
        this.currentStep = 3;

        return false;

        Ext.API.assignBundle({
            params: {
                iccid: value,
                bundle_id: this.bundle.get('id')
            },
            callback: this.afterServerAssign,
            failure: this.afterServerAssignFailure,
            scope: this
        });
    },

    afterServerAssign: function () {
        
    },

    afterServerAssignFailure: function () {
        
    },


    getStepState: function () {
        return this.currentStep;
    },

    afterRender: function () {
        this.callParent(arguments);
        this.fixScanFocus();
    }
});
