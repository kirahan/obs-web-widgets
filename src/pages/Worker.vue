<template>
<div class="main">
    <p>指令-{{storageCommand.command}}</p>
    <p>时间戳-{{storageCommand.timestamp}}</p>
    <p>推流地址-{{storageLivePush.service}}</p>
    <p>推流密钥-{{storageLivePush.key}}</p>
    <p>时间戳-{{storageLivePush.timestamp}}</p>
</div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { storageCommand, storageLivePush } from '@/states'
export default defineComponent({
setup() {


    const bc = new BroadcastChannel('AlienZHOU');
    
    bc.onmessage = function (e) {
        const data = e.data;
        const text = '[receive] ' + data;
        
        if(data=='min'){
            console.log('[BroadcastChannel] receive message:', text,'command:kiramin');
            // @ts-ignore
            window.obsstudio.kiramin()
        }else if(data=='close'){
            console.log('[BroadcastChannel] receive message:', text,'command:kiraclose');
            // @ts-ignore
            window.obsstudio.kiraclose()
        }else if(data=='gotoOBS'){
            console.log('[BroadcastChannel] receive message:', text,'command:gotoOBS');
            // @ts-ignore
            if(storageLivePush.value.service && storageLivePush.value.key){
                // @ts-ignore
                window.obsstudio.kiraGoToOBS(storageLivePush.value.service,storageLivePush.value.key)
            }else{
                // @ts-ignore
                window.obsstudio.kiraGoToOBS()
            }
        }
    }

    // watch(storageCommand,(oldStorage,newStorage)=>{
    //     console.log('storageCommand changed',oldStorage,newStorage)
    //     if(newStorage.command == 'min'){
    //         // @ts-ignore
    //         window.obsstudio.kiramin()
    //     }else if(newStorage.command == 'close'){
    //         // @ts-ignore
    //         window.obsstudio.kiraclose()
    //     }else if(newStorage.command == 'gotoOBS'){
            
    //         if(storageLivePush.value.service && storageLivePush.value.key){
    //             // @ts-ignore
    //             window.obsstudio.kira('gotoOBS',storageLivePush.value.service,storageLivePush.value.key)
    //         }else{
    //             // @ts-ignore
    //             window.obsstudio.kira('gotoOBS')
    //         }
    //     }else{
    //         return
    //     }

    //     return
    // })

    // watch(storageLivePush,(oldStorage,newStorage)=>{
    //     console.log('storageLivePush changed',oldStorage,newStorage)
    // })

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