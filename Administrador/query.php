<?php

// 	$sql = "CREATE TABLE Sesion (
// id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
// Nombre VARCHAR(30) NOT NULL,
// Hora VARCHAR(30) NOT NULL,
// Descripcion VARCHAR(30) NOT NULL,
// Fecha DATETIME
// )";


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
    while($row = $result->fetch_assoc()) {
        echo "Nombre: " . $row["Nombre"]. " - Fecha: " . $row["Fecha"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();

?>