Ext.define('EventMap.view.UserView', {
    extend: 'Ext.navigation.View',
    xtype: 'userview',
    requires: [
        'EventMap.view.UserList'
    ],
    fullscreen: true,
    config: {
        items: [
            {
                xtype: 'userlist'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        text: 'Neu',
                        itemId: 'usernew'
                        
                    }
                ]
                
            }
        ]
        
          
    }
    
});