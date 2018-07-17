const fs = require('fs');

//create the object
let originalNote = {
    title: 'Some title',
    body: 'Some Body'
};

//turn the object into a string
let originalNoteString = JSON.stringify(originalNote);
//write it to a file
fs.writeFileSync('notes.json', originalNoteString);

//read the file
let noteString = fs.readFileSync('notes.json');
//convert back to an object
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);