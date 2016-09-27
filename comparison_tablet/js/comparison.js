(function($) {
  var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
  $.fn.nodoubletapzoom = function() {
    if (IS_IOS)
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) return; // not double-tap

        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(this).trigger('click').trigger('click');
      });
  };
})(jQuery);


    var veh1="MazdaCX5PrimeMT";  
    var veh2="Mazda6GTLX";  
    var veh3="Mazda6GTLX";

	$(document).ready(function() {
        LoadHtml();
   });


   function LoadHtml()
   {
      $("#sect").html("<div id='accordion' class='accordion'></div>"); 
 Write_Acordeon("SKYACTIV-G : Motor","Tipo|Cilindraje (c.c.)|Número de cilindros|Relación de compresión|Potencia máxima (hp/r.p.m.)|Torque máximo (kg-m/r.p.m.)|Tipo de combustible|Tanque de combustible (L)");
 Write_Acordeon("SKYACTIV-DRIVE : Transmisión","Tipo");
 Write_Acordeon("Relaciones de caja","1ª|2ª|3ª|4ª|5ª|6ª|Reversa|Relación final de eje|Convertidor de torque|Selección modo de conducción");
 Write_Acordeon("SKYACTIV-CHASSIS : Suspensión","Delantera|Trasera");
 Write_Acordeon("Ruedas","Rin|Llantas|Llanta de repuesto");
 Write_Acordeon("Dirección","Tipo|Radio de giro entre andenes (m)|Volante con cuero|Control de cambios en el volante");
 Write_Acordeon("Sistema de Frenos","Tipo|Delanteros|Traseros|Parqueo");
 Write_Acordeon("Dimensiones y pesos","Longitud total (mm)|Ancho total (mm)|Altura total (mm)|Distancia entre ejes (mm)|Trocha delantera (mm)|Trocha trasera (mm)|Capacidad del baúl (L)|Peso vacío (kg)");
 //Write_Acordeon("SKYACTIV-BODY : Diseño cabina","Cabina|Seguridad pasiva|Seguridad proactiva i-ACTIVSENSE|Seguridad activa|Equipamiento exterior|Equipamiento interior|MAZDA CONNECT|Otros|Seguridad antirrobo");
  		

  	$( "#accordion" ).accordion({
		    collapsible: true,
		    active: false,
		    heightStyle: "content"
	 });
  		 
   }

   function change_vehicle()
   {  
      veh2=$("#veh2").val();
      veh3=$("#veh3").val();

      var imgv1=document.getElementById("img_veh2");
      var imgv2=document.getElementById("img_veh3");
      
     
     if(veh2=="Mazda6GTLX")
     {
 		imgv1.src="img/Mazda6_v2.png";
     }
     else
     { 
     	imgv1.src="img/MazdaCX5_v2.png";
     }

     if(veh3=="Mazda6GTLX")
     {
 		imgv2.src="img/Mazda6_v2.png";
     }
     else
     { 
     	imgv2.src="img/MazdaCX5_v2.png";
     }

      LoadHtml();
   }

   function Write_Acordeon(GroupName, SubGroups)
   {

      objVeh = JSON.parse(ArrVeh);     

      var arrayGroup=$.grep(objVeh.Specs, function (element, index) {
        return element.Group == GroupName; //Group
      });

      var ArrSubGroups = SubGroups.split('|');

     
     var html="";

     //# 1 
     html="<h3 class='title'>" + arrayGroup[0].Group + "</h3>"; //acordeon title. 
     html=html+"<div class='content'>";  // div Group, acordeon content. 


      ArrSubGroups.forEach(function(itemSubGroup){   

             var array_features=$.grep(arrayGroup, function (element, index) {  //get all the elements of the sub-group.
                return element.SubGroup == itemSubGroup; //Sub-Group
             });
            //# 2
             html=html+"<div class='wrap'>";  //div Sub-Group
             var namesubgroup=array_features[0].SubGroup;
                array_features.forEach(function(item){ 
                    if(item.Orden==0) //first element of the array bring the image url, every sub-group has an image.
                    {
                       //html=html+"<img src="+  item.url +" >"; 
                       //html=html+"<img src='img/cilindraje.png' >";
                       html=html+"<img src=img/"+  item.Url +".png >"; 
                       html=html+"<h4>" +  namesubgroup  + "</h4>";  //name Sub-Group.
                    }
                    else
                    {
                        //# 3
                      // html=html+"<div class='vehicle'><h3>" + item.feature + "</h3></div>";  // every feature and his value.

                      	html=html+"<div class='details'>";
                       if(veh2==0 && veh3==0)  
                       {
                           html=html+"<div class='vehicle'><h3>" + item[veh1] + "</h3></div>";  //if not choose any car to compare only show one column.
                       }   
                       else if(veh2!=0 && veh3==0)
                       {
                           html=html+"<div class='vehicle'><h3>" + item[veh1] + "</h3></div><hr><div class='vehicle'><p>" + item[veh2] + "</p></div>"; //if choose one car to compare show two column.
                       }
                       else if(veh2!=0 && veh3!=0)
                       {
                           html=html+"<div class='vehicle'><h3>" + item[veh1] + "</h3></div><hr><div class='vehicle'><p>" + item[veh2] + "</p></div><hr><div class='vehicle'><p>" + item[veh3] + "</p></div>";  //if choose both cars show all the columns.
                       }
                       html=html+"</div>";
                       //# 3

                    }
                }); 

             html=html+"</div>";  //close div Sub-Group
             //# 2

      }); 
      //# 1
     $("#accordion").append(html); 


   }
