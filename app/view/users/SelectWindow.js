/**
 * @class NavixyPanel.view.user.SelectWindow
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.users.SelectWindow', {
    extend: 'NavixyPanel.view.components.AbstractWindowSelect',
    requires: ['NavixyPanel.view.users.SelectList'],
    alias: 'widget.userselectwindow',
    height: '70%',
    width: '50%',

    getItems: function () {
        return [
            {
                xtype: 'usersselectlist',
                listeners: {
                    close: this.destroy,
                    recordselected: this.submitSelect,
                    scope: this
                }
            }
        ];
    },

    getTexts: function () {
        return  {
            windowTitle: _l.users.select.title
        };
    }
});
