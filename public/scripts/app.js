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
    });

});

function handleGetMentorSuccess(data) {
    var receivedMentor = data.mentors;
    // TODO: please avoid logging on a client's browser -jc
    console.log(data);
    receivedMentor.forEach(function renderOneMentor(mentor) {
        renderMentor(mentor);
    });
}

function handleGetMentorError(a, b, c) {
    // TODO: You have three arguments you can print out from this function. Your message is much less helpful than the three arguments passed in. -jc
    console.log("Cannot get the json file!");
}

function renderMentor(mentor) {
    //TODO: Would it be faster if we only assigned the source and template once and only called the template function inside this function? -jc
    var source = $('#mentor-template').html();
    var template = Handlebars.compile(source);
    var mentorHtml = template(mentor);
    $('#mentors').prepend(mentorHtml);
}

//student stuff
function handleGetStudentSuccess(data) {
    var receivedStudent = data.students;
    // TODO: please avoid logging on a client's browser
    console.log(data);
    receivedStudent.forEach(function renderOneStudent(student) {
        renderStudent(student);
    });
}

function handlegetStudentError(a, b, c) {
    // TODO: You have three arguments you can print out from this function. Your message is much less helpful than the three arguments passed in. -jc
    console.log("Cannot get the json file!");
}

//should we differentiate?
function renderStudent(student) {
    //TODO: Would it be faster if we only assigned the source and template once and only called the template function inside this function? -jc  
    var source = $('#student-template').html();
    var template = Handlebars.compile(source);
    var profileHtml = template(profile);
    $('#profiles').prepend(profileHtml);
}
