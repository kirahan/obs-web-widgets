<template>
  <div class="header">
    <span class="logo-section"> 
      <img class="logo" src="@/assets/logo.png" alt="">
    </span>
    <span class="action-section"> 
      <img class="logo" @click="gotoLoginPage" src="@/assets/imgs/icon-back.png" alt="">
    </span>
    <span class="title-section">xxx 直播助手</span>
    <span class="user">
        <img src="@/assets/imgs/icon-user.png" alt="" >
        <span>用户:</span>
        <span>{{username}}</span>
    </span>
    <span class="help">
      <div class="help-logout" @click="logout">
        <img src="@/assets/imgs/icon-logout.png" alt="" >
        <span>退出</span>
      </div>
      <img src="@/assets/imgs/icon-help.png" @click="openlink('https:www.baidu.com')" alt="" >
    </span>
    <span class="window-control" >
        <img @click="min" src="@/assets/imgs/icon-small.png" alt="">
        <img @click="toogle" src="@/assets/imgs/icon-fullscreen.png" alt="">
        <img @click="close" src="@/assets/imgs/icon-close.png" alt="">
    </span>
  </div>
</template>

<script lang="ts" >
import { logout, username, gotoLoginPage, openlink } from '@/states'
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup(){

    const min =()=>{
    }

    const close =()=>{
    }


    return {
      min,
      close,
      username,
      logout,
      gotoLoginPage,
      openlink
    }
  }
})
</script>

<style lang="scss" scoped>
 .header{
   background-color:white;
   height: 56px;
   line-height: 56px;
   -webkit-app-region:drag;
   justify-content: space-between;
   display: flex;
   padding: 0 8px 0 14px;
   font-size: 16px;
   .logo-section,.action-section{
     width:50px;
   }
   .title-section{
    //  width:50%;
    flex-grow:1
   }
   .user{
     width:215px;
     @include flex(center,center,row);
     img{
        width: 30px;
        height: 30px;
     }
     span{
       padding-left:10px
     }
   }
   .help{
     width:200px;
     display: flex;
     .help-logout{
       display: flex;
       cursor: pointer;
       -webkit-app-region:no-drag;
       span{
       padding-left:10px;
       padding-right:30px;
      }
     }
     
     img{
        width: 30px;
        height: 30px;
        padding-top: 13px;
        cursor: pointer;
        -webkit-app-region:no-drag;
     }
   }
   .window-control{
     width:80px;
     img{
      width: 18px;
      height: 18px;
      //  margin-top: 6px;
      margin-left: 6px;
      cursor: pointer;
      -webkit-app-region:no-drag;
    }
   }
   .logo{
    height: 30px;
    width: 30px;
    cursor: pointer;
    -webkit-app-region:no-drag;
    padding-top: 13px;
   }
 }

</style>