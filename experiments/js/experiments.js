// Author: Parker Ehlers
// Date: 15 November 2023
// Experiment: Create a button that accepts a prompt and appends it to a title
// Check that js is working 
console.log("Javascript is working!")

$("#my-button").click(function(){
    
    var name = prompt("Name Please: ")
    $('#title').html('Hello ' + name)
});
