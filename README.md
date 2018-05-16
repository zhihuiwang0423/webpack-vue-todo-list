vue+ssr+tech
第九课：
搭建vue，webpack 构建工具，
第八课：
类库文件单独打包
第七课：
webpack 优化
npm i extract-text-webpack-plugin
将css单独拿出来操作
开发环境和正式环境的module配置不同，需要区分。
t

第六课：vue todo list
header.vue
todo.vue
item.vue
tabs.vue
footer.jsx
第五课：
npm i postcss-loader autoprefixer babel-loader babel-core
postcss.config.js 自动化加前缀
.babelrc 
npm i babel-preset-env babel-plugin-transform-vue-jsx


第四课：
数据绑定：双向绑定
vue文件开发 方式 html,js ,css
render 方法： 将template里每个标签，使用js的形式创建，
生命周期：
是组件，就有生命周期。
computed 数据变化，重新计算 
第三课：
webpack-dev-server
配置package.json
“build”: ‘cross-env NODE_ENV=production webpack —config webpack.config.js"
“dev”: “cross-env NODE_ENV=development webpack-dev-server —config webpack.config.js”

webpack.config.js
 target: ‘web’， 客户端开发 
npm i html-webpack-plugin
webpack.DefinePlugin 判断当前环境
区分打包，
hotModuleReplacePlugin 热加载，不用刷新页面，即可更新数据
devtool=‘#cheap-module-eval-source-map’ 页面不需要编译，将源码在浏览器中显示。
第二课：
webpack.config.js里配置css-loader, url-loader
npm i style-loader url-loader file-loader
第一章学习笔记：
1.vscode 安装插件： 
editorConfig for vs code
eslint
gitignore
language-stylus
nunjucks
on dark pro
postcss syntx 
vetur
view in browser
vscode-icons
2.
打开首选项的快捷键：command + 逗号
首选项设置：files.autoSave: onFocusChange 文件失去焦点的时候自动保存
edit.tabSize: 2 
3.
初始化目录：npm init 初始化npm的项目，生成Package.json
npm i webpack vue vue-loader 安装
npm i css-loader vue-template-compiler 这里根据上面安装完成之后的warning 查看到的。
新建 src/app.vue
mkdir src 
touch app.vue
4.写vue代码
template script style三部分
实现功能 ，id名称叫test的div，内容叫abc.颜色为红色
5.如何实现运行
touch webpack.config.js
src 目录下 touch index.js
index.js文件编写，引入app.vue文件，作为webpack的entry的文件
配置webpack.config.js文件
entry，output， module
6.在package.json文件里配置脚本，运行代码。
