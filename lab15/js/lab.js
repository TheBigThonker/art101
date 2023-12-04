// Lab 15 - AJAX
// Author: Parker Ehlers
// Date: 3 December 2023
// This is the js for lab 15, which requires jQuery to function.
// properly utilize AJAX. Help from Maile as
// I was home from section with covid.


$(document).ready(function (){ 
    //the event listener
    $("#activate").on("click", function() {
        //The core ajax
        $.ajax({ 
            url: "https://yesno.wtf/api", 
            method: "GET",
            datatype: "json",

        })
    .done(
        function(many) {
            //adds the image and the answer
            $("#output").append(many.answer);
            $("#output").after("<img src="+many.image+">");
        })
    .fail(
        function(jqHXR, textStatus, errorThrown) {
            console.log("Error:",textStatus, errorThrown);
        }
    )
    })
})