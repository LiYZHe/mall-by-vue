<template>
     <div>
         <Tabbar>
            <TabbarItem path='/home'>
                <img slot="item-icon" src="../assets/image/home.jpg" alt="">
                <img slot='item-icon-active' src="../assets/image/current.jpg">
                <div slot='item-text'>首页</div>
            </TabbarItem>
            <TabbarItem path='category'>
                <img slot="item-icon" src="../assets/image/category.jpg" alt="">
                <img slot='item-icon-active' src="../assets/image/current.jpg">
                <div slot='item-text'>分类</div>
            </TabbarItem>
            <TabbarItem path='shopcar'>
                <img slot="item-icon" src="../assets/image/shopcar.jpg" alt="">
                <img slot='item-icon-active' src="../assets/image/current.jpg">
                <div slot='item-text'>购物车</div>
            </TabbarItem>
            <TabbarItem path='mine'>
                <img slot="item-icon" src="../assets/image/mine.jpg" alt="">
                <img slot='item-icon-active' src="../assets/image/current.jpg">
                <div slot='item-text'>我的</div>
            </TabbarItem>
         </Tabbar>
     </div>
</template>

<script>
import Tabbar from './tabbar/tabbar'
import TabbarItem from './tabbar/tabbaritem'
export default {
  name: 'MainTabbar',
  components:{
      TabbarItem,
      Tabbar
  }
}
</script>
<style>

</style>