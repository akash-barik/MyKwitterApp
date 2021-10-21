function addName(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("username", user_name);
    window.location="kwitter_room.html";
}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB4aBQH1Jnfc6o8jOESxpXso74JR0GZIR4",
    authDomain: "kwitter-38f24.firebaseapp.com",
    databaseURL: "https://kwitter-38f24-default-rtdb.firebaseio.com",
    projectId: "kwitter-38f24",
    storageBucket: "kwitter-38f24.appspot.com",
    messagingSenderId: "712155782360",
    appId: "1:712155782360:web:305d40291a4aaa85398bad"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }
  