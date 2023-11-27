// Lab 13 - Loops
// Author: Parker Ehlers
// Date: 26 November 2023
// This is the js for lab 12, which requires jQuery to function.
// Create the FizzBuzz function for the lab

// Create the FizzBuzz program itself
    for (var index=1; index<=200; index++){
        var longString, index;
    if (index % 3 == 0) { 
        longString += "Fizz!<br>"
    }
    else if (index % 5 == 0) { 
        longString += "Buzz!<br>"
    }
    else if (index % 7 == 0) { 
        longString += "Boom!<br>"
    }
    else if (index % 15 == 0) { 
        longString += "FizzBuzz!<br>"
    }
    else if (index % 21 == 0) { 
        longString += "FizzBoom!<br>"
    }
    else if (index % 35 == 0) { 
        longString += "BuzzBoom!<br>"
    }
    else if (index % 105 == 0) { 
        longString += "FizzBuzzBoom!<br>"
    }
    else {longString += index + "<br>";
    }
    
    }
    $("#output").html(longString);