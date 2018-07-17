const fs = require('fs');

//helper function to get notes from JSON file
const fetchNotes = () => {
    let notes = [];
    if (fs.existsSync('notes-data.json')) {
        let notesString = fs.readFileSync('notes-data.json', (err) => {
            console.log('Data in file is not formatted correctly');
        });
        notes = JSON.parse(notesString);
    }

    return notes;
};

//Helper function to add notes to JSON file
const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//Helper function to log notes
const logNote = (noteObj) => {
    console.log('-----');
    console.log(`Title: ${noteObj.title}`);
    console.log(`Body: ${noteObj.body}`);
};

//function that takes a note and body and adds it to the note array, calls helpers
const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    let duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

//Get all the notes and display them
const getAll = () =>  notes = fetchNotes();


//get a single note based on the title of the note
const getNote = (title) => {
    //get notes from file
    let notes = fetchNotes();
    //find the note in the array and return it
    return notes.find((note) => note.title === title);
};

const removeNote = (title) => {
    let notes = fetchNotes();
    let foundNote = notes.findIndex((note) => note.title === title);
    //console.log(foundNote);
    if(foundNote >= 0) {
        notes.splice(foundNote, 1);
        saveNotes(notes);
        console.log(`${title} successfully removed`);
    } else {
        console.log('That note does not exist');
    }
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};