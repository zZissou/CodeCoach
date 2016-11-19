// SERVER-SIDE JAVASCRIPT

//require express framework and addtional modules in our app
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('./models');
var Mentor = require('./models/mentor');

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
    secret: 'SuperSecretCookie',
    cookie: {
        maxAge: 30 * 60 * 1000
    } // 30 minute cookie lifespan (in milliseconds)
}));

var controllers = require('./controllers');


/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', controllers.mentors.index);

app.get('/api/mentors', controllers.mentors.index);
app.get('/api/mentors/:mentorId', controllers.mentors.show);
app.post('api/mentors', controllers.mentors.create);
app.delete('/api/mentors/:mentorsId', controllers.mentors.destroy);
app.put('/api/mentors/:mentorsId', controllers.mentors.update);

// signup route (renders signup view)
app.get('/signup', function(req, res) {
    res.render('signup');
});

// login route with placeholder response
app.get('/login', function(req, res) {
    res.render('login');
});

// show user profile page
app.get('/profile', function(req, res) {
    // find the user currently logged in
    Mentor.findOne({
        _id: req.session.userId
      }, function(err, currentUser) {
        res.render('profile.ejs', {
          mentor: currentUser
        })
    });
});


// A create user route - creates a new user with a secure password
app.post('/users', function(req, res) {
    // use the email and password to authenticate here
    // Mentor.createSecure(req.body.email, req.body.password, req.body.name, req.body.website, req.body.number, req.body.areaOfInterest, req.body.bio, req.body.image, req.body.pending, req.body.accepted, function(err, user) {
    //     req.session.userId = user._id;
    //     res.redirect('/profile');
    // });
    db.Mentor.createSecure(req.body, function (err, user) {
    res.json(user);
  });
});

app.post('/sessions', function(req, res) {
    // use the email and password to authenticate here
    Mentor.authenticate(req.body.email, req.body.password, function(err, user) {
      if (err) {
        res.redirect('/login');
      } else {
        req.session.userId = user._id;
        res.redirect('/profile');
      }
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
