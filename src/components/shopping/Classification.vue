<template>
  <!-- 商品分类 -->
  <div class="template">
    <div class="header_classf">
      <div class="header_classf_item">
        <span class="item_span">分类</span>
        <p>CLASSIFICATION</p>
      </div>
    </div>
    <div class="content">
      <div class="produce">
        <div class="produce_item_one">
          <div class="produce_item_div">
            <span>新品</span>
            <p>New</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
        <div class="produce_item_two">
          <div class="produce_item_div">
            <span>热卖</span>
            <p>Hot</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
      </div>
      <div class="produce">
        <div class="produce_item_one">
          <div class="produce_item_div">
            <span>手机数码</span>
            <p>DIGITAL</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
        <div class="produce_item_two">
          <div class="produce_item_div">
            <span>家用电器</span>
            <p>ELECTRICAL</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
      </div>
      <div class="produce">
        <div class="produce_item_one">
          <div class="produce_item_div">
            <span>电脑办公</span>
            <p>COMPUTER</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
        <div class="produce_item_two">
          <div class="produce_item_div">
            <span>家具</span>
            <p>FURNITURE</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
      </div>
      <div class="produce">
        <div class="produce_item_one">
          <div class="produce_item_div">
            <span>服装</span>
            <p>CLOTHING</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
        <div class="produce_item_two">
          <div class="produce_item_div">
            <span>个护化妆</span>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
      </div>
      <div class="produce">
        <div class="produce_item_one">
          <div class="produce_item_div">
            <span>户外运动</span>
            <p>SPORT</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
        <div class="produce_item_two">
          <div class="produce_item_div">
            <span>汽车用品</span>
            <p>CAR</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
      </div>
      <div class="produce">
        <div class="produce_item_one">
          <div class="produce_item_div">
            <span>母婴儿童</span>
            <p>MOM/KIDS</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
        <div class="produce_item_two">
          <div class="produce_item_div">
            <span>图书/电子书</span>
            <p>BOOK</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
      </div>
      <div class="produce">
        <div class="produce_item_one">
          <div class="produce_item_div">
            <span>食品粮油</span>
            <p>FOOD</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
        <div class="produce_item_two">
          <div class="produce_item_div">
            <span>礼品鲜花</span>
            <p>FLLOWER</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
      </div>
      <div class="produce">
        <div class="produce_item_one">
          <div class="produce_item_div">
            <span>医药保健</span>
            <p>MEDICAL</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
        <div class="produce_item_two">
          <div class="produce_item_div">
            <span>其他</span>
            <p>OTHER</p>
          </div>
          <img src="../../assets/img/dian.png" alt="" class="produce_item_img">
        </div>
      </div>
      <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @click="clickHandler">
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
      selectedLabelDefault: '分类',
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
      // if you clicked home tab, then print 'Home'
      // if (label == "首页") {
      //   alert("跳转首页");
      //   return;
      // } else if (label == "分类") {
      //   alert("跳转分类");
      //   return;
      // } else if (label == "购物车") {
      //   alert("跳转购物车");
      //   return;
      // } else {
      //   alert("跳转我的");
      //   return;
      // }
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
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus">
@import ('../../assets/css/Common.styl');

.header_classf {
  position: absolute; 
  width: 100%;
  height: 200px;
  background-color: lighten($c_black, 50%);
}

.header_classf_item {
  position: absolute;
  left: 0;

  .item_span {
    _common_font($f_large, lighten($c_orange, 20%));
    position relative;
    left 10px;
    top:15px;
  }

  p {
    position: absolute;
    margin: 28px 0 0 10px;
  }
}

.content {
  position: relative;
  top: 80px;
}

// 产品
.produce {
  position: relative;
  display: flex;
  flex-flow: row wrap; // 从左往右排列 换行显示
  justify-content: space-around; // 定义子元素在X轴上的对齐方式
  // align-items:center;//定义子元素在Y轴上的对齐方式
  width: 100%;
}

// 产品子项目公用样式
_produceCom() {
  position: relative;
  flex: 1;
  border-radius: 10px;
  height: 250px;
  margin: 10px;
}

.produce_item_one {
  _produceCom();
  background-color: lighten($c_yellow, 50%);
}

.produce_item_two {
  _produceCom();
  background-color: lighten($c_blue, 50%);
}

.produce_item_img {
  position: relative;
  width: 140px;
  height: 150px;
  top: 60px;
}

.produce_item_div {
  position: absolute;
  width: 150px;
  left: 0;
  top: 10px;
  left: 10px;
  color: darken(rgb(255, 97, 23), 0%);

  span {
    position: absolute;
    left: 0;
  }

  p {
    position: absolute;
    left: 0;
    top: 20px;
  }
}
</style>