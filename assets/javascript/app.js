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

    if(name != '' && role != '' && startDate != '' && monthlyRate != '' ){

        database.ref().push({
            name: name,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    }else{
        alert('Please enter data into all fields.');
        return;
    }

});

    database.ref().on('child_added', function(snapshot){
        var sv = snapshot.val();

        console.log(sv);
        addRow(sv);
    });
});

function addRow(object){
    var monthsWorked = Math.floor(moment().diff(moment(object.startDate), 'months', true));
    var row = $('<tr>');
    row.append($('<th scope="row">').text(object.name));
    row.append($('<td>').text(object.role));
    row.append($('<td>').text(moment(object.startDate).format('DD/MM/YYYY')));
    row.append($('<td>').text(monthsWorked));
    row.append($('<td>').text(object.monthlyRate));
    row.append($('<td>').text(object.monthlyRate * monthsWorked));
    $('#employeeTableBody').append(row);
}
