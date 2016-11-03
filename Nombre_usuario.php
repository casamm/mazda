<?php
// require_once 'config.php';
// require_once 'incl/main.inc';

// 	dbconnect(); $settings=get_settings(0); $options=get_options(); $lang=get_language(); 


// 	unset($user);
// 	if(isset($_COOKIE['blab8_xuidc'])){

// 	$uid=explode('z',$_COOKIE['blab8_xuidc']);

// 	if(isset($uid[1]) && hsh($uid[0].$settings['cookie_salt'])==$uid[1]){
// 	$uid=(int)$uid[0];

// 	$query='SELECT * FROM '.$dbss['prfx']."_users WHERE usr_id=$uid";

// 	$result=neutral_query($query);

// 	if(neutral_num_rows($result)>0){
// 	$ext_user=neutral_fetch_array($result);

// 	$user=array();
// 	$user['id']=(int)$ext_user['usr_id'];
// 	$user['name']=$ext_user['usr_name'];
// 	}}}

// print $query;


// 	$sql = "CREATE TABLE Sesion (
// id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
// Nombre VARCHAR(30) NOT NULL,
// Hora VARCHAR(30) NOT NULL,
// Descripcion VARCHAR(30) NOT NULL,
// Fecha DATETIME
// )";


//$sql = "INSERT INTO Sesion (Nombre,Hora,Descripcion,Fecha) values ('Test', '9:00pm', 'MAZDA 6', CURTIME())";

//neutral_query($sql);



	//$query='SELECT * FROM '.$dbss['prfx']."_users";
	
//	print $query;
	
	// $result=neutral_query($query);
	// if(neutral_num_rows($result)>0){
	// 	$ext_user=neutral_fetch_array($result);

	// 	print $ext_user;
	// }
	
	//print $query;
	// print $result;
	//print $ext_user['usr_name'];

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

$sql = "SELECT * FROM blab8_users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["usr_id"]. " - Name: " . $row["usr_name"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();



?>


