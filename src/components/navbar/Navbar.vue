<template>
    <div class='navbar'>
        <div class='left'><slot name='left'></slot></div>
        <div class='center'><slot name='center'></slot></div>
        <div class='right'><slot name='right'></slot></div>
    </div>
</template>

<script>
const data=[
    {url:''},
    {url:''},
    {url:''},
    {url:''},
    {url:''},
    {url:''},
    {url:''},
    {url:''},
    {url:''},
]
export default {
    name:'Navbar',
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
    .navbar {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        line-height: 44px;
        height:44px;
        color:white;
        box-shadow: 0px 1px 1px rgba(100,100,100,0.1);
    }
    .left {
        width: 60px;
        /* background-color: red; */
    }
    .center{
        flex: 1;
        /* background-color: blue; */
        text-align: center;
    }
    .right {
        width: 60px;
                /* background-color: red; */

    }
</style>