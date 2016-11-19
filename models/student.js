var mongoose = require("mongoose"),
    bcrypt = require('bcrypt');

var Schema = mongoose.Schema;
  Mentor = require('./mentor.js');

var StudentSchema = new Schema({
    name: String,
    email: String,
    passwordDigest: String,
    website: String,
    number: Number,
    areaOfInterest: [String],
    bio: String,
    image: String,
    // pending [Mentor.schema],
    //accepted: [Mentor.schema]
});

StudentSchema.statics.createSecure = function(newUser, callback) {
  var password = newUser.password;
  var email = newUser.email;
  var name = newUser.name;
  var website = newUser.website;
  var number = newUser.number;
  var areaOfInterest = newUser.number;
  var bio = newUser.bio;
  var image = newUser.bio;
  var StudentModel = this;

  bcrypt.genSalt(function(err, salt) {
    console.log('salt: ', salt);
    bcrypt.hash(password, salt, function(err, hash) {
      console.log("In hash function");
      StudentModel.create({
        email: email,
        passwordDigest: hash,
        name: name,
        website: website,
        number: number,
        areaOfInterest: areaOfInterest,
        bio: bio,
        image: image
        //pending: pending,
        //accepted: accepted
      }, callback);
    });
  });
};

StudentSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.passwordDigest);
};

StudentSchema.statics.authenticate = function (email, password, callback) {
  this.findOne({email: email}, function (err, foundUser) {
    console.log(foundUser);

    if (!foundUser) {
      console.log('No user with email ' + email);
      callback("Error: no user found", null);
    } else if (found.User.checkPassword(password)) {
      callback(null, foundUser);
    } else {
      callback("Error: incorrect password", null);
    }
  });
}

var Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
