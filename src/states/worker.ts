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

export const onWorkMessage = (e:any) => {
    const data = e.data;
    const text = '[receive] ' + data.data;
    
    if(data.command=='min'){
        console.log('[BroadcastChannel] receive message:', text,'command:kiramin');
        // @ts-ignore
        window.obsstudio.kiramin()
    }else if(data.command=='close'){
        console.log('[BroadcastChannel] receive message:', text,'command:kiraclose');
        // @ts-ignore
        window.obsstudio.kiraclose()
    }else if(data.command=='gotoOBS'){
        console.log('[BroadcastChannel] receive message:', text,'command:gotoOBS');
        const courseData:I_CourseVueData = JSON.parse(data.data);

        // @ts-ignore
        if(Object.getOwnPropertyNames(courseData).length==0){
            // @ts-ignore
            window.obsstudio.kiraGoToOBS()
            
        }else{
            let [service,key] = courseData.livePush.split('live/')
            // 去除过长的标题
            const courseTitle = courseData.courseTitle.length>16 ?courseData.courseTitle.slice(0,16)+"..." : courseData.courseTitle
            const courseDate = courseData.liveStartTime 
            service = service + 'live/' 
            console.log(service,key,courseTitle,courseDate);
            // @ts-ignore
            window.obsstudio.kiraGoToOBS(service,key,courseTitle,courseDate)
        }
    }
}








export const storageCommand:RemovableRef<IStorageCommand> = useStorage('storageCommand',{command:'command',timestamp:Date.now()})


