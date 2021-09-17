import React from "react";
import {
  BrowserRouter as Router,
  // HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { About, Home, Contact, Gallery } from "../pages";
import { ScrollToTop } from "./ScrollTopTop";

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <main className="App">
          <Switch>
            <Route exact={true} path={"/"}>
              <Home />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/about"}>
              <About />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/gallery"}>
              <Gallery />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/contact"}>
              <Contact />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
        </main>
      </ScrollToTop>
    </Router>
  );
};

export default Routes;
