<template>
  <div class="course-container">
    <div class="course-info-section">
        <div class="skip-left">
        <a @click="gotoOBSmainwindow()">{{ skipText }}</a>
      </div>
      <div class="page-title">
        <div>{{ pageTitle }}</div>
      </div>
      
      <div v-if="loginToken" class="userinfo-right">
        <div class="username">欢迎你，{{ username }}</div>
        <el-popover trigger="click" class="user-popconfirm">
          <el-button size="small" class="user-logout-btn" text @click="logout">退出登录</el-button>
          <template #reference>
              <el-avatar v-if="userAvatar == ''" :size="40" :src="defaultAvatar" />
              <el-avatar :size="40" :src="userAvatar" />
          </template>
        </el-popover>
      </div>
      
    </div>
    <el-row :gutter="20" class="course-section">
      <el-col
        :span="6"
        class="course-card-container"
        v-for="course in courseLists"
        :key="course.courseId"
      >
        <CourseCard
          @click="gotoOBSmainwindow(course)"
          :courseData="course"
        ></CourseCard>
      </el-col>
    </el-row>
    <div class="page-pagination">
      <el-pagination
        layout="prev, pager, next"
        @current-change="paginationChangePage"
        :page-size="paginationData.pageSize"
        :total="paginationData.total"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  courseLists,
  getCourse,
  paginationData,
  paginationChangePage,
  gotoOBSmainwindow,
  logout,
  username,
  loginToken,
  userAvatar,
  getProfile,
} from "@/states";
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import CourseCard from "@/components/Course/mycard.vue";
import defaultAvatar from '@/assets/imgs/icon-user.png'
export default defineComponent({
  components: {
    CourseCard,
  },
  setup() {
    const data = reactive({
      pageTitle: "请选择直播课程",
      skipText: "直接推流",
    });


    onMounted(()=>{
      getProfile()
      getCourse();
    })
    

    return {
      ...toRefs(data),
      courseLists,
      paginationData,
      paginationChangePage,
      gotoOBSmainwindow,
      logout,
      defaultAvatar,
  username,
  loginToken,
  userAvatar,
    };
  },
});
</script>

<style lang="scss" scoped>
.course-container {
  box-sizing: border-box;
  @include flex(space-evenly, center, column);
  height: 100%;
  // overflow: hidden;
  .course-info-section {
    text-align: center;
    display: flex;
    width: 90%;
    // @include flex(center,center,row);
    height: 50px;
    padding: 10px 0px;
    .skip-left {
        width:100px;
        line-height:50px;
        a {
            color: #3f8cff;
            cursor: pointer;
            font-family: serif;
        }
    }
    .page-title {
        flex: 1;
      @include flex(center, center, row);
      div {
        user-select: none;
        font-size: 16px;
        display: flex;
        padding: 10px;
      }
      div::before,
      div::after {
        content: "";
        width: 50px;
        border-bottom: 1px solid #000;
        margin: auto 10px;
      }
    }
    .userinfo-right{
        width:200px;
        line-height: 50px;
        @include flex(space-around,center,row);
        .username{
            // line-height: 50px;
            padding-right: 10px;
        }
    }
    
  }
  .course-section {
    // padding: 20px 20px!important;
    // margin: 0px 0px!important;
    width: 100%;
    flex-grow: 1;
    @include flex(flex-start, flex-start, row);
    align-content: flex-start;
    .course-card-container {
      @include flex(center, course, row);
    }
  }
  .page-pagination {
    height: 50px;
    span {
      line-height: 36px;
    }
    @include flex(center, center, row) // display: inline-block;
;
  }
}
</style>

<style lang="scss">
.course-container {
  .el-pagination button:disabled {
    background: transparent;
  }
  .el-pager li {
    background: transparent;
  }
  .el-pagination .btn-next,
  .el-pagination .btn-prev {
    background: transparent;
  }
  .el-avatar{
      cursor: pointer;
  }
}

.user-logout-btn.el-button{
  width:100%;
}
</style>