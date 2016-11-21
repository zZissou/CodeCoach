var db = require("../models");

function index(req, res) {
  db.Student.find({}, function (err, allStudents) {
    if (err) {
      return console.log(err);
    }
    res.json({
      students: allStudents
    });
  });
}

function create(req, res) {
  console.log('body', req.body);

  var languages = req.body.languages.split(',').map(function(item) {
    return item.trim(); } );
    req.body.languages = languages;

  db.Student.create(req.body, function(err, mentor) {
    if (err) { console.log('error', err); }
    console.log(student);
    res.json(student);
  });
}

function show(req, res) {
  db.Student.findById(req.params.studentId, function(err, foundStudent) {
    if(err) { console.log('studentsController.show error', err); }
    console.log('studentsController.show responding with', foundStudent);
    res.json(foundStudent);
  });
}

function destroy(req, res) {
  dbStudent.findOneandRemove({ _id: req.params.studentId }, function(err, foundStudent) {
    res.json(foundStudent);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Student.findbyId(req.params.studentId, function(err, foundStudent) {
    if (err) { console.log('studentsController.update error', err); }
    foundStudent.name = req.body.name;
    foundStudent.email = req.body.email;
    foundStudent.website = req.body.website;
    foundStudent.number = req.body.number;
    foundStudent.save(function(err, savedStudent) {
      if (err) { console.log('saving altered student failed'); }
      res.json(savedStudent);
    });
  });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
