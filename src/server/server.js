// ES6 ES7 套件
import babelPolyfill from "babel-polyfill";
// web app
import koa from "koa";
import logger  from "koa-logger";
import koaStatic from "koa-static";
import route from "koa-route";
import Jade from "koa-jade";
// node tools
import path from "path";
import reactRouterHandler from "./router-handler";

import api from "./api/api";
//
import open from "open";


const app = koa();
const port = process.env.PORT || 3000;
const hostname = "localhost:";
const staticPath = path.join(__dirname, "..", "./static");
const viewPath = path.join(__dirname ,"/views");
const jade = new Jade({
  viewPath: path.join("./src", "/server", "/views"),
  debug: true,
  app: app
});
const isDev = (() => {return process.env.NODE_ENV === 'dev';})();


app.use(logger());
// 靜態檔案路徑
app.use(koaStatic("./static"));
// API
api(app);
// react-router handler
app.use(reactRouterHandler);
process.env.HELLO_MSG
// start app
app.listen(port, () => {
	console.info('==> ✅  Server is listening');
	console.info('==> 🌎  Go to http://%s:%s', hostname, port);
  if (isDev) {
    open(`http://localhost:3000`);
  }
});
