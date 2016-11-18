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
  bio: 'Im a full-stack web developer in San Francisco. I began my journey into programming two years ago and after a hiatus to expand my customer-facing skills, I committed to computer programming as my career. I have a passion for creating robust applications grounded in simplicity and functionality.',
  image: 'https://avatars.slack-edge.com/2016-08-02/65585343381_49ff7655355221ea892f_192.png'
}, {
  name: 'Ben Manning',
  email: 'ben.manning@gmail.com',
  number: '7654561234',
  website: 'https://github.com/benthemanning',
  areaOfInterest: ['Javascript', 'Ruby', 'PHP'],
  bio: 'Ut dictum ut nisl nec mollis. Fusce congue ligula ligula, sed molestie nunc feugiat a. Donec sed sapien cursus, molestie risus ac, semper arcu. Integer blandit maximus dictum. Nam placerat ac felis sit amet elementum. Aenean in dictum dolor.'
  image: 'https://avatars.slack-edge.com/2015-07-04/7235892081_e3639065d029cc3a76e0_192.jpg'
}, {
  name: 'Dylan Conroy',
  email: 'conroy60@yahoo.com',
  number: '9514475985',
  website: 'https://github.com/dylan_conroy',
  areaOfInterest: ['C++', 'Ruby', 'Javascript'],
  bio: 'Ut dictum ut nisl nec mollis. Fusce congue ligula ligula, sed molestie nunc feugiat a. Donec sed sapien cursus, molestie risus ac, semper arcu. Integer blandit maximus dictum. Nam placerat ac felis sit amet elementum. Aenean in dictum dolor.'
  image: 'https://s3.amazonaws.com/uifaces/faces/twitter/felipeapiress/128.jpg'
}, {
  name: 'Janet Kreiger PhD',
  email: 'janet_krieger89@gmail.com',
  number: '5082849882',
  website: 'https://github.com/janet2'
  areaOfInterest: ['Javascript', 'PHP', 'C++', 'Ruby']
  image: 'https://s3.amazonaws.com/uifaces/faces/twitter/sunshinedgirl/128.jpg'
}, {
  name: 'Nilda Tremblay',
  email: 'nelda48@yahoo.com',
  number: '6581584505'
  website: 'https://github.com/nelda_tremblay99',
  areaOfInterest: ['Python', 'C++']
  image: 'https://s3.amazonaws.com/uifaces/faces/twitter/IsaryAmairani/128.jpg'
}, {
  name: 'Chet Weimann',
  email: 'chet.weimann@hotmail.com',
  number: '1930338366',
  website: 'https:github.com/chet_weimann52',
  areaOfInterest: ['PHP', 'C++', 'Javascript'],
  image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ooomz/128.jpg'
}];
var studentsList = [{
  name: 'Kyle Russell',
  email: 'kyle.edward.russell@gmail.com',
  number: '1294837161',
  website: 'https://github.com/zZissou',
  areaOfInterest: ['Javascript', 'Python'],
  bio: 'Part time model. Full time Web Development student. Currently looking to expand my Javascript knowledge as well as learn Python.'
  image: 'https://media.licdn.com/media/AAEAAQAAAAAAAALOAAAAJGRhN2VhZmM1LTdlMjItNDM1My05YmI5LTI5ZTJiZjQxNjc4Yw.jpg'
}, {
  name: 'Diane Liu',
  email: 'yunfeiyue@me.com',
  number: '0932134234',
  website: 'https://github.com/cittaliu',
  areaOfInterest: ['Java', 'Ruby'],
  bio: 'Currently enrolled in the Web Development Immersive Program at General Assembly. I have an advanced skill level in Javascript from my Masters in Electrical Engineering and Im looking for a mentor who can help me with Java and Ruby.'
  image: 'https://avatars.slack-edge.com/2016-10-17/92371312183_8176715423de397bb4b4_512.jpg'
}, {
  name: 'Stephen Dangerfield',
  email: 'dangersteve1@gmail.com',
  number: '0987654321',
  website: 'https://github.com/dangersteve',
  areaOfInterest: ['Javascript'],
  bio: 'Theres only one thing in this world that I love more than danger and thats learning to code. As a Junior Full Stack Developer, Im looking for a Coach to help me improve my Javascript skills.'
  image: 'https://avatars.slack-edge.com/2016-10-17/92588041669_9eb08a604f0b4838e321_512.jpg'
}, {
  name: 'Henry Conroy',
  email: 'Henry32@hotmail.com',
  number: '7382875315',
  website: 'https://github.com/Henry94',
  areaOfInterest: ['C++', 'PHP'],
  bio: 'Ut dictum ut nisl nec mollis. Fusce congue ligula ligula, sed molestie nunc feugiat a. Donec sed sapien cursus, molestie risus ac, semper arcu. Integer blandit maximus dictum. Nam placerat ac felis sit amet elementum. Aenean in dictum dolor.'
  image: 'https://s3.amazonaws.com/uifaces/faces/twitter/hoangloi/128.jpg'
}, {
  name: 'Helen West',
  email: 'Helen10@hotmail.com',
  number: '0537033130',
  website: 'https://github.com/Helen_West',
  areaOfInterest: ['C++'],
  bio: 'Ut dictum ut nisl nec mollis. Fusce congue ligula ligula, sed molestie nunc feugiat a. Donec sed sapien cursus, molestie risus ac, semper arcu. Integer blandit maximus dictum. Nam placerat ac felis sit amet elementum. Aenean in dictum dolor.',
  image: 'https://s3.amazonaws.com/uifaces/faces/twitter/baluli/128.jpg'
}, {
  name: 'Deron Marvin',
  email: 'Deron.Marvin@gmail.com',
  number: '7104905033',
  website: 'https://github.com/Deron_Marvin58',
  areaOfInterest: ['Python'],
  bio: 'Ut dictum ut nisl nec mollis. Fusce congue ligula ligula, sed molestie nunc feugiat a. Donec sed sapien cursus, molestie risus ac, semper arcu. Integer blandit maximus dictum. Nam placerat ac felis sit amet elementum. Aenean in dictum dolor.',
  image: 'https://s3.amazonaws.com/uifaces/faces/twitter/dannol/128.jpg'
}, {
  name: 'Herminia Hessel',
  email: 'Herminia56@yahoo.com',
  number: '734-524-6537',
  website: 'https://github.com/Herminia_Hessel',
  areaOfInterest: ['Java', 'Python' 'PHP'],
  bio: 'Ut dictum ut nisl nec mollis. Fusce congue ligula ligula, sed molestie nunc feugiat a. Donec sed sapien cursus, molestie risus ac, semper arcu. Integer blandit maximus dictum. Nam placerat ac felis sit amet elementum. Aenean in dictum dolor.',
  image: 'https://s3.amazonaws.com/uifaces/faces/twitter/itskawsar/128.jpg'
}, {
  name: 'Maritza Lesh',
  email: 'Maritza.Lesch39@yahoo.com',
  number: '7794724441',
  website: 'https://github.com/Maritza78',
  areaOfInterest: ['PHP', 'Ruby'],
  bio: 'Ut dictum ut nisl nec mollis. Fusce congue ligula ligula, sed molestie nunc feugiat a. Donec sed sapien cursus, molestie risus ac, semper arcu. Integer blandit maximus dictum. Nam placerat ac felis sit amet elementum. Aenean in dictum dolor.',
  image: 'https://s3.amazonaws.com/uifaces/faces/twitter/al_li/128.jpg'
}];




db.Mentor.remove({}, function(err, mentors) {
    db.Mentor.create(mentorsList, function(err, mentors) {
        if (err) {
            return console.log('ERROR', err);
        }
        console.log("all mentors:", mentors);
        console.log("created", mentors.length, "mentors");
        process.exit();
    });
});
