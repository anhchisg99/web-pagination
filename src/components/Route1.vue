<template>
   <div class="route1">
       <h1>This is route1 {{$route.params.id}}</h1>
   </div>
</template>

<script>
export default {
    name:'Route1',
    watch:{ 
     '$route.params.id': {
        handler: function(id) {
           console.log(id)
        },
        deep: true,
        immediate: true
      }
}
}
</script>

<style scoped>

</style>