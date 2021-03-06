<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<link rel="stylesheet" type="text/css" href="../css/fonts.css">
<link rel="stylesheet" type="text/css" href="../css/normalize.css">
<link rel="stylesheet" type="text/css" href="../css/menu.css">
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="css/alert.css">
<link rel="stylesheet" type="text/css" href="css/phone.css">
<link rel="stylesheet" type="text/css" href="css/desktop.css">
<title>MAZDA | Salón Del Automóvil 2016</title>
</head>

<body>
<div id="phone" class="phone hidden">
	<header>
		<div class="menu">
			<div class="bar one"></div>
	    <div class="bar two"></div>
		</div>
		<div class="user">
			<h1 id="user_name_phone"></h1>
		</div>
		<div class="logo"></div>
	</header>

	<div class="menu-overlay">
		<a href="../pabellon360/index.html">Pabellón 360</a>
		<hr>
		<a href="../sessions/index.html">Sesiones en Vivo</a>
		<hr>
		<a href="../vehicles/index.html">Vehículos</a>
		<hr>
		<a href="../comparison/index.html">Comparativo</a>
		<hr>
		<a href="../guide/index.html">Ayuda</a>
	</div>

	<section class="content">
		<header>
			<h1>Sesiones en Vivo</h1>
		</header>
		<ul>

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

			$sql = "SELECT * FROM Sesion WHERE Fecha >= DATE_ADD(now(), INTERVAL 110 MINUTE)";  //SQL esta 2 horas atras

			$result = $conn->query($sql);
		
			if ($result->num_rows > 0) {
			    // output data of each row
			    while($row = $result->fetch_assoc()) {
			       // echo "Nombre: " . $row["Nombre"]. " - Descripcion: " . $row["Descripcion"]. " - Hora: " . $row["Hora"]. " - Fecha: " . $row["Fecha"]. "<br>";

			    $desc =	str_replace("Mazda","M&#123;zd&#123;",$row["Descripcion"]);
			    $desc =	str_replace("mazda","M&#123;zd&#123;",$desc);

			    $fecha1 = new DateTime($row["Fecha"]);
				$fecha2 = new DateTime('now');  //servidor tiene hora adelantada (5 horas).

$intervalo = new DateInterval('PT5H'); //restar 5 horas a hora servidor
$intervalo->invert = 1;
$fecha2->add($intervalo);

				$fecha = $fecha1->diff($fecha2);
				//echo date_format($fecha1,"Y/m/d H:i:s") . " : " . date_format($fecha2,"Y/m/d H:i:s");
				//printf('%d años, %d meses, %d días, %d horas, %d minutos', $fecha->y, $fecha->m, $fecha->d, $fecha->h, $fecha->i);

					if($fecha->y == 0 && $fecha->d==0 && $fecha->h==0)
					{
						if($fecha->i<=15)
						{
						   echo "<li class='active'>
								<h1 class='title'><span>" . $desc . "</span></h1>
								<p class='time'>" . $row["Hora"]. "</p>
								<p class='status live'><a href='../sessions/chat.html'>En Vivo Ahora</a></p>
							</li>
							<hr>";
						}
						else
						{
							echo "<li class='active'>
								<h1 class='title'><span>" . $desc . "</span></h1>
								<p class='time'>" . $row["Hora"]. "</p>
								<p class='status live'><a href='#' style='color: white;'>A Continuación</a></p>
							 </li>
							<hr>";
						}
					}
					else
					{

						// array asociativo con los parametros mecesarios.
						$evento = array(
						'titulo' => 'Mazda Salón Automóvil',
						'descripcion' => 'Presentación en vivo ' . str_replace("M&#123;zd&#123;","Mazda",$desc) ,
						'localizacion' => 'Corferias, Online',
						'fecha_inicio' =>  date_format($fecha1,"Y-m-d") , // Fecha de inicio de evento en formato AAAA-MM-DD
						'hora_inicio'=> date_format($fecha1,"H:i"), // Hora Inicio del evento
						'fecha_fin'=> date_format($fecha1,"Y-m-d"), // Fecha de fin de evento en formato AAAA-MM-DD
						'hora_fin'=> date_format($fecha1,"H:i"), // Hora final del evento
						'nombre'=>'MazdaSalonAutomovil', // Nombre del sitio
						'url'=>'http://mazdaapps.co/salonautomovil' // Url de la página
						);

						echo "<li class='active'>
							<h1 class='title'><span>" . $desc . "</span></h1>
							<p class='time'>" . $row["Hora"]. "</p>
							<p class='status live'>
							<a href='". getGCalendarUrl($evento) ."' target='_blank' style='color: #2995cc;'>Agenda tu Sesión</a>
							</p>
						</li>
						<hr>";

					}

			    }

			} else {
			    //echo "0 results";
			}
			$conn->close();

?>

		</ul>
	</section>
</div>

<div id="desktop" class="desktop hidden">
<?php
	function getGCalendarUrl($event){  
	$titulo = urlencode($event['titulo']); 
	$descripcion = urlencode($event['descripcion']); 
	$localizacion = urlencode($event['localizacion']); 
	$start=new DateTime($event['fecha_inicio'].' '.$event['hora_inicio'].' '.date_default_timezone_get()); 
	$end=new DateTime($event['fecha_fin'].' '.$event['hora_fin'].' '.date_default_timezone_get()); $dates = urlencode($start->format("Ymd\THis")) . "/" . urlencode($end->format("Ymd\THis"));
	$name = urlencode($event['nombre']);
	$url = urlencode($event['url']);
	$gCalUrl = "http://www.google.com/calendar/event?action=TEMPLATE&amp;text=$titulo&amp;dates=$dates&amp;details=$descripcion&amp;location=$localizacion&amp;trp=false&amp;sprop=$url&amp;sprop=name:$name";
	return ($gCalUrl);
	}
?>

	<section class="content">
		<ul>
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

			$sql = "SELECT * FROM Sesion WHERE Fecha >= DATE_ADD(now(), INTERVAL 110 MINUTE)";  //SQL esta 2 horas atras


			//SELECT * FROM Sesion WHERE Fecha >= DATE_ADD(now(), INTERVAL 1 HOUR) fecha2;
			//MINUTE

			$result = $conn->query($sql);
		
			if ($result->num_rows > 0) {
			    // output data of each row
			    while($row = $result->fetch_assoc()) {
			       // echo "Nombre: " . $row["Nombre"]. " - Descripcion: " . $row["Descripcion"]. " - Hora: " . $row["Hora"]. " - Fecha: " . $row["Fecha"]. "<br>";

			    $desc =	str_replace("Mazda","M&#123;zd&#123;",$row["Descripcion"]);
			    $desc =	str_replace("mazda","M&#123;zd&#123;",$desc);

			    $fecha1 = new DateTime($row["Fecha"]);
				$fecha2 = new DateTime('now');  //servidor tiene hora adelantada (5 horas).

$intervalo = new DateInterval('PT5H'); //restar 5 horas a hora servidor
$intervalo->invert = 1;
$fecha2->add($intervalo);

				//echo $row["fecha2"];

				$fecha = $fecha1->diff($fecha2);
				//echo date_format($fecha1,"Y/m/d H:i:s") . " : " . date_format($fecha2,"Y/m/d H:i:s");
				//printf('%d años, %d meses, %d días, %d horas, %d minutos', $fecha->y, $fecha->m, $fecha->d, $fecha->h, $fecha->i);

					if($fecha->y == 0 && $fecha->d==0 && $fecha->h==0)
					{
//echo $fecha->i;

						if($fecha->i<10)
						{
						   echo "<li class='active'>
								<h1 class='title'><span>" . $desc . "</span></h1>
								<p class='time'>" . $row["Hora"]. "</p>
								<p class='status live'><a href='../sessions/chat.html'>En Vivo Ahora</a></p>
							</li>
							<hr>";
						}
						else
						{
							echo "<li class='active'>
								<h1 class='title'><span>" . $desc . "</span></h1>
								<p class='time'>" . $row["Hora"]. "</p>
								<p class='status live'><a href='#' style='color: white;'>A Continuación</a></p>
							 </li>
							<hr>";
						}
					}
					else
					{

						// array asociativo con los parametros mecesarios.
						$evento = array(
						'titulo' => 'Mazda Salón Automóvil',
						'descripcion' => 'Presentación en vivo ' . str_replace("M&#123;zd&#123;","Mazda",$desc) ,
						'localizacion' => 'Corferias, Online',
						'fecha_inicio' =>  date_format($fecha1,"Y-m-d") , // Fecha de inicio de evento en formato AAAA-MM-DD
						'hora_inicio'=> date_format($fecha1,"H:i"), // Hora Inicio del evento
						'fecha_fin'=> date_format($fecha1,"Y-m-d"), // Fecha de fin de evento en formato AAAA-MM-DD
						'hora_fin'=> date_format($fecha1,"H:i"), // Hora final del evento
						'nombre'=>'MazdaSalonAutomovil', // Nombre del sitio
						'url'=>'http://mazdaapps.co/salonautomovil' // Url de la página
						);

						echo "<li class='active'>
							<h1 class='title'><span>" . $desc . "</span></h1>
							<p class='time'>" . $row["Hora"]. "</p>
							<p class='status live'>
							<a href='". getGCalendarUrl($evento) ."' target='_blank' style='color: #2995cc;'>Agenda tu Sesión</a>
							</p>
						</li>
						<hr>";

					}

			    }

			} else {
			    //echo "0 results";
			}
			$conn->close();

?>

		</ul>
	</section>
</div>



<div class="alert">
	<header></header>
	<div class="content">
		<h1>Sesión <span>M&#123;zd&#123; 3</span> Hatchback</h1>
		<p class="time">09:15am - 09:30am</p>
		<p class="status">Próximamente</p>
		<hr>
		<p class="save">¿Desea agregar esta sesión<br>a su calendario?</p>
		<div class="buttons">
			<div class="no"></div>
			<div class="yes"></div>
		</div>
	</div>
</div>

<script src="../js/jquery-1.12.4.js"></script>
<script src="../js/jquery-ui.js"></script>
<script src="../js/detect.js"></script>
<script src="../js/menu.js"></script>
<script src="../js/utilitys.js"></script>
<script src="js/alert.js"></script>


</body>
</html>
