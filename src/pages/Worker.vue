<template>
<div class="main">
    <!-- <p>指令-{{storageCommand.command}}</p>
    <p>时间戳-{{storageCommand.timestamp}}</p>
    <p>推流地址-{{storageLivePush.service}}</p>
    <p>推流密钥-{{storageLivePush.key}}</p>
    <p>时间戳-{{storageLivePush.timestamp}}</p> -->
</div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { I_CourseVueData,onWorkMessage, storageCommand, storageLivePush} from '@/states'
export default defineComponent({
setup() {

    const bc = new BroadcastChannel('AlienZHOU');
    
    bc.onmessage = (e)=>{
        onWorkMessage(e)
    }

    return {
        storageCommand,
        storageLivePush
    }
},
})
</script>


<style lang="scss" scoped>
.main{
    background-color:black;
    p{
        color: white;
        font-size:32px;
    }
}
    
</style>