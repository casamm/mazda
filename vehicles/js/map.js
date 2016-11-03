
var map,
    markers = [];

function initMap() {	  


// is Safari (safari tiene problemas con maps de google)
if( Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0)
{
	if($("#phone").hasClass("hidden"))
	{
		 map = new google.maps.Map(document.getElementById('mapdesktop'), {
				  center: {lat: 4.7215163, lng: -74.0711244}, 
				  scrollwheel: false,
				  zoom: 13
				});

		 var pos = {
			    lat: 4.7215163,
			    lng: -74.0711244
			};

			var marker = new google.maps.Marker({
	            position: pos,
	            map: map,
	            title: 'Hola mundo!',
	            icon: "img/here.gif",
	          optimized: false
	        });

			map.setCenter(pos);
			setMarkers(map);
	}
	else
	{	
	      map = new google.maps.Map(document.getElementById('mapphone'), {
				  center: {lat: 4.7215163, lng: -74.0711244}, 
				  scrollwheel: false,
				  zoom: 13
				});

	      	var pos = {
				    lat: 4.7215163,
				    lng: -74.0711244
				};

				var marker = new google.maps.Marker({
		            position: pos,
		            map: map,
		            title: 'Hola mundo!',
		            icon: "img/here.gif",
		          optimized: false
		        });

				map.setCenter(pos);
				setMarkersPhone(map);
	}
			
}
else
{
	var apiGeolocationSuccess = function(position) {
	if($("#phone").hasClass("hidden"))
	{
		 map = new google.maps.Map(document.getElementById('mapdesktop'), {
				  center: {lat: position.coords.latitude, lng: position.coords.longitude}, 
				  scrollwheel: false,
				  zoom: 13
				});

		 		var pos = {
				    lat: position.coords.latitude,
				    lng: position.coords.longitude
				};

				var marker = new google.maps.Marker({
		            position: pos,
		            map: map,
		            title: 'Hola mundo!',
		            icon: "img/here.gif",
		          optimized: false
		        });

				map.setCenter(pos);
				setMarkers(map);
	}
	else
	{	
	      map = new google.maps.Map(document.getElementById('mapphone'), {
				  center: {lat: position.coords.latitude, lng: position.coords.longitude}, 
				  scrollwheel: false,
				  zoom: 13
				});
	      var pos = {
				    lat: position.coords.latitude,
				    lng: position.coords.longitude
				};

				var marker = new google.maps.Marker({
		            position: pos,
		            map: map,
		            title: 'Hola mundo!',
		            icon: "img/here.gif",
		          optimized: false
		        });

				map.setCenter(pos);
				setMarkersPhone(map);
	}

				
  };
}


function setMarkersPhone(map) {
  // Adds markers to the map.
 objConces = JSON.parse(ArriConce);   

 objConces.Conce.forEach(function(item){ 

	  
	    var marker = new google.maps.Marker({
	      position: {lat: parseFloat(item.lat), lng: parseFloat(item.Lon)},
	      map: map,
	      title: item.Nombre
	    });  

		marker.addListener('click', function() {
		    SeleccionaConcesionario(item.Nombre,item.Ciudad,item.CodigoConce,item.CodigoSucu);
		});

		 markers.push(marker);
  }); 

}


function setMarkers(map) {
  // Adds markers to the map.
 objConces = JSON.parse(ArriConce);   

 objConces.Conce.forEach(function(item){ 

		//var contentString = "<div><h1>"+ item.Nombre  +"</h1><p>"+ item.Direccion +" <br>"+ item.Telefono +"</p></div>";



		/*var contentString = '<div id="iw-container">' +
                    '<div class="iw-title">'+  item.Nombre +'</div>' +
                    '<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">'+  item.Direccion +'</div>' +
                      '<div class="iw-subTitle">'+  item.Telefono +'</div>' +
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'*/


       var contentString = '<div id="iw-container">' +
                    '<div class="iw-title">' +  item.Nombre +' </div>' +
                    '<div class="iw-content">' +
                      /*'<div class="iw-subTitle">History</div>' +*/
                      /*'<img class="imgcon" src="img/mazdaConce.jpg" alt="Mazda" height="150" width="150">' +*/
                     /* '<p>Mazda la la la la la al ala al ala al .</p>' + 
                      '<div class="iw-subTitle">Contacts</div>' + */
                      '<p><img class="icoM" src="img/Icon_address.png" alt="Mazda"><div class="dir">'+ item.Direccion +'</div><br>'+
                      '<img class="icoM" src="img/Icon_phone.png" alt="Mazda">'+  item.Telefono +
                      '<br><br><img class="icoM" src="img/Icon_hora.png" alt="Mazda">'+  item.Horario +'</p>'+
                      '<input type="button" value="Seleccionar" onclick="SeleccionaConcesionario(\''+  item.Nombre  +'\',\''+  item.Ciudad  +'\','+ item.CodigoConce +','+  item.CodigoSucu +');">' +
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>';

	    var infowindow = new google.maps.InfoWindow({
		     content: contentString,
		     maxWidth: 350
		 });

	    var marker = new google.maps.Marker({
	      position: {lat: parseFloat(item.lat), lng: parseFloat(item.Lon)},
	      map: map,
	      title: item.Nombre
	    });  

		marker.addListener('click', function() {
		    infowindow.open(map, marker);
		});

		 markers.push(marker);

		 google.maps.event.addListener(map, 'click', function() {
		    infowindow.close();
		 });


	 // START INFOWINDOW CUSTOMIZE.
	  // The google.maps.event.addListener() event expects
	  // the creation of the infowindow HTML structure 'domready'
	  // and before the opening of the infowindow, defined styles are applied.
	  // *
	  google.maps.event.addListener(infowindow, 'domready', function() {

		    // Reference to the DIV that wraps the bottom of infowindow
		    var iwOuter = $('.gm-style-iw');

		    /* Since this div is in a position prior to .gm-div style-iw.
		     * We use jQuery and create a iwBackground variable,
		     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
		    */
		    var iwBackground = iwOuter.prev();

		    // Removes background shadow DIV
		    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

		    // Removes white background DIV
		    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

		    // Moves the infowindow 115px to the right.
		    iwOuter.parent().parent().css({left: '115px'});

		    // Moves the shadow of the arrow 76px to the left margin.
		    iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

		    // Moves the arrow 76px to the left margin.
		    iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

		    // Changes the desired tail shadow color.
		    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(64, 42, 48, 0.6) 0px 1px 6px', 'z-index' : '1'});

		    // Reference to the div that groups the close button elements.
		    var iwCloseBtn = iwOuter.next();

		    // Apply the desired effect to the close button
		    iwCloseBtn.css({width: '25', height: '25', opacity: '1', right: '41px', top: '3px', border: '6px solid rgb(1, 1, 1)', 'border-radius': '12px', 'box-shadow': '0 0 5px rgb(1, 1, 1)'});

		    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
		    if($('.iw-content').height() < 140){
		      $('.iw-bottom-gradient').css({display: 'none'});
		    }

		    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
		    iwCloseBtn.mouseout(function(){
		      $(this).css({opacity: '1'});
		    });
 		});
  }); 

}


var tryAPIGeolocation = function() {
	jQuery.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCY3HJoQPexmcsuaXZx927-hWTO75mvI28", function(success) {
		apiGeolocationSuccess({coords: {latitude: success.location.lat, longitude: success.location.lng}});
  })
  .fail(function(err) {
    alert("API Geolocation error! \n\n"+err);
  });
};

var browserGeolocationSuccess = function(position) {
	// Create a map object and specify the DOM element for display.
			var map = new google.maps.Map(document.getElementById('map'), {
			  center: {lat: position.coords.latitude, lng: position.coords.longitude}, 
			  scrollwheel: false,
			  zoom: 15
			});
			
			var infoWindow = new google.maps.InfoWindow({ map: map });
			var pos = {
			    lat: position.coords.latitude,
			    lng: position.coords.longitude
			};

			infoWindow.setPosition(pos);
			infoWindow.setContent('Usted esta Aqui.');
			map.setCenter(pos);
			
};

var browserGeolocationFail = function(error) {
  switch (error.code) {
    case error.TIMEOUT:
      break;
    case error.PERMISSION_DENIED:
      if(error.message.indexOf("Only secure origins are allowed") == 0) {
        tryAPIGeolocation();
      }
      break;
    case error.POSITION_UNAVAILABLE:
		var map = new google.maps.Map(document.getElementById('map'), {
		  center: {lat: 1, lng: 1}, 
		  scrollwheel: false,
		  zoom: 8
		});
      break;
  }
};

var tryGeolocation = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
    	browserGeolocationSuccess,
        browserGeolocationFail,
      {maximumAge: 50000, timeout: 20000, enableHighAccuracy: true});
  }
};

tryGeolocation();				
	

function showVisibleMarkers() {
    var bounds = map.getBounds(),
        count = 0;
                                   
    for (var i = 0; i < markers.length; i++) {
        var marker = markers[i],
            infoPanel = $('.info-' + (i+1) ); // array indexes start at zero, but not our class names :)
                                           
        if(bounds.contains(marker.getPosition())===true) {
            infoPanel.show();
            count++;
        }
        else {
            infoPanel.hide();
        }
    }
    
    console.log(count);
}



}
