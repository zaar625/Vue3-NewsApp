<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
         <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
          {{fetchedItem.user}}
          </router-link>
          <div class="time">
            {{fetchedItem.time_ago}}
          </div>
        </div>
      </div>
      <h2>{{fetchedItem.title}}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content">
        {{fetchedItem.content}}
      </div>
    </section>
    <!-- {{this.$store.state.item}} -->
    
    <!-- <div>
        {{fetchedItem.content}}
    </div> -->
  </div>
</template>

// <script>
// import axios from 'axios'
import {mapGetters} from 'vuex' 

export default {

  computed:{
    ...mapGetters(['fetchedItem'])
  },
  created(){
    console.log(this.$route)
    console.log(this.$route.params.id);
    const itemId = this.$route.params.id;
    //axios.get(`https://api.hnpwa.com/v0/user/${this.$route.params.id}.json`)
    this.$store.dispatch('FETCH_ITEM', itemId)
  }

}
</script>

<style scoped>
.user-container{
  display: flex;
  align-content: center;
  padding: 0.5rem;
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size: 0.7rem;
}
</style>