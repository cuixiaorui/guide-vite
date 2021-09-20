<script setup>
import "./style.css";
import "./style.scss"
import User from './components/User.vue'
</script>

<template>
  <div>
    app
    <div class="red">我是字体</div>
    <div class="nav">nav for scss</div>
    <User></User>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
