﻿<!DOCTYPE html>
 <html>
     <body>
      
      <div id="map_canvas" style="width:425px; height:550px"></div> 

      <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script> 
      <script type="text/javascript"> 

        var map;
        var markers = [];
		var geocoder;
        var map;

        initialize();

        function initialize() {
			geocoder = new google.maps.Geocoder();
			
			var myOptions = {
				zoom: 10,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
			codeAddress("84403");
			addMarker("253 25th Street, Ogden, UT", "Roosters Brewing");
            addMarker("2501 Wall Ave, Ogden, UT","Union Grill");
            addMarker("195 25th Street, Ogden, UT", "jasoh!");
        }

		function codeAddress(address) {
			geocoder.geocode( { 'address': address}, function(results, status) {
			  if (status == google.maps.GeocoderStatus.OK) {
				map.setCenter(results[0].geometry.location);
			  } else {
				alert("Geocode was not successful for the following reason: " + status);
			  }
			});
			
		  }

        function addMarker(address, myTitle) {
          geocoder.geocode( { 'address': address}, function(results, status) {
			  if (status == google.maps.GeocoderStatus.OK) {
				var marker = new google.maps.Marker({
					map: map,
					title: myTitle,
					position: results[0].geometry.location
				});
			  } else {
				alert("Geocode was not successful for the following reason: " + status);
			  }
			});    
        }

      </script> 
    </body>
  </html>