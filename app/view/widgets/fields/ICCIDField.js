/**
 * @class NavixyPanel.view.widgets.fields.IMEIfield
 * @extends NavixyPanel.view.widgets.fields.IMEIField
 * Description
 */

Ext.define('NavixyPanel.view.widgets.fields.ICCIDField', {
    extend: 'NavixyPanel.view.widgets.fields.IMEIField',
    alias: 'widget.iccid-field',
    ui: 'light',
    cls: 'step-field',

    vtype: null,

    width: 330,

    maxLength: 25,
    enforceMaxLength: true,
    hideTrigger: true,
    msgTarget: 'under',

    localePart: null,

    activeMessage: null,
    activeMessages: null,
    lastActiveMessage: '',
    messageCls: 'has-message',

    bundle: null,
    localePartSelector: 'bundles.scan.iccid_hints',
    iccidStatus: 'empty',
    minICCIDLength: 9,

    applyListeners: function () {
        this.callParent(arguments);
        this.on({
            change: this.checkScanFocus,
            scope: this
        })
    },

    setBundle: function (bundle) {
        this.bundle = bundle;
        if (this.isICCID()) {
            this.setValue(this.bundle.get('iccid'))
        } else {
            this.resetValue();
            this.checkScanFocus();
        }
    },

    isICCID: function () {
        return this.bundle && this.bundle.get('iccid');
    },

    checkScanFocus: function () {
        var value = this.getValue(),
            newStatus = 'old-value';

        if (this.hasFocus) {
            if (!value || !this.preValidate(value)) {
                this.setActiveMessage(this.localePart.get('iccid_ready'));
            } else {
                this.unsetActiveMessage();
            }
        } else {
            if (!value) {
                if (this.isICCID()) {
                    this.setValue(this.isICCID());
                    this.unsetActiveMessage();
                } else {
                    this.setActiveError(this.localePart.get('iccid_focus_lose'), true);
                }
            } else {
                this.unsetActiveMessage();
            }
        }

        this.changeStatus();
    },

    changeStatus: function (silent) {
        var value = this.getValue(),
            newStatus = 'empty';

        if (!value || !this.preValidate(value)) {
            newStatus = 'empty';
        } else if (!!value && value === this.isICCID()) {
            newStatus = 'old';
        } else if (!!value && value !== this.isICCID()) {
            newStatus = 'new';
        }

        this.iccidStatus = newStatus;

        if (!silent) {
            this.fireEvent('status-changed', newStatus);
        }

        return newStatus;
    },

    getStatus: function () {
        return this.iccidStatus;
    },


    preValidate: function (value) {
        var str = value.toString();
        return value && str && str.length > this.minICCIDLength
    },

    onScanFilled: function (force, text) {
        var value = this.getValue(),
            errText = text || this.localePart.get('iccid_invalid');

        if (value) {
            if (this.preValidate(value) && !force) {
                this.disable();
                this.doServerAction(value);
            } else {
                this.resetValue(errText);
                this.fireEvent('input-error', value);
            }
        }
    },

    doServerAction: function (value) {

        var params = {
                bundle_id: this.bundle.get('id')
            },
            processedValue = null;

        if (this.changeStatus(true) === 'new') {
            params.iccid = processedValue = value;
        }

        this.fireEvent('boundle-before-changed', this.bundle, this.getStatus());

        this.afterServerAction({value: processedValue}, processedValue);

        //DEBUG
        //Ext.API.assignBundle({
        //    params: params,
        //    callback: function (response) {
        //        this.afterServerAction(response, processedValue);
        //    },
        //    failure: function (response) {
        //        this.afterServerActionFailure(response, processedValue);
        //    },
        //    scope: this
        //});
    },

    afterServerAction: function (response, value) {
        var data = response && response.value;
        this.enable();

        this.bundle.set('iccid', value);

        this.setBundle(this.bundle);

        this.changeStatus();

        this.fireEvent('boundle-changed', this.bundle);
    },

    afterServerActionFailure: function () {
        var value = this.getValue(),
            errText = !!value
                ? Ext.String.format(this.localePart.get('iccid_not_found'), value)
                : this.localePart.get('iccid_cant_unassign');

        this.enable();
        this.fireEvent('input-error', value);
        this.fireEvent('server-error', value);
        this.resetValue(errText);
    }
});