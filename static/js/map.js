// jQuery for loading dataMap
$(function() {
	// Map configurations
	map = new Datamap({
		element: document.getElementById('map'),
		scope:'usa',
		responsive:true,
		fills: {
			'Hawks': '#e13a3e',
			'Celtics': '#008348',
			'Hornets': '#1d1160',
			'Bulls': '#ce1141',
			'Cavaliers': '#860038',
			'Mavericks': '#007dc5',
			'Nuggets': '#4d90cd',
			'Pistons': '#ed174c',
			'Warriors': '#fdb927',
			'Rockets': '#ce1141',
			'Pacers': '#ffc633',
			'Clippers': '#ed174c',
			'Lakers': '#fdb927',
			'Grizzlies': '#0f586c',
			'Heat': '#98002e',
			'Bucks': '#00471b',
			'Timberwolves': '#005083',
			'Nets': '#061922',
			'Pelicans': '#b4975a',
			'Knicks': '#f58426',
			'Thunder': '#007dc3',
			'Magic': '#007dc5',
			'Sixers': '#c4ced3',
			'Suns': '#e57020',
			'TrailBlazers': '#e03a3e',
			'Kings': '#724c9f', 
			'Spurs': '#061922',
			'Raptors': '#ce1141',
			'Jazz': '#00471b',
			'Wizards': '#e31837',
			'defaultFill':'#9ad3de'
		},
//		filters: {
//			'Hawks': 'url(#Hawks-icon)',
//			'Celtics': 'url(#Celtics-icon)'
//		},
		geographyConfig: {
			hideHawaiiAndAlaska: true,
			highlightOnHover: false,
			popupOnHover:false
//			borderColor: '#333',
		},
		bubblesConfig: {
			exitDelay: 0,
			popupTemplate: function(geograph, data) {
				return '<div class="hoverinfo"><strong>' + data.name + '</strong>' + data.radius + '</div>';
			}
		}
	});
	arenas = [
		{
			name: 'Hawks',
			radius:25,
			latitude: 33.757,
			longitude: -84.396,
			fillKey: 'Hawks',
		}, {
			name: 'Celtics',
			radius:25,
			latitude: 42.366,
			longitude: -71.062,
			fillKey: 'Celtics',
		}, {
			name: 'Hornets',
			radius:25,
			latitude: 35.225,
			longitude: -80.839,
			fillKey: 'Hornets'
		}, {
			name: 'Bulls',
			radius:25,
			latitude: 41.881,
			longitude: -87.674,
			fillKey: 'Bulls'
		}, {
			name: 'Cavaliers',
			radius:25,
			latitude: 41.4964,
			longitude: -81.6881,
			fillKey: 'Cavaliers'
		}, {
			name: 'Mavericks',
			radius:25,
			latitude: 32.791,
			longitude: -96.81,
			fillKey: 'Mavericks'
		}, {
			name: 'Nuggets',
			radius:25,
			latitude: 39.749,
			longitude: -105.01,
			fillKey: 'Nuggets'
		}, {
			name: 'Pistons',
			radius:25,
			latitude: 42.697,
			longitude: -83.246,
			fillKey: 'Pistons'
		}, {
			name: 'Warriors',
			radius:25,
			latitude: 37.75,
			longitude: -122.203,
			fillKey: 'Warriors'
		}, {
			name: 'Rockets',
			radius:25,
			latitude: 29.751,
			longitude: -95.362,
			fillKey: 'Rockets'
		}, {
			name: 'Pacers',
			radius:25,
			latitude: 39.764,
			longitude: -86.156,
			fillKey: 'Pacers'
		}, {
			name: 'Clippers',
			radius:25,
			latitude: 34.143,
			longitude: -118.267,
			fillKey: 'Clippers'
		}, {
			name: 'Lakers',
			radius:25,
			latitude: 33.943,
			longitude: -118.267,
			fillKey: 'Lakers'
		}, {
			name: 'Grizzlies',
			radius:25,
			latitude: 35.138,
			longitude: -90.051,
			fillKey: 'Grizzlies'
		}, {
			name: 'Heat',
			radius:25,
			latitude: 25.781,
			longitude: -80.188,
			fillKey: 'Heat'
		}, {
			name: 'Bucks',
			radius:25,
			latitude: 43.024,
			longitude: -88.016,
			fillKey: 'Bucks'
		}, {
			name: 'Timberwolves',
			radius:25,
			latitude: 44.585,
			longitude: -93.163,
			fillKey: 'Timberwolves'
		}, {
			name: 'Nets',
			radius:25,
			latitude: 40.683,
			longitude: -73.975,
			fillKey: 'Nets'
		}, {
			name: 'Pelicans',
			radius:25,
			latitude: 29.949,
			longitude: -90.082,
			fillKey: 'Pelicans'
		}, {
			name: 'Knicks',
			radius:25,
			latitude: 40.452,
			longitude: -73.594,
			fillKey: 'Knicks'
		}, {
			name: 'Thunder',
			radius:25,
			latitude: 35.275,
			longitude: -97.305,
			fillKey: 'Thunder'
		}, {
			name: 'Magic',
			radius:25,
			latitude: 28.539,
			longitude: -81.384,
			fillKey: 'Magic'
		}, {
			name: 'Sixers',
			radius:25,
			latitude: 39.901,
			longitude: -75.172,
			fillKey: 'Sixers'
		}, {
			name: 'Suns',
			radius:25,
			latitude: 33.446,
			longitude: -112.071,
			fillKey: 'Suns'
		}, {
			name: 'TrailBlazers',
			radius:25,
			latitude: 45.532,
			longitude: -122.667,
			fillKey: 'TrailBlazers'
		}, {
			name: 'Kings',
			radius:25,
			latitude: 38.649,
			longitude: -121.518,
			fillKey: 'Kings'
		}, {
			name: 'Spurs',
			radius:25,
			latitude: 29.254,
			longitude: -98.262,
			fillKey: 'Spurs'
		}, {
			name: 'Raptors',
			radius:25,
			latitude: 43.643,
			longitude: -79.379,
			fillKey: 'Raptors'
		}, {
			name: 'Jazz',
			radius:25,
			latitude: 40.768,
			longitude: -111.901,
			fillKey: 'Jazz'
		}, {
			name: 'Wizards',
			radius:25,
			latitude: 38.898,
			longitude: -77.021,
			fillKey: 'Wizards'
		}
			
	];
	
	
	// Fill map with arenas
	map.bubbles(arenas);
	// Custom icons for bubbles - TODO
//	for (i = 0; i < Object.keys(arenas).length; i++) {
//		var name = arenas[i]['name'];
//		
//		$('svg g.bubbles').prepend("<filter id='" + name + "-icon' x='0%' y='0%' width='100%' height='100%'><feImage xlink:href='/static/images/"+ name + ".png'" + "/></filter>")
//
//		$('circle[data-info]').filter(function() {
//			return $(this).data('info').name == name;
//		}).attr('filter', 'url(#' + name + "-icon)");
//	}
//	
	window.addEventListener('resize', function() {
		map.resize();
	});
		
});
	