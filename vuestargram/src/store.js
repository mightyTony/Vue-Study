import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state(){
        return {
            name : 'kim',
            age : 20,
            likes : 30,
            try : 0,
            more : {},
        }
    },
    mutations : {
        setMore(state, data){
            state.more = data
        },
        이름변경(state){
            state.name = 'park'
        },
        나이변경(state, data){
            state.age += data;
        },
        좋아요(state){
            if(state.try == 0){
                state.likes ++;
                state.try ++;
            }
            else{
                state.likes -=1;
                state.try -=1;
            }
            
        }
    },
    // ajax 요청 할 때 , 시간이 걸리는 일 
    actions : {
        getData(context){
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
            .then((a)=>{
                console.log(a.data);
                context.commit('setMore', a.data)
            })
        }
    },

})

export default store;