<template>  
  <div :class="`${filter} + filter-item`" :style="`background-image : url(${image})`">
    <slot></slot>
    <button @click="fire">버튼</button>
  </div> 
</template>

<script>
export default {
    name : 'filterbox',
    props : {
        image : String,
        filter: String,
    },
    methods : {
      fire(){
        this.emitter.emit('box-clicked', this.filter) // 다른 컴포넌트로 데이터 전송
      }
    }
}
</script>

<style>
    .filter-item {
        width: 100px;
        height: 100px;
        margin: 10px 10px 10px auto;
        padding: 8px;
        display: inline-block;
        color : white;
        background-size: cover;
        background-position : center;
    }
</style>