    var veh1 = "MazdaCX5PrimeMT";
    var veh2 = "Mazda2TouringMT";
    var veh3 = "Mazda2TouringMT";


    $(document).ready(function() {
        LoadHtml();
        $("#veh2").val("Mazda2");
        $("#veh3").val("Mazda2");
        change_tipe(2);
        change_tipe(3);
    });


    function LoadHtml() {
        if($("#phone").hasClass("hidden"))
        {
           $("#sect-desktop").html("<div id='accordion' class='accordion'></div>");     
        }
        else
        {
            $("#sect-phone").html("<div id='accordion' class='accordion'></div><p class='msj-legal'>Especificaciones adicionales, remitirse a la ficha técnica del vehículo.</p>");
            if(veh1=="MazdaCX3" || $("#veh2").val()=="MazdaCX3" || $("#veh3").val() =="MazdaCX3")
            {
                $(".msj-legal").text('Las características de los modelos de automóviles Mazda CX-3 utilizados en la presente exhibición pueden no ser las definitivas y presentar variaciones según el modelo y el lugar en que se adquiera. Por tanto, para obtener las características y especificaciones de los vehículos disponibles es necesario solicitar una cotización u oferta comercial formal en alguno de nuestros concesionarios autorizados.');
            }
        }

        Write_Acordeon("MOTOR", "Tipo|Turbo|Cilindraje (c.c.)|Número de cilindros|Relación de compresión|Potencia máxima (hp/r.p.m.)|Torque máximo (kg-m/r.p.m.)|Tipo de combustible|Intercooler|Sistema de combustible|Capacidad tanque de combustible (L)");
        Write_Acordeon("TRANSMISIÓN", "Tipo|Tracción");
        Write_Acordeon("RELACIONES DE CAJA", "1ª|2ª|3ª|4ª|5ª|6ª|Reversa|Relación final de eje|Convertidor de torque|Selección modo de conducción|Relación de transferencia|Protector metálico");
        Write_Acordeon(" SUSPENSIÓN", "Delantera|Capacidad del eje Delantero (kg)|Trasera|Capacidad del eje  Trasero(kg)|Diferencial de deslizamiento limitado (LSD)");
        Write_Acordeon("RUEDAS", "Rin|Llantas|Llanta de repuesto|Copa");
        Write_Acordeon("DIRECCIÓN", "Tipo|Radio de giro entre andenes (m)|Volante con cuero|Control de cambios en el volante|Control G-Vectoring (GVC)");
        Write_Acordeon("SISTEMA DE FRENOS", "Tipo|Delanteros|Traseros|Freno de Parqueo ");
        Write_Acordeon("DIMENSIONES Y PESOS", "Longitud total (mm)|Ancho total (mm)|Altura total (mm)|Distancia entre ejes (mm)|Trocha delantera (mm)|Trocha trasera (mm)|Voladizo delantero (mm)|Voladizo trasero (mm)|Capacidad del baúl (L)|Peso vacío (kg)|Peso bruto vehicular (kg)|Capacidad de carga (kg)|Capacidad de arrastre con frenos (kg)|Capacidad de arrastre sin frenos (kg)");
        Write_Acordeon("DISEÑO DE CABINA", "Cabina|Barras de impacto lateral|Medidores panel de instrumentos");
        Write_Acordeon("SEGURIDAD PASIVA", "Apoyacabezas|Cinturones de seguridad|Columna de dirección|Pedal de freno|Airbags |Apoyacabezas traseros");
        Write_Acordeon("SEGURIDAD PROACTIVA i-ACTIVSENSE", "Sistema Inteligente de Iluminación Frontal (ADB)|Asistencia de Permanencia en Carril (LKA)|Asistencia de Frenado en Ciudad Delantero (SCBS)|Asistencia  de Frenado en Ciudad Delantero (SCBS)|Asistencia de Frenado en Ciudad Trasero (SCBS)|Sistema de Monitoreo de Punto Ciego (BSM)|Alerta de Atención del Conductor (DAA)");
        Write_Acordeon("SEGURIDAD ACTIVA", "Señal de Frenado de Emergencia (ESS)|Asistencia de Arranque en Pendiente (HLA)|Sistema de frenos ABS + EBD + BA|Control Dinámico de Estabilidad (DSC)|Sistema Control de Tracción (TCS)|Luces delanteras|Luces traseras LED|Luces Delanteras Automáticas (sensor de luz)|Ajuste de altura automático|Sistema de Monitoreo de Presión de Llantas (TPMS)|Sensores de parqueo |Cámara de reversa|Prelación de frenado sobre aceleración (BOS)|Control adaptativo de la carga (LAC)|Control antivuelco (RCS)|Asistencia para descenso de pendientes (HDC)");
        Write_Acordeon("PLATON", "Platón");
        Write_Acordeon("EQUIPAMIENTO EXTERIOR", "Techo corredizo \"Sunroof\"|Spoiler Trasero|Exploradoras|Estribos laterales|Parachoques|Protector platón");
        Write_Acordeon("EQUIPAMIENTO INTERIOR", "Asientos delanteros|Asientos delanteros Accionamiento|Asientos delanteros Calefacción|Asientos delanteros Memorias|Asientos traseros|Descansabrazos central con portavasos|Asientos traseros Tercera fila|Descansabrazos Tercera fila|Asientos en tela|Asientos con cuero|Palanca de cambios con cuero|Palanca freno de parqueo con cuero|Parasoles|Parasol eléctrico trasero|Cortina parasol lateral|Cubierta zona de carga|Panel de instrumentos|Paneles puertas|Ceniceros|Consola piso|Compartimiento portagafas");
        Write_Acordeon("SISTEMA DE INFO-ENTRETENIMIENTO", "Radio|Bluetooth®|Parlantes|Display|Comandos de voz|Navegador GPS|Botón multicomando |Pantalla activa de conducción");
        Write_Acordeon("OTROS", "Espejo interior retrovisor día/noche |Espejos retrovisores exteriores|Direccional incorporada|Espejos exteriores abatibles eléctricamente|Encendido por botón|Vidrios eléctricos|Limpiaparabrisas delantero|Automático con sensor de lluvia|Control de sobre marcha (Kick Down Switch)|Limpiaparabrisas trasero|Aire acondicionado|Computador de abordo|Control de velocidad crucero|Apagado automático de luces (temporizador)|Anclajes sillas de seguridad niños ISOFIX|Ganchos de anclaje para transporte|Apertura baúl|Desempañador vidrio trasero|Herramientas");
        Write_Acordeon("SEGURIDAD ANTIRROBO", "Bloqueo central eléctrico|Apertura inteligente de puertas|Alarma antirrobo|Sistema inmovilizador antirrobo|Bloqueo dirección|Bloqueo seguros puerta");
        Write_Acordeon("PRECIO", "Precio");

        $("#accordion").accordion({
            collapsible: false,
            active: 7,
            heightStyle: "content"
        });


        $('#accordion').bind('accordionactivate', function(event, ui) {
            $( ui.newHeader )[0].scrollIntoView({block: "end", behavior: "smooth"}); 
         });

    }

    function change_tipe(id) {

        if($("#phone").hasClass("hidden"))
        {
            
            if (id=="2")
            {
                 changeCarbyId($("#veh2-desktop").val(), "divTipveh2-desktop", "tipveh2-desktop", "2-desktop");
            }
            else
            {
                changeCarbyId($("#veh3-desktop").val(), "divTipveh3-desktop", "tipveh3-desktop", "3-desktop");
            }



            veh2 = $("#tipveh2-desktop").val();
            veh3 = $("#tipveh3-desktop").val();

            $(".msj-legal").text('Especificaciones adicionales, remitirse a la ficha técnica del vehículo.');
            if(veh1=="MazdaCX3" || $("#veh2-desktop").val()=="MazdaCX3" || $("#veh3-desktop").val() =="MazdaCX3")
            {
                $(".msj-legal").text('Las características de los modelos de automóviles Mazda CX-3 utilizados en la presente exhibición pueden no ser las definitivas y presentar variaciones según el modelo y el lugar en que se adquiera. Por tanto, para obtener las características y especificaciones de los vehículos disponibles es necesario solicitar una cotización u oferta comercial formal en alguno de nuestros concesionarios autorizados.');
            }

        }
        else
        {
            if (id=="2")
            {
                 changeCarbyId($("#veh2").val(), "divTipveh2", "tipveh2", "2");
            }
            else
            {
                changeCarbyId($("#veh3").val(), "divTipveh3", "tipveh3", "3");
            }
            veh2 = $("#tipveh2").val();
            veh3 = $("#tipveh3").val();

            $(".msj-legal").text('Especificaciones adicionales, remitirse a la ficha técnica del vehículo.');
            if(veh1=="MazdaCX3" || $("#veh2").val()=="MazdaCX3" || $("#veh3").val() =="MazdaCX3")
            {
                $(".msj-legal").text('Las características de los modelos de automóviles Mazda CX-3 utilizados en la presente exhibición pueden no ser las definitivas y presentar variaciones según el modelo y el lugar en que se adquiera. Por tanto, para obtener las características y especificaciones de los vehículos disponibles es necesario solicitar una cotización u oferta comercial formal en alguno de nuestros concesionarios autorizados.');
            }
        }
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
            imgv.src = "img/BT-50.png";
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
        if($("#phone").hasClass("hidden"))
        {
            veh2 = $("#tipveh2-desktop").val();
            veh3 = $("#tipveh3-desktop").val();

            if( $("#veh2-desktop").val()=="Mazda3")
                {
                    if(veh2 =="Mazda3TouringSport" || veh2 =="Mazda3GrandTouringSport" || veh2=="Mazda3GrandTouringLXSport" )    
                    {
                        var imgv = document.getElementById("img_veh2-desktop");
                        imgv.src = "img/Mazda3-HB.png";
                    }
                    else
                    {
                        var imgv = document.getElementById("img_veh2-desktop");
                        imgv.src = "img/Mazda-3.png";
                    }
                }

                if( $("#veh3-desktop").val()=="Mazda3")
                {
                    if(veh3 =="Mazda3TouringSport" || veh3 =="Mazda3GrandTouringSport" || veh3=="Mazda3GrandTouringLXSport" )    
                    {
                        var imgv = document.getElementById("img_veh3-desktop");
                        imgv.src = "img/Mazda3-HB.png";
                    }
                    else
                    {
                        var imgv = document.getElementById("img_veh3-desktop");
                        imgv.src = "img/Mazda-3.png";
                    }
                }


        }
        else
        { 
            veh2 = $("#tipveh2").val();
            veh3 = $("#tipveh3").val();


            if( $("#veh2").val()=="Mazda3")
                {
                    if(veh2 =="Mazda3TouringSport" || veh2 =="Mazda3GrandTouringSport" || veh2=="Mazda3GrandTouringLXSport" )    
                    {
                        var imgv = document.getElementById("img_veh2");
                        imgv.src = "img/Mazda3-HB.png";
                    }
                    else
                    {
                        var imgv = document.getElementById("img_veh2");
                        imgv.src = "img/Mazda-3.png";
                    }
                }

                if( $("#veh3").val()=="Mazda3")
                {
                    if(veh3 =="Mazda3TouringSport" || veh3 =="Mazda3GrandTouringSport" || veh3=="Mazda3GrandTouringLXSport" )    
                    {
                        var imgv = document.getElementById("img_veh3");
                        imgv.src = "img/Mazda3-HB.png";
                    }
                    else
                    {
                        var imgv = document.getElementById("img_veh3");
                        imgv.src = "img/Mazda-3.png";
                    }
                }


        }
        LoadHtml();
    }

    function Write_Acordeon(GroupName, SubGroups) {

        objVeh = JSON.parse(ArrVeh);

        var arrayGroup = $.grep(objVeh.Specs, function(element, index) {
            return element.Group == GroupName; //Group
        });

        var ArrSubGroups = SubGroups.split('|');


        var html = "";
        var htmlGroup = "";
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

            //console.log(array_features[0].SubGroup);
            var namesubgroup = array_features[0].SubGroup;
            array_features.forEach(function(item) {

             if((item[veh2]=="-" && item[veh3]=="-")) //don't show the group when all vehicules has value "-".
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
