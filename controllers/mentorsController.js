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
    db.Mentor.findOneAndRemove({
        _id: req.params.id
    }, function(err, foundMentor) {
      //TODO: What happens if there is an error? -jc
        res.json(foundMentor);
    });
}

function update(req, res) {
    // TODO: avoid console logging in production codebase -jc
    console.log('updating with data', req.body);
    // TODO: consider using an update method instead of a findOne and save. -jc
    db.Mentor.findById(req.params.id, function(err, foundMentor) {
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
  // TODO: avoid console logging in production codebase -jc
  console.log('Searching:', req.query.q);
  var searchName = req.query.q;
  // TODO: avoid console logging in production codebase -jc
  console.log(searchName);

  db.Mentor.find({}, function(err, succ){
      var arr =[];
      console.log(succ);
      succ.forEach(function(elem){
        if(elem.areaOfInterest.indexOf(searchName)>-1){
          arr.push(elem);
        }
      });
      //TODO: Move error checks to the top of the function, as this will prevent wasted code activity -jc
       if(err){
         return console.log(err);
       }
       // TODO: avoid console logging in production codebase -jc
       console.log("Sending ", arr);
       res.json({mentor: arr});
  });
}


function listAllMentors(req, res) {
    db.Mentor.find({}, function(err, allUsers) {
        res.render('listAllMentors.ejs', {
            mentor: allUsers
        });
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
