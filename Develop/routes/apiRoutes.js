// Adding the fs module to help access db.json file
var fs = require("fs");
// Creating variable to hold db.json path
const dbDir = path.resolve(__dirname, "../../db");

// Adding API routes here
module.exports = function (app) {
	// API GET request for the notes in db.json file
	app.get("/api/notes", function (req, res) {
		// Used to pull the notes data from db.json
		fs.readFile(path.resolve(dbDir, "db.json"), "utf8", function (err, data) {
			// This will populate the notes data from db.json file
			res.json(data);
		});
	});
	// API POST request for the notes in db.json file
	app.post("/api/notes", function (req, res) {});
	// API DELETE request for the notes in db.json file
};
