<template>
<div>
  <div v-for="user in users" v-bind:key="user">{{user.title}}</div>
</div>
</template>

<script>
import {fetchNewsList} from '../api/index';


export default {
  data(){
    return{
      users: []
    }
  },
  created(){
    const vm =this;
    console.log(vm)
    fetchNewsList()
    .then(response => {
      vm.users = response.data;
      console.log(vm.users)
      
      })
    .catch(function(error){
      console.log(error)
    })
  }
}
</script>

<style>

</style>