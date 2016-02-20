Ext.define('EventMap.view.EventlistView', {
    extend: 'Ext.navigation.View',
    xtype: 'eventview',
    requires: [
        'EventMap.view.EventList'
    ],
    config: {
        title: 'EventListe',
        iconCls:'maps',

        items: [
            {
                xtype: 'eventlist'
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