var mongoose = require('mongoose');
// Importing User model, using mongoose getter method -- look at model page for more info
var User = mongoose.model('User');

function UsersController(){
	this.index = function(req, res){
		console.log('find function users controller /server/controllers/users.js');
		User.find({}, function(err, users){
			if(err){
				console.log(err);
				res.json({error: true, errors: err})
			} else {
				res.json(users);
			}
		})		
	}
	this.register = function(req, res){
		console.log('fourth: create function users controller /server/controllers/users.js');	
		User.findOne({username: req.body.username}, function(err, user){
            if(err){
                res.status(500).json({message: "Ahhh"})
            }
            else{
                if(user){
                        res.json({user: user, message: "Authenticated"})
                }
                else{
                    var user = new User(req.body)
                    user.save(function(err){
                        if(err){
                            console.log("error")
                            res.status(501).json({message: "AHH"})
                        }
                        else{
                            res.json({user: user, message: "Created"})
                        }
                    })
                }
            }
        })
	}
	this.find = function(req, res){
		console.log("I am in controller of users.js (server) in controllers")
        console.log(req.body.username)
        User.findOne({username: req.body.username}, function(err, user){
            if(err){
                console.log(err)
                res.status(500).json({message: "Ahhh"})
            }
            else{
                if(user){
                        res.json(user)
                }
                else{
                    res.status(401).json({message: "Sorry, you need to register!"})
                }
            }
        }) 
	}
	this.show = function(req, res){
		// retrieve single user
		// this is how we retrieve the users id
		console.log(req.body.id)
	}
}

module.exports = new UsersController();