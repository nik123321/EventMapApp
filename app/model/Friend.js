Ext.define('EventMap.model.Friend', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name:'firstName', type:'string'},
            {name:'middleInitial', type:'string'},
            {name:'lastName', type:'string'}
            ]
         
    },
     
    fullName: function() {
        var d = this.data,
        names = [
            d.firstName,
            (!d.middleInitial ? "" : d.middleInitial + "."),
            d.lastName
        ];
        return names.join(" ");
    }
});
