// Lab 11 - JavaScript Events and Forms
// Author: Parker Ehlers
// Date: 19 November 2023
// This is the js for lab 11, which requires jQuery to function.

// Sorts the string characters into alphabetical order
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    // Notably done in one line, which was a previous task X
    return inputString.split('').sort().join('');
  }

  // Click listener for the submit button
$("#submit").click(function(){
    // Get value of input field
    const userName = $("#user-name").val();
    // Summon the sorting
    userNameSorted = sortString(userName);
    // Append the new div to the output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
