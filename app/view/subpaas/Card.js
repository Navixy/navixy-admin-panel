Ext.define('NavixyPanel.view.subpaas.Card', {
    extend: 'NavixyPanel.view.components.AbstractCard',
    alias: 'widget.subpaascard',
    stateful: true,
    stateId: 'subpaasCard',
    getItemsConfig: function () {
        if (this.getRecordData() === false) {
            return [{
                xtype: 'panel',
                ui: 'light',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                flex: 1,
                bodyPadding: '10 20',
                title: this.getPanelTitle(),
                items: [{
                    xtype: 'component',
                    html: _l.get('errors.subpaas.252'),
                    style: 'font-size:15px;color: #f44336 !important;',
                    margin: '0 0 10 0'
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'button',
                        text: _l.get('back_form_btn'),
                        ui: 'gray-small',
                        handler: Ext.Nav.back
                    }, {
                        xtype: 'component',
                        flex: 1
                    }]
                }]
            }]
        }

        return this.callParent(arguments)
    },

    getLinks: function () {
        var me = this,
            result = [
                {
                    xtype: 'component',
                    height: 10
                }
            ],
            recordData = this.getRecordData()
        console.log(recordData.block_type)
        if (Ext.checkPermission('subpaas', 'read')) {
            if (recordData.block_type === 'NOT_BLOCKED') {
                result.push({
                    html: '<a>' + _l.get('subpaas.card.links.session_text') + '</a>',
                    listeners: {
                        click: {
                            fn: me.fireSubpaasSessionCreate,
                            scope: me
                        }
                    }
                })
            } else {
                result.push({
                    html: ['<a class="x-item-disabled" data-qtip="',
                        _l.get('subpaas.block_status')[recordData.block_type],
                        '">', _l.get('subpaas.card.links.session_text'), '</a>'].join('')
                })
            }
        }

        if (Ext.checkPermission('subpaas', 'update')) {
            result.unshift({
                html: '<a>' + _l.get('subpaas.card.links.subpaas_change_password') + '</a>',
                listeners: {
                    click: {
                        fn: me.fireSubPaasChangePassword,
                        scope: me
                    }
                }
            })


            result.unshift({
                html: '<a>' + _l.get('subpaas.card.links.subpaas_edit') + '</a>',
                listeners: {
                    click: {
                        fn: me.fireSubPaasEdit,
                        scope: me
                    }
                }
            })
        }

        return result
    },

    fireSubpaasSessionCreate: function () {
        this.fireEvent('subpaaspanellogin', this.getSubPaasId())
    },


    getPanelTitle: function () {
        return false
    },

    prepareHeaderData: function () {
        var recordData = this.getRecordData()

        return {
            title: recordData.name,
            title_add: recordData.login,
            main_cls: 'card-header-inner',
            table_cls: 'header-table',
            fields: [
                {
                    title: _l.get('subpaas.fields.subpaas_id'),
                    value: this.getRecordId()
                },
                {
                    title: _l.get('subpaas.fields.title'),
                    value: recordData.title || '—'
                }, {
                    title: _l.get('subpaas.fields.email'),
                    value: recordData.email || '—'
                }, {
                    title: _l.get('subpaas.fields.link_monitoring'),
                    value: recordData.link_monitoring || '—'
                },
                {
                    title: _l.get('subpaas.fields.block_type'),
                    no_encode: true,
                    value: [
                        '<span class="subpaas-status--' + recordData.block_type + '">',
                        _l.get('subpaas.block_status')[recordData.block_type],
                        '</span>'
                    ].join('')
                },

                {
                    title: _l.get('subpaas.fields.users_count'),
                    value: recordData.users_count
                },
                {
                    title: _l.get('subpaas.fields.active_users_count'),
                    value: recordData.active_users_count
                },
                {
                    title: _l.get('subpaas.fields.trackers_count'),
                    value: recordData.trackers_count
                },
                {
                    title: _l.get('subpaas.fields.active_trackers_count'),
                    value: recordData.active_trackers_count
                }
            ]
        }
    },


    getPanelItemsConfig: function () {
        var items = this.callParent(arguments)

        var recordData = this.getRecordData()
        // if (recordData.block_type === 'INITIAL_BLOCK') {
        console.warn('REMOVE THIS ASAP')
        if (recordData.block_type === 'NOT_BLOCKED') {
            items.splice(1, 0, {
                xtype: 'container',
                padding: 10,
                items: [{
                    xtype: 'button',
                    minWidth: 150,
                    text: 'PAY'
                }]
            })
        }

        return items
    },

    prepareBodyLeftData: function () {
        var recordData = this.getRecordData()

        return {
            main_cls: 'card-body-inner',
            table_cls: 'body-table',
            fields: [
                {
                    title: _l.get('subpaas.fields.creation_date'),
                    value: recordData.creation_date ? Ext.Date.formatISO(recordData.creation_date, Ext.util.Format.dateFormat) : '—'
                }, {
                    title: _l.get('subpaas.fields.jur_name'),
                    value: recordData.jur_name || '—'
                },
                {
                    title: _l.get('subpaas.fields.jur_country'),
                    value: recordData.jur_country || '—'
                },
                {
                    title: _l.get('subpaas.fields.contact_fio'),
                    value: recordData.contact_fio || '—'
                },
                {
                    title: _l.get('subpaas.fields.contact_post'),
                    value: recordData.contact_post
                },
                {
                    title: _l.get('subpaas.fields.contact_phone'),
                    value: recordData.contact_phone || '—'
                }
            ]
        }
    },

    getSubPaasId: function () {
        return this.record.getId()
    },

    fireSubPaasEdit: function () {
        this.fireEvent('subpaasedit', this.record)
    },

    fireSubPaasChangePassword: function () {
        Ext.Nav.shift('subpaas/' + this.record.getId() + '/change_password')
    },

    toggleActivationPanel: function () {
        this.fireEvent('toggleactivationpanel')
    }
})












