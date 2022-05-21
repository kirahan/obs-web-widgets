import { axiso_get } from "@/hooks/axios"
import { RemovableRef, useStorage } from "@vueuse/core"
import { reactive } from "vue"

export const courseLists:I_CourseVueData[] = reactive([])
export const paginationData:IpaginationData = reactive({
    pageSize: 12,
    total:0,
    currentPage:1
})

export const getCourse = (page:number=1)=>{
    axiso_get('/api/v1/course-list',{
       courseType: 1,
       page: page,
       pageSize: paginationData.pageSize
   }).then((res:any)=>{
       console.log('getcourse success',res)
       courseLists.length = 0
       paginationData.total = res.rowCount
       res.dataList.map((course:I_CourseObject)=>{
            courseLists.push({
                courseId:course.courseId,
                courseTitle:course.courseTitle,
                coverUrl: course.coverUrl,
                creatorId: course.creatorId,
                livePush:course.liveInfo.livePush,
                liveStartTime:course.liveInfo.liveStartTime,
                liveState:course.liveInfo.liveState,
                viewCount:course.viewCount
            })
       })
       console.log(courseLists)
   }).catch((err)=>{
       console.log('getcourse error',err)
   })
}

export const  paginationChangePage = (currentPage:number)=>{
    getCourse(currentPage)
}

export const storageLivePush:RemovableRef<IStorageLivePush> = useStorage('livePush',{service:'',key:'',timestamp:Date.now()})

export const setStorageLivePushNone = () =>{
    storageLivePush.value = {
        service:'',key:'',timestamp: Date.now()
    }
}

export const setStorageLivePush = (courseData:I_CourseVueData) => {
   let [service,key] = courseData.livePush.split('?')
   if(!service) return
   key = '?' + key
   storageLivePush.value = {
       service,key,timestamp: Date.now()
   }
}

interface IStorageLivePush {
    service:string,
    key:string,
    timestamp?:number
}

export interface IpaginationData{
    pageSize: number,
    total:number,
    currentPage:number
}


export interface I_CourseAxiosData {
    dataList: I_CourseObject[],
    page: number,
    pageCount: number,
    rowCount:number
}


export interface I_CourseVueData {
    courseId:number,
    courseTitle:string, 
    coverUrl:string, 
    creatorId:number,
    livePush:string,
    liveStartTime:string,
    liveState:number,
    viewCount:number,
}

interface I_LiveInfo {
    courseId:number,
    liveCountdownState: Number,
    liveNoticeBefore:number,
    livePullFlv:string,
    livePullM3u8:string,
    livePullRtmp:string,
    livePullUdp:string,
    livePush:string,
    liveRecordingState:number,
    liveStartTime:string,
    liveState:number
}

interface I_CourseObject {
    courseId:number,
    courseLimits:object,
    courseTitle:string, 
    courseType:number|string|object,
    coverUrl:string, 
    createTime:string,
    creatorId:number,
    creatorName:string,
    examId:number,
    joinCount:number,
    labels:string, 
    liveInfo: I_LiveInfo,
    state:number|string|object,
    viewCount:number
}