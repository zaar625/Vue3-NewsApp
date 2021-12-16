import Vue from 'vue';
import Vuex from 'vuex';
import {fetchJobsList, fetchNewsList,fetchAskList} from '../api/index';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news:[],
        jobs:[],
        ask:[]
    },
    getters:{
        fetchedAsk(state){
            return state.ask
        }
    },
    mutations:{
        SET_NEWS(state, news){
            //news= response data
            state.news = news;
        },
        SET_JOBS(state, jobs){
            state.jobs = jobs;
        },
        SET_ASK(state, ask){
            state.ask = ask;
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
        },
        FECH_JOBS(context){
            fetchJobsList()
            .then(response=>{
                context.commit('SET_JOBS', response.data)
            })
            .catch(error=>{
                console.log(error);
            })
        },
        FECH_ASK({commit}){
            fetchAskList()
            .then(({data})=>{
                console.log(data);
                commit('SET_ASK', data)
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }
});