Ext.define('EventMap.view.EventMap', {
    extend: 'Ext.Container',
    requires: ['Ext.Map', 'Ext.field.Slider'],
    xtype: 'eventmap',
 
    config: {
		title: 'Event Karte',
        iconCls: 'maps',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'map',
                mapOptions: {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 14
                },
                useCurrentLocation: true
            }
        ]
    },
 
    initialize: function(){
        var me = this;
        me.callParent(arguments);
        this.initMap();
        this.initializeMarkers();
    },

    initMap: function(){

         var mapPanel = this.down('map');
         var gMap = mapPanel.getMap();

         var panoramioLayer = new google.maps.panoramio.PanoramioLayer();
         panoramioLayer.setMap(gMap);

    },

    initializeMarkers: function(){
        var name = "",
            txt= "",
            distance= 0,
            infoWindow = new google.maps.InfoWindow,
            store = Ext.getStore('Events');
            mapPanel = this.down('map');
            gMap = mapPanel.getMap();

        store.getProxy().setUrl('../rest/events');
        store.on('load', function ()
        {
            var date=Date();
            var count = store.getCount();
            console.log(count);

            for(i=0;i<store.getCount();i++)
            {
                var record = store.getAt(i);
                    //begin = record.get('begin');
                    //end = record.get('end');
                    lng = record.get('longitude');
                    lat = record.get('latitude');

                var marker = new google.maps.Marker({
                    map: gMap,
                    animation: google.maps.Animation.DROP,
                    position: new google.maps.LatLng (lat, lng),
                });
                //this.mapMarkers.add(marker);
            }
        });

    }
});