const starwars = new Vue({
    el: '#starwars', // id 
    data:{
        appName: 'Star Wars App',
        people:[],
        characterNameInput: '',
        characterURL:'',
   
    },

    methods:{
        search: async function(){
            // make an http request to our server
            // Passing characternameInput into routes.js
            const response = await axios.post(`http://localhost:8080/api/search`,{
                characterNameInput: this.characterNameInput,
            })
            this.people = response.data.searchCharacter.results;
        },
        fetch: async function(){
            const response = await axios.post(`http://localhost:8080/api/fetch`,{
                characterUrl: this.characterUrl,
            })
            this.people = response.data.searchCharacter.results.url

           
        },
   
    }
})