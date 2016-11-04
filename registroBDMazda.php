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
	print "Gracias, muy pronto un ejecutivo de Mazda estará comunicandose contigo.";
}
else
{
	print "Ocurrio un error al enviar el formulario:" . $_POST['estado'];
}

?>
