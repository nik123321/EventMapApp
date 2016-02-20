Ext.define('EventMap.store.Posts', {
    extend: 'Ext.data.Store',
    config: {
        model: 'EventMap.model.Post',
        sorters: [
              {
                property: 'title',
                direction: 'DESC'
              }
        ],
        grouper : function(record) {
            return record.get('title')[0];
        },
        storeId: 'postStore',
        autoLoad: true
    }
});
