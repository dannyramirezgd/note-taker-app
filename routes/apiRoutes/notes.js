const router = require('express').Router();
const notes = require('../../db/db');
const createNewNote = require('../../lib/notes')

router.get('/db', (req, res) => {
    let results = notes;    
    if (req) {
        res.json(results)
    } else {
        res.sendStatus(404);
    }
})

router.post('/db', (req,res) => {
    req.body.id = notes.length.toString();

    if(!req.body) {
        res.sendStatus(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note)
    }
})

module.exports = router;