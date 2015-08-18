/**
 * @class NavixyPanel.view.settings.BlockHeader
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.settings.BlockHeader', {
    extend: 'Ext.Container',
    alias: 'widget.blockheader',
    cls: 'block_header',
    padding: '30 0 10 0',
    margin: 0,
    style: 'border-bottom: 1px solid #eee',

    initComponent: function () {
        this.margin = '0 0 10 0';
        this.callParent(arguments);
    }
});