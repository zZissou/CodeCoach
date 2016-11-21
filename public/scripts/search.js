
console.log("search.js is linked!");

var template;

$(document).ready(function() {
    $('.search').submit(function(e) {
        e.preventDefault();
        var query = $(this).serialize();

        if (query.length <= 4) {
            console.log(query.length);
            return;
        }
        $.ajax({
            method: 'get',
            data: query,
            url: '/search',
            success: handleGetMentorSuccess,
            error: handleGetMentorError
        });
    });
});

function handleGetMentorSuccess(data) {
    var receivedMentor = data.mentors;
    console.log(data);
    if (receivedMentor == undefined) {
        console.log("Cannot find a mentor!");
    } else {
        receivedMentor.forEach(function renderOneMentor(mentor) {
            renderMentor(mentor);
        });
    }
}

function handleGetMentorError(a, b, c) {
    console.log("Cannot get the json file!");
}

function renderMentor(mentor) {
    var source = $('#mentor-template').html();
    var template = Handlebars.compile(source);
    var mentorHtml = template(mentor);
    $('#mentors').prepend(mentorHtml);
}
