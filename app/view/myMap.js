Ext.define('EventMap.view.myMap', {
	extend:'Ext.Map',
	xtype: 'myMap',

	config: {
		mapOptions:{
		useCurrentLocation: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 15
		}
	},

/*	//remove all markers
	clearMarker: function() {
		for (var i=0; i<this.mapMarkers.length; i++) {
			this.mapMarkers[i].setMap(null);
		}
		this.mapMarkers = new Array();
	},
*/
	initialize: function() {
		var gMap = this.getMap();
//		this.initializeMarkers();
		//add trafic layer
	 	var trafficLayer = new google.maps.TrafficLayer();
	 	trafficLayer.setMap(gMap);
	 	
		//drop Map Markers
		var marker = new google.maps.Marker({
			map:gMap,
			animation: google.maps.Animation.DROP,
			position: new google.maps.LatLng (50.2, 10.0),
		});
	}
/*
	initializeMarkers: function(){
        var name = "",
            txt= "",
            distance= 0,
            infoWindow = new google.maps.InfoWindow,
			store = Ext.getStore('Events');
			gMap = this.getMap();

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

	}*/

});