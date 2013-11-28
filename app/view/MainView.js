/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Writer.view.MainView', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.grid.plugin.CellEditing'
    ],

    itemId: 'mainView',
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'center',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card'
                    },
                    title: 'Content',
                    items: [
                        {
                            xtype: 'htmleditor',
                            height: 150,
                            id: 'projectEditor'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            width: 400,
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'MyButton',
                                    listeners: {
                                        click: {
                                            fn: me.onButtonClick,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    text: 'MyButton'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'treepanel',
                    region: 'west',
                    id: 'projectTree',
                    itemId: 'projectTree',
                    width: 150,
                    title: 'Organizer',
                    store: 'MyTreeStore',
                    rootVisible: false,
                    viewConfig: {
                        rootVisible: false
                    },
                    columns: [
                        {
                            xtype: 'treecolumn',
                            width: 149,
                            dataIndex: 'name',
                            editor: {
                                xtype: 'textfield'
                            }
                        }
                    ],
                    plugins: [
                        Ext.create('Ext.grid.plugin.CellEditing', {
                            listeners: {
                                edit: {
                                    fn: me.onCellEditingEdit,
                                    scope: me
                                },
                                beforeedit: {
                                    fn: me.onCellEditingBeforeEdit,
                                    scope: me
                                }
                            }
                        })
                    ],
                    listeners: {
                        select: {
                            fn: me.onProjectTreeSelect,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick: function(button, e, eOpts) {
        // Get Tree
        var tree = Ext.getCmp('projectTree');

        // Get Tree Root Node
        var treeNode = Ext.getCmp('projectTree').getRootNode();

        // Get Selected Node of Tree
        var selected_node = tree.getSelectionModel().getSelection()[0];

        // Check if Node is leaf
        if(selected_node.raw.leaf === true)
        {
            // If leaf == true, Can't add
            alert("Can't add");
        } else {
            // If leaf is not true, Add child node
            selected_node.appendChild({
                name: 'New Leaf',
                leaf: true
            });
        }
    },

    onCellEditingEdit: function(editor, e, eOpts) {
        alert('edited');
        console.log(e.record);
    },

    onCellEditingBeforeEdit: function(editor, e, eOpts) {
        if(e.record.raw.leaf === true)
        {

        } else {
            console.log(e.record.raw.name);
            editor.cancel();
        }
    },

    onProjectTreeSelect: function(rowmodel, record, index, eOpts) {
        if(record.raw.leaf === true)
        {
            console.log(record.raw.name);
            Ext.getCmp('projectEditor').setValue(record.raw.name);
        }
    }

});