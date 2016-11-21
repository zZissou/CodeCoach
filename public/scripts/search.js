console.log("search.js is linked!");

var template;

$(document).ready(function() {
    $('.search').submit(function(e) {
        e.preventDefault();
        var query = $(this).serialize();
        console.log(query);
        $.ajax({
            method: 'get',
            data: query,
            url: '/search',
            success: handleGetMentorSuccess,
            error: handleGetMentorError
        });
        $('#mentors').empty();
    });
    $()
});

function handleGetMentorSuccess(data) {
    var receivedMentor = data.mentor;
    console.log(data.mentor);
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

function renderMentor(mentor) {
    var source = $('#mentor-template').html();
    var template = Handlebars.compile(source);
    var mentorHtml = template(mentor);
    console.log(mentorHtml);
    $('#mentors').prepend(mentorHtml);
}
