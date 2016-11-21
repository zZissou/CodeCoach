/************
 * DATABASE *
 ************/

var db = require("../models");
var bodyParser = require('body-parser');

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


function show(req, res) {
    db.Mentor.findOne({_id: req.params.id}, function(err, foundMentor) {
        if (err) {
            console.log('mentorsController.show error', err);
        }
        res.json(foundMentor);
    });
}

function destroy(req, res) {
    db.Mentor.findOneandRemove({
        _id: req.params.id
    }, function(err, foundMentor) {
        res.json(foundMentor);
    });
}

function update(req, res) {
<<<<<<< HEAD
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
=======
    console.log('updating with data', req.body);
    db.Mentor.findbyId(req.params.id, function(err, foundMentor) {
        if (err) {
            console.log('mentorsController.update error', err);
        }
        foundMentor.name = req.body.name;
        foundMentor.email = req.body.email;
        foundMentor.website = req.body.website;
        foundMentor.number = req.body.number;
        foundMentor.save(function(err, savedMentor) {
            if (err) {
                console.log('saving altered mentor failed');
            }
            res.json(savedMentor);
        });
    });
}

function searchMentor(req, res){
  console.log('searching:', req.query.q)
  var queryArr = [];
  queryArr.push(req.query.q);
  queryArr.push(req.query.q.split(' '));

  db.Mentor.search(queryArr, function(err, mentors){
    if(err){
      console.error(err);
    }
    res.json(mentors);
 });
}

function listAllMentors(req, res) {
    db.Mentor.find({}, function(err, allUsers) {
        res.render('listAllMentors.ejs', {
            mentor: allUsers
        });
>>>>>>> master
    });
}


// export public methods here
module.exports = {
    index: index,
    show: show,
    destroy: destroy,
    update: update,
    searchMentor: searchMentor,
    listAllMentors: listAllMentors
};
