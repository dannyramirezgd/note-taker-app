const fs = require("fs");
const path = require('path');

function createNewNote (body, notesArr) {
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArr, null, 2)
    )
    return note
}

function deleteNote (id, notesArr) {

    const result = notesArr.filter(element => element.id !== id)

    if(!Array.isArray(result)) {
        result = [result]
    } else {
        newNotesArr = result }
    fs.writeFileSync(        
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(newNotesArr, null, 2))
}
module.exports = {createNewNote, deleteNote}