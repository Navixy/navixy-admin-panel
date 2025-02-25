Ext.define('NavixyPanel.view.settings.components.InformationCenterPreview', {
    extend: 'NavixyPanel.view.components.AbstractWindowFixed',
    cls: 'iframe-container',
    xtype: 'information-center-preview',
    link: null,

    initComponent: function () {
        if (this.link) {
            this.html = new Ext.Template('<iframe src="{link}"></iframe>').apply({ link: this.link });
        }

        this.title = _l.get('settings.custom_links.preview_the_link');
        this.callParent(arguments);
    },

    afterRender: function () {
        var previewWindow = this;
        var iframeElement = this.getEl().query('iframe').pop();

        if (!iframeElement) {
            return;
        }

        var ONE_MINUTE = 60 * 1000;
        var timeout;

        this.getEl().mask(_l.get('loading'));

        iframeElement.addEventListener('load', function () {
            previewWindow.getEl().unmask();

            timeout = setTimeout(function () {
                if (previewWindow.getEl().isMasked()) {
                    previewWindow.getEl().unmask();
                }

                clearTimeout(timeout);
            }, ONE_MINUTE);
        });

        previewWindow.on('beforeclose', function () {
            clearTimeout(timeout);
        }, { once: true });

        this.callParent(arguments);
    },
});
