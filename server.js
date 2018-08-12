const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");
const crypto = require("crypto");
const express = require('express');
const app = express();
const htmlRoutes = require('./app/routing/htmlRoutes')
const apiRoutes = require('./app/routing/apiRoutes')
require('dotenv').config();

// express setup
app.use(express.static(__dirname + "/app/views/static"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var PORT = process.env.PORT || 8080;



// handlebars
var customViewsPath = path.join(__dirname, 'app', 'views');
var exphbs = require("express-handlebars");

app.set('views', customViewsPath); 
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  // Refect our custom views path here
  layoutsDir: customViewsPath + '/layouts' 
}));
app.set('view engine', 'handlebars');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// mysql setup
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// check connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
