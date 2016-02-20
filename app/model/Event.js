Ext.define('EventMap.model.Event', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
           {name:'id' ,type:'int'},
           {name:'title', type:'string'} ,
      	   {name:'content', type:'string'} ,
      	   {name:'link', type:'string'},
           {name:'longitude', type:'float'} ,
      	   {name:'latitude', type:'float'},
           { name: 'created_at',  type: 'date', dateFormat: 'Y-m-d H:i:s', dateReadFormat: 'Y-m-d H:i:s', dateWriteFormat: 'Y-m-d H:i:s' },
           { name: 'updated_at',  type: 'date', dateFormat: 'Y-m-d H:i:s', dateReadFormat: 'Y-m-d H:i:s', dateWriteFormat: 'Y-m-d H:i:s' },
           { name: 'deleted_at',  type: 'date', dateFormat: 'Y-m-d H:i:s', dateReadFormat: 'Y-m-d H:i:s', dateWriteFormat: 'Y-m-d H:i:s' },
           {name:'type', type:'string'},
           { name: 'Begin',  type: 'date', dateFormat: 'Y-m-d H:i:s', dateReadFormat: 'Y-m-d H:i:s', dateWriteFormat: 'Y-m-d H:i:s' },
           { name: 'End',  type: 'date', dateFormat: 'Y-m-d H:i:s', dateReadFormat: 'Y-m-d H:i:s', dateWriteFormat: 'Y-m-d H:i:s' },
           {name:'Adresse', type:'string'},
           {name:'user_id', type:'string'}
        ],
        proxy: {
            type: 'rest',
            url: '../rest/events',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'json',
                writeAllFields: true
            }
        }
    }
});
