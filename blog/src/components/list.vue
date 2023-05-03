<template>
  <div v-for="(글,i) in 블로그글" :key="글">
    <router-link to="/detail"><h5>{{ 블로그글[i].title }}</h5></router-link>
    <p>{{ 블로그글[i].date }}</p>
  </div>
</template>

<script>
export default{
  name : 'list',
  props : {
    블로그글 : Array,
  }
}
</script>

<style>

</style>