/**
 * @class NavixyPanel.view.accounting.Accounting
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.accounting.Accounting', {
    extend: 'NavixyPanel.view.components.AbstractTabForm',
    alias: 'widget.accountingmain',
    bodyPadding: '0',

    getInvalidTabs: function () {
        return [];
    },

    getTitle: function () {
        return _l.get('accounting.form.title');
    },

    getSaveBtnTitle: function () {
        return false;
    },

    getClearBtnTitle: function () {
        return false;
    },

    getBackBtnTitle: function () {
        return false;
    },

    getTabs: function () {
        return [
            {
                title: _l.get('accounting.form.payments.tab_title'),
                items: [
                    {
                        xtype: 'paymentst1c'
                    }
                ]
            },
            {
                title: _l.get('accounting.form.export1c.tab_title'),
                items: [
                    {
                        xtype: 'export1c'
                    }
                ]
            },
        ];
    }
});
