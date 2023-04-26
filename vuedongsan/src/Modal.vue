<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image" alt="">
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{ 원룸들[누른거].content }}</p>
      <input v-model.trim="month">
      <p>{{month}}개월 선택함 :{{ 원룸들[누른거].price * month }}원</p>
      <button @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name : 'Modal-window',
    
    data(){
      return {
        month : 1,
      }
    },

    // 데이터 감시 
    watch : {
      month(a){
        // 사용자가 문자 입력
        if(isNaN(a) == true || a == ''){
          alert('문자입력하지마세요');
          this.month=1;
        }
        // 사용자가 month에 입력한 데이터가 13보다 크면 경고문 띄우기
        if(a >= 13){
          alert('13이상 입력하지 마셈');
          this.month=1;
        }
        
      },
    }
    ,
    props : {
        원룸들 : Array,
        누른거 : Number,
        모달창열렸니 : Boolean,
    },
    methods : {
      closeModal(){
        this.$emit('closeModal')
      }
    }
}
</script>

<style>

</style>