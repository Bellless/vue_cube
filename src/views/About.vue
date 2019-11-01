<template>
  <div class="about" v-if="isShow">
    <common @acprop="acprop" :message="acptText" />
    <div @click="log" class="divText">
      <a class="aa">
        conslog
      </a>
      <router-link to="/Car">Car<br></router-link>
      <router-link to="/Classification">Classification</router-link>
    </div>
    <router-view />
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
      acptText: ""
    };
  },
  methods: {
    acprop(val) {
      this.acptText = val;
      console.log(
        "子向父传递的数据时定义的接收方法应在父组件中@声明接收，接收的数据为" +
          this.acptText
      );
    },
    log() {
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
      this.reload(); // 调用方法
    },
    upprovide() {
      // 这里修改之后 App.vue 也会响应数据的变化
      this.INFO.asideW = "200px";
    },
  },
  created() {
    // alert("刷新了当前页面");
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

