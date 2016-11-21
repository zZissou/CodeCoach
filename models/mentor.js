var mongoose = require("mongoose"),
    bcrypt = require('bcrypt');

var Schema = mongoose.Schema,
    Student = require('./student.js');

var MentorSchema = new Schema({
    name: String,
    email: String,
    passwordDigest: String,
    website: String,
    number: Number,
    areaOfInterest: [String],
    image: String,
    bio: String
    // pending: [Student.schema],
    // accepted: [Student.schema]
});

var defaultImg = "http://www.communiquepr.com/blog/wp-content/uploads/2016/04/iStock_000045459678_Large.jpg";

//pass in a newUser object which will be assigned req.body, then pass req.body into createSecure. THEN you can assign each attribute from newUser objects
MentorSchema.statics.createSecure = function(newUser, callback) {
    // `this` references our user model, since this function will be called from the model itself
    // store it in variable `UserModel` because `this` changes context in nested callbacks
    var password = newUser.password;
    var email = newUser.email;
    var name = newUser.name;
    var website = newUser.website;
    var number = newUser.number;
    var areaOfInterest = newUser.areaOfInterest.split(", ");
    var image = newUser.image;
    var bio = newUser.bio;
    var MentorModel = this;

    // hash password user enters at sign up
    bcrypt.genSalt(function(err, salt) {
        console.log('salt: ', salt); // changes every time
        bcrypt.hash(password, salt, function(err, hash) {
            console.log("In hash function");
            // create the new user (save to db) with hashed password
            MentorModel.create({
                email: email,
                passwordDigest: hash,
                name: name,
                website: website,
                number: number,
                areaOfInterest: areaOfInterest,
                image: image||defaultImg,
                bio: bio

                    // pending: pending,
                    // accepted: accepted
            }, callback);
        });
    });
};

MentorSchema.methods.checkPassword = function(password) {
    // run hashing algorithm (with salt) on password user enters in order to compare with `passwordDigest`
    return bcrypt.compareSync(password, this.passwordDigest);
};

// authenticate user (when user logs in)
MentorSchema.statics.authenticate = function(email, password, callback) {
    // find user by email entered at log in
    // remember `this` refers to the User for methods defined on userSchema.statics
    this.findOne({
        email: email
    }, function(err, foundUser) {
        console.log(foundUser);

        // throw error if can't find user
        if (!foundUser) {
            console.log('No user with email ' + email);
            callback("Error: no user found", null); // better error structures are available, but a string is good enough for now
            // if we found a user, check if password is correct
        } else if (foundUser.checkPassword(password)) {
            callback(null, foundUser);
        } else {
            callback("Error: incorrect password", null);
        }
    });
};

var Mentor = mongoose.model('Mentor', MentorSchema);
module.exports = Mentor;
