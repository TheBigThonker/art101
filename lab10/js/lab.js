// Lab 10 - JavaScript for the Web
// Author: Parker Ehlers
// Date: 16 November 2023
// This is the js for lab 10, which requires jQuery to function.

// Experiment: summon a promt.
//var oneside = output.prompt ("Say Something.");

// Randome text generator:
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

// The click listener for button
$("#make-convo").click(function(){
    // Get the user input
    var something = prompt("Say something")
    // Append the input to a text bubble on the left      
    $('#output').append('<div class="left"><p>' + something + '</p></div>')
    // Generate the latin
    const newText = generateRandomText();
    // Append the new text div to the output div on the right
    $("#output").append('<div class="right"><p>' + newText + '</p></div>');
});





