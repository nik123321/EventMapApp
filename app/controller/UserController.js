Ext.define('EventMap.controller.UserController', {
    extend: 'Ext.app.Controller',
    util: 'EventMap.util.Utility',
    
    config: {
        refs: {
            main: 'mainview',
            profil: 'profilview',
            profilbutton: '#profilButton',
            changebutton: '#changeButton'
                 
        },
        control: {
            profilbutton: {
                tap: 'onProfilJoin'
            },
            changebutton: {
                tap: 'onMainJoin'
            }
        }
    },

    onProfilJoin: function() {

        if(!Ext.Viewport.getMenus().left.isHidden())
        {
            Ext.Viewport.hideMenu('left');
        }
 
        Ext.Viewport.animateActiveItem(this.getProfil(), this.getSlideRightTransition());
    },

    onMainJoin: function() {

        if(!Ext.Viewport.getMenus().left.isHidden())
        {
            Ext.Viewport.hideMenu('left');
        }
 
        Ext.Viewport.animateActiveItem(this.getMain(), this.getSlideRightTransition());
    },

    getSlideLeftTransition: function(){
        return { type: 'slide', direction: 'left'};
    },
 
    getSlideRightTransition: function(){
        return { type: 'slide', direction: 'right'};
    },



});
