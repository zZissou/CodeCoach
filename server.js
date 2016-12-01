// SERVER-SIDE JAVASCRIPT

//require express framework and addtional modules in our app
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('./models');
var controllers = require('./controllers');
var isMentor;
// TODO: Should ejs be included in this list? -jc

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');
// set session options
app.use(session({
    saveUninitialized: true,
    resave: true,
    // TODO: Change the default secret String to something different
    secret: 'SuperSecretCookie',
    cookie: {
        maxAge: 30 * 60 * 1000
    } // 30 minute cookie lifespan (in milliseconds)
}));

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/mentors', controllers.mentors.index);
app.get('/api/mentors/:id', controllers.mentors.show);
app.delete('/api/mentors/:id', controllers.mentors.destroy);
app.put('/api/mentors/:id', controllers.mentors.update);
app.get('/search', controllers.mentors.searchMentor);
app.get('/listall', controllers.mentors.listAllMentors);

app.get('/api/students', controllers.students.index);
app.get('/api/students/:id', controllers.students.show);
app.delete('/api/students/:id', controllers.students.destroy);
app.put('/api/students/:id', controllers.students.update);

// signup route (renders signup view)
app.get('/signup', function(req, res) {
    res.render('signup');
});

// login route with placeholder response
app.get('/login', function(req, res) {
    res.render('login');
});

// TODO: remove unused code from production codebase -jc
// show user profile page
// app.get('/profile', function(req, res) {
//     // find the user currently logged in
//     if (isMentor === true) {
//         db.Mentor.findOne({
//             _id: req.session.userId
//         }, function(err, currentUser) {
//             res.render('profile_mentor.ejs', {
//                 mentor: currentUser
//             });
//         });
//     } else {
//         db.Student.findOne({
//             _id: req.session.userId
//         }, function(err, currentUser) {
//             res.render('profile_student.ejs', {
//                 student: currentUser
//             });
//         });
//     }
// });

// TODO: it's okay to have a couple authorization routes with anonymous functions in your server.js, but try to reduce the amount of full blown routes with callbacks on server.js (consider adding another controller file) -jc
app.get('/profile', function(req, res) {
    // find the user currently logged in
    if (isMentor === true) {
        db.Mentor.findOne({_id: req.session.userId})
        .populate('pending')
        .exec(function(err, mentor){
          // TODO: what happens if there is an error? -jc
          res.render('profile_mentor.ejs', {
             mentor: mentor
          });
          // TODO: avoid console logs in production codebase
          console.log(mentor);
        });
    } else {
        db.Student.findOne({
            _id: req.session.userId
        }, function(err, currentUser) {
            // TODO: what happens if there is an error? -jc
            res.render('profile_student.ejs', {
                student: currentUser
            });
        });
    }
});


// A create user route - creates a new user with a secure password
//TODO: After a user signs up they just get dumped to a login page? That's not very user friendly. -jc
app.post('/users', function(req, res) {
    // Nice job -jc
    if (req.body.option === 'Mentor') {
        db.Mentor.createSecure(req.body, function(err, user) {
            res.redirect('/login');
        });

    } else {
        db.Student.createSecure(req.body, function(err, user) {
            res.redirect('/login');
        });
    }
});

app.post('/sessions', function(req, res) {
    // use the email and password to authenticate here
    db.Mentor.authenticate(req.body.email, req.body.password, function(err, user) {
      // TODO: This is a poor workaround for checking one DB then the other. Is there a better way? -jcß
        if (err) {
            // TODO: remove unused code from production codebase -jc
            //res.redirect('/login');
            db.Student.authenticate(req.body.email, req.body.password, function(err, user) {
                if (err) {
                    res.redirect('/login');
                } else {
                    req.session.userId = user._id;
                    id = user._id;
                    isMentor = false;
                    res.redirect('/profile');
                }
            });
        } else {
            isMentor = true;
            req.session.userId = user._id;
            res.redirect('/profile');
        }
    });
});

app.post('/contact', function(req, res){
  db.Mentor.findOne({_id: req.body.mentorId}, function(err, mentor){
    if(err){console.log("Unable to find a mentor!")};
    db.Student.findOne({_id: req.body.userId}, function(err, curtUser){
        mentor.pending.unshift(curtUser._id);
        mentor.save();
        // TODO: avoid console logs in production codebase
        console.log(mentor);
        res.json({mentor: mentor});
    });

  });
});

app.post('/cancel', function(req, res){
  db.Mentor.findOne({_id: req.body.userId}, function(err, mentor){
        mentor.pending.shift();
        mentor.save();
        // TODO: avoid console logs in production codebase
        console.log(mentor);
        //TODO: send this res.json inside a callback function of the metor.save function -jc. You're only sending the original mentor object, not the saved newer object -jc
        res.json({mentor: mentor});
  });
});

app.post('/accept', function(req, res){
  db.Mentor.findOne({_id: req.body.userId}, function(err, mentor){
        var tmp=mentor.pending.shift();
        mentor.accepted.push(tmp);
        mentor.save();
        // TODO: avoid console logs in production codebase
        console.log(tmp);
        console.log(mentor);
        //TODO: send this res.json inside a callback function of the metor.save function -jc. You're only sending the original mentor object, not the saved newer object -jc
        res.json({mentor: mentor});
  });
});


app.get('/logout', function(req, res) {
    // remove the session user id
    req.session.userId = null;
    // redirect to login (for now)
    res.redirect('/login');
});

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is running on http://localhost:3000/');
});
