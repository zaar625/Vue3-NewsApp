import bus from '../utils/bus'

export default{
    //재사용할 컴포넌트 옵션
    created(){
        bus.$emit('start:spinner');//이벤트 보내기
        setTimeout(()=>{
        this.$store.dispatch('FETCH_LIST',this.$route.name)
        .then(()=>{
        console.log(5)
        console.log('fetched');
        bus.$emit('end:spinner')
        })
        .catch((error)=>{
          console.log(error)
        });
    }, 3000)
    }
}