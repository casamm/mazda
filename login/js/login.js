var googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: '82592990920-e1ana6tp6aaikrl7j8koh9jgp1hcuia5.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      attachSignin(document.getElementById('customBtn'));
    });
  };

  function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {

            var form = document.createElement("form");
            var element1 = document.createElement("input"); 
            var element2 = document.createElement("input");  

            form.method = "POST";
            form.action = "../Chat/login.php";   

            element1.value=googleUser.getBasicProfile().getName();
            element1.name="uname";
            form.appendChild(element1);  

            element2.value="1";
            element2.name="guest";
            form.appendChild(element2);

            document.body.appendChild(form);

            form.submit();

        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }

  



//FACEBOOK ************

window.fbAsyncInit = function() {
         FB.init({
           appId      : '191798194579784', // App ID
           status     : true, // check login status
           cookie     : true, // enable cookies to allow the server to access the session
           xfbml      : true  // parse XFBML
         });
 
        /* Revisar es status del usuario al entrar a la pagina */
        FB.getLoginStatus(function(response) {
          if (response.status === 'connected') { // Esta conectado
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
                login();
          } else if (response.status === 'not_authorized') { // La aplicacion no esta atoriada
                logout();
          } else { // No esta conectado
                logout();
          }
         });
 
         /* Eventos para capturar el login del usuario */
         FB.Event.subscribe('auth.login', function(response) { // cuando autoriza conexion
             login();
         });
 
       /* Funcion que se ejecuta cuando ya se autoriza la conexion */
       function login(){
           FB.api('/me', function(response) {
                // document.getElementById('login').style.display = "block";
                // document.getElementById('name').style.display = "block";
                // document.getElementById('login').innerHTML = response.name + " estás conectado!";
                // document.getElementById('fb-login').style.display = "none";
                // fqlQuery();


                 var form = document.createElement("form");
                  var element1 = document.createElement("input"); 
                  var element2 = document.createElement("input");  

                  form.method = "POST";
                  form.action = "../Chat/login.php";   

                  element1.value=response.name;
                  element1.name="uname";
                  form.appendChild(element1);  

                  element2.value="1";
                  element2.name="guest";
                  form.appendChild(element2);

                  document.body.appendChild(form);

                  form.submit();
           });
       }
       /* Funcion que se ejecuta cuando aun no se hace la conexion con facebook */
       function logout(){
            document.getElementById('login').style.display = "none";
            document.getElementById('name').style.display = "none";
            document.getElementById('fb-login').style.display = "block";
       }
       /* Funcion para extraer algunos datos del susuario, como nombre y foto */
       function fqlQuery(){
           FB.api('/me', function(response) {
                var query = FB.Data.query('select name, hometown_location, sex, pic_square from user where uid={0}', response.id);
                query.wait(function(rows) {
 
                  document.getElementById('name').innerHTML =
                    'Your name: ' + rows[0].name + "<br />" +
                    '<img src="' + rows[0].pic_square + '" alt="" />' + "<br />";
                });
           });
       }
       };
        /* Funcion para abrir la ventanita y conectarse a facebook */
        function facebookLogin() {
            FB.login(function(response){
                scope: 'email,user_birthday,status_update,publish_stream' // estos son los permisos que necesita la aplicacion
            });
        }
 
       // Load the SDK Asynchronously
       (function(d){
          var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement('script'); js.id = id; js.async = true;
          js.src = "//connect.facebook.net/en_US/all.js";
          ref.parentNode.insertBefore(js, ref);
        }(document));

