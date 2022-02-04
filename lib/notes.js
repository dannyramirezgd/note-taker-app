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

function findByID(id, noteArray) {
    const result = noteArray.filter((note) => note.id === id)[0];
    return result;
}
module.exports = {createNewNote, findByID }