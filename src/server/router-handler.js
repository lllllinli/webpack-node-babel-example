import Jade from "koa-jade";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { match, RouterContext } from "react-router";
import routes from "./routes";

export default function *(next){
  const location = this.path;
  /* - use React Router - */
  match({ routes, location: location}, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
			this.redirect(redirectLocation.pathname + redirectLocation.search, '/');
			return;
		}

		if (error || !renderProps) {
      return;
		}

    const content = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);
    // 每一頁引入 , 不同的 client js , 不同的 client css
    const webTitle = 'Koa-jade: a Jade middleware for Ko';
    const templeteOptions =  {
          title    : webTitle,
          content  : content,
          clientJs : ''
    };

    this.render('index.jade', templeteOptions);
  });
  /* - match end - */
  yield next;
}
