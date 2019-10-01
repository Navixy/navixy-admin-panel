/**
 * @class NavixyPanel.view.components.AbstractForm
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
    buttonsMargin: '10 5',

    record: null,
    applyRecord: true,
    backTarget: null,
    saveTarget: null,

    sendFormEnabled: true,

    initComponent: function () {

        this.defaults = this.getRowDefaults();

        this.title = this.getTitle();

        this.items = this.getItems();

        this.buttons = this.getButtons();

        this.callParent(arguments);
    },

    getRowDefaults: function () {
        return {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: this.getCellDefaults()
        };
    },

    getCellDefaults: function () {
        return {
            xtype: 'container',
            flex: 1,
            defaults: this.getFieldDefaults(),
            layout: {
                type: 'vbox'
            }
        };
    },

    getFieldDefaults: function () {
        return {
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
        };
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

                if (field.forceValue) {
                    field.setValue(field.forceValue);
                } else if (fieldValue !== undefined) {
                    field.setValue(fieldValue);
                }
            });
        }

        this.getForm().isValid();
    },

    getRecordData: function () {
        try {
            return this.record.getData() || false;
        } catch (e) {
            console.log(e, e.stack);
            return false;
        }
    },


    afterSave: function (value) {
        this.getForm().reset();
        this.backAfterSave(value);
    },

    sendForm: function () {
        var form = this.getForm();

        if (this.sendFormEnabled && form.isValid()) {
            this.fireEvent('formsubmit', this, this.getProcessedValues(), this.record);
        }
    },

    sendFormCreate: function () {
        var form = this.getForm();

        if (this.sendFormEnabled && form.isValid()) {
            this.sendFormEnabled = false;
            this.fireEvent('createsubmit', this, this.getProcessedValues(), this.record);
        }
    },

    getProcessedValues: function () {
        var values = this.getValues();

        this.iterateFields(function(field) {
            if (field.is('checkboxfield, checkbox')) {
                values[field.name] = field.getValue();
            }
        });

        return values;
    },

    doFormReset: function () {
        this.getForm().reset();
    },

    backFromForm: function () {
        if (this.backTarget) {
            Ext.Nav.shift(this.backTarget);
        } else {
            Ext.Nav.back();
        }
    },

    backAfterSave: function (value) {
        var saveTarget = this.gatSaveTarget(value);

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
        return _l.get('save_form_btn');
    },

    getClearBtnTitle: function () {
        return _l.get('clear_form_btn');
    },

    getCreateBtnTitle: function () {
        return _l.get('create_form_btn');
    },

    getBackBtnTitle: function () {
        return _l.get('back_form_btn');
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
                    Ext.apply({
                        padding: this.formCellsPadding
                    }, this.getSWItems())
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
                    margin: this.buttonsMargin,
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
                    margin: this.buttonsMargin,
                    handler: Ext.bind(this.doFormReset, this)
                }
            );
        }

        if (backBtn) {
            result.push(
                {
                    text: backBtn,
                    scale: 'medium',
                    ui: 'gray',
                    margin: this.buttonsMargin,
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
        return { items: [] };
    },


    iterateFields: function (fn, scope) {
        this.getForm().getFields().each(fn, scope || this);
    },

    showSubmitErrors: function (errCode, errors, errDescription) {
        var errLocale = _l.get('errors')[errCode] || false,
            codesMap = {
                206: 'login'
            };

        if (errors && Ext.isObject(errLocale) && errLocale.errors ) {
            Ext.iterate(errors, function(error) {
                var errText = error.error,
                    errParameter = error.parameter || '',
                    field;

                errParameter = errParameter.split(".");
                errParameter = errParameter[1] || errParameter[0] || false;

                field = errParameter
                    ? this.down('[name="' + errParameter + '"]')
                    : false;

                if (field) {
                    field.markInvalid(errLocale.errors[errParameter] || errText);
                }
            }, this);

        } else if (codesMap[errCode]) {
            var errText = errLocale || errDescription,
                errParameter = codesMap[errCode],
                field = this.down('[name="' + errParameter + '"]');

            if (field && errText) {
                field.markInvalid(errLocale || errDescription);
            }
        } else {
            Ext.MessageBox.show({
                title: _l.get('error') + ' #' + errCode,
                msg: errDescription,
                closable: false,
                buttons: Ext.MessageBox.OK
            });
        }
    }
});
