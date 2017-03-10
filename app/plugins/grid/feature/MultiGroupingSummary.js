/**
 * @author Adrian Teodorescu (ateodorescu@gmail.com)
 */
Ext.define('NavixyPanel.plugins.grid.feature.MultiGroupingSummary', {

    extend: 'NavixyPanel.plugins.grid.feature.MultiGrouping',

    alias: 'feature.multigroupingsummary',

    showSummaryRow: true,

    vetoEvent: function (record, row, rowIndex, e) {
        var result = this.callParent(arguments);
        if (result !== false) {
            if (e.getTarget(this.summaryRowSelector)) {
                result = false;
            }
        }
        return result;
    }
});