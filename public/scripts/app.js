console.log("app.js is linked!");
var template;

$(document).ready(function() {

  $.ajax({
    method: 'GET',
    url: '/api/mentors',
    type: 'json',
    success: handleGetMentorSuccess,
    error: handleGetMentorError
  });

  $.ajax({
    method: 'GET',
    url: '/api/students',
    type: 'json',
    success: handleGetStudentSuccess,
    error: handleGetStudentError
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

function renderMentor(mentor){
    var source = $('#mentor-template').html();
    var template = Handlebars.compile(source);
    var mentorHtml = template(mentor);
    $('#mentors').prepend(mentorHtml);
}

//student stuff
function handleGetStudentSuccess(data) {
  var receivedStudent = data.students;
  console.log(data);
  receivedStudent.forEach(function renderOneStudent(student) {
    renderStudent(student);
  });
}

function handlegetStudentError(a, b, c) {
  console.log("Cannot get the json file!");
}

//should we differentiate?
function renderStudent(student) {
  var source = $('#student-template').html();
  var template = Handlebars.compile(source);
  var profileHtml = template(profile);
  $('#profiles').prepend(profileHtml);
}
