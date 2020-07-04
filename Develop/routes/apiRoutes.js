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
			// Populates the notes data from db.json file
			res.json(data);
		});
	});
	// API POST request for the notes in db.json file
	app.post("/api/notes", function (req, res) {
		// declaring an empy notesObject array
		var notesObject = [];
		// Used to read the notes from db.json
		fs.readFile(path.resolve(dbDir, "db.json"), "utf8", function (err, data) {
			if (err) throw err;
			notesObject = JSON.parse(data);
		});
		// Appending new note to the notesObject variable
		notesObject.push(req.body);
		// Used to add the new notes to db.json file
		fs.writeFile(
			path.resolve(dbDir, "db.json"),
			JSON.stringify(notesObject),
			function (err) {
				if (err) {
					return console.log(err);
				}
			}
		);
	});
	// API DELETE request for the notes in db.json file
};
