/**
 * @class NavixyPanel.view.user.USerCreate
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.components.AbstractForm', {
    extend: 'Ext.form.Panel',
    singleCmp: true,

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
    saveTarget: null,

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
            this.applyRecordData();
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

        this.getForm().isValid();
    },

    getRecordData: function () {
        return this.record.getData() || false;
    },


    afterSave: function () {
        this.getForm().reset();
        this.backAfterSave();
    },

    sendForm: function () {
        var form = this.getForm();

        if (form.isValid()) {
            this.fireEvent('formsubmit', this, this.getProcessedValues(), this.record);
        }
    },

    getProcessedValues: function () {
        var values = this.getValues();

        this.iterateFields(function(field) {
            if (field.getXType() === 'checkboxfield') {
                values[field.name] = field.getValue();
            }
        });

        return values;
    },


    backFromForm: function () {
        if (this.backTarget) {
            Ext.Nav.shift(this.backTarget);
        } else {
            Ext.Nav.back();
        }
    },

    backAfterSave: function () {
        var saveTarget = this.gatSaveTarget();

        if (saveTarget) {
            Ext.Nav.shift(saveTarget);
        } else {
            this.backFromForm();
        }
    },

    gatSaveTarget: function () {
        return this.saveTarget;
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
        ];
    },

    getButtons: function () {

        var saveBtn = this.getSaveBtnTitle(),
            clearBtn = this.getClearBtnTitle(),
            backBtn = this.getBackBtnTitle(),
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

        result.push(
            {
                text: backBtn,
                scale: 'medium',
                ui: 'gray',
                margin: '10 5',
                handler: Ext.bind(this.backFromForm, this)
            }
        );

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

    showSubmitErrors: function (errCode, errors, errDescription) {
        var errLocale = _l.errors[errCode] || false,
            codesMap = {
                206: 'login'
            };

        if (errors && Ext.isObject(errLocale) && errLocale.errors ) {
            Ext.iterate(errors, function(error) {
                var errText = error.error,
                    errParameter = error.parameter || '',
                    field;

                errParameter = errParameter.split(".");
                errParameter = errParameter[1] || false;

                field = errParameter
                    ? this.down('[name="' + errParameter + '"]')
                    : false;

                if (field) {
                    field.markInvalid(errLocale.errors[errParameter] || errText)
                }
            }, this);

        } else if (codesMap[errCode]) {
            var errText = errLocale || errDescription,
                errParameter = codesMap[errCode],
                field = this.down('[name="' + errParameter + '"]');

            if (field && errText) {
                field.markInvalid(errLocale || errDescription);
            }
        }
    }
});