import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AdminCreatePage from "../page/admin/create";
import AdminListPage from "../page/admin/list"; 
import AdminEditPage from "../page/admin/edit";

import RoleCreatePage from "../page/role/create";
import RoleListPage from "../page/role/list";
import RoleEditPage from "../page/role/edit";

import AdminPrivateRoute from "./adminPrivateRoute";
import LoginPage from "../page/auth/login";

export default function Routes() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={AdminListPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/admin/login" component={LoginPage} />

          <AdminPrivateRoute
            component={AdminListPage}
            path="/"
            exact
          />
          <AdminPrivateRoute
            component={AdminListPage}
            path="/admins"
            exact
          />
          
          <Route exact path="/admins" component={AdminListPage} />
          <Route exact path="/admins/create" component={AdminCreatePage} />
          <Route exact path="/admins/edit/:id" component={AdminEditPage} />

          <Route exact path="/roles" component={RoleListPage} />
          <Route exact path="/roles/create" component={RoleCreatePage} />
          <Route exact path="/roles/edit/:id" component={RoleEditPage} />

        </Switch>
      </Router>
    </React.Fragment>
  );
}