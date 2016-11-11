<head>
<script src="js/jquery-1.12.4.js"></script>
</head>
<div>
<h1>Listado Sessiones</h1>
<?php

$servername = "localhost";
$username = "mazdaapp_salon";
$password = "F)3g 3eu=9*8Srb";
$dbname = "mazdaapp_salonautomovil";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM Sesion";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row


  echo "<TABLE>
  <TR>
    <TD>Url Video</TD> <TD>Descripcion</TD> <TD>Hora</TD> <TD>Fecha</TD> <TD>Borrar</TD>
  </TR>";

    while($row = $result->fetch_assoc()) {
 echo "<TR>
        <TD>" . $row["Nombre"]. "</TD> <TD>" . $row["Descripcion"]. "</TD> <TD>" . $row["Hora"]. "</TD> <TD>" . $row["Fecha"]. "</TD> <TD><input type='button' value='Eliminar' onclick='Delete(".  $row["id"] .")' ></TD>
        </TR>";
    }

   echo "</TABLE>"; 
} else {
    echo "0 results";
}
$conn->close();

?>
</div>

</body>

<script type="text/javascript">

  
function Delete(id)
    {
        var confirmmssg = confirm("¿Borrar Registro?");
        if (confirmmssg ){
          $.ajax({
             type: "get",
             url: "deleteRecord.php",
             data: "id=" + id,
             success: function(){
                     alert("Borrado.");
                     setTimeout(function(){ 
                       location.reload(); 
                      }, 2000); 
                  }
         });
        }
    }

</script>
