Ext.define('EventMap.view.PostList', {
    extend: 'Ext.List',
    xtype: 'postlist',
    config: {
        scrollToTopOnRefresh: true,
        disableSelection: true,
        title: 'Posts',
        grouped: true,
        layout: 'fit',
        itemTpl: '{title}, {content}',
        
        store: 'postStore'/*,
        listeners: {
            painted: function (element, options) {
                this.refresh();
            }
        }*/
    }
});
