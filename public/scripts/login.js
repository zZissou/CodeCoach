console.log("Log in is connected.");
$(document).ready(function() {

    var loginData = $("#login-form").serialize();
    console.log(loginData);
    // send POST request to /users with the form data
    $.post('/sessions', loginData, function(response) {
        console.log(response);
    });
});
