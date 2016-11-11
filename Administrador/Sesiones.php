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
    $nameErr = "Url es Obligatorio";
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
      $name ="";
      $descripcion ="";
      $fecha ="";
      $hora ="";
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
  Url Video: <input type="text" name="name" value="<?php echo $name;?>">
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

<iframe src="Listado.php" frameBorder="0" style="height:1200px; width:100%; "></iframe>

