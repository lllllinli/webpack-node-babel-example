import React from "react";
import {Router, Route} from "react-router";

import App from "./app";
/**
 * The React Router routes for both the server and the client.
 */
module.exports = (
	<Router>
		<Route path="/" component={App}>
		</Route>
	</Router>
);
