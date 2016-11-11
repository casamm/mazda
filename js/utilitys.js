function ReadCookie(nombre)
 {
         var lista = document.cookie.split(";");
         for (i in lista) {
             var busca = lista[i].search(nombre);
             if (busca > -1) {micookie=lista[i]}
             }
         var igual = micookie.indexOf("=");
         var valor = micookie.substring(igual+1);
         return valor;
}


function changeTitle(name)
{
  $("#cartitle").removeClass("invisible");
  $("#cartitle").html(name);
}

$("#user_name_phone").html(decodeURIComponent(ReadCookie("nombre_usuario")).split("+").join(" "));
$("#user_name_desktop").html(decodeURIComponent(ReadCookie("nombre_usuario")).split("+").join(" "));


function SeleccionaConcesionario(cons, ciudad, idconc, idsuc)
{
  $("#txtciudad-desk").val(ciudad);
  $("#txtciudad-phone").val(ciudad);
  
  $("#txtconce-desk").val(cons);
  $("#txtconce-phone").val(cons);

  $("#txtciudad-desk").show();
  $("#txtciudad-phone").show();
  $("#txtconce-desk").show();
  $("#txtconce-phone").show();

  $("#lblCiudad").show();
  $("#lblConcesionario").show();
  $("#lblCiudad-phone").show();
  $("#lblConcesionario-phone").show();

  /* ids */
  $("#idcon").val(idconc);
  $("#idsuc").val(idsuc);
  $("#idcon-phone").val(idconc);
  $("#idsuc.phone").val(idsuc);

}

function n(n){
    return n > 9 ? "" + n: "0" + n;
}


function countdown(id){

   var fechareciente=$("#FechaMasReciente").val();
    var fecha=new Date(fechareciente.substring(0, 4),fechareciente.substring(5, 7)-1,fechareciente.substring(8, 10),fechareciente.substring(11, 13),fechareciente.substring(14, 16),'00')
    var hoy=new Date()
    var dias=0
    var horas=0
    var minutos=0
    var segundos=0

    if (fecha>hoy){
        var diferencia=(fecha.getTime()-hoy.getTime())/1000
        dias=Math.floor(diferencia/86400)
        diferencia=diferencia-(86400*dias)
        horas=Math.floor(diferencia/3600)
        diferencia=diferencia-(3600*horas)
        minutos=Math.floor(diferencia/60)
        diferencia=diferencia-(60*minutos)
        segundos=Math.floor(diferencia)
        //console.log("punto1");

        if( dias<=0 &&  horas<=0 &&  minutos<15)
        {
           document.getElementById(id).innerHTML= n(minutos) + ':' + n(segundos);
          // console.log("punto2");
        }
        else
        {
           document.getElementById(id).innerHTML= fecha.toLocaleDateString("es-ES",{weekday: "short", year: "numeric", month: "short", day: "numeric", hour:'2-digit', minute:'2-digit'});
          // console.log("punto3");
        }

        //document.getElementById(id).innerHTML='Quedan ' + dias + ' D&iacute;as, ' + horas + ' Horas, ' + minutos + ' Minutos, ' + segundos + ' Segundos'

        if (dias>0 || horas>0 || minutos>0 || segundos>0){
           // console.log("punto4");
        }
		
		setTimeout("countdown(\"" + id + "\")",1000)
    }
    else{
        // document.getElementById('ContadorSession').innerHTML='Quedan ' + dias + ' D&iacute;as, ' + horas + ' Horas, ' + minutos + ' Minutos, ' + segundos + ' Segundos';
        // document.getElementById('ContadorSession-phone').innerHTML=' ' + horas + ' Horas, ' + minutos + ' Minutos, ' + segundos + ' Segundos';
        document.getElementById('ContadorSession').innerHTML="<a href='#' onclick='ChangeContent(event,5);'>En Vivo Ahora</a>";
        document.getElementById('ContadorSession-phone').innerHTML="<a href='#' onclick='ChangeContent(event,5);'>En Vivo Ahora</a>";
        //console.log("punto5");
    }

    //descripcion
    var nombreSession=$("#NomSesMasReciente").val();
    nombreSession= nombreSession.replace("Mazda","M&#123;zd&#123;");
    nombreSession= nombreSession.replace("mazda","M&#123;zd&#123;");
    document.getElementById('nombreSession').innerHTML="<p>PRÓXIMA SESIÓN:&nbsp;&nbsp;</p><h2>" +  nombreSession + "</h2>";
    document.getElementById('nombreSession-phone').innerHTML="<h2>" +  nombreSession + "</h2>";
    
}


countdown('ContadorSession');
countdown('ContadorSession-phone');
