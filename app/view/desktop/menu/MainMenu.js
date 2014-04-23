/**
 * @class NavixyPanel.view.desktop.menu.MainMenu
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.desktop.menu.MainMenu', {
    extend: 'Ext.Container',
    alias: 'widget.mainmenu',

    cls: 'main-menu',

    hidden: true,

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'middle'
    },
    padding: '2 2',

    initComponent: function () {

        this.addEvents('tabchanged');

        this.defaults = this.getDefaults();

        this.on('add', this.showMenu, this);

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
            scope: this,
            padding: '5 15',
            margin: '0 1'
        };
    },

    addSection: function (sectionConfig) {

        var config = {
            text: sectionConfig.text || sectionConfig.name,
            sectionRole: sectionConfig.name,
            sectionTarget: sectionConfig.target
        };

        this.add(config);
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
        this.down('button[sectionRole!=' + section + ']').toggle(false, silent);
        this.down('button[sectionRole=' + section + ']').toggle(state, silent);
    },

    forceToggleSectionButton: function (section) {
        var curBnt = this.down('button[pressed=true]'),
            curSection = curBnt ? curBnt.sectionTarget : false;

        if (curSection !== section) {
            this.toggleSectionButton(section, true, true);
        }
    },

    unToggleAll: function () {
        this.down('button').toggle(false, true);
    },

    showMenu: function () {
        this.setVisible(true);
    }
});
