/**
 * @class NavixyPanel.view.widgets.fields.ImportField
 * @extends Ext.form.field.TextArea
 * Description
 */

Ext.define('NavixyPanel.view.widgets.fields.ImportField', {
    extend: 'Ext.form.field.TextArea',
    alias: 'widget.import-field',
    ui: 'light',
    cls: 'step-field',

    width: 330,
    rows: 7,

    enforceMaxLength: true,
    msgTarget: 'under',
    enableKeyEvents: true,

    localePart: null,

    activeMessage: null,
    activeMessages: null,
    lastActiveMessage: '',
    messageCls: 'has-message',

    localePartSelector: 'bundles.import.import_hints',

    importReg: /(\d{15})/gm,
    errorReg: /(\d+)/gm,

    initComponent: function () {
        if (this.localePartSelector) {
            this.localePart = _l.get(this.localePartSelector);
        }

        this.applyListeners();

        this.callParent(arguments);
    },

    afterRender: function () {
        this.callParent(arguments);
    },

    applyListeners: function () {
        this.on({
            change: this.showMessage,
            blur: this.showMessage,
            focus: this.showMessage,
            scope: this
        });
        this.on({
            keyup: this.showMessage,
            scope: this,
            buffer: 500
        })
    },

    getValue: function () {
        var value = this.callParent(arguments),
            result = value.match(this.importReg);

        return result && result.length ? Ext.Array.unique(result) : [];
    },

    getValueErrors: function () {
        var value = Ext.form.field.TextArea.prototype.getValue.call(this),
            arr = value.match(this.importReg) || [],
            miss = value.replace(this.importReg).match(this.errorReg) || [];

        return {
            miss: miss.length,
            rep: arr.length - this.getValue().length
        };
    },

    showMessage: function () {
        var imei_cnt = this.getValue().length,
            notices = [],
            errors = this.getValueErrors();

        if (errors.miss) {
            notices.push(Ext.String.format(this.localePart.get('list_miss'), Ext.util.Format.units(errors.miss, 'codes', true)))
        }

        if (errors.rep) {
            notices.push(Ext.String.format(this.localePart.get('list_rep'), Ext.util.Format.units(errors.rep, 'codes', true)))
        }

        if (!imei_cnt && !notices.length) {
            if (this.hasFocus) {
                this.setActiveMessages(this.localePart.get('enter_list'));
            } else {
                this.setActiveError(this.localePart.get('enter_list_no_focus'));
            }
        } else {
            notices.unshift(Ext.String.format(this.localePart.get('list_count'), Ext.util.Format.units(imei_cnt, 'codes', true)));
            this.setActiveMessages(notices.join('<br>'));
        }
    },

    resetValue: function (errText, noFocus) {
        this.setValue('');
        if (!noFocus) {
            this.focus();
        }
        if (errText) {
            this.setActiveMessages(errText);
        } else {
            this.showMessage()
        }
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