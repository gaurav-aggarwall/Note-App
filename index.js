const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');

let args = yargs.argv;
let command = args._[0];


let title = args.title;
let body = args.body;

switch( command ){
    case 'add':
        var noteAdd = notes.addNote(title, body);

        if(noteAdd){
            console.log('Note Added');
            notes.logNote(noteAdd)
        }

        break;

    case 'remove':
        let noteRem = notes.removeNote(title);

        let message = noteRem ? 'Note removed' : 'Note do not exist';
        console.log(message);

        break;

    case 'list':
        notes.listNotes();
        break;
    
    case 'search':
        let noteSearched = notes.searchNote(title);    

        if(noteSearched){
            console.log('Note found');
            notes.logNote(noteSearched)
        }else{
            console.log('Note Not Found');
        }

        break;
          
    default:
        console.log('Invalid Command');    
}

