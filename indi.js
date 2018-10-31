


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById('user_div').style.display="block";
     document.getElementById('log_div').style.display="none";

     var user = firebase.auth().currentUser;

     if (user != null){
     	var email_id = user.email;
     	document.getElementById('userPara').innerHTML = "e-mail id : " + email_id
     }

  } else {
  	document.getElementById('user_div').style.display="none";
     document.getElementById('log_div').style.display="block";
    
  }
});

function login() {
	var userEmail = document.getElementById('email_field').value;
	var userPassword = document.getElementById('password_field').value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  alert("Error :" + errorMessage);
  // ...
});

}

function logout() {
	firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
	// body...
}
