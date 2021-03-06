document.addEventListener("DOMContentLoaded", function(){
  getTeacherClasses();
});

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}

function signOut() {
var auth2 = gapi.auth2.getAuthInstance();
auth2.signOut().then(function () {
  console.log('User signed out.');
  window.location.href = "../../google.html";
});
}

function createNewStudent(){
  console.log('created');
}

function getTeacherClasses(){
  document.getElementById("list-classes").innerHTML = `
    <option value="Prealgebra019283">Prealgebra 2e Code 019283</option>
    <option value="Calculus038493">Calculus 038493</option>
  `;
}
