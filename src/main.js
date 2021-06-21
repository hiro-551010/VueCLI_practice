import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
Vue.config.productionTip = false;

Vue.component('LikeNumber', LikeNumber)
// カスタムディレクティブのグローバル登録
// v-border の vは勝手につく
// 下の5つの発火点が使われるが、特にbindとupdateはよく使われるため、省略ができる
Vue.directive('border', function(el, binding) {
  el.style.border = "solid black 2px";
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  el.style.borderStyle = binding.arg;
  if (binding.modifiers.round) {
    el.style.borderRadius = '0.5rem';
  }
  if (binding.modifiers.shadow) {
    el.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.26)';
  }
}
  // bind(el, binding, vnode) {
  //   ディレクティブが初めて対象の要素に紐づいたときに発火
  // },
  // inserted(el, binding, vnode) {
  //   親Nodeに挿入されたときに発火
  // },
  // update(el, binding, vnode, oldvnode) {
  //   コンポーネントが更新される度、子コンポーネントが更新される前に発火
  // },
  // componentUpdated(el, binding, vnode, oldvnode) {
  //   コンポーネントが更新される度、子コンポーネントが更新された後に発火
  // },
  // unbind(el, binding, vnode) {
  //   ディレクティブが紐づいている要素から取り除かれたときに発火
  // },
);


new Vue({
  render: h => h(App),
}).$mount('#app');
