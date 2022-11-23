const path = require('path');
const fs = require('fs')

const OUTPUT_DIR = path.resolve(__dirname, "../db");
outputPath = path.join(OUTPUT_DIR, "db.json");

let notesArray = [];
let savedNotes = [];

module.exports = function (app) {

  app.get("/api/notes", function (req, res) {

    savedNotes = [];

    fs.readFile(outputPath, 'utf8', (err, data) => {
      if (err) throw err;

      data = JSON.parse(data)

      for (i = 0; i < data.length; i++) {
        savedNotes.push(data[i]);
      }
      console.log(savedNotes)

      res.send(savedNotes);
    });
  });
}
