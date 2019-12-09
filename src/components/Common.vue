<template>
  <div class="common">
    <p v-show="false">这是全局测试组件</p>
    <p>这是全局测试组件</p>
    <div class="text">
      tetx
    </div>
    <!-- 像父组件传递about.vue传递参数 -->
    <div>
      <button @click="sendpro">向父组件传递数据</button><br>
      <span class="generic">父组件传递的数据childtwo为:{{message}}</span><br>
      <span class="generic">父组件传递的数据childone为:{{number}}</span><br>
      <!-- <span class="generic">父组件通过router-link传值textchild为:{{textchild}}</span> -->
    </div>
    <input type="text" v-model="lastName" placeholder="姓"><br>
    <input type="text" v-model="firstName" placeholder="名">
    <h2>拼接：{{fullName}}</h2>
    <button @click='changechild'>改变子组件中数据动态传递给父组件</button>
  </div>
</template>

<script>
export default {
  components: {},
  // props只用于在子组件中接收父组件传递的数据
  // data为父组件声明的传递数据的变量名
  props: ['message','number'],
  data() {
    return {
      // 子向父传递的数据
      firstName: "",
      lastName: "",
      // textchild:"",
      childata:'你好 父组件',
    };
  },
  //组件生命周期函数
  beforeCreate() {
    // console.log("beforeCreate");
  },
  //当进入组件之前，执行 beforRouteEnter 路由钩子函数(组件独享守卫)
  beforeRouteEnter(to, from, next) {
    // console.log("beforRouteEnter");
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
  // 计算属性
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
      // alert("aaaa")
      this.$emit("acprop", this.childata);
      eventBus.$emit('eventbusname','我是子向父传递的值')
    },
    changechild(){
      // 将子组件更新的数据绑定到父组件上 使用.sync绑定父组件中的props对象 不用再定义方法接收
      this.$emit('update:number',Math.floor(Math.random(1,2)*100))
    },
    console_log(){
      // 通过router-link传递的参数
      // this.textchild = this.$route.params.textchild;
      // console.log(textchild);
    }
  },
  created() {
    this.console_log();
  },
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