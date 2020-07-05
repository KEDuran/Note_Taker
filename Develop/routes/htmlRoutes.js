// Adding dependency variable to access the node path module
var path = require("path");

// Adding routes for the index.html and notes.html
// Leveraging sample code from mini-project (activity 15)

// exporting these html routes for use in other files
module.exports = function (app) {
	// HTML GET request to show index.html
	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/assets/index.html"));
	});
	// HTML GET request to show notes.html
	app.get("/notes", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/assets/notes.html"));
	});
};
