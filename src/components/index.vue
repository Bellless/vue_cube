<template>
  <div class="template">
    <!-- <div id="nav">
      <router-link to="/Home">Home</router-link> |
      <router-link :to="{name:'about',params:{name:name}}">About</router-link>|
      <router-link to="/scrollTap">scroll</router-link>|
    </div> -->
    <div class="header_index">
        <cube-input v-model="search_value"></cube-input>
    </div>
    <!-- 预留坑 渲染需要的路由内容 -->
    <router-view v-if="isRouterAlive" />
    <a @click="clearcook">clear Cook</a><br>
  </div>
</template>

<script>
export default {
  // 父组件提供一个provide方法,子组件或者孙组件 任意组件都能使用inject接收到(父组件提供)
  provide() {
    return {
      // 注册一个组件刷新方法
      reload: this.reload,
      INFO: this // 传递可响应对象
    };
  },
  components: {},
  props: {},
  data() {
    return {
      name: "路由传值",
      isRouterAlive: true,
      search_value: "",
      params:this.$store.state.token,
    };
  },  
  watch: {
    // 监听变化
    search_value(newV) {
      console.log(this.params);
      if (newV.length > 10) {
        newV = newV.slice(0, 10)
        this.$nextTick(() => {
          this.search_value = newV
        })
        alert("输入最多10位")
      }
      this.putAxios('posts/1',{
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
      }).then((data)=>{
        console.log(data);
      }).catch((err)=>{
        console.log(err);
      })
    }
  },
  computed: {},
  methods: {
    upprovide() {
      this.asideW = "500px"; // 修改 属性值得变化，可以传递到 子孙后代的任意组件 同时响应变化
    },
    // 父组件定义刷新方法
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    clearcook(){
      this.$Cook.removeToken();
      alert("清除成功！")
    },
    log() {
      console.log("aaaa");
      // 存储需要的值(键值对的形式)
      localStorage.setItem("param", this.name);
      // Storage 发生变化（增加、更新、删除）时的 触发，
      //同一个页面发生的改变不会触发，只会监听同一域名下其他页面改变 Storage
      window.addEventListener("storage", function(e) {
        console.log("param", e.oldValue);
      })
      // console.log(Cook.getToken());
      // this.$Cook.setToken()
      // console.log(this.$Cook.getToken());
    },
  },
  created() {
    this.log();
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import ('./assets/css/Common.styl');

.header_index {
  position: relative;
  display:flex;
  width: 100%;
  height: 80px;
  background-color: lighten($c_orange, 30%);
  justify-content: center; /* 定义子元素相对父元素在主轴上的对齐方式(水平方向)*/
  align-items: center; /*  定义子元素相对父元素在交叉轴上如何对齐(竖着方向)*/
}
</style>
