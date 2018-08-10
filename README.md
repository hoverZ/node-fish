## 开发文档
### 项目目录说明

项目入口：app.js

汇总路由文件：route.js

模块路由文件：./routes/{module_name}.js

模块业务代码所在目录：./modules/{module_name}/

### 创建一个模块（以 project 模块为例）

- 在 ./modules 下创建 project 目录作为业务代码所在目录；
- 在 ./routes 下创建对应的模块路由文件，进行配置；
- 最后在 ./route.js 中引入路由文件


## 相关包文档

https://www.npmjs.com/package/mysql  mysql
