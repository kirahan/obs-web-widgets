## 视联医疗直播助手开发文档

### Part 1 源码构成
1. 目录构成
|
├── C++端
|    ├── obs-studio：obs源码
|    |      ├── build：工程文件
|    |      └── rundir：编译生成的obs程序目录
|    ├── dependencies：obs编译的依赖包
|    |    ├── cef_binary_75.1.14+gc81164e+chromium-75.0.3770.100_windows64：CEF
|    |    ├── win64：64位版本各种依赖包集合
|    |    └── qt5.15.2：太大需要自行下载
|    ├── 打包脚本.nsi
|    └── obs-studio.ico
|
├── web端
|    └── Vue3+vite+typescript标准项目
2. 工作原理
- 登录+课程页面采用web技术开发，C++&Qt来完成推流任务
- 通过obs自带的CEF，创建一个顶部Qwidget,承载web页面
- 采用一个browser-worker页面完成通信
  - CEF和OBS在不同进程中，无法共享数据
  - 但是输入源中的browser源，可以与cef交互，能够传参和回调
  - 在登录期间给obs添加一个worker，点击课程列表之后自动销毁worker
- 通过传参和写入配置文件来实现最小化、关闭、传推流码等JS->CEF交互




### Part 2 源码编译
1. web端 [参考链接](https://www.vitejs.net/guide/static-deploy.html#building-the-app)
- 依赖：nodejs、npm、vue、vite
- dev: yarn dev
- build： yarn build

2. obs端 [参考链接](https://github.com/obsproject/obs-studio/wiki/build-instructions-for-windows)
- 依赖： Cmake、Visual Studio2019、Qt
- step1 通过cmake构建工程
  - deps
  - qt
  - cef
- step2 编译运行









### Part 3 源码解析
1. Web端
- login
- course
- worker

2. obs端
- window-basic-main.cpp
- obs-browser插件

### Part 4 打包发布
- web端
  - baseUrl
  - dev
- obs端
  - nisi脚本
  - 素材
    - obs.png
    - obs-studio.ico

