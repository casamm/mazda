    var veh1 = "MazdaCX5PrimeMT";
    var veh2 = "Mazda6GTLX";
    var veh3 = "Mazda6GTLX";

    $(document).ready(function() {
        LoadHtml();
        $("#veh2").val("Mazda6");
        $("#veh3").val("Mazda6");
        change_tipe();
    });


    function LoadHtml() {
        $("#sect").html("<div id='accordion' class='accordion'></div>");
        Write_Acordeon("SKYACTIV-G : Motor", "Tipo|Cilindraje (c.c.)|Número de cilindros|Relación de compresión|Potencia máxima (hp/r.p.m.)|Torque máximo (kg-m/r.p.m.)|Tipo de combustible|Tanque de combustible (L)");
        Write_Acordeon("SKYACTIV-DRIVE : Transmisión", "Tipo");
        Write_Acordeon("Relaciones de caja", "1ª|2ª|3ª|4ª|5ª|6ª|Reversa|Relación final de eje|Convertidor de torque|Selección modo de conducción");
        Write_Acordeon("SKYACTIV-CHASSIS : Suspensión", "Delantera|Trasera");
        Write_Acordeon("Ruedas", "Rin|Llantas|Llanta de repuesto");
        Write_Acordeon("Dirección", "Tipo|Radio de giro entre andenes (m)|Volante con cuero|Control de cambios en el volante");
        Write_Acordeon("Sistema de Frenos", "Tipo|Delanteros|Traseros|Parqueo");
        Write_Acordeon("Dimensiones y pesos", "Longitud total (mm)|Ancho total (mm)|Altura total (mm)|Distancia entre ejes (mm)|Trocha delantera (mm)|Trocha trasera (mm)|Capacidad del baúl (L)|Peso vacío (kg)");
        //Write_Acordeon("SKYACTIV-BODY : Diseño cabina","Cabina|Seguridad pasiva|Seguridad proactiva i-ACTIVSENSE|Seguridad activa|Equipamiento exterior|Equipamiento interior|MAZDA CONNECT|Otros|Seguridad antirrobo");

        $("#accordion").accordion({
            collapsible: false,
            active: 7,
            heightStyle: "content"
        });

    }

    function change_tipe() {
        changeCarbyId($("#veh2").val(), "divTipveh2", "tipveh2", "2");
        changeCarbyId($("#veh3").val(), "divTipveh3", "tipveh3", "3");
        veh2 = $("#tipveh2").val();
        veh3 = $("#tipveh3").val();
        LoadHtml();

    }

    function changeCarbyId(veh, div, list, img) {
        var imgv = document.getElementById("img_veh" + img);

        $("#" + div).html("<select id='" + list + "' ></select>");
        if (veh == "Mazda2") {
            $("#" + list).append("<option value=''>Touring Sport SKYACTIV-MT 6 vel</option>");
            $("#" + list).append("<option value=''>Touring Sport SKYACTIV-DRIVE 6 vel</option>");
            $("#" + list).append("<option value=''>Grand Touring Sport SKYACTIV-MT 6 vel</option>");
            $("#" + list).append("<option value=''>Grand Touring Sport SKYACTIV-DRIVE 6 vel</option>");
            imgv.src = "img/Mazda-2.png";
        } else if (veh == "Mazda6") {
            $("#" + list).append("<option value='Mazda6GTLX'>2,5L Grand Touring LX</option>");
            imgv.src = "img/Mazda-6.png";
        } else if (veh == "MazdaCX3") {
            imgv.src = "img/CX3.png";
        } else if (veh == "MazdaCX5") {
            $("#" + list).append("<option value='MazdaCX5PrimeMT'>Prime  MT</option>");
            $("#" + list).append("<option value='MazdaCX5PrimeAT'>Prime AT</option>");
            $("#" + list).append("<option value='MazdaCX5Touring4x2'>Touring 4x2</option>");
            $("#" + list).append("<option value='MazdaCX5TouringAWD'>Touring AWD</option>");
            $("#" + list).append("<option value='MazdaCX5Touring4x2'>Grand Touring 2,5L. AWD</option>");
            $("#" + list).append("<option value='MazdaCX5GrandTouringLX'>Grand Touring LX 2,5L. AWD</option>");
            imgv.src = "img/MazdaCX5_v2.png";
        } else if (veh == "MazdaBT-50") {
            $("#" + list).append("<option value=''>Doble Cabina Mecánica 6 Vel</option>");
            $("#" + list).append("<option value=''>Doble Cabina Automática 6 Vel</option>");
            imgv.src = "img/BT-50-professional.png";
        } else if (veh == "MazdaCX9") {
            $("#" + list).append("<option value=''>Grand Touring LX</option>");
            imgv.src = "img/CX9.png";
        } else if (veh == "Mazda3") {
            $("#" + list).append("<option value=''>Prime-Sedán</option>");
            $("#" + list).append("<option value=''>Prime-Sedán</option>");
            $("#" + list).append("<option value=''>Touring-Sedán</option>");
            $("#" + list).append("<option value=''>Touring-Sedán</option>");
            $("#" + list).append("<option value=''>Touring-Sport</option>");
            $("#" + list).append("<option value=''>Grand Touring-Sedán</option>");
            $("#" + list).append("<option value=''>Grand Touring-Sport</option>");
            $("#" + list).append("<option value=''>Grand Touring LX-Sedán</option>");
            $("#" + list).append("<option value=''>Grand Touring LX-Sport</option>");
            imgv.src = "img/Mazda-3-HB.png";
        }

        $("#" + list).selectmenu({
            position: { my: "top+20%", at: "center" },
            change: function(event, data) {
                change_vehicle();
            }
        });
    }


    function change_vehicle() {
        veh2 = $("#tipveh2").val();
        veh3 = $("#tipveh3").val();
        LoadHtml();
    }

    function Write_Acordeon(GroupName, SubGroups) {

        objVeh = JSON.parse(ArrVeh);

        var arrayGroup = $.grep(objVeh.Specs, function(element, index) {
            return element.Group == GroupName; //Group
        });

        var ArrSubGroups = SubGroups.split('|');


        var html = "";

        //# 1 
        html = "<h3 class='title'>" + arrayGroup[0].Group + "</h3>"; //acordeon title. 
        html = html + "<div class='content'>"; // div Group, acordeon content. 


        ArrSubGroups.forEach(function(itemSubGroup) {

            var array_features = $.grep(arrayGroup, function(element, index) { //get all the elements of the sub-group.
                return element.SubGroup == itemSubGroup; //Sub-Group
            });
            //# 2
            html = html + "<div class='wrap'>"; //div Sub-Group
            var namesubgroup = array_features[0].SubGroup;
            array_features.forEach(function(item) {
                if (item.Orden == 0) //first element of the array bring the image url, every sub-group has an image.
                {
                    //html=html+"<img src="+  item.url +" >"; 
                    //html=html+"<img src='img/cilindraje.png' >";
                    html = html + "<img src=img/" + item.Url + ".png >";
                    html = html + "<h4>" + namesubgroup + "</h4>"; //name Sub-Group.
                } else {
                    //# 3
                    // html=html+"<div class='vehicle'><h3>" + item.feature + "</h3></div>";  // every feature and his value.

                    html = html + "<div class='details'>";
                    if (veh2 == 0 && veh3 == 0) {
                        html = html + "<div class='vehicle'><h3>" + item[veh1] + "</h3></div>"; //if not choose any car to compare only show one column.
                    } else if (veh2 != 0 && veh3 == 0) {
                        html = html + "<div class='vehicle'><h3>" + item[veh1] + "</h3></div><hr><div class='vehicle'><p>" + item[veh2] + "</p></div>"; //if choose one car to compare show two column.
                    } else if (veh2 != 0 && veh3 != 0) {
                        html = html + "<div class='vehicle'><h3>" + item[veh1] + "</h3></div><hr><div class='vehicle'><p>" + item[veh2] + "</p></div><hr><div class='vehicle'><p>" + item[veh3] + "</p></div>"; //if choose both cars show all the columns.
                    }
                    html = html + "</div>";
                    //# 3

                }
            });

            html = html + "</div>"; //close div Sub-Group
            //# 2

        });
        //# 1
        $("#accordion").append(html);

    }
