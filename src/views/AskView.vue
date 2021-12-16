<template>
<div>
  <div v-for="item in askItem" >{{item.title}}</div>
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