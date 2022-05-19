<template>
  <router-view></router-view>
</template>

<script steup lang="ts">
import{useLoading} from '@/hooks/loading'
const { appendLoading, removeLoading } = useLoading()
appendLoading();
        setTimeout(()=>{
            removeLoading()
            
        },3000)
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #E8F1FF;
  height: 100vh;
}
body {
    overflow: hidden;
    margin: 0px;
    padding: 0px;
}
</style>
