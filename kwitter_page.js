//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAQtGlDlK3IX8EVVgA8QuAu2Bs6DS2lH4E",
      authDomain: "kwitter-5f4f3.firebaseapp.com",
      databaseURL: "https://kwitter-5f4f3-default-rtdb.firebaseio.com",
      projectId: "kwitter-5f4f3",
      storageBucket: "kwitter-5f4f3.appspot.com",
      messagingSenderId: "958834334557",
      appId: "1:958834334557:web:b03afc62ae13f1ad1e26b4"
    };
    
    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    
    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
             name: user_name,
             message: msg,
             like:0   
          });
          
          document.getElementById("msg").value = "";

    }
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();



function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
 window.location.replace("index.html");
}


