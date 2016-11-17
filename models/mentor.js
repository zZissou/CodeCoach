var mongoose = require("mongoose");
var Schema = mongoose.Schema,
    Student = require('./student.js');

var MentorSchema = new Schema({
    name: String,
    email: String,
    website: String,
    number: Number,
    areaOfInterest: [String],
    bio: String,
    image: String,
    pending: [Student.schema],
    accepted: [Student.schema]
});

var Mentor = mongoose.model('Mentor', MentorSchema);
module.exports = Mentor;
