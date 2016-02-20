Ext.define('EventMap.view.friends.FriendList', {
    extend: 'Ext.List',
    xtype: 'friendlist',
    requires: ['EventMap.store.Friends'],
    
    config: {
        title: 'Freund Liste',
        grouped: true,
        itemTpl: '{firstName} {lastName}',
        store: 'Friends',
        onItemDisclosure: true
    }
});
