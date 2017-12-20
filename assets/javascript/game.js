$( document ).ready(function(){
	console.log( "document loaded" );

  // Random Number Variable (between 19-120)
  var randomNumber = Math.floor(Math.random()*101+19)
  
  // Send this number to the Random Number div
  $(".displayNumber").text(randomNumber);

  // User total Variable
  var userTotal = 0;

  // Send the userTotal variable to the userTotal div
  $(".totalCounter").text(userTotal);

  // Assign a random number between 1-12 to each crystal
  var crystalNum1 = Math.floor(Math.random()*11+1);
  var crystalNum2 = Math.floor(Math.random()*11+1);
  var crystalNum3 = Math.floor(Math.random()*11+1);
  var crystalNum4 = Math.floor(Math.random()*11+1);

  // Scoreboard Variables 
  var wins = 0;
  var losses = 0;

  // Set up a click event for each crystal that increases the userTotal by the number of the crystal.
  
  // Crystal 1
  $("#crystal1").on("click", function(){ 
    userTotal = userTotal + crystalNum1;
    $(".totalCounter").text(userTotal);

      if (userTotal == randomNumber) {
      	wins++;
      	$(".winCounter").text("Wins: " + wins);
      	alert("Congratulations, you collected to correct amount of crystals! You WIN!");
      	// Reset randomNumber, crystalNums, and userTotal
      	reset();
      }

      else if (userTotal > randomNumber) {
      	losses++;
      	$(".lossCounter").text("Losses: " + losses);
      	alert("Whoops, you took too many crystals. You LOSE!");
      	// Reset randomNumber, crystalNums, and userTotal
      	reset();
      }
  })

  // Crystal 2
  $("#crystal2").on("click", function(){ 
    userTotal = userTotal + crystalNum2;
    $(".totalCounter").text(userTotal);

      if (userTotal == randomNumber) {
      	wins++;
      	$(".winCounter").text("Wins: " + wins);
      	alert("Congratulations, you collected to correct amount of crystals! You WIN!");
      	// Reset randomNumber, crystalNums, and userTotal
      	reset();
      }

      else if (userTotal > randomNumber) {
      	losses++;
      	$(".lossCounter").text("Losses: " + losses);
      	alert("Whoops, you took too many crystals. You LOSE!");
      	// Reset randomNumber, crystalNums, and userTotal
      	reset();
      }
  })

  // Crystal 3
  $("#crystal3").on("click", function(){ 
    userTotal = userTotal + crystalNum3;
    $(".totalCounter").text(userTotal);

      if (userTotal == randomNumber) {
      	wins++;
      	$(".winCounter").text("Wins: " + wins);
      	alert("Congratulations, you collected to correct amount of crystals! You WIN!");
      	// Reset randomNumber, crystalNums, and userTotal
      	reset();
      }

      else if (userTotal > randomNumber) {
      	losses++;
      	$(".lossCounter").text("Losses: " + losses);
      	alert("Whoops, you took too many crystals. You LOSE!");
      	// Reset randomNumber, crystalNums, and userTotal
      	reset();
      }
  })

  // Crystal 4
  $("#crystal4").on("click", function(){ 
    userTotal = userTotal + crystalNum4;
    $(".totalCounter").text(userTotal);

      if (userTotal == randomNumber) {
      	wins++;
      	$(".winCounter").text("Wins: " + wins);
      	alert("Congratulations, you collected to correct amount of crystals! You WIN!");
      	// Reset randomNumber, crystalNums, and userTotal
      	reset();
      }

      else if (userTotal > randomNumber) {
      	losses++;
      	$(".lossCounter").text("Losses: " + losses);
      	alert("Whoops, you took too many crystals. You LOSE!");
      	// Reset randomNumber, crystalNums, and userTotal
      	reset();
      }
  })

  // Created a reset function that only resets the variables that need to be reset at the end of each game so the user doesn't have to refresh the page to play again.
  function reset(){
    randomNumber = Math.floor(Math.random()*101+19)
    $(".displayNumber").text(randomNumber);
    userTotal = 0;
    $(".totalCounter").text(userTotal);
    crystalNum1 = Math.floor(Math.random()*11+1)
    crystalNum2 = Math.floor(Math.random()*11+1)
    crystalNum3 = Math.floor(Math.random()*11+1)
    crystalNum4  = Math.floor(Math.random()*11+1)
  }

});