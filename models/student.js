var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    name: String,
    email: String,
    website: String,
    number: Number,
    areaOfInterest: [String],
    bio: String,
    image: String,
});

var Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
