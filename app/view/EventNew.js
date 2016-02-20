Ext.define('EventMap.view.EventNew', {
    extend: 'Ext.Container',
    xtype: 'eventnew',
 
    /* Configure the tab here */
    config: {
        title: 'neuer Event',
        iconCls: 'favorites',
 
        /* Create a title bar for the tab panel */
        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Neuer Event'
        },
    },
 
    /*contents of tab */
    html: 'The about page'
 
});