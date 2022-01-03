import {fetchJobsList, fetchNewsList,fetchAskList, fetchUserInfo, fetchCommentItem,fetchList} from '../api/index';

export default{
    FECH_NEWS(context){
        return fetchNewsList()
        .then(response=>{
            // console.log(response);
            context.commit('SET_NEWS',response.data);
            return response;
        })
        .catch(error=>{
            console.log(error);
        })
    },
    FECH_JOBS(context){
        return fetchJobsList()
        .then(response=>{
            context.commit('SET_JOBS', response.data)
        })
        .catch(error=>{
            console.log(error);
        })
    },
    FETCH_ASK(context){
        return fetchAskList()
        .then(response=>{
            context.commit('SET_ASK', response.data)
        })
        .catch(error=>{
            console.log(error);
        })
    },
    FETCH_USER({commit},name){
        return fetchUserInfo(name)
        .then(({data})=>{
            commit('FETCH_USER', data)
        })
        .catch(error=>{
            console.log(error);
        })
    },
    FETCH_ITEM({commit},id){
        return fetchCommentItem(id)
        .then(({data})=>{
            commit('SET_ITEM', data)
        })
        .catch(error=>{
            console.log(error);
        })
    },
    FETCH_LIST({commit}, pageName){
        return fetchList(pageName)
            .then(response =>{
                console.log(4);
                commit('SET_LIST', response.data);
                return response
            })
            .catch(error => console.log(error));
    }
}