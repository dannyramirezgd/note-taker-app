const router = require('express').Router();
const notes = require('../../db/db.json');
const {createNewNote, deleteNote} = require('../../lib/notes')
const { v4: uuidv4} = require('uuid')

router.get('/notes', (req, res) => {
    let results = notes; 
    console.log(results);   
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
    const found = notes.some(element => element.id === req.params.id);

    if (!found) {
        res.sendStatus(400).json({message: `No id found at ${req.params.id}`});
    } else {
        res.json(deleteNote(req.params.id, notes));
    }
    // deleteNote(req.params.id, notes)
    // res.json('Item deleted')
    // if (result !== -1) {
    //     result.shift()
    // }
    // const index = notesArr.findIndex(function(note){
    //     return note.id === req.params.id
    // })
    //if(index !== -1){notesArr.splice(index, 1);
        
    //}
})

module.exports = router;