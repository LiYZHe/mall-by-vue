<template>
  <div id="app">
    <router-view/>
    <MainTabbar></MainTabbar>
  </div>
</template>
<script>
    import MainTabbar from './components/MainTabbar'
    export default{
      name: 'App',
      components: {
          MainTabbar
      }
    }
</script>
<style>
@import './assets/css/base.css';
</style>
