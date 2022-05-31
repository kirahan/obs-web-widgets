<template>
  <div class="container">
    <div class="login-left">
      <div class="logo-group">
        <span>欢迎使用直播助手</span>
      </div>
      <div class="pw-group">
        <div class="input-group">
          <input
            v-model="account"
            class="inputarea"
            placeholder="账号"
          />
        </div>
        <div class="input-group">
          <input
            v-model="password"
            type="password"
            class="inputarea"
            placeholder="密码"
          />
        </div>
        <div class="auto-login-group">
          <el-checkbox v-model="auto_login" label="下次自动登录" size="large" />
        </div>
      </div>
      <div class="action-group">
        <el-button @click="login" type="primary" class="login-btn">
          登录
        </el-button>
        <!-- <span class="submit-btn" @click="openlink('https://www.baidu.com')">注册账号</span> -->
      </div>
    </div>

    <!-- <div class="login-bottom">
      <img src="@/assets/logo-r.png" alt="">
    </div> -->
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
      account: "",
      password: "",
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
  // width: 1366px;
  // height: 1024px;
  height:100%;
  background: url(@/assets/bg2.jpg) no-repeat;
  background-size:cover;
  .login-left {
    @include flex(space-evenly, center, column);
    margin:auto;
    height: 400px;
    width: 500px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 10px 20px 50px rgba(134, 240, 161, 0.2);
    .logo-group {
      height: 10%;
      width: 300px;
      @include flex(space-evenly, center, row);
      .logo {
        width: 108px;
        height: 108px;
      }
      span {
        font-size: 28px;
        color: #3f8cff;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
    .pw-group {
      height: 40%;
      div {
        padding: 10px 0px;
      }
      .input-group {
        text-align: left;
        // width: 320px;

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
      width: 300px;
      @include flex(center, center, column);
      .login-btn {
        min-width: 100%;
        height:48px;
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

  .login-bottom{
    position:absolute;
    right: 80px;
    bottom: 80px;
    width:100px;
    height: 100px;
    background-color:grey;
    img{
      width: 50px;
      height: 50px;
      padding: 25px;
    }
  }
}
</style>
