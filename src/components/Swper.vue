<script lang="ts" setup>
import { indexStore } from "../store/indexStore";
const swperConfig = indexStore();
</script>
<template>
  <div class="tdesign-demo-block--swiper">
    <t-swiper :duration="300" :interval="2000" :autoplay="swperConfig.autoplay">
      <t-swiper-item>
        <div class="demo-item">1</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">2</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">3</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">4</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">5</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">6</div>
      </t-swiper-item>
    </t-swiper>
  </div>
  <div>
    <button @click="swperConfig.setAuto">切换</button>
  </div>
</template>
<style scoped>
.demo-item {
  color: #fff;
  height: 500px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}
</style>
