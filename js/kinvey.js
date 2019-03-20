// Initialize Kinvey
var client = Kinvey.init({
  appKey: 'kid_SykK63Erf',
  appSecret: '8a4725500ebf4e00a4e8877f76f78ae9'
});

var activeUser = Kinvey.User.getActiveUser(client);

$(document).ready(function() {
  $(document).trigger('app.ready');
});

//Signup
var sign = Kinvey.initialize({
  appKey: 'kid_SykK63Erf',
  appSecret: '8a4725500ebf4e00a4e8877f76f78ae9'
});

  sign.then(function onSuccess(activeUser){
          if(activeUser != null) window.location = '';
        }).catch(function onError(error){
          console.log('Error', error);
        })

$('#submitSignUp').click(sign);

function signUp(){

  if($('#password').val() == $('#password2').val()){

    var newUser = Kinvey.User.signup({
            username: $('#email').val(),
            password: $('#password').val(),
            email: $('#email').val()
          })

      newUser.then(function onSuccess(activeUser){
        window.location = 'login.html';
      }).catch(function onError(error){
        $('#signupError').html(error.message)
      })

    } else {
      $('#signupError').html('Your passwords do not match');
     }
   }

//login
var start = Kinvey.initialize({
    appKey: 'kid_SykK63Erf',
    appSecret: '8a4725500ebf4e00a4e8877f76f78ae9'
  })

  start.then(function onSuccess(activeUser){
          if(activeUser != null) window.location = 'pages/userPage.html';
        }).catch(function onError(error){
          console.log(error);
        })

  $('#submitLogin').click(login);

    function login(){

      var log = Kinvey.User.login($('#email2').val(),
      $('#password3').val());

      log.then(function onSuccess(activeUser){
        if(activeUser != null) window.location = 'index.html';
      }).catch(function onError(error){
        console.log(error);
      })
    }

    //logout button
    document.getElementById('logoutButton').addEventListener('click', logout);

    function logout(){
      var loPr = Kinvey.User.logout();
      loPr.then(function(){
        window.location.href='index.html';
      })
    }

//collection
var dataStore = Kinvey.DataStore.collection('destinations');
