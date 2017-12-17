$( document ).ready(function(){
	console.log( "document loaded" );

  //Random Number Variable
  var randomNumber = Math.floor(Math.random()*101+19)

  $(".displayNumber").text(randomNumber);

  // Assign a random number between 1-12 to each crystal
  var crystalNum1= Math.floor(Math.random()*11+1)
  var crystalNum2= Math.floor(Math.random()*11+1)
  var crystalNum3= Math.floor(Math.random()*11+1)
  var crystalNum4= Math.floor(Math.random()*11+1)


  // Win/Lose Variables 
  var wins = 0;
  var losses = 0;

  // Sending the wins and losses variables to the page
  $('.winCounter').text("Wins: " + wins);
  $('.lossCounter').text("Losses: " + losses);


  // Scoreboard Variables
  var score = 0;

  // Sending the score variable to the score counter
  $('.scoreCounter').text(score);

});