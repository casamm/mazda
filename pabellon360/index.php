<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<link rel="stylesheet" type="text/css" href="../css/fonts.css">
<link rel="stylesheet" type="text/css" href="../css/normalize.css">
<link rel="stylesheet" type="text/css" href="../css/menu.css">
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="css/phone.css">
<link rel="stylesheet" type="text/css" href="css/desktop.css">
<script type="text/javascript" src="swfobject.js"></script>
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
		<a href="#" onclick="ChangeContent(event,0);">Pabellon 360</a>
		<hr>
		<a href="#" onclick="ChangeContent(event,1);">Sesiónes en Vivo</a>
		<hr>
		<a href="#" onclick="ChangeContent(event,2);">Vehículos</a>
		<hr>
		<a href="#" onclick="ChangeContent(event,3);">Comparativo</a>
		<hr>
		<a href="#" onclick="ChangeContent(event,4);">Ayuda</a>
	</div>


	<iframe id="iframe-content-phone"  src="" class="overlay-content" frameBorder="0" style="display:none;"></iframe>

	<section class="content" id="container_phone" style="z-index:2">
		<header>
			<h1>Pabellón 360</h1>
		</header>
		<nav>
			<div class="left"></div>
			<ul>
				<li class="active"></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div class="right"></div>
		</nav>
	</section>

	<hr>
	<footer>
		<div class="next">
			<h2>Próxima Sesión</h2>
		</div>
		<hr>
		<div id="nombreSession-phone" class="car">
			<h2>M&#123;zd&#123; 3</h2>
		</div>
		<hr>
		<div id="ContadorSession-phone"  class="timer">
			
		</div>
	</footer>
</div>

<div id="desktop" class="desktop hidden">

	<header>
		<div class="wrapper">
			<div class="menu invisible" onclick="CloseOverlay()">
				<div class="bar one"></div>
		    <div class="bar two"></div>
			</div>
			<div class="wrap">
				<a class="page-title" href="#" onclick="ChangeContent(event,1);">Sesiónes en Vivo</a>
				<a class="page-title" href="#" onclick="ChangeContent(event,2);">Vehículos</a>
				<a class="page-title" href="#" onclick="ChangeContent(event,3);">Comparativo</a>
				<a class="page-title" href="#" onclick="ChangeContent(event,4);">Ayuda</a>
			</div>
			<div class="name">
				<p id="user_name_desktop"></p>
			</div>
			<div class="logo"></div>
		</div>
	</header>


	<!-- iframe with the content of the menu-->
  <iframe  id="iframe-content"  src=""  frameBorder="0" class="overlay-content hidden"></iframe>

	<section class="content" id="container_desktop" style="z-index:2";>
		<div class="left"></div>
		<div class="right"></div>
		<nav>
			<ul>
				<li class="active"></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</nav>
	</section>


	<hr>

	<footer>
		<div class="next">
			<h2>Próxima Sesión</h2>
		</div>
		<hr>
		<div id="nombreSession" class="car">
			<h2>M&#123;zd&#123; 3</h2>
		</div>
		<hr>
		<div id="ContadorSession"  class="timer">
			
		</div>
	</footer>
</div>

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

$sql = "SELECT Fecha, Descripcion FROM Sesion WHERE Fecha >= NOW() Order by Fecha asc Limit 1";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<input id='FechaMasReciente' type='hidden' value='"  . $row["Fecha"] .  "'/>";
        echo "<input id='NomSesMasReciente' type='hidden' value='"  . $row["Descripcion"] .  "'/>";
    }
} else {
     echo "<input id='FechaMasReciente' type='hidden' value='2016-12-31 11:59:00'/>";
     echo "<input id='NomSesMasReciente' type='hidden' value=''/>";
}
$conn->close();
?> 


<script type="text/javascript" src="pano2vr_player.js"></script>
<script type="text/javascript">

// is a mobilde device or not
testExp = new RegExp('Android|webOS|iPhone|iPad|' +
    		       'BlackBerry|Windows Phone|'  +
    		       'Opera Mini|IEMobile|Mobile' , 
    		      'i');
  
  if (testExp.test(navigator.userAgent))
       pano=new pano2vrPlayer("container_phone");  // create the panorama player with the container
  else
       pano=new pano2vrPlayer("container_desktop");  // create the panorama player with the container

		window.addEventListener("load", function() {
			pano.readConfigUrlAsync("pano.xml");
		});

</script>


<script type="text/javascript" src="pano2vr_player.js"></script>
<script type="text/javascript">

// is a mobilde device or not
testExp = new RegExp('Android|webOS|iPhone|iPad|' +
    		       'BlackBerry|Windows Phone|'  +
    		       'Opera Mini|IEMobile|Mobile' , 
    		      'i');
  
  if (testExp.test(navigator.userAgent))
       pano=new pano2vrPlayer("container_phone");  // create the panorama player with the container
  else
       pano=new pano2vrPlayer("container_desktop");  // create the panorama player with the container

		window.addEventListener("load", function() {
			pano.readConfigUrlAsync("pano.xml");
		});

		</script>

<script src="js/app.js"></script>
<script src="../js/jquery-1.12.4.js"></script>
<script src="../js/jquery-ui.js"></script>
<script src="../js/menu.js"></script>
<script src="../js/detect.js"></script>
<script src="../js/utilitys.js"></script> 

</body>
</html>
