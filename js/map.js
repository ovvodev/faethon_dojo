function initMap() {
	
	
    var mapDiv = document.getElementById('map');
    var mapDiv_two = document.getElementById('map_two');
    
	var myLang = {lat: 40.65077, lng: 22.94138};
	var myLang_two = {lat: 39.622567, lng: 24.999185};

    
    
    var map = new google.maps.Map(mapDiv , {
        center: myLang,
        zoom: 13,
        styles: [{ "featureType": "landscape", "elementType": "all", "stylers": [{ "hue": "#ff9c00" }, { "saturation": "78" }, { "lightness": "15" }, { "gamma": 1 }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "saturation": "-20" }, { "lightness": "6" }, { "gamma": 1 }, { "hue": "#0066ff" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "lightness": "0" }] }, { "featureType": "poi", "elementType": "labels.text", "stylers": [{ "gamma": "1.47" }, { "weight": "0.01" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "hue": "#FFC200" }, { "saturation": -61.8 }, { "lightness": 45.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 51.19999999999999 }, { "gamma": 1 }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 52 }, { "gamma": 1 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "saturation": -13.200000000000003 }, { "lightness": 2.4000000000000057 }, { "gamma": 1 }, { "color": "#161e2a" }] }],


    });
    
    
    var map_second = new google.maps.Map(mapDiv_two, {
	    center: myLang_two,
        zoom: 7,
        styles: [{ "featureType": "landscape", "elementType": "all", "stylers": [{ "hue": "#ff9c00" }, { "saturation": "78" }, { "lightness": "15" }, { "gamma": 1 }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "saturation": "-20" }, { "lightness": "6" }, { "gamma": 1 }, { "hue": "#0066ff" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "lightness": "0" }] }, { "featureType": "poi", "elementType": "labels.text", "stylers": [{ "gamma": "1.47" }, { "weight": "0.01" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "hue": "#FFC200" }, { "saturation": -61.8 }, { "lightness": 45.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 51.19999999999999 }, { "gamma": 1 }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 52 }, { "gamma": 1 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "saturation": -13.200000000000003 }, { "lightness": 2.4000000000000057 }, { "gamma": 1 }, { "color": "#161e2a" }] }],


    });

	
	
    var contentString = '<div id="content">' +
        '<div>' +
        '<h5 class="black-text font_semi_greek">Α.Σ. ΦΑΕΘΩΝ Θεσσαλονίκης</h5>' +
								'<p class="black-text font_light_greek">Ελ. Βενιζέλου 91,<br> 567 28, Νεάπολη,Θεσσαλονίκη <br>Τηλ 6972023688<br>' +
								'<a lang="en" class="black-text" href="mailto:ninpogr@gmail.com">ninpogr@gmail.com</a></p>' +
								'</div>' +
        '</div>';
        
    var contentStringEptapyrgio = '<div id="content">' +
        '<div>' +
        '<h5 class="black-text font_semi_greek">Α.Σ. Eπταπυργίου (Α.Σ φαεθων)</h5>' +
								'<p class="black-text font_light_greek">Eπταπυργιου 149<br>Θεσσαλονίκη <br>Τηλ 6975909713<br>' +
								'</div>' +
        '</div>';
        
    var contentStringKomotini = '<div id="content">' +
        '<div>' +
        '<h5 class="black-text font_semi_greek">BUJINKAN DOJO THRACE - Α.Ε.Σ. ΙΚΑΡΟΣ </h5>' +
								'<p class="black-text font_light_greek">Σκεπαστού 12 & Βοσπόρου γωνία,<br> Κομοτηνή <br>Τηλ 6984525594<br>' +
								'</p>' +
								'</div>' +
        '</div>'; 
    
    var contentStringSerres = '<div id="content">' +
        '<div>' +
        '<h5 class="black-text font_semi_greek">Α.Σ. ΦΑΕΘΩΝ Dojo Σερρών</h5>' +
								'<p class="black-text font_light_greek">Φιλώτα 6, Πλατεία Εμπορίου<br>Σέρρες <br>Τηλ 6972023688<br>' +
								'</p>' +
								'</div>' +
        '</div>';

      var contentStringChios = '<div id="content">' +
        '<div>' +
        '<h5 class="black-text font_semi_greek">DOJO Χίου</h5>' +
								'<p class="black-text font_light_greek"Γυμναστήριο Wave health and fitness Χατζηφραγκούλη Ανδρεάδη 173,<br> 82200, Βελονάς - Βροντάδος, Χίος <br>Τηλ 2271093848, 6972865055<br>' +
								'</p>' +
								'</div>' +
        '</div>';

	
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    
	var infowindowEptapyrgio = new google.maps.InfoWindow({
        content: contentStringEptapyrgio
    });
    
     var infowindowKomotini = new google.maps.InfoWindow({
        content: contentStringKomotini
    });

     var infowindowSerres = new google.maps.InfoWindow({
        content: contentStringSerres
    });

     var infowindowChios = new google.maps.InfoWindow({
        content: contentStringChios
    });


	

    //Main Dojo
    var marker = new google.maps.Marker({
        icon: {
                url:"images/black_pin.png",
                scaledSize: new google.maps.Size(55, 74)
                //origin: new google.maps.Point(0, 0)
                //anchor: new google.maps.Point(0, 64)
        },
        position: {lat:40.652728, lng:22.9419524 },
        map: map,
        title: 'Α.Σ. ΦΑΕΘΩΝ',
        zIndex: google.maps.Marker.MAX_ZINDEX + 1
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    
    //Eptapyrgio
    var markerEptapyrgio = new google.maps.Marker({
	    icon: {
                url:"images/red_pin.png",
                scaledSize: new google.maps.Size(44, 59)
                //origin: new google.maps.Point(0, 0)
                //anchor: new google.maps.Point(0, 64)
        },
        position: {lat:40.642743, lng:22.953663},
        map: map,
        title: 'Α.Σ. Eπταπυργίου'
    });
    markerEptapyrgio.addListener('click', function () {
        infowindowEptapyrgio.open(map, markerEptapyrgio);
    });
    
    //Komotini
    var markerKomotini = new google.maps.Marker({
	    icon: {
                url:"images/red_pin.png",
                scaledSize: new google.maps.Size(44, 59)
                //origin: new google.maps.Point(0, 0)
                //anchor: new google.maps.Point(0, 64)
        },
        position: {lat:41.116111, lng:25.396295},
        map: map_second,
        title: 'Dojo Κομοτηνής'
    });
    markerKomotini.addListener('click', function () {
        infowindowKomotini.open(map, markerKomotini);
    });
    //Serres
    var markerSerres = new google.maps.Marker({
	    icon: {
                url:"images/red_pin.png",
                scaledSize: new google.maps.Size(44, 59)
                //origin: new google.maps.Point(0, 0)
                //anchor: new google.maps.Point(0, 64)
        },
        position: {lat:41.090691, lng:23.553995},
        map: map_second,
        title: 'Α.Σ. ΦΑΕΘΩΝ Dojo Σερρών'
    });
    markerSerres.addListener('click', function () {
        infowindowSerres.open(map, markerSerres);
    });
    //Chios
    var markerChios = new google.maps.Marker({
	    icon: {
                url:"images/red_pin.png",
                scaledSize: new google.maps.Size(44, 59)
                //origin: new google.maps.Point(0, 0)
                //anchor: new google.maps.Point(0, 64)
        },
        position: {lat: 38.410688, lng:26.129787},
        map: map_second,
        title: 'DOJO Χίου'
    });
    markerChios.addListener('click', function () {
        infowindowChios.open(map, markerChios);
    });
}

