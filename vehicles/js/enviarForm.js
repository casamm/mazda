function EnviarForm()
{
  if  ($("#txtciudad-desk").val()=="")
  {
      alert("Falta Seleccionar Concesionario.");
  }
  else
  {
       var post_data = $('#form1').serialize();
          $.ajax({
            type: "POST",
            url: "registroTest.php",
            data: post_data,
             success: function(data, textStatus, jqXHR)
             {
               $("#respuestaform").show();
               $("#respuestaform").html(data);
                setTimeout(function(){ 
                         $("#respuestaform").html('');
                        }, 2000); 
             }
          });
  }
}

function EnviarFormPhone()
{

   var post_data = $('#form2').serialize();
        $.ajax({
          type: "POST",
          url: "registroTest.php",
          data: post_data,
           success: function(data, textStatus, jqXHR)
           {
             $("#respuestaform-phone").show();
             $("#respuestaform-phone").html(data);
           }
        });
}