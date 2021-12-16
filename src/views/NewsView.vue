<template>
<div>
  <div v-for="user in this.$store.state.news">{{user.title}}</div>
</div>
</template>

<script>
import {fetchNewsList} from '../api/index';


export default {
  // data(){
  //   return{
  //     users: []
  //   }
  // },
  created(){
    console.log('호출전:', this)
    const vm =this;
    console.log(vm)
    this.$store.dispatch('FECH_NEWS');


    // fetchNewsList()
    // .then((response)=>{
    //   console.log('호출후:', this)
    //   vm.users = response.data;
    //   console.log(vm.users)
      
    //   })
    // .catch(function(error){
    //   console.log(error)
    // })
  }
}
</script>

<style>

</style>