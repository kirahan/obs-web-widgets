<template>
    <div class="source">
        <div class="content">
            <img src="@/assets/logo-r.png" alt="">
            <p>您添加了一个浏览器源</p>
            <p>浏览器源允许您显示一个网页上的web页面或者本地html文件</p>
            <p>请配置您要显示的URL</p>
        </div>

        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
setup() {

},
})
</script>


<style lang="scss" scoped>

    .source{
        width: 100vw!important;
        height: 100vh!important;
        background-color: #E8F1FF;
        .content{
            padding-top: 200px;
            img{
                width:100px;
            }
            p{
                font-size: 24px;
                font-weight: bold;
            }
        }
    }
</style>