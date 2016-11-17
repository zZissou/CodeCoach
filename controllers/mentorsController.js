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
    // FILL ME IN !
}


function create(req, res) {
    // FILL ME IN !
}

function show(req, res) {
    // FILL ME IN !
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
