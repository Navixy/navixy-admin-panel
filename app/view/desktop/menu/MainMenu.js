/**
 * @class NavixyPanel.view.desktop.menu.MainMenu
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.desktop.menu.MainMenu', {
    extend: 'Ext.Container',
    requires: ['NavixyPanel.view.widgets.SearchField',
        'NavixyPanel.plugins.ContainerScroller'],
    alias: 'widget.mainmenu',

    cls: 'main-menu',

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
            handler: this.changeTabButtonHandler,
            doToggle: Ext.emptyFn,
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
                plugins: [{
                    ptype: 'containerscroller'
                }],
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

        return result;
    },

    getMenuBox: function () {
        return this.down('[role="menu-box"]');
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

    changeTabButtonHandler: function (btn, event) {
        if (btn.pressed && !(event.shiftKey || event.ctrlKey)) {
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
