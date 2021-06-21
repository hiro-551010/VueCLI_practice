<template>
<!-- slotタグを使うと、親のコンポーネントのhtmlのタグごと持ってくる -->
<!-- 親のところのタグに何も入ってなかった場合、slotタグに書いたものが勝手に入る -->
<!-- 名前の無いスロットには勝手に、defaultという名前のtemplateが作られる -->
    <div>
        <!-- :好きな名前="渡したい値" slotタグ内に入れたデータを親に渡せる-->
        <slot name="title" :user="user" text="text"></slot>
        <hr>
        <slot></slot>
        <p>いいねの数</p>
        <slot name="number"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                firstName: 'Jack',
                lastName: 'Donald'
            }
        }
    }
};
</script>

<style scoped>

</style>