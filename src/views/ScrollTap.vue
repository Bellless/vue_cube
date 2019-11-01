<template>
  <div>
    <cube-tab-bar v-model="selectedLabel" show-slider>
      <cube-tab v-for="(item, index) in tabs" :icon="item.icon" :label="item.label" :key="item.label">
      </cube-tab>
    </cube-tab-bar>
    <cube-tab-panels v-model="selectedLabel">
      <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="item.label">
        <ul>
          <li class="tab-panel-li" v-for="(hero, index) in item.heroes">
            {{hero}}
          </li>
        </ul>
      </cube-tab-panel>
    </cube-tab-panels>
    <cube-button @click="showActive">操作列表</cube-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      selectedLabel: "天辉",
      tabs: [
        {
          label: "天辉",
          icon: "cubeic-like",
          heroes: [
            "敌法师",
            "卓尔游侠",
            "主宰",
            "米拉娜",
            "变体精灵",
            "幻影长矛手",
            "复仇之魂",
            "力丸",
            "矮人狙击手",
            "圣堂刺客",
            "露娜",
            "赏金猎人",
            "熊战士"
          ]
        },
        {
          label: "夜魇",
          icon: "cubeic-star",
          heroes: [
            "血魔",
            "影魔",
            "剃刀",
            "剧毒术士",
            "虚空假面",
            "幻影刺客",
            "冥界亚龙",
            "克林克兹",
            "育母蜘蛛",
            "编织者",
            "幽鬼",
            "司夜刺客",
            "米波"
          ]
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    showActive() {
      this.$createActionSheet({
        title: "请选择类型",
        active: 0,
        data: [
          {
            content: "舒适型"
          },
          {
            content: "七座商务"
          },
          {
            content: "豪华型"
          }
        ],
        // 选中回调
        onSelect: (item, index) => {
          this.$createToast({
            txt: `Clicked ${item.content}`,
            type: "correct",
            time: 1000
          }).show();
        },
        // 取消回调
        onCancel: () => {
          this.$createToast({
            txt: `Clicked canceled`,
            type: "warn",
            time: 1000
          }).show();
        }
      }).show();
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
</style>