# vscode-i18n
一个用于vscode插件的i18n简易方案，可以用于vscode环境和普通node环境

## 安装
```
npm install vscode-i18n --save
```

## 使用

```js
const i18n = require('../out/index')
```

### 初始化i18n目录和默认语言
init(i18nDirPath, defaultLanguage)
* **i18nDirPath** 必选，i18n目录，默认为当前进程目录下的“i18n”文件夹
* **defaultLanguage** 可选，默认语言，默认为“en”

```js
i18n.init('./i18n', 'en')
```

### 获取当前语言

```js
i18n.locale
```

### 本地化字符串
localize(key)

```js
const localize = i18n.localize
localize('hello')
```

## 注意事项
* 本地化文件仅支持json格式，文件名全小写，分隔符为“-”，例如：zh.json或zh-cn.json
* 字符串查询返回优先级：语言全名（例如：zh-cn） -> 主语言（例如：zh） -> 默认语言（en） -> KEY
