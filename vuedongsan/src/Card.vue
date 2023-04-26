<template>
  <div>
    <img :src="room.image" class="room-img">
    <h4 @click="send">{{ room.title }}</h4>
    <p>{{ room.price }}원</p>
    
  </div>
</template>

<script>
export default {
    name : 'CardShow',
    props : {
      room : Object,
    },
    methods : {
      send(){
        this.$emit('openModal', this.원룸.id)
      }
      
    }
}
</script>

<style>

</style>