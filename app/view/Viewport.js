Ext.define('NavixyPanel.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainviewport',

    layout: 'border',
    items: [
        {
            xtype: 'maincontrols',
            region: 'north'
        },
        {
            xtype: 'maindesktop',
            region: 'center'
        }],

    afterFirstLayout: function () {
        this.fireEvent('ready', this);
        this.callParent(arguments);
    }
});