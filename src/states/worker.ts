import { ref, reactive } from 'vue'
import { RemovableRef, useStorage } from '@vueuse/core'
const bc = new BroadcastChannel('AlienZHOU');

interface IStorageCommand {
    command: string,
    timestamp?: number
}

export const  loginWindowMin = ()=>{
    storageCommand.value = {
        command: 'min',
        timestamp: Date.now()
    }
    bc.postMessage('min')
}

export const  obsWindowClose = ()=>{
    storageCommand.value = {
        command: 'close',
        timestamp: Date.now()
    }
    bc.postMessage('close')
}

export const  gotoOBSmainwindow = ()=>{
    storageCommand.value = {
        command: 'gotoOBS',
        timestamp: Date.now()
    }
    bc.postMessage('gotoOBS')
}




export const storageCommand:RemovableRef<IStorageCommand> = useStorage('storageCommand',{command:'command',timestamp:Date.now()})


