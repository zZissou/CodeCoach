console.log("Log in is connected.");
$(document).ready(function() {
<<<<<<< HEAD

    var loginData = $("#login-form").serialize();
    console.log(loginData);
=======
    $("#login-form").on('submit', function() {
        var loginData = $("#login-form").serialize();
        console.log(loginData);
    });
>>>>>>> master
});
