var firebaseConfig = {
    apiKey: "AIzaSyAkDKAgb63Upn5qBi_vhRr-l93fTSAwq3k",
    authDomain: "let-s-chat-web-app-ee675.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-ee675-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-ee675",
    storageBucket: "let-s-chat-web-app-ee675.appspot.com",
    messagingSenderId: "580753713928",
    appId: "1:580753713928:web:a5735040f813a0568adabd"
  };
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML="Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function logOut(){
window.location="index.html";
localStorage.removeItem("user_name");
}

function addRoom(){
room_name=document.getElementById("room_name").value;
localStorage.setItem("room_name",room_name);
firebase.database().ref("/").child(room_name).update({
hobby:"cooking"
});
window.location="message_room.html";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="message_room.html";

}