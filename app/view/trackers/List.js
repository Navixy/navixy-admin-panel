/**
 * @class NavixyPanel.view.trackers.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.trackers.List', {
    extend: 'NavixyPanel.view.components.AbstractList',
    alias: 'widget.trackerslist',
    store: 'Trackers',

    hasSelection: false,
    showStatus: true,
    stateId: 'TrackersList',

    displayClones: {
        modes: ['all', 'clones', 'trackers'],
        current: 'all'
    },

    initComponent: function () {
        this.callParent(arguments);
        window.TEST = this
    },

    getTexts: function () {
        return {
            emptyData: _l.get('trackers.list.empty_text'),
            cloneBtnRole: 'clone-button',
            cloneBtnText: _l.get('trackers.list.clone_btn'),
            ownerBtnRole: 'owner-button',
            ownerBtnText: _l.get('trackers.list.owner_btn')
        };
    },

    handleCellSelect: function (grid, record, index, eOpts) {
        return !record.get('activated');
    },

    afterCellSelect: function (grid, records, eOpts) {
        var cloneCmp = this.getCloneBnt(),
            ownerCmp = this.getOwnerBnt(),
            btnTip = this.getEditBntTip(),
            text = _l.get('trackers.list.select_req'),
            canClone = true;

        Ext.iterate(records, function (record) {
            if (record.get('clone')) {
                canClone = false;
                return false;
            }
        }, this);

        if (records.length && !canClone) {
            ownerCmp.disable();
            cloneCmp.disable();
            btnTip.update(_l.get('trackers.list.select_clone_req'));
        }

        if (records.length && canClone) {
            cloneCmp.enable();
            ownerCmp.enable();
            btnTip.update('');
        }
    },

    fireCloneAction: function () {
        var sm = this.getSelectionModel(),
            selected = sm.getSelection();

        this.fireEvent('clonetrackers', selected);
    },

    fireOwnerAction: function () {
        var sm = this.getSelectionModel(),
            selected = sm.getSelection();

        this.fireEvent('ownertrackers', selected);
    },

    getCloneBnt: function () {
        return this.down('[role="' + this.texts.cloneBtnRole + '"]');
    },

    getOwnerBnt: function () {
        return this.down('[role="' + this.texts.ownerBtnRole + '"]');
    },

    getReloadBnt: function () {
        return this.down('[role="' + this.texts.reloadBtnRole + '"]');
    },

    getEditBntTip: function () {
        return this.down('[role="edit-btn-tip"]');
    },

    getTopBar: function () {

        var me = this,
            barConfig = this.callParent(arguments),
            canClone = Ext.checkPermission('trackers', 'create'),
            canEdit = Ext.checkPermission('trackers', 'update');

        if (this.hasSelection && (canClone || canEdit)) {
            barConfig.items.unshift({
                xtype: 'container',
                role: 'edit-btn-tip',
                margin: '0 0 0 20',
                html: _l.get('trackers.list.select_req')
            });

            if (canClone) {
                barConfig.items.unshift({
                    xtype: 'button',
                    iconCls: 'edit-button',
                    disabled: true,
                    role: this.texts.cloneBtnRole,
                    text: this.texts.cloneBtnText,
                    handler: function () {
                        me.fireCloneAction();
                    }
                });
            }

            if (canEdit) {
                barConfig.items.unshift({
                    xtype: 'button',
                    iconCls: 'edit-button',
                    disabled: true,
                    margin: '0 10 0 0',
                    role: this.texts.ownerBtnRole,
                    text: this.texts.ownerBtnText,
                    handler: function () {
                        me.fireOwnerAction();
                    }
                });
            }
        }

        return !this.noTBar && barConfig;
    },

    getRightTopBarItems: function () {
        var me = this;

        return [{
            xtype: 'button',
            role: 'clones_filter',
            text: this.getDisplayClonesModeTitle(),
            margin: '0 5 0 0',
            menu: this.displayClones.modes.map(function (modeId) {
                return {
                    text: _l.get('trackers.clones_filter.' + modeId),
                    handler: function () {
                        me.displayClones.current = modeId;
                        me.store.filterBy(function (tracker) {
                            if (modeId === 'all') { return true }
                            var isClone = tracker.get('clone');
                            if (modeId === 'trackers') {
                                return !isClone
                            }
                            if (modeId === 'clones') {
                                return isClone
                            }
                        });
                    }
                }
            })
        }];
    },

    getDisplayClonesModeTitle: function () {
        return _l.get("trackers.clones_filter." + this.displayClones.current)
    },

    getColumnsConfig: function () {

        var trackerLabelTpl = [
                '<a>{label:htmlEncode}</a>',
                '<tpl if="clone">',
                '<span class="scaled lighten">{[_l.get("trackers.fields.options.clone")]}</span>',
                '</tpl>',
                '<tpl if="deleted">',
                '<span class="scaled red">{[_l.get("trackers.fields.options.deleted")]}</span>',
                '</tpl>'
            ],
            trackerStatusTpl = [
                '<span class="{connection_status}">{[_l.get("trackers.fields.statuses")[values.connection_status]]}</span>',
            ],
            blockedStatusTpl = [
                '<tpl if="blocked">',
                '<span class="scaled red">{[_l.get("yes")]}</span>',
                '<tpl else>',
                '<span class="scaled lighten">{[_l.get("no")]}</span>',
                '</tpl>'
            ];

        return [
            {
                text: _l.get('trackers.fields.tracker_id'),
                dataIndex: 'id',
                width: 60
            },
            {
                text: _l.get('trackers.fields.label'),
                xtype: 'templatecolumn',
                tpl: trackerLabelTpl,
                dataIndex: 'label',
                flex: 3
            },
            this.showStatus ? {
                text: _l.get('trackers.fields.connection_status'),
                xtype: 'templatecolumn',
                tpl: trackerStatusTpl,
                dataIndex: 'status',
                width: 140
            } : {
                text: _l.get('trackers.fields.blocked'),
                xtype: 'templatecolumn',
                tpl: blockedStatusTpl,
                dataIndex: 'blocked',
                sortable: false,
                width: 180
            },
            {
                text: _l.get('trackers.fields.model'),
                dataIndex: 'model_name',
                width: 180
            },
            {
                text: _l.get('trackers.fields.device_id'),
                dataIndex: 'device_id',
                width: 160
            },
            {
                text: _l.get('trackers.fields.phone'),
                dataIndex: 'phone',
                width: 140
            },
            {
                text: _l.get('trackers.fields.creation_date_short'),
                dataIndex: 'creation_date',
                renderer: Util.formatDate,
                minWidth: 140,
                resizable: false,
                flex: 1
            }
        ];
    },

    afterClone: function (assigned, succesed, noDeselect) {
        var btnTip = this.getEditBntTip();

        if (!noDeselect) {
            this.getSelectionModel().deselectAll();
        }

        btnTip.update(!assigned
                ? Ext.String.format(_l.get('trackers.list.after_clone_success'), Ext.util.Format.units(succesed, 'trackers', true))
                : assigned !== succesed
                          ? Ext.String.format(_l.get('trackers.list.after_clone_failure'), succesed, Ext.util.Format.units(assigned - succesed, 'trackers', true))
                          : Ext.String.format(_l.get('trackers.list.after_clone_success'), Ext.util.Format.units(succesed, 'trackers', true))
        );
    },

    afterOwner: function (assigned, succesed, noDeselect) {
        var btnTip = this.getEditBntTip();

        if (!noDeselect) {
            this.getSelectionModel().deselectAll();
        }

        btnTip.update(!assigned
                ? Ext.String.format(_l.get('trackers.list.after_owner_success'), Ext.util.Format.units(succesed, 'trackers', true))
                : assigned !== succesed
                          ? Ext.String.format(_l.get('trackers.list.after_owner_failure'), succesed, Ext.util.Format.units(assigned - succesed, 'trackers', true))
                          : Ext.String.format(_l.get('trackers.list.after_owner_success'), Ext.util.Format.units(succesed, 'trackers', true))
        );
    }
});
