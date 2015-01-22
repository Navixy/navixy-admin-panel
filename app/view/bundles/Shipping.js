/**
 * @class NavixyPanel.view.bundles.Shipping
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.bundles.Shipping', {
    extend: 'Ext.Container',
    alias: 'widget.bundles-shipping',
    singleCmp: true,

    layout: {
        type: 'vbox'
    },

    ui: 'light',
    cls: 'scan-panel',

    order: null,
    bundlesStore: null,
    lastBundle: null,

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
                    type: 'vbox'
                },
                padding: '30 25 20 25',
                items: [
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        margin: '0 0 40 0',
                        items: [
                            {
                                role: 'form-container',
                                xtype: 'container',
                                layout: 'vbox',
                                width: 450
                            },
                            {
                                role: 'hints-container',
                                xtype: 'container',
                                layout: 'vbox',
                                flex: 1
                            },
                        ]
                    },
                    {
                        role: 'grid-container',
                        xtype: 'container',
                        width: 1200
                    }
                ]
            }
        ]
    },

    getFormContainer: function () {
        return this.down('[role="form-container"]');
    },

    getGridContainer: function () {
        return this.down('[role="grid-container"]');
    },

    getHintsContainer: function () {
        return this.down('[role="hints-container"]');
    },

    getIMEIField: function () {
        return this.down('[action="imei"]');
    },

    showHint: function (text, append, isError) {
        var messages = Ext.isArray(text) ? text : [text],
            container = this.getHintsContainer();

        if (append) {
            container.removeAll(true);
        }

        Ext.iterate(messages, function(msg) {
            container.add(Ext.isObject(msg) ? msg : {
                xtype: 'container',
                cls: 'step-hint' + (isError ? ' error' : ''),
                html: msg
            })
        }, this);
    },

    showError: function (text, append) {
        this.showHint(text, append, true)
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

    stepFirst: function () {
        var stepConfig = [
                {
                    xtype: 'container',
                    cls: 'step-title',
                    role: 'first-step',
                    html: '1. ' + _l.get('bundles.shipping.steps.first.title')
                },
                {
                    xtype: 'container',
                    role: 'first-step',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'numberfield',

                            role: 'order_id',

                            cls: 'step-field',
                            width: 200,
                            margin: '0 20 0 20',
                            ui: 'light',

                            maxLength: 15,
                            enforceMaxLength: true,
                            hideTrigger: true
                        },
                        {
                            xtype: 'button',
                            scale: 'large',
                            text: _l.get('bundles.shipping.search_btn'),
                            padding: '0 20',
                            height: 46,
                            handler: this.searchOrder,
                            scope: this
                        }
                    ]
                },
            ];

        this.getFormContainer().add(stepConfig);
        this.showHint(_l.get('bundles.shipping.hints.ready_for_search'))
    },

    searchOrder: function () {
        var idField = this.down('[role="order_id"]'),
            order_id = idField && idField.getValue();

        if (order_id) {
            Ext.API.getBundleOrder({
                params: {
                    order_id: order_id
                },
                callback: this.stepSecond,
                failure: this.afterOrderFailure,
                scope: this
            });
        } else {
            this.showHint(_l.get('bundles.shipping.hints.ready_for_search'), true);
        }
    },

    afterOrderFailure: function (response) {
        var idField = this.down('[role="order_id"]'),
            order_id = idField && idField.getValue();

        this.showHint(_l.get('bundles.shipping.hints.ready_for_search'), true);
        this.showError(Ext.String.format(_l.get('bundles.shipping.hints.order_search_failure'), order_id));

        this.removeStepFromForm('[role="second-step"]');

        this.getGridContainer().removeAll();
    },

    stepSecond: function (response) {
        var me = this,
            order = response.value,
            bundles = order && order.bundles,
            orderRecord = Ext.create('NavixyPanel.model.Order', order),

            store = Ext.create('Ext.data.Store', {
                model: 'NavixyPanel.model.Bundle'
            }),
            gridConfig = {
                xtype: 'bundles-list',
                hasEdit: true,
                getBottomBar: Ext.emptyFn,
                getTopBar: Ext.emptyFn,
                initStore: function () {
                    this.store = store;
                }
            },

            stepConfig = [
                {
                    xtype: 'container',
                    role: 'second-step',
                    margin: '20 0 30 25',
                    tpl: NavixyPanel.view.components.AbstractCard.prototype.makeMainTpl.call(this),
                    data: {
                        main_cls: 'card-header-inner',
                        table_cls: 'header-table',
                        fields: [
                            {
                                title: _l.get('bundles.shipping.fields.id'),
                                value: orderRecord.getId()
                            },
                            {
                                title: _l.get('bundles.shipping.fields.user_id'),
                                value: orderRecord.get('user_id')
                            },
                            {
                                title: _l.get('bundles.shipping.fields.creation_time'),
                                value: Ext.Date.format(orderRecord.get('creation_time'), Ext.util.Format.dateFormatFull)
                            },
                            {
                                title: _l.get('bundles.shipping.fields.status'),
                                value: orderRecord.get('status')
                            },
                            {
                                title: _l.get('bundles.shipping.fields.sum'),
                                value: orderRecord.get('sum')
                            },
                            {
                                title: _l.get('bundles.shipping.fields.payer'),
                                value: orderRecord.get('payer')
                            },
                            {
                                title: _l.get('bundles.shipping.fields.recipient'),
                                value: orderRecord.get('recipient')
                            },
                            {
                                title: _l.get('bundles.shipping.fields.contacts'),
                                value: orderRecord.get('contacts')
                            },
                            {
                                title: _l.get('bundles.shipping.fields.comment'),
                                value: orderRecord.get('comment')
                            }
                        ]
                    }
                },
                {
                    xtype: 'container',
                    cls: 'step-title',
                    role: 'second-step',
                    html: '2. ' + _l.get('bundles.shipping.steps.second.title')
                },
                {
                    xtype: 'numberfield',

                    role: 'second-step',
                    action: 'imei',

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
            ];

        this.lastBundle = null;

        this.order = orderRecord;

        this.bundlesStore = store;
        this.bundlesStore.loadData(bundles);

        this.removeStepFromForm('[role="second-step"]');

        this.getGridContainer().removeAll();
        this.getGridContainer().add(gridConfig);

        this.getFormContainer().add(stepConfig);
        this.getIMEIField().focus();

        this.showHint(Ext.String.format(_l.get('bundles.shipping.hints.order_found'), this.order.getId()), true);
        this.showHint(_l.get('bundles.scan.hints.imei_ready'));
    },


    checkScanFocus: function () {
        if (this.getIMEIField() && !this.lastBundle) {
            if (this.getIMEIField().hasFocus) {
                this.showHint(Ext.String.format(_l.get('bundles.shipping.hints.order_found'), this.order.getId()), true);
                this.showHint(_l.get('bundles.scan.hints.imei_ready'));
            } else {
                this.showHint(Ext.String.format(_l.get('bundles.shipping.hints.order_found'), this.order.getId()), true);
                this.showError([
                    _l.get('bundles.scan.hints.imei_focus_lose'),
                    {
                        xtype: 'button',
                        scale: 'large',
                        text: _l.get('bundles.scan.hints.imei_focus_lose_btn'),
                        handler: this.fixScanFocus,
                        scope: this
                    }
                ]);
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

        if (value) {
            if (this.validateIMEI(value) && !force) {
                this.readServerIMEI(value);
            } else {
                this.showHint(Ext.String.format(_l.get('bundles.shipping.hints.order_found'), this.order.getId()), true);
                this.showError(Ext.String.format(errText, value));
                this.getIMEIField().setValue('');
                this.getIMEIField().focus();
            }
        }
    },

    fixScanFocus: function () {
        this.getIMEIField().focus();
    },

    readServerIMEI: function (imei) {
        Ext.API.getBundles({
            params: {
                imei: imei
            },
            callback: this.afterServerCheck,
            failure: this.afterServerCheckFailure,
            scope: this
        });
    },

    afterServerCheck: function (response) {
        var data = response && response.value;

        this.lastBundle = Ext.create('NavixyPanel.model.Bundle', data);

        if (this.lastBundle.get('order_id') === this.order.getId()) {
            this.showHint(Ext.String.format(_l.get('bundles.shipping.hints.order_found'), this.order.getId()), true);
            this.showError(Ext.String.format(_l.get('bundles.shipping.hints.imei_same_order'), this.lastBundle.get('imei')));
            this.getIMEIField().setValue('');
            this.getIMEIField().focus();
            this.lastBundle = null;

        } else if (this.lastBundle.get('order_id')) {
            this.showHint(Ext.String.format(_l.get('bundles.shipping.hints.order_found'), this.order.getId()), true);
            this.showError([
                Ext.String.format(_l.get('bundles.shipping.hints.imei_order_set'), this.lastBundle.get('imei'), this.lastBundle.get('order_id')),
                _l.get('bundles.shipping.hints.imei_reset_q'),
                {
                    xtype: 'button',
                    scale: 'large',
                    text: _l.get('bundles.shipping.hints.imei_reset_btn'),
                    handler: this.assignBundle,
                    scope: this
                }
            ]);
        } else {
            this.assignBundle();
        }
    },

    afterServerCheckFailure: function () {
        this.onScanFilled(true, _l.get('bundles.scan.hints.imei_invalid'));
    },

    assignBundle: function () {
        Ext.API.assignBundleToOrder({
            params: {
                order_id: this.order.getId(),
                bundle_id: this.lastBundle.getId()
            },
            callback: this.afterServerAssign,
            failure: this.afterServerAssignFailure,
            scope: this
        });
    },

    afterServerAssign: function (response) {

        this.getIMEIField().focus();
        this.getIMEIField().setValue();

        this.showHint([
            Ext.String.format(_l.get('bundles.shipping.hints.order_found'), this.order.getId()),
            Ext.String.format(_l.get('bundles.shipping.hints.bundle_asssigned'), this.lastBundle.get('imei'), this.order.getId()),
            _l.get('bundles.scan.hints.imei_ready')
        ], true);

        this.lastBundle.set('order_id', this.order.getId());
        this.bundlesStore.add(this.lastBundle);

        Ext.getFirst('[role="bundles-list"]').doRefresh();
        this.fireEvent('order-assign', this.lastBundle);
        this.lastBundle = null;
    },

    afterServerAssignFailure: function (response) {

        this.getIMEIField().focus();
        this.getIMEIField().setValue();

        this.showHint(Ext.String.format(_l.get('bundles.shipping.hints.order_found'), this.order.getId()), true);
        this.showError(Ext.String.format(_l.get('bundles.shipping.hints.bundle_asssign_failure'), this.lastBundle.get('imei'), this.lastBundle.get('order_id')));
        this.showHint(_l.get('bundles.scan.hints.imei_ready'));

        this.lastBundle = null;
    },

    afterServerUnAssign: function (bundle) {
        this.fireEvent('order-assign', bundle);
    },

    updateList: function (bundle) {
        var curBundle = this.bundlesStore.findRecord('imei', bundle.get('imei'));

        if (curBundle && !bundle.get('order_id')) {
            this.bundlesStore.remove(curBundle);
        }
    }
});