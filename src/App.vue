<template>
  <router-view></router-view>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import{useLoading} from '@/hooks/loading'
const { appendLoading, removeLoading } = useLoading()
export default defineComponent({
  components: {
  
  },
  setup(props) {
  
    appendLoading();
    setTimeout(()=>{
            removeLoading()
            
        },1000)
    return {
  
    };
  },
});
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #E8F1FF;
  /* height: 100vh; */
  width:1115px;
  height:942px;
}
body {
    overflow: hidden;
    margin: 0px;
    padding: 0px;
}
</style>