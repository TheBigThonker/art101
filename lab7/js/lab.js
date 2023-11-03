// Lab 7 - Functions
// Author: Parker Ehlers
// Date: 31 October 2023

//naming/creating function 
function sortUserName() {
    var userName = window.prompt ("Hello. Please tell me your name and I will fix it :D");
    console.log("userName = ", userName)
    // splitting it up
    var nameArray = userName.split('');
    //sorting it out
    var userNameSort = nameArray.sort();
    console.log("nameArray = ", userNameSort);
    //put it all back together, do not forget to add ''
    //forgetting them made the commas appear. 
    var sortedName = userNameSort.join('');
    console.log("sortedName = ", sortedName);
    //returning it gives the result of the function that can be printed.
    return sortedName;
    //also noting that it could be done in a single line as shown in the lab
    //as userName.toLower().split("").sort().join("")
}
//calling the function within the javascript
document.writeln(":D Your name is now fixed: ",
    sortUserName(),"</br>");
