const fs = require('fs');


const fetchAllNotes = () => {
    try{
        let noteString = fs.readFileSync('notes-data.json');  
        return JSON.parse(noteString);
    } catch (error){
        return [];
    } 
      
}

 const saveNotes = notes => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
 }



//Adding Notes into the file system
const addNote = (title, body) => {
    let notes = [];
    var note = {title, body};
    
    notes = fetchAllNotes();

    var filteredNotes = notes.filter( note => title===note.title)

    if(filteredNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    } 
    else{
        console.log("Note already exist");
    }    
}



//Removing Notes into the file system
const removeNote = title => {
    let notes = fetchAllNotes();
    let filteredNotes = notes.filter( note => title!==note.title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}



//Listing all the notes
const listNotes = () => {
    let notesArr = fetchAllNotes(); 
    console.log(`Listing ${notesArr.length} note(s).`);
    notesArr.forEach( note => logNote(note) ); 
}



//Searching for a note
const searchNote = title => {
    let notesArr = fetchAllNotes();
    let filteredNotes = notesArr.filter( note => title===note.title);
    return filteredNotes[0];
}



//Logging a note
const logNote = note =>{
    console.log(' ');
    console.log('------------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    console.log('------------');
    console.log(' ');
}



module.exports = {
    addNote,
    removeNote,
    listNotes,
    searchNote,
    logNote
}