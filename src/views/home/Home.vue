<!--  -->
<template>
  <div id='home'>
      <Navbar class='homeNav'><div slot='center'>购物车</div></Navbar>
      <HomeRecommend class="content" :recommendList='recommendList'></HomeRecommend>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/Navbar'
import HomeRecommend from '../../components/homeRecommend/HomeRecommend'
export default {
  name:'Home',
  data() {
    return {
      recommendList(){
        return this.$store.state.data
      }
    }
  },
  components:{
    Navbar,
    HomeRecommend
  },
}
</script>

<style scoped>
    .homeNav{
      background-color: pink;
    }
    .content{
      margin-top: 44px;
    }
</style>