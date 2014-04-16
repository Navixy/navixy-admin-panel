/**
 * @class NavixyPanel.plugins.InputMask
 * @extends Ext.Base
 * Uses http://github.com/RobinHerbots/jquery.inputmask
 */

Ext.define('NavixyPanel.plugins.InputMask', {
    alias: 'plugin.inputmask',
    dependencies: [
        'Lib.jquery.jQuery',
        'Lib.inputmask.MaskedInputV1'
    ],
    placeholder: '_',
    options: {},
    constructor: function (config) {
        Ext.apply(this, config);
    },

    init: function (cmp) {
        this.cmp.on('afterrender', this.initInputMask, this, {single: true});

    },

    overrideSetValue: function () {
        var me = this,
            setValue = this.cmp.setValue;

        this.cmp.setValue = function (value) {
            setValue.apply(me.cmp, arguments);

            var displayValue = Ext.isPrimitive(value) ? value : me.cmp.getValue();

            $(me.cmp.inputEl.dom).val(displayValue);

            if (displayValue) {
                $(me.cmp.inputEl.dom).blur();
            }
        };

        this.cmp.getValue = function () {
            return $(me.cmp.inputEl.dom).val();
        };
    },

    initInputMask: function () {
        var me = this,
            cmpInput = this.cmp.inputEl.dom;
        this.overrideSetValue();

        $(cmpInput).inputmask(Ext.apply({
            mask: this.mask,
            autoUnmask: true,
            placeholder: this.placeholder
        }, this.options));

        $(cmpInput).inputmask(this.mask, Ext.apply({
            autoUnmask: true,
            "oncomplete": function () {
                me.cmp.fireEvent('maskcomplete', me.cmp, $(cmpInput).val());
            },

            "onincomplete": function () {
                me.cmp.fireEvent('maskincomplete', me.cmp, $(cmpInput).val());
            }
        }, this.options));

    }

});