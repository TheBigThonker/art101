// Lab 16 - JSON and APIs
// Author: Parker Ehlers
// Date: 5 December 2023
// This is the js for lab 16, which requires jQuery to function.

console.log("JS Loaded");

//const ENDPOINT = "https://xkcd.com/info.0.json";


// add button event listener
// Using the core $.ajax() method
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
        $("#output").append(data.month+"-"+data.day+"-"+data.year+"</br>");
        $("#output").append(data.title+"</br>");
        $("#output").append(data.img+"</br>");
        $("#output").append(data.alt);
        $("#output").after("<img src="+">");
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})