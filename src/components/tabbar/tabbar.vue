<template>
     <div id="tabbar">
         <slot></slot>
     </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>
<style>
#tabbar{
  display: flex;
  position:fixed;
  background-color: #f6f6f6;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1) ;
}
</style>