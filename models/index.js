var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/codecoach");

module.exports.Mentor = require("./mentor.js");
module.exports.Student = require("./student.js");
