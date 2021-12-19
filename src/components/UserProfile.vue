<template>
   <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <slot name="username">
            <!-- 상위컴포넌트에서 정의할 영역 -->
          </slot>
          <!-- <div>username: {{info.id}}</div> -->
          <!-- <router-link :to="`/user/${userInfo.user}`">
          {{userInfo.id}}
          </router-link> -->
          <div class="time">
            <!-- time: {{info.created}} -->
            <slot name="time"></slot>
          </div>
          <slot name="karma"></slot>
        </div>
    </div>
</template>

<script>


export default {
  props:{
    info:Object
  }
//   computed:{
//     userInfo(){
//       return this.$store.state.user;
//     }
//   },
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