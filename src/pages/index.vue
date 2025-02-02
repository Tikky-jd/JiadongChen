<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function toResume() {

  router.push('/resume');
}
</script>

<template>
  <header>
    <div id="box">
      <div id="Title">陈家栋</div>
    </div>
    
    <div id="subTitle" @click="toResume">下拉 个人简历</div>
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
#Title {
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
</style>
