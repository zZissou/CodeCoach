console.log("search.js is linked!");

var template;

$(document).ready(function() {
    $('.search').submit(function(e) {
        e.preventDefault();
        var query = $(this).serialize();
        $.ajax({
            method: 'get',
            data: query,
            url: '/search',
            success: handleGetMentorSuccess,
            error: handleGetMentorError
        });
        $('#mentors').empty();
    });

    $(".deleteBtn").on('click', function() {
        location.href = '/';
        $.ajax({
            method: 'DELETE',
            // TODO: NO. Build this string outside of your ajax request and pass it in as a pretty variable name. -jc
            url: '/api/students/' + $(this).attr('data-id'),
            success: deleteMentor,
            error: handleGetMentorError
        });
    });

    $(document).on('click', ".contactBtn", function() {
        // TODO: please avoid logging on a client's browser -jc
        console.log($(this).attr('data-id'));
        $.ajax({
            // TODO: POST should be in all capital letters -jc
            method: 'post',
            data:
            // TODO: NO. Build this string outside of your ajax request and pass it in as a pretty variable name. -jc
             "userId="+$(this).attr('data-id')+"&mentorId="+$(this).parent().attr('data-id'),
            url: '/contact',
            success: contactMentor,
            error: handlePostMentorError
        });
    });



    $(document).on('click', ".cancel", function() {
        // TODO: please avoid logging on a client's browser -jc
        console.log($(this).attr('data-id'));
        $(".pending-requests").empty();
        $.ajax({
            method: 'post',
            // TODO: NO. Build this string outside of your ajax request and pass it in as a pretty variable name. -jc
            data: "userId="+$(this).attr('data-id'),
            url: '/cancel',
            success: cancelSuccess,
            error: handleCancelError
        });
    });

    $(document).on('click', ".accept", function() {
        // TODO: please avoid logging on a client's browser -jc
        console.log($(this).attr('data-id'));
        $(".pending-requests").append('<h4>Congratulations on starting your mentorship!</h4>');
        $(".result").empty();

        $.ajax({
            method: 'post',
            // TODO: NO. Build this string outside of your ajax request and pass it in as a pretty variable name. -jc
            data: "userId="+$(this).attr('data-id'),
            url: '/accept',
            success: acceptSuccess,
            error: handleAcceptError
        });
    });
});

function handleGetMentorSuccess(data) {
    var receivedMentor = data.mentor;
    // TODO: Use strict equality when comparing two elements in javascript (a === b)
    // TODO: Rewrite this if/else to check if receivedMentor is NOT undefined. You will only need an if clause.
    if (receivedMentor == undefined) {
        // TODO: please avoid logging on a client's browser -jc
        console.log("Cannot find a mentor!");
    } else {
        for (mentorProfile of data.mentor) {
            renderMentor(mentorProfile);
        }
    }
}

function handleGetMentorError(a, b, c) {
    // TODO: You have three arguments you can print out from this function. Your message is much less helpful than the three arguments passed in. -jc
    console.log("Cannot get the json file!");
}

function handlePostMentorError(a, b, c) {
    // TODO: You have three arguments you can print out from this function. Your message is much less helpful than the three arguments passed in. -jc
    console.log("Cannot get the json file!");
    console.log(data);
}

function handleCancelError(a, b, c) {
    // TODO: You have three arguments you can print out from this function. Your message is much less helpful than the three arguments passed in. -jc
    console.log("Cannot get the json file!");
}

function handleAcceptError(a, b, c) {
    // TODO: You have three arguments you can print out from this function. Your message is much less helpful than the three arguments passed in. -jc
    console.log("Cannot get the json file!");
}

function renderMentor(mentor) {
    var source = $('#mentor-template').html();
    var template = Handlebars.compile(source);
    var mentorHtml = template(mentor);
    console.log(mentorHtml);
    $('#mentors').prepend(mentorHtml);
}

//TODO: Is there nothing to do other than console log (which shouldn't be in production codebase) ? -jc
function contactMentor(json){
    console.log(json);
}
function deleteMentor(json) {
    console.log(json);
}
function cancelSuccess(json){
    console.log(json);
}
function acceptSuccess(json){
    console.log(json);
}
