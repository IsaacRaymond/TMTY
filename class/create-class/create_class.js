document.addEventListener("DOMContentLoaded", function(){

});

var email;
var name;

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();

  updateEmail(profile.getEmail());
  updateName(profile.getName());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}

function updateEmail(x){
  email = x;
}

function updateName(x){
  name = x;
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    window.location.href = "../../google.html";
  });
}

function createNewClass(){
  var dropdown = document.getElementById("class-choice");
  var choice = dropdown.options[dropdown.selectedIndex].value;

    $.post('/create-class',
    {
      email: email,
      name: name,
      textbook: choice
    });

//    window.location.href = "./class/create_class/create_class.html";
}
