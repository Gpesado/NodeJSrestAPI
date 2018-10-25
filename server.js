var express = require('express'),
    app = express(),
    port = process.env.port || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'); //Create model loading here
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');//Importing route
routes(app); //register the route

app.listen(port);

console.log('todo list restful api server started on ' + port)
