/************
 * DATABASE *
 ************/

var db = require("../models");

// GET /api/mentors
function index(req, res) {
    db.Student.find({}, function(err, allStudents) {
        if (err) {
            return console.log(err);
        }
        res.json({
            students: allStudents
        });
    });
}

function show(req, res) {
  db.Student.findById(req.params.id, function(err, foundStudent) {
    if(err) { console.log('studentsController.show error', err); }
    console.log('studentsController.show responding with', foundStudent);
    res.json(foundStudent);
  });
}

function destroy(req, res) {
    db.Student.findOneandRemove({ _id: req.params.id }, function(err, foundStudent){
      res.json(foundStudent);
    });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Student.findbyId(req.params.id, function(err, foundStudent) {
    if (err) { console.log('studentsController.update error', err); }
    foundStudent.name = req.body.name;
    foundStudent.email = req.body.email;
    foundStudent.website = req.body.website;
    foundStudent.number = req.body.number;
    foundStudent.save(function(err, savedStudent) {
      if (err) { console.log('saving altered mentor failed'); }
      res.json(savedStudent);
    });
  });
}


// export public methods here
module.exports = {
    index: index,
    show: show,
    destroy: destroy,
    update: update
};
