<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>


import ListItem from '../components/ListItem.vue'

export default {
  created(){
    this.$store.dispatch('FETCH_ASK');
  },
  components:{
    ListItem,
  }
}
</script>

