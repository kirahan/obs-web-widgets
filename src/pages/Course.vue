<template>
    <div class="course-container">
        <div class="course-info-section">
            <div class="page-title">
                <span>{{pageTitle}}</span>
                <el-button @click="startRec">开始录制</el-button>
                <el-button @click="stopRec">停止录制</el-button>
            </div>
            <div class="page-pagination">
                <el-pagination 
                layout="prev, pager, next" 
                @current-change="paginationChangePage"
                :page-size="paginationData.pageSize"
                :total="paginationData.total" />
                <span>页码：</span>
            </div>
            <div class="skip-right">
                <a @click="gotoOBS">{{skipText}}</a>
            </div>
        </div>
        <el-row :gutter="20" class="course-section">
            <el-col :span="6" class="course-card-container"  v-for="course in courseLists" :key="course.courseId">
                    <CourseCard :courseData="course"></CourseCard>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { courseLists, getCourse, paginationData, paginationChangePage } from '@/states'
import { defineComponent, reactive, toRefs } from 'vue'
import CourseCard from '@/components/Course/mycard.vue'
import { useRouter } from 'vue-router'


export default defineComponent({
    components:{
        CourseCard
    },
    setup() {
        const data = reactive({
            pageTitle: '请选择直播课程',
            skipText: '直接推流',
        })
        const $router = useRouter();

        const gotoOBS =()=>{
            $router.push('/mainwindow')
        }
        
        getCourse()

        const startRec = ()=>{
            // window.obsstudio.startRecording()
             console.log('window.obsstudio.startRecording()')
        }
        const stopRec = ()=>{
            console.log('window.obsstudio.stopRecording()')
        }

        return {
            ...toRefs(data),
            courseLists,
            paginationData,
            paginationChangePage,
            gotoOBS,
            startRec,
            stopRec
        }
    },
})
</script>


<style lang="scss" scoped>
.course-container{
    box-sizing: border-box;
    // overflow: hidden;
    .course-info-section{
        text-align: center;
        padding-left: 10%;
        width: 80%;
        @include flex(center,center,row);
        height:80px;
        .page-title{
            flex: 1;
            // display: inline-block;
            span{
                font-size: 16px;
                color: #91929E;
                padding: 9px 124px;
                border: 2px dashed #CED5E0;
                border-radius:50px;
                margin-top: 10px;
            }
            
        }
        .page-pagination{
            span{
                line-height: 36px;
            }
            flex:0 0 auto;
            display: flex;
            flex-direction:row-reverse;
            padding-right: 20px;
            min-width: 20%;
            // display: inline-block;
        }
        .skip-right{
            flex:0 0 auto;
            a{
                color: #3F8CFF;
                cursor: pointer;
            }
        }
    }
    .course-section{
    // padding: 20px 20px!important;
    // margin: 0px 0px!important;
    .course-card-container{
        @include flex(center,course,row)
    }
}
}

</style>

<style lang="scss">
.course-container {
    .el-pagination button:disabled{
        background: transparent;
    }
    .el-pager li {
    background: transparent;
    }
    .el-pagination .btn-next, .el-pagination .btn-prev{
        background: transparent;
    }
}

</style>