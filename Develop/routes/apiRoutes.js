// Adding the fs module to help access db.json file
var fs = require("fs");
// Creating variable to hold db.json path
const dbDir = path.resolve(__dirname, "../../db");

// Adding API routes here
module.exports = function (app) {
	// API GET request for the notes in db.json file
	app.get("/api/notes", function (req, res) {
		// Used to red the notes from db.json
		fs.readFile(path.resolve(dbDir, "db.json"), "utf8", function (err, data) {
			// This will populate the notes data from db.json file
			res.json(data);
		});
	});
	// API POST request for the notes in db.json file
	app.post("/api/notes", function (req, res) {
		var notesObject = [];
		// Used to read the notes from db.json
		fs.readFile(path.resolve(dbDir, "db.json"), "utf8", function (err, data) {
			
		});
	});
	// API DELETE request for the notes in db.json file
};
