/**
 * @class ToolColumn
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.widgets.ToolColumn', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.toolcolumn',

    tip: null,

    tdCls: 'tool-column',
    action: null,

    initComponent: function () {

        if (this.action) {
            this.tdCls = this.tdCls + ' ' + this.action;
        }

        this.callParent(arguments);
    },

    defaultRenderer: function(value, meta, record) {

        if (this.tip) {
            meta.tdAttr = 'data-qtip="' + this.tip + '"';
        }

        return value;
    }
});