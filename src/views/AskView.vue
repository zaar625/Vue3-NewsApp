<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>


import ListItem from '../components/ListItem.vue'
// import bus from '../utils/bus'
import ListMixin from '../mixins/ListMixin'

export default {
  // created(){
  //   bus.$emit('start:spinner');//이벤트 보내기
  //   setTimeout(()=>{
  //     this.$store.dispatch('FETCH_ASK')
  //       .then(()=>{
  //         console.log('fetched');
  //         bus.$emit('end:spinner')
  //       })
  //       .catch((error)=>{
  //         console.log(error)
  //       });
  //   }, 3000)
  // },
  components:{
    ListItem,
  },
  mixins:[ListMixin]
}
</script>

