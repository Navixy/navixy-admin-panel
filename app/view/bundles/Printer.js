/**
 * @class NavixyPanel.view.bundles.Print
 * @extends Ext.Component
 * Description
 */

Ext.define('NavixyPanel.view.bundles.Printer', {
    extend: 'Ext.Component',
    alias: 'widget.bundle-printer',

    src: '/dev/stickerPrint.html',

    model: null,
    imei: null,
    equip_id: null,

    bundle: null,

    width: '101mm',
    height: '73mm',

    style: 'border: 1px solid #ddd',

    renderTpl: [
        '<iframe src="{src}?imei={imei}&iccid={iccid}&equip_id={equip_id}" frameborder="0" ',
        'style="height:100%;width:100%"></iframe>'
    ],

    docReady: false,
    docError: false,

    initComponent: function () {

        this.renderData = {
            imei: this.bundle.get('imei'),
            equip_id: this.bundle.get('equip_id'),
            iccid: this.bundle.get('iccid'),
            src: this.src
        };

        this.callParent();

        Ext.apply(this.renderSelectors, {
            iframeEl: 'iframe'
        });
    },

    initEvents: function () {
        this.callParent(arguments);

        this.iframeEl.on('load', this.onLoad, this);
    },

    onLoad: function () {
        var me = this,
            win = me.getWin(),
            doc = me.getDoc();

        Ext.waitFor(function () {
            return win.ready || win.someError
        }, function () {

            if (win.someError) {
                me.docError = true;
                me.fireEvent('doc-error', me);
            } else {
                me.docReady = true;
                me.fireEvent('doc-ready', me);
            }
        }, me)
    },

    getDoc: function () {
        try {
            return this.getWin().document;
        } catch (ex) {
            return null;
        }
    },

    getWin: function () {
        var me = this,
            win = me.iframeEl.dom.contentWindow;

        return win;
    },

    printWin: function () {
        var me = this,
            win = this.getWin();

        if (win) {
            win.print();
        }
    }
});

