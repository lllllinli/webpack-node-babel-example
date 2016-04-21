// ES6 ES7 套件
import babelPolyfill from "babel-polyfill";
// web app
import koa from "koa";
import koaStatic from "koa-static";
// Jade - Html Templete
import Jade from "koa-jade";
// node tools
import path from "path";

//react
import React from "react";
import ReactDOMServer from "react-dom/server";

import { match, RouterContext } from "react-router";
//
import {Router, Route} from "react-router";

import routes from "./routes";

const port = 3000;
const hostname = "localhost:";
const app = koa();
const staticPath = path.join(__dirname, "./static");
const viewPath = path.join(__dirname ,"/views");
const jade = new Jade({
  viewPath: path.join("./src","/views"),
  debug: true,
  app: app
});

// 靜態檔案路徑
app.use(koaStatic(staticPath));

app.use(function *(next){
  const location = this.path;

  match({ routes, location: location}, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
			this.redirect(redirectLocation.pathname + redirectLocation.search, '/');
			return;
		}

		if (error || !renderProps) {
			return;
		}

    const content = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);
    const webTitle = 'Koa-jade: a Jade middleware for Koa';

    this.render('index.jade', {
          title: webTitle,
          content: content
    });
  });

  /**
  * End
  **/

});

app.listen(port, () => {
	console.info('==> ✅  Server is listening');
	console.info('==> 🌎  Go to http://%s:%s', hostname, port);
});
