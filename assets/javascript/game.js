$( document ).ready(function(){
	console.log( "document loaded" );

  //Random Number Variable
  var randomNumber = Math.floor(Math.random()*101+19)

  $(".displayNumber").text(randomNumber);

  // Scoreboard Variables
  var score = 0;

  // Sending the score variable to the score counter
  $('.scoreCounter').text(score);

  // Assign a random number between 1-12 to each crystal
  var crystalNum1= Math.floor(Math.random()*11+1)
  var crystalNum2= Math.floor(Math.random()*11+1)
  var crystalNum3= Math.floor(Math.random()*11+1)
  var crystalNum4= Math.floor(Math.random()*11+1)

  // Set up a click event for each crystal that increases the user total by the number of the crystal.
  
  // Crystal 1
  $("#crystal1").on("click", function(){ 
    score = score + crystalNum1;
    $(".scoreCounter").text(score);
      if (score == randomNumber) {
      	alert("Congratulations, you collected to correct amount of crystals! You WIN!");
      }

      else if (score > randomNumber) {
      	alert("Whoops, you took too many crystals. You LOSE!");
      }
  })

  // Crystal 2
  $("#crystal2").on("click", function(){ 
    score = score + crystalNum2;
    $(".scoreCounter").text(score);
      if (score == randomNumber) {
      	alert("Congratulations, you collected to correct amount of crystals! You WIN!");
      }

      else if (score > randomNumber) {
      	alert("Whoops, you took too many crystals. You LOSE!");
      }
  })

  // Crystal 3
  $("#crystal3").on("click", function(){ 
    score = score + crystalNum3;
    $(".scoreCounter").text(score);
      if (score == randomNumber) {
      	alert("Congratulations, you collected to correct amount of crystals! You WIN!");
      }

      else if (score > randomNumber) {
      	alert("Whoops, you took too many crystals. You LOSE!");
      }
  })

  // Crystal 4
  $("#crystal4").on("click", function(){ 
    score = score + crystalNum4;
    $(".scoreCounter").text(score);
      if (score == randomNumber) {
      	alert("Congratulations, you collected to correct amount of crystals! You WIN!");
      }

      else if (score > randomNumber) {
      	alert("Whoops, you took too many crystals. You LOSE!");
      }
  })

  // Win/Lose Variables 
  var wins = 0;
  var losses = 0;

  // Sending the wins and losses variables to the page
  $('.winCounter').text("Wins: " + wins);
  $('.lossCounter').text("Losses: " + losses);

});