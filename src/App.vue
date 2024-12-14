<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue';

export default {
  name: 'App',
  components: {
    Dashboard, // Đăng ký component Dashboard
  },
};
</script>

<style>
/* Style tổng quát cho ứng dụng */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left; /* Chỉnh lại text-align để phù hợp với giao diện */
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f9f9f9; /* Đặt màu nền chung */
}
</style>
