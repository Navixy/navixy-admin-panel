Ext.define('NavixyPanel.view.users.Card', {
    extend: 'Ext.Container',
    alias: 'widget.usercard',

    record: null,
    headerTpl: null,

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function () {

        if (!this.record) {
            return false;
        }

        this.items = this.getItems();

        this.callParent(arguments);
    },

    getItems: function () {

        return [
            {
                xtype: 'panel',
                ui: 'light',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                flex: 1,
                bodyPadding: 20,
                title: this.getPanelTitle(),
                items: this.getPanelItems()
            },
            {
                xtype: 'panel',
//                ui: 'transparent',
                ui: 'light',

                headerPosition: 'top',
                collapsible: true,
                collapseDirection: 'left',
                // TODO locale
                title: 'ссылки',
                width: 200
            }
        ]
    },

    getPanelTitle: function () {
        return 'TEST';
    },

    getPanelItems: function () {
        return [
            {
                xtype: 'container',
                tpl: this.makeHeaderTpl(),
                data: this.prepareHeaderData()
            },
            {
                xtype: 'tabpanel',
                border: 0,
                items: this.getTabPanelItems()
            }
        ];
    },

    getTabPanelItems: function () {
        return [
            {
                // TODO locale
                xtype: 'userslist',
                title: 'Cписок пользователей',
                createBtn: false,
                hasEdit: Ext.checkPermission('users', 'update')
            },
            {
                // TODO locale
                xtype: 'trackerslist',
                title: 'Трекеры пользователя',
                createBtn: false,
                filterType: 'user',
                filterValue: this.getRecordId(),
                hasEdit: Ext.checkPermission('trackers', 'edit')
            }
        ];
    },

    makeHeaderTpl: function () {
        return Ext.create('NavixyPanel.utils.CTemplate',
            '<p class="title">{title:htmlEncode}</p>'
//            '<tpl if="no_data">',
//            '<p>{no_data}<p>',
//            '<tpl else>',
//            '<tpl for="model">',
//            '<div class="gray block">{title:htmlEncode}: {model:htmlEncode}</div>',
//            '</tpl>',
//            '<tpl for="tariff">',
//            '<div class="gray block">{title:htmlEncode}: {tariff_name:htmlEncode}</div>',
//            '</tpl>',
//            '<tpl for="device_id">',
//            '<div class="gray block">{title:htmlEncode}: {device_id:htmlEncode}</div>',
//            '</tpl>',
//            '<tpl for="blocked">',
//            '<div class="gray block blocked">{[_l.online.widgets.blocked]}</div>',
//            '</tpl>',
//            '</tpl>'
        );
    },

    getRecordId: function () {
        return this.record.getId();
    },

    getRecordData: function () {
        return this.record.getData();
    },

    prepareHeaderData: function () {
        var recordData = this.getRecordData();

        return {
            title: recordData.legal_name || recordData.last_name + ' ' + recordData.first_name + ' ' + recordData.middle_name,
        };
    }
});
