import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld'
import Route1 from '@/components/Route1'
import Collection from '@/components/Collection'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'Hello',
            component:HelloWorld
        },
        {
            path:'/route1/:id',
            name:'route1',
            component:Route1
        },
        {
            path:'/collection',
            name:'collection',
            component:Collection
        }
]
})