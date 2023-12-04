// Lab 15 - AJAX
// Author: Parker Ehlers
// Date: 3 December 2023
// This is the js for lab 15, which requires jQuery to function.
// properly utilize AJAX


$(document).ready(function (){
    $("#activate").on("click", function() {
        $.ajax({ 
            url: "https://yesno.wtf/api", 
            method: "GET",
            datatype: "json",

        })
    .done(
        function(many) {
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