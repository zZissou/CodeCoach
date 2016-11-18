/************
 * DATABASE *
 ************/

var db = require("../models");

// GET /api/mentors
function index(req, res) {
    db.Mentor.find({}, function(err, allMentors) {
        if (err) {
            return console.log(err);
        }
        res.json({
            mentors: allMentors
        });
    });
}


function create(req, res) {
  console.log('body', req.body);

  var languages = req.body.languages.split(',').map(function(item) { return item.trim(); } );
  req.body.languages = languages;

  db.Mentor.create(req.body, function(err, mentor) {
    if (err) { console.log('error', err); }
    console.log(mentor);
    res.json(mentor);
  });
}

function show(req, res) {
  db.Mentor
}

function destroy(req, res) {
    // FILL ME IN !
}

function update(req, res) {
    // FILL ME IN !
}


// export public methods here
module.exports = {
    index: index,
    create: create,
    show: show,
    destroy: destroy,
    update: update
};
