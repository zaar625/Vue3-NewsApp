<template>
<div>
  <ul class="news-list">
    <li v-for="item in askItem" class="post">
      <!-- 포인트 영역 -->
      <div class="posints">
        {{item.points}}
      </div>
      <!-- 기타정보 영역 -->
      <div>
        <p class="news-title">
          <router-link v-bind:to="`item/${item.id}`">
            {{item.title}}
          </router-link>
        </p>
        <small class="link-text">
          {{ item.time_ago }}by 
          <router-link class="link-text" v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>  
        </small>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  computed:{
    ...mapGetters({
      askItem:'fetchedAsk'
    })
  },
  created(){
    this.$store.dispatch('FECH_ASK');
  },
}
</script>

<style scoped>
.news-list{
  margin: 0;
  padding: 0;
}
a{
  color: #344953;
  text-decoration: none;
}
a:hover{
  color: #42b883;
  text-decoration: underline;
}
a .router-link-exact-active{
  text-decoration: underline;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.posints{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title{
margin: 0;
}
.link-text{
  color:#828282
}
</style>