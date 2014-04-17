/**
 * @class NavixyPanel.view.user.USerCreate
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.components.AbstractForm', {
    extend: 'Ext.form.Panel',

    layout: {
        type: 'vbox'
    },

    ui: 'light',

    bodyPadding: '10 20 60 25',
    buttonAlign: 'center',

    formCellsPadding: '0 0 0 100',
    formRowPadding: '20 0 0 0',
    fieldRequiredMark: false,

    record: null,
    applyRecord: true,
    backTarget: null,

    destroyOnClose: false,

    initComponent: function () {

        var fieldDefaults = {
                xtype: 'textfield',
                labelWidth: 200,
                width: 450,

                allowBlank: false,
                msgTarget: 'under',

                labelPad: 10,
                labelAlign: 'right',
                labelSeparator: this.fieldRequiredMark ? '' : ':',
                afterLabelTextTpl: this.fieldRequiredMark ? new Ext.XTemplate('<tpl if="allowBlank === false"><sup>*</sup>:<tpl else>:</tpl>', { disableFormats: true }) : null,

                ui: 'light'
            },
            cellDefaults = {
                xtype: 'container',
                flex: 1,
                defaults: fieldDefaults,
                layout: {
                    type: 'vbox'
                }
            },
            rowDefaults = {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                defaults: cellDefaults
            };

        this.defaults = rowDefaults;

        this.title = this.getTitle();

        this.items = this.getItems();

        this.buttons = this.getButtons();

        this.callParent(arguments);
    },

    afterFirstLayout: function () {

        if (this.applyRecord && this.record) {
            this.applyRecordData()
        }

        this.callParent(arguments);
    },

    applyRecordData: function () {
        var recordData = this.getRecordData(),
            fieldName, fieldValue, fieldType;

        if (recordData) {
            this.iterateFields(function(field) {
                fieldName = field.name;
                fieldType = field.getXType();
                fieldValue = recordData[fieldName];

                if (fieldValue) {
                    field.setValue(fieldValue);
                }
            });
        }
    },

    getRecordData: function () {
        return this.record.getData() || false;
    },


    afterSave: function () {
        this.getForm().reset();
        this.doHarakiri();
    },

    sendForm: function () {
        var form = this.getForm();

        if (form.isValid()) {
            console.log('formsubmit');
            this.fireEvent('formsubmit', this, form.getValues(), this.record);
        }
    },


    backFromForm: function () {
        if (this.backTarget) {
            Ext.Navigator.goTo(this.backTarget);
            this.doHarakiri();
        }
    },

    getTitle: function () {
        return '';
    },

    getSaveBtnTitle: function () {
        return _l.save_form_btn;
    },

    getClearBtnTitle: function () {
        return _l.clear_form_btn;
    },

    getBackBtnTitle: function () {
        return _l.back_form_btn;
    },

    getItems: function () {
        return [
            {
                items: [
                    {
                        items: this.getNWItems()
                    },
                    {
                        padding: this.formCellsPadding,
                        items: this.getNEItems()
                    }
                ]
            },
            {
                padding: this.formRowPadding,
                items: [
                    {
                        items: this.getSEItems()
                    },
                    {
                        padding: this.formCellsPadding,
                        items: this.getSWItems()
                    }
                ]
            }
        ]
    },

    getButtons: function () {

        var saveBtn = this.getSaveBtnTitle(),
            clearBtn = this.getClearBtnTitle(),
            backBtn = this.backTarget && this.getBackBtnTitle(),
            result = [];

        if (saveBtn) {
            result.push(
                {
                    text: saveBtn,
                    scale: 'medium',
                    formBind: true,
                    disabled: true,
                    margin: '10 5',
                    handler: Ext.bind(this.sendForm, this)
                }
            );
        }

        if (clearBtn) {
            result.push(
                {
                    text: clearBtn,
                    scale: 'medium',
                    ui: 'gray',
                    margin: '10 5',
                    handler: function() {
                        this.up('form').getForm().reset();
                    }
                }
            );
        }

        if (backBtn) {
            result.push(
                {
                    text: backBtn,
                    scale: 'medium',
                    ui: 'gray',
                    margin: '10 5',
                    handler: Ext.bind(this.backFromForm, this)
                }
            );
        }

        return result;
    },

    // Left-top corner
    getNWItems: function () {
        return [];
    },

    // Right-top corner
    getNEItems: function () {
        return [];
    },

    // Right-bottom corner
    getSEItems: function () {
        return [];
    },

    // Left-bottom corner
    getSWItems: function () {
        return [];
    },


    iterateFields: function (fn, scope) {
        this.getForm().getFields().each(fn, scope || this);
    },


    // TODO: test this shit
    doHarakiri: function () {
        if (this.destroyOnClose) {

            Ext.defer(function () {
                try {
                    var parent = this.up();

                    parent.remove(this, true);
                } catch(e) {}
            }, 100, this);
        }
    }
});