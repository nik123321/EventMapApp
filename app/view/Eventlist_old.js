Ext.define('EventMap.view.Eventlist_old', {
    extend: 'Ext.navigation.View',
    xtype: 'eventlist_old',

    requires: [
        'EventMap.view.Contacts',
        'EventMap.view.contact.Show',
        'EventMap.view.contact.Edit'
    ],

    config: {
        title: 'Eventliste(alt)',
        iconCls: 'settings',
        autoDestroy: false,
        navigationBar: {
            splitNavigation: (Ext.theme.name == "Blackberry") ? {
                xtype: 'toolbar',
                items: [{
                    docked: 'right',
                    xtype: 'button',
                    iconCls: 'pencil',
                    id: 'editButton',
                    hidden: true
                },{
                    docked: 'right',
                    xtype: 'button',
                    iconCls: 'check',
                    id: 'saveButton',
                    hidden: true
                }]
            } : false,
            ui: (Ext.theme.name == "Blackberry") ? 'light' : 'sencha',

            items: [
                {
                    xtype: 'button',
                    id: 'editButton',
                    text: 'Edit',
                    align: 'right',
                    hidden: true,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                },
                {
                    xtype: 'button',
                    id: 'saveButton',
                    text: 'Save',
                    ui: 'sencha',
                    align: 'right',
                    hidden: true,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                }
            ]

        },

        items: [
            { xtype: 'contacts' }
        ]

    }
});
