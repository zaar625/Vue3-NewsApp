<template>
  <div>
    <!-- {{this.$store.state.item}} -->
    <p>{{this.$store.state.item.title}}</p>
    <div>
        {{this.$store.state.item.content}}
    </div>
  </div>
</template>

// <script>
// import axios from 'axios'

export default {

  created(){
    console.log(this.$route)
    console.log(this.$route.params.id);
    const itemId = this.$route.params.id;
    //axios.get(`https://api.hnpwa.com/v0/user/${this.$route.params.id}.json`)
    this.$store.dispatch('FETCH_ITEM', itemId)
  }

}
</script>

<style>

</style>