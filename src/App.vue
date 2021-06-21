<template>
    <div>
        <LikeHeader>
            <!-- v-slotはtemplateタグのみに使える -->
            <h2>みなさん</h2>
            <!-- v-slot: = # に省略できる -->
            <!-- v-slot:title="好きな名前" -->
            <template #title="slotProps">
                <h1>こんにちは</h1>
                <h2>{{ slotProps }}</h2>
                <h2>{{ slotProps.user.firstName }}</h2>
            </template>
            <h3>初めまして</h3>
            <p>よろしくお願いします</p>

            <template v-slot:number>
                <h2>{{ number }}</h2>
            </template>        
        </LikeHeader>

        <!-- html内ではケバブケースを使う -->
        <!-- 子コンポーネントから$emitで親コンポーネントのカスタムevent(my-click)を発火できるようになる -->
        <LikeNumber :total-number="number" v-on:my-click="incrementNumber"></LikeNumber>
        <!-- :渡す変数名="子コンポーネントに渡す変数" -->
        <LikeNumber :total-number="number"></LikeNumber>

        
        <button @click="currentComponent = 'Home' ">Home</button>
        <button @click="currentComponent = 'About' ">About</button>
        <!-- <Home v-if="currentComponent === 'Home' "></Home>
        <About v-if="currentComponent === 'About' "></About> -->
        <!-- この記述を１行で書くには componentタグを使う -->
        <keep-alive>
             <component :is="currentComponent"></component>
        </keep-alive>
        <div style="padding: 10rem;">
            <h2>イベントのフォーム</h2>
            <EventTitle v-model="eventData.title"></EventTitle>
            <EventTitle :value="eventData.title" @input="eventData.title = $event"></EventTitle>

            <h2>最大人数</h2>
            <label for="maxNumber"></label>
            <input type="number" id="maxNumber" v-model.number="eventData.maxNumber">
            <pre>{{ eventData.maxNumber }}</pre>

            <label for="host">主催者</label>
            <input type="text" id="host" v-model.trim="eventData.host">
            <pre>{{ eventData.host }}</pre>

            <label for="detail">イベントの内容</label>
            <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
            <pre>{{ eventData.detail }}</pre>

            <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
            <label for="isPrivate">非公開</label>
            <p>{{ eventData.isPrivate }}</p>

            <p>参加条件</p>
            <input type="checkbox" id="10" value="10代" v-model="eventData.target">
            <label for="10">10代</label>
            <input type="checkbox" id="20" value="20代" v-model="eventData.target">
            <label for="20">20代</label>
            <input type="checkbox" id="30" value="30代" v-model="eventData.target">
            <label for="30">30代</label>
            <p>{{ eventData.target }}</p>

            <p>参加費</p>
            <input type="radio" id="free" value="無料" v-model="eventData.price">
            <label for="free">無料</label>
            <input type="radio" id="paid" value="有料" v-model="eventData.price">
            <label for="paid">有料</label>

            <p>開催場所</p>
            <select v-model="eventData.location">
                <option v-for="location in locations" :key="location">{{ location }}</option>
            </select>
            <p>{{ eventData.location }}</p>
        </div>
    </div> 
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import EventTitle from './components/EventTitle.vue'

export default {
    data(){
        return {
            number: 14,
            currentComponent: 'Home',
            locations: ["東京", "大阪", "京都", "名古屋", "札幌"],
            eventData: {
                title: "",
                maxNumber: 0,
                host: "",
                detail: "",
                isPrivate: false,
                target: [],
                price: "無料",
                location: "東京",

            }
        };
    },
    components: {
        LikeHeader,
        Home,
        About,
        EventTitle,
    },
    methods: {
        // 引数のvalueは子の$emitの処理が入る
        incrementNumber(value) {
            this.number = value;
        }
    }

}
</script>

<style scoped>
/* scopedをつけることで、そのコンポーネント内のタグにしか適用されない */
</style>

