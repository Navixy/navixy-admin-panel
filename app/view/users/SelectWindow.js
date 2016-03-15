/**
 * @class NavixyPanel.view.user.SelectWindow
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.users.SelectWindow', {
    extend: 'NavixyPanel.view.components.AbstractWindowSelect',
    requires: ['NavixyPanel.view.users.SelectList'],
    alias: 'widget.userselectwindow',
    exclude_user_id: null,
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
            windowTitle: _l.get('users.select.title')
        };
    },

    afterRender: function () {
        this.callParent(arguments);
        
        var list = this.down("usersselectlist"),
            store = list && list.store;

        if (this.exclude_user_id) {
            store.on("datachanged", function () {
                var user = store.findRecord("id", this.exclude_user_id);
                if (user) {
                    store.remove(user);
                }
            }, this)
        }
    }
});
