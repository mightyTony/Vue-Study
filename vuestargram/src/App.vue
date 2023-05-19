<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step==1" @click="step++">Next</li>
      <li v-if="step==2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <p>{{ 내이름 }} {{ age }} {{ likes }}</p>

  <h4>안녕 {{ $store.state.age }}</h4>
  <button @click="나이변경(10)">나이 버튼</button>

  <!-- 데이터 수정 요청 : $store.commit(함수명) -->

  <!-- <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button> -->

  <!-- Container -->
  <Container :postdata="postdata" :step="step" :image="image" @write="myPost = $event"/>
  <!-- <button @click="more">더보기</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" multiple accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

 <div v-if="step == 0">내용0</div>
 <div v-if="step == 1">내용1</div>
 <div v-if="step == 2">내용2</div>

 <button @click="step = 0">버튼0</button>
 <button @click="step = 1">버튼1</button>
 <button @click="step = 2">버튼2</button>
 <div style="margint-top : 500px;"></div>

 
</template>

<script>
import Container from './components/Container';
import postdata from './assets/postdata.js';
import axios from 'axios';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      postdata : postdata, // 게시물
      plus : 0,
      step : 0,
      image : '', // 이미지 
      myPost : '',// 작성한 글 
      selectedFilter : '', // 선택된 필터,
      카운터 : 0,
    }
  },
  mounted(){
      this.emitter.on('box-clicked', (a)=>{
        this.selectedFilter = a;
      })
  },
  components: {
    Container : Container
  },

  computed : {
    name(){
      return this.$store.state.name
    },
    ...mapState(['name','age','likes']),
    ...mapState({ 내이름 : 'name'}) // 다른 변수 명으로 가져다 쓰고 싶을 때 
  },

  methods : {
    ...mapMutations(['setMore','좋아요','나이변경']),

    publish(){
      var myPost = {
        name: "Tony",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.image,
        likes: 44,
        date: "Jun 24",
        liked: false,
        content: this.myPost,
        filter: this.selectedFilter,
      };
      this.postdata.unshift(myPost);
      this.step = 0;
    }
    ,
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.plus}.json`)
      .then( res => {
        console.log(res.data);
        this.postdata.push(res.data);
        this.plus++;
      })
    },
    upload(e){
      let file = e.target.files
      console.log(file[0]);
      let url = URL.createObjectURL(file[0])
      console.log(url);
      this.image = url;
      this.step++;
    },
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
</style>
