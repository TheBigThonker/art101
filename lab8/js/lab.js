// Lab 8 - Anon Functions and Callbacks
// Author: Parker Ehlers
// Date: 5 November 2023

//creating an array and a variable, then showcasing it. 
var myArray = [7, 13, 202, 1024];
console.log("My array: ", myArray);


//now, creating the function
function multiply (a, b) {
    console.log("Numbers received: ", a, b);
    var product = a * b;
    console.log(product);
    return product
}
//testing with a few numbers
result = multiply(4,9);
console.log("4 * 9 = ", result);

result = multiply(2,8);
console.log("2 * 8 = ", result);

//now, testing function with the array.
console.log("Now, testing the array.")
myArray.map(multiply);

//next, running/creating the callback function
myArray.map(function(a) {
    console.log("Callback:numbers received: ", a);
    console.log(a / 1.5);
    return a / 1.5;
}
);
