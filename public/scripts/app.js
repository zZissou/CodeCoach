console.log("app.js is linked!");
var template;
var $searchMentor;

$(document).ready(function() {
  // $.ajax({
  //   method: 'GET',
  //   url: '/api/mentors',
  //   type: 'json',
  //   success: handleGetMentorSuccess,
  //   error: handleGetMentorError
  // });

  $.ajax({
    method: 'GET',
    url: '/api/mentors',
    type: 'json',
    success: handleGetMentorSuccess,
    error: handleGetMentorError
  });

  $searchMentor.on('submit', function(event) {
        event.preventDefault();

        // serialze form data
        var result = $(this).serialize();
        console.log(result);

        // POST request to create new place
        $.get('/profile', result, function(data) {
            console.log(data);
            handleGetMentorSuccess(data);
        });
        // reset the form
        // $searchMentor[0].reset();
        // $searchMentor.find('input').first().focus();
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
