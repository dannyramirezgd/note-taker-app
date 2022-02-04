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

function filterByQuery (query, notesArr) {
    let idArray = [];
    let filteredResults = notesArr;
    if (query.id){
        if (typeof query.id === 'string') {
            idArray = [query.id]
        } else {
            idArray = query.id
        }
        idArray.forEach((id) => {
            filteredResults = filteredResults.filter(
                (note) => note.id.indexOf(id) !== -1
            )
        })
    }
}

function findByID(id, noteArray) {
    const result = noteArray.filter((note) => note.id === id)[0];
    return result;
}
module.exports = {createNewNote, filterByQuery, findByID }