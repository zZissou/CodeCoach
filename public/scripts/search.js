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
            url: '/api/students/' + $(this).attr('data-id'),
            success: deleteMentor,
            error: handleGetMentorError
        });
    });

    $(document).on('click', ".contactBtn", function() {
        console.log($(this).attr('data-id'));
        $.ajax({

            method: 'post',
            data: "userId="+$(this).attr('data-id')+"&mentorId="+$(this).parent().attr('data-id'),
            url: '/contact',
            success: contactMentor,
            error: handlePostMentorError
        });
    });



    $(document).on('click', ".cancel", function() {
        console.log($(this).attr('data-id'));
        $(".pending-requests").empty();
        $.ajax({
            method: 'post',
            data: "userId="+$(this).attr('data-id'),
            url: '/cancel',
            success: cancelSuccess,
            error: handleCancelError
        });
    });

    $(document).on('click', ".accept", function() {
        console.log($(this).attr('data-id'));
        $(".pending-requests").append('<h4>Congratulations on starting your mentorship!</h4>');
        $(".result").empty();

        $.ajax({
            method: 'post',
            data: "userId="+$(this).attr('data-id'),
            url: '/accept',
            success: acceptSuccess,
            error: handleAcceptError
        });
    });
});

function handleGetMentorSuccess(data) {
    var receivedMentor = data.mentor;
    if (receivedMentor == undefined) {
        console.log("Cannot find a mentor!");
    } else {
        for (mentorProfile of data.mentor) {
            renderMentor(mentorProfile);
        }
    }
}

function handleGetMentorError(a, b, c) {
    console.log("Cannot get the json file!");
}

function handlePostMentorError(a, b, c) {
    console.log("Cannot get the json file!");
    console.log(data);
}

function handleCancelError(a, b, c) {
    console.log("Cannot get the json file!");
}

function handleAcceptError(a, b, c) {
    console.log("Cannot get the json file!");
}

function renderMentor(mentor) {
    var source = $('#mentor-template').html();
    var template = Handlebars.compile(source);
    var mentorHtml = template(mentor);
    console.log(mentorHtml);
    $('#mentors').prepend(mentorHtml);
}

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
