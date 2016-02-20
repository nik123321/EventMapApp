Ext.define('EventMap.view.profilview', {
    extend: 'Ext.Panel',
    alias: 'widget.profilview',
    requires: ['Ext.TitleBar'],   
    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: 'titlebar',
            title: 'Main Menu',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Log Off',
                    itemId: 'logOffButton',
                    align: 'right'
                }
            ]
        }],
        listeners: [{
            delegate: '#logOffButton',
            event: 'tap',
            fn: 'onLogOffButtonTap'
        }]
    },
    onLogOffButtonTap: function () {
        this.fireEvent('onSignOffCommand');
    }
});