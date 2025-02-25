/**
 * @class NavixyPanel.view.settings.components.InformationCenterSettings
 * @extends Ext.Panel
 * Description
 */

Ext.define('NavixyPanel.view.settings.components.InformationCenterSettings', {
    extend: 'Ext.Container',
    xtype: 'information-center-settings',
    requires: [
        'NavixyPanel.constants.InformationCenterLinks',
        'NavixyPanel.view.settings.components.InformationCenterPreview',
    ],
    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    record: null,
    RELEASE_NOTES: 'release_notes',
    USER_GUIDES: 'user_guides',
    previewWindow: null,

    initComponent: function () {
        this.items = this.getItems();
        this.callParent(arguments);
    },

    /**
     * @param recordKey {'release_notes'|'user_guides'}
     * @param options {object}
     * @param options.withLocale {boolean}
     * */
    getDefaultLink: function (recordKey, options) {
        var locale = (options || {}).withLocale ? Locale.Manager.getLocale() : '';

        return recordKey === this.RELEASE_NOTES
            ? NavixyPanel.constants.InformationCenterLinks.getReleaseNotesLink(locale === 'en' ? '' : locale)
            : NavixyPanel.constants.InformationCenterLinks.getDocsLink();
    },

    showPreviewWindow: function (link) {
        if (this.previewWindow) {
            this.previewWindow.close();
            this.previewWindow = null;
        }

        this.previewWindow = Ext.create('NavixyPanel.view.settings.components.InformationCenterPreview', {
            link: link,
        }).show();

        this.previewWindow.mon(Ext.getFirst('viewport'), {
            resize: function () {
                this.updateLayout();
            },
            scope: this.previewWindow,
        });
    },

    getCheckboxComponent: function (recordFieldName) {
        var labelTranslationKey = new Ext.Template('settings.custom_links.{name}').apply({ name: recordFieldName });
        var hintTranslationKey = new Ext.Template('settings.custom_links.{name}_hint').apply({ name: recordFieldName });
        var fieldId = new Ext.Template('#{itemId}_url').apply({ itemId: recordFieldName });

        return {
            xtype: 'checkbox',
            role: 'checkbox',
            boxLabel: _l.get(labelTranslationKey) + Ext.getHintSymbol(_l.get(hintTranslationKey)),
            name: recordFieldName,
            checked: this.record.get(recordFieldName),
            listeners: {
                change: function (checkboxCmp, value) {
                    var fieldCmp = checkboxCmp.up('form').down(fieldId);

                    fieldCmp.setDisabled(!value);
                },
            },
        };
    },

    getResetButtonComponent: function (recordKey) {
        var textfieldItemId = recordKey + '_url_field';
        var objectValue = this.record.get('information_center')[recordKey];
        var isButtonHidden = objectValue ? objectValue.content.type === 'default' : false;

        return {
            xtype: 'button',
            cls: 'no-opacity-btn',
            iconCls: 'reset-button',
            ui: 'gray',
            height: 28,
            hidden: isButtonHidden,
            style: {
                left: '414px',
                margin: '0 0 0 -36px',
            },
            tooltip: _l.get('settings.custom_links.restore_default_link'),
            scope: this,
            hideMode: 'visibility',
            name: recordKey + '_reset_button',
            handler: function (buttonCmp) {
                var textfield = buttonCmp.up().down('#' + textfieldItemId);

                if (textfield) {
                    var restoreDefaultValue = Ext.bind(function () {
                        textfield.setValue(this.getDefaultLink(recordKey));
                        // The buttonCmp.hide() and similar methods trigger re-layout
                        buttonCmp.getEl().setVisible(false);
                    }, this);

                    if (textfield.getValue()) {
                        Ext.MessageBox.on('beforeshow', function (messageBoxCmp) {
                            var noButton = messageBoxCmp.bottomTb.getComponent('no');

                            if (noButton) {
                                noButton.setUI('gray');
                            }
                        }, { once: true });

                        Ext.MessageBox.show({
                            scope: this,
                            title: _l.get('settings.custom_links.confirm_action'),
                            msg: _l.get('settings.custom_links.restore_default_link') + '?',
                            buttons: Ext.MessageBox.YESNO,
                            layout: { pack: 'center' },
                            width: Locale.Manager.getLocale() === 'ru' ? 360 : 'auto',
                            fn: function (result) {
                                if (result === 'yes') {
                                    restoreDefaultValue();
                                }
                            },
                        });
                    } else {
                        restoreDefaultValue();
                    }
                }
            },
        };
    },

    getPreviewButton: function (recordKey) {
        var defaultLink = this.getDefaultLink(recordKey, { withLocale: true });

        return {
            xtype: 'button',
            iconCls: 'eye-button',
            height: 28,
            scope: this,
            tooltip: _l.get('settings.custom_links.preview_the_link'),
            name: recordKey + '_preview_button',
            handler: function (buttonCmp) {
                var textfield = buttonCmp.up().down('#' + recordKey + '_url_field');

                if (textfield) {
                    var link = textfield.getValue();

                    this.showPreviewWindow(defaultLink.indexOf(link) > -1 ? defaultLink : link);
                }
            },
        };
    },

    getTextfieldComponent: function (recordKey, options) {
        var key = recordKey + '_url';
        var resetButtonSelector = new Ext.Template('[name={buttonName}]').apply({ buttonName: recordKey + '_reset_button' });
        var previewButtonSelector = new Ext.Template('[name={buttonName}]').apply({ buttonName: recordKey + '_preview_button' });

        var baseTextfield = {
            xtype: 'textfield',
            vtype: 'basicurl',
            name: key,
            msgTarget: 'under',
            margin: 0,
            value: this.record.get(key),
            allowBlank: false,
            maxLength: 255,
            width: 414,
            listeners: {
                scope: this,
                change: function (textfieldCmp, value) {
                    var resetButton = textfieldCmp.up().down(resetButtonSelector);

                    if (!resetButton) {
                        return;
                    }

                    var resetButtonEl = resetButton.getEl();

                    if (!resetButtonEl.isVisible()) {
                        resetButtonEl.setVisible(true);
                    } else if (value && this.getDefaultLink(recordKey).indexOf(value) > -1) {
                        resetButtonEl.setVisible(false);
                    }
                },
                validitychange: function (textfieldCmp, isValid) {
                    var previewBtn = textfieldCmp.up().down(previewButtonSelector);

                    if (previewBtn) {
                        previewBtn.setDisabled(!isValid);
                    }
                },
            },
        };

        return Ext.apply(baseTextfield, options || {});
    },

    getFieldcontainerComponent: function (recordKey) {
        var itemId = recordKey + '_url';
        var textfieldItemId = itemId + '_field';
        var emptyText = recordKey === this.RELEASE_NOTES
            ? NavixyPanel.constants.InformationCenterLinks.getReleaseNotesLink()
            : NavixyPanel.constants.InformationCenterLinks.getDocsLink();

        return {
            xtype: 'fieldcontainer',
            itemId: itemId,
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'start',
            },
            disabled: !this.record.get(recordKey),
            items: [
                this.getTextfieldComponent(recordKey, { itemId: textfieldItemId, emptyText: emptyText }),
                this.getResetButtonComponent(recordKey),
                this.getPreviewButton(recordKey),
            ],
        };
    },

    getItems: function () {
        return [
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.support'),
            },
            this.getCheckboxComponent(this.RELEASE_NOTES),
            this.getFieldcontainerComponent(this.RELEASE_NOTES),
            { xtype: 'component', margin: '0 0 8 0' },
            this.getCheckboxComponent(this.USER_GUIDES),
            this.getFieldcontainerComponent(this.USER_GUIDES),
        ];
    },
});
