/**
 * @class NavixyPanel.view.settings.components.Security
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.settings.components.Security', {
    extend: 'Ext.Container',
    xtype: 'settings-security',
    padding: '40 20 0px 20',

    initComponent: function () {
        this.title = _l.get('settings.security.title');
        this.items = this.getItems();
        this.callParent(arguments);
    },

    getItems: function () {
        return [
            {
                xtype: 'component',
                cls: 'block_hint',
                padding: '0 25',
                html: _l.get('settings.security.info'),
            },
            {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'stretch',
                },
                items: [
                    this.getWestItems(),
                ],
            },
        ];
    },

    getWestItems: function () {
        var emailInitialValue = this.data.get('mfa_factor_types').indexOf('email') >= 0;

        return {
            xtype: 'container',
            items: [
                {
                    xtype: 'blockheader',
                    html: _l.get('settings.security.2fa.title'),
                },
                {
                    xtype: 'checkbox',
                    id: 'mfa_factor_type_email',
                    name: 'mfa_factor_type_email',
                    boxLabel: _l.get('settings.security.2fa.email'),
                    checked: emailInitialValue,
                    listeners: {
                        scope: this,
                        change: function (_cbox, newValue) {
                            var factorTypes = (this.data.get('mfa_factor_types') || []).slice();

                            if (newValue) {
                                factorTypes.push('email');
                            } else if (factorTypes.indexOf('email') >= 0) {
                                factorTypes.splice(factorTypes.indexOf('email'), 1);
                            }

                            this.data.set('mfa_type', factorTypes.length ? 'allowed' : 'disallowed');
                            this.data.set('mfa_factor_types', factorTypes);
                        },
                    },
                },
                {
                    xtype: 'checkbox',
                    name: 'mfa_factor_type_authenticator_app',
                    disabled: true,
                    boxLabel: _l.get('settings.security.2fa.authenticator_app'),
                },
                {
                    xtype: 'checkbox',
                    name: 'mfa_factor_type_sms',
                    disabled: true,
                    boxLabel: _l.get('settings.security.2fa.sms'),
                },
            ],
        };
    },
});
