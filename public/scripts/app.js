console.log("app.js is linked!");
var template;
<<<<<<< HEAD
var Handlebars;
var $mentorsList;
var allMentors = [];

$(document).ready(function() {

  $mentorsList = $('#mentorTarget');
=======
var $searchMentor;

$(document).ready(function() {
  // $.ajax({
  //   method: 'GET',
  //   url: '/api/mentors',
  //   type: 'json',
  //   success: handleGetMentorSuccess,
  //   error: handleGetMentorError
  // });

  //
>>>>>>> master
  $.ajax({
    method: 'GET',
    url: '/api/mentors',
    type: 'json',
    success: handleGetMentorSuccess,
    error: handleGetMentorError
  });

<<<<<<< HEAD
  $.ajax({
    method: 'GET',
    url: '/api/students',
    type: 'json',
    success: handleGetStudentSuccess,
    error: handleGetStudentError
  });

  $mentorsList.on('click', '.deleteBtn', function() {
    console.log('clicked delete button to', '/api/mentors/'+$(this).attr('data-id'),
    $.ajax({
      method: 'DELETE',
      url: '/api/mentors/'+$(this.).attr('data-id'),
      success: deleteMentorSuccess,
      error: deleteMentorError
    });
  });
=======
>>>>>>> master
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

//don't need this?
function renderProfile(profile) {
  var source = $('profile-template').html();
  var template = Handlebars.compile(source);
  var profileHtml = template(profile);
  $('#profiles').prepend(profileHtml);
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

function deleteMentorSuccess(json) {
  var mentor = json;
  console.log(json);
  var mentorId = mentor._id;
  console.log('delete mentor', mentorId);
  //find the mentor with the correct Id and remove it from mentorsList
  for (var index = 0; index < allMentors.length; index++) {
    if (allMentors[index]._id === mentorId) {
      allMentors.splice(index, 1)
      break;
    }
  }
  render();
}
