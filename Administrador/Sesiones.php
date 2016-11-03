<!DOCTYPE HTML>  
<html>
<head>
<style>
.error {color: #FF0000;}
</style>
</head>
<script src="js/jquery-1.12.4.js"></script>
<body>  

<?php
// define variables and set to empty values
$nameErr = $descripcionErr = $fechaErr = $horaErr = "";
$name = $descripcion = $fecha = $hora = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Nomnre es Obligatorio";
  } else {
    $name = test_input($_POST["name"]);
  }

   if (empty($_POST["descripcion"])) {
    $descripcionErr = "Descripcion es Obligatorio";
  } else {
    $descripcion = test_input($_POST["descripcion"]);
  }

   if (empty($_POST["hora"])) {
    $horaErr = "hora es Obligatorio";
  } else {
    $hora = test_input($_POST["hora"]);
  }

   if (empty($_POST["fecha"])) {
    $fechaErr = "fecha es Obligatorio";
  } else {
    $fecha = test_input($_POST["fecha"]);
  }
  

  if($name !="" && $descripcion !="" && $fecha !="" && $hora !="")
  {
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

//2016-10-10 10:05:00
	$sql = "INSERT INTO Sesion (Nombre,Hora,Descripcion,Fecha) values ('" . $name . "','" .$hora . "','" . $descripcion  ."','". $fecha ."');";
	
	if ($conn->query($sql) === TRUE) {
	    echo "Nueva Session creada!!";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}


	$conn->close();
  }
 
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<h2>Agregar Sessiones</h2>
<p><span class="error">* campos requeridos.</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
  Nombre: <input type="text" name="name" value="<?php echo $name;?>">
  <span class="error">* <?php echo $nameErr;?></span>
  <br><br>
  Descripcion: <input type="text" name="descripcion" value="<?php echo $descripcion;?>">
  <span class="error">* <?php echo $descriptionlErr;?></span>
  <br><br>
  Hora: <input type="text" name="hora" value="<?php echo $hora;?>">
  <span class="error">* <?php echo $horaErr;?></span>
  <br><br>
  Fecha:  <input id="fecha" name="fecha" type="datetime-local" value="<?php echo $fecha;?>" />
  <span class="error">* <?php echo $FechaErr;?></span>
  <br><br>
  <input type="submit" name="submit" value="Agregar" onclick="refrescar();">  
</form>


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
    <TD>Nombre</TD> <TD>Descripcion</TD> <TD>Hora</TD> <TD>Fecha</TD> <TD>Borrar</TD>
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
function refrescar()
{
  // setTimeout(function(){ 
  //                     document.getElementsByName("name")[0].value="";
  //                     document.getElementsByName("descripcion")[0].value="";
  //                     document.getElementsByName("fecha")[0].value="";
  //                     document.getElementsByName("hora")[0].value="";
  //                      location.reload(); 
  //                     }, 2000);
}

  
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
                        document.getElementsByName("name")[0].value="";
                        document.getElementsByName("descripcion")[0].value="";
                        document.getElementsByName("fecha")[0].value="";
                        document.getElementsByName("hora")[0].value="";
                       location.reload(); 
                      }, 2000); 
                  }
         });
        }
    }

</script>


</html>