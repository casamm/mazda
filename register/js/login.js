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
          //document.getElementById('name').innerText = "Signed in: " +  googleUser.getBasicProfile().getName();

        var form = document.createElement("form");
        var element1 = document.createElement("input"); 
        var element2 = document.createElement("input");  
        var element3 = document.createElement("input");  
        var element4 = document.createElement("input");  

        form.method = "POST";
        form.action = "../Chat/register.php";   

        element1.value=googleUser.getBasicProfile().getName();
        element1.name="uname";
        form.appendChild(element1);  

        element2.value=googleUser.getBasicProfile().getEmail();
        element2.name="email";
        form.appendChild(element2);

        element3.value=googleUser.getBasicProfile().getName();+"12345";
        element3.name="upass";
        form.appendChild(element3);

        element4.value=googleUser.getBasicProfile().getName();+"12345";
        element4.name="rpass";
        form.appendChild(element4);

        document.body.appendChild(form);

        document.body.appendChild(form);

        form.submit();

        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }

   function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

 
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '191798194579784',
    cookie     : true,  // enable cookies to allow the server to access 
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });


  /*FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });*/

  };

  // Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.7&appId=191798194579784";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', {fields: 'name, email' }, function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Gracias por registrarse, con Facebook ' + response.name + '!';

        var form = document.createElement("form");
        var element1 = document.createElement("input"); 
        var element2 = document.createElement("input");  
        var element3 = document.createElement("input");  
        var element4 = document.createElement("input");  

        form.method = "POST";
        form.action = "../Chat/register.php";   

        element1.value=response.name;
        element1.name="uname";
        form.appendChild(element1);  

        element2.value=response.mail;
        element2.name="email";
        form.appendChild(element2);

        element3.value=response.name+"12345";
        element3.name="upass";
        form.appendChild(element3);

        element4.value=response.name+"12345";
        element4.name="rpass";
        form.appendChild(element4);

        document.body.appendChild(form);

        form.submit();


    });
  }
