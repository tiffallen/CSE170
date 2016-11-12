/*var data = require("../login.json");

$(document).ready(function () {
        //event handler for submit button
        $("#btnSubmit").click(function () {
            //collect userName and password entered by users
            var userName = $("#username").val();
            var password = $("#password").val();

            //call the authenticate function
            authenticate(userName, password);
        });
    });

    //authenticate function to make ajax call
    function authenticate(userName, password) {
        $.ajax
        ({
           type: "POST",
        	url: "/home",
        	dataType: 'json',
        	async: false,
        	data: '{"userName": "' + userName + '", "password" : "' + password + '"}',
        	success: function () {
            }
        })
    }*/ 

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

