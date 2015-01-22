/**
 * @class NavixyPanel.view.bundles.Scanner
 * @extends Ext.Component
 * Description
 */

Ext.define('NavixyPanel.view.bundles.Scanner', {
    extend: 'Ext.Container',
    alias: 'widget.bundle-scanner',
    singleCmp: true,

    layout: {
        type: 'hbox'
    },

    ui: 'light',
    cls: 'scan-panel',

    padding: '30 25 20 25',

    bundle: null,
    shouldBePrinted: false,

    initComponent: function () {
        this.items = this.getItems();

        this.callParent(arguments);
    },

    afterRender: function () {
        this.stepFirst();
        this.callParent(arguments);
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
                        minHeight: 550,
                        items: [
                            {
                                role: 'form-container',
                                xtype: 'container',
                                layout: 'vbox',
                                minHeight: 150,
                                flex: 1
                            },
                            {
                                role: 'buttons-container',
                                xtype: 'container',
                                layout: 'vbox',
                                padding: '40 0 0 0',
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
                                        role: 'auto-print-option',
                                        boxLabel: _l.get('bundles.scan.imie_hints.auto_print'),
                                        disabled: false
                                    },
                                    {
                                        text: _l.get('bundles.scan.buttons.change_equip'),
                                        role: 'equip-button',
                                        handler: this.changeEquip,
                                        scope: this
                                    },
                                    {
                                        text: _l.get('bundles.scan.buttons.print'),
                                        role: 'print-button',
                                        handler: this.printBundle,
                                        scope: this
                                    },
                                    {
                                        text: _l.get('bundles.scan.buttons.reset'),
                                        ui: 'gray',
                                        role: 'reset-button',
                                        handler: this.resetScanner,
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
                        flex: 1,
                        items: [
                            {
                                xtype: 'container',
                                role: 'bundle-info',
                                margin: '0 0 30 25',

                                hidden: true,
                                tpl: NavixyPanel.view.components.AbstractCard.prototype.makeMainTpl.call(this)
                            },
                            {
                                xtype: 'container',
                                role: 'print-error',
                                margin: '0 0 30 25',
                                cls: 'step-title',
                                hidden: true,
                                html: _l.get('bundles.scan.print_hints.print_error')
                            },
                            {
                                xtype: 'container',
                                role: 'printer-container',
                                flex: 1
                            }
                        ]
                    }
                ]
            },
        ]
    },

    getFormContainer: function () {
        return this.down('[role="form-container"]');
    },

    getInfoContainer: function () {
        return this.down('[role="info-container"]');
    },

    getIMEIField: function () {
        return this.down('[role="imei"]');
    },

    getICCIDField: function () {
        return this.down('[role="iccid"]');
    },

    getBundleInfoContainer: function () {
        return this.down('[role="bundle-info"]');
    },

    getBundlePrintContainer: function () {
        return this.down('[role="bundle-print"]');
    },

    getBundlePrintFrame: function () {
        return this.down('[role="printer-container"]');
    },

    getBundlePrintErrorContainer: function () {
        return this.down('[role="print-error"]');
    },

    getEquipButton: function () {
        return this.down('[role="equip-button"]');
    },

    getPrintButton: function () {
        return this.down('[role="print-button"]');
    },

    getResetButton: function () {
        return this.down('[role="reset-button"]');
    },

    getAutoPrintOption: function () {
        return this.down('[role="auto-print-option"]');
    },

    isAutoReset: function () {
        return this.getAutoPrintOption().getValue();
    },

    tabActivated: function () {
        if (!this.bundle) {
            this.fixScanFocus();
        }
    },

    resetScanner: function (imei) {

        this.bundle = null;

        this.stepFirstRemove();
        this.stepSecondRemove();

        this.stepFirst();

        if (imei && Ext.isNumeric(imei)) {
            this.getIMEIField().setIMEI(imei)
        }
    },

    checkBundleChanges: function (imei) {
        if (this.bundle && this.bundle.get('imei') === imei)
            this.getIMEIField().setIMEI(imei);
    },

    fixScanFocus: function () {
        this.getIMEIField().enable();
        Ext.defer(function () {this.getIMEIField().focus();}, 20, this);
    },

    removeStepFromForm: function (selector) {
        var container;
        while (true) {
            container = this.down(selector);
            if (container) {
                this.getFormContainer().remove(container);
            } else {
                return false;
            }
        }
    },

    stepFirstRemove: function () {
        this.hideBundleInfo();
        this.hideBundlePrinter();
        this.removeStepFromForm('[step="first"]');
        this.getEquipButton().disable();
    },

    stepFirst: function () {
        this.stepFirstRemove();
        var stepConfig = [
            {
                xtype: 'container',
                step: 'first',
                cls: 'step-title',
                html: '1. ' + _l.get('bundles.scan.steps.first.title')
            },
            {
                xtype: 'imei-field',
                step: 'first',
                role: 'imei',
                margin: '0 0 0 20',
                listeners: {
                    'boundle-found': this.stepSecond,
                    'input-error': this.firstStepFailure,
                    scope: this
                }
            }
        ];

        this.getFormContainer().add(stepConfig);
        this.fixScanFocus();
    },


    firstStepFailure: function () {
        this.resetScanner();
    },

    stepSecondRemove: function () {
        this.hideBundleInfo();
        this.hideBundlePrinter();
        this.removeStepFromForm('[step="second"]');
    },

    stepSecond: function (bundle) {
        this.stepSecondRemove();
        this.bundle = bundle;
        this.showBundleInfo();
        this.showBundlePrinter();
        this.getEquipButton().enable();

        var stepConfig = [
            {
                xtype: 'container',
                step: 'second',
                cls: 'step-title',
                html: '2. ' + _l.get('bundles.scan.steps.second.title')
            },
            {
                xtype: 'iccid-field',
                step: 'second',
                role: 'iccid',
                margin: '0 0 0 20',
                listeners: {
                    'status-changed': this.onICCIDChanged,
                    'boundle-changed': this.onICCIDServerChanged,
                    'boundle-before-changed': this.checkAutoPrint,
                    'server-error': this.onICCIDServerError,
                    scope: this
                }
            },
            {
                xtype: 'button',
                step: 'second',
                role: 'process-iccid',

                scale: 'large',
                width: 330,
                margin: '20 0 0 20',
                hidden: true,

                handler: this.processICCID,
                scope: this
            }
        ];

        this.getFormContainer().add(stepConfig);
        this.getICCIDField().setBundle(this.bundle);
    },

    processICCID: function () {
        this.getICCIDField().onScanFilled();
    },

    onICCIDChanged: function (status) {
        var btn = this.down('button[role="process-iccid"]'),
            text = '',
            toggle = false;

        switch (status) {
            case 'new':
                text = _l.get('bundles.scan.buttons')[this.bundle && this.bundle.get('iccid') ? 'reassign_iccid' : 'assign_iccid'];
                toggle = true;
            break;

            case 'old':
                text = _l.get('bundles.scan.buttons.remove_iccid');
                toggle = true;
            break;

            case 'empty':
                text = '';
            break;
        }

        if (this.getICCIDField().hasFocus) {
            text = [text, '&nbsp; [',  _l.get('bundles.scan.buttons.enter'), ']'].join('');
        }

        btn.setText(text);
        btn[toggle ? 'show' : 'hide']();
    },

    onICCIDServerError: function () {
        this.shouldBePrinted = false;
    },

    onICCIDServerChanged: function () {
        this.showBundleInfo(_l.get('bundles.scan.fields.title_add_changed'));
        this.showBundlePrinter();
    },

    checkAutoPrint: function (bundle, status) {
        if (this.isAutoReset() && bundle && !bundle.get('iccid') && status === 'new') {
            this.shouldBePrinted = true;
        }
    },

    showBundleInfo: function (msg) {
        var localePart = _l.get('bundles.scan.fields'),
            data = {
                title: localePart.get('title'),
                title_add: msg || (this.bundle.get('iccid') && localePart.get('title_add')),
                main_cls: 'card-header-inner',
                table_cls: 'header-table',
                fields: []
            },
            dataMap = {
                id: false,
                imei: false,
                iccid: function (value) {
                    var raw = value.toString(),
                        iccidString = raw.replace(/[^0-9]+/g, ""),
                        startIndex = iccidString.indexOf("89");

                    if (startIndex < 0) {
                        startIndex = 0;
                    }
                    return iccidString.substring(startIndex);
                },
                assign_time: function (value) {return Ext.Date.format(value, Ext.util.Format.dateFormatFull)},
                model_code: false,
                equip_id: false,
                order_id: function (value) {return Ext.util.Format.booleanEncode(value)}
            };

        Ext.iterate(dataMap, function (fieldName, convert) {
            var bundleValue = this.bundle.get(fieldName);
            if ((bundleValue || convert) && !Ext.isObject(bundleValue)) {
                data.fields.push({
                    title: localePart.get(fieldName),
                    value: convert ? convert.call(this, bundleValue) : bundleValue,
                    no_encode: true
                })
            }
        }, this);

        this.getBundleInfoContainer().show();
        this.getBundleInfoContainer().update(data);
    },

    hideBundleInfo: function () {
        this.getBundleInfoContainer().hide();
        this.getBundlePrintErrorContainer().hide();
        this.getBundleInfoContainer().update({});
    },

    getBundlePrinterConfig: function () {
        return {
            xtype: 'bundle-printer',
            bodyPadding: 5,
            cls: 'print-frame',
            role: 'bundle-print',
            margin: '0 0 30 25',
            bundle: this.bundle,
            listeners: {
                'doc-ready': this.printReady,
                'doc-error': this.printError,
                scope: this
            }
        }
    },


    showBundlePrinter: function () {
        this.getBundlePrintFrame().removeAll(true);
        this.getBundlePrintFrame().add(this.getBundlePrinterConfig());

        this.getBundlePrintErrorContainer().hide();
    },

    hideBundlePrinter: function () {
        this.getBundlePrintFrame().removeAll(true);
        this.getPrintButton().disable();
        this.getBundlePrintErrorContainer().hide();
    },

    printError: function () {
        this.hideBundlePrinter();
        this.getBundlePrintErrorContainer().show();
    },

    printReady: function () {
        this.getPrintButton().enable();
        if (this.shouldBePrinted) {
            this.printBundle();
            this.resetScanner();
        }
        this.shouldBePrinted = false;
    },

    printBundle: function () {
        var printer = this.getBundlePrintContainer();
        if (printer && printer.docReady) {
            printer.printWin();
        }
    },

    changeEquip: function () {
        this.window = Ext.widget('equipment-select-window', {
            listeners: {
                select: this.onEquipSelect,
                destroy: function () {
                    this.window = null;
                },
                scope: this
            }
        }).show();
    },

    onEquipSelect: function (equip) {
        var equip_id = equip && equip.getId();

        if (equip_id) {
            Ext.API.assignEquipToBundle({
                params: {
                    equip_id: equip_id,
                    bundle_id: this.bundle.getId()
                },
                callback: function (response) {
                    this.afterEquipAssign(response, equip_id)
                },
                failure: this.afterEquipFailure,
                scope: this
            });
        }
    },

    afterEquipAssign: function (response, equip_id) {
        this.bundle.set('equip_id', equip_id);

        this.showBundleInfo(_l.get('bundles.scan.fields.equip_add_changed'));
        this.showBundlePrinter();
    },

    afterEquipFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = errCode == 7
                ? status.description || false
                : _l.get('errors')[errCode] || status.description || false;


        Ext.MessageBox.show({
            title: _l.get('error') + ' #' + errCode,
            msg: errDescription,
            closable: false,
            buttons: Ext.MessageBox.OK
        });
    }
});

