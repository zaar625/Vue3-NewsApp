<template>
<div>
  <p v-for="item in askItem" >
    <a :href="item.url">{{item.title}}</a>
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