// Adding fs module to help access db.json file
var fs = require("fs");
// Adding path module to help navigate directories
var path = require("path");
// Creating variable to hold db.json path
const dbDir = path.resolve(__dirname, "../db");
/*Variable to keep track of unique IDs
Starting at 2 because sample db.json already had an entry*/
var idCounter = 2;

// Adding API routes here
module.exports = function (app) {
	// API GET request for the notes in db.json file
	app.get("/api/notes", function (req, res) {
		// Used to read the notes from db.json
		fs.readFile(path.resolve(dbDir, "db.json"), "utf8", function (err, data) {
			// Populates the notes data from db.json file
			res.json(JSON.parse(data));
		});
	});
	// API POST request for the notes in db.json file
	app.post("/api/notes", function (req, res) {
		// declaring an empty notesObject array
		let notesObject = [];

		// Used to read the notes from db.json
		let data = fs.readFileSync(path.resolve(dbDir, "db.json"), "utf8");
		notesObject = JSON.parse(data);

		// representing the new note with ID
		let newNoteObject = {
			id: idCounter,
			title: req.body.title,
			text: req.body.text,
		};
		// Appending new note to the notesObject variable
		notesObject.push(newNoteObject);
		// Used to add the new notes to db.json file
		fs.writeFileSync(
			path.resolve(dbDir, "db.json"),
			JSON.stringify(notesObject),
			function (err) {
				if (err) {
					return console.log(err);
				}
			}
		);
		// returns the new note to the front-end client side
		res.json(newNoteObject);
		idCounter += 1;
	});
	// API DELETE request for the notes in db.json file
	app.delete("/api/notes/:id", function (req, res) {
		// declaring an empty notesObject array
		let notesObject = [];

		// Used to read the notes from db.json
		let data = fs.readFileSync(path.resolve(dbDir, "db.json"), "utf8");
		notesObject = JSON.parse(data);

		// temporary variable to keep track of index of note that needs to be deleted
		let noteIndex = 0;
		// for loop to delete note
		for (var i = 0; i < notesObject.length; i++) {
			if (notesObject[i].id === parseInt(req.params.id)) {
				noteIndex = i;
				break;
			}
		}
		// splice method to target and delete specified note
		notesObject.splice(noteIndex, 1);
		// Used to overwrite db.json file to update notes in file
		fs.writeFileSync(
			path.resolve(dbDir, "db.json"),
			JSON.stringify(notesObject),
			function (err) {
				if (err) {
					return console.log(err);
				}
			}
		);
	});
};
