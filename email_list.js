const firebaseConfig = {
    apiKey: "AIzaSyD8kiWZk0pnUOaWzVenGE8D3enMxlLsYzQ",
    authDomain: "email-list-ebd4c.firebaseapp.com",
    projectId: "email-list-ebd4c",
    databaseURL:"https://email-list-ebd4c-default-rtdb.firebaseio.com/",
    storageBucket: "email-list-ebd4c.appspot.com",
    messagingSenderId: "291830507729",
    appId: "1:291830507729:web:e0b69e3063a7cd649ffdf0"
  };
  const app = firebase.initializeApp(firebaseConfig); 
    const dbRef = firebase.database().ref(); 

    const detailsRef = dbRef.child('userdetails'); 
detailsRef.on("child_added", function(snapshot, prevChildKey) { 
  var newPost = snapshot.val(); 
}); 
 
function send(){ 
  var email = document.getElementById("email").value; 
  
  detailsRef.push().set({ 
    email: email, 

  }); 
   
 
} 