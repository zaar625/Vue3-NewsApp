<template>
<div>
  <div v-for="user in this.$store.state.news">{{user.title}}</div>
</div>
</template>

<script>



export default {
  created(){
    this.$store.dispatch('FECH_NEWS');
  }
}
</script>

<style>

</style>