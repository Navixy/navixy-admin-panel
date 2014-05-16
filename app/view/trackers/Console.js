/**
 * @class NavixyPanel.view.trackers.Console
 * @extends Ext.form.Panel
 * Description
 */

Ext.define('NavixyPanel.view.trackers.Console', {
    extend: 'Ext.form.Panel',
    alias: 'widget.trackerconsole',
    requires: ['NavixyPanel.utils.WebSockets'],
    singleCmp: true,
    destroyOnLeave: true,

    record: null,
    connection: null,
    statusStore: null,

    scrollBody: true,
    showTime: true,
    showStatus: true,

    bodyHeight: 500,
    statusWidth: 300,

    ui: 'light',
    cls: 'console',

    bodyPadding: '20',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function () {

        this.title = this.getTitle();

        this.initStatusStore();

        this.items = this.getItems();

        this.lineTpl = this.getLineTpl();

        this.applyListeners();

        this.callParent(arguments);
    },

    applyListeners: function () {
        this.on('beforedestroy', this.clearConnection, this);
    },

    initStatusStore: function () {
        this.statusStore = Ext.create('Ext.data.Store', {
            fields:['name', 'value']
        });
    },

    getTitle: function () {

        var titleTpl = new Ext.XTemplate(
            _l.trackers.console.title,
            ' #{id}: {label}'
        );

        return titleTpl.apply(this.getRecordData());
    },

    getLineTpl: function () {

        return new Ext.XTemplate([
            '<div class="{cls}">',
                '<span class="time',
                '<tpl if="!showTime">',
                    ' hidden',
                '</tpl>',
                '">{time} </span>',
                '<span class="text">{text}</span>',
            '</div>'
        ]);
    },

    getItems: function () {

        return [
            {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'top'
                        },
                        items: [
                            {
                                role: 'connect-btn',
                                xtype: 'button',
                                text: _l.trackers.console.connect_btn,
                                handler: Ext.bind(this.connectAction, this)
                            },
                            {
                                role: 'disconnect-btn',
                                xtype: 'button',
                                hidden: true,
                                text: _l.trackers.console.disconnect_btn,
                                handler: Ext.bind(this.disconnectAction, this)
                            },
                            {

                                role: 'options-btn',
                                iconCls: 'options-button',
                                margin: '0 0 0 10',
                                ui: 'gray',
                                xtype: 'button',
                                menu: [
                                    {
                                        text: _l.trackers.console.auto_scroll,
                                        checked: true,
                                        checkHandler: Ext.bind(this.toggleAutoScroll, this)
                                    },
                                    {
                                        text: _l.trackers.console.show_time,
                                        checked: true,
                                        checkHandler: Ext.bind(this.toggleTime, this)
                                    },
                                    {
                                        text: _l.trackers.console.show_status,
                                        checked: true,
                                        checkHandler: Ext.bind(this.toggleStatus, this)
                                    },
                                    {
                                        text: _l.trackers.console.clear,
                                        handler: Ext.bind(this.clearAction, this)
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        role: 'console-inner',
                        cls: 'console-body',
                        xtype: 'container',
                        padding: 10,
                        margin: '10 0',
                        border: 1,
                        height: this.bodyHeight,
                        autoScroll: true
                    },
                    {
                        xtype: 'container',
                        role: 'console-action',
                        disabled: true,
                        layout: {
                            type: 'hbox',
                            align: 'top'
                        },
                        items: [
                            {
                                role: 'send-text',
                                xtype: 'textfield',
                                cls: 'dark-text-field',
                                emptyText: _l.trackers.console.send_empty,
                                height: 30,
                                flex: 1,
                                listeners:{
                                    afterrender: {
                                        fn: function (field) {
                                            if(field.el) {
                                                var nav = new Ext.util.KeyNav(field.el, {
                                                    "enter" : this.sendAction,
                                                    scope : this
                                                });
                                            }
                                        },
                                        scope: this
                                    }
                                }
                            },
                            {
                                role: 'send-btn',
                                xtype: 'button',
                                margin: '0 0 0 10',
                                scale: 'medium',
                                text: _l.trackers.console.send_btn,
                                handler: Ext.bind(this.sendAction, this)
                            }
                        ]
                    }
                ]
            },
            {
                role: 'status-grid',
                xtype: 'gridpanel',
                cls: 'status-panel',
                ui: 'light',
                title: _l.trackers.console.status_title,

                margin: '0 0 0 10',
                width: this.statusWidth,
                border: false,

                viewConfig: {
                    autoScroll: false,
                    stripeRows: false,
                    deferEmptyText: false,
                    enableTextSelection: true
                },
                enableColumnHide: false,
                enableColumnMove: false,
                enableColumnResize: false,
                hideHeaders: true,

                disableSelection: true,

                store: this.statusStore,
                columns: [
                    {
                        header: _l.trackers.console.status_property_title,
                        flex: 1,
                        dataIndex: 'name'
                    },
                    {
                        header: _l.trackers.console.status_value_title,
                        flex: 1,
                        dataIndex: 'value'
                    }
                ]
            }
        ];
    },

    getRecordData: function () {
        return this.record.getData() || false;
    },

    getConnectBtn: function () {
        return this.down('[role="connect-btn"]');
    },

    getDisconnectBtn: function () {
        return this.down('[role="disconnect-btn"]');
    },

    getAutoScrollBtn: function () {
        return this.down('[role="auto-scroll-btn"]');
    },

    getClearBtn: function () {
        return this.down('[role="clear-btn"]');
    },

    getSendBtn: function () {
        return this.down('[role="send_empty"]');
    },

    getSendText: function () {
        return this.down('[role="send-text"]');
    },

    getConsoleBody: function () {
        return this.down('[role="console-inner"]');
    },

    getConsoleActions: function () {
        return this.down('[role="console-action"]');
    },

    getStatusGrid: function () {
        return this.down('[role="status-grid"]');
    },

    toggleAutoScroll: function (cmp, state) {

        this.scrollBody = state;
    },

    toggleTime: function (cmp, state) {

        this.showTime = state;

        var target = this.getConsoleBody();

        if (target) {
            target.items.each(function (item) {
                item[this.showTime ? 'addCls' : 'removeCls']('show-time');
            }, this);
        }
    },

    toggleStatus: function (cmp, state) {

        this.showStatus = state;

        this.getStatusGrid()[this.showStatus ? 'show' : 'hide']();
    },

    clearAction: function () {
        this.getConsoleBody().removeAll();
    },

    connectAction: function () {

        Ext.API.getTrackerConnect({
            params: {
                tracker_id: this.getRecordData().id
            },
            callback: this.afterConnect,
            failure: this.afterConnect,
            scope: this
        });

        this.getEl().mask(_l.trackers.console.loading);
    },

    afterConnect: function (responce) {

        if (responce.success) {

            this.getConnectBtn().hide();
            this.getDisconnectBtn().show();
            this.getConsoleActions().enable();

            this.initSocket(responce);
        } else {
            this.updateSystem(_l.trackers.console.connection_failure);
        }

        this.getEl().unmask();
    },

    disconnectAction: function () {

        this.getConnectBtn().show();
        this.getDisconnectBtn().hide();
        this.getConsoleActions().disable();
        this.clearConnection();
    },

    sendAction: function () {
        var command = this.getSendText().getValue();

        if (command && this.connection) {
            this.updateOutput(command);

            this.getSendText().setValue('');

            this.connection.send(command);
        }
    },

    initSocket: function (data) {

        var deviceData = this.getRecordData(),
            dealerData = Ext.getStore('Dealer').first().getData(),
            connectionTpl = "{0}console?device={1}&key={2}&timestamp={3}&dealer_id={4}",
            connectionHeaders = Ext.String.format(connectionTpl,
                Config.terminalHost,
                deviceData.device_id,
                data.key,
                data.timestamp,
                dealerData.id
            );

        this.initConnection(connectionHeaders);
    },

    initConnection: function (headers) {
        this.clearConnection();

        this.connection = Ext.create('NavixyPanel.utils.WebSockets');

        this.connection.initConnection(headers, {
            onMessage: Ext.bind(this.handleMessage, this),
            onError: Ext.bind(this.handleError, this),
            onClose: Ext.bind(this.handleClose, this),
            onOpen: Ext.bind(this.handleOpen, this)
        });
    },

    clearConnection: function () {
        if (this.connection) {
            this.connection.disconnect();
            this.connection = null;
        }
    },

    handleMessage: function (message) {

        var messageData = JSON.parse(message.data);

        switch (messageData.type) {
            case 'status':
                this.updateStatus(messageData);
            break;
            case 'output':
                this.updateOutput(messageData);
            break;
        }
    },

    handleOpen: function () {
        this.updateSystem(_l.trackers.console.connect_msg);
    },

    handleClose: function () {
        this.updateSystem(_l.trackers.console.disconnect_msg);
    },

    handleError: function (error) {
        this.updateSystem(_l.trackers.console.error_msg);
    },

    updateStatus: function (messageData) {

        if (Ext.isArray(messageData.data) && this.statusStore) {
            var data = [],
                name, value, record;

            Ext.iterate(messageData.data, function (line) {

                name = line[0];
                value = line[1];
                record = this.statusStore.findRecord('name', name);

                if (record) {
                    record.set('value', value);
                } else {
                    this.statusStore.add({
                        name: name,
                        value: value
                    });
                }
            }, this);
        }
    },

    updateSystem: function (msg) {
        this.updateOutput({
            msg: msg,
            type: 'system'
        });
    },

    updateOutput: function (messageData) {

        var target = this.getConsoleBody(),
            containerConfig = {
                xtype: 'container',
                tpl: this.lineTpl,
                padding: '0 0 4 0',
                cls: this.showTime ? 'show-time' : '',
                data: {
                    text: Ext.isString(messageData)
                        ? messageData
                        : messageData.msg,
                    cls:  Ext.isString(messageData)
                        ? 'income'
                        : messageData.type,
                    time: Ext.Date.format(new Date(), '(H:i:s)')
                }
            };

        if (target) {
            target.add(containerConfig);

            if (this.scrollBody) {
                target.getEl().scroll("b", 10000);
            }
        }
    }
});
