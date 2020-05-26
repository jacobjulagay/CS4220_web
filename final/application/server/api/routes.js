// use the express router to create endpoints in our server
const express = require('express');
const router = express.Router();

// require in the custom node module previously built
const people_module = require('people_module');

// searching for the character
router.post('/search', async (req,res) =>{
    const {characterNameInput} = req.body
    try{
        const searchCharacter = await people_module.search(characterNameInput) // This is displaying array of characters(objects)
        console.log(searchCharacter)
        // const selectCharacter = await user_input(searchCharacter.results) // displaying names(objects) from the "results" array from API
        res.json({searchCharacter}) // might change if use .post
    }catch(err){
        res.json({err})
    }    
})

// Need Fetch
router.post('/fetch', async (req,res) =>{
    const {characterUrl} = req.body
    try{
        const fetchCharacter = await people_module.fetch(characterUrl)
        console.log(searchCharacter)
        res.json({fetchCharacter})
    }catch(err){
        res.json({err})
    }
})

// exporting everything attached to router. 
module.exports = router;
