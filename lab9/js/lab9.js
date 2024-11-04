/*
  lab9.js - A Javascript/jQuery script which uses buttons to modify elements on the page.
  
  Author: Drew Vander Weele 
  Date: 11/4/24
*/

// add buttons to each sections

$("#challenge").append("<button id='button-challenge'>make special</button>");

$("#problems").append("<button id='problem-button'>click here!</button>");

$("#results").append("<button id='results-button'>press here!</button>");

// add a click listener to each button

$("body").on("click", "button", function(){
    $(this).parent().toggleClass("special");
});