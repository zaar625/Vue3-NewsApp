<template>
<div>
  <p v-for="item in askItem" >
    <!-- <a :href="item.url">{{item.title}}</a> -->
    <router-link v-bind:to="`item/${item.id}`">
      {{item.title}}  
    </router-link>
    <small>{{item.time_ago}} by {{item.user}}</small>
  </p>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';


export default {
  computed:{
  ...mapGetters({
    askItem:'fetchedAsk'
  })
  
  //#2
  // ...mapState({
  //   fetchedAsk:state=>state.ask
  // })
  
  //#1  
  //  ask(){
  //    return this.$store.state.ask;
  //  }
  },
  created(){
    this.$store.dispatch('FECH_ASK');
  },
}
</script>

<style>

</style>