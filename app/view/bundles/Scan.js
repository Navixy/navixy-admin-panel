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
        type: 'hbox'
    },

    ui: 'light',
    cls: 'scan-panel',

    bodyPadding: '30 20 60 25',
    buttonAlign: 'center',

    currentStep: 1,
    imie: null,

    bundle: null,
    lustBundle: null,

    initComponent: function () {
        this.title = this.getTitle();

        this.items = this.getItems();

        this.buttons = this.getButtons();

        this.callParent(arguments);
    },


    getTitle: function () {
        return null;
    },

    getButtons: function () {
        return [
            {
                xtype: 'button',
                scale: 'large',

                text: _l.get('bundles.scan.clear_form'),
                handler: this.restartForm,
                scope: this
            }
        ];
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
                this.getSecondStepHints(),
                this.getThirdStepHints(),
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
                        specialkey: function(f, event) {
                            if (event.getKey() == event.ENTER) {
                                this.onScanFilled();
                            }
                        },
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
                    hidden: true,
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
                        specialkey: function(f, event) {
                            if (event.getKey() == event.ENTER) {
                                this.onICCIDScanFilled();
                            }
                        },
                        scope: this
                    }
                },
                {
                    xtype: 'button',
                    scale: 'large',
                    margin: '10 0 0 20',

                    hidden: true,
                    role: 'iccid-unasssign',
                    text: _l.get('bundles.scan.hints.iccid_unassign_btn'),
                    handler: this.onICCIunAssignSend,
                    scope: this
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

    getThirdStepHints: function () {
        return {
            xtype: 'container',
            layout: 'vbox',
            role: 'third-step',

            margin: '40 0 0 0',

            items: [
                {
                    xtype: 'container',
                    role: 'iccid-succes',
                    layout: {
                        type: 'vbox'
                    },
                    hidden: true,
                    items: [
                        {
                            xtype: 'container',
                            cls: 'step-hint success',
                            html: _l.get('bundles.scan.hints.last_scan_text')
                        },
                        {
                            xtype: 'container',
                            cls: 'step-hint',
                            role: 'iccid-success-text',
                            html: _l.get('bundles.scan.hints.iccid_success')
                        },
                        {
                            xtype: 'container',
                            cls: 'step-hint',
                            role: 'iccid-print-ready',
                            html: _l.get('bundles.scan.hints.iccid_print_ready'),
                            hidden: true
                        },
                        {
                            xtype: 'container',
                            cls: 'step-hint error',
                            role: 'iccid-no-model',
                            html: _l.get('bundles.scan.hints.iccid_no_model'),
                            hidden: true
                        },
                        {
                            xtype: 'button',
                            scale: 'large',
                            role: 'iccid-print-btn',
                            text: _l.get('bundles.scan.hints.iccid_print_btn'),
                            handler: this.printICCID,
                            scope: this,
                            hidden: true
                        },
                        {
                            xtype: 'container',
                            role: 'print-frame',
                            margin: '5 0 10 0'
                        }
                    ]
                }
            ]
        }

    },

    fireBundlesList: function () {
        this.fireEvent('bundles-list', this);
    },

    restartForm: function () {
        this.hideAllHints();
        this.getBundleInfo().hide();
        this.bundle = null;
        this.imei = null;
        this.currentStep = 1;

        this.getIMEIField().setValue('');
        this.getIMEIField().enable();
        this.fixScanFocus();

        this.getICCIDField().enable();
        this.getICCIDField().setValue('');
        this.getSecondStepField().hide();
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
        this.getICCIDunAssignBnt().hide();
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

    onScanFilled: function (force, text) {
        var value = this.getIMEIField().getValue(),
            errText = text || _l.get('bundles.scan.hints.imei_invalid');


        if (value && this.getStepState() === 1) {
            this.hideAllHints();
            if (this.validateIMEI(value) && !force) {
                this.checkServerICCID();
            } else {
                this.getScanHintInvalid().show();
                this.getScanHintInvalid().update(Ext.String.format(errText, value));
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
        this.onScanFilled(true, _l.get('bundles.scan.hints.imei_invalid'));
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

    getICCIDunAssignBnt: function () {
        return this.down('[role="steps"] [role="second-step"] [role="iccid-unasssign"]');
    },

    getICCIDHintAssigned: function () {
        return this.down('[role="hints"] [role="third-step"] [role="iccid-succes"]');
    },

    getICCIDHintSuccessText: function () {
        return this.down('[role="hints"] [role="third-step"] [role="iccid-success-text"]');
    },

    getICCIDHintReadyText: function () {
        return this.down('[role="hints"] [role="third-step"] [role="iccid-print-ready"]');
    },

    getICCIDHintPrintFailureText: function () {
        return this.down('[role="hints"] [role="third-step"] [role="iccid-no-model"]');
    },

    getICCIDHintPrintBtn: function () {
        return this.down('[role="hints"] [role="third-step"] [role="iccid-print-btn"]');
    },

    getPrintFrame: function () {
        return this.down('[role="hints"] [role="third-step"] [role="print-frame"]');
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
            this.onICCIDScanFilled();
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

        this.getBundleInfo().show();
        this.getBundleInfo().update(data);
    },


    checkICCIDScanFocus: function () {
        if (this.getStepState() === 2 && !this.bundle.get('iccid')) {
            if (!this.getICCIDField().isDisabled()) {
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

        if (this.getStepState() === 2) {
            if (value && this.bundle && !this.bundle.get('iccid')) {
                this.hideAllHints();
                if (this.validateICCID(value)) {
                    this.applyServerICCID();
                } else {
                    this.getICCIDScanHintInvalid().show();
                    this.getICCIDScanHintInvalid().update(Ext.String.format(_l.get('bundles.scan.hints.iccid_invalid'), value));
                    this.getICCIDField().setValue('');
                    this.getICCIDField().focus();
                }
            } else if (this.bundle.get('iccid')) {
                this.getICCIDSendBnt().show();
                this.getICCIDunAssignBnt().show()
            }
        }
    },

    onICCIDScanSend: function () {
        var value = this.getICCIDField().getValue();

        if (this.validateICCID(value)) {
            this.applyServerICCID();
        } else {
            this.getICCIDScanHintInvalid().show();
            this.getICCIDScanHintInvalid().update(Ext.String.format(_l.get('bundles.scan.hints.iccid_invalid'), value));
            this.getICCIDField().setValue('');
            this.getICCIDField().focus();
        }
    },

    onICCIunAssignSend: function () {
        if (this.bundle) {
            Ext.MessageBox.show({
                msg: Ext.String.format(_l.get('bundles.scan.hints.unassign_q'), this.bundle.get('imei')),
                width: 450,
                buttons: Ext.MessageBox.OKCANCEL,
                icon: Ext.MessageBox.QUESTION,
                closable: false,
                fn: Ext.bind(this.unassignBundle, this, [this.bundle])
            });
        }
    },


    unassignBundle: function () {
        Ext.API.assignBundle({
            params: {
                bundle_id: this.bundle.get('id')
            },
            callback: this.afterServerUnAssign,
            failure: this.afterServerUnAssignFailure,
            scope: this
        });
    },

    afterServerUnAssign: function () {
        this.restartForm();
        Ext.MessageBox.show({
            msg: _l.get('bundles.scan.hints.unassign_success'),
            closable: false,
            buttons: Ext.MessageBox.OK
        });
    },

    afterServerUnAssignFailure: function () {
        Ext.MessageBox.show({
            msg: _l.get('bundles.scan.hints.unassign_failure'),
            closable: false,
            buttons: Ext.MessageBox.OK
        });
    },

    applyServerICCID: function () {
        var value = this.getICCIDField().getValue();

        Ext.API.assignBundle({
            params: {
                iccid: value,
                bundle_id: this.bundle.get('id')
            },
            callback: function (response) {
                this.afterServerAssign(response, value);
            },
            failure: function (response) {
                this.afterServerAssign(response, value);
            },
            scope: this
        });
    },

    afterServerAssign: function (response, iccid) {
        var success = response && response.success;

        if (success) {
            this.bundle.set('iccid', iccid);
            this.startThirdStep();
        } else {
            this.afterServerAssignFailure(response);
        }
    },

    afterServerAssignFailure: function (response, iccid) {
        var errStatus = response.status,
            errCode = errStatus.code,
            errLocale = _l.get('errors.bundles')[errCode] || _l.get('errors')[errCode] || false;

        this.getICCIDScanHintInvalid().show();
        this.getICCIDScanHintInvalid().update([errLocale + '.', '', Ext.String.format(_l.get('bundles.scan.hints.iccid_invalid'), iccid)].join('<br>'));
        this.getICCIDField().setValue('');
        this.getICCIDField().focus();
    },


    startThirdStep: function () {
        this.currentStep = 3;

        this.hideAllHints();
        this.getICCIDField().disable();

        this.lastBundle = this.bundle;
        this.bundle = null;

        var serverICCID = this.lastBundle && this.lastBundle.get('iccid');

        this.getICCIDHintAssigned().show();
        this.getICCIDHintSuccessText().update(Ext.String.format(_l.get('bundles.scan.hints.iccid_succcess'), this.lastBundle.get('iccid')));

        this.showPrintICCID();
        this.restartForm();
    },

    showPrintICCID: function () {
        this.getICCIDHintPrintFailureText().hide();
        this.getICCIDHintPrintBtn().hide();
        this.getICCIDHintReadyText().show();

        var frame = this.getPrintFrame();

        frame.removeAll(true);
        frame.add(
            {
                xtype: 'bundleprint',
                bodyPadding: 5,
                cls: 'print-frame',
                imei: this.lastBundle.get('imei'),
                equip_id: this.lastBundle.get('equip_id'),
                listeners: {
                    docready: {
                        fn: this.printReady,
                        scope: this
                    },
                    docerror: {
                        fn: this.printError,
                        scope: this
                    }
                }
            }
        );
    },

    printError: function () {
        this.getICCIDHintPrintFailureText().show();
        this.getICCIDHintPrintBtn().hide();
        this.getICCIDHintReadyText().hide();
        this.getPrintFrame().removeAll(true);
    },

    printReady: function () {
        this.getICCIDHintPrintBtn().show();
        this.printICCID();
    },


    printICCID: function () {
        var printer = this.down('bundleprint');
        if (printer && printer.docReady) {
            printer.printWin();
        }
    },


    getStepState: function () {
        return this.currentStep;
    },

    afterRender: function () {
        this.callParent(arguments);
        this.fixScanFocus();
        this.on('activate', function () {
            this.fixScanFocus();
            this.fixICCIDScanFocus();
        }, this);
    }
});
