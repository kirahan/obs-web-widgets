<template>
  <div class="container">
    <div class="login-left">
      <div class="logo-group">
        <img class="logo" src="@/assets/logo.png" />
        <span>xx直播小助手</span>
      </div>
      <div class="pw-group">
        <p class="title">密码登录</p>
        <div class="input-group">
          <p class="input-title">账号</p>
          <input
            v-model="account"
            class="inputarea"
            placeholder="请输入手机号"
          />
        </div>
        <div class="input-group">
          <p class="input-title">密码</p>
          <input
            v-model="password"
            type="password"
            class="inputarea"
            placeholder="请点击获取验证码并填写"
          />
        </div>
        <div class="auto-login-group">
          <el-checkbox v-model="auto_login" label="下次自动登录" size="large" />
        </div>
      </div>
      <div class="action-group">
        <el-button @click="login" type="primary" class="login-btn">
          登录
          <el-icon><right /></el-icon>
        </el-button>
        <!-- <a target="_blank" href="https:/www.baidu.com">注册账号</a> -->
        <span class="submit-btn" @click="openlink('https://www.baidu.com')">注册账号</span>
        <!-- <a href="" target="about_blank"></a> -->
        <!-- <el-button type="text" @click="openlink">注册账号</el-button> -->
      </div>
    </div>

    <div class="login-right">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { axiso_get, axiso_post } from "@/hooks/axios";
import { Right } from "@element-plus/icons-vue";
import { openMsgbox } from "@/hooks/Message";
import { loginToken, username,openlink } from "@/states";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    Right,
  },
  setup(props) {
    const data = reactive({
      account: "15212341234",
      password: "123456",
      auto_login: false,
    });

    const $router = useRouter();

    const login = () => {
      axiso_get("/api/v1/token", {
        mode: "password",
        username: data.account,
        password: data.password,
      })
        .then((res: any) => {
          // 保存登录信息
          if (data.auto_login) {
            localStorage.setItem("token", res.token);
          }
          loginToken.value = res.token;
          username.value = data.account;
          console.log("login success", res);
          $router.push("/course");
        })
        .catch((err) => {
          console.log("login error", err);
          const info = {
            type: "alert",
            title: "登录失败",
            msg: err.msg,
            yes: "确定",
            cancel: "",
            yesFn: () => {
              console.log("确定");
            },
            cancelFn: () => {
              console.log("取消");
            },
          };
          openMsgbox(info);
        });
    };



    onMounted(() => {});

    return {
      ...toRefs(data),
      login,
      openlink,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 1366px;
  height: 1024px;
  right: 0%;
  .login-left {
    z-index: 9;
    position: absolute;
    @include flex(center, center, column);
    height: 1024px;
    width: 593px;
    background-color: white;
    border-radius: 0px 54px 54px 0px;
    box-shadow: 10px 20px 50px rgba(134, 240, 161, 0.2);
    .logo-group {
      height: 20%;
      width: 400px;
      @include flex(space-evenly, center, row);
      .logo {
        width: 108px;
        height: 108px;
      }
      span {
        font-size: 36px;
        color: #3f8cff;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
    .pw-group {
      height: 40%;
      div {
        padding: 10px 0px;
      }
      .title {
        font-size: 20px;
        color: #3f8cff;
      }
      .title:before {
        position: relative;
        z-index: 1;
        top: 13px;
        left: 55px;
        width: 30px;
        display: inline-block;
        height: 4px;
        background-color: #3f8cff;
        content: "";
      }
      .title:after {
        position: relative;
        z-index: 1;
        top: 13px;
        // left: 50px;
        width: 30px;
        display: inline-block;
        // height: 4px;
        background-color: #3f8cff;
        content: "";
      }
      .input-group {
        text-align: left;
        width: 420px;

        .input-title {
          font-size: 14px;
          color: #7d8592;
          display: block;
          margin-block-start: 1em;
          margin-block-end: 2px;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          padding-left: 5px;
        }
        .inputarea {
          @include obsInput();
        }
      }
      .auto-login-group {
        text-align: left;
      }
    }
    .action-group {
      height: 10%;
      width: 420px;
      @include flex(center, center, column);
      .login-btn {
        min-width: 100%;
      }
      .submit-btn{
          padding-top: 10px;
          color: #3f8cff;
          &:hover{
              color: black;
              cursor: pointer;
          }
      }
    }
  }
  .login-right {
        position: absolute;
        right: 0%;
        width: 876px;
        height: 1024px;
        padding-left: -30px;
        background-color: rgb(118, 122, 119);
        background-image: url(@/assets/bg.png);
    }
}
</style>
