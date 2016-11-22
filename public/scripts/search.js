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
