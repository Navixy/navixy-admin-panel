Ext.define('NavixyPanel.view.users.Card', {
    extend: 'Ext.Container',
    alias: 'widget.usercard',
    singleCmp: true,

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
                bodyPadding: 10,
                title: this.getPanelTitle(),
                items: this.getPanelItems()
            },
            {
                xtype: 'panel',
                ui: 'transparent',
//                ui: 'light',

//                headerPosition: 'top',
//                collapsible: true,
//                collapseDirection: 'left',
                // TODO locale
//                title: 'ссылки',
                width: 250,
                bodyPadding: '10 0 10 30',
                items: this.getLinks()
            }
        ]
    },

    getLinks: function () {
        var me = this;
        return [
            {
                xtype: 'button',
                ui: 'none',
                text: 'Создать сессию',
                width: 100,
                cls: 'link',
                listeners: {
                    click: {
                        fn: me.fireSessionCreate,
                        scope: me
                    }
                }
            }
        ]
    },

    getPanelTitle: function () {
        return false;
    },

    getPanelItems: function () {
        return [
            {
                xtype: 'container',
                padding: '10 10 40 10',
                tpl: this.makeHeaderTpl(),
                data: this.prepareHeaderData()
            },
            {
                xtype: 'tabpanel',
                ui: 'light',
                border: 0,
                items: this.getTabPanelItems()
            }
        ];
    },

    getTabPanelItems: function () {
        return [
            {
                // TODO locale
                xtype: 'trackerslist',
                title: 'Трекеры пользователя',
                createBtn: false,
                filter: {
                    user_id: this.getRecordId()
                },
                hasEdit: Ext.checkPermission('trackers', 'edit')
            }
        ];
    },

    makeHeaderTpl: function () {
        return Ext.create('NavixyPanel.utils.CTemplate',
            '<div class="card-header-inner">',
                '<div class="title">',
                    '{title:htmlEncode}',
                    '<tpl if="title_add">',
                        '<span class="title-add">{title_add:htmlEncode}</span>',
                    '</tpl>',
                '</div>',
                '<table class="header-table">',
                    '<tpl for="id">',
                        '<tr>',
                            '<td>{title:htmlEncode}</td>',
                            '<td></td>',
                            '<td>{value:htmlEncode}</td>',
                        '</tr>',
                    '</tpl>',
                    '<tpl for="login">',
                        '<tr>',
                            '<td>{title:htmlEncode}</td>',
                            '<td></td>',
                            '<td>{value:htmlEncode}</td>',
                        '</tr>',
                    '</tpl>',
                    '<tpl for="active">',
                        '<tr>',
                            '<td>{title:htmlEncode}</td>',
                            '<td></td>',
                            '<td>{value:htmlEncode}</td>',
                        '</tr>',
                    '</tpl>',
                    '<tpl for="city">',
                        '<tr>',
                            '<td>{title:htmlEncode}</td>',
                            '<td></td>',
                            '<td>{value:htmlEncode}</td>',
                        '</tr>',
                    '</tpl>',
                    '<tpl for="city_legal">',
                        '<tr>',
                            '<td>{title:htmlEncode}</td>',
                            '<td></td>',
                            '<td>{value:htmlEncode}</td>',
                        '</tr>',
                    '</tpl>',
                    '<tpl for="legal_type">',
                        '<tr>',
                            '<td>{title:htmlEncode}</td>',
                            '<td></td>',
                            '<td>{value:htmlEncode}</td>',
                        '</tr>',
                    '</tpl>',
                '</table>',
            '</div>'
        );
    },

    getRecordId: function () {
        return this.record.getId();
    },

    getRecordData: function () {
        return this.record.getData();
    },

    prepareHeaderData: function () {
        var recordData = this.getRecordData(),
            fio = recordData.last_name + ' ' + recordData.first_name + ' ' + recordData.middle_name;

        return {
            title: recordData.legal_name || recordData.last_name + ' ' + recordData.first_name + ' ' + recordData.middle_name,
            title_add: recordData.legal_name && fio,
            id: {
                title: _l.users.fields.user_id_exp,
                value: this.getRecordId()
            },
            login: {
                title: _l.users.fields.login_short,
                value: recordData.login
            },
            active: {
                title: _l.users.fields.activated_short.title,
                value: _l.users.fields.activated_short[recordData.active ? 'status_true' : 'status_false']
            },
            city: {
                title: _l.users.fields.post_city,
                value: recordData.post_city
            },
            city_legal: {
                title: _l.users.fields.registered_city,
                value: recordData.registered_city
            },
            legal_type: {
                title: _l.users.fields.legal_type,
                value: _l.users.fields[recordData.legal_type] || ''
            }
        };
    },

    fireSessionCreate: function () {
        console.log(this.record);
        this.fireEvent('createsession', this.record);
    },
});
