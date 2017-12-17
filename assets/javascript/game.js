$( document ).ready(function(){

//Random Number Variable
var randomNumber = Math.floor(Math.random()*101+19)

$("#random-number").text(randomNumber);

// Create random numbers for each crystal
var crystalNum1= Math.floor(Math.random()*11+1)
var crystalNum2= Math.floor(Math.random()*11+1)
var crystalNum3= Math.floor(Math.random()*11+1)
var crystalNum4= Math.floor(Math.random()*11+1)

// Win/Lose Variable
var wins = 0;
var losses = 0;

// Scoreboard Variables
var score = 0;


// Sending the wins and losses variables to the page
$('#winCounter').text(wins);
$('#lossCounter').text(losses);