//initialize firebase
//pull data input from html on submit click
//update the database
//pull information from database and print to the HTML
//use moment.js to calculate next arrival time and minutes til next arrival
//print the time info to HTML

$(document).ready(function(){

  var config = {
    apiKey: "AIzaSyBpDuQNFs9eLzw5T3Q9IbRekH1NJcNoN4g",
    authDomain: "trains-981ee.firebaseapp.com",
    databaseURL: "https://trains-981ee.firebaseio.com",
    projectId: "trains-981ee",
    storageBucket: "trains-981ee.appspot.com",
    messagingSenderId: "360960076505"
  };
  
  firebase.initializeApp(config);
  var database = firebase.database();
  console.log("checkpoint1");
  
  //pull data input from html on submit click
  $(document).on("click", "#submitTrain", function(event){
    event.preventDefault();

    var trainName = $("#trainNameInput").val().trim();
    var trainDestination = $("#destinationInput").val().trim();
    var trainFirstTime = moment($("#firstTimeInput").val().trim(), "HH:mm").format("X");
    var trainFrequency = moment($("#frequencyInput").val().trim(), "mm").format("X");


    var newTrain = {
      name: trainName,
      destination: trainDestination,
      time: trainFirstTime,
      frequency: trainFrequency
    };
    
    //update the database
    database.ref().push(newTrain);

    $("input").val("");
  });

  //pull information from database and print to the HTML
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainFirstTime = childSnapshot.val().time;
    var trainFrequency = childSnapshot.val().frequency;
  
  //trying to work on the time

    var differenceTimes = moment().diff(moment.unix(trainFirstTime, "X"), "minutes");


  var tRemainder = differenceTimes % trainFrequency;
  console.log(differenceTimes);
  console.log(trainFrequency);
  console.log(tRemainder);

  var tMinutes = trainFrequency - tRemainder;

  // To calculate the arrival time, add the tMinutes to the currrent time
  var tArrival = moment().add(tMinutes, "m").format("hh:mm A"); 


    $("#infoTable").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td><td>");
  });

  console.log(moment().toString());

  




});