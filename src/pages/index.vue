<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function toHome() {

  router.push('/home');
}
</script>

<template>
  <header>
    <div id="box">
      <div id="Title">
        <span id="name">陈家栋</span>
        <div class="EmptyBox"></div> 
        <span class="txt">WELCOME TO MY WEBSITE!</span>
      </div>
    </div>
    
    <div id="subTitle" @click="toHome()">Click Here </div>
  </header>
</template>

<style scoped>
header {
  margin: 0 auto;
  background: #357558;
  width: 100%;
  height: 720px;
}
#box {
  height: 100%;
  height: 680px; /* 这里有重复的 height，应该删除一个 */
  display: flex;
  justify-content: center;
  align-items: center;
}
#Title #name{
  font-size: 100px;
  color: #e4c99d;
  font-family: mainFont;
}
#subTitle {
  font-size: 18px;
  color: #7e9a7c;
}
#subTitle:hover {
  cursor: pointer;
}
.txt{
  font-size: 20px;
  color: #e4c99d;
  font-family: mainFont;
}
.EmptyBox{
  height: 20px;
  width: 100%;
}
</style>
