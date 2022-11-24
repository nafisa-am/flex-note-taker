// Defining dependencies
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, "../db");
outputPath = path.join(OUTPUT_DIR, "db.json");


let notesArray = [];
let savedNotes = [];

// Exporting GET function 
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

// Exporting POST function for notes  
  app.post("/api/notes", function (req, res) {

    notesArray = [];
    notesArray.push(req.body);
    console.log(req.body);

    fs.readFile(outputPath, 'utf-8', (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
         notesArray.push(data[i])
    }
      for (let i = 0; i < notesArray.length; i++) {
        notesArray[i].id = i + 1;
    }
      res.send(notesArray);
      console.log(notesArray);

      fs.writeFile(outputPath, JSON.stringify(notesArray), function (err) {
        if (err) {
          throw err;
        } else {
          console.log("success");
        }

      })
    });
  })
}
