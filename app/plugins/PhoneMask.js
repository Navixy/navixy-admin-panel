/**
 * @class NavixyPanel.plugins.InputMask
 * @extends Ext.Base
 * Uses http://github.com/RobinHerbots/jquery.inputmask
 */

Ext.define('NavixyPanel.plugins.PhoneMask', {
    extend: 'NavixyPanel.plugins.InputMask',
    alias: 'plugin.phoneinputmask',
    dependencies: [
        'Lib.jquery.jQuery',
        'Lib.inputmask.MaskedInputV1',
        'Lib.jquery.BindFirst',
        'Lib.inputmask.PhoneMask'
    ],
    requires: ['NavixyPanel.store.PhoneCodes'],
    placeholder: '_',
    options: {},
    phoneListFileName: 'phone-codes',
    getPhonesListPath: function () {
        var path = Ext.Loader.getPath('Lib.inputmask.' + this.phoneListFileName);

        return path.substr(0, path.length - 2) + 'json';
    },

    initInputMask: function () {
        this.overrideSetValue();
        try {

            var me = this,
                phoneCodesStore = Ext.getStore('PhoneCodes') || Ext.create('NavixyPanel.store.PhoneCodes'),
                cmpInput = this.cmp.inputEl.dom;

            var maskList = $.masksSort(phoneCodesStore.getData(), ['#'], /[0-9]|#/, "mask");

            $(cmpInput).inputmasks({
                inputmask: {
                    definitions: {
                        '#': {
                            validator: "[0-9]",
                            cardinality: 1
                        }
                    },
                    placeholder: this.placeholder,
                    clearIncomplete: true,
                    showMaskOnHover: false,
                    autoUnmask: true,
                    "oncomplete": function () {
                        me.cmp.fireEvent('maskcomplete', me.cmp, $(cmpInput).val());
                    },

                    "onincomplete": function () {
                        me.cmp.fireEvent('maskincomplete', me.cmp, $(cmpInput).val());
                    }
                },
                match: /[0-9]/,
                replace: '#',
                list: maskList,
                listKey: "mask"
            }).bindFirst('paste', function () {
                    me.cmp.fireEvent('maskcomplete', me.cmp, $(cmpInput).val());
                });
        } catch (e) {
            Ext.log(e.stack);
        }
    }

});