const express = require('express')
// Dont need to recall the express function bc it will create a 2nd insance.
const router = express.Router() // connects to main server

const deckofcards = require('deckofcards');

//req/res -> request,response

//localhost:8888/api/play
router.get('/play', async(req,res) =>{
    const shuffle = true;
    const n = 5;

    try{
        const deck = await deckofcards.deck(shuffle); //returns shuffled deck of cards
        const drawn = await deckofcards.draw(deck.deck_id, n);
        
        console.log(drawn)
        res.json(drawn)
    }catch(err){
        res.json({err})
    }
});

router.post('/throwaway', async (req, res)=>{
    const {deck, selectCards} = req.body;
    console.log(deck.deck.deck_id)
    console.log(selectCards)
    try{
        const remainingCards = deck.filter(card =>{
            return !selectedCards.includes(card.code);
        })

        const drawn = await deckofcards.draw(deck.deck_id, selectCards.length)
        const finalHand = remainingCards.concat(drawn.cards);

        drawn.cards = finalHand;

        res.json(drawn)
    }catch(err){
        res.json({err})
    }
})


module.exports = router;