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
            
        },3000)
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
  height: 100vh;
}
body {
    overflow: hidden;
    margin: 0px;
    padding: 0px;
}
</style>
