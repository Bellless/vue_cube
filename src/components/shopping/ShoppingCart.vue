<template>
  <!-- 购物车 -->
  <div class="template">
    <div class="header">
      <span>购物车</span>
    </div>
    <!-- 商品内容区 -->
    <div class="template_flex">
      <!-- 第一列 -->
      <div class="itemContainer">
        <div class="item">
          <img class="itemImg" src="../../assets/img/one.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
        <div class="item">
          <img class="itemImg" src="../../assets/img/two.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
        <div class="item">
          <img class="itemImg" src="../../assets/img/three.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
        <div class="item">
          <img class="itemImg" src="../../assets/img/four.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
        <div class="item">
          <img class="itemImg" src="../../assets/img/five.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
      </div>
      <!-- 第二列 -->
      <div class="itemContainer">
        <div class="item">
          <img class="itemImg" src="../../assets/img/five.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
        <div class="item">
          <img class="itemImg" src="../../assets/img/one.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
        <div class="item">
          <img class="itemImg" src="../../assets/img/four.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
        <div class="item">
          <img class="itemImg" src="../../assets/img/three.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
        <div class="item">
          <img class="itemImg" src="../../assets/img/five.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
      </div>
      <!-- 第三列 -->
      <!-- <div class="itemContainer">
        <div class="item">
          <img class="itemImg" src="../../assets/img/five.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
        <div class="item">
          <img class="itemImg" src="../../assets/img/one.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
        <div class="item">
          <img class="itemImg" src="../../assets/img/four.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
        <div class="item">
          <img class="itemImg" src="../../assets/img/three.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
        <div class="item">
          <img class="itemImg" src="../../assets/img/five.jpg" alt="" />
          <div class="userInfo">
            <img class="avatar" src="../../assets/img/dian.png" alt="" />
            <span class="username">牵起你的手护左右</span>
          </div>
        </div>
      </div> -->
    </div>
    <div class="nav">
      <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @click="clickHandler" @change="changeHandler">
      </cube-tab-bar>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      selectedLabelDefault: '购物车',
      tabs: [
        {
          label: "首页",
          icon: "cubeic-like"
        },
        {
          label: "分类",
          icon: "cubeic-like"
        },
        {
          label: "购物车",
          icon: "cubeic-like"
        },
        {
          label: "我的",
          icon: "cubeic-like"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    clickHandler(label) {
      switch (label) {
        case "首页":
          alert("跳转首页");
          break;
        case "分类":
          this.$router.push("/Classification");
          this.$router.push({ name: "classification" });
          break;
        case "购物车":
          // 动态跳转到路由组件中
          this.$router.push("/ShoppingCart");
          this.$router.push({ name: "shoppingCart" });
          break;
        case "我的":
          alert("跳转我的");
          break;
      }
    },
    // .catch((e)=>{
    //     return
    //   })
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import ('../../assets/css/Common.styl');

.template_flex {
  position: relative;
  display: flex;
  // 最外层横着排版
  flex-direction: row;
  margin: 0 auto;
  top:10px;
}

.itemContainer {
  // 子item竖着排版
  flex-direction: column;
}

.item {
  padding 10px;
}

.itemImg {
  width: 100%;
}

.userInfo {
  padding: 5px 10px;
}

.avatar {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.username {
  margin-left: 5px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
.nav{
}
</style>
