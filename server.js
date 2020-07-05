// Global variable to access NPM express package
var express = require("express");

// Tells node we are creating an "express" server
var app = express();

// Sets an initial port to use for kistener included at the end of script
var PORT = process.env.PORT || 8080;

// Sets up the express app variable to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("Develop/public"));

/* Lines below point our server to a series of "route" files and "map" out 
how to respond when users visit or request data from different URLs.*/

require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

// Code below is the listener portion that  "starts" our server
app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});
