Ext.define('EventMap.store.Events', {
    extend: 'Ext.data.Store',
    config: {
        model: 'EventMap.model.Event',
        autoLoad: true,
        sorters: [
              {
                property: 'title',
                direction: 'DESC'
              }
        ],

        grouper : function(record) {
            return record.get('title')[0];
        },
        storeId: 'Events'
    }
});

var dateFilter  = new Ext.util.Filter({
    filterFn: function(item) {
        var today = Date();
        console.log(today);
        console.log(item.get("begin"));
        return item.get("begin") <= (Date.parse(today)/1000); 
    }
});
