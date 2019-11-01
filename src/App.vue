<template>
  <div id="app">
    <!-- 渲染路由规则中 匹配的路由组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import index from'./components/index.vue'
export default {
  components: {
    // index
  },
  data() {
    return {
     
    };
  },
  mounted() {},
  methods: {
    
  },
  created() {
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
