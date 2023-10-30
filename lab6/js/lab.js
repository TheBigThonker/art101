// Lab 6 - Arrays and Objects
// Author: Parker Ehlers
// Date: 29 October 2023

// Defining variable
myTransport = [ "bus", " walking", " running", " Ford Freestyle" ];

// Defining my main ride, with included function.
myMainRide = {
  make: "Ford",
  model: "Freestyle",
  color: "Black",
  year: 2005,
  age: function () {
      return 2023 - this.year;
  }
}

// Output
document.writeln("The kinds of transportation I use: ", myTransport, ".</br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
    