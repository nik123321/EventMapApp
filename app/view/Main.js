Ext.define('EventMap.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainview',
    requires: [
        'EventMap.view.friends.FriendList',
        'EventMap.view.friends.FriendChat',
        'Ext.Menu'  
    ],
    
    config: {
        tabBarPosition:'bottom',
        layout: {
            type: 'card'
        },

        defaults:{
            styleHtmlContent:true
        },
 
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'EventMap',
                items: [
                    {
                        xtype: 'button',
                        id: 'listButton',
                        iconCls: 'list',
                        ui: 'plain',
                        handler: function(){
                            if(Ext.Viewport.getMenus().left.isHidden()){
                                Ext.Viewport.showMenu('left');
                            }
                            else
                            {
                                Ext.Viewport.hideMenu('left');
                            }
                        }
                    }
                ]
            },

            {
                xtype:'eventlist'
            },
            {
                xtype:'eventlist_old'
            },
            {
                xtype:'eventmap'
            },
            {
                xtype:'eventnew'
            },  
            {
                xtype:'eventview'
            },
            {
                xtype:'friendview'
            },
            {
                xtype:'postview'
            },
        ],
 
        listeners: {
            initialize: function(){
                Ext.Viewport.setMenu(this.createMenu(),{
                    side: 'left',
                    reveal: true
                });
            }
        }
    },
 
    createMenu: function(){
 
        //Menu items
        var items = [

            {
                xtype: 'button',
                id: 'profilButton',
                text: 'Profil',
                iconCls: 'user',
                cls: 'menu-button'
            },

            {
                xtype: 'button',
                id: 'logOffButton',
                text: 'Ausloggen',
                iconCls: 'settings',
                cls: 'menu-button',
                scope: this,
                handler: function(){
                    var me = this;
                    me.fireEvent('signOffCommand', me);
                }
            }
        ];
 
        //Create menu
        return Ext.create('Ext.Menu', {
            style: 'padding: 0',
            cls: 'nav-menu',
            id: 'menu',
            width: 250,
            scrollable: 'vertical',
            items: items
        });
    }
 
});