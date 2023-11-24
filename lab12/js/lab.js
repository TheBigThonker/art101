// Lab 12 - Conditionals
// Author: Parker Ehlers
// Date: 23 November 2023
// This is the js for lab 12, which requires jQuery to function.

// Create the sorting hat function. I'm a Ravenclaw. 
function sortingHat(str) {
    len = str.length;
    mod = len % 5;
    // use the mod to determine the house
    // I'm a
    if (mod == 0) {
        return "Gryffindor. The House of the brave, the chivalrous, the daring, those with nerve."
    } 
    else if (mod == 1) {
        return "Ravenclaw. The House of the intelligent, the witty, the knowledgeable, the creative, and the curious."
    } 
    else if (mod == 2) {
        return "Slytherin. The House of the ambitious, the cunning, self-preserving, the leaders, the resourceful."
    } 
    else if (mod == 3) {
        return "Hufflepuff. The House of the hard-working, the patient, the fair, the loyal, the dedicated."
    } 
    else if (mod == 4) {
        return "Sneeflesnorp. The House of the...wait, this doesn't sound right."
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


