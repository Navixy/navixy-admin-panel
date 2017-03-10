/**
 * @class NavixyPanel.view.desktop.menu.MainMenu
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.desktop.menu.MainMenu', {
    extend: 'Ext.Container',
    requires: ['NavixyPanel.view.widgets.SearchField'],
    alias: 'widget.mainmenu',

    cls: 'main-menu',

    hasSearch: true,

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'middle'
    },
    padding: '2 2',

    initComponent: function () {

        this.addEvents('tabchanged');

        this.items = this.getItems();

        this.callParent(arguments);
    },

    getDefaults: function () {

        return {
            xtype: 'button',
            scale: 'medium',
            textAlign: 'center',
            allowDepress: false,
            toggleGroup: this.id,
            toggleHandler: this.changeTabButtonHandler,
            handler: this.changeTabButtonHandler,
            scope: this,
            hrefTarget: '_self',
            padding: '5 15',
            margin: '0 1'
        };
    },

    getItems: function () {
        var result = [
            {
                xtype: 'container',
                role: 'menu-box',
                layout: {
                    type: 'hbox',
                    pack: 'start',
                    align: 'middle'
                },
                flex: 1,
                hidden: true,
                defaults: this.getDefaults(),
                listeners: {
                    add: {
                        fn: this.showMenu,
                        scope: this
                    }
                }
            }
        ];

        if (Ext.checkPermissons(['users', 'trackers', 'tariffs'])) {
            result.push(
                {
                    xtype: 'container',
                    role: 'search-box',
                    layout: {
                        type: 'hbox',
                        pack: 'start',
                        align: 'middle'
                    },
                    items: this.getSearcher()
                }
            );
        }

        return result;
    },

    getMenuBox: function () {
        return this.down('[role="menu-box"]');
    },

    getSearchBox: function () {
        return this.down('[role="menu-box"]');
    },

    getSearcher: function () {
        return this.hasSearch
            ? [
            {
                xtype: 'searchfield',
                margin: '0 5 0 0',
                listeners: {
                    'search': {
                        fn: this.fireSearch,
                        scope: this
                    }
                }
            }
        ]
            : false;
    },

    fireSearch: function (searchString) {

        try {
            this.unToggleAll();
            Ext.Nav.shift(Ext.Nav.getSearch(searchString));
        } catch (e) {
            Ext.log(e.stack);
        }
    },

    addSection: function (sectionConfig) {
        var config = {
            text: sectionConfig.text || sectionConfig.name,
            sectionRole: sectionConfig.name,
            sectionTarget: sectionConfig.target,
            href: window.location.pathname + window.location.search + '#' + sectionConfig.target
        };

        this.getMenuBox().add(config);
    },

    changeTabButtonHandler: function (btn, pressed) {

        if (pressed) {
            this.fireTabButtonChange(btn);
        }
    },

    fireTabButtonChange: function (btn) {
        var section = btn.sectionRole,
            target = btn.sectionTarget;

        try {
            this.toggleSectionButton(section, true, false);
            Ext.Nav.shift(target);
        } catch (e) {
            Ext.log(e.stack);
        }

        this.fireEvent('tabchanged', this, section);
    },

    toggleSectionButton: function (section, state, silent) {
        var unToggle = this.down('button[sectionRole!=' + section + ']'),
            toggle = this.down('button[sectionRole=' + section + ']');
        if (unToggle) {
            unToggle.toggle(false, silent);
        }
        if (toggle) {
            toggle.toggle(state, silent);
        }
    },

    forceToggleSectionButton: function (section) {

        var curBnt = this.down('button[pressed=true]'),
            curSection = curBnt ? curBnt.sectionTarget : false;

        if (curSection !== section) {
            this.unToggleAll();
            this.toggleSectionButton(section, true, true);
        }
    },

    unToggleAll: function () {
        Ext.iterate(Ext.ComponentQuery.query(this.getXType() + ' button'), function (button) {
            button.toggle(false, true);
        }, this);
    },

    showMenu: function () {
        this.getMenuBox().setVisible(true);
    }
});
