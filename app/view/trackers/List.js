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
        modes: ['all', 'clones', 'trackers']
    },

    initComponent: function () {
        this.callParent(arguments);
    },

    getTexts: function () {
        return {
            emptyData: _l.get('trackers.list.empty_text'),
            cloneBtnRole: 'clone-button',
            cloneBtnText: _l.get('trackers.list.clone_btn'),
            deleteCloneBtnRole: 'delete-clone-button',
            deleteCloneBtnText: _l.get('trackers.list.delete_clone_btn'),
            ownerBtnRole: 'owner-button',
            ownerBtnText: _l.get('trackers.list.owner_btn')
        };
    },

    handleCellSelect: function (grid, record, index, eOpts) {
        return !record.get('activated');
    },

    afterCellSelect: function (grid, records, eOpts) {
        var cloneCmp = this.getCloneBnt(),
            deleteCloneCmp = this.getDeleteCloneBtn(),
            ownerCmp = this.getOwnerBnt(),
            btnTip = this.getEditBntTip(),
            text = _l.get('trackers.list.select_req'),
            hasClonesInSelection = false,
            allClonesInSelection = true,
            canClone = true;

        Ext.iterate(records, function (record) {
            if (record.get('clone')) {
                hasClonesInSelection = true;
            } else {
                allClonesInSelection = false;
            }
        }, this);

        if (records.length === 0) {
            deleteCloneCmp.hide();
            ownerCmp.disable();
            cloneCmp.hide();
            btnTip.update('');
        } else {
            if (hasClonesInSelection && !allClonesInSelection) {
                deleteCloneCmp.hide();
                ownerCmp.disable();
                cloneCmp.hide();
                btnTip.update(_l.get('trackers.list.select_clone_req'));
            } else if (allClonesInSelection) {
                deleteCloneCmp.show();
                ownerCmp.disable();
                cloneCmp.hide();
                btnTip.update('');
            } else {
                deleteCloneCmp.hide();
                ownerCmp.enable();
                cloneCmp.show();
                btnTip.update('');
            }
        }
    },

    fireCloneAction: function () {
        var sm = this.getSelectionModel(),
            selected = sm.getSelection();

        this.fireEvent('clonetrackers', selected);
    },

    fireDeleteCloneAction: function () {
        var sm = this.getSelectionModel(),
            selected = sm.getSelection();

        this.fireEvent('deleteclonetrackers', selected);
    },

    fireOwnerAction: function () {
        var sm = this.getSelectionModel(),
            selected = sm.getSelection();

        this.fireEvent('ownertrackers', selected);
    },

    fireBatchCorruptAction: function () {
        var sm = this.getSelectionModel(),
            selected = sm.getSelection();

        this.fireEvent('batchcorrupt', selected);
    },

    getCloneBnt: function () {
        return this.down('[role="' + this.texts.cloneBtnRole + '"]');
    },

    getDeleteCloneBtn: function () {
        return this.down('[role="' + this.texts.deleteCloneBtnRole + '"]');
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

    clearSelection: function () {
        this.getSelectionModel().deselectAll();
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
                    iconCls: null,
                    hidden: true,
                    role: this.texts.cloneBtnRole,
                    text: this.texts.cloneBtnText,
                    handler: function () {
                        me.fireCloneAction();
                    }
                });
                barConfig.items.unshift({
                    xtype: 'button',
                    iconCls: 'remove-button',
                    hidden: true,
                    role: this.texts.deleteCloneBtnRole,
                    text: this.texts.deleteCloneBtnText,
                    handler: function () {
                        me.fireDeleteCloneAction();
                    }
                })
            }

            if (canEdit) {
                barConfig.items.unshift({
                    xtype: 'button',
                    iconCls: 'owner-button',
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
                        Ext.state.Manager.set('TrackersListDisplayClones', modeId);
                        me.fireEvent('clonefilterchange', modeId);
                        me.updateDisplayClonesButtonTitle();
                    }
                }
            })
        }];
    },

    getDisplayClonesModeTitle: function () {
        return _l.get("trackers.clones_filter." + (Ext.state.Manager.get('TrackersListDisplayClones') || 'all'))
    },

    updateDisplayClonesButtonTitle: function () {
      this.down('button[role=clones_filter]').setText(this.getDisplayClonesModeTitle())
    },

    handleCellClick: function (table, td, cellIndex, record) {
        var tdEl = Ext.get(td),
            isUser = tdEl.hasCls('user'),
            isTool = tdEl.hasCls('tool-column'),
            isEdit = isTool && tdEl.hasCls('edit'),
            isCheckbox = tdEl.down('.x-grid-row-checker');

        if (isCheckbox) {
            this.fireEvent('checkboxclick', record);
        } else if (isEdit) {
            this.fireEvent('editclick', record);
        } else if (isUser) {
            this.fireEvent('userclick', record);
        } else {
            this.fireEvent('actionclick', record);
        }
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
            trackerOwnerTpl = [
                '<tpl if="{can_read}">',
                    '<a href="#user/{user_id}">#{user_id}</a>',
                '<tpl else>',
                    '#{user_id}',
                '</tpl>'
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
                width: 100
            },
            {
                text: _l.get('trackers.fields.label'),
                xtype: 'templatecolumn',
                tpl: trackerLabelTpl,
                dataIndex: 'label',
                flex: 4
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
                text: _l.get('trackers.fields.owner_short'),
                xtype: 'templatecolumn',
                tpl: trackerOwnerTpl,
                dataIndex: 'user_id',
                tdCls: 'user',
                defaultRenderer: function(value, meta, record) {
                    var data = {
                        can_read: Ext.checkPermission('users', 'read'),
                        user_id: value,
                    };

                    return this.tpl.apply(data);
                },
                minWidth: 80,
                flex: 3
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
                text: _l.get('trackers.fields.last_connection_date'),
                dataIndex: 'last_connection',
                width: 220
            },
            {
                text: _l.get('trackers.fields.creation_date_short2'),
                dataIndex: 'creation_date',
                renderer: Util.formatDate,
                minWidth: 100,
                resizable: false,
                hidden: true,
            },
            {
                text: _l.get('trackers.fields.comment'),
                dataIndex: 'comment',
                minWidth: 140,
                resizable: true,
                hidden: true,
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
    },

    afterBatchCorrupt: function (assigned, succesed, noDeselect) {
        var btnTip = this.getEditBntTip();

        if (!noDeselect) {
            this.getSelectionModel().deselectAll();
        }

        btnTip.update(!assigned
                ? Ext.String.format(_l.get('trackers.list.after_batch_corrupt_success'), Ext.util.Format.units(succesed, 'trackers', true))
                : assigned !== succesed
                          ? Ext.String.format(_l.get('trackers.list.after_batch_corrupt_failure'), succesed, Ext.util.Format.units(assigned - succesed, 'trackers', true))
                          : Ext.String.format(_l.get('trackers.list.after_batch_corrupt_success'), Ext.util.Format.units(succesed, 'trackers', true))
        );
    }
});
