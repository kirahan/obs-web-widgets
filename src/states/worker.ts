import { ref, reactive } from 'vue'
import { RemovableRef, useStorage } from '@vueuse/core'
import { I_CourseVueData } from './course';
const bc = new BroadcastChannel('AlienZHOU');

interface IStorageCommand {
    command: string,
    timestamp?: number
}

export const  loginWindowMin = ()=>{
    console.log('loginWindowMin')
    storageCommand.value = {
        command: 'min',
        timestamp: Date.now()
    }
    bc.postMessage({
        command: 'min',
        data: {}
    })
}

export const  obsWindowClose = ()=>{
    console.log('obsWindowClose')
    storageCommand.value = {
        command: 'close',
        timestamp: Date.now()
    }
    bc.postMessage({
        command: 'close',
        data: {}
    })
}

export const  gotoOBSmainwindow = (courseData?:I_CourseVueData)=>{
    storageCommand.value = {
        command: 'gotoOBS',
        timestamp: Date.now()
    }
    console.log('gotoOBS',courseData)
    bc.postMessage({
        command: 'gotoOBS',
        data: courseData?JSON.stringify(courseData):JSON.stringify({})
    })
    
}








export const storageCommand:RemovableRef<IStorageCommand> = useStorage('storageCommand',{command:'command',timestamp:Date.now()})


