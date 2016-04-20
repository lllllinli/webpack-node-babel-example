// ES6 ES7 套件
import babelPolyfill from "babel-polyfill";
// web app
import koa from "koa";
import koaStatic from "koa-static";
// node tools
import path from "path";

//react
import { renderToString } from "react-dom/server";
import { match, RouterContext } from "react-router";
// import routes from "./router";

const port = 3000;
const hostname = "localhost:";
const app = koa();

const staticPath = path.join(__dirname, "./static");
const viewPath = path.join(__dirname ,"/views");






// 靜態檔案路徑
app.use(koaStatic(staticPath));

app.use(function *(next){
  yield (() => {
    
  });
});

app.listen(port, () => {
	console.info('==> ✅  Server is listening');
	console.info('==> 🌎  Go to http://%s:%s', hostname, port);
});
