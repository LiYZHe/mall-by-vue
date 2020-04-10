<template>
        <div class="tabbar-item" @click='itemClick'>
            <div v-if='!isActive'><slot name='item-icon'></slot></div>
            <div v-else><slot name='item-icon-active'></slot></div>
            <slot name='item-text'></slot>
        </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props:{
    path:String
  },
  data(){
    return {
      // isActive:true
    }
  },
  computed:{
    isActive(){
      console.log()
      return this.$route.path.indexOf(this.path)!==-1
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>
<style>
.tabbar-item{
  flex:1;
  text-align: center;
  height:49px;
  font-size: 14px,
}
.tabbar-item img{
    width:20px;
    margin-top: 3px;
    vertical-align: middle;
}
</style>