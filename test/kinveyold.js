
var sign = Kinvey.initialize({
  appKey: 'kid_SykK63Erf',
  appSecret: '8a4725500ebf4e00a4e8877f76f78ae9'
});

var user = new Kinvey.User();
var promise = user.signup({
  username: 'username',
  password: 'password'
})
  .then(function(user) {
    if(activeUser != null) window.location = 'userPage.html';
  })
  .catch(function(error) {
  console.log('Error', error);
  });



var sign = Kinvey.initialize({
  appKey: 'kid_SykK63Erf',
  appSecret: '8a4725500ebf4e00a4e8877f76f78ae9'
});

  sign.then(function onSuccess(activeUser){
          if(activeUser != null) window.location = 'login.html';
        }).catch(function onError(error){
          console.log('Error', error);
        })

  $('#submitSignup').click(signup);

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
