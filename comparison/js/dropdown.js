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
		         change_vehicle();
		       }
		});
    $( "#tipveh3" ).selectmenu({
		    position: { my : "top+20%", at: "center" },
		  	 change: function( event, data ) {
        		 change_vehicle();
      		 }
		});



    $( "#veh2-desktop" ).selectmenu({
		   position: { my : "top+20%", at: "center" },
		    change: function( event, data ) {
		         change_tipe(2);
		       }
		});
    $( "#veh3-desktop" ).selectmenu({
		    position: { my : "top+20%", at: "center" },
		  	 change: function( event, data ) {
        		 change_tipe(3);
      		 }
		});
     $( "#tipveh2-desktop" ).selectmenu({
		   position: { my : "top+20%", at: "center" },
		    change: function( event, data ) {
		         change_vehicle();
		       }
		});
    $( "#tipveh3-desktop" ).selectmenu({
		    position: { my : "top+20%", at: "center" },
		  	 change: function( event, data ) {
        		 change_vehicle();
      		 }
		});


} );