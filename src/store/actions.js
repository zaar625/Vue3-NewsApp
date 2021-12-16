import {fetchJobsList, fetchNewsList,fetchAskList, fetchUserInfo, fetchCommentItem} from '../api/index';

export default{
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
    },
    FETCH_USER({commit},name){
        fetchUserInfo(name)
        .then(({data})=>{
            commit('FETCH_USER', data)
        })
        .catch(error=>{
            console.log(error);
        })
    },
    FETCH_ITEM({commit},id){
        fetchCommentItem(id)
        .then(({data})=>{
            commit('SET_ITEM', data)
        })
        .catch(error=>{
            console.log(error);
        })
    }
}