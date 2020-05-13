const cards = new Vue({
    el: '#cards', // id 
    data:{
        appName: 'Star Wars App',
        people:[],
        characterNameInput: '',
        characterUrl:''
    },
    computed:{
        remainingCards: function(){
            if(this.deck && this.deck.cards){
                return this.deck.remaining;
            }else{
                return 0;
            }
        }
    },
    methods:{
        search: async function(){
            // make an http request to our server
            // Passing characternameInput into routes.js
            const response = await axios.post(`http://localhost:8080/api/search`,{
                characterNameInput: this.characterNameInput,
            })
            console.log(response.data.searchCharacter.results)
            this.people = response.data.searchCharacter.results;
        },
        fetch: async function(){
            const response = await axios.post(`http://localhost:8080/api/fetch`)
            console.log(response.data.searchCharacter.results)
            this.people = response.data.searchCharacter.results
        },
        // throwawayCards: async function(){
        //     this.isPlaying=false;

        //     //Make an http request to our server to throwaway and replace cards
        //     // Make sure .post matches with your routes .post
        //     const resposne = await axios.post(`http://localhost:8888/api/throwaway`,{
        //         deck: this.deck,
        //         selectedCards: this.selectedCards
        //     });
        //     console.log('Throwaway')
        //     console.log(response.data)
        //     this.deck = response.data
        //     this.isPlaying=false;
        // },
        // replay: function(){
        //     this.deck = {}
        //     this.selectedCards =[]
        // }
    }
})