$( function() {
    $( "#veh2" ).selectmenu({
		   position: { my : "top+20%", at: "center" },
		    change: function( event, data ) {
		         change_vehicle();
		       }
		});
    $( "#veh3" ).selectmenu({
		    position: { my : "top+20%", at: "center" },
		  	 change: function( event, data ) {
        		 change_vehicle();
      		 }
		});


} );