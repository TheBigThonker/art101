// Lab 12 - Conditionals
// Author: Parker Ehlers
// Date: 23 November 2023
// This is the js for lab 12, which requires jQuery to function.

// Create the sorting hat function. I'm a Ravenclaw. 
function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    // use the mod to determine the house
    // I'm a
    if (mod == 0) {
        return "Gryffindor"
    } 
    else if (mod == 1) {
        return "Ravenclaw"
    } 
    else if (mod == 2) {
        return "Slytherin"
    } 
    else if (mod == 3) {
        return "Hufflepuff"
    } 
}
// now, the click listener, which is notably different from previous assignments.
// this appears to be a bit more sophisticated. Nevermind, I can't get it to work.

//var myButton = document.getElementById("button");
//myButton.addEventListener ("click", funtion(), {
 // var fullName = document.getElementById("input").value,
//  var house = sortingHat(name), "deprecated", var name was interfered with by something in jQuery.
 // newText = "<p> The Sorting Hat has sorted you into " + house +".</p>",
 // document.getElementById("output").innerHTML = newText
//})
// working click listener that actually runs the function.
$("#button").click(function(){
    // Get value of input field
    const userName = $("#input").val();
    // Summon the sorting
    userNameSorted = sortingHat(userName);
    // Append the new div to the output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});


