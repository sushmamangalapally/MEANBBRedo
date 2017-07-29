var path = require('path')
var Users = require('../controllers/users.js')
var Polls = require('../controllers/polls.js')
module.exports = function(app){
    app.post('/register', function(req, res){
        console.log(req.body, "this is the /register route")
        Users.register(req, res)
    })
    app.post('/findinguser', function(req, res){
        console.log(req.body, "this is the /findinguser route")
        Users.find(req, res)
    })
    app.post('/creatingpoll', function(req, res){
        console.log(req.body, "this is the /creatingpoll route")
        Polls.createpoll(req, res)
    })
    app.get('/findallpolls', function(req, res){
        console.log(req.body, "this is the /creatingpoll route")
        Polls.findallpolls(req, res)
    })
    app.post('/deletinggpoll', function(req, res){
        console.log(req.body, "this is the /creatingpoll route")
        Polls.deletepoll(req, res)
    })
    app.post('/gettingthatgpoll', function(req, res){
        console.log(req.body.thatpoll, "this is the /creatingpoll route")
        Polls.findthatpoll(req, res)
    })
    app.post('/voting', function(req, res){
        console.log(req.body.thatpoll, "this is the /voting route")
        console.log(req.body.theoption, "this is the /voting route")
        Polls.voting(req, res)
    })
    app.post('/searchquestion', function(req, res){
        console.log(req.body, "this is the /searchquestion route")
        Polls.searching(req, res)
    })
    app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./../public/dist/index.html"))
    })
}


// // You can use restful or semi restful routes for your application
// // Remember that we're dealing with angular which will take care 
// // of rendering static pages for us so some of these routes might 
// // be unnecessary

// // The edit and new route might not be necessary. You will only need 
// // these routes if the data you are retrieving is different than the 
// // data you retrieve for show, angular will take care of displaying 
// // static pages like new in the front end

// // FUll RESTFUL
// // get "/users" => UsersController index => grab all users
// // get "/users/:id" => UsersController show => grab one user
// // get "/users/:id/edit" => UsersController edit => show edit user page
// // get "/users/new" => UsersController new => show new user page
// // post "/users" => UsersController create => create a user
// // patch/put "/users/:id" => UsersController update => update a user
// // delete "/users/:id" => UsersController destroy => destroy a user

// // SEMI RESTFUL -- look at destroy and update methods
// // get "/users" => UsersController index => grab all users
// // get "/users/:id" => UsersController show => grab one user
// // get "/users/:id/edit" => UsersController edit => show edit user page
// // get "/users/new" => UsersController new => show new user page
// // post "/users" => UsersController create => create a user
// // post "/users/:id/update" => UsersController update => update a user
// // post "/users/:id/destroy" => UsersController destroy => destroy a user
