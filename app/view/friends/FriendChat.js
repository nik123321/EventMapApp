Ext.define('EventMap.view.friends.FriendChat', {
    extend: 'Ext.Panel',
    xtype: 'friendchat',

    config: {
        title: 'Chat',
        styleHtmlContent: true,
        scrollable: 'vertical',
        /*tpl: [
            'Chat mit {firstName}!'
        ]*/
        cls: 'friendchat-view',
 
         layout: {
              type: 'vbox',
              pack: 'center',
              align: 'center'
         },

        items: [
    
            {
                xtype: 'fieldset',
                style: 'margin-top: 60px; width: 260px;',
                items: [
                       {
                            xtype: 'textareafield',
                            name : 'message',
                            label: 'Message'
                        },
                       
                       {
                            xtype: 'button',
                            itemId: 'sendButton',
                            ui: 'action',
                            padding: '10px',
                            text: 'Senden'
                       },
                  ]
            },
        ]

    }
});
