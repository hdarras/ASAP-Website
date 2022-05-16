const firebaseConfig = {
    apiKey: "AIzaSyAF4O7VDRfwXnYGSAUVqtwngm5wE1AE1uI",
    authDomain: "asap-contact.firebaseapp.com",
    projectId: "asap-contact",
    databaseURL: "https://asap-contact-default-rtdb.firebaseio.com/",
    storageBucket: "asap-contact.appspot.com",
    messagingSenderId: "1071971754141",
    appId: "1:1071971754141:web:52c0daaf9838c0def77474"
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
  var subject = document.getElementById("subject").value; 
  var message = document.getElementById("message").value;   
  
  detailsRef.push().set({ 
    first_name: first_name, 
    last_name: last_name, 
    email: email,
    phone: phone,
    subject:subject,
    message:message,
  }); 
   
 
} 