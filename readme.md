### [百度FEX笔试题](https://github.com/fex-team/interview-questions)

#### 项目记录：

 - 项目基于PHP框架`Laravel`
 - 前端技术选择`bootstrap`/`jquery`
 - 使用构建工具`Gulp`打包静态资源
 - 搭建步骤：
	 - `composer install`
	 - `npm i`
	 - `gulp`
 - 添加`helper`函数
	 - 在`composer.json`配置`autoload`加载`files`
 - 尝试使用React
	 - ajax请求数据后更新`state`

```javascript
this.setState({
	data: data.data,
	links: data.links,
	path: data.path
});
```


#### 项目要求：
* 后端可以使用任意自己喜欢的语言，比如 PHP、Python、Java 或 Node。
* 请记录下你在解决这个问题过程中的思考，你是如何一步步解决的，以及遇到哪些技术问题和感想等。
* 将源码放在 github 上。

建议：使用各种你认为最优秀的技术（工具、框架、库等），展现你的知识面。

#### 在线网盘

实现通过 Web 管理本地文件夹的功能，需求如下：

* 配置将某个本地文件夹作为主目录。
* 前端展现可以类似百度网盘（或者 Windows 资源管理器及 Mac Finder 等），可以修改文件名、创建文件夹、上传文件、删除文件等。
* 更多功能可以自由发挥，包括展现方面可以自己设计。
* 可以思考一下如何更好的管理文件？是否有更好的信息展现方式？

