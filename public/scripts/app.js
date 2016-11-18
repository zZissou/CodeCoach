console.log('app.js loaded!');

var template;

$(document).ready(function() {
    console.log('app.js loaded!');

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
    console.log(source);
    var template = Handlebars.compile(source);
    var mentorHtml = template(mentor);
    $('#mentors').prepend(mentorHtml);
}


// <div class="mentors row" id="mentors">
//     <script id="mentor-template" type="text/x-handlebars-template">
//         <div class="profile-mentor col-md-4" data-id="{{_id}}">
//             <p>
//                 <div>
//                     <img src={{image}} class="logo">
//                 </div>
//                 <b>{{name}}</b>
//                 <br>
//                 <i>{{bio}}</i>
//                 <br>
//             </p>
//         </div>
//     </script>
