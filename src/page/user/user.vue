<script setup lang="ts">
import { ref } from "vue";
// 引入 pinia
import { useStore } from "../../store/userStore";
// 引入 vueuse
import { useMouse, useDark, useToggle } from "@vueuse/core";
const isDark = useDark({
  selector: "html", //class渲染的标签
  attribute: "theme-mode",
  valueDark: "dark", //暗黑class名字
  valueLight: "", //高亮class名字
});
const toggleDark = useToggle(isDark);

// 接收接口参数
defineProps<{ msg: string }>();
// 获取鼠标坐标
const { x, y } = useMouse();
// 实例化 pinia
const userstore = useStore();
// 获取用户信息
userstore.getUserInfo();
// 实例化数字
const count = ref(0);
</script>

<template>
  <h1 class="text-red">{{ msg }}</h1>
  <div class="p-y-5 flex justify-center">
    <button class="i-carbon-sun dark:i-carbon-moon" @click="toggleDark()" />
  </div>
  <div class="card light:bg-white dark:bg-dark">
    <div class="">
      <button type="button" @click="count++">count is {{ count }}</button>
    </div>
    <p class="light:text-black">当前登录用户名：{{ userstore.username }}</p>
    <p class="light:text-black">当前 x 轴坐标：{{ x }}</p>
    <p class="light:text-black">当前 y 轴坐标：{{ y }}</p>
    <div class="">
      <t-button @click="userstore.updateUser">切换用户</t-button>
    </div>
    <p class="light:text-black">
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
