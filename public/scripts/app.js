var template;

$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/mentors',
    type: 'json',
    success: handleGetMentorSuccess,
    error: handleGetMentorError
  });
});

function handleGetMentorSuccess(data) {
    var receivedMentor = data.mentors;
    console.log(data);
    receivedMentor.forEach(function renderOneMentor(mentor) {
        renderMentor(mentor);
    });
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
