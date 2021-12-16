<template>
<div>
  <div v-for="user in users">{{user.title}}</div>
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
    console.log('호출전:', this)
    const vm =this;
    console.log(vm)
    fetchNewsList()
    .then((response)=>{
      console.log('호출후:', this)
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