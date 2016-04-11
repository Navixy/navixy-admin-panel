/**
 * @class NavixyPanel.plugins.FieldPrefix
 * @extends Ext.Base
 */

Ext.define('NavixyPanel.plugins.FieldPrefix', {
    alias: 'plugin.fieldprefix',
    prefix: '',
    constructor: function (config) {
        Ext.apply(this, config);
    },

    init: function (field) {
        this.field = field;
        field.on('afterrender', this.createPrefixEl, this, {single: true});

    },

    createPrefixEl: function (field) {
        var prefixEl = document.createElement('span'),
            textMetrics = new Ext.util.TextMetrics();

        prefixEl.className = 'field-prefix';

        Ext.apply(prefixEl.style, {
            position: 'absolute',
            cursor: 'default',
            left: '3px',
            lineHeight: (field.inputEl.getHeight() || 27) + 'px'
        });

        prefixEl.innerText = this.prefix;

        this.prefixEl = prefixEl;

        field.inputCell.appendChild(this.prefixEl);

        Ext.get(prefixEl).on('click', function () {
            field.inputEl.dom.click();
        });

        field.inputEl.setStyle('padding-left', (textMetrics.getWidth(this.prefix) + 5) + 'px');
    }

});