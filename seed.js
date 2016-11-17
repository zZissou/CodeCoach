var db = require("./models");

// var MentorSchema = new Schema({
//     name: String,
//     email: String,
//     website: String,
//     number: Number,
//     areaOfInterest: [String],
//     bio: String,
//     image: String,
//     pending: [Student.schema],
//     accepted: [Student.schema]
// });


var mentorsList = [{
    name: 'Justin Castilla',
    email: 'pxlperfection@gmail.com',
    number: '1234567890',
    website: 'http://www.justincastilla.com',
    areaOfInterest: ['Java', 'Javascript'],
    bio: 'I like tacos!',
    image: 'https://avatars0.githubusercontent.com/u/4304660?v=3&s=400'
}, {
    name: 'Jean Weatherwax',
    email: 'jean.weatherwax@generalassemb.ly',
    number: '0987654321',
    website: 'https://github.com/jeanmw',
    areaOfInterest: ['Python', 'Javascript'],
    bio: "I'm currently a lead Android Immersive instructor and a Web Immersive Instructor in San Francisco. Previously I worked at the successful mobile deeplinking company Branch Metrics in Palo Alto. Prior to this, I worked as an electrical and computer engineer at HP Labs. During a Marshall Scholarship in the UK, I completed an MSc in the Space Science & Technology at UCL in London, as well as an MSc at Imperial College London in Analogue and Digital Integrated Circuit Design. I have an Electrical Engineering B.S. undergraduate degree from the University of South Florida and work experience in variety of software and electronics-related fields. I also have experience in Android development and web development from personal projects and from Branch Metrics.",
    image: 'https://avatars.slack-edge.com/2016-05-27/46352131427_8202e1cffdceea3d50bf_512.jpg'
}, {
    name: 'Andrew Cordivari',
    email: 'andrew.cordivari@gmail.com',
    number: '3456745672',
    website: 'https://github.com/andrewdc92',
    areaOfInterest: ['Ruby', 'C++'],
    bio: 'Instructional Associate-WDI-SF',
    image: 'https://avatars.slack-edge.com/2016-08-02/65585343381_49ff7655355221ea892f_192.png'
}];

var studentsList = [{
    name: 'Kyle Russell',
    email: 'kyle.edward.russell@gmail.com',
    number: '1294837161',
    website: 'https://github.com/zZissou',
    areaOfInterest: ['Javascript'],
    bio: "I'm a beginner with a passion for learning, creating, and technology.",
    image: 'https://media.licdn.com/media/AAEAAQAAAAAAAALOAAAAJGRhN2VhZmM1LTdlMjItNDM1My05YmI5LTI5ZTJiZjQxNjc4Yw.jpg'
}, {
    name: 'Diane Liu',
    email: 'yunfeiyue@me.com',
    number: '0932134234',
    website: 'https://github.com/cittaliu',
    areaOfInterest: ['Java', 'Ruby'],
    bio: 'Looking for a mentor who can help me with Java',
    image: 'https://avatars.slack-edge.com/2016-10-17/92371312183_8176715423de397bb4b4_512.jpg'
}];
