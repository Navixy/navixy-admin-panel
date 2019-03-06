/**
 * @class NavixyPanel.view.desktop.Controls
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.subpaas.SubPaasNotice', {
    extend: 'Ext.Component',
    alias: 'widget.subpaasnotice',
    cls: 'subpaas-notice',

    initComponent: function () {
        var dealer = Ext.getStore('Dealer').first().getData()

        if (dealer.subpaas && Ext.util.Cookies.get('master_panel_session_key') && Ext.util.Cookies.get('panel_session_key')) {
            this.html = Ext.String.format(_l.get('subpaas.notice_text'), ['#' + dealer.id + ' ' + dealer.title])
        } else {
            this.hidden = true
        }

        this.callParent(arguments)
    },

    afterRender: function () {
        var returnHref = this.el.down('a')

        if (returnHref) {
            returnHref.on('click', function (e) {
                e.preventDefault()
                this.fireEvent('returntomaster')
            }, this)
        }
        this.callParent(arguments)
    }
})
