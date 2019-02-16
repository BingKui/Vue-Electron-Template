# Vue-Electron-Template

Vue2 + Electron4开发客户端软件的模板。

## 依赖库

- Vue2
- Electron4
- vue-router
- vuex

## 目录结构

```javascript
vue-electron-template
    |---assets   资源目录，存放图片等资源
    |---build    打包配置文件地址，存放 webpack 配置文件
    |---electron 存放 electron 相关的功能文件
    |---node     存放 node 相关模块操作的封装方法
    |---dist     打包后生成的目录，存放打包后的文件，默认不存在，打包后自动生成
    |---public   公共资源存放地址，存放模板等文件
    |---src      代码存放目录
        |---common      存放公共 js 文件目录
        |---components  存放 vue 组件目录
        |---constants   常量参数文件存放目录
        |---mock        模拟数据存放目录
        |---router      路由文件存放目录
        |---store       数据管理文件存放目录
        |---styles      样式文件存放地址，存放样式文件以及 less 变量文件
        |---views       页面视图存放目录，存放页面视图文件
```

## 添加第三方组件库

### iView

安装

```shell
# 安装 IView 组件库
yarn add iview -S
# 安装 babel 插件
yarn add babel-plugin-import -D
```

配置 `.babelrc`

```json
{
    "presets": [
        ["env", {
            "modules": "commonjs",
            "targets": {
                "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
            }
        }],
        "stage-0"
    ],
    "plugins": [
        "add-module-exports",
        "transform-runtime",
        "transform-decorators-legacy",
        ["import", {
            "libraryName": "iview",
            "libraryDirectory": "src/components"
        }]
    ]
}
```

页面按需引入

```javascript
import { Button } from 'iview';
```

### Element

安装

```shell
# 安装 element
yarn add element-ui -S
# 安装 babel 插件
yarn add babel-plugin-component -D
```

配置 `.babelrc`

```json
{
    "presets": [
        ["env", {
            "modules": "commonjs",
            "targets": {
                "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
            }
        }],
        "stage-0"
    ],
    "plugins": [
        "add-module-exports",
        "transform-runtime",
        "transform-decorators-legacy",
        ["component", {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
        }]
    ]
}
```

页面按需引入

```javascript
import { Button } from 'element-ui';
```