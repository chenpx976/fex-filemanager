### [百度FEX笔试题](https://github.com/fex-team/interview-questions/blob/master/coding.md)

#### 项目记录：

 - 项目基于PHP框架`Laravel`
 - 前端样式`bootstrap`
 - 使用构建工具`Gulp`打包静态资源
 - 使用`React`展现页面，数据使用`Ajax`请求后端`PHP`,更新`State`
 - 实现`修改文件名、创建文件夹、上传文件、删除文件、双击进入下一级目录、目录导航`

#### 优化TODO

  - [ ] 优化后端返回的数据格式，写的匆忙，需要规范一下
  - [ ] 调整`FileApiManager`,需要和优化数据并行，写的太粗暴了
  - [ ] 调整`React`组件结构,增加`Mixin`,减少重复代码,优化`props`的传递
  - [ ] 优化文件夹展现方式,实现windows的资源管理器右侧的树状
  - [ ] 首次加载太慢,需要添加载入的`Loading`,`Ajax`请求的过程也可以加入
  - [ ] 添加`message`/`confim`/`alert`组件,优化操作体验

#### 搭建步骤

 - `git clone https://github.com/chenpx976/fex-filemanager.git`
 - `cd fex-filemanager`
 - `composer install`
 - `npm install`
 - `gulp`
 - `cp .env.example .env`
 - `php artisan key:generate`
 - `php artisan serve`
 - open [http://localhost:8000/](http://localhost:8000/)
