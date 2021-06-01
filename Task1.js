   // Your web app's Firebase configuration
      var firebaseConfig = {
        // Paste your Config Code
	  apiKey: "AIzaSyBqOEdoAxtusJvtzR8wAykPm62oMpJkznU",
    authDomain: "task1-3c20e.firebaseapp.com",
   databaseURL: "https://task1-3c20e.firebaseio.com",
    projectId: "task1-3c20e",
    storageBucket: "task1-3c20e.appspot.com",
    messagingSenderId: "769714458335",
    appId: "1:769714458335:web:1369c1f8da51f83783e36a"     
	      
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      document.getElementById('dashboard').style.display="none"

      document.getElementById('login').addEventListener('click', GoogleLogin)
      document.getElementById('logout').addEventListener('click', LogoutUser)

      let provider = new firebase.auth.GoogleAuthProvider()

      function GoogleLogin(){
        console.log('Login Btn Call')
        firebase.auth().signInWithPopup(provider).then(res=>{
          console.log(res.user)
          document.getElementById('LoginScreen').style.display="none"
          document.getElementById('dashboard').style.display="block"
          showUserDetails(res.user)
        }).catch(e=>{
          console.log(e)
        })
      }

      function showUserDetails(user){
        document.getElementById('userDetails').innerHTML = `
          <img src="${user.photoURL}" style="width:10%">
          <p>Name: ${user.displayName}</p>
          <p>Email: ${user.email}</p>
        `
      }

      function checkAuthState(){
        firebase.auth().onAuthStateChanged(user=>{
          if(user){
            document.getElementById('LoginScreen').style.display="none"
            document.getElementById('dashboard').style.display="block"
            showUserDetails(user)
          }else{

          }
        })
      }

      function LogoutUser(){
        console.log('Logout Btn Call')
        firebase.auth().signOut().then(()=>{
          document.getElementById('LoginScreen').style.display="block"
          document.getElementById('dashboard').style.display="none"
        }).catch(e=>{
          console.log(e)
        })
      }
      checkAuthState()



