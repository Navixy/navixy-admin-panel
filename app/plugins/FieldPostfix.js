/**
 * @class NavixyPanel.plugins.FieldPostfix
 * @extends Ext.Base
 */

Ext.define('NavixyPanel.plugins.FieldPostfix', {
    alias: 'plugin.fieldpostfix',
    postfix: '',
    units: null,
	allowZeroValues: null,
    constructor: function (config) {
        Ext.apply(this, config);
    },

    init: function (field) {
        this.field = field;
        field.on('afterrender', this.createPostfixEl, this, {single: true});
        this.textMetrics = new Ext.util.TextMetrics();
        this.initOnChange(field);
    },

    createPostfixEl: function (field) {
        var postfixEl = document.createElement('span');

        postfixEl.className = 'field-postfix';

        Ext.apply(postfixEl.style, {
            position: 'absolute',
            cursor: 'default',
            lineHeight: (field.inputEl.getHeight() || 27) + 'px'
        });

        if (this.units) {
            postfixEl.innerText = Ext.util.Format.units(field.value, this.units);
        } else {
            postfixEl.innerText = this.postfix;
        }

        this.postfixEl = postfixEl;

        field.inputCell.appendChild(this.postfixEl);

        this.changeFn(field, field.value);

        Ext.get(postfixEl).on('click', function () {
            field.inputEl.dom.click();
        });

    },

    changeFn: function (field, newVal) {
        if (this.useRaw) {
            newVal = field.getRawValue();
        }
        var el = Ext.get(this.postfixEl);
        if (el) {
            try {
                if (newVal || (this.allowZeroValues && newVal === 0)) {
                    var left = this.textMetrics.getWidth(newVal.toString()) + 10;

                    if (this.units) {
                        el.update(Ext.util.Format.units(newVal, this.units));
                    } else {
                        el.update(this.postfix);
                    }
                    el.setLocalX(left);
                    el.show();
                } else if (el) {
                    el.hide();
                }
            } catch (e) {
                Ext.log(e.stack);
            }
        }
    },

    applyPostfix: function (config) {
        if (config) {
            Ext.apply(this, config);
            this.changeFn(this.field, this.field.getValue());
        }
    },

    onBeforeDestroy: function (field) {
        field.clearListeners();
    },

    initOnChange: function (field) {
        field.on({
            change: this.changeFn,
            beforedestroy: this.onBeforeDestroy,
            scope: this
        });
    }

});