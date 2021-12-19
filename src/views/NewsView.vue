<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus'

export default {
  components:{
    ListItem,
  },
  created(){
    bus.$emit('start:spinner');//이벤트 보내기
    setTimeout(()=>{
      this.$store.dispatch('FECH_NEWS')
        .then(()=>{
          console.log('fetched');
          bus.$emit('end:spinner')
        })
        .catch((error)=>{
          console.log(error)
        });
    }, 3000)
  }
}
</script>

<style>

</style>