Ext.define('EventMap.store.Users', {
    extend: 'Ext.data.Store',
    config: {
        model: 'EventMap.model.User',
        sorters: [
              {
                property: 'lastname',
                direction: 'DESC'
              }
        ],
        grouper : function(record) {
            return record.get('lastname')[0];
        },
        storeId: 'userStore',
        autoLoad: true
    }
});
