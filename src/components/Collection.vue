<template>
  <div class="collection">
    <h1>This is Collection</h1>
    <p>{{$route.query.page}}</p>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" v-for="(todo,idx) in this.$store.getters.perPage" :key="idx">
          <router-link
            tag="a" class="page-link" :to="{ query: { page: todo }}">
            {{todo}}
          </router-link>
        </li>
       
        
      </ul>
    </nav>
    <p v-for="(t,id) in $store.getters.getItem" :key="id">{{t.title}}</p>
  </div>
</template>

<script>
export default {
  name: "Collection",
  data(){
      return{
          arrayTodo:''
      }
  },
  mounted(){
      this.$store.dispatch('getApi');
  },
  watch:{ 
     '$route.query.page': {
        handler: function(page) {
            console.log(page)
            console.log(typeof page)
            this.$store.commit('GETITEM',page)
        },
        deep: true,
        immediate: true
      }
}

};
</script>

<style scoped>
</style>