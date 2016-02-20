Ext.define('EventMap.store.Friends', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'EventMap.model.Friend',
        autoLoad: true,
        sorters: 'lastName',
        grouper: {
            groupFn: function(record) {
                return record.get('lastName')[0];
            }
        },
        proxy: {
            type: 'ajax',
            url: 'friends.json',
            reader: {
                type: 'json',
                rootProperty: 'data',
            }
        }
    }
});
