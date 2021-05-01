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
  room_name=localStorage.getItem("room_name");

function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value="";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("empty_div").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "hobby") {
firebase_message_id = childKey;
message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+name+"<img class='user_tick' src='Lets chat.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
button_tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLikes(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row=name_tag+message_tag+button_tag+span_tag;
document.getElementById("empty_div").innerHTML+=row;
} });  }); }
getData();

function updateLikes(message_id)
{
console.log(message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
like:updated_likes
});
}