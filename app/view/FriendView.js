Ext.define('EventMap.view.FriendView', {
    extend: 'Ext.navigation.View',
    xtype: 'friendview',

    config: {
        title: 'Freund Liste',
        iconCls: 'user',
        items: [{
            xtype: 'friendlist'
        }]
    }
});