Ext.define('EventMap.view.PostView', {
    extend: 'Ext.navigation.View',
    xtype: 'postview',
    requires: [
        'EventMap.view.PostList'
    ],
    config: {
        title: 'PostListe',
        iconCls:'maps',

        items: [
            {
                xtype: 'postlist'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        text: 'Neu',
                        itemId: 'postnew'
                        
                    }
                ]
                
            }
        ]
        
          
    }
    
});