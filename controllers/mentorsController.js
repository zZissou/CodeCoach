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
  db.Mentor.findById(req.params.mentorId, function(err, foundMentor) {
    if(err) { console.log('mentorsController.show error', err); }
    console.log('mentorsController.show responding with', foundMentor);
    res.json(foundMentor);
  });
}

function destroy(req, res) {
    dbMentor.findOneandRemove({ _id: req.params.mentorId }, function(err, foundMentor){
      res.json(foundMentor);
    });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Mentor.findbyId(req.params.mentorId, function(err, foundMentor) {
    if (err) { console.log('mentorsController.update error', err); }
    foundMentor.name = req.body.name;
    foundMentor.email = req.body.email;
    foundMentor.website = req.body.website;
    foundMentor.number = req.body.number;
    foundMentor.save(function(err, savedMentor) {
      if (err) { console.log('saving altered mentor failed'); }
      res.json(savedMentor);
    });
  });
}


// export public methods here
module.exports = {
    index: index,
    create: create,
    show: show,
    destroy: destroy,
    update: update
};
