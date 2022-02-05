const router = require('express').Router();
let notes = require('../../db/db.json');
const {createNewNote, deleteNote} = require('../../lib/notes')
const { v4: uuidv4} = require('uuid')
const fs = require('fs')
const path = require('path');
const { del } = require('express/lib/application');

router.get('/notes', (req, res) => {
    let results = notes;  
    if (req) {
        res.json(results)
    } else {
        res.sendStatus(404);
    }
})

router.post('/notes', (req,res) => {
    req.body.id = uuidv4();

    if(!req.body) {
        res.sendStatus(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note)
    }
})

router.delete('/notes/:id', (req, res) => {
    notes = notes.filter(note => note.id !== req.params.id)
    if (!notes) {
        res.sendStatus(400).json({message: `No id found at ${req.params.id}`});
    } else {
        fs.writeFileSync('db/db.json', JSON.stringify(notes))
        res.json(notes);
    }
})

module.exports = router;