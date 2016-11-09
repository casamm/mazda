$( function() {
    $( "#veh2" ).selectmenu({
		   position: { my : "top+20%", at: "center" },
		    change: function( event, data ) {
		         change_tipe(2);
		       }
		});
    $( "#veh3" ).selectmenu({
		    position: { my : "top+20%", at: "center" },
		  	 change: function( event, data ) {
        		 change_tipe(3);
      		 }
		});
     $( "#tipveh2" ).selectmenu({
		   position: { my : "top+20%", at: "center" },
		    change: function( event, data ) {
		         change_vehicle(this);
		       }
		});
    $( "#tipveh3" ).selectmenu({
		    position: { my : "top+20%", at: "center" },
		  	 change: function( event, data ) {
        		 change_vehicle(this);
      		 }
		});


} );