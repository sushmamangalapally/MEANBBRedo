var mongoose = require('mongoose');
var PollSchema = new mongoose.Schema({
    question: String,
    fouroptions: [
        { 
            option: String, 
            votes: {
                type: Number,
                default: 0
            }
        }],
    username: {
        type: String
    }
}, { timestamps: {} });
// Remember we can treat mongoose.model() as a getter function or a setter function
// mongoose.model('User') will be used to retrieve user scema
// mongoose.model('User', UserSchema) will be used to set the userSchema to the User key
// we will retrieve this schema in our userController later
mongoose.model('Poll', PollSchema);
