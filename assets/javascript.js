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
    var trainFirstTime = $("#firstTimeInput").val().trim();
    var trainFrequency = $("#frequencyInput").val().trim();

    console.log("checkpoint2");

    var newTrain = {
      name: trainName,
      destination: trainDestination,
      time: trainFirstTime,
      frequency: trainFrequency
    };
    
    //update the database
    database.ref().push(newTrain);

    $("input").val("");
    console.log(newTrain);
  });

  //pull information from database and print to the HTML
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainFirstTime = childSnapshot.val().time;
    var trainFrequency = childSnapshot.val().frequency;

    console.log(trainName);

    $("#infoTable").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td><td>");
  });




});