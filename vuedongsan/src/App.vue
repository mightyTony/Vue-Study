<template>

  <transition name="fade"> 
    <Modal @closeModal="모달창열렸니=false"
    :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니"/>
  </transition>
  

  <div class="menu">
    <a v-for="a in 메뉴들" :key="a">{{ a }}</a>
  </div>

  <Discount ref="Discount" v-if="showDiscount == true"/>

  <button @click="priceSort">가격순정렬</button>
  <button @click="reverseSort">가격역정렬</button>
  <button @click="sortBack">되돌리기</button>
  <button @click="alphabetSort">가나다순</button>

  <CardShow @openModal="모달창열렸니 = true; 누른거 = $event"
  :room="원룸들[i]" v-for="(room,i) in 원룸들" :key="room"/>

</template>


<script>

import data from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';

export default {
  name: 'App',

  // states 데이터 저장소 
  data(){
    return {
      showDiscount : true,
      원룸들오리지널 : [...data],
      오브젝트 : { name : 'kim', age : 20 },
      누른거 : 0,
      원룸들 : data,
      모달창열렸니 : false,
      신고수 : [0,0,0],
      메뉴들 : ['Home','Shop','About'],
      products : ['역삼동원룸','천호동원룸','마포구원룸'],
    }
  },

  // 함수 모음 
  methods : {
    increase(){
      this.신고수 += 1;
    },
    sortBack(){
      this.원룸들 = [...this.원룸들오리지널];
    },
    priceSort(){
      this.원룸들.sort(function(a,b){
        return a.price - b.price;
      })
    },
    reverseSort(){
      this.원룸들.sort(function(a,b){
        return b.price - a.price;
      })
    },
    alphabetSort(){
      this.원룸들.sort(function(a,b){
        // if(a.title<b.title) return -1;
        // else if(a.title==b.title) return 0;
        // else return 1;
        return (a.title<b.title)? -1: (a.title==b.title)? 0 : 1;
      })
    }
  },

  created(){
    // 서버에서 가져올 데이터 받기  
  },
  // mount 후 훅 걸기
  mounted(){
    let interval = setInterval(()=>{
      this.$refs.Discount.percent--
      if(this.$refs.Discount.percent ==0){
        clearInterval(interval);
      }
    },1000);

  },
  // 컴포넌트 모음 
  components: {
    Discount : Discount,
    Modal : Modal,
    CardShow : Card,
  }
}
</script>

<style>
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from{
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}

.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color: white;
  padding: 10px;
}

.room-img{
  widows: 100%;
  margin-top: 40px;
}
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
</style>
