<script>
export default {
  data() {
    return {
      hoverIndex: null, // 用于跟踪当前悬停的圆形元素的索引
      jobs: [
        '前端开发',
        '产品摄影',
        '三维建模'
      ], // 确保 jobs 有数据
    };
  },
  methods: {
    handleClick(index) {
      this.hoverIndex = index; // 设置当前悬停的索引
    },
    handleMouseup() {
      this.hoverIndex = null; // 清除悬停状态
    },
  },
};
</script>

<template>
  <div id="bg" @mouseup="handleMouseup">
    <div v-for="(job, index) in jobs" :key="index" class="circle"
      :class="{ active: hoverIndex === index, hidden: hoverIndex !== null && hoverIndex !== index }"
      @click="handleClick(index)">
      <span class="job" :class="{ 'move-up': hoverIndex === index }">
        {{ job }}
      </span>

      <span class="subtitle" :class="{ 'move-up': hoverIndex === index }">
        案例
      </span>
    </div>
  </div>
</template>

<style scoped>
#bg {
  background-color: #357558;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 150px;
  position: relative;
  /* 使子元素的绝对定位相对于 #bg */
}

.circle {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #e4c99d;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  /* 添加过渡效果 */
  position: relative;
  /* 默认定位 */
}

.circle.active {
  position: absolute;
  /* 悬停时使用绝对定位 */
  top: 50%;
  /* 居中定位 */
  left: 50%;
  width: 1450px;
  height: 720px;
  margin: 0;
  transform: translate(-50%, -50%);
  /* 居中 */
  border-radius: 0%;
  z-index: 10;
  /* 确保在最上层 */

}

.circle.hidden {
  opacity: 0;
  /* 隐藏其他圆形元素 */
  pointer-events: none;
  /* 防止鼠标事件 */
}

.job {
  text-align: center;
  font-family: mainFont;
  color: #1b563b;
  font-size: 48px;
  transition: 1s ease;
}

.job.move-up {
  transform: translateY(-240px);
  /* 向上移动 100px，可根据需要调整 */
}
.subtitle{
  position: absolute;
  opacity: 0;
  transition: 2s ease;
  font-size: 24px;
  font-family: mainFont;
  color:#1b563b ;
}
.subtitle.move-up{
  opacity: 100;
  position: absolute;
  top: 200px;
  left: 100px;
}
</style>