
var mongoose = require('mongoose');
// Importing User model, using mongoose getter method -- look at model page for more info
var User = mongoose.model('User');
var Poll = mongoose.model('Poll')
var theoptions;
function PollsController(){
	this.createpoll = function(req, res){
        console.log("re.body.userId createpoll", req.body.userId)
        //var poll = new Poll({question: req.body.questionpoll, option1: req.body.optionone, option2: req.body.optiontwo, option3: req.body.optionthree, option4: req.body.optionfour, userId: req.body.userId})
        //console.log(poll)
        console.log(req.body)
        theoptions = [ 
            {option: req.body.Option1}, {option: req.body.Option2},
            {option: req.body.Option3}, {option: req.body.Option4}
        ]

        console.log(theoptions)
        var poll = new Poll({question: req.body.Question, fouroptions: theoptions, username: req.body.userId})
        poll.save(function(err){
            console.log("newpoll", poll)
            if(err){
                console.log("error!")
                res.status(401).json({error: "AHHHHH"})
            }
            else{
                res.json({poll: poll})
            }
        })
    },
    this.findallpolls = function(req, res){
        console.log("findallpolls")
        Poll.find({}, function(err, allpolls){
            if(err){
                console.log(err)
                res.json({error: true, errors: err})
            }
            else{
                console.log("in allpolls!")
                console.log(allpolls)
                res.json(allpolls)
            }
        })
    },

    this.deletepoll = function(req, res){
        console.log("delete the poll")
        console.log(req.body)
        var getdeletedpoll = req.body._id;
        Poll.remove({_id: getdeletedpoll}, function(err, message){
			console.log("sending json back to player factory check browser console")				
            if(err){
                console.log(err)
                res.json({error: true, errors: err})
            }
            else{
                console.log("in delete!")
                res.json({message: "Yay! You deleted it!"})
            }
        })
    }

    this.findthatpoll = function(req, res){
        console.log("find that poll")
        console.log(req.body)
        Poll.findOne({_id: req.body.thatpoll}, function(err, thatpoll){
            if(err){
                res.status(401).json({error: "AHHHHH"})
            }
            else{
                res.json({thatpoll: thatpoll})
            } 
        })
    }

    this.voting = function(req, res){
        console.log("voting from controllers")
        console.log(req.body)
        Poll.findOne({_id: req.body.thatpoll}, function(err, thepoll){
            thepoll.fouroptions[req.body.index].votes += 1;
            thepoll.save(function(err){
            console.log("newpoll", thepoll)
            if(err){
                console.log("error!")
                res.status(401).json({error: "AHHHHH"})
            }
            else{
                res.json({thepoll: thepoll})
            }
        })
        })
    }

    this.searching =function(req,res){
        console.log("I am in controller of poll.js (server) in searching")
        console.log(req.body.thatsearch)
        if(req.body.thatsearch == ""){
            Poll.find({}, function(err, allpolls){
        if(err){
            console.log(err)
            res.json({error: true, errors: err})
        }
        else{
            console.log("in allbikes!")
            console.log(allpolls)
            res.json(allpolls)
        }
    
        })
        }
        else{
            Poll.find({question: req.body.thatsearch}, function(err, thepoll){
            if(err){
                console.log(err)
                res.json({error: true, errors: err})
            }
            else{
                console.log("in thepoll!")
                console.log(thepoll)
                res.json(thepoll)
            }
        
            })
        }
    }
}

module.exports = new PollsController();