var express = require('express');
var app = express();
var path = require('path');

app.use("/", express.static(path.join(__dirname + "/public")));
app.set("view engine", "hbs");

//Lets load the mongoose module in our program
var mongoose = require('mongoose');

//Lets connect to our database using the DB server URL.
mongoose.connect('mongodb://localhost/names');

/**
 * Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */
var User = mongoose.model('User', {name: String, roles: Array, age: Number});

/**
 * Lets Use our Models
 * */

//Lets create a new user
var user1 = new User({name: 'Bob the Builder', age: 12, roles: ['construction worker', 'architect', 'llama']});
var user2 = new User({name: 'StrongBad', age: 22, roles: ['email blogger', 'cartoon character', 'llama']});

//Some modifications in user object
user1.name = user1.name.toUpperCase();
user2.name = user2.name.toUpperCase();

//Lets try to print and see it. You will see _id is assigned.
console.log(user1);

//Lets save it
user1.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});
user2.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

//.find() is a mongo method
app.get('/', function (req, res) {
  User.find().then(function(users){
    res.render("home", {users: users});
  });
});


app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), function() {
  console.log("Listening on port 4000");
});
