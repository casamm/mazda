<?php
require_once 'config.php';
require_once 'incl/main.inc';

dbconnect(); $settings=get_settings(0); $options=get_options(); $lang=get_language(); 

setcookie('blab8_xuidc','',time()+3600*24*365,'/');
$ip=$_SERVER['REMOTE_ADDR'];


/* --- */

unset ($postname); if(isset($_POST['uname'])){$postname=abc123($_POST['uname'],'');}

if(isset($postname) && strlen($postname)>2 && isset($_POST['upass']) && strlen(trim($_POST['upass']))>2){

$uname=neutral_escape($postname,64,'str');
$upass=hsh($_POST['upass']);

$query='SELECT * FROM '.$dbss['prfx']."_users WHERE usr_name='$uname' AND usr_pass='$upass' AND usr_status='0'";
$result=neutral_query($query);

if(neutral_num_rows($result)<1){
$title=$settings['title']; $info=$lang['wrong']; $link='../login/index.html';
include 'ui/templates/head.pxtm';
include 'ui/templates/info.pxtm';
die();}

else{
$user=neutral_fetch_array($result);
$id=$user['usr_id']; $ky=hsh($id.$settings['cookie_salt']); $cookie=$id.'z'.$ky;
setcookie('blab8_xuidc',$cookie,time()+3600*24*365,'/');
setcookie('nombre_usuario',$uname,time()+3600*24*365,'/');
redirect('../pabellon360/index.html');die();}}

/* --- */

if($settings['guests']=='1' && isset($postname) && strlen($postname)>2 && isset($_POST['guest']) && $_POST['guest']=='1'){

$uname=neutral_escape($postname,64,'str');
$gpass=hsh($_SERVER['REMOTE_ADDR'].$salt);

$query='SELECT * FROM '.$dbss['prfx']."_users WHERE usr_name='$uname' AND usr_pass='$gpass' AND usr_status='0'";
$result=neutral_query($query);

if(neutral_num_rows($result)>0){
$user=neutral_fetch_array($result);
$id=$user['usr_id']; $ky=hsh($id.$settings['cookie_salt']); $cookie=$id.'z'.$ky;
setcookie('blab8_xuidc',$cookie,time()+3600*24*365,'/');
setcookie('nombre_usuario',$uname,time()+3600*24*365,'/');
redirect('../pabellon360/index.html');die();}

/* --- */

$query='SELECT * FROM '.$dbss['prfx']."_users WHERE usr_name='$uname'";
$result=neutral_query($query);

if(neutral_num_rows($result)>0){
$title=$settings['title']; $info=$lang['nmtaken']; $link='../login/index.html';
include 'ui/templates/head.pxtm';
include 'ui/templates/info.pxtm';
die();}

$query='INSERT INTO '.$dbss['prfx']."_users VALUES(NULL,'$uname','$gpass','',$timestamp,'0')"; 
neutral_query($query);
$query='SELECT * FROM '.$dbss['prfx']."_users WHERE usr_name='$uname' AND usr_pass='$gpass'";
$result=neutral_query($query);

if(neutral_num_rows($result)>0){
$user=neutral_fetch_array($result);
$id=$user['usr_id'];$ky=hsh($id.$settings['cookie_salt']);$cookie=$id.'z'.$ky;
setcookie('blab8_xuidc',$cookie,time()+3600*24*365,'/');
setcookie('nombre_usuario',$uname,time()+3600*24*365,'/');
redirect('../pabellon360/index.html');die();}}

/* --- */

include 'lang/languages.inc';

$title=$settings['title'].': '.$lang['login'];
include 'ui/templates/head.pxtm';
include 'ui/templates/login.pxtm';

?>