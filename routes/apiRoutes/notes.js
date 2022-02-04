const router = require('express').Router();
const notes = require('../../db/db.json');
const {createNewNote, filterByQuery, findByID} = require('../../lib/notes')
const { v4: uuidv4} = require('uuid')

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

router.delete('/notes/id', (req, res) => {
    if(req){
        res.json('connection established')
    }
})

module.exports = router;