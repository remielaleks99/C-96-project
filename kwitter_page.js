var firebaseConfig = {
    apiKey: "AIzaSyDTkDJGw8vwXG2icQCTwtPJe9GdTb3ipig",
    authDomain: "c-96-project.firebaseapp.com",
    databaseURL: "https://c-96-project-default-rtdb.firebaseio.com",
    projectId: "c-96-project",
    storageBucket: "c-96-project.appspot.com",
    messagingSenderId: "878466091463",
    appId: "1:878466091463:web:7af7feaa01dbf3431571e2"
  };
   firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
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
