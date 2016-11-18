var mongoose = require("mongoose"),
    bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    name: String,
    email: String,
    passwordDigest: String,
    website: String,
    number: Number,
    areaOfInterest: [String],
    bio: String,
    image: String,
});

var Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
