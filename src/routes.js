import React from "react";
import {Router, Route} from "react-router";

import Main from "./Main";
import About from "./pages/About/About";
/**
 * The React Router routes for both the server and the client.
 */

 const routes = (
   <Router>
     <Route path="/" component={Main}>
       <Route path="/about" component={About} />
     </Route>
   </Router>
 );

module.exports = routes;
