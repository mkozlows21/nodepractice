//built-ins and 3rd party
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//custom library
const notes = require('./notes.js');
const titleOptions = {
    title: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    body: 'Body text of note',
    demand: true,
    alias: 't'
};

const argv = yargs
        .command('add', 'Add a new note', {title:titleOptions, body:bodyOptions})
        .command('list', 'List all notes')
        .command('read', 'Read a specific note', {title:titleOptions})
        .command('remove', 'Remove a selected note', {title:titleOptions})
        .help()
        .argv;
let command = argv._[0];
//console.log();
//console.log('Yargs', argv);

if(command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Successfully created new note!');
        notes.logNote(note);
    } else {
        console.log('Note with that name already exists!');
    }
} else if(command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => notes.logNote(note));
} else if(command === 'read') {
    let note = notes.getNote(argv.title);
    if(note) {
        notes.logNote(note);
    } else {
        console.log('Note does not exist!');
    }
} else if(command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('command not recognized');
}