
<template>
<!-- template内は一つのタグに集約すること。div等 -->
    <div>
        <p>いいね({{ halfNumber }})</p>
        <button @click="increment">+1</button>
    </div>
</template>

<script>

// numberの値を親コンポーネント(App.vue)からもらってくる
// propsはproperty(プロパティ)の略
export default {
    // props: ['totalNumber'],
    // こんなpropsの書き方もある。バリデーション目的
    props: {
        // 親から受け取る変数名: 型(str,num等)
        // totalNumber: Number
        totalNumber: {
            type: Number,
            // required: true,
            default: 10,
        }
    },
    computed: {
        halfNumber() {
            return this.totalNumber / 2
        }
    },
    methods: {
        increment() {
            // 子から親に値を渡す場合は、$emitを使う。$emit('カスタムイベント名',処理)
            // $emitのカスタムイベント名はケバブケースで
            this.$emit('my-click', this.totalNumber += 1);
        }
    }
}
</script>

<style scoped>

</style>