<template>
    <div class='recommend'>
        <div class='item' v-for='item in recommendList()'>
            <a href="">
                <img :src="item.picUrl" alt="">
                <div class='title'>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    data() {
        return {
            
        }
    },
    props: {
        recommendList:Function
    },
    created() {
        console.log(this.recommendList())
    }
}
</script>
<style scoped>
    .recommend {
        display: flex;
    }
    .item {
        flex: 1;
        text-align: center;
    }
    a {
        text-decoration: none;
    }
    img {
        width: 50px;
    }
    .title {
        margin-bottom: -15px;
    }
</style>