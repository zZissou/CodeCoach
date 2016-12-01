//TODO: Is this file necessary? -jc
console.log("Log in is connected.");
$(document).ready(function() {
    $("#login-form").on('submit', function() {
        var loginData = $("#login-form").serialize();
    });
});
