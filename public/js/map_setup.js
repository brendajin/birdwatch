var map = L.map('map').setView([8.4333333333333, - 77.966666666667], 2);

		L.tileLayer('http://{s}.tile.cloudmade.com/{key}/22677/256/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2012 CloudMade',
			key: 'BC9A493B41014CAABB98F0471D759707'
		}).addTo(map);

		var broadwinghawkIcon = L.icon({
			iconUrl: '../img/bird-map.png',
			iconSize: [64, 74],
			iconAnchor: [30, 25],
			popupAnchor: [0, -28]
		});

		function onEachFeature(feature, layer) {

			if (feature.properties ) {
				popupContent = feature.properties.popupContent;
			}

			layer.bindPopup(popupContent);
		}

		L.geoJson([broad_wing_hawk], {

			style: function (feature) {
				return feature.properties && feature.properties.style;
			},

			onEachFeature: onEachFeature,

			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 8,
					fillColor: "#ff7800",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
			}
		}).addTo(map);
		
		L.geoJson(broad_wing_hawk_mig, { 
		
			style: function (feature) {
				return feature.properties && feature.properties.style;
			},
			onEachFeature: onEachFeature
		}).addTo(map);
		
		L.geoJson(broad_wing_hawk_sum, { 
		
			style: function (feature) {
				return feature.properties && feature.properties.style;
			},
			onEachFeature: onEachFeature
		}).addTo(map);
		
		L.geoJson(broad_wing_hawk_win, { 
		
			style: function (feature) {
				return feature.properties && feature.properties.style;
			},
			onEachFeature: onEachFeature
		}).addTo(map);
		
		
	
		var coorsLayer = L.geoJson(broad_wing_hawk_pic, {

			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: broadwinghawkIcon});
			},

			onEachFeature: onEachFeature
		}).addTo(map);

