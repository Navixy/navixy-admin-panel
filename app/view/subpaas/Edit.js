/**
 * @class NavixyPanel.view.subpaas.Edit
 * @extends NavixyPanel.view.subpaas.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.subpaas.Edit', {
    extend: 'NavixyPanel.view.subpaas.AbstractForm',
    alias: 'widget.subpaasedit',

    getTitle: function () {
        var titleTpl = new Ext.XTemplate(
            _l.get('subpaas.edit_form.title'),
            ' #{subpaas_id}: {title}'
        )
        return titleTpl.apply(this.getRecordData())
    },

    getSaveBtnTitle: function () {
        return _l.get('subpaas.edit_form.save_btn')
    },

    getClearBtnTitle: function () {
        return false
    },

    getSEItems: function () {
        var items = this.callParent(arguments)

        return items.concat([
            {
                fieldLabel: _l.get('subpaas.fields.contact_fio'),
                name: 'contact_fio',
                minLength: 2,
                maxLength: 100,
                allowBlank: true
            },

            {
                fieldLabel: _l.get('subpaas.fields.contact_post'),
                name: 'contact_post',
                minLength: 2,
                maxLength: 50,
                allowBlank: true
            },

            {
                fieldLabel: _l.get('subpaas.fields.contact_phone'),
                name: 'contact_phone',
                minLength: 2,
                maxLength: 100,
                allowBlank: true
            }
        ])
    },


    getNWItems: function () {
        var config = this.callParent(arguments)

        return [
            {
                xtype: 'hiddenfield',
                name: 'subpaas_id'
            },
            config[0],
            config[1],
            config[2],
            config[3],

            {
                xtype: 'combobox',
                editable: false,
                tpl: Ext.create('Ext.XTemplate',
                    '<tpl for=".">',
                    '<tpl if="values.type==\'INITIAL_BLOCK\'">',
                    '<div class="x-boundlist-item" style="position: absolute;width: 0;"></div>',
                    '<tpl else>',
                    '<div class="x-boundlist-item">{label}</div>',
                    '</tpl>',
                    '</tpl>'
                ),
                store: Ext.create('Ext.data.Store', {
                    fields: ['type', 'label'],
                    data: [{
                        type: 'INITIAL_BLOCK',
                        label: _l.get('subpaas.block_status.INITIAL_BLOCK')
                    }, {
                        type: 'NOT_BLOCKED',
                        label: _l.get('subpaas.block_status.NOT_BLOCKED')
                    }, {
                        type: 'BLOCK_LOGIN',
                        label: _l.get('subpaas.block_status.BLOCK_LOGIN')
                    }, {
                        type: 'CLIENTS_BLOCKED',
                        label: _l.get('subpaas.block_status.CLIENTS_BLOCKED')
                    }]
                }),
                fieldLabel: _l.get('subpaas.fields.block_type'),
                name: 'block_type',
                valueField: 'type',
                displayField: 'label',
                allowBlank: true,
                listeners: {
                    change: function (cbx, status) {
                        var readonly = status === 'INITIAL_BLOCK'
                        if (readonly) {
                            cbx.setReadOnly(readonly)
                            cbx.el.addCls('x-item-disabled')
                        }
                    }
                }
            }
        ]
    }
})
