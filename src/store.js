import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//定义要设置的全局访问的state对象
// ...是超引用,ES6的语法,意思是state里有多少属性值我可以在这里放多少属性值
// import * as getters from './getters'
// * as的意思是 导入这个文件里面的所有内容， 就不用一个个实例来导入了。
const state = { 
  //设置初始属性值
  showFooter: true,
  changableNum: 0,
  token: '11370aaef54be6f211bac159ecdf51d2',
};
////实时监听state值的变化(最新状态)
const getters = { 
  isShow(state) { //承载变化的showFooter的值
    return state.showFooter
  },
  getChangedNum() { //承载变化的changebleNum的值
    return state.changableNum
  }
};
// 定义改变state的初始值的方法
const mutations = {
  show(state) { //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.showFooter = true;
  },
  hide(state) { //同上
    state.showFooter = false;
  },
  newNum(state, sum) { //同上，这里面的参数除了state之外还传了需要增加的值(实参)sum
    state.changableNum += sum;
  }
};
// 异步触发mutations里面的方法
const actions = {
  hideFooter(context) { //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    context.commit('hide');
  },
  showFooter(context) { //同上注释
    context.commit('show');
  },
  getNewNum(context, num) { //同上注释，num为要变化的形参
    context.commit('newNum', num)
  }
};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
export default store;