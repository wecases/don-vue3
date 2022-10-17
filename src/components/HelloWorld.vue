<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "../store/userStore";

const userstore = useStore();

defineProps<{ msg: string }>();

userstore.getUserInfo();

const count = ref(0);
</script>

<template>
  <h1 class="text-red">{{ msg }}</h1>
  <div class="flex w100% justify-center">
    <div>123</div>
    <button class="i-carbon-sun dark:i-carbon-moon" />
  </div>
  <div class="card">
    <div class="">
      <button type="button" @click="count++">count is {{ count }}</button>
    </div>
    <p>当前登录用户：{{ userstore.username }}</p>
    <div class="">
      <t-button @click="userstore.updateUser">切换用户</t-button>
    </div>
    <p>
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
