// Lab 9 - Libraries & jQuery
// Author: Parker Ehlers
// Date: 12 November 2023
// This is the js for lab 9, which requires jQuery to function.
// It will create buttons and event listeners for those buttons. 

// The button for challenge:
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// The listener for challenge:
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// The button for problems:
$("#problems").append("<button id='button-problems'>Make Special</button>");

// The listener for problems:
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});

// The button for results:
$("#results").append("<button id='button-results'>Make Special</button>");

// The listener for problems:
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});

