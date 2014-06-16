/**
 * @class NavixyPanel.store.ActivationCodes
 * @extends NavixyPanel.store.Abstract
 * Description
 */

Ext.define('NavixyPanel.store.ActivationCodes', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.ActivationCode',
    storeId: 'ActivationCodes',
    api: {
        read: 'getCodesList'
    },

    sorters: [
        {
            property: 'activated',
            direction: 'ASC'
        }
    ],

    getActivatedCount: function () {
        var activeCnt = 0;

        this.each(function (rocord) {
            if (rocord.get('activated')) {
                activeCnt++;
            }
        }, this);

        return activeCnt;
    }
});