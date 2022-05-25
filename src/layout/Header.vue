<template>
  <div class="header">
    <span class="logo-section">
      <img class="logo" src="@/assets/logo.png" alt="" />
    </span>
    <!-- <span class="action-section"> 
      <img class="logo" @click="gotoLoginPage" src="@/assets/imgs/icon-back.png" alt="">
    </span> -->
    <span class="title-section">视联医疗直播助手</span>
    
    <!-- <span class="help">
      
      <img src="@/assets/imgs/icon-help.png" @click="openlink('https:www.baidu.com')" alt="" >
    </span> -->
    <span class="window-control">
      <img @click="loginWindowMin" src="@/assets/imgs/icon-small.png" alt="" />
      <img class="fullscreen" src="@/assets/imgs/icon-fullscreen.png" alt="" />
      <img @click="obsWindowClose" src="@/assets/imgs/icon-close.png" alt="" />
    </span>
  </div>
</template>

<script lang="ts">
import {
  logout,
  username,
  gotoLoginPage,
  openlink,
  loginToken,
  loginWindowMin,
  obsWindowClose,
userAvatar
} from "@/states";
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {

    return {
      loginWindowMin,
      obsWindowClose,
      username,
      logout,
      loginToken,
      gotoLoginPage,
      openlink,
      userAvatar
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  background-color: white;
  height: 32px;
  line-height: 32px;
  -webkit-app-region: drag;
  justify-content: space-between;
  display: flex;
  padding: 0 8px 0 4px;
  font-size: 16px;
  .logo-section,
  .action-section {
    width: 40px;
  }
  .title-section {
    //  width:50%;
    User-select:none;
    font-weight: bold;
    text-align: left;
    flex-grow: 1;
  }
  .user {
    width: 250px;
    @include flex(center, center, row);
    img {
      padding-left: 20px;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
    .logout {
      @include flex(center, center, row);
      span {
        padding-left: 10px;
      }
    }
  }
  .help {
    width: 200px;
    display: flex;
    .help-logout {
      display: flex;
      cursor: pointer;
      -webkit-app-region: no-drag;
      span {
        padding-left: 10px;
        padding-right: 30px;
      }
    }

    img {
      width: 30px;
      height: 30px;
      padding-top: 13px;
      cursor: pointer;
      -webkit-app-region: no-drag;
    }
  }
  .window-control {
    width: 80px;
    img {
      width: 18px;
      height: 18px;
      //  margin-top: 6px;
      margin-left: 6px;
      cursor: pointer;
      -webkit-app-region: no-drag;
    }
    .fullscreen {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  .logo {
    height: 24px;
    width: 24px;
    cursor: pointer;
    -webkit-app-region: no-drag;
    padding-top: 4px;
  }
}

.user-logout-btn.el-button{
  width:100%;
}
</style>


<!-- <style lang="scss">
.app-body{
.el-popover.el-popper{
  min-width: 50!important;
  width: 100px !important;
}
.user-logout-btn.el-button{
  width:100%;
}
}

</style> -->