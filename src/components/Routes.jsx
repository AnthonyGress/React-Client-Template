import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { About, Home, Contact, Gallery } from "../pages";
// import { NavbarBar } from "./Navbar";
import ScrollToTop from "../helpers/ScrollToTop";
const Routes = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <main className="App">
          {/* <NavbarBar /> */}
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
    </HashRouter>
  );
};

export default Routes;
