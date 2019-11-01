<template>
  <div class="common">
    <p>这是全局测试组件</p>
    <p>这是全局测试组件</p>
    <div class="text">
      tetx
    </div>
    <div @click="sendpro">
      <span>哒哒哒哒哒哒</span>
    </div>
    <span class="generic">父组件传递的message为:{{message}}</span>
    <input type="text" v-model="lastName" placeholder="姓">
    <input type="text" v-model="firstName" placeholder="名">
    <h2>拼接：{{fullName}}</h2>
  </div>
</template>

<script>
export default {
  components: {},
  // props只用于在子组件中接收父组件传递的数据
  props: ["message", "textFalther"],
  data() {
    return {
      // 子向父传递的数据
      text: "你好啊！",
      firstName: "",
      lastName: ""
    };
  },
  //组件生命周期函数
  beforeCreate() {
    console.log("beforeCreate");
  },
  //当进入组件之前，执行 beforRouteEnter 路由钩子函数(组件独享守卫)
  beforeRouteEnter(to, from, next) {
    console.log("beforRouteEnter");
    console.log(this); // 结果为undefined，因为在执行beforRouteEnter时候，组件还没有被创建出来；先执行beforRouteEnter，再执行beforeCreate
    next(vm => {
      //参数vm就是当前组件的实例。
      vm.test = "我被改变了";
    });
  },
  // (组件独享守卫)
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  },
  // (组件独享守卫)
  beforeRouteLeave(to, from, next) {
    //离开组件的时候触发
    //什么都不写的时候，不会离开(走下一步)
    next();//直接执行to的路径 如果没有指定to的路径则不执行
  },
  watch: {},
  computed: {
    //fullName为监听对象(data里面的数据变化时,fullName方法会自动执行)
    //计算属性有缓存不用重新编译，watch属性需重新编译，尽量使用computed代替watch,节约性能
    fullName: function() {
      return this.lastName + "·" + this.firstName;
    }
  },
  methods: {
    sendpro() {
      // $emit第一个参数为父组件定义的自定义
      //事件(父组件中用@acprop="方法名",执行方法接收传递的参数)，
      //第二个参数以及以后都是为传递的参数
      this.$emit("acprop", this.text);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
$changeColor = #6A8D20;

.baseFont {
  color: lighten(#6A8D20, 50%);
  font-size: 24px;
}

.common {
  position: relative;
  top: 50%;
  left: 50%;
  width: 100%;
  margin-left: -(@width / 2);
  background-color: red;
}

.text {
  @extend .baseFont;
}
</style>