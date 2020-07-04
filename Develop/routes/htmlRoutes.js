// Adding dependency variable to access the node path module
var path = require("path");

// Adding routes for the index.html and notes.html
// Leveraging sample code from mini-project (activity 15)

// exporting these html routes for use in other files
module.exports = function (app) {
	// HTML GET request for index.html
	app.get("*", function (req, res) {});
	// HTML GET request for notes.html
	app.get("/notes", function (req, res) {});
};
