/**
 * @class NavixyPanel.store.ActivationCodes
 * @extends NavixyPanel.store.Abstract
 * Description
 */

Ext.define('NavixyPanel.store.ActivationCodes', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.ActivationCode',
    storeId: 'ActivationCodes',
    sorters: [
        {
            property: 'activated',
            direction: 'DESC'
        },
        {
            property: 'device_type',
            direction: 'DESC'
        },
        {
            property: 'code',
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
    },

    updateData: function (list, callback, scope) {
        var exist, changes;
        Ext.iterate(list, function (newData) {
            exist = this.findRecord('code', newData.code);

            if (!exist) {
                this.add(newData);
            } else {
                exist.set(newData);
                changes = exist.getChanges();
                exist.set('edited', !Ext.Object.isEmpty(exist.getChanges()));
                exist.commit(true);
            }
        }, this);

        if (Ext.isFunction(callback)) {
            callback.call(scope || this);
        }
    }
});