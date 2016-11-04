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
        Write_Acordeon("SKYACTIV-G : Motor", "Tipo|Turbocargador|Cilindraje (c.c.)|Número de cilindros|Relación de compresión|Potencia máxima (hp/r.p.m.)|Torque máximo (kg-m/r.p.m.)|Tipo de combustible|Intercooler|Sistema de combustible|Capacidad tanque de combustible (gal)");
        Write_Acordeon("SKYACTIV-DRIVE : Transmisión", "Tipo|Tracción");
        Write_Acordeon("Relaciones de caja", "1ª|2ª|3ª|4ª|5ª|6ª|Reversa|Relación final de eje|Convertidor de torque|Selección modo de conducción|Relación de transferencia|Protector metálico");
        Write_Acordeon("SKYACTIV-CHASSIS : Suspensión", "Delantera|Capacidad del eje Delantero (kg)|Trasera|Capacidad del eje  Trasero(kg)|Diferencial de deslizamiento limitado (LSD)");
        Write_Acordeon("Ruedas", "Rin|Llantas|Llanta de repuesto|Copa");
        Write_Acordeon("Dirección", "Tipo|Radio de giro entre andenes (m)|Volante con cuero|Control de cambios en el volante");
        Write_Acordeon("Sistema de Frenos", "Tipo|Delanteros|Traseros|Parqueo ");
        Write_Acordeon("Dimensiones y pesos", "Longitud total (mm)|Ancho total (mm)|Altura total (mm)|Distancia entre ejes (mm)|Trocha delantera (mm)|Trocha trasera (mm)|Voladizo delantero (mm)|Voladizo trasero (mm)|Capacidad del baúl (L)|Peso vacío (kg)|Peso bruto vehicular (kg)|Capacidad de carga (kg)|Capacidad de arrastre con frenos (kg)|Capacidad de arrastre sin frenos (kg)");
        Write_Acordeon("Cabina", "Cabina|Barras de impacto lateral");
        Write_Acordeon("Seguridad pasiva", "Apoyacabezas|Cinturones de seguridad|Columna de dirección|Pedal de freno|Airbags |Apoyacabezas traseros");
        Write_Acordeon("Seguridad proactiva i-ACTIVSENSE", "Sistema inteligente de iluminación frontal (ADB)|Asistencia de permanencia en carril (LKA)|Asistencia inteligente de frenado en ciudad delantero (SCBS)|Asistencia inteligente de frenado en ciudad trasero (SCBS)|Sistema avanzado de monitoreo de punto ciego (BSM)|Señal de frenado de emergencia (ESS)|Asistencia de arranque en pendiente (HLA)|Alerta de atención del conductor (DAA)");
        Write_Acordeon("Seguridad activa", "Sistema de frenos ABS + EBD + BA|Control Dinámico de Estabilidad (DSC)|Sistema control de tracción (TCS)|Luces delanteras|Luces traseras LED|Automáticas (sensor de luz)|Ajuste de altura automático|Sistema de Monitoreo de Presión de Llantas (TPMS)|Sensores de parqueo |Cámara de reversa|Prelación de frenado sobre aceleración (BOS)|Control adaptativo de la carga (LAC)|Control antivuelco (RCS)|Asistencia para descenso de pendientes (HDC)|Señal de frenado de emergencia (ESS)|Asistencia de arranque en pendiente (HLA)");
        Write_Acordeon("SKYACTIV-BODY : Platon", "Platón");
        Write_Acordeon("Equipamiento exterior", "Techo corredizo \"Sunroof\"|Spoiler quinta puerta|Exploradoras|Estribos laterales|Parachoques|Protector platón");
        Write_Acordeon("SKYACTIV-BODY : Diseño cabina", "Medidores panel de instrumentos");
        Write_Acordeon("Equipamiento interior", "Asientos delanteros Tipo|Asientos delanteros Accionamiento|Asientos delanteros Calefacción|Asientos delanteros Memorias|Asientos traseros|Descansabrazos central con 2 portavasos|Asientos traseros Tercera fila|Descansabrazos Tercera fila|Asientos en tela|Asientos con cuero/vinil-cuero|Palanca de cambios con cuero|Palanca freno de parqueo con cuero|Parasoles|Parasol eléctrico trasero|Cubierta zona de carga|Panel de instrumentos|Paneles puertas|Ceniceros|Consola piso|Compartimiento porta gafas");
        Write_Acordeon("MAZDA CONNECT", "Radio|Bluetooth®|Parlantes|Display|Comandos de voz|Navegador GPS|Botón multicomando|Pantalla activa de conducción (a color)");
        Write_Acordeon("Otros", "Espejo interior día/noche |Espejos retrovisores exteriores|Direccional incorporada|Abatibles eléctricamente de forma  automática|Encendido por botón|Vidrios eléctricos|Limpiaparabrisas delantero|Automático con sensor de lluvia|Control de sobremarcha Kick Down Switch|Limpiaparabrisas trasero|Aire acondicionado|Computador de abordo|Control de velocidad crucero|Apagado automático de luces (temporizador)|Anclajes sillas de seguridad niños|Ganchos anclaje para transporte|Apertura baúl|Desempañador vidrio trasero|Herramientas");
        Write_Acordeon("Seguridad antirrobo", "Bloqueo central eléctrico|Apertura inteligente de puertas|Alarma antirrobo|Sistema inmovilizador antirrobo|Bloqueo dirección|Bloqueo seguros puerta");
        Write_Acordeon("Precio", "Precio");

        $("#accordion").accordion({
            collapsible: false,
            active: 8,
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
            $("#" + list).append("<option value='Mazda2TouringMT'>Touring Sport SKYACTIV-MT 6 vel</option>");
            $("#" + list).append("<option value='Mazda2TouringDRIVE'>Touring Sport SKYACTIV-DRIVE 6 vel</option>");
            $("#" + list).append("<option value='Mazda2GrandTouringMT'>Grand Touring Sport SKYACTIV-MT 6 vel</option>");
            $("#" + list).append("<option value='Mazda2GrandTouringDRIVE'>Grand Touring Sport SKYACTIV-DRIVE 6 vel</option>");
            imgv.src = "img/Mazda-2.png";
        } else if (veh == "Mazda6") {
            $("#" + list).append("<option value='Mazda6GTLX'>2,5L Grand Touring LX</option>");
            imgv.src = "img/Mazda-6.png";
        } else if (veh == "MazdaCX3") {
            $("#" + list).append("<option value='MazdaCX3TouringMT'>Touring-SKYACTIV-MT 6 vel</option>");
            $("#" + list).append("<option value='MazdaCX3TouringDRIVE'>Touring-SKYACTIV-DRIVE 6 vel</option>");
            $("#" + list).append("<option value='MazdaCX3GrandTouringDRIVE'>Grand Touring-SKYACTIV-DRIVE 6 vel</option>");
            $("#" + list).append("<option value='MazdaCX3GrandTouringLX'>Grand Touring LX-SKYACTIV-DRIVE 6 vel</option>");
            imgv.src = "img/CX3.png";
        } else if (veh == "MazdaCX5") {
            $("#" + list).append("<option value='MazdaCX5PrimeMT'>Prime  MT</option>");
            $("#" + list).append("<option value='MazdaCX5PrimeAT'>Prime AT</option>");
            $("#" + list).append("<option value='MazdaCX5Touring4x2'>Touring 4x2</option>");
            $("#" + list).append("<option value='MazdaCX5TouringAWD'>Touring AWD</option>");
            $("#" + list).append("<option value='MazdaCX5GranTouring'>Grand Touring 2,5L. AWD</option>");
            $("#" + list).append("<option value='MazdaCX5GrandTouringLX'>Grand Touring LX 2,5L. AWD</option>");
            imgv.src = "img/MazdaCX5_v2.png";
        } else if (veh == "MazdaBT-50") {
            $("#" + list).append("<option value='MazdaBT50Mec'>Doble Cabina Mecánica 6 Vel</option>");
            $("#" + list).append("<option value='MazdaBT50Aut'>Doble Cabina Automática 6 Vel</option>");
            imgv.src = "img/BT-50-professional.png";
        } else if (veh == "MazdaCX9") {
            $("#" + list).append("<option value='MazdaCX9GrandTouringLX'>Grand Touring LX</option>");
            imgv.src = "img/CX9.png";
        } else if (veh == "Mazda3") {
            $("#" + list).append("<option value='Mazda3PrimeSed'>Prime-Sedán MT</option>");
            $("#" + list).append("<option value='Mazda3PrimeSedDRIVE'>Prime-Sedán DRIVE</option>");
            $("#" + list).append("<option value='Mazda3TouringSedMT'>Touring-Sedán MT</option>");
            $("#" + list).append("<option value='Mazda3TouringSedDRIVE'>Touring-Sedán DRIVE</option>");
            $("#" + list).append("<option value='Mazda3TouringSport'>Touring-Sport</option>");
            $("#" + list).append("<option value='Mazda3GrandTouringSed'>Grand Touring-Sedán</option>");
            $("#" + list).append("<option value='Mazda3GrandTouringSport'>Grand Touring-Sport</option>");
            $("#" + list).append("<option value='Mazda3GrandTouringLXSed'>Grand Touring LX-Sedán</option>");
            $("#" + list).append("<option value='Mazda3GrandTouringLXSport'>Grand Touring LX-Sport</option>");
            imgv.src = "img/Mazda-3.png";
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
        var htmlSubGrupo="";
        var htmlIcono = "";

        //# 1 
        html = "<h3 class='title'>" + arrayGroup[0].Group + "</h3>"; //acordeon title. 
        html = html + "<div class='content'>"; // div Group, acordeon content. 

         htmlGroup = "<h3 class='title'>" + arrayGroup[0].Group + "</h3>"; //acordeon title. 
        htmlGroup = htmlGroup + "<div class='content'>"; // div Group, acordeon content. 

        ArrSubGroups.forEach(function(itemSubGroup) {

            var array_features = $.grep(arrayGroup, function(element, index) { //get all the elements of the sub-group.
                return element.SubGroup == itemSubGroup; //Sub-Group
            });
            //# 2
            //html = html + "<div class='wrap'>"; //div Sub-Group
            htmlSubGrupo="<div class='wrap'>"; //div Sub-Group

            var namesubgroup = array_features[0].SubGroup;
            array_features.forEach(function(item) {

             if((item[veh1]=="-" && item[veh2]=="-" && item[veh3]=="-")) //don't show the group when all vehicules has value "-".
                {
                    //html = html + "<h1>NO PINTAR<h1>";
                    htmlIcono="";
                }
                else
                {
                    if (item.Orden == 0) //first element of the array bring the image url, every sub-group has an image.
                    {
                        htmlIcono = htmlIcono + "<img src=img/" + item.Url + ".png >";
                        htmlIcono = htmlIcono + "<h4>" + namesubgroup + "</h4>"; //name Sub-Group.
                    }
                    else {
                        //# 3

                        htmlSubGrupo = htmlSubGrupo + htmlIcono;
                        htmlIcono="";

                        if(item.Orden == 2) //multi features only one icon.
                        {
                            htmlSubGrupo = htmlSubGrupo + "<h4 class='sub-title'>" + item.feature + "</h4>"; //name Sub-Group.
                        }

                         htmlSubGrupo = htmlSubGrupo + "<div class='details'>";

                        if (veh2 == 0 && veh3 == 0) 
                        {
                            //if(item[veh1]!="-")
                                 htmlSubGrupo = htmlSubGrupo + "<div class='vehicle'><h3>" + item[veh1] + "</h3></div>"; //if not choose any car to compare only show one column.
                        }
                        else if (veh2 != 0 && veh3 == 0)
                        {
                           // if(item[veh1]!="-" && item[veh2]!="-")
                                htmlSubGrupo = htmlSubGrupo + "<div class='vehicle'><h3>" + item[veh1] + "</h3></div><hr><div class='vehicle'><p>" + item[veh2] + "</p></div>"; //if choose one car to compare show two column.
                        }
                        else if (veh2 != 0 && veh3 != 0) 
                        {
                            //if(item[veh1]!="-" && item[veh2]!="-" && item[veh3]!="-")
                                htmlSubGrupo = htmlSubGrupo + "<div class='vehicle'><h3>" + item[veh1] + "</h3></div><hr><div class='vehicle'><p>" + item[veh2] + "</p></div><hr><div class='vehicle'><p>" + item[veh3] + "</p></div>"; //if choose both cars show all the columns.
                        }

                        htmlSubGrupo = htmlSubGrupo + "</div>";
                        //# 3
                    }

                }
            });
            
            if(htmlSubGrupo.length>30)
            {
                 html = html + htmlSubGrupo + "</div>";
            }

        });
        //# 1
         htmlGroup=htmlGroup+ htmlSubGrupo + html;
        if(htmlGroup.length>190)
        {
            $("#accordion").append(html);
        }

    }
