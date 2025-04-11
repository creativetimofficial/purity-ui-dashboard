/*!

=========================================================
* Purity UI Dashboard - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/purity-ui-dashboard/blob/master/LICENSE.md)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";

// Log the initial Redux state
console.log("Initial Redux State:", store.getState());

// Check if user is authenticated
const isAuthenticated = () => {
  const token = store.getState().auth.token;
  const isSignInPage = window.location.pathname === '/auth/signin';
  return token !== null && !isSignInPage;
};

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Route path={`/admin`} component={AdminLayout} />
        <Route path={`/rtl`} component={RTLLayout} />
        <Redirect from={`/`} to={isAuthenticated() ? "/admin/dashboard" : "/auth/signin"} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
