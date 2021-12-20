import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import ItemView from '../views/ItemView.vue';
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