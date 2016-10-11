$( function() {
    $( "#veh2" ).selectmenu({
		   position: { my : "top+20%", at: "center" },
		    change: function( event, data ) {
		         change_tipe();
		       }
		});
    $( "#veh3" ).selectmenu({
		    position: { my : "top+20%", at: "center" },
		  	 change: function( event, data ) {
        		 change_tipe();
      		 }
		});
     $( "#tipveh2" ).selectmenu({
		   position: { my : "top+20%", at: "center" },
		    change: function( event, data ) {
		         change_vehicle();
		       }
		});
    $( "#tipveh3" ).selectmenu({
		    position: { my : "top+20%", at: "center" },
		  	 change: function( event, data ) {
        		 change_vehicle();
      		 }
		});


} );