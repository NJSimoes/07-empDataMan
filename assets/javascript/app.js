$(document).ready(function(){
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBXpabUcahmjeRQNS5XETRGH7DH8jz66Xk",
    authDomain: "employee-billable-462ea.firebaseapp.com",
    databaseURL: "https://employee-billable-462ea.firebaseio.com",
    projectId: "employee-billable-462ea",
    storageBucket: "employee-billable-462ea.appspot.com",
    messagingSenderId: "451478076145"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$('#addEmployee').on('click', function(event){
    console.log('Submit Event');
    event.preventDefault();

    var name = $('#name').val().trim();
    var role = $('#role').val().trim();
    var startDate = $('#startDate').val().trim();
    var monthlyRate = $('#monthlyRate').val().trim();

    console.log('Grabbed the values');
    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
    });

});

    database.ref().on('child_added', function(snapshot){
        var sv = snapshot.val();

        console.log(sv);
    });
});

function addRow(object){

}
