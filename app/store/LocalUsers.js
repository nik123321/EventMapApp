Ext.define('EventMap.store.LocalUsers', {
     extend: "Ext.data.Store",
     requires: ['EventMap.model.LocalUser'],
     config: {
          model: 'EventMap.model.LocalUser',
          storeId: 'LocalUsers',
 
          proxy: {
               type: 'localstorage'
          }
     }
});