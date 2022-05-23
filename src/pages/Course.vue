<template>
    <div class="course-container">
        <div class="course-info-section">
            <div class="page-title">
                <div>{{pageTitle}}</div>
            </div>
            <div class="skip-right">
                <a @click="justGoToOBS">{{skipText}}</a>
            </div>
        </div>
        <el-row :gutter="20" class="course-section">
            <el-col :span="6" class="course-card-container"  v-for="course in courseLists" :key="course.courseId">
                    <CourseCard @click="setLivePUSHandGoToOBS(course)" :courseData="course"></CourseCard>
            </el-col>
        </el-row>
        <div class="page-pagination">
                <el-pagination 
                layout="prev, pager, next" 
                @current-change="paginationChangePage"
                :page-size="paginationData.pageSize"
                :total="paginationData.total" />
        </div>
    </div>
</template>

<script lang="ts">
import { courseLists, getCourse, paginationData, paginationChangePage,gotoOBSmainwindow, I_CourseVueData,setStorageLivePush,setStorageLivePushNone } from '@/states'
import { defineComponent, reactive, toRefs } from 'vue'
import CourseCard from '@/components/Course/mycard.vue'


export default defineComponent({
    components:{
        CourseCard
    },
    setup() {
        const data = reactive({
            pageTitle: '请选择直播课程',
            skipText: '直接推流',
        })

        getCourse()

        const justGoToOBS = ()=>{
            setStorageLivePushNone()
            gotoOBSmainwindow()
        }

        const setLivePUSHandGoToOBS = (courseData:I_CourseVueData) => {
            setStorageLivePush(courseData)
            gotoOBSmainwindow()
        }

        return {
            ...toRefs(data),
            courseLists,
            paginationData,
            paginationChangePage,
            gotoOBSmainwindow,
            justGoToOBS,
            setLivePUSHandGoToOBS
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
        // @include flex(center,center,row);
        height:50px;
        .page-title{
            @include flex(center,center,row);
            div{
                User-select:none;
                font-size: 16px;
                display: flex;
                padding: 10px;
            }
            div::before, div::after{
                content: "";
                width:50px;
                border-bottom: 1px solid #000;
                margin: auto 10px;
            }
            
        }
        .skip-right{
            position: absolute;
            right: 30px;
            top: 67px;
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
    .page-pagination{
            span{
                line-height: 36px;
            }
            @include flex(center, center, row)
            // display: inline-block;
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