#Webpack Server Example


(1.) React Server Side Render.

(2.) NodeJs KoaJs Server.


##目前功能：

###環境版本

  - NodeJs [v5.9.0]
  - JS [ES6] [ES7]
  - CSS3

###Server - NodeJs Server Side:

  - [Koa](https://github.com/koajs/koa)  (Node Wed Framework)
  - [Jabe](http://jade-lang.com/)  (Html Template)
  - React Server Side Render [exsample](https://github.com/mhart/react-server-example)
  - [React Router](https://github.com/reactjs/react-router) (Router Controller)
  - [Node Fetch](https://www.npmjs.com/package/node-fetch) (GET/POST API)

###Client - React Commponent

ReactJs，由於 Virtual Dom 不利 SEO, 選擇使用不需要ＳＥＯ的模組。

  - [ReactJs](https://facebook.github.io/react/)

###Client - Comman Commponent

前端非 React Component ,使用 Jquery 針對已存在的 Dom 物件進行操作。

  - [JQuery](https://jquery.com/)

###Style

CSS framework ,CSS開發工具。

  - [bootstrap v.3](http://getbootstrap.com/)
  - [sass](http://sass-lang.com/)

##Tools

前端開發工具。

  - [Webpack](https://webpack.github.io/)

    use in server side NodeJs and client side React
    * style - sass / compass

    * plugins
      + [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) (建立 css 檔案工具)

    Source: [webpack plugins list](https://github.com/webpack/docs/wiki/list-of-plugins)  

    * loaders
      + [json-loader](https://github.com/webpack/json-loader)
      + [file-loader](https://github.com/webpack/file-loader)
      + [babel-loader](https://github.com/babel/babel-loader)
      + [url-loader](https://github.com/webpack/url-loader)

    Source: [webpack loaders list](https://webpack.github.io/docs/list-of-loaders.html)

##系統安裝

安裝環境設定。

  - [Mac Setting](https://github.com/lllllinli/MacOSX-Setting)

##Installation

```
// 安裝
$npm install
```

##Build

```
// 會同時建出 server 和 client 的程式碼
npm run build
```

##Dev Start

```
npm run dev
```

##product

```
npm start
```



##Router  架構

後端動態產生 Dynamic Routing

[exsample](https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md)


##Sass  Architecture

傾向選擇的架構。

  - 1.Style Prototypes
    依照 Atomic Design 做網頁的模組建置。

頁面模組結構有：

  Atom 原子結構

  - pagee
  - widget
  - component


```
scss/
|– style.scss    # Manifest
|– partials/
|  |– base/
|  |  |– _content.scss
|  |  |– content
|  |  |  |– _variables.scss    # Component specific variables  
|  |  |  |– _extends.scss      # Component specific extends
|  |  |  |– _mixins.scss       # Component specific mixins
|  |– components/
|  |  |– _message.scss
|  |  |– message
|  |  |  |– _variables.scss
|  |  |  |– _extends.scss
|  |  |  |– _mixins.scss
|  |– global/
|  |  |– _variables.scss
|  |  |– _extends.scss
|  |  |– _mixins.scss
|  |  |– _functions.scss
|  |– layouts/
|  |  |– _article.scss
|  |  |– article
|  |  |  |– _variables.scss
|  |  |  |– _extends.scss
|  |  |  |– _mixins.scss
```


參考文件: [A Look at Different Sass Architectures](https://www.sitepoint.com/look-different-sass-architectures/)





#NodeJs on Microsoft Azure

在 Azure Pass 上的 Web Service  注意事項：

 * 01. NodeJs 版本無法控制。
 * 02. NodeJs 無法自己啟動。
 * 03. 無法使用 npm 安裝 node moudle。 需上傳整個 node_modules 資料夾
 * 04. 程式進入點設定，使用 IIS 的 web config。
 * 05. 上傳方式指定 git land
