/**
 * @class NavixyPanel.view.desktop.menu.MainMenu
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.desktop.menu.MainMenu', {
    extend: 'Ext.Container',
    alias: 'widget.mainmenu',

    hidden: true,

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'middle'
    },
    padding: '5',

    // TODO: Menu styling
    style: 'background-color: #60626D',

    initComponent: function () {

        this.addEvents('tabchanged');

        this.defaults = this.getDefaults();

        this.on('add', this.showMenu, this);

        this.callParent(arguments);
    },

    getDefaults: function () {

        return {
            xtype: 'button',
            ui: 'gray',
            cls: 'item',
            textAlign: 'center',
            allowDepress: false,
            toggleGroup: this.id,
            toggleHandler: this.changeTabButtonHandler,
            scope: this,
            padding: '5 10 5 10',
            margin: '5'
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
            this.toggleSectionButton(section, true);
            Ext.Navigator.goTo(target);
        } catch (e) {
            Ext.log(e.stack);
        }

        this.fireEvent('tabchanged', this, section);
    },

    toggleSectionButton: function (section, state, silent) {
        this.down('button[sectionRole=' + section + ']').toggle(state, silent);
    },

    showMenu: function () {
        this.setVisible(true);
    }
});
