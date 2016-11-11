 <style type="text/css">

.imagecenter {
	text-align: center;
}

body {
	background-color: #ffffff;
}
</style>
<!-- <body class="imagecenter"><img src="images/ajax-loader.gif" width="16" height="16" /> -->
<?php

ini_set('memory_limit','512M');
ini_set('display_errors',true);
error_reporting(-1);

require_once dirname(__FILE__) . '/ProspectosServiceAutoload.php';

require_once 'MCAPI.class.php';
require_once dirname(__FILE__) . '/class.phpmailer.php';
require_once dirname(__FILE__) . '/class.smtp.php';

//$mail = new PHPMailer();   

if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
   $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {                   
   $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
   $ip = $_SERVER['REMOTE_ADDR'];
}

$dateTime = new DateTime('now', new DateTimeZone('America/Bogota')); 
$form_token = md5(uniqid());


$_arg0='61020Rp3Ct0sP5';
$_arg1='8%24~>v{GE!/8V5';
$_arg2 = $_POST['nombre'];
$_arg3 = $_POST['apellido'];
$_arg4 = $_POST['mail'];
$_arg5 = $_POST['telefono'];
$_arg6 = date_format($dateTime,"n/j/Y g:i:s A");
$_arg7 = $_POST['modelo'];
$_arg8 = $_POST['tdocumento'];
$_arg9 = $_POST['numodoc'];
$_arg10 = 'inscribeteSalonVirtual';
$_arg11 = $_POST['codcon'];
$_arg12 = $_POST['codsuc'];
$_arg13 = $_POST['ciudad'];
$_arg14 = 1;
$_arg15 = 0;
$_arg16 = date_format($dateTime,"n/j/Y g:i:s A");
$_arg17 = $form_token;
$_arg18 = $ip;

//print $_arg0 . " ; " . $_arg1 . " ; " . $_arg2 . " ; " . $_arg3 . " ; " . $_arg4 . " ; " . $_arg5  . " ; " . $_arg6 . " ; " . $_arg7 . " ; " . $_arg8 . " ; " . $_arg9 . " ; " . $_arg10 . " ; " . $_arg11 . " ; " . $_arg12 . " ; " . $_arg13. " ; " . $_arg14 . " ; " . $_arg15 . " ; " . $_arg16 . " ; " . $_arg17 . " ; " . $_arg18;

// $_arg0='61020Rp3Ct0sP5';
// $_arg1='8%24~>v{GE!/8V5';
// $_arg2 = 'juan';
// $_arg3 = 'prueba 1';
// $_arg4 = 'mauricio.alfonso@mirumagency.com';
// $_arg5 = '34235346345';
// $_arg6 = '10/31/2016 10:54:54 AM';
// $_arg7 = 1;
// $_arg8 = 'CC';
// $_arg9 = '80851481';
// $_arg10 = 'inscribeteSalonVirtual';
// $_arg11 = 161;
// $_arg12 = 2;
// $_arg13 = 'BOGOTA';
// $_arg14 = 1;
// $_arg15 = 0;
// $_arg16 = '10/31/2016 10:54:54 AM';
// $_arg17 = $form_token;
// $_arg18 = $ip;


$wsdl = array();
//$wsdl[ProspectosServiceWsdlClass::WSDL_URL] = 'https://prospectos.mazda.co/prospectos?wsdl';
$wsdl[ProspectosServiceWsdlClass::WSDL_URL] = 'https://prospectos.mazda.co/prospectospruebas/prospectos?wsdl';
$wsdl[ProspectosServiceWsdlClass::WSDL_CACHE_WSDL] = WSDL_CACHE_NONE;
$wsdl[ProspectosServiceWsdlClass::WSDL_TRACE] = true;
$wsdl[ProspectosServiceWsdlClass::WSDL_LOGIN] = '61020Rp3Ct0sP5';
$wsdl[ProspectosServiceWsdlClass::WSDL_PASSWD] = '8%24~>v{GE!/8V5';

$prospectosServiceServiceRegistrar = new ProspectosServiceServiceRegistrar();

if($prospectosServiceServiceRegistrar->registrarProspecto($_arg0,$_arg1,$_arg2,$_arg3,$_arg4,$_arg5,$_arg6,$_arg7,$_arg8,$_arg9,$_arg10,$_arg11,$_arg12,$_arg13,$_arg14,$_arg15,$_arg16,$_arg17,$_arg18))
$_POST['estado'] = $prospectosServiceServiceRegistrar->getResult();
else
$_POST['estado'] = $prospectosServiceServiceRegistrar->getLastError();

//print $_POST['estado'];

if ($_POST['estado']=="OK")
{
	print "Gracias por registrarte, tu solicitud ha sido enviada, próximamente serás contactado por un ejecutivo Mazda.";
}
else
{
	print "Ocurrió un error al enviar el formulario:" . $_POST['estado'];
}


$api = new MCAPI('c2430a754cd21cce839fb1600c6fabdb-us10');	
	$merge_vars = array('EMAIL'=>$_POST["mail"], 'NOMBRE'=>$_POST["nombre"], 'APELLIDO'=>$_POST["apellido"],  'TELEFONO'=>$_POST["telefono"],  'FECHAREG'=>date_format($dateTime,"n/j/Y g:i:s A"),  'MODELO'=>$_POST["modelo"], 'TDOCUMENTO'=>$_POST["tdocumento"], 'DOCUMENTO'=>$_POST["numodoc"], 'IDFORM'=>'inscribeteSalonVirtual', 'CIUDAD'=>$_POST["ciudad"], 'CONCESIONA'=>$_POST["codcon"], 'POLITICAS'=>1, 'TERMINOS'=>0, 'FECHAENVIO'=>date_format($dateTime,"n/j/Y g:i:s A"), 'IP'=>$ip, 'TOKEN'=>$form_token, 'SUCURSAL'=>$_POST['codsuc'], 'ESTADO'=>$_POST['estado']);
	

	$retval = $api->listSubscribe( 'e5478233c6', $_POST["mail"], $merge_vars, 'html', false, true );
	
	if ($api->errorCode){
		echo '';
	} else {
		echo '';
	}

// $mystring = $_POST['estado'];
// $findme   = 'E';
// $pos = strpos($mystring, $findme);


// $mail = new PHPMailer(true);

// try {
//     $mail->IsSMTP();   
// 	$mail->Host = '166.62.83.39'; 
// 	$mail->SMTPDebug  = 0;
// 	$mail->Port = 465; 
// 	$mail->SMTPAuth = true; 
// 	$mail->SMTPSecure="ssl";
// 	$mail->Username = 'registros@mazdaapps.co'; 
// 	$mail->Password = 'Mazda.2016'; 

// 	$mail->From = "registros@mazdaapps.co";   
// 	$mail->FromName = "Mazda Colombia";   
// 	$mail->Subject = "Registro Mazda";   
// 	$mail->AddAddress('mauricioalfonso007@gmail.com','test  Mazda');
// 	$mail->AddCC('mauricio.alfonso@mirumagency.com', 'mirum Mauricio');
// 	$mail->AltBody = 'test!';
//     $body = "test......!"; // automatically
//     $mail->MsgHTML($body);
//     $mail->Send();
//     echo "Message Sent OK</p>\n";

// } catch ( phpmailerException $e ) {
//     echo $e->errorMessage(); 
// } catch ( Exception $e ) {
//     echo $e->getMessage(); 
// }

	?>
