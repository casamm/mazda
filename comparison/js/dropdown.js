$( function() {
    $( "select" ).selectmenu({
		   position: { my : "top+10%", at: "center" },
		    change: function( event, data ) {
		         change_vehicle();
		       }
		});
} );