const firebaseConfig = {
    apiKey: "AIzaSyCUUObsd2Lng4sdBVEY7QnvjuJ4H7rSKt8",
    authDomain: "asap-events-25196.firebaseapp.com",
    databaseURL: "https://asap-events-25196-default-rtdb.firebaseio.com",
    projectId: "asap-events-25196",
    storageBucket: "asap-events-25196.appspot.com",
    messagingSenderId: "556560433061",
    appId: "1:556560433061:web:1992e8e71418efdaccb24c"
  };
const app = firebase.initializeApp(firebaseConfig); 
const dbRef = firebase.database().ref(); 

const detailsRef = dbRef.child('userdetails'); 
detailsRef.on("child_added", function(snapshot, prevChildKey) { 
  var newPost = snapshot.val(); 
}); 
 
function send(){ 
  var first_name = document.getElementById("first_name").value; 
  var last_name = document.getElementById("last_name").value; 
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var event_name = document.getElementById("event_name").value; 
  var tickets = document.getElementById("tickets").value;   
  
  detailsRef.push().set({ 
    first_name: first_name, 
    last_name: last_name, 
    email: email,
    phone: phone,
    event_name:event_name,
    tickets:tickets,
  }); 
   
 
} 