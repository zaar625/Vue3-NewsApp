<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/Toolbar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus'

export default {
  components:{
    ToolBar,
    Spinner
  },
  data(){
    return{
      loadingStatus:false,
    }
  },
  methods:{
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    }
  },
  created(){
    bus.$on('start:spinner',() => {
      console.log(this.loadingStatus)
      this.startSpinner()
      console.log(this.loadingStatus)
      });//이벤트 받기
    bus.$on('end:spinner',() => this.endSpinner());
  },
  beforeDestroy(){
    bus.$off('start:spinner',() => this.startSpinner);
    bus.$off('end:spinner',() => this.endSpinner);
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
/* Router Transitionpage */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>