var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: String,
});
// Remember we can treat mongoose.model() as a getter function or a setter function
// mongoose.model('User') will be used to retrieve user scema
// mongoose.model('User', UserSchema) will be used to set the userSchema to the User key
// we will retrieve this schema in our userController later
mongoose.model('User', UserSchema);
