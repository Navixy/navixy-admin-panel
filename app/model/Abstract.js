/**
 * @class NavixyPanel.model.Abstract
 * @extends Ext.data.Model
 * Description
 */

Ext.define('NavixyPanel.model.Abstract', {
    extend: 'Ext.data.Model',

    associationsData: [],
    associationsMap: null,

    constructor: function () {
        this.callParent(arguments);
        this.buildAssociationsCalls();
    },

    buildAssociationsCalls: function () {
        var me = this;
        Ext.iterate(this.associationsMap, function (field, storeName) {
            if (storeName) {
                this['get' + storeName + 'Data'] = function() {
                    return me.getAssociationData(storeName);
                };
                this['get' + storeName + 'Record'] = function() {
                    return me.getAssociationData(storeName, true);
                };
            }
        }, this);
    },

    getAssociationData: function (storeName, isRecord) {
        return (this.associationsData[storeName] && (isRecord ? this.associationsData[storeName] : this.associationsData[storeName].getData())) || null;
    },

    getAssociations: function (loadAssociations) {
        var result = {};

        Ext.iterate(this.associationsMap, function (association, associatedStore) {
            if (!loadAssociations || (Ext.isArray(loadAssociations) && Ext.Array.indexOf(loadAssociations, associatedStore) < 0)) {
                return true;
            }

            result[associatedStore] = this.get(association);
        }, this);

        return Ext.Object.getSize(result)
            ? result
            : null;
    },

    setAssociation: function (storeName, record) {
        this.associationsData[storeName] = record;
    }
});