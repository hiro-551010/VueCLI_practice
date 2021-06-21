<template>
    <div>
        <p>About</p>
        <input>
    </div>
</template>

<script>
// componentタグで書かれて、再生成されるときに一々destroyされる
// それを防ぐためには、keep-aliveタグを使う
// keep-aliveタグを使った場合、ライフサイクルフックにdeactivatedとactivatedが追加される
export default{
    destroyed() {
        console.log("destroyed");
    },
    deactivated() {
        console.log("deactivated");
    },
    activated() {
        console.log("activated");
    }
}
</script>
