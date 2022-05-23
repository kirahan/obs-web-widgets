<template>
<div class="course-card">
    <div class="img-section">
        <!-- <el-tag
            v-if="courseData.liveState!=undefined"
            :key="courseData.liveState"
            :type="
            courseData.liveState==0?'danger'
            :courseData.liveState==1?'success'
            :courseData.liveState==3?'warning'
            :undefined
            "
            class="mx-1 course-state"
            effect="dark"
            round
            size="small"
            >
            {{ 
                    courseData.liveState==0?'即将开播'
                    :courseData.liveState==1?'直播中'
                    :courseData.liveState==3?'回放'
                    :'已结束' 
            }}
            </el-tag> -->
        <!-- <el-tag
        :key="courseData.viewCount"
        color="RGBA(36, 48, 99, 0.25)"
        class="mx-1 course-viewcout"
        effect="light"
        round
        size="small"
        >
        <svg class="watch-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"></path></svg>
        {{ 
                courseData.viewCount==0?'999':courseData.viewCount
        }}
        </el-tag> -->
        <el-image class="image" :src="courseData.coverUrl" fit="cover">
        </el-image>
        <!-- <img
          :src="courseData?.coverUrl"
          class="image"
        /> -->

        
    </div>
    <div class="text-section">
        <div class="course-title">{{courseData.courseTitle}}</div>
          <div class="course-time">
            <time class="time-content">直播时间: {{ courseData.liveStartTime}}</time>
          </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { I_CourseVueData } from '@/states'
import { Picture as IconPicture } from '@element-plus/icons-vue'
export default defineComponent({
    props: {
        courseData: Object as PropType<I_CourseVueData>,
    },
    components:{
        IconPicture
    },
    setup() {
        
    },
})
</script>


<style lang="scss" scoped>
.course-card{
    width: 285px;
    background-color:white;
    border-radius: 16px;
    box-shadow: 0px 5px 5px #c8c8c8;
    cursor: pointer;
    margin-bottom: 30px;
    .img-section,.text-section{
        padding: 10px;
    }
    .img-section{
        .image{
            max-height: 150px;
            min-width: 150px;
            height: 150px;
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
        .course-state{
            position: absolute;
            margin-top: 10px;
            margin-left: 10px;
            z-index: 99;
        }
        .course-viewcout{
            z-index: 99;
            position: absolute;
            margin-top: 10px;
            margin-left: 200px;
            color: white;
            font-size:12px;
            .watch-icon{
                width:12px;
            }
            
        }
    }
    .text-section{
        padding-top: 0px;
        text-align:left;
        .course-title{
            font-size: 16px;
            font-weight: bold;
            // padding-bottom: 10px;
            width:100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .course-time{
            padding-top: 5px;
            font-size: 14px;
            color: #91929E;
        }
    }


}

</style>
