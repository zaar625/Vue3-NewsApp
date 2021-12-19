<template>
  <div>
  <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus'

export default {
  created(){
    bus.$emit('start:spinner');//이벤트 보내기
    setTimeout(()=>{
      this.$store.dispatch('FECH_JOBS')
        .then(()=>{
          console.log('fetched');
          bus.$emit('end:spinner')
        })
        .catch((error)=>{
          console.log(error)
        });
    }, 3000)
  },
  components: { ListItem ,
  },
}
</script>

