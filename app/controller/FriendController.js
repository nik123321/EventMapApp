Ext.define('EventMap.controller.FriendController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            main: 'friendview'
        },
        control: {
            'friendlist': {
                disclose: 'showChat'
            }
        }
    },

    showChat: function(list, record) {
        this.getMain().push({
            xtype: 'friendchat',
            title: 'Chat mit ' + record.fullName(),
            data: record.getData()
        })
    }

});
