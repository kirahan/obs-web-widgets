<template>
<div class="container">
    <Header />
    <div class="main">
            <router-view/>
    </div>
</div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from "./Header.vue"
export default defineComponent({
    components: {
        Header
    },
    setup() {
        
    },
})
</script>


<style lang="scss" scoped>
.container{
    display:flex;
    flex-direction: column;
    overflow: hidden;
    height:100%;
    .main {
        flex-grow: 1;
        router-view {
        width:100%;
        }
    }
}
    
</style>