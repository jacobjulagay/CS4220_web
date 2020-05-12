const cards = new Vue({
    el: '#cards',
    data:{
        appName: 'Deck of Cards App',
        deck:{},
        selectedCards:[],
        isPlaying: false
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
        playGame: async function(){
            // make an http request to our server
            const response = await axios.get(`http://localhost:8888/api/play`)
            this.deck = response.data;
        },
        throwawayCards: async function(){
            this.isPlaying=false;

            //Make an http request to our server to throwaway and replace cards
            // Make sure .post matches with your routes .post
            const resposne = await axios.post(`http://localhost:8888/api/throwaway`,{
                deck: this.deck,
                selectedCards: this.selectedCards
            });
            console.log('Throwaway')
            console.log(response.data)
            this.deck = response.data
            this.isPlaying=false;
        },
        replay: function(){
            this.deck = {}
            this.selectedCards =[]
        }
    }
})