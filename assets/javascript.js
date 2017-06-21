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
    event.preventdefault();

    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTime = $("#firstTimeInput").val().trim();
    var frequency = $("#frequencyInput").val().trim();

    console.log("checkpoint2");
  });




});