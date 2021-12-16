import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList} from '../api/index';


Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        news:[]
    },
    mutations:{
        SET_NEWS(state, news){
            //news= response data
            state.news = news
        }
    },
    actions:{
        FECH_NEWS(context){
            fetchNewsList()
            .then(response=>{
                // console.log(response);
                context.commit('SET_NEWS',response.data);
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }
});