// use the express router to create endpoints in our server
const express = require('express');
const router = express.Router();

// require in the custom node module previously built
const people_module = require('people_module');

// searching for the character
router.get('/search', async (req,res) =>{
    let searchInput = "ana" // setting default to anakin
    try{
        const searchCharacter = await people_module.search(searchInput) // This is displaying array of characters(objects)
        // console.log(searchCharacter)
        const selectCharacter = await user_input(searchCharacter.results) // displaying names(objects) from the "results" array from API
        res.json({selectCharacter})
    }catch(err){
        res.json({err})
    }    
})

// Need Fetch module


// exporting everything attached to router. 
module.exports = router;
