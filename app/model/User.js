Ext.define('EventMap.model.User', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.identifier.Uuid'],
    config: {

        identifier: {
               type: 'uuid'
        },

        fields: [
            { name: 'id', type: 'int' },
        	{ name: 'firstname', type: 'string' },
        	{ name: 'lastname',  type: 'string' },
            { name: 'email',  type: 'string' },
            { name: 'username',  type: 'string' },
        	{ name: 'created_at',  type: 'date', dateFormat: 'Y-m-d H:i:s', dateReadFormat: 'Y-m-d H:i:s', dateWriteFormat: 'Y-m-d H:i:s' },
        	{ name: 'updated_at',  type: 'date', dateFormat: 'Y-m-d H:i:s', dateReadFormat: 'Y-m-d H:i:s', dateWriteFormat: 'Y-m-d H:i:s' },
            { name: 'deleted_at',  type: 'date', dateFormat: 'Y-m-d H:i:s', dateReadFormat: 'Y-m-d H:i:s', dateWriteFormat: 'Y-m-d H:i:s' }
        ],

        validations: [
            {
                type: 'email',
                field: 'email',
                message: 'Please enter a valid email address'
            }
        ],

        proxy: {
            type: 'rest',
            url: '../rest/users',
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
