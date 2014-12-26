/**
 * @class NavixyPanel.view.widgets.fields.IMEIfield
 * @extends Ext.form.field.Number
 * Description
 */

Ext.define('NavixyPanel.view.widgets.fields.IMEIField', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.imei-field',
    ui: 'light',
    cls: 'step-field',

    width: 250,

    vtype: 'numeric',
    maxLength: 15,
    enforceMaxLength: true,
    msgTarget: 'under',

    localePart: null,

    activeMessage: null,
    activeMessages: null,
    lastActiveMessage: '',
    messageCls: 'has-message',

    localePartSelector: 'bundles.scan.imie_hints',

    initComponent: function () {
        if (this.localePartSelector) {
            this.localePart = _l.get(this.localePartSelector);
        }

        this.applyListeners();

        this.callParent(arguments);
    },

    applyListeners: function () {
        this.on({
            blur: this.checkScanFocus,
            focus: this.checkScanFocus,
            specialkey: function(f, event) {
                if (event.getKey() == event.ENTER) {
                    this.onScanFilled();
                }
            },
            scope: this
        })
    },

    setIMEI: function (value) {
        this.setValue(value);
        this.onScanFilled();
    },


    checkScanFocus: function () {
        if (!this.isDisabled()) {
            if (this.hasFocus) {
                this.setActiveMessage(this.localePart.get('imei_ready'));
            } else {
                this.resetValue(this.localePart.get('imei_focus_lose'), true);
            }
        }
    },

    onScanFilled: function (force, text) {
        var value = this.getValue(),
            errText = text || this.localePart.get('imei_invalid');

        if (value) {
            if (this.preValidate(value) && !force) {
                this.disable();
                this.doServerAction(value);
            } else {
                this.resetValue(errText);
                this.fireEvent('input-error', value);
            }
        }
    },

    preValidate: function (value) {
        var str = value.toString();
        return value && str && str.length === 15
    },

    resetValue: function (errText, noFocus) {
        this.setValue('');
        if (!noFocus) {
            this.focus();
        }
        this.setActiveErrors(errText);
    },

    doServerAction: function (imei) {
        Ext.API.getBundles({
            params: {
                imei: imei
            },
            callback: this.afterServerAction,
            failure: this.afterServerActionFailure,
            scope: this
        });
    },

    afterServerAction: function (response) {
        var data = response && response.value,
            bundle = Ext.create('NavixyPanel.model.Bundle', data);

        this.fireEvent('boundle-found', bundle);
    },

    afterServerActionFailure: function () {
        var value = this.getValue();

        this.enable();
        this.fireEvent('input-error', value);
        this.fireEvent('server-error', value);
        this.resetValue(Ext.String.format(this.localePart.get('imei_not_found'), value));
    },

    unsetActiveError: function() {
        delete this.activeError;
        delete this.activeErrors;
        this.renderActiveMessage();
        this.renderActiveError();
    },

    setActiveErrors: function(errors) {
        this.unsetActiveMessage();
        this.callParent(arguments);
        this.doComponentLayout();
    },

    getActiveMessage : function() {
        return this.activeMessage || '';
    },

    hasActiveMessages: function() {
        return !!this.getActiveMessage();
    },

    setActiveMessage: function(msg) {
        this.setActiveMessages(msg);
    },

    getActiveMessages: function() {
        return this.activeMessages || [];
    },

    setActiveMessages: function(messages) {
        this.unsetActiveError();

        messages = Ext.Array.from(messages);
        this.activeMessage = messages[0];
        this.activeMessages = messages;
        this.activeMessage = this.getTpl('activeErrorsTpl').apply({
            errors: messages,
            listCls: Ext.plainListCls
        });
        this.renderActiveMessage();
        this.doComponentLayout();
    },

    unsetActiveMessage: function() {
        delete this.activeMessage;
        delete this.activeMessages;
        this.renderActiveError();
        this.renderActiveMessage();
    },

    renderActiveMessage: function() {
        var me = this,
            activeMessage = me.getActiveMessage(),
            hasMessage = !!activeMessage;

        if (activeMessage !== me.lastActiveMessage) {
            me.fireEvent('errorchange', me, activeMessage);
            me.lastActiveMessage = activeMessage;
        }

        if (me.rendered && !me.isDestroyed && !me.preventMark) {
            // Add/remove invalid class
            me.el[hasMessage ? 'addCls' : 'removeCls'](me.messageCls);

            // Update the aria-invalid attribute
            me.getActionEl().dom.setAttribute('aria-invalid', hasMessage);

            // Update the errorEl (There will only be one if msgTarget is 'side' or 'under') with the error message text
            if (me.errorEl) {
                me.errorEl.dom.innerHTML = activeMessage;
            }
        }
    },
});