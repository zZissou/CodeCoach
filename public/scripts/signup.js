console.log("Sign up is connected!");
$(document).ready(function() {
    //TODO: your signup form in singup.ejs is handling a post request to sessions. What is this code doing? -jc
    $("#signup-form").on('submit', function(e) {
        var signupData = $("#signup-form").serialize();
        // send POST request to /users with the form data
        $.post('/users', signupData, function(response) {
            console.log(response);
        })
    });
});
