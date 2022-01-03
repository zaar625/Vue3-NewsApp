import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import ItemView from '../views/ItemView.vue';
import bus from '../utils/bus'
import {store} from '../store/index'
// import createListView from '../views/CreateListView'

Vue.use(VueRouter);
export const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/news'
    },
    {
        //path: url 주소
        path:'/news',
        //url 주소로 갔을 때 표시 될 컴포넌트
        name:'news',
        component:NewsView,
        // component: createListView('NewsView'),
        beforeEnter:(to, from, next) =>{
          bus.$emit('start:spinner');//이벤트 보내기
          setTimeout(()=>{
          store.dispatch('FETCH_LIST',store.name)
          .then(()=>{
          console.log(5)
          console.log('fetched');
          bus.$emit('end:spinner');
          next();
          })
          .catch((error)=>{
            console.log(error)
          });
      }, 3000)
          // console.log('to',to)
          // console.log('from',from)
          // console.log('next',next)
        }
    },
    {
      path:'/ask',
      name:'ask',
      component:AskView,
      // component: createListView('AskView'),
    },
    {
      path:'/jobs',
      name:'jobs',
      component:JobsView
      // component: createListView('jobs'),
    },
    {
      path:'/user/:id',
      component:UserView
    },
    {
      path:'/Item/:id',
      component:ItemView
    }
  ]
})