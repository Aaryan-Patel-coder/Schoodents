//Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCi7y8ZOmJi7HO1QxePi8kTh0GwXJL3fvA",
  authDomain: "schoodents-179c4.firebaseapp.com",
  databaseURL: "https://schoodents-179c4-default-rtdb.firebaseio.com",
  projectId: "schoodents-179c4",
  storageBucket: "schoodents-179c4.appspot.com",
  messagingSenderId: "408999121924",
  appId: "1:408999121924:web:53a7cba7aa07556e8fd151"
};
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
 
       //End code
       });});}
 getData();
 