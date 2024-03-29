var express = require('express');
var router = express.Router();
const Nota = require('./models/note.js');
const withAuth = require('../middlewares/auth');

router.post('/',withAuth, async (req, res) => {
    const {title, body} = req.body
    try {
        let note = new  Nota({title:title,body:body,author:req.user._id})
        await note.save()
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json({error:"Problem to create new note"})
    }
})

router.get('/search',withAuth, async (req, res)=>{
    const {query} = req.query
    // try {
        let notes = await Nota
        .find({author: req.user._id })
        .find({$text: {$search: query}})

        res.json(notes)
    // } catch (error) {
    //     res.json({error:error}).status(500)
    // }
})

router.get('/:id',withAuth, async (req, res) => {
    try {
        const {id} = req.params
        let note = await Nota.findById(id)
        if(isOwner(req.user,note)){
            res.json(note)
        }else{
            res.status(403).json({error:"Permission denied"})
        }
    } catch (error) {
        res.status(500).json({error:"Problem to get a note"})
    }
})

router.get('/', withAuth, async (req, res)=>{
    try {
        let notes = await Nota.find({author:req.user._id})
        res.json(notes)
    } catch (error) {
        res.status(500).json({error:error})
    }
})


router.put('/:id', withAuth, async (req, res)=>{
    const {title,body} = req.body
    const {id} = req.params

    try {
        let note = await Nota.findById(id)
        if(isOwner(req.user,note)){
            let note = await Nota.findOneAndUpdate(id,
                {$set:{title:title,body:body}},
                {upsert:true,'new':true})

                res.json(note)
        }else{
            res.status(403).json({error:"Permission denied"})
        }

    } catch (error) {
        res.status(500).json({error:"Problem to update a note"})
    }
})

router.delete('/:id', withAuth, async (req, res)=>{
    const {id} = req.params
    try {
        let note = await Nota.findById(id)
        if(isOwner(req.user,note)){
            await note.delete(id)
            res.status(204).json({message:'OK'})
        }else{
            res.status(403).json({error:"Permission denied"})
        }
    } catch (error) {
        res.status(500).json({error:"Problem to delete a note"})
    }
})

const isOwner = (user,note)=>{
    if(JSON.stringify(user._id)== JSON.stringify(note.author._id)){
        return true
    }else{
        return false
    }
}

module.exports = router