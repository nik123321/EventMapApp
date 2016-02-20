Ext.define('EventMap.view.EventList', {
    extend: 'Ext.List',
    xtype: 'eventlist',
    config: {
        scrollToTopOnRefresh: true,
        disableSelection: true,
        title: 'Events',
        conCls: 'settings',
        grouped: true,
        layout: 'fit',
        itemTpl: '{title}',
        
        store: 'Events'/*,
        listeners: {
            painted: function (element, options) {
                this.refresh();
            }
        }*/
    },


/*initialize: function() {
store = Ext.getStore('Events');
store.filter(dateFilter);
    }*/
});