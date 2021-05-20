
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAZy1PfR8Q7TQmBx6kgYoQwD9g4eSQzHI0",
      authDomain: "kwitter-le-twiter-of-ma.firebaseapp.com",
      databaseURL: "https://kwitter-le-twiter-of-ma-default-rtdb.firebaseio.com",
      projectId: "kwitter-le-twiter-of-ma",
      storageBucket: "kwitter-le-twiter-of-ma.appspot.com",
      messagingSenderId: "531130660192",
      appId: "1:531130660192:web:63019f7525326c14061a05"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name")
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
