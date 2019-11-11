<template>
  <div class="about" v-if="isShow">
    <!-- :message中的message/data为父组件传递的数据 common子组件中使用propes[message/date]接收 动态绑定数据到子组件中 -->
    <!-- :childtwo="one" :childtone="two" -->
    <common @acprop='aceptchild' message="aaa" :number.sync='num'/>
    <button @click='changechild'>改变父组件中数据动态传递给子组件</button>
    <div class="divText">
      <!-- 子向父传递的数据 -->
      <router-link :to="{name:'Common',params:{textchild:'父向子组件路由传值'}}">Common组件</router-link>
    </div>
    <a>子组件传递过来的参数:{{textchild}}</a>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  // 引入父组件中的方法或者变量(子组件注入)
  inject: ["reload", "INFO"],
  // computed属性可以在输出前，对data中的值进行改变(对属性进行监听，
  //属性如果变了执行computed对应的方法)
  computed: {
    // 在外部组件里进行全局执行vuex中actions里面的方法
    // 利用派发全局state.showFooter的值来控制显示和隐藏
    // this.$store.dispatch('hideFooter')
    isShow() {
      // 两种调用store中的数据方式
      //  return this.$store.getters.isShow;
      return this.$store.dispatch("showFooter");
    }
  },
  data() {
    return {
      acptText: "1",
      // childone:'5',
      // childtwo:'10',
      textchild:'',
      num:'',
    };
  },
  methods: {
    aceptchild(val) {
      this.textchild = val;
    },
    console_log() {
      // 接收vuex中的初始化方法或数据
      console.log(this.$store.getters.isShow);
      // 接收父页面传过来的值(1.采用router-link方式2.也可以直接用props方式
      // 父组件列如使用:message="acptText"传递值message,子组件中用props: ["message"]接收
      let name = this.$route.params.name;
      let name_local = localStorage.getItem("param");
      console.log(name);
      console.log(name_local);
      // 打印父组件中的值
      console.log(this.$parent.name);
      // localStorage.clear();
      // alert("清除存储值成功！")
      // this.reload(); // 调用方法
    },
    upprovide() {
      // 这里修改之后 App.vue 也会响应数据的变化
      this.INFO.asideW = "200px";
    },
    changechild(){
      // 将子组件更新的数据绑定到父组件上 使用.sync绑定父组件中的props对象 不用再定义方法接收
      this.num=Math.floor(Math.random(1,2)*100);
    }
  },
  created() {
    // alert("刷新了当前页面");
    this.console_log();
  }
};
</script>

<style lang="stylus" scoped>
.about {
  position: relative;
  padding: 50px;
}

.divText {
  width: 50px;
  height: 50px;
  background-color: transparentifyl;

  .aa {
    font-size: 25px;
    color: green;
    border: none;
  }
}
</style>

