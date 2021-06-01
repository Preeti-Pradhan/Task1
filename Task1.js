var firebaseConfig = {
        // Paste your Config Code
		apiKey: "AIzaSyCnPgNzXH_hkTkTeSdfQXJFCrj-G23aHYs",
    		authDomain: "tf-firebase-demo-78ccd.firebaseapp.com",
		databaseURL: "https://tf-firebase-demo-78ccd.firebaseio.com",
    		projectId: "tf-firebase-demo-78ccd",
    		storageBucket: "tf-firebase-demo-78ccd.appspot.com",
    		messagingSenderId: "61525865576",
    		appId: "1:61525865576:web:b61a59a3814f9a6b56b7dd"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()
	
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}
