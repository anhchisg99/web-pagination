import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [
            { id: 1, name: "quan", des: "depnha", price: 1000 },
            { id: 2, name: "ao", des: "depnha", price: 1000 },
            { id: 3, name: "ao thun", des: "depnha1 ", price: 1000 }
        ],
        todos:'',
        todo:''

    },
    getters: {
        perPage(state){
            return state.todos.length/10;
        },
        getItem:(state)=>{
            let begin = (state.todo -1 )*10;
            let end = (state.todo -1 )*10 + 10;
            return state.todos.slice(begin,end)
        }
    },
    actions: {
        getApi({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(response => {
                    commit('GETAPI',response.data)
                })
                .catch(error => console.log(error))
        }
    },
    mutations: {
        GETAPI(state,data){
            state.todos = data
        },
        GETITEM(state,data){
            state.todo =data
        }
    }
})