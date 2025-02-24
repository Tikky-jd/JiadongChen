<script>
export default {
  data() {
    return {
      hoverIndex: null, // 用于跟踪当前悬停的圆形元素的索引
      jobs: [
        {
          title: '前端开发',
          path: [
            require('@/assets/pic/web/1.png'), // 使用require加载图片
            require('@/assets/pic/web/1.png'),
            require('@/assets/pic/web/1.png'),
          ]
        },
        {
          title: '产品摄影',
          path: [
            require('@/assets/pic/Photos/1.jpg'),
            require('@/assets/pic/Photos/1.jpg'),
            require('@/assets/pic/Photos/1.jpg'),
          ]
        },
        {
          title: '三维建模',
          path: [
            require('@/assets/pic/Product/final.png'),
            require('@/assets/pic/Product/2.jpg'),
            require('@/assets/pic/Product/3.png'),
          ]
        }
      ],
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
        {{ job.title }}
      </span>

      <div class="subtitle" :class="{ 'move-up': hoverIndex === index }">
        <div id="anli">案例</div>
        <div id="content">
          <!-- 修复图片加载方式 -->
          <img v-for="(imgPath, imgIndex) in job.path" 
               :key="imgIndex" 
               :src="imgPath" 
               :alt="`案例${imgIndex + 1}`"
               class="case-image">
        </div>

      </div>


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
  width: 80%;
  height: 600px;
}
.subtitle.move-up{
  opacity: 100;
  position: absolute;
  top: 160px;
}
.subtitle #content{
  display: flex;
  justify-content: space-around;
  align-items: center;
  
}
#anli{
  margin-bottom: 20px;
}

.case-image {
  width: 200px;
  max-width: 400px;
  transition: transform 0.3s ease;
  border: 2px solid #1b563b;
}

.case-image:hover {
  transform: scale(1.05);
}
</style>